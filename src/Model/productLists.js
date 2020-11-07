import React from 'react';

const warmBeverages = [
  {
    id: 'Filterkaffe',
    icon: '../assets/icons/wc1.png',
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
    icon: '../assets/icons/wc2.png',
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
    icon: '../assets/icons/wc3.png',
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
    icon: '../assets/icons/wc4.png',
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
    icon: '../assets/icons/wc4.png',
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
    icon: '../assets/icons/wc4.png',
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
    icon: '../assets/icons/wc2.png',
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
    icon: '../assets/icons/wc3.png',
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
    icon: '/assets/icons/iced-coffee.png',
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
    icon: '../assets/icons/iced-tea.png',
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
    icon: '../assets/icons/d1.png',
    size: [
      {
        name: 'Brownies',
        price: 44,
        storlek: 'vanlig'
      }
    ],
    allergens: 'Gluten',
    img: '../assets/desserts-images/brownies-img.png',
  },
  {
    id: 'Oreokake',
    icon: '../assets/icons/d2.png',
    size: [
      {
        name: 'Oreokake',
        price: 54,
        storlek: 'vanlig'
      }
    ],
    allergens: 'Soya, gluten, melk',
    img: '../assets/desserts-images/oreo-cake-img.png',
  },
  {
    id: 'Kanelbolle',
    icon: '../assets/icons/d3.png',
    size: [
      {
        name: 'Kanelbolle',
        price: 46,
        storlek: 'vanlig'
      }
    ],
    allergens: 'Egg, gluten, melk',
    img: '../assets/desserts-images/cinnamon-roll-img.png',
  },
  {
    id: 'Croissant',
    icon: '../assets/icons/d4.png',
    size: [
      {
        name: 'Croissant',
        price: 38,
        storlek: 'vanlig'
      }
    ],
    allergens: 'Egg, gluten, melk',
    img: '../assets/desserts-images/croissant-img.png',
  },
  {
    id: 'Chiapudding',
    icon: '../assets/icons/d5.png',
    size: [
      {
        name: 'Chiapudding',
        price: 42,
        storlek: 'vanlig'
      }
    ],
    allergens: 'Nøtter (mandelmelk)',
    img: '../assets/desserts-images/brownies-img.png',
  },
  {
    id: 'Brioche',
    icon: '../assets/icons/d6.png',
    size: [
      {
        name: 'Brioche',
        price: 44,
        storlek: 'vanlig'
      }
    ],
    allergens: 'Egg, gluten, melk',
    img: '../assets/desserts-images/brioche-img.png',
  },
  {

    id: 'Scones',
    icon: '../assets/icons/d4.png',
    size: [
      {
        name: 'Scones',
        price: 37,
        storlek: 'vanlig'
      }
    ],
    allergens: 'Egg, gluten, melk',
    img: '../assets/desserts-images/scones-img.png',
  },
];

export { warmBeverages, coldBeverages, desserts };
