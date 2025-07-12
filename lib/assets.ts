export const roomTypes = [
  {
    id: "single",
    name: "Single Room",
    image: "/images/r1.png",
    description:
      "A cozy single room perfect for solo travelers. Features a comfortable single bed, private bathroom, work desk, and all standard amenities for a peaceful stay.",
    price: 60,
    color: "#D9D9D9",
    textColor: "#0B0B0B"
  },
  {
    id: "double",
    name: "Double Room",
    image: "/images/r2.jpeg",
    description:
      "A double room accommodates two guests. It comes with one double bed or two single beds (upon request), a private bathroom, and all standard comforts. Ideal for couples or friends.",
    price: 80,
    color: "#0B0B0B",
    textColor: "#D9D9D9",
  },
  {
    id: "triple",
    name: "Triple Room",
    image: "/images/r3.jpeg",
    description:
      "Spacious triple room designed for three guests. Features comfortable bedding arrangements, private bathroom, and ample space for luggage. Perfect for families or groups.",
    price: 100,
    color: "#D9D9D9",
    textColor: "#0B0B0B"
  },
  {
    id: "quadruple",
    name: "Quadruple Room",
    image: "/images/r4.jpeg",
    description:
      "Our largest room accommodating four guests comfortably. Multiple bed configurations available, private bathroom, and extra space for relaxation. Ideal for families or groups of friends.",
    price: 120,
    color: "#0B0B0B",
    textColor: "#D9D9D9"
  },
];

export type RoomType = typeof roomTypes[number];

export const Rooms = [
  {
    id: "1",
    type: roomTypes[0].id,
    name: "Sea Suite",
    description: "A luxurious suite with a breathtaking sea view, perfect for romantic getaways.",
    roomAmenties: [
      "WiFi",
      "TV",
      "Mini Bar",
      "Pet Friendly",
      "Dinner",
      "Lunch",
      "Breakfast"
    ],
    Images: [
      "/images/room1.jpg",
      "/images/room1-2.jpg",
      "/images/room1-3.jpg",
      "/images/room1-4.jpg",
      "/images/room1-5.jpg",
    ],
    price: roomTypes[0].price,
    bathroom: 1,
  },
  {
    id: "2",
    type: roomTypes[1].id,
    name: "Deluxe Room",
    description: "Elegant and spacious, ideal for travelers seeking comfort and luxury.",
    roomAmenties: [
      "WiFi",
      "TV",
      "Dinner",
      "Lunch",
      "Breakfast"
    ],
    Images: [
      "/images/room2.jpg",
      "/images/room2-1.jpg",
      "/images/room2-2.jpg",
      "/images/room2-3.jpg",
      "/images/room2-4.jpg",
    ],
    price: roomTypes[1].price,
    bathroom: 1,
  },
  {
    id: "3",
    type: roomTypes[2].id,
    name: "Standard Room",
    description: "Comfortable room for business or leisure stays, budget-friendly and cozy.",
    roomAmenties: [
      "WiFi",
      "TV",
      "Dinner",
      "Lunch",
      "Breakfast"
    ],
    Images: [
      "/images/room3.jpg",
      "/images/room3-1.jpg",
      "/images/room3-2.jpg",
      "/images/room3-3.jpg",
      "/images/room3-4.jpg",
    ],
    price: roomTypes[2].price,
    bathroom: 2,
  },
  {
    id: "4",
    type: roomTypes[2].id,
    name: "Standard Room",
    description: "Comfortable room for business or leisure stays, budget-friendly and cozy.",
    roomAmenties: [
      "WiFi",
      "TV",
      "Dinner",
      "Lunch",
      "Breakfast"
    ],
    Images: [
      "/images/room3.jpg",
      "/images/room3-1.jpg",
      "/images/room3-2.jpg",
      "/images/room3-3.jpg",
      "/images/room3-4.jpg",
    ],
    price: roomTypes[2].price,
    bathroom: 2,
  },
  {
    id: "5",
    type: roomTypes[0].id,
    name: "Sea Suite",
    description: "A luxurious suite with a breathtaking sea view, perfect for romantic getaways.",
    roomAmenties: [
      "WiFi",
      "TV",
      "Mini Bar",
      "Pet Friendly",
      "Dinner",
      "Lunch",
      "Breakfast"
    ],
    Images: [
      "/images/room1.jpg",
      "/images/room1-2.jpg",
      "/images/room1-3.jpg",
      "/images/room1-4.jpg",
      "/images/room1-5.jpg",
    ],
    price: roomTypes[0].price,
    bathroom: 1,
  },
  {
    id: "6",
    type: roomTypes[2].id,
    name: "Standard Room",
    description: "Comfortable room for business or leisure stays, budget-friendly and cozy.",
    roomAmenties: [
      "WiFi",
      "TV",
      "Dinner",
      "Lunch",
      "Breakfast"
    ],
    Images: [
      "/images/room3.jpg",
      "/images/room3-1.jpg",
      "/images/room3-2.jpg",
      "/images/room3-3.jpg",
      "/images/room3-4.jpg",
    ],
    price: roomTypes[2].price,
    bathroom: 2,
  },
];
/*const offers = [
    {
      id: 1,
      title: "Weekend Getaway Special",
      description:
        "Book 2 nights and get 20% off your stay. Valid for weekend bookings.",
      discount: "20% OFF",
      validUntil: "2025-08-31",
      terms: "Valid for weekends only. Cannot be combined with other offers.",
    },
    {
      id: 2,
      title: "Extended Stay Discount",
      description: "Stay 5 nights or more and save 30% on your accommodation.",
      discount: "30% OFF",
      validUntil: "2025-09-15",
      terms: "Minimum 5 nights required. Advance booking required.",
    },
  ];*/
