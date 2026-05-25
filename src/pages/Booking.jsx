import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowLeft, CheckCircle2, Ticket } from 'lucide-react';

export default function Booking({ addToken }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', category: 'General' });
  const [generatedToken, setGeneratedToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      // Generate a basic token string
      const prefix = formData.category.charAt(0).toUpperCase();
      const tokenString = `${prefix}-${Math.floor(Math.random() * 900 + 100)}`;
      
      const newToken = {
        _id: Date.now().toString(),
        tokenNumber: tokenString,
        name: formData.name,
        phone: formData.phone,
        category: formData.category,
        priority: false,
        status: 'waiting',
        createdAt: new Date()
      };

      addToken(newToken);
      setGeneratedToken(newToken);
      localStorage.setItem('myTokenNumber', tokenString);
      setLoading(false);
    }, 500); // Simulate brief network delay
  };

  return (
    <div className="min-h-screen p-6 max-w-md mx-auto relative pt-12">
      <button 
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={24} />
      </button>

      {!generatedToken ? (
        <div className="mt-12">
          <div className="mb-10">
            <h2 className="text-3xl font-bold font-['Outfit'] mb-2">Book Token</h2>
            <p className="text-slate-400">Enter your details to join the queue.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="glass-input peer pt-6 pb-2"
                placeholder=" "
              />
              <label className="absolute left-4 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-sky-400">
                Full Name
              </label>
            </div>

            <div className="relative group">
              <input 
                type="tel" 
                required
                pattern="[0-9]{10}"
                maxLength="10"
                minLength="10"
                title="Please enter exactly 10 digits"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                className="glass-input peer pt-6 pb-2"
                placeholder=" "
              />
              <label className="absolute left-4 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-sky-400">
                Phone Number
              </label>
            </div>

            <div className="relative group">
              <select 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="glass-input pt-6 pb-2 appearance-none"
              >
                <optgroup label="🏥 Hospital Services" className="bg-slate-900 text-sky-400 font-bold">
                  <option value="Consultation" className="text-white font-normal">Doctor Consultation</option>
                  <option value="Pharmacy" className="text-white font-normal">Pharmacy / Medicines</option>
                  <option value="Lab Test" className="text-white font-normal">Lab Test / Blood Work</option>
                </optgroup>
                
                <optgroup label="🏦 Bank Services" className="bg-slate-900 text-sky-400 font-bold">
                  <option value="Cash Deposit" className="text-white font-normal">Cash Deposit / Withdrawal</option>
                  <option value="Loan Inquiry" className="text-white font-normal">Loan Inquiry</option>
                  <option value="Account Opening" className="text-white font-normal">Account Opening</option>
                </optgroup>

                <optgroup label="🏢 General Services" className="bg-slate-900 text-sky-400 font-bold">
                  <option value="General" className="text-white font-normal">General Inquiry</option>
                  <option value="Customer Support" className="text-white font-normal">Customer Support</option>
                </optgroup>
              </select>
              <label className="absolute left-4 top-1 text-xs text-sky-400">
                Service Category
              </label>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary mt-8"
            >
              {loading ? 'Generating...' : 'Generate Token'}
              {!loading && <Ticket size={20} />}
            </button>
          </form>
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="text-emerald-400" size={32} />
          </div>
          
          <h2 className="text-2xl font-bold mb-2">Token Generated!</h2>
          <p className="text-slate-400 mb-8">Please save this QR code or token number.</p>

          <div className="glass-panel p-8 w-full relative overflow-hidden mb-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-indigo-500"></div>
            
            <div className="text-sm text-slate-400 mb-1">Your Token Number</div>
            <div className="text-6xl font-bold font-['Outfit'] neon-text mb-6">
              {generatedToken.tokenNumber}
            </div>
            
            <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-lg">
              <QRCodeSVG value={JSON.stringify({ tokenNumber: generatedToken.tokenNumber })} size={150} />
            </div>

            <div className="flex justify-between text-sm text-slate-400 border-t border-slate-700/50 pt-4 mt-2">
              <span>Name: <span className="text-white">{generatedToken.name}</span></span>
              <span>Type: <span className="text-white">{generatedToken.category}</span></span>
            </div>
          </div>

          <button 
            onClick={() => navigate('/live')}
            className="btn-primary"
          >
            Track Live Status
          </button>
        </div>
      )}
    </div>
  );
}
