'use client'
import { useEffect, useState } from 'react'
interface BotpressWebChat {
    init: (config: Record<string, unknown>) => void
    open: () => void
    close: () => void
  }
  
  declare global {
    interface Window {
      botpressWebChat: BotpressWebChat
    }
  }
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'b69c8a7e-130a-4055-a667-34f1f9feef03',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'b69c8a7e-130a-4055-a667-34f1f9feef03',
        lazySocket: true,
        enableConversationDeletion: true,
        showCloseButton: true,
        themeName: 'prism',
        stylesheet: 'https://cdn.botpress.cloud/webchat/v1/themes/prism.css',
      })
    }
    document.body.appendChild(script)
  }, [])
  const toggleChat = () => {
    if (window.botpressWebChat) {
      if (isOpen) {
        window.botpressWebChat.close()
      } else {
        window.botpressWebChat.open()
      }
      setIsOpen(!isOpen)
    }
  }
  return (
    <button
      onClick={toggleChat}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: '#000',
        color: '#fff',
        padding: '1rem 1.5rem',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      {isOpen ? 'Close Chat' : 'Open Chat'}
    </button>
  )
}
export default ChatBot