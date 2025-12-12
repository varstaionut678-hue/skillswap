import skills from '../../../data/skills.json';

export default function handler(req, res) {
  const { id } = req.query;
  const skill = skills.find((s) => s.id === id);
  if (!skill) {
    return res.status(404).json({ error: 'Skill not found' });
  }
  res.status(200).json(skill);
}
