import request from 'supertest';
import express from 'express';
import myFriendsRouter from '../src/routes/myFriends';

const app = express();
app.use(myFriendsRouter);

describe('GET /my-friends', () => {
  it('should return a random number of friends between 1 and 3', async () => {
    const response = await request(app).get('/my-friends');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
    expect(response.body.length).toBeLessThanOrEqual(3);
    response.body.forEach((friend: { name: string; image: string }) => {
      expect(friend).toHaveProperty('name');
      expect(friend).toHaveProperty('image');
    });
  });

  it('should return friends with valid names and images', async () => {
    const response = await request(app).get('/my-friends');
    const validNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hank'];
    const validImages = validNames.map((name, index) => `/furry-public/pets/pet${index + 1}.jpg`);

    response.body.forEach((friend: { name: string; image: string }) => {
      expect(validNames).toContain(friend.name);
      expect(validImages).toContain(friend.image);
    });
  });
});
