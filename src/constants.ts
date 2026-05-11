export interface MenuItem {
  id: string;
  name: string;
  arabicName?: string;
  description: string;
  price: string;
  category: string;
  image?: string;
}

export const MENU_CATEGORIES = [
  'All',
  'Sweets',
  'Salads Medium',
  'Coffee',
  'Salads',
  'Snacks',
  'Pineapple',
  'Tea',
  'Sandwich',
  'Beverages'
];

export const MENU_ITEMS: MenuItem[] = [
  // 1: Sweets
  {
    id: 'sw1',
    name: 'Sand Cake',
    description: 'Freshly baked vanilla sponge cake topped with semolina.',
    price: '21.00 QAR',
    category: 'Sweets',
    image: '/src/assets/images/regenerated_image_1778525804694.png'
  },
  {
    id: 'sw2',
    name: 'Almond Dates',
    description: 'Pecan, almond flakes, dates and biscuit.',
    price: '13.00 QAR',
    category: 'Sweets',
    image: '/src/assets/images/regenerated_image_1778525333136.png'
  },
  {
    id: 'sw3',
    name: 'Coconut Cake',
    description: 'Coconut sponge cake with coconut flakes and walnuts on top.',
    price: '25.00 QAR',
    category: 'Sweets',
    image: '/src/assets/images/regenerated_image_1778525805730.png'
  },

  // 2: Salads Medium
  {
    id: 'sm1',
    name: 'Chicken Caesar Salad M',
    description: 'Chicken fingers, cardamom, Parmesan cheese and iceberg lettuce with a creamy nutty dressing.',
    price: '29.00 QAR',
    category: 'Salads Medium',
    image: '/src/assets/images/regenerated_image_1778525806408.png'
  },
  {
    id: 'sm2',
    name: 'Brown Pasta Salad M',
    description: 'Rocca leaves, brown pasta, cherry tomato, red quinoa, walnuts, chicken with honey mustard dijon.',
    price: '24.00 QAR',
    category: 'Salads Medium',
    image: '/src/assets/images/regenerated_image_1778525807710.png'
  },

  // 3: Coffee
  {
    id: 'c1',
    name: 'Cappuccino',
    description: 'Made with double espresso and delicious foam.',
    price: '23.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525332426.png'
  },
  {
    id: 'c2',
    name: 'Iced Salted Caramel Latte',
    description: 'Made with double shots of espresso, caramel syrup and Himalaya salt.',
    price: '29.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525808972.png'
  },
  {
    id: 'c3',
    name: 'Iced Cappuccino',
    description: 'Mixed with equal of espresso milk and foam.',
    price: '23.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778526859739.png'
  },
  {
    id: 'c4',
    name: 'Flat White',
    description: 'Consisting of a double espresso balanced with milk, the best way to start the day.',
    price: '24.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525315353.jpg'
  },
  {
    id: 'c5',
    name: 'Salted Caramel Latte',
    description: 'Coffee blended with espresso, milk, caramel and salt.',
    price: '29.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778526860829.png'
  },
  {
    id: 'c6',
    name: 'Iced V60',
    description: 'A cold coffee drink made using the V60 pour over brewing method.',
    price: '25.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525315784.png'
  },
  {
    id: 'c7',
    name: 'Spanish Latte',
    description: 'Made with espresso, steamed milk, and a touch of secret sweet mixture.',
    price: '29.00 QAR',
    category: 'Coffee',
    image: 'https://picsum.photos/seed/spanishlatte/800/1000'
  },
  {
    id: 'c8',
    name: 'Iced Chocolate',
    description: 'Chocolate powder mixed with cold milk and cubes of ice added.',
    price: '27.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525318230.png'
  },
  {
    id: 'c9',
    name: 'Cortado',
    description: 'Double espresso with a light amount of milk for an excellent taste.',
    price: '23.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525316962.png'
  },
  {
    id: 'c10',
    name: 'Espresso',
    description: 'Fresh, hot, and concentrated dose.',
    price: '18.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778526861511.png'
  },
  {
    id: 'c11',
    name: 'Iced Spanish',
    description: 'Made with double shots of espresso mixed with secret Spanish mixture.',
    price: '29.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525320083.png'
  },
  {
    id: 'c12',
    name: 'Toffeenut Latte',
    description: 'Made with espresso, steamed milk with touch of toffee nut sweetness.',
    price: '27.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525319289.png'
  },
  {
    id: 'c13',
    name: 'Iced Cortado',
    description: 'Made with double shots of espresso with small amount of milk and ice.',
    price: '23.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778526862776.png'
  },
  {
    id: 'c14',
    name: 'Iced Americano',
    description: 'Double shots of espresso, cold water with ice.',
    price: '20.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778526863711.png'
  },
  {
    id: 'c15',
    name: 'V 60',
    description: 'Excellent tasting drip coffee.',
    price: '25.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525321002.png'
  },
  {
    id: 'c16',
    name: 'Iced Toffee Nut Latte',
    description: 'Made with double shots of espresso mixed with toffee nut flavor.',
    price: '27.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778526864739.png'
  },
  {
    id: 'c17',
    name: 'Latte',
    description: 'Double espresso with steamed milk, the best way to start a great day.',
    price: '25.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525322748.png'
  },
  {
    id: 'c18',
    name: 'Americano',
    description: 'Made with fresh espresso and hot water, the perfect choice for strong coffee lovers.',
    price: '20.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525321918.png'
  },
  {
    id: 'c19',
    name: 'Iced Flat White',
    description: 'Made with double shots of espresso balanced with milk and added ice.',
    price: '24.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778526865552.png'
  },
  {
    id: 'c20',
    name: 'Hot Chocolate',
    description: 'Made with chocolate powder and medium weight sugar.',
    price: '27.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778525323562.png'
  },
  {
    id: 'c21',
    name: 'Iced Latte',
    description: 'Made with espresso and cold milk with iced added that gives a perfect combination.',
    price: '25.00 QAR',
    category: 'Coffee',
    image: '/src/assets/images/regenerated_image_1778526866692.png'
  },

  // 4: Salads
  {
    id: 'sl1',
    name: 'Chicken N Chips',
    description: 'Iceberg lettuce, barbecue chicken, corn, black beans, yellow cheddar cheese, sesame seeds.',
    price: '53.00 QAR',
    category: 'Salads',
    image: '/src/assets/images/regenerated_image_1778526867463.png'
  },
  {
    id: 'sl2',
    name: 'Brown Pasta Salad',
    description: 'Rocca leaves, brown pasta, cherry tomato, red quinoa, walnuts, chicken.',
    price: '47.00 QAR',
    category: 'Salads',
    image: '/src/assets/images/regenerated_image_1778526868759.png'
  },
  {
    id: 'sl3',
    name: 'Chicken Caesar Salad',
    description: 'Chicken fingers, parmesan, iceberg lettuce with creamy nutty dressing.',
    price: '57.00 QAR',
    category: 'Salads',
    image: '/src/assets/images/regenerated_image_1778526869821.png'
  },

  // 5: Snacks (Empty as ranking requested but no items provided)

  // 6: Pineapple
  {
    id: 'p1',
    name: 'Pineapple',
    description: 'Fresh pineapple cubes.',
    price: '9.00 QAR',
    category: 'Pineapple',
    image: '/src/assets/images/regenerated_image_1778525324386.png'
  },

  // 7: Tea
  {
    id: 't1',
    name: 'Strawberry Iced Tea',
    description: 'A refreshing drink blended with fermented tea and strawberry.',
    price: '26.00 QAR',
    category: 'Tea',
    image: '/src/assets/images/regenerated_image_1778525325199.png'
  },
  {
    id: 't2',
    name: 'Raspberry Iced Tea',
    description: 'A refreshing drink blended with brewed tea and berries.',
    price: '26.00 QAR',
    category: 'Tea',
    image: '/src/assets/images/regenerated_image_1778526871349.png'
  },
  {
    id: 't3',
    name: 'Passion Fruit Iced Tea',
    description: 'Iced tea with passion fruit flavor.',
    price: '26.00 QAR',
    category: 'Tea',
    image: '/src/assets/images/regenerated_image_1778526872481.png'
  },
  {
    id: 't4',
    name: 'Earl Grey Tea',
    description: 'Fragrant black tea infused with bergamot gives an excellent flavor.',
    price: '17.00 QAR',
    category: 'Tea',
    image: '/src/assets/images/regenerated_image_1778526874027.png'
  },
  {
    id: 't5',
    name: 'Green Tea',
    description: 'A single green tea rich in antioxidant.',
    price: '17.00 QAR',
    category: 'Tea',
    image: '/src/assets/images/regenerated_image_1778525326229.png'
  },

  // 8: Sandwich
  {
    id: 'snd1',
    name: 'Cheese Sandwich',
    description: 'Made with high quality cheese and served on freshly baked bread.',
    price: '24.00 QAR',
    category: 'Sandwich',
    image: '/src/assets/images/regenerated_image_1778526875448.png'
  },
  {
    id: 'snd2',
    name: 'December Chicken Sandwich',
    description: 'Delicious chicken sandwich with seasonal ingredients with soft touch of spicy.',
    price: '28.00 QAR',
    category: 'Sandwich',
    image: '/src/assets/images/regenerated_image_1778525328272.png'
  },
  {
    id: 'snd3',
    name: 'Turkey Sandwich',
    description: 'Turkey slices with mayonnaise in brown bread.',
    price: '27.00 QAR',
    category: 'Sandwich',
    image: '/src/assets/images/regenerated_image_1778525327144.png'
  },

  // 9: Beverages
  {
    id: 'b1',
    name: 'Fiji 500Ml',
    description: 'Premium bottled water from Fiji, known for its pure and refreshing taste.',
    price: '10.00 QAR',
    category: 'Beverages',
    image: '/src/assets/images/regenerated_image_1778526876526.png'
  },
  {
    id: 'b2',
    name: 'Classic Mojito',
    description: 'Made with lime, mint and a splash of soda water.',
    price: '26.00 QAR',
    category: 'Beverages',
    image: '/src/assets/images/regenerated_image_1778526877382.png'
  },
  {
    id: 'b3',
    name: 'Raspberry Mojito',
    description: 'Made with raspberry pure, mint leaves, lime juice and a sparkling water.',
    price: '26.00 QAR',
    category: 'Beverages',
    image: '/src/assets/images/regenerated_image_1778525329195.png'
  },
  {
    id: 'b4',
    name: 'Sparkling Water',
    description: 'Sparkling and refreshing water.',
    price: '10.00 QAR',
    category: 'Beverages',
    image: '/src/assets/images/regenerated_image_1778525330445.png'
  },
  {
    id: 'b5',
    name: 'Passion Fruit Mojito',
    description: 'Made with passion fruit, lime, mint and a sparkling water.',
    price: '26.00 QAR',
    category: 'Beverages',
    image: '/src/assets/images/regenerated_image_1778526878393.jpg'
  },
  {
    id: 'b6',
    name: 'Strawberry Mojito',
    description: 'Made with strawberry pure, mint leaves, lime juice and a splash of sparkling water.',
    price: '26.00 QAR',
    category: 'Beverages',
    image: '/src/assets/images/regenerated_image_1778525331176.png'
  },
  {
    id: 'b7',
    name: 'Beetroot Berry',
    description: 'Beetroot with berry.',
    price: '24.00 QAR',
    category: 'Beverages',
    image: '/src/assets/images/regenerated_image_1778525331858.webp'
  }
];

export const GALLERY_IMAGES = [
  '/src/assets/images/regenerated_image_1778525315353.jpg',
  '/src/assets/images/regenerated_image_1778525315784.png',
  '/src/assets/images/regenerated_image_1778525316962.png',
  '/src/assets/images/regenerated_image_1778525318230.png',
  '/src/assets/images/regenerated_image_1778525319289.png',
  '/src/assets/images/regenerated_image_1778525320083.png',
  '/src/assets/images/regenerated_image_1778525804694.png',
  '/src/assets/images/regenerated_image_1778525805730.png'
];
