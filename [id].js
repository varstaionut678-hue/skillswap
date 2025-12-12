import Layout from '../../components/Layout';
import skillsData from '../../data/skills.json';
import usersData from '../../data/users.json';

export default function SkillDetail({ skill, owner }) {
  if (!skill) {
    return (
      <Layout>
        <p>Skill not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {skill.category}
        </div>
        <h1 style={{ fontSize: '1.8rem', marginTop: '0.2rem' }}>{skill.title}</h1>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#9ca3af', marginTop: '0.5rem' }}>
          <span>📍 {skill.location}</span>
          <span>{skill.mode === 'online' ? '🌐 Online' : '🤝 In person'}</span>
          <span>⭐ {skill.rating.toFixed(1)} ({skill.swapCount} swaps)</span>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#e5e7eb' }}>{skill.description}</p>

        {owner && (
          <section
            style={{
              marginTop: '1.5rem',
              borderRadius: '1rem',
              border: '1px solid #1f2937',
              padding: '1rem',
              background: 'radial-gradient(circle at top left, #111827, #020617)',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg,#2563eb,#22c55e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
              }}
            >
              {owner.name.charAt(0)}
            </div>
            <div>
              <h2 style={{ fontSize: '1.05rem', margin: 0 }}>{owner.name}</h2>
              <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginTop: '0.15rem' }}>
                📍 {owner.location} · ⭐ {owner.rating.toFixed(2)}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#e5e7eb', marginTop: '0.4rem' }}>{owner.bio}</p>
            </div>
          </section>
        )}

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
          <button
            style={{
              padding: '0.7rem 1.4rem',
              borderRadius: '999px',
              border: 'none',
              background: '#2563eb',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Request swap
          </button>
          <button
            style={{
              padding: '0.7rem 1.4rem',
              borderRadius: '999px',
              border: '1px solid #374151',
              background: 'transparent',
              cursor: 'pointer'
            }}
          >
            Message {owner ? owner.name.split(' ')[0] : 'host'}
          </button>
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const skill = skillsData.find((s) => s.id === id) || null;
  const owner = skill ? usersData.find((u) => u.id === skill.ownerId) || null : null;

  return {
    props: {
      skill,
      owner
    }
  };
}
