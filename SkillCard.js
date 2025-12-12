import Link from 'next/link';

export default function SkillCard({ skill, owner }) {
  return (
    <article style={{
      borderRadius: '1rem',
      border: '1px solid #1f2937',
      background: 'radial-gradient(circle at top left, #111827, #020617)',
      padding: '0.9rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.55rem'
    }}>
      <div style={{ fontSize: '0.7rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {skill.category}
      </div>
      <h3 style={{ fontSize: '1.05rem', margin: 0 }}>{skill.title}</h3>
      <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>
        {skill.description}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginTop: '0.4rem' }}>
        <span>📍 {skill.location}</span>
        <span>{skill.mode === 'online' ? '🌐 Online' : '🤝 In person'}</span>
      </div>
      {owner && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '0.4rem',
          fontSize: '0.8rem'
        }}>
          <span>👤 {owner.name}</span>
          <span>⭐ {skill.rating.toFixed(1)}</span>
        </div>
      )}
      <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.5rem' }}>
        <Link href={`/skills/${skill.id}`} style={{
          flex: 1,
          textAlign: 'center',
          padding: '0.45rem 0.7rem',
          borderRadius: '999px',
          background: '#2563eb',
          fontSize: '0.85rem',
          fontWeight: 600
        }}>
          View details
        </Link>
        <button style={{
          padding: '0.45rem 0.7rem',
          borderRadius: '999px',
          border: '1px solid #374151',
          background: 'transparent',
          fontSize: '0.8rem',
          cursor: 'pointer'
        }}>
          Request swap
        </button>
      </div>
    </article>
  );
}
