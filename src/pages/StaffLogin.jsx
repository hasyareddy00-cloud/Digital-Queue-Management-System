import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowLeft } from 'lucide-react';

// Hardcoded Staff Users for Demo (Moved from backend)
const STAFF_USERS = [
  { username: 'ravi', password: '123', name: 'Ravi', department: 'Hospital Labs' },
  { username: 'ramu', password: '123', name: 'Ramu', department: 'Hospital Reception' },
  { username: 'anvitha', password: '123', name: 'Anvitha', department: 'Bank Teller 1' },
];

export default function StaffLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      const user = STAFF_USERS.find(
        u => u.username.toLowerCase() === credentials.username.toLowerCase() && 
             u.password === credentials.password
      );

      if (user) {
        // Exclude password from the stored object
        const { password, ...userProfile } = user;
        localStorage.setItem('staffUser', JSON.stringify(userProfile));
        navigate('/admin');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 500); // Simulate network delay
  };

  return (
    <div className="min-h-screen p-6 max-w-md mx-auto relative pt-24 flex flex-col items-center">
      <button 
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="w-full">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-sky-500/10 border border-sky-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
            <Lock className="text-sky-400" size={32} />
          </div>
          <h2 className="text-3xl font-bold font-['Outfit'] mb-2">Staff Portal</h2>
          <p className="text-slate-400">Secure access for authorized personnel</p>
          <p className="text-slate-500 text-xs mt-2">(Demo logins: ravi/123 or anvitha/123)</p>
        </div>

        <form onSubmit={handleLogin} className="glass-panel p-8 w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-indigo-500"></div>
          
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/50 text-rose-400 p-3 rounded-lg text-sm mb-6 text-center">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                required
                value={credentials.username}
                onChange={e => setCredentials({...credentials, username: e.target.value})}
                className="glass-input pl-12"
                placeholder="Username (e.g., ravi, anvitha)"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                required
                value={credentials.password}
                onChange={e => setCredentials({...credentials, password: e.target.value})}
                className="glass-input pl-12"
                placeholder="Password (e.g. 123)"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary w-full mt-4"
            >
              {loading ? 'Authenticating...' : 'Secure Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
