import Logo from './Icons/logo.svg';
import Cart from './Icons/ic_cart.svg';
import Fb from './Icons/ic_fb.svg';
import Ig from './Icons/ic_ig.svg';
import Menu from './Icons/ic_menu.svg';
import Person from './Icons/ic_person.svg';
import Search from './Icons/ic_search.svg';
import Yt from './Icons/ic_yt.svg';
import ArrowRight from './Icons/ic_arrow_right.svg';
import Store from './Icons/ic_store.svg';
import Phone from './Icons/ic_phone.svg';
import Card from './Icons/ic_card.svg';
import Info from './Icons/ic_info.svg';
import Truck from './Icons/ic_truck.svg';
import Share from './Icons/ic_share.svg';
import Shield from './Icons/ic_shield.svg';
import CardOutline from './Icons/ic_card_outline.svg';
import TruckOutline from './Icons/ic_truck_outline.svg';
import Shop from './Icons/ic_shop.svg';
import Chevron from './Icons/ic_chevron.svg';
import Minus from './Icons/ic_minus.svg';
import Plus from './Icons/ic_plus.svg';
import Bubble from './Icons/ic_bubble.svg';
import MiniLogo from './Icons/mini_logo.svg';
import Exit from './Icons/ic_exit.svg';
import Send from './Icons/ic_send.svg';

export const iconTypes = {
  logo: {
    component: Logo,
    alt: 'Logo',
  },
  mini_logo: {
    component: MiniLogo,
    alt: 'MiniLogo',
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
  ic_share: {
    component: Share,
    alt: 'Share',
  },
  ic_shield: {
    component: Shield,
    alt: 'Shield',
  },
  ic_card_outline: {
    component: CardOutline,
    alt: 'Card Outline',
  },
  ic_truck_outline: {
    component: TruckOutline,
    alt: 'Truck Outline',
  },
  ic_shop: {
    component: Shop,
    alt: 'Shop',
  },
  ic_chevron: {
    component: Chevron,
    alt: 'Chevron',
  },
  ic_minus: {
    component: Minus,
    alt: 'Minus',
  },
  ic_plus: {
    component: Plus,
    alt: 'Plus',
  },
  ic_bubble: {
    component: Bubble,
    alt: 'Bubble',
  },
  ic_exit: {
    component: Exit,
    alt: 'Exit',
  },
  ic_send: {
    component: Send,
    alt: 'Send',
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
