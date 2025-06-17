'use client'

import './pwaActions.scss'

import InstallPrompt from '../installPrompt'
import PushNotificationManager from '../pushNotificationManager'

export default function PwaActions() {
   return (
      <div className="pwa-actions container">
         <PushNotificationManager />
         <InstallPrompt />
      </div>
   )
}
