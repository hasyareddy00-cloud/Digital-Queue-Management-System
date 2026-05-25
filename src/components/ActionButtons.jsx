
import { QrCode, XCircle } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className="animate-slide-up" style={{ ...styles.container, animationDelay: '0.2s' }}>
      <button style={styles.primaryBtn}>
        <QrCode size={20} />
        Check-in at Kiosk
      </button>
      <button style={styles.secondaryBtn}>
        <XCircle size={20} />
        Cancel Token
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '0 8px',
  },
  primaryBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    padding: '16px',
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '12px',
    boxShadow: 'var(--shadow-md)',
  },
  secondaryBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    padding: '16px',
    backgroundColor: 'transparent',
    color: 'var(--danger)',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '12px',
    border: '1px solid rgba(239, 68, 68, 0.3)',
  }
};

export default ActionButtons;
