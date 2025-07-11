'use client'

import { useState, useEffect } from 'react'
import {
   sendNotification,
   subscribeUser,
   unsubscribeUser,
} from 'src/app/actions'

function urlBase64ToUint8Array(base64String: string) {
   const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
   const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

   const rawData = window.atob(base64)
   const outputArray = new Uint8Array(rawData.length)

   for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
   }
   return outputArray
}

export default function PushNotificationManager() {
   const [isSupported, setIsSupported] = useState(false)
   const [subscription, setSubscription] = useState<PushSubscription | null>(
      null,
   )

   useEffect(() => {
      if ('serviceWorker' in navigator && 'PushManager' in window) {
         setIsSupported(true)
         registerServiceWorker()
      }
   }, [])

   async function registerServiceWorker() {
      const registration = await navigator.serviceWorker.register('/sw.js', {
         scope: '/',
         updateViaCache: 'none',
      })
      const sub = await registration.pushManager.getSubscription()
      setSubscription(sub)
   }

   async function subscribeToPush() {
      const registration = await navigator.serviceWorker.ready
      const sub = await registration.pushManager.subscribe({
         userVisibleOnly: true,
         applicationServerKey: urlBase64ToUint8Array(
            process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
         ),
      })
      setSubscription(sub)
      const serializedSub = JSON.parse(JSON.stringify(sub))
      await subscribeUser(serializedSub)

      if (sub) {
         await sendNotification('Witaj w Aplikacji PWA Recinder!')
      }
   }

   async function unsubscribeFromPush() {
      await subscription?.unsubscribe()
      setSubscription(null)
      await unsubscribeUser()
   }

   if (!isSupported) {
      return <p>Push notifications are not supported in this browser.</p>
   }

   return (
      <div className="pwa-actions-group">
         <h3>Push Notifications</h3>
         {subscription ? (
            <button onClick={unsubscribeFromPush}>Unsubscribe</button>
         ) : (
            <button onClick={subscribeToPush}>Subscribe</button>
         )}
      </div>
   )
}
