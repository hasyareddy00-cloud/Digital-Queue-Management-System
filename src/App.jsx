import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import LiveQueue from './pages/LiveQueue';
import Admin from './pages/Admin';
import StaffLogin from './pages/StaffLogin';

function App() {
  // Central Application State
  const [tokens, setTokens] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);

  // Helper Functions
  const addToken = (newToken) => {
    if (newToken.priority) {
      setTokens([newToken, ...tokens]);
    } else {
      setTokens([...tokens, newToken]);
    }
  };

  const updateTokenStatus = (id, status) => {
    setTokens(tokens.map(t => 
      t._id === id ? { ...t, status } : t
    ));
  };

  const callNext = () => {
    // End current serving
    const updatedTokens = tokens.map(t => 
      t.status === 'serving' ? { ...t, status: 'completed' } : t
    );
    
    // Find next waiting
    const nextIndex = updatedTokens.findIndex(t => t.status === 'waiting');
    if (nextIndex !== -1) {
      updatedTokens[nextIndex].status = 'serving';
    }
    setTokens(updatedTokens);
  };

  const togglePause = () => setIsPaused(!isPaused);
  
  const toggleEmergency = () => {
    if (!isEmergency) {
      // Add Emergency token
      const emgToken = {
        _id: Date.now().toString(),
        tokenNumber: 'EMG-' + Math.floor(Math.random() * 1000),
        name: 'EMERGENCY CASE',
        category: 'Critical',
        priority: true,
        status: 'waiting',
        createdAt: new Date()
      };
      setTokens([emgToken, ...tokens]);
    }
    setIsEmergency(!isEmergency);
  };

  // Derived state for easy access
  const waitingTokens = tokens.filter(t => t.status === 'waiting');
  const servingToken = tokens.find(t => t.status === 'serving') || null;

  return (
    <BrowserRouter>
      <div className="min-h-screen relative overflow-hidden text-slate-100">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-600/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Booking addToken={addToken} />} />
            <Route 
              path="/live" 
              element={<LiveQueue 
                waiting={waitingTokens} 
                serving={servingToken} 
                totalWaiting={waitingTokens.length} 
                isPaused={isPaused} 
                isEmergency={isEmergency} 
              />} 
            />
            <Route path="/staff-login" element={<StaffLogin />} />
            <Route 
              path="/admin" 
              element={<Admin 
                waiting={waitingTokens}
                serving={servingToken}
                totalWaiting={waitingTokens.length}
                isPaused={isPaused}
                isEmergency={isEmergency}
                callNext={callNext}
                togglePause={togglePause}
                toggleEmergency={toggleEmergency}
              />} 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
