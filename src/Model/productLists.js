import React from 'react';

const warmBeverages = [
  {
    id: 'Filterkaffe',
    size: [
      {
        price: 28,
        storlek: 'liten',
      },
      {
        price: 32,
        storlek: 'medium',
      },
      {
        price: 36,
        storlek: 'stor',
      },
    ],
    img: '../assets/warm-beverage-images/black-coffee-img.png',
  },
  {
    id: 'Cappuccino',
    size: [
      {
        price: 38,
        storlek: 'liten',
      },
      {
        price: 42,
        storlek: 'medium',
      },
      {
        price: 46,
        storlek: 'stor',
      },
    ],
    img: '../assets/warm-beverage-images/cappuccino-img.png',
  },
  {
    id: 'Americano',
    size: [
      {
        price: 32,
        storlek: 'liten',
      },
      {
        price: 36,
        storlek: 'medium',
      },
      {
        price: 40,
        storlek: 'stor',
      },
    ],
    img: '../assets/warm-beverage-images/americano-img.png',
  },
  {
    id: 'Kaffe Mocha',
    size: [
      {
        price: 38,
        storlek: 'liten',
      },
      {
        price: 42,
        storlek: 'medium',
      },
      {
        price: 46,
        storlek: 'stor',
      },
    ],
    img: '../assets/warm-beverage-images/coffee-mocha-img.png',
  },
  {
    id: 'Kaffe Latte',
    size: [
      {
        price: 38,
        storlek: 'liten',
      },
      {
        price: 44,
        storlek: 'medium',
      },
      {
        price: 48,
        storlek: 'stor',
      },
    ],
    img: '../assets/warm-beverage-images/caffe-latte-img.png',
  },
  {
    id: 'Caramel Macchiato',
    size: [
      {
        price: 45,
        storlek: 'liten',
      },
      {
        price: 48,
        storlek: 'medium',
      },
      {
        price: 51,
        storlek: 'stor',
      },
    ],
    img: '../assets/warm-beverage-images/caramel-macchiato-img.png',
  },
  {
    id: 'Espresso',
    size: [
      {
        price: 34,
        storlek: 'liten',
      },
      {
        price: 38,
        storlek: 'medium',
      },
      {
        price: 42,
        storlek: 'stor',
      },
    ],
    img: '../assets/warm-beverage-images/espresso-img.png',
  },
  {
    id: 'Cortado',
    size: [
      {
        price: 36,
        storlek: 'liten',
      },
      {
        price: 40,
        storlek: 'medium',
      },
      {
        price: 44,
        storlek: 'stor',
      },
    ],
    img: '../assets/warm-beverage-images/cortado-img.png',
  },
];

const coldBeverages = [
  {
    id: 'Iskaffe',
    size: [
      {
        name: 'Iskaffe (liten)',
        price: 36,
        storlek: 'liten',
      },
      {
        name: 'Iskaffe (medium)',
        price: 42,
        storlek: 'medium',
      },
      {
        name: 'Iskaffe (stor)',
        price: 50,
        storlek: 'stor',
      },
    ],
    img: '../assets/cold-drinks-images/iced-coffee-img.png',
  },
  {
    id: 'Iste',
    size: [
      {
        name: 'Iste (liten)',
        price: 38,
        storlek: 'liten',
      },
      {
        name: 'Iste (medium)',
        price: 47,
        storlek: 'medium',
      },
      {
        name: 'Iste (stor)',
        price: 55,
        storlek: 'stor',
      },
    ],
    img: '../assets/cold-drinks-images/ice-tea-img.png',
  },
];

const desserts = [
  {
    id: 'Brownies',
    size: [
      {
        name: 'Brownies',
        price: 44,
        storlek: 'vanlig'
      }
    ],
    img: '../assets/desserts-images/brownies-img.png',
  },
  {
    id: 'Oreokake',
    size: [
      {
        name: 'Oreokake',
        price: 54,
        storlek: 'vanlig'
      }
    ],
    img: '../assets/desserts-images/oreo-cake-img.png',
  },
  {
    id: 'Kanelbolle',
    size: [
      {
        name: 'Kanelbolle',
        price: 46,
        storlek: 'vanlig'
      }
    ],
    img: '../assets/desserts-images/cinnamon-roll-img.png',
  },
  {
    id: 'Croissant',
    size: [
      {
        name: 'Croissant',
        price: 38,
        storlek: 'vanlig'
      }
    ],
    img: '../assets/desserts-images/croissant-img.png',
  },
  {
    id: 'Chiapudding',
    size: [
      {
        name: 'Chiapudding',
        price: 42,
        storlek: 'vanlig'
      }
    ],
    img: '../assets/desserts-images/brownies-img.png',
  },
  {
    id: 'Brioche',
    size: [
      {
        name: 'Brioche',
        price: 44,
        storlek: 'vanlig'
      }
    ],
    img: '../assets/desserts-images/brioche-img.png',
  },
  {
    id: 'Scones',
    size: [
      {
        name: 'Scones',
        price: 37,
        storlek: 'vanlig'
      }
    ],
    img: '../assets/desserts-images/scones-img.png',
  },
];

export { warmBeverages, coldBeverages, desserts };
