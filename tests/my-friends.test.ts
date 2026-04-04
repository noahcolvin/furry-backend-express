import request from 'supertest';
import express from 'express';
import myFriendsRouter from '../routes/my-friends';
import { Friend } from '../data/types';

const app = express();
app.use(myFriendsRouter);

describe('GET /my-friends', () => {
  it('should return a random number of friends between 1 and 3', async () => {
    const response = await request(app).get('/my-friends');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
    expect(response.body.length).toBeLessThanOrEqual(3);
    response.body.forEach((friend: Friend) => {
      expect(friend).toHaveProperty('name');
      expect(friend).toHaveProperty('image');
    });
  });

  it('should return friends with valid properties', async () => {
    const response = await request(app).get('/my-friends');
    response.body.forEach((friend: Friend) => {
      expect(typeof friend.id).toBe('number');
      expect(typeof friend.name).toBe('string');
      expect(typeof friend.image).toBe('string');
    });
  });
});
