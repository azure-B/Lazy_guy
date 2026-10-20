import { getHealthStatus } from '../models/healthModel.js';

export async function getHealth(req, res) {
  try {
    const data = await getHealthStatus();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
}
