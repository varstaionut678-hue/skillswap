import Layout from '../components/Layout';
import UserStats from '../components/UserStats';
import skillsData from '../data/skills.json';
import usersData from '../data/users.json';

export default function Profile() {
  // For now we just take the first user as "current"
  const user = usersData[0];
  const skillsOffered = skillsData.filter((s) => user.skillsOffered.includes(s.id));

  return (
    <Layout>
      <section style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg,#2563eb,#22c55e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.7rem',
            fontWeight: 700
          }}
        >
          {user.name.charAt(0)}
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.6rem' }}>{user.name}</h1>
          <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '0.2rem' }}>
            📍 {user.location}
          </div>
          <p style={{ fontSize: '0.95rem', marginTop: '0.6rem', maxWidth: '34rem', color: '#e5e7eb' }}>
            {user.bio}
          </p>
          <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {user.badges.map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.55rem',
                  borderRadius: '999px',
                  border: '1px solid #374151',
                  background: '#020617'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <UserStats user={user} skillsCount={skillsOffered.length} />

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>Skills you offer</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
            gap: '1rem'
          }}
        >
          {skillsOffered.map((skill) => (
            <article
              key={skill.id}
              style={{
                borderRadius: '1rem',
                border: '1px solid #1f2937',
                background: 'radial-gradient(circle at top left, #111827, #020617)',
                padding: '0.9rem'
              }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  color: '#9ca3af',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                {skill.category}
              </div>
              <h3 style={{ fontSize: '1.05rem', margin: '0.3rem 0' }}>{skill.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>{skill.description}</p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  marginTop: '0.5rem'
                }}
              >
                <span>📍 {skill.location}</span>
                <span>{skill.mode === 'online' ? '🌐 Online' : '🤝 In person'}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
