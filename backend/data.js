import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'siako',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'boki',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products:[
        {

            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 1.5,
            numReviews: 34,
            description: 'Produkt wysokiej jakości 1',
          },
          {

            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'Produkt wysokiej jakości 2',
          },
          {

            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'Produkt wysokiej jakości 3',
          },
          {

            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 14,
            description: 'Produkt wysokiej jakości 4',
          },
          {

            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 15,
            brand: 'Puma',
            rating: 5,
            numReviews: 10,
            description: 'Produkt wysokiej jakości 5',
          },
          {

            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 2.5,
            numReviews: 15,
            description: 'Produkt wysokiej jakości 6',
          },
          {

            name: 'Monachium',
            category: 'Miasto',
            image: '/images/p7.jpg',
            price: 1,
            countInStock: 12,
            brand: 'Niemcy',
            rating: 4.5,
            numReviews: 15,
            description: 'Moje zdjęcieSławek Zabłocki ',
          },
    ],
};
export default data;