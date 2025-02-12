import request from 'supertest';
import express from 'express';
import itemsRouter from '../src/routes/items';
import { StoreItems } from '../src/data/store-items';

const app = express();
app.use(itemsRouter);

describe('GET /items', () => {
  it('should return all store items', async () => {
    const response = await request(app).get('/items');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(StoreItems.length);
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
    const response = await request(app).get('/items');
    response.body.forEach((item: { id: string; name: string; price: number; description: string; rating: number; image: string; about: string[]; categories: string[] }) => {
      expect(typeof item.id).toBe('string');
      expect(typeof item.name).toBe('string');
      expect(typeof item.price).toBe('number');
      expect(typeof item.description).toBe('string');
      expect(typeof item.rating).toBe('number');
      expect(typeof item.image).toBe('string');
      expect(Array.isArray(item.about)).toBe(true);
      expect(Array.isArray(item.categories)).toBe(true);
    });
  });

  it('should return items that exist in the StoreItems array', async () => {
    const response = await request(app).get('/items');
    const storeItemIds = StoreItems.map(item => item.id);
    response.body.forEach((item: { id: string }) => {
      expect(storeItemIds).toContain(item.id);
    });
  });

  it('should filter items by animal category', async () => {
    const response = await request(app).get('/items').query({ animal: 'dog' });
    expect(response.status).toBe(200);
    response.body.forEach((item: { categories: string[] }) => {
      expect(item.categories).toContain('dog');
    });
  });

  it('should filter items by product category', async () => {
    const response = await request(app).get('/items').query({ product: 'food' });
    expect(response.status).toBe(200);
    response.body.forEach((item: { categories: string[] }) => {
      expect(item.categories).toContain('food');
    });
  });

  it('should filter items by search term', async () => {
    const response = await request(app).get('/items').query({ search: 'toy' });
    expect(response.status).toBe(200);
    response.body.forEach((item: { name: string; description: string }) => {
      const searchLower = 'toy'.toLowerCase();
      expect(
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      ).toBe(true);
    });
  });

  it('should filter items by multiple criteria', async () => {
    const response = await request(app).get('/items').query({ animal: 'cat', product: 'toy', search: 'tower' });
    expect(response.status).toBe(200);
    response.body.forEach((item: { categories: string[]; name: string; description: string }) => {
      const searchLower = 'tower'.toLowerCase();
      expect(item.categories).toContain('cat');
      expect(item.categories).toContain('toy');
      expect(
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      ).toBe(true);
    });
  });
});
