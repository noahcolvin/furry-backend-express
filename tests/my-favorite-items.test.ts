import request from 'supertest';
import express from 'express';
import myFavoriteItemsRouter from '../routes/my-favorite-items';

const app = express();
app.use(myFavoriteItemsRouter);

describe('GET /my-favorite-items', () => {
  it('should return a random number of store items between 2 and 4', async () => {
    const response = await request(app).get('/my-favorite-items');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    expect(response.body.length).toBeLessThanOrEqual(4);
    response.body.forEach((item: { id: string; name: string; price: number; description: string; rating: number; image: string; about: string[]; categories: string[] }) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('price');
      expect(item).toHaveProperty('description');
      expect(item).toHaveProperty('rating');
      expect(item).toHaveProperty('image');
      expect(item).toHaveProperty('about');
      expect(item).toHaveProperty('categories');
    });
  });

  it('should return items with valid properties', async () => {
    const response = await request(app).get('/my-favorite-items');
    response.body.forEach((item: { id: string; name: string; price: number; description: string; rating: number; image: string; about: string[]; categories: string[] }) => {
      expect(typeof item.id).toBe('number');
      expect(typeof item.name).toBe('string');
      expect(typeof item.price).toBe('number');
      expect(typeof item.description).toBe('string');
      expect(typeof item.rating).toBe('number');
      expect(typeof item.image).toBe('string');
      expect(Array.isArray(item.about)).toBe(true);
      expect(Array.isArray(item.categories)).toBe(true);
    });
  });
});
