export default function UserStats({ user, skillsCount }) {
  return (
    <section style={{
      borderRadius: '1rem',
      border: '1px solid #1f2937',
      background: 'radial-gradient(circle at top left, #111827, #020617)',
      padding: '1rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: '0.75rem',
      marginTop: '1.5rem'
    }}>
      <Stat label="Swaps completed" value={user.swapsCompleted} />
      <Stat label="Average rating" value={user.rating.toFixed(2)} />
      <Stat label="Skills offered" value={skillsCount} />
      <Stat label="Badges" value={user.badges.length} />
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{label}</div>
      <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{value}</div>
    </div>
  );
}
