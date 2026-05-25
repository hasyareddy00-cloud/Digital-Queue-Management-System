import { useNavigate } from 'react-router-dom';
import { Activity, Ticket, MonitorPlay, ShieldCheck } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex items-center gap-3 mb-12">
        <div className="p-3 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.4)]">
          <Activity size={32} className="text-white" />
        </div>
        <h1 className="text-4xl font-bold font-['Outfit'] tracking-tight">DIGITAL QUEUE MANAGEMENT SYSTEM</h1>
      </div>

      <div className="text-center max-w-2xl mb-16">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Smarter Waiting for a <span className="neon-text">Digital World</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Join the queue from anywhere. Track your turn in real-time. No more crowded waiting rooms or uncertain wait times.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-16">
        <div 
          onClick={() => navigate('/book')}
          className="glass-panel p-8 cursor-pointer hover:-translate-y-1 transition-transform duration-300 group"
        >
          <div className="w-14 h-14 rounded-full bg-sky-500/10 flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
            <Ticket className="text-sky-400" size={28} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Book a Token</h3>
          <p className="text-slate-400">Generate your digital token instantly and secure your spot in line.</p>
        </div>

        <div 
          onClick={() => navigate('/staff-login')}
          className="glass-panel p-8 cursor-pointer group hover:bg-slate-800/80 transition-all duration-300 relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
            <ShieldCheck className="text-indigo-400" size={28} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Staff Portal</h3>
          <p className="text-slate-400">Manage queues, call tokens, and view real-time analytics.</p>
        </div>
      </div>
      
      <button 
        onClick={() => navigate('/live')}
        className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
      >
        <MonitorPlay size={20} />
        <span>View Public Display Board</span>
      </button>
    </div>
  );
}
