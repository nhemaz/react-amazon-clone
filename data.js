import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'Cliff',
      email: 'admin@example.com',
      password: bcrypt.hashSync('2401', 8),
      isAdmin: true,
      isSeller: true,
    },
    {
      name: 'John',
      email: 'customer@example.com',
      password: bcrypt.hashSync('2401', 8),
      isAdmin: false,
      isSeller: false,
    },
  ],

  products: [
    {

      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/xbox.jpg',
      price: 120,
      brand: 'Nike',
      countInStock: 2,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {

      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: '/images/xbox.jpg',
      price: 100,
      brand: 'Adidas',
      countInStock: 0,
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {

      name: 'Lacoste Free Shirt',
      category: 'Shirts',
      image: '/images/xbox.jpg',
      price: 220,
      brand: 'Lacoste',
      countInStock: 5,
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {

      name: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/xbox.jpg',
      price: 78,
      brand: 'Nike',
      countInStock: 20,
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/xbox.jpg',
      price: 65,
      brand: 'Puma',
      countInStock: 13,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: '/images/xbox.jpg',
      price: 139,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;