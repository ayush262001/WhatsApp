import './App.css';

//imports from component

import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/ChatSection/Chat';

function App() {
  return (
    <div className="app">
      <div className="app_body">
             <Sidebar />
             <Chat />
        </div>
    </div>
  );
}

export default App;
