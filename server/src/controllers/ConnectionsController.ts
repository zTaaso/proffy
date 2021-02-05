import { Request, response, Response } from 'express';

import db from '../database/connection';

class ConnectionsController {
  async index(req: Request, res: Response) {
    const connections = await db('connections').count('* as total');

    const total = connections[0];
    return res.json(total);
  }

  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    await db('connections').insert({
      user_id,
    });

    return res.send();
  }
}

export default ConnectionsController;
