
import { Activity } from 'lucide-react';

const Header = () => {
  return (
    <header style={styles.header} className="glass-panel">
      <div style={styles.logoContainer}>
        <div style={styles.iconWrapper}>
          <Activity size={24} color="white" />
        </div>
        <h1 style={styles.title}>DQMS</h1>
      </div>
      <div style={styles.userProfile}>
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          alt="User Avatar"
          style={styles.avatar}
        />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    marginBottom: '32px',
    borderRadius: '0 0 24px 24px',
    borderTop: 'none',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  iconWrapper: {
    background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-blue))',
    padding: '8px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-glow)',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary-blue)',
    letterSpacing: '-0.5px',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'var(--light-blue)',
    border: '2px solid var(--white)',
    boxShadow: 'var(--shadow-sm)',
  }
};

export default Header;
