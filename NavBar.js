export default function NavBar() {
  return (
    <header style={{
      borderBottom: '1px solid #111827',
      background: '#020617d9',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }}>
      <div style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '0.85rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg,#2563eb,#22c55e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            fontWeight: 700
          }}>SS</div>
          <span style={{ fontWeight: 600, letterSpacing: '-0.03em' }}>SkillSwap</span>
        </div>
        <nav style={{ display: 'flex', gap: '1.25rem', fontSize: '0.9rem', color: '#9ca3af' }}>
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
        </nav>
      </div>
    </header>
  );
}
