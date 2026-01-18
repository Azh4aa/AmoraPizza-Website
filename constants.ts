import { Leaf, Award, Coffee, Dog, Clock, WheatOff, Droplet } from 'lucide-react';
import { Feature } from './types';

export const APP_LINKS = {
  menu: "https://app.qlub.io/qr/qa/amora-pizza-lusail-qsr/Menu/1/1/c533b133c8",
  instagram: "https://www.instagram.com/amorapizzaqatar",
  maps: "https://maps.google.com/?q=112+Lusail+5583", // Approximate query link
  phone: "+97400000000" // Placeholder phone
};

export const FEATURES: Feature[] = [
  {
    id: 'fermented',
    title: '48H Fermentation',
    description: 'Our dough rests for 48 hours to ensure lightness, flavor, and easier digestion.',
    icon: Clock
  },
  {
    id: 'organic',
    title: 'Organic Veggies',
    description: 'We source only the freshest, organic vegetables for our toppings.',
    icon: Leaf
  },
  {
    id: 'dietary',
    title: 'Dietary Friendly',
    description: 'Specializing in Keto, Vegan, and Gluten-Free options without compromising taste.',
    icon: WheatOff
  },
  {
    id: 'pet',
    title: 'Pet Friendly',
    description: 'Your furry friends are welcome to join you in our outdoor seating area.',
    icon: Dog
  }
];

export const HERO_IMAGES = [
  "https://picsum.photos/id/1080/1920/1080", // Strawberry/Fruit - represents fresh
  "https://picsum.photos/id/431/1920/1080", // Coffee
  "https://picsum.photos/id/292/1920/1080", // Food ingredients
];