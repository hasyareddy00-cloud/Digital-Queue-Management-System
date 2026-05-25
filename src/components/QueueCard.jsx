import { Ticket, CalendarDays } from 'lucide-react';

const QueueCard = ({ tokenNumber, department, date }) => {
  return (
    <div style={styles.card} className="glass-panel animate-slide-up">
      <div style={styles.header}>
        <div style={styles.badge}>
          <Ticket size={14} />
          <span>Active Token</span>
        </div>
        <div style={styles.dateInfo}>
          <CalendarDays size={14} />
          <span>{date}</span>
        </div>
      </div>
      
      <div style={styles.tokenContainer}>
        <h2 style={styles.tokenLabel}>Your Token Number</h2>
        <div className="text-gradient" style={styles.tokenNumber}>
          {tokenNumber}
        </div>
        <p style={styles.department}>{department}</p>
      </div>
      
      <div style={styles.divider}></div>
      
      <div style={styles.footer}>
        <div style={styles.footerItem}>
          <span style={styles.footerLabel}>Status</span>
          <span style={styles.statusActive}>Waiting</span>
        </div>
        <div style={styles.footerItem}>
          <span style={styles.footerLabel}>Priority</span>
          <span style={styles.priorityNormal}>Normal</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: '24px',
    margin: '0 auto 24px auto',
    maxWidth: '400px',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'var(--light-blue)',
    color: 'var(--primary-blue)',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  dateInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: 'var(--text-muted)',
    fontSize: '0.875rem',
  },
  tokenContainer: {
    textAlign: 'center',
    padding: '20px 0',
  },
  tokenLabel: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    fontWeight: '500',
    marginBottom: '8px',
  },
  tokenNumber: {
    fontSize: '4.5rem',
    fontWeight: '700',
    lineHeight: '1',
    marginBottom: '12px',
    fontFamily: "'Outfit', sans-serif",
  },
  department: {
    fontSize: '1rem',
    color: 'var(--text-main)',
    fontWeight: '600',
  },
  divider: {
    height: '1px',
    backgroundColor: 'var(--glass-border)',
    margin: '24px 0',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  footerLabel: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },
  statusActive: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--warning)',
  },
  priorityNormal: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--text-main)',
  }
};

export default QueueCard;
