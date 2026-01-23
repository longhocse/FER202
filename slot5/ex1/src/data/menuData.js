import margherita from '../assets/margherita.jpg';
import mushroom from '../assets/mushroom.jpg';
import hawaiian from '../assets/hawaiian.jpg';
import pesto from '../assets/pesto.jpg';
import pepperoni from '../assets/pepperoni.jpg';
import bbq from '../assets/bbq.jpg';
import seafood from '../assets/seafood.jpg';
import veggie from '../assets/veggie.jpg';

const menuData = [
  {
    id: 1,
    title: 'Margherita Pizza',
    price: 24,
    oldPrice: 40,
    tag: 'SALE',
    image: margherita,
  },
  {
    id: 2,
    title: 'Mushroom Pizza',
    price: 25,
    image: mushroom,
  },
  {
    id: 3,
    title: 'Hawaiian Pizza',
    price: 30,
    tag: 'NEW',
    image: hawaiian,
  },
  {
    id: 4,
    title: 'Pesto Pizza',
    price: 30,
    oldPrice: 40,
    tag: 'SALE',
    image: pesto,
  },

  // ===== PIZZA MỚI =====
  {
    id: 5,
    title: 'Pepperoni Pizza',
    price: 28,
    image: pepperoni,
  },
  {
    id: 6,
    title: 'BBQ Chicken Pizza',
    price: 32,
    tag: 'NEW',
    image: bbq,
  },
  {
    id: 7,
    title: 'Seafood Pizza',
    price: 35,
    image: seafood,
  },
  {
    id: 8,
    title: 'Veggie Pizza',
    price: 26,
    image: veggie,
  },
];

export default menuData;
