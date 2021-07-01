import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'Cliff',
      email: 'admin@example.com',
      password: bcrypt.hashSync('2401', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Fiege',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 5,
        numReviews: 10,
      }
    },
    {
      name: 'John',
      email: 'customer@example.com',
      password: bcrypt.hashSync('2401', 8),
      isAdmin: false,
      isSeller: false,
      seller: {
        rating: 0,
        numReviews: 0,
      }
    },
  ],

  products: [
    {

      name: 'Nike Slim Shirt',
      seller: "60ddee2d6e671500044101ce",
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
      seller: "60ddee2d6e671500044101ce",
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
      seller: "60ddee2d6e671500044101ce",
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
      seller: "60ddee2d6e671500044101ce",
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
      seller: "60ddee2d6e671500044101ce",
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
      seller: "60ddee2d6e671500044101ce",
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