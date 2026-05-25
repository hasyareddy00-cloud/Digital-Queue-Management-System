import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Timer, BellRing } from 'lucide-react';

export default function LiveQueue({ waiting, serving, totalWaiting, isPaused, isEmergency }) {
  const navigate = useNavigate();
  const myTokenNumber = localStorage.getItem('myTokenNumber') || '--';

  // Calculate position and time
  const myPosition = waiting.findIndex(t => t.tokenNumber === myTokenNumber);
  const peopleAhead = myPosition === -1 ? totalWaiting : myPosition;
  const avgServiceTime = 5; // 5 mins per person
  const estWaitTime = peopleAhead * avgServiceTime;

  // Notification logic
  let alertMode = 'normal';
  if (myPosition === 0) alertMode = 'next';
  if (serving?.tokenNumber === myTokenNumber) alertMode = 'serving';

  return (
    <div className="min-h-screen p-6 max-w-md mx-auto relative pt-16">
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold font-['Outfit']">Live Status</h2>
        <div className="flex items-center gap-2 bg-rose-500/10 text-rose-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-500/20">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
          Live
        </div>
      </div>

      {isEmergency && (
        <div className="bg-gradient-to-r from-rose-600 to-rose-500 p-6 rounded-2xl mb-8 shadow-[0_0_30px_rgba(225,29,72,0.4)] text-center text-white">
          <BellRing size={32} className="mx-auto mb-2 animate-pulse" />
          <h3 className="text-2xl font-bold mb-1">Emergency Priority</h3>
          <p>Please wait. The counter is currently handling a critical case.</p>
        </div>
      )}

      {isPaused && !isEmergency && (
        <div className="bg-amber-500/20 border border-amber-500/50 p-4 rounded-xl mb-6 flex items-center gap-3 text-amber-200">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
          <p className="font-semibold">Counter is on a brief hold. Please wait.</p>
        </div>
      )}

      {alertMode === 'serving' && !isPaused && !isEmergency && (
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 rounded-2xl mb-8 shadow-[0_0_30px_rgba(16,185,129,0.4)] text-center text-white">
          <BellRing size={32} className="mx-auto mb-2 animate-bounce" />
          <h3 className="text-2xl font-bold mb-1">It's Your Turn!</h3>
          <p>Please proceed to Counter 1.</p>
        </div>
      )}

      {alertMode === 'next' && (
        <div className="bg-rose-500/20 border border-rose-500/50 p-4 rounded-xl mb-6 flex items-center gap-3 text-rose-200">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></div>
          <p className="font-semibold">You are next in line! Get ready.</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="glass-panel p-5 text-center relative overflow-hidden">
          <div className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-2">Currently Serving</div>
          <div className="text-4xl font-bold font-['Outfit'] text-white">
            {serving ? serving.tokenNumber : '--'}
          </div>
        </div>

        <div className="glass-panel p-5 text-center relative overflow-hidden border-sky-500/30 bg-sky-500/5">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="text-sky-400 text-xs uppercase font-bold tracking-wider mb-2">Your Token</div>
            <div className="text-4xl font-bold font-['Outfit'] neon-text">
              {myTokenNumber}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 mb-8">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <Timer size={20} className="text-sky-400" />
          Queue Details
        </h3>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">People Ahead</span>
              <span className="font-bold">{peopleAhead}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.max(5, (peopleAhead / (totalWaiting || 1)) * 100)}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">Est. Wait Time</span>
              <span className="font-bold text-amber-400">{estWaitTime} mins</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.max(5, (estWaitTime / 60) * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-4 flex items-start gap-3">
        <Users size={20} className="text-slate-400 shrink-0 mt-0.5" />
        <p className="text-sm text-slate-400">
          Total people currently waiting in the general queue: <strong className="text-white">{totalWaiting}</strong>
        </p>
      </div>
    </div>
  );
}
