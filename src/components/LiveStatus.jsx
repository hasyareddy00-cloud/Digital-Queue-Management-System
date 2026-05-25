
import { Users, Timer, BellRing } from 'lucide-react';

const LiveStatus = ({ currentToken, estWaitTime, peopleAhead }) => {
  return (
    <div className="animate-slide-up" style={{...styles.container, animationDelay: '0.1s'}}>
      <div style={styles.header}>
        <h3 style={styles.title}>Live Status</h3>
        <div style={styles.liveIndicator}>
          <div style={styles.dot} className="animate-pulse-ring"></div>
          <span style={styles.liveText}>Live</span>
        </div>
      </div>

      <div style={styles.grid}>
        <div style={styles.statusBox} className="glass-panel">
          <div style={styles.iconWrapperBlue}>
            <Users size={20} color="var(--primary-blue)" />
          </div>
          <p style={styles.boxLabel}>Currently Serving</p>
          <p style={styles.boxValue}>{currentToken}</p>
        </div>
        
        <div style={styles.statusBox} className="glass-panel">
          <div style={styles.iconWrapperOrange}>
            <Timer size={20} color="var(--warning)" />
          </div>
          <p style={styles.boxLabel}>Est. Wait Time</p>
          <p style={styles.boxValue}>{estWaitTime} min</p>
        </div>
      </div>

      <div style={styles.infoBanner} className="glass-panel">
        <BellRing size={16} color="var(--primary-blue)" />
        <p style={styles.bannerText}>
          There are <strong>{peopleAhead} people</strong> ahead of you. We will notify you when it's your turn.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto 24px auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    padding: '0 8px',
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'var(--text-main)',
  },
  liveIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    padding: '4px 10px',
    borderRadius: '16px',
  },
  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--danger)',
    borderRadius: '50%',
  },
  liveText: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--danger)',
    textTransform: 'uppercase',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    marginBottom: '16px',
  },
  statusBox: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  iconWrapperBlue: {
    padding: '8px',
    backgroundColor: 'var(--light-blue)',
    borderRadius: '10px',
    marginBottom: '12px',
  },
  iconWrapperOrange: {
    padding: '8px',
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderRadius: '10px',
    marginBottom: '12px',
  },
  boxLabel: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    marginBottom: '4px',
    fontWeight: '500',
  },
  boxValue: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-main)',
  },
  infoBanner: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '16px',
    backgroundColor: 'var(--light-blue)',
    border: '1px solid rgba(10, 102, 194, 0.2)',
  },
  bannerText: {
    fontSize: '0.875rem',
    color: 'var(--text-main)',
    lineHeight: '1.4',
  }
};

export default LiveStatus;
