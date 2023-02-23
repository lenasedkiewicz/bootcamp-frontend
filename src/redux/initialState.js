const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-1.jpg',
      oldPrice: 43,
      price: 30,
      stars: 2,
      userRating: true,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-2.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-3.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-4.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-5.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-6.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-7.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-8.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-9.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-10.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-11.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-12.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-1.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-2.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-3.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-4.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-5.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-6.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-7.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-8.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-9.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      image: './images/furniture_images/bed_images/bed-10.jpg',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-11.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-12.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
  ],
  cart: {
    products: [],
  },
  hotDealsProduct: {
    id: 'aenean-ru-bristique-10',
    name: 'Aenean Ru Bristique 10',
    category: 'bed',
    image: './images/furniture_images/bed_images/bed-10.jpg',
    oldPrice: 50,
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompare: false,
  },
  promotedProduct: {
    image: './images/furniture_images/bed_images/bed-1.jpg',
    imageName: 'bedroom-bad',
    softTitle: 'indoor',
    strongTitle: 'furniture',
    description: 'save up 50% of all furniture',
  viewport: {
    mode: '',
  },
};

export default initialState;
