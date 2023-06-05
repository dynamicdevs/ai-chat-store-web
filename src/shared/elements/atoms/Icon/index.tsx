import Logo from './icons/logo.svg';
import Cart from './icons/ic_cart.svg';
import Fb from './icons/ic_fb.svg';
import Ig from './icons/ic_ig.svg';
import Menu from './icons/ic_menu.svg';
import Person from './icons/ic_person.svg';
import Search from './icons/ic_search.svg';
import Yt from './icons/ic_yt.svg';
import ArrowRight from './icons/ic_arrow_right.svg';
import Store from './icons/ic_store.svg';
import Phone from './icons/ic_phone.svg';
import Card from './icons/ic_card.svg';
import Info from './icons/ic_info.svg';
import Truck from './icons/ic_truck.svg';

export const iconTypes = {
  logo: {
    component: Logo,
    alt: 'Logo',
  },
  ic_cart: {
    component: Cart,
    alt: 'Cart',
  },
  ic_fb: {
    component: Fb,
    alt: 'Fb',
  },
  ic_ig: {
    component: Ig,
    alt: 'Ig',
  },
  ic_menu: {
    component: Menu,
    alt: 'Menu',
  },
  ic_person: {
    component: Person,
    alt: 'Person',
  },
  ic_search: {
    component: Search,
    alt: 'Search',
  },
  ic_yt: {
    component: Yt,
    alt: 'Yt',
  },
  ic_arrow_right: {
    component: ArrowRight,
    alt: 'Arrow Right',
  },
  ic_store: {
    component: Store,
    alt: 'Store',
  },
  ic_phone: {
    component: Phone,
    alt: 'Phone',
  },
  ic_card: {
    component: Card,
    alt: 'Card',
  },
  ic_info: {
    component: Info,
    alt: 'Info',
  },
  ic_truck: {
    component: Truck,
    alt: 'Truck',
  },
};

export type IconNames = keyof typeof iconTypes;

type Props = {
  name: IconNames;
  className?: string;
  onClick?: (e?: any) => void;
};

export const IconComponent: React.FC<Props> = ({ name, ...props }) => {
  const Icon = iconTypes[name] ? iconTypes[name] : iconTypes.logo;
  return <Icon.component {...props} alt={Icon?.alt} />;
};
