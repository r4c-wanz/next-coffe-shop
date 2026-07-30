export type MenuItem = {
  id: number;
  name: string;
  component: string;
  price: number;
  category: string;
  image: string;
  /** Tampil di section "Menu Kami" halaman utama */
  featured?: boolean;
  /** Tampil di section "Best Seller" halaman utama */
  bestSeller?: boolean;
  /** Hanya dipakai kalau bestSeller true */
  rating?: number;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Es Tiramisu Latte",
    component: "Kopi + Susu + Tiramisu",
    price: 30000,
    category: "Ice Coffee",
    featured: true,
    bestSeller: true,
    rating: 4,
    image: "/images/menu/place-holder-image-coffee.png",
  },
  {
    id: 2,
    name: "Es Americano",
    component: "Kopi + Air + Es",
    price: 22000,
    category: "Ice Coffee",
    featured: true,
    image: "/images/menu/place-holder-image-coffee.png",
  },
  {
    id: 3,
    name: "Es Cappucino Latte",
    component: "Kopi + Susu + Cincau",
    price: 28000,
    category: "Ice Coffee",
    image: "/images/menu/place-holder-image-coffee.png",
  },
  {
    id: 4,
    name: "Es Caramel Latte",
    component: "Kopi + Susu + Caramel",
    price: 29000,
    category: "Ice Coffee",
    featured: true,
    image: "/images/menu/place-holder-image-coffee.png",
  },
  {
    id: 5,
    name: "Es Rose & Rosella",
    component: "Teh + Rose & Rosella",
    price: 25000,
    category: "Non Coffee",
    image: "/images/menu/place-holder-image-coffee.png",
  },
  {
    id: 6,
    name: "Es Signature Coklat",
    component: "Coklat + Susu",
    price: 32000,
    category: "Signature",
    image: "/images/menu/place-holder-image-coffee.png",
  },
  {
    id: 7,
    name: "Es Almond Latte",
    component: "Kopi + Susu + Almond",
    price: 31000,
    category: "Ice Coffee",
    image: "/images/menu/place-holder-image-coffee.png",
  },
  {
    id: 8,
    name: "Es Erly Grey",
    component: "Teh + Erly Grey",
    price: 24000,
    category: "Non Coffee",
    image: "/images/menu/place-holder-image-coffee.png",
  },
  {
    id: 9,
    name: "Es Creamy Matchachio",
    component: "Susu + Pistachio + Cream",
    price: 35000,
    category: "Signature",
    bestSeller: true,
    rating: 4,
    image: "/images/menu/place-holder-image-coffee.png",
  },
  {
    id: 10,
    name: "Es Matcha Signatur",
    component: "Susu + Bubuk Macth",
    price: 33000,
    category: "Signature",
    featured: true,
    bestSeller: true,
    rating: 4,
    image: "/images/menu/place-holder-image-coffee.png",
  },
];
