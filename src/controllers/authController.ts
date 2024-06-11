import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Bad Request' });
    }

    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({ token });
    }

    return res.status(403).json({ message: 'Forbidden' });
};
