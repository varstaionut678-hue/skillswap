import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import SkillCard from '../components/SkillCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [skills, setSkills] = useState([]);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('all');

  useEffect(() => {
    async function load() {
      const skillsRes = await fetch('/api/skills');
      const skillsData = await skillsRes.json();
      setSkills(skillsData);

      const usersRes = await fetch('/api/users');
      const usersData = await usersRes.json();
      setUsers(usersData);
    }
    load();
  }, []);

  const categories = ['all', 'Creative', 'Fitness', 'Tech'];
  const locations = ['all', 'Online', 'Cluj-Napoca', 'Bucharest'];

  const filtered = skills.filter((s) => {
    const matchesQuery =
      !query ||
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'all' || s.category === category;
    const matchesLocation =
      location === 'all' ||
      (location === 'Online' && s.location === 'Online') ||
      s.location === location;
    return matchesQuery && matchesCategory && matchesLocation;
  });

  const getOwner = (skill) => users.find((u) => u.id === skill.ownerId);

  return (
    <Layout>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Swap skills. Learn anything.</h1>
        <p className={styles.heroSubtitle}>
          Share what you know, learn what you love. Connect with people near you or online and trade skills without money.
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.primaryBtn}>Find a skill</button>
          <button className={styles.secondaryBtn}>Share your skill</button>
        </div>
      </section>

      <section className={styles.filtersBar}>
        <input
          className={styles.input}
          placeholder="Search skills..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === 'all' ? 'All categories' : c}
            </option>
          ))}
        </select>
        <select
          className={styles.select}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {locations.map((l) => (
            <option key={l} value={l}>
              {l === 'all' ? 'All locations' : l}
            </option>
          ))}
        </select>
      </section>

      <section className={styles.skillsGrid}>
        {filtered.map((skill) => (
          <SkillCard key={skill.id} skill={skill} owner={getOwner(skill)} />
        ))}
      </section>
    </Layout>
  );
}
