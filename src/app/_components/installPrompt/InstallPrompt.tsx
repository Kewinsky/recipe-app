'use client'

import { useState, useEffect } from 'react'

export default function InstallPrompt() {
   const [isIOS, setIsIOS] = useState(false)
   const [isStandalone, setIsStandalone] = useState(false)
   const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null)

   useEffect(() => {
      const handler = (e: Event) => {
         e.preventDefault()
         setDeferredPrompt(e)
      }

      setIsIOS(
         /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !(window as any).MSStream,
      )

      setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)

      window.addEventListener('beforeinstallprompt', handler)

      return () => {
         window.removeEventListener('beforeinstallprompt', handler)
      }
   }, [])

   if (isStandalone) {
      // Don't show install button if already installed
      return null
   }

   return (
      <div className="pwa-actions-group">
         <h3>Install App</h3>
         <button
            onClick={async () => {
               if (deferredPrompt && 'prompt' in deferredPrompt) {
                  const promptEvent = deferredPrompt as any
                  promptEvent.prompt()

                  const result = await promptEvent.userChoice

                  if (result.outcome === 'accepted') {
                     // prevent re-showing
                     setDeferredPrompt(null)
                  }
               }
            }}
         >
            Add to Home Screen
         </button>
         {isIOS && (
            <p>
               To install this app on your iOS device, tap the share button
               <span role="img" aria-label="share icon">
                  {' '}
                  ⎋{' '}
               </span>
               and then "Add to Home Screen"
               <span role="img" aria-label="plus icon">
                  {' '}
                  ➕{' '}
               </span>
               .
            </p>
         )}
      </div>
   )
}
