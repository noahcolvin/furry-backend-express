const storageUrl = process.env.STORAGE_URL || '';

export interface StoreItem {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  about: string[];
  categories: string[];
}

export const StoreItems: StoreItem[] = [
  {
    id: '1',
    name: 'Flutter Bird Food',
    price: 59.99,
    description: 'All natural bird food made with the finest seeds and nuts.',
    rating: 4.5,
    image: storageUrl + '/furry-public/store-items/bird_food.jpg',
    about: ['Safe for all bird types', 'No artificial flavors', 'No preservatives'],
    categories: ['bird', 'food']
  },
  {
    id: '2',
    name: 'Meow Master Cat Food',
    price: 19.99,
    description: 'All natural cat food made with exclusive fish and vegetables.',
    rating: 3.2,
    image: storageUrl + '/furry-public/store-items/cat_food_can.jpg',
    about: ['Made in the UK', 'No mice bits', 'Mother approved'],
    categories: ['cat', 'food']
  },
  {
    id: '3',
    name: 'Cities Cat Tower',
    price: 74.99,
    description: 'A cat tower that is perfect for any cat to play and sleep on.',
    rating: 5,
    image: storageUrl + '/furry-public/store-items/cat_tower.jpg',
    about: ['Real carpet', 'No assembly required', 'Made in China'],
    categories: ['cat', 'toy']
  },
  {
    id: '4',
    name: 'Mr Mouse Cat Toy',
    price: 9.99,
    description: 'Realistic mouse toy that will keep your cat entertained for hours.',
    rating: 2.7,
    image: storageUrl + '/furry-public/store-items/cat_toy.jpg',
    about: ['Catnip sold separately', 'No real mice', 'No batteries required'],
    categories: ['cat', 'toy']
  },
  {
    id: '5',
    name: 'Bluz Dog Toy',
    price: 14.99,
    description: 'A chew toy that is perfect for any dog to play and chew on.',
    rating: 4.5,
    image: storageUrl + '/furry-public/store-items/dog_chew_toy.jpg',
    about: ['Made for all dog sizes', 'For tough chewers', 'Made in China'],
    categories: ['dog', 'toy']
  },
  {
    id: '6',
    name: "Sam's Natural Dog Food",
    price: 24.99,
    description: 'Made with real chicken and vegetables, this dog food is perfect for any dog.',
    rating: 4.2,
    image: storageUrl + '/furry-public/store-items/dog_food_can.jpg',
    about: ['Made in the USA', 'No artificial flavors', 'No preservatives'],
    categories: ['dog', 'food']
  },
  {
    id: '7',
    name: 'Good Boy Dog Food',
    price: 59.99,
    description: 'All-natural dog food made with the finest chicken and vegetables.',
    rating: 4.5,
    image: storageUrl + '/furry-public/store-items/dog_food.jpg',
    about: ['Made in the USA', 'No artificial flavors', 'No preservatives'],
    categories: ['dog', 'food']
  },
  {
    id: '8',
    name: 'Right Stufz Dog Toy',
    price: 13.99,
    description: 'Stuffed toy that is perfect for any dog to play and chew.',
    rating: 4.0,
    image: storageUrl + '/furry-public/store-items/dog_stuffed_toy.jpg',
    about: ['Made for all dog sizes', 'Squeaker', 'Made in Mexico'],
    categories: ['dog', 'toy']
  },
  {
    id: '9',
    name: 'Deep Sea Fish Tank',
    price: 129.99,
    description: '50-gallon fish tank that is perfect for any fish to swim in.',
    rating: 3.5,
    image: storageUrl + '/furry-public/store-items/fish_tank.jpg',
    about: ['Made in Canada', 'No fish included', 'No water included'],
    categories: ['fish', 'toy']
  },
  {
    id: '10',
    name: 'Ballz Hamster Toy',
    price: 19.99,
    description: 'A ball that is perfect for any hamster to play and run in.',
    rating: 2.5,
    image: storageUrl + '/furry-public/store-items/hamster_ball.jpg',
    about: ['Made for all hamster sizes', 'No real hamsters', 'Do not use in water'],
    categories: ['hamster', 'toy']
  },
  {
    id: '11',
    name: 'Munchie Hamster Food',
    price: 19.99,
    description: 'All natural hamster food made with the finest seeds and nuts.',
    rating: 4.1,
    image: storageUrl + '/furry-public/store-items/hamster_food.jpg',
    about: ['Safe for all hamster types', 'No artificial flavors', 'No preservatives'],
    categories: ['hamster', 'food']
  },
];