import { ChatEngine } from 'react-chat-engine';
import React from 'react';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="3dfdd5fd-2a49-450d-8e7f-a21a4b8465ee"
            userName="ckim77"
            userSecret="Fridge_779416"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;