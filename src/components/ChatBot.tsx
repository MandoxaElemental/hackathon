'use client'
import { useState } from 'react';

import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';

const clientId = "b69c8a7e-130a-4055-a667-34f1f9feef03";

const configuration: Configuration = {
};

export default function ChatBot() {
  const client = getClient({
    clientId,
  });

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WebchatProvider client={client} configuration={configuration}>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? 'block' : 'none',
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}