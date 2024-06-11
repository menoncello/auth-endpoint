import request from 'supertest';
import app from '../src/app';

describe('Auth Endpoint', () => {
    it('should return 200 and a token for valid credentials', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ username: 'admin', password: 'password' });

        expect(res.status).toBe(200);
        expect(res.body.token).toBeDefined();
    });

    it('should return 400 for missing credentials', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toBe('Bad Request');
    });

    it('should return 403 for invalid credentials', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ username: 'admin', password: 'wrongpassword' });

        expect(res.status).toBe(403);
        expect(res.body.message).toBe('Forbidden');
    });
});
