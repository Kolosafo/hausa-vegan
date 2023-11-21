import { MarketCategoryItem } from "./types";

export const initializeProduct = {
  _id: "",
  productName: "",
  description: "",
  perType: "",
  price: "",
  discount: "",
  imgUrl: "",
  category: "",
  amountAvailable: "",
  marketSelling: "",
  quantityToBuy: 0,
};
export const dummyProducts: MarketCategoryItem[] = [
  {
    _id: "0",
    productName: "Carrot",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 200,
        option: "discount",
      },
    ],
    description: "This is a carrot",
    perType: "per basket",
    numberInStock: 30,
    price: "",
    discount: "",
  },
  {
    _id: "1",
    productName: "Tomato",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 150,
        option: "regular",
      },
    ],
    description: "This is a tomato",
    perType: "per pound",
    numberInStock: 50,
    price: "",
    discount: "",
  },
  {
    _id: "2",
    productName: "Lettuce",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 100,
        option: "regular",
      },
    ],
    description: "This is lettuce",
    perType: "per head",
    numberInStock: 60,
    price: "",
    discount: "",
  },
  {
    _id: "3",
    productName: "Onion",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 120,
        option: "regular",
      },
    ],
    description: "This is an onion",
    perType: "per bulb",
    numberInStock: 40,
    price: "",
    discount: "",
  },
  {
    _id: "4",
    productName: "Potato",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 180,
        option: "regular",
      },
    ],
    description: "This is a potato",
    perType: "per pound",
    numberInStock: 35,
    price: "",
    discount: "",
  },
  {
    _id: "5",
    productName: "Bell Pepper",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 140,
        option: "regular",
      },
    ],
    description: "This is a bell pepper",
    perType: "per piece",
    numberInStock: 55,
    price: "",
    discount: "",
  },
  {
    _id: "6",
    productName: "Apple",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 250,
        option: "regular",
      },
    ],
    description: "This is an apple",
    perType: "per piece",
    numberInStock: 65,
    price: "",
    discount: "",
  },
  {
    _id: "7",
    productName: "Orange",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 220,
        option: "regular",
      },
    ],
    description: "This is an orange",
    perType: "per piece",
    numberInStock: 50,
    price: "",
    discount: "",
  },
  {
    _id: "8",
    productName: "Banana",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 160,
        option: "regular",
      },
    ],
    description: "This is a banana",
    perType: "per bunch",
    numberInStock: 70,
    price: "",
    discount: "",
  },
  {
    _id: "9",
    productName: "Grapefruit",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 200,
        option: "regular",
      },
    ],
    description: "This is a grapefruit",
    perType: "per piece",
    numberInStock: 45,
    price: "",
    discount: "",
  },
  {
    _id: "10",
    productName: "Strawberry",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 300,
        option: "regular",
      },
    ],
    description: "This is a strawberry",
    perType: "per pint",
    numberInStock: 30,
    price: "",
    discount: "",
  },
  {
    _id: "11",
    productName: "Blueberry",
    imgUrl: "/img/products/fruits.png",
    priceOptions: [
      {
        price: 350,
        option: "regular",
      },
    ],
    description: "This is a blueberry",
    perType: "per pint",
    numberInStock: 30,
    price: "",
    discount: "",
  },
];

export const dummyBlogs: IPost[] = [
  {
    id: "1",
    title: "Hello World One",
    content: "<h1> THIS IS A H1 TAG </h1>",
    coverImg: "",
    status: "",
    slug: "hello_world_one",
    excerpt: "This is a test Blog!!",
  },
  {
    id: "2",
    title: "Hello World Two",
    content: "<h1> THIS IS A H1 TAG </h1>",
    coverImg: "",
    status: "",
    slug: "hello_world_two",
    excerpt: "This is a test Blog!!",
  },
  {
    id: "3",
    title: "Hello World Three",
    content: "<h1> THIS IS A H1 TAG </h1>",
    coverImg: "",
    status: "",
    slug: "hello_world_three",
    excerpt: "This is a test Blog!!",
  },
  {
    id: "4",
    title: "Hello World Four",
    content: "<h1> THIS IS A H1 TAG </h1>",
    coverImg: "",
    status: "",
    slug: "hello_world_four",
    excerpt: "This is a test Blog!!",
  },
  {
    id: "5",
    title: "Hello World Five",
    content: "<h1> THIS IS A H1 TAG </h1>",
    coverImg: "",
    status: "",
    slug: "hello_world_five",
    excerpt: "This is a test Blog!!",
  },
];


export const categoryLinks = [
  {
    text: "Spices",
    url: "/shop/products/?category=spices",
  },
  {
    text: "Merch",
    url: "/shop/products/?category=merch",
  },
  {
    text: "Cultural Artifacts",
    url: "/shop/products/?category=cultural artifacts",
  },
  {
    text: "Classes",
    url: "/shop/products/?category=classes",
  },
];
export const aboutUsLinks = [
  {
    text: "About Hausa Vegan",
    url: "/shop/products/?category=spices",
  },
  {
    text: "Contact us",
    url: "/shop/products/?category=merch",
  },
  {
    text: "News",
    url: "/shop/products/?category=cultural artifacts",
  },
];
export const accountLinks = [
  {
    text: "Login",
    url: "/",
  },
  {
    text: "My Cart",
    url: "/shop/cart",
  },
  {
    text: "Checkout",
    url: "/shop/checkout",
  },
];