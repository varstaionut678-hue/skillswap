import skills from '../../../data/skills.json';

export default function handler(req, res) {
  res.status(200).json(skills);
}
