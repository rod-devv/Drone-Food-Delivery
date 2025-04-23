const options = {
  burgers: [
    { id: "extra-cheese", name: "Extra Cheese", price: 1.5 },
    { id: "olives", name: "Add olives", price: 2.0 },
    { id: "no-onions", name: "No Onions", price: 0 },
    { id: "extra-sauce", name: "Extra Sauce", price: 0.5 },
  ],
  sides: [
    { id: "extra-sauce", name: "Extra Sauce", price: 0.5 },
    { id: "spicy-seasoning", name: "Spicy Seasoning", price: 0.3 },
    { id: "extra-salt", name: "Extra Salt", price: 0 },
    { id: "herb-mix", name: "Herb Mix", price: 0.5 },
  ],
  drinks: [
    { id: "coca-cola", name: "Coca-Cola", price: 0 },
    { id: "sprite", name: "Sprite", price: 0 },
    { id: "fanta", name: "Fanta", price: 0 },
    { id: "iced-tea", name: "Iced Tea", price: 0 },
  ],
  desserts: [
    { id: "whipped-cream", name: "Whipped Cream", price: 0.5 },
    { id: "sprinkles", name: "Sprinkles", price: 0.3 },
    { id: "chocolate-sauce", name: "Chocolate Sauce", price: 0.5 },
    { id: "caramel-sauce", name: "Caramel Sauce", price: 0.5 },
  ],
  chicken: [
    { id: "extra-crispy", name: "Extra Crispy", price: 0.5 },
    { id: "spicy-sauce", name: "Spicy Sauce", price: 0.5 },
    { id: "garlic-mayo", name: "Garlic Mayo", price: 0.5 },
    { id: "extra-lettuce", name: "Extra Lettuce", price: 0 },
  ],
  subs: [
    { id: "extra-cheese", name: "Extra Cheese", price: 1.0 },

    { id: "avocado", name: "Add Avocado", price: 2.0 },
    { id: "no-onions", name: "No Onions", price: 0 },
  ],
  salads: [
    { id: "extra-dressing", name: "Extra Dressing", price: 0.5 },
    { id: "grilled-chicken", name: "Add Grilled Chicken", price: 2.0 },
    { id: "extra-croutons", name: "Extra Croutons", price: 0.5 },
    { id: "parmesan", name: "Extra Parmesan", price: 0.5 },
  ],
  breakfast: [
    { id: "extra-egg", name: "Extra Egg", price: 1.0 },
    { id: "extra-cheese", name: "Extra Cheese", price: 1.0 },

    { id: "hash-browns", name: "Add Hash Browns", price: 1.0 },
  ],
  appetizers: [
    { id: "extra-sauce", name: "Extra Sauce", price: 0.5 },
    { id: "cheese-dip", name: "Cheese Dip", price: 0.5 },
    { id: "ranch", name: "Ranch Dressing", price: 0.5 },
    { id: "extra-spice", name: "Extra Spice", price: 0.3 },
  ],
  pasta: [
    { id: "extra-cheese", name: "Extra Cheese", price: 1.5 },
    { id: "garlic-bread", name: "Garlic Bread", price: 2.0 },
    { id: "extra-basil", name: "Extra Basil", price: 0.5 },
    { id: "add-meatballs", name: "Add Meatballs", price: 3.0 },
  ],
  pizza: [
    { id: "extra-cheese", name: "Extra Cheese", price: 1.5 },
    { id: "pepperoni", name: "Add Pepperoni", price: 2.0 },
    { id: "extra-mushrooms", name: "Extra Mushrooms", price: 1.0 },
    { id: "add-olives", name: "Add Olives", price: 0.5 },
  ],
  entrees: [
    { id: "extra-sauce", name: "Extra Sauce", price: 0.5 },
    { id: "side-salad", name: "Side Salad", price: 2.0 },
    { id: "garlic-butter", name: "Garlic Butter", price: 1.0 },
    { id: "grilled-veg", name: "Grilled Vegetables", price: 1.5 },
  ],
  starters: [
    { id: "dipping-sauce", name: "Dipping Sauce", price: 0.5 },
    { id: "extra-spice", name: "Extra Spice", price: 0.3 },
    { id: "lemon-wedge", name: "Lemon Wedge", price: 0 },
    { id: "extra-parsley", name: "Extra Parsley", price: 0.2 },
  ],
  seafood: [
    { id: "lemon-butter", name: "Lemon Butter Sauce", price: 1.5 },
    { id: "tartar-sauce", name: "Tartar Sauce", price: 0.5 },
    { id: "extra-herbs", name: "Extra Herbs", price: 0.5 },
    { id: "garlic-sauce", name: "Garlic Sauce", price: 0.5 },
  ],
  "sushi-rolls": [
    { id: "extra-ginger", name: "Extra Ginger", price: 0.5 },
    { id: "extra-wasabi", name: "Extra Wasabi", price: 0.5 },
    { id: "extra-soy-sauce", name: "Extra Soy Sauce", price: 0 },
    { id: "extra-sesame", name: "Extra Sesame Seeds", price: 0.3 },
  ],
  sashimi: [
    { id: "extra-wasabi", name: "Extra Wasabi", price: 0.5 },
    { id: "soy-sauce", name: "Soy Sauce", price: 0 },
    { id: "lemon-slice", name: "Lemon Slice", price: 0 },
    { id: "pickled-ginger", name: "Pickled Ginger", price: 0.3 },
  ],
  nigiri: [
    { id: "wasabi", name: "Wasabi", price: 0.5 },
    { id: "soy-sauce", name: "Soy Sauce", price: 0 },
    { id: "ginger", name: "Ginger", price: 0.3 },
    { id: "sesame-seeds", name: "Sesame Seeds", price: 0.2 },
  ],
  specials: [
    { id: "chef-special", name: "Chef's Special Addition", price: 3.0 },
    { id: "extra-dipping", name: "Extra Dipping Sauce", price: 0.5 },
    { id: "garnish", name: "Special Garnish", price: 0.5 },
    { id: "seasoning", name: "Special Seasoning", price: 0.5 },
  ],
  cookies: [
    { id: "add-ice-cream", name: "Add Ice Cream", price: 1.5 },
    { id: "sprinkles", name: "Sprinkles", price: 0.3 },
    { id: "chocolate-drizzle", name: "Chocolate Drizzle", price: 0.5 },
    { id: "whipped-cream", name: "Whipped Cream", price: 0.5 },
  ],
};

const restaurants = [
  // Fast Food
  {
    id: "burger-king-nyc",
    name: "Burger King",
    category: "fast-food",
    city: "nyc",
    address: "123 Broadway St",
    description:
      "Burger King® (Willow Pass Rd) in Concord is a fast food restaurant known for its flame-grilled burgers and classic American meals. Popular items include the Whopper® Meal, King™ Sandwich, and Crispy Chicken Sandwich, often paired with Onion Rings or Medium Fries. Guests also enjoy sweet options like the Hershey’s® Sundae Pie and Soft Serve Cone. This location is especially popular for quick lunches and late-night cravings.",
    rating: 4.2,
    reviewCount: 4,
    priceRange: "$$",
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    imageUrl:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/burger.jpg",
    headerImage: "/images/burger.jpg",
    coordinates: [-74.0055, 40.7112],
    logo: "/images/burger-logo.png",
    hours: {
      monday: "10:00 AM - 11:00 PM",
      tuesday: "10:00 AM - 11:00 PM",
      wednesday: "10:00 AM - 11:00 PM",
      thursday: "10:00 AM - 11:00 PM",
      friday: "10:00 AM - 12:00 AM",
      saturday: "10:00 AM - 12:00 AM",
      sunday: "11:00 AM - 10:00 PM",
    },
    menu: {
      categories: [
        { id: "burgers", name: "Burgers" },
        { id: "sides", name: "Sides" },
        { id: "drinks", name: "Drinks" },
        { id: "desserts", name: "Desserts" },
      ],
      items: [
        {
          id: "whopper",
          name: "Whopper",
          description:
            "Flame-grilled beef patty with juicy tomatoes, fresh lettuce, mayonnaise, ketchup, crunchy pickles, and sliced onions on a toasted sesame seed bun.",
          price: 5.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/whopper.jpg",
          category: "burgers",
          popular: true,
        },
        {
          id: "double-whopper",
          name: "Double Whopper",
          description:
            "Two flame-grilled beef patties with juicy tomatoes, fresh lettuce, mayonnaise, ketchup, crunchy pickles, and sliced onions on a toasted sesame seed bun.",
          price: 7.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/double-whopper.jpg",
          category: "burgers",
          popular: true,
        },
        {
          id: "chicken-sandwich",
          name: "Original Chicken Sandwich",
          description:
            "Lightly breaded chicken patty topped with shredded lettuce and creamy mayonnaise on a sesame seed bun.",
          price: 4.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/chicken-sandwich.jpg",
          category: "burgers",
        },
        {
          id: "fries-small",
          name: "Small French Fries",
          description: "Golden, crispy, and thickly cut French fries.",
          price: 1.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/fries.jpg",
          category: "sides",
        },
        {
          id: "fries-medium",
          name: "Medium French Fries",
          description: "Golden, crispy, and thickly cut French fries.",
          price: 2.49,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/fries.jpg",
          category: "sides",
          popular: true,
        },
        {
          id: "onion-rings",
          name: "Onion Rings",
          description: "Crispy on the outside, sweet and tender on the inside.",
          price: 2.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/onion-rings.jpg",
          category: "sides",
        },
        {
          id: "soda",
          name: "Medium Coca-Cola",
          description: "Refreshing Coca-Cola served with ice.",
          price: 1.89,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/cola.jpg",
          category: "drinks",
        },

        {
          id: "chocolate-shake",
          name: "Chocolate Shake",
          description:
            "Creamy, rich chocolate shake topped with whipped cream.",
          price: 3.49,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/chocolate-shake.jpg",
          category: "drinks",
          popular: true,
        },
        {
          id: "sundae",
          name: "Hot Fudge Sundae",
          description: "Vanilla soft serve topped with hot fudge sauce.",
          price: 2.29,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/sundae.jpg",
          category: "desserts",
        },
        {
          id: "pie",
          name: "Apple Pie",
          description: "Flaky pastry filled with apple slices and cinnamon.",
          price: 1.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/apple-pie.jpg",
          category: "desserts",
        },
      ],
    },

    // Add this reviews array inside each restaurant object

    // For example, for the "burger-king-nyc" restaurant:
    reviews: [
      {
        id: "rev1",
        userName: "Michael S.",
        rating: 5,
        date: "February 12, 2025",
        comment:
          "The Whopper was fantastic! Delivery was quick and the food arrived hot. Will order again.",
        profileImage: "/images/profiles/user1.jpg",
      },
      {
        id: "rev2",
        userName: "Jessica T.",
        rating: 4,
        date: "February 8, 2025",
        comment:
          "Good food, reasonable prices. The fries were a bit cold but everything else was perfect.",
        profileImage: "/images/profiles/user2.jpg",
      },
      {
        id: "rev3",
        userName: "David L.",
        rating: 5,
        date: "January 30, 2025",
        comment:
          "Best fast food in the area! Always consistent quality and the delivery is super fast.",
        profileImage: "/images/profiles/user3.jpg",
      },
    ],
  },
  {
    id: "mcdonalds-nyc",
    name: "McDonalds",
    category: "fast-food",
    city: "nyc",
    address: "456 5th Avenue",
    description: "Classic American fast food chain",
    rating: 3.9,
    reviewCount: 4,
    priceRange: "$",
    deliveryTime: "15-30 min",
    deliveryFee: "$2.49",
    imageUrl:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/macdonalds.jpg",
    headerImage:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/mcdonalds-header.jpg",
    coordinates: [-73.984, 40.7549],
    hours: {
      monday: "6:00 AM - 11:00 PM",
      tuesday: "6:00 AM - 11:00 PM",
      wednesday: "6:00 AM - 11:00 PM",
      thursday: "6:00 AM - 11:00 PM",
      friday: "6:00 AM - 12:00 AM",
      saturday: "6:00 AM - 12:00 AM",
      sunday: "7:00 AM - 11:00 PM",
    },
    menu: {
      categories: [
        { id: "burgers", name: "Burgers" },
        { id: "chicken", name: "Chicken & Fish" },
        { id: "sides", name: "Sides" },
        { id: "breakfast", name: "Breakfast" },
        { id: "desserts", name: "Desserts & Shakes" },
        { id: "drinks", name: "Drinks" },
      ],
      items: [
        {
          id: "big-mac",
          name: "Big Mac",
          description:
            "Two 100% beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
          price: 5.49,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/big-mac.jpg",
          category: "burgers",
          popular: true,
        },
        {
          id: "quarter-pounder",
          name: "Quarter Pounder with Cheese",
          description:
            "100% fresh beef patty, two slices of cheese, onions, pickles, and ketchup on a sesame seed bun.",
          price: 5.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/quarter-pounder.jpg",
          category: "burgers",
          popular: true,
        },
        {
          id: "mcchicken",
          name: "McChicken",
          description:
            "Crispy chicken patty with lettuce and mayo on a toasted bun.",
          price: 1.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/mcchicken.jpg",
          category: "chicken",
        },
        {
          id: "filet-o-fish",
          name: "Filet-O-Fish",
          description:
            "Fish filet with tartar sauce and American cheese on a steamed bun.",
          price: 4.49,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/filet-o-fish.jpg",
          category: "chicken",
        },
        {
          id: "fries",
          name: "Medium French Fries",
          description: "Golden, crispy, and delicious French fries.",
          price: 2.79,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/mcdonalds-fries.jpg",
          category: "sides",
          popular: true,
        },
        {
          id: "egg-mcmuffin",
          name: "Egg McMuffin",
          description:
            "Canadian beef, egg, and American cheese on a toasted English muffin.",
          price: 3.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/egg-mcmuffin.jpg",
          category: "breakfast",
          popular: true,
        },
        {
          id: "mcflurry",
          name: "McFlurry with OREO Cookies",
          description: "Vanilla soft serve with OREO cookie pieces.",
          price: 3.29,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/mcflurry.jpg",
          category: "desserts",
        },
        {
          id: "apple-pie",
          name: "Baked Apple Pie",
          description: "A delicious crispy pie crust filled with apples.",
          price: 1.29,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/Apple Pie.jpg",
          category: "desserts",
        },
        {
          id: "soda",
          name: "Medium Coca-Cola",
          description: "Refreshing Coca-Cola served with ice.",
          price: 1.89,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/cola.jpg",
          category: "drinks",
        },
      ],
    },

    // For example, for the "burger-king-nyc" restaurant:
    reviews: [
      {
        id: "rev1",
        userName: "Michael S.",
        rating: 5,
        date: "February 12, 2025",
        comment:
          "The Whopper was fantastic! Delivery was quick and the food arrived hot. Will order again.",
        profileImage: "/images/profiles/user1.jpg",
      },
      {
        id: "rev2",
        userName: "Jessica T.",
        rating: 4,
        date: "February 8, 2025",
        comment:
          "Good food, reasonable prices. The fries were a bit cold but everything else was perfect.",
        profileImage: "/images/profiles/user2.jpg",
      },
      {
        id: "rev3",
        userName: "David L.",
        rating: 5,
        date: "January 30, 2025",
        comment:
          "Best fast food in the area! Always consistent quality and the delivery is super fast.",
        profileImage: "/images/profiles/user3.jpg",
      },
    ],
  },

  // Add this reviews array inside each restaurant object

  // More restaurants with similar detailed menu data...
  {
    id: "subway-la",
    name: "Subway",
    category: "fast-food",
    city: "la",
    address: "789 Hollywood Blvd",
    description: "Fresh and custom made sandwiches",
    rating: 4.0,
    reviewCount: 4,
    priceRange: "$$",
    deliveryTime: "20-35 min",
    deliveryFee: "$1.99",
    imageUrl:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/subway.jpg",
    headerImage:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/subway-header.jpg",
    coordinates: [-118.3228, 34.1016],
    hours: {
      monday: "10:00 AM - 11:00 PM",
      tuesday: "10:00 AM - 11:00 PM",
      wednesday: "10:00 AM - 11:00 PM",
      thursday: "10:00 AM - 11:00 PM",
      friday: "10:00 AM - 12:00 AM",
      saturday: "10:00 AM - 12:00 AM",
      sunday: "11:00 AM - 10:00 PM",
    },
    menu: {
      categories: [
        { id: "subs", name: "Submarine Sandwiches" },
        { id: "salads", name: "Fresh Salads" },
        { id: "sides", name: "Sides & Extras" },
        { id: "drinks", name: "Drinks" },
        { id: "cookies", name: "Cookies & Desserts" },
      ],
      items: [
        // Add these items to Subway's items array:

        // For salads category
        {
          id: "veggie-salad",
          name: "Veggie Delite Salad",
          description:
            "Fresh lettuce topped with your choice of crisp veggies.",
          price: 6.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/veggie-salad.jpg",
          category: "salads",
        },

        // For sides category
        {
          id: "chips",
          name: "Potato Chips",
          description: "Crispy potato chips, perfect with any sandwich.",
          price: 1.29,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/chips.jpg",
          category: "sides",
        },

        // For cookies category
        {
          id: "chocolate-chip-cookie",
          name: "Chocolate Chip Cookie",
          description: "Freshly baked chocolate chip cookie.",
          price: 0.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/choc-chip-cookie.jpg",
          category: "cookies",
        },
        // Menu items for Subway...
        {
          id: "italian-bmt",
          name: "Italian B.M.T.",
          description:
            "Genoa salami, spicy pepperoni, and Black Forest ham with your choice of vegetables and condiments.",
          price: 6.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/italian-bmt.jpg",
          category: "subs",
          popular: true,
        },
        {
          id: "meatball-marinara",
          name: "Meatball Marinara",
          description: "Italian-style meatballs in marinara sauce.",
          price: 5.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/meatball-marinara.jpg",
          category: "subs",
          popular: true,
        },
      ],
    },
  },

  // Restaurants
  {
    id: "italian-place-nyc",
    name: "Little Italy",
    category: "restaurants",
    city: "nyc",
    address: "321 Mulberry Street",
    description: "Authentic Italian cuisine",
    rating: 4.7,
    reviewCount: 2,
    priceRange: "$$$",
    deliveryTime: "30-45 min",
    deliveryFee: "$3.99",
    imageUrl:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/rest.jpg",
    headerImage:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/little-italy-header.jpg",
    coordinates: [-73.9957, 40.7195],
    hours: {
      monday: "10:00 AM - 11:00 PM",
      tuesday: "10:00 AM - 11:00 PM",
      wednesday: "10:00 AM - 11:00 PM",
      thursday: "10:00 AM - 11:00 PM",
      friday: "10:00 AM - 12:00 AM",
      saturday: "10:00 AM - 12:00 AM",
      sunday: "11:00 AM - 10:00 PM",
    },
    menu: {
      categories: [
        { id: "appetizers", name: "Appetizers" },
        { id: "pasta", name: "Pasta" },
        { id: "pizza", name: "Pizza" },
        { id: "entrees", name: "Main Courses" },
        { id: "desserts", name: "Desserts" },
        { id: "drinks", name: "Drinks" },
      ],
      items: [
        // Add these items to Little Italy's items array:

        // For entrees category
        {
          id: "chicken-parmigiana",
          name: "Chicken Parmigiana",
          description:
            "Breaded chicken breast topped with marinara sauce and melted mozzarella, served with pasta.",
          price: 18.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/chicken-parm.jpg",
          category: "entrees",
        },

        // For drinks category
        {
          id: "soda",
          name: "Medium Coca-Cola",
          description: "Refreshing Coca-Cola served with ice.",
          price: 1.89,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/cola.jpg",
          category: "drinks",
        },
        {
          id: "bruschetta",
          name: "Bruschetta",
          description:
            "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil.",
          price: 8.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/bruschetta.jpg",
          category: "appetizers",
        },
        {
          id: "calamari",
          name: "Fried Calamari",
          description:
            "Lightly fried squid served with marinara sauce and lemon.",
          price: 12.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/calamari.jpg",
          category: "appetizers",
          popular: true,
        },
        {
          id: "spaghetti-meatballs",
          name: "Spaghetti & Meatballs",
          description:
            "Classic spaghetti with homemade meatballs in marinara sauce.",
          price: 16.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/spaghetti-meatballs.jpg",
          category: "pasta",
          popular: true,
        },
        {
          id: "fettuccine-alfredo",
          name: "Fettuccine Alfredo",
          description: "Fettuccine pasta in a creamy Parmesan cheese sauce.",
          price: 15.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/fettuccine-alfredo.jpg",
          category: "pasta",
        },
        {
          id: "margherita-pizza",
          name: "Margherita Pizza",
          description:
            "Traditional pizza with tomato sauce, fresh mozzarella, and basil.",
          price: 14.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/margherita-pizza.jpg",
          category: "pizza",
          popular: true,
        },
        {
          id: "tiramisu",
          name: "Tiramisu",
          description:
            "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
          price: 7.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/tiramisu.jpg",
          category: "desserts",
          popular: true,
        },
      ],
    },

    // For example, for the "burger-king-nyc" restaurant:
    reviews: [
      {
        id: "rev1",
        userName: "Michael S.",
        rating: 5,
        date: "February 12, 2025",
        comment:
          "The Whopper was fantastic! Delivery was quick and the food arrived hot. Will order again.",
        profileImage: "/images/profiles/user1.jpg",
      },
      {
        id: "rev2",
        userName: "Jessica T.",
        rating: 4,
        date: "February 8, 2025",
        comment:
          "Good food, reasonable prices. The fries were a bit cold but everything else was perfect.",
        profileImage: "/images/profiles/user2.jpg",
      },
      {
        id: "rev3",
        userName: "David L.",
        rating: 5,
        date: "January 30, 2025",
        comment:
          "Best fast food in the area! Always consistent quality and the delivery is super fast.",
        profileImage: "/images/profiles/user3.jpg",
      },
    ],
  },

  // Add this reviews array inside each restaurant object

  {
    id: "steak-house-chicago",
    name: "Chicago Steakhouse",
    category: "restaurants",
    city: "chicago",
    address: "412 Michigan Ave",
    description: "Premium steaks and fine dining",
    rating: 4.9,
    reviewCount: 5,
    priceRange: "$$$$",
    deliveryTime: "40-55 min",
    deliveryFee: "$4.99",
    imageUrl:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/steakhouse.jpg",
    headerImage:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/steakhouse-header.jpg",
    coordinates: [-87.6245, 41.8901],
    hours: {
      monday: "10:00 AM - 11:00 PM",
      tuesday: "10:00 AM - 11:00 PM",
      wednesday: "10:00 AM - 11:00 PM",
      thursday: "10:00 AM - 11:00 PM",
      friday: "10:00 AM - 12:00 AM",
      saturday: "10:00 AM - 12:00 AM",
      sunday: "11:00 AM - 10:00 PM",
    },
    menu: {
      categories: [
        { id: "steaks", name: "Premium Steaks" },
        { id: "seafood", name: "Seafood" },
        { id: "sides", name: "Sides" },
        { id: "desserts", name: "Desserts" },
        { id: "drinks", name: "Drinks" },
      ],
      items: [
        // Add these items to Chicago Steakhouse's items array:

        // For seafood category
        {
          id: "grilled-salmon",
          name: "Grilled Atlantic Salmon",
          description:
            "Fresh Atlantic salmon fillet, grilled to perfection and served with lemon butter sauce.",
          price: 32.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/grilled-salmon.jpg",
          category: "seafood",
        },

        // For sides category
        {
          id: "mashed-potatoes",
          name: "Garlic Mashed Potatoes",
          description: "Creamy mashed potatoes with roasted garlic and butter.",
          price: 9.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/mashed-potatoes.jpg",
          category: "sides",
        },

        // For desserts category
        {
          id: "cheesecake",
          name: "New York Style Cheesecake",
          description:
            "Rich and creamy cheesecake with a graham cracker crust.",
          price: 8.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/cheesecake.jpg",
          category: "desserts",
        },

        // For drinks category
        {
          id: "soda",
          name: "Medium Coca-Cola",
          description: "Refreshing Coca-Cola served with ice.",
          price: 1.89,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/cola.jpg",
          category: "drinks",
        },
        // Menu items...
        {
          id: "ribeye",
          name: "Ribeye Steak",
          description:
            "16oz USDA Prime ribeye, perfectly marbled for peak flavor and tenderness.",
          price: 42.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/ribeye.jpg",
          category: "steaks",
          popular: true,
        },
        {
          id: "filet-mignon",
          name: "Filet Mignon",
          description: "8oz center-cut filet, lean yet succulent and tender.",
          price: 46.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/filet-mignon.jpg",
          category: "steaks",
          popular: true,
        },
      ],
    },

    // For example, for the "burger-king-nyc" restaurant:
    reviews: [
      {
        id: "rev1",
        userName: "Michael S.",
        rating: 5,
        date: "February 12, 2025",
        comment:
          "The Whopper was fantastic! Delivery was quick and the food arrived hot. Will order again.",
        profileImage: "/images/profiles/user1.jpg",
      },
      {
        id: "rev2",
        userName: "Jessica T.",
        rating: 4,
        date: "February 8, 2025",
        comment:
          "Good food, reasonable prices. The fries were a bit cold but everything else was perfect.",
        profileImage: "/images/profiles/user2.jpg",
      },
      {
        id: "rev3",
        userName: "David L.",
        rating: 5,
        date: "January 30, 2025",
        comment:
          "Best fast food in the area! Always consistent quality and the delivery is super fast.",
        profileImage: "/images/profiles/user3.jpg",
      },
    ],
  },

  // Add this reviews array inside each restaurant object

  {
    id: "sushi-place-la",
    name: "Sushi Heaven",
    category: "restaurants",
    city: "la",
    address: "567 Venice Beach Road",
    description: "Fresh sushi and Japanese cuisine",
    rating: 4.6,
    reviewCount: 4,
    priceRange: "$$$",
    deliveryTime: "25-40 min",
    deliveryFee: "$3.49",
    imageUrl:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/sushi.jpg",
    headerImage:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/sushi-header.jpg",
    coordinates: [-118.4695, 33.985],
    hours: {
      monday: "10:00 AM - 11:00 PM",
      tuesday: "10:00 AM - 11:00 PM",
      wednesday: "10:00 AM - 11:00 PM",
      thursday: "10:00 AM - 11:00 PM",
      friday: "10:00 AM - 12:00 AM",
      saturday: "10:00 AM - 12:00 AM",
      sunday: "11:00 AM - 10:00 PM",
    },
    menu: {
      categories: [
        { id: "appetizers", name: "Appetizers" },
        { id: "sushi-rolls", name: "Sushi Rolls" },
        { id: "sashimi", name: "Sashimi" },
        { id: "nigiri", name: "Nigiri" },
        { id: "specials", name: "Chef Specials" },
        { id: "drinks", name: "Drinks" },
      ],
      items: [
        // Add these items to Sushi Heaven's items array:

        // For appetizers category
        {
          id: "edamame",
          name: "Edamame",
          description: "Steamed soybean pods lightly salted.",
          price: 5.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/edamame.jpg",
          category: "appetizers",
        },

        // For sashimi category
        {
          id: "salmon-sashimi",
          name: "Salmon Sashimi",
          description: "Fresh slices of premium salmon (5 pieces).",
          price: 12.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/salmon-sashimi.jpg",
          category: "sashimi",
        },

        // For nigiri category
        {
          id: "tuna-nigiri",
          name: "Tuna Nigiri",
          description: "Fresh slices of tuna on pressed rice (2 pieces).",
          price: 6.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/tuna-nigiri.jpg",
          category: "nigiri",
        },

        // For specials category
        {
          id: "rainbow-roll",
          name: "Rainbow Roll",
          description:
            "California roll topped with assorted sashimi and avocado.",
          price: 16.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/rainbow-roll.jpg",
          category: "specials",
        },
        // Menu items...
        {
          id: "california-roll",
          name: "California Roll",
          description:
            "Crab, avocado, and cucumber wrapped in seaweed and rice.",
          price: 8.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/california-roll.jpg",
          category: "sushi-rolls",
          popular: true,
        },
        {
          id: "dragon-roll",
          name: "Dragon Roll",
          description:
            "Eel, cucumber, and avocado topped with thinly sliced avocado.",
          price: 14.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/dragon-roll.jpg",
          category: "sushi-rolls",
          popular: true,
        },

        {
          id: "soda",
          name: "Medium Coca-Cola",
          description: "Refreshing Coca-Cola served with ice.",
          price: 1.89,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/cola.jpg",
          category: "drinks",
        },
      ],
    },
  },

  // Add these restaurants to the restaurants array

  {
    id: "thai-palace-chicago",
    name: "Thai Palace",
    category: "restaurants",
    city: "chicago",
    address: "678 Spicy Ln",
    description:
      "Authentic Thai cuisine featuring traditional spicy and aromatic dishes",
    rating: 4.5,
    reviewCount: 4,
    priceRange: "$$",
    deliveryTime: "25-40 min",
    deliveryFee: "$2.99",
    imageUrl:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/thai.jpg",
    headerImage:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/thai-header.jpg",
    coordinates: [-87.6301, 41.8785],
    hours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    menu: {
      categories: [
        { id: "appetizers", name: "Appetizers" },
        { id: "soups", name: "Soups" },
        { id: "curries", name: "Curries" },
        { id: "noodles", name: "Noodle Dishes" },
        { id: "desserts", name: "Desserts" },
        { id: "drinks", name: "Drinks" },
      ],
      items: [
        // For soups category
        {
          id: "tom-yum",
          name: "Tom Yum Soup",
          description:
            "Hot and sour soup with lemongrass, lime leaves, and mushrooms.",
          price: 7.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/tom-yum.jpg",
          category: "soups",
        },

        // For curries category
        {
          id: "green-curry",
          name: "Green Curry",
          description:
            "Spicy green curry with bamboo shoots, bell peppers, and basil leaves.",
          price: 14.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/green-curry.jpg",
          category: "curries",
        },

        // For desserts category
        {
          id: "churros",
          name: "Churros con Chocolate",
          description:
            "Fried dough pastry coated in cinnamon sugar, served with chocolate dipping sauce.",
          price: 6.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/churros.jpg",
          category: "desserts",
        },
        // For soups category
        {
          id: "tom-yum",
          name: "Tom Yum Soup",
          description:
            "Hot and sour soup with lemongrass, lime leaves, and mushrooms.",
          price: 7.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/tom-yum.jpg",
          category: "soups",
        },

        // For curries category
        {
          id: "green-curry",
          name: "Green Curry",
          description:
            "Spicy green curry with bamboo shoots, bell peppers, and basil leaves.",
          price: 14.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/green-curry.jpg",
          category: "curries",
        }, // For drinks category
        {
          id: "thai-iced-tea",
          name: "Thai Iced Tea",
          description: "Sweet tea with milk served cold over ice.",
          price: 3.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/thai-iced-tea.jpg",
          category: "drinks",
        },
        {
          id: "spring-rolls",
          name: "Spring Rolls",
          description:
            "Crispy rolls filled with vegetables, served with sweet chili sauce",
          price: 6.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/spring-rolls.jpg",
          category: "appetizers",
          popular: true,
        },
        {
          id: "pad-thai",
          name: "Pad Thai",
          description:
            "Stir-fried rice noodles with tofu, bean sprouts, peanuts, and egg",
          price: 13.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/pad-thai.jpg",
          category: "noodles",
          popular: true,
        },
      ],
    },
    reviews: [
      {
        id: "rev1",
        userName: "Sarah K.",
        rating: 5,
        date: "March 15, 2025",
        comment:
          "Best Thai food in Chicago! The Pad Thai is incredible and the service was excellent.",
        profileImage: "/images/profiles/user5.jpg",
      },
      {
        id: "rev2",
        userName: "Robert J.",
        rating: 4,
        date: "March 1, 2025",
        comment: "Delicious curry and quick delivery. Will order again!",
        profileImage: "/images/profiles/user6.jpg",
      },
    ],
  },

  {
    id: "taqueria-authentico-mexicano",
    name: "Taqueria Auténtico Mexicano",
    category: "restaurants",
    city: "miami",
    address: "890 Seaside Ave",
    description:
      "Authentic Mexican taqueria serving traditional tacos and Mexican specialties",
    rating: 4.8,
    reviewCount: 5,
    priceRange: "$$",
    deliveryTime: "20-35 min",
    deliveryFee: "$2.49",
    imageUrl:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/mexican.jpg",
    headerImage:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/mexican-header.jpg",
    coordinates: [-80.1918, 25.7617],
    hours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 12:00 AM",
      saturday: "11:00 AM - 12:00 AM",
      sunday: "12:00 PM - 9:00 PM",
    },
    menu: {
      categories: [
        { id: "appetizers", name: "Appetizers" },
        { id: "tacos", name: "Tacos" },
        { id: "burritos", name: "Burritos" },

        { id: "desserts", name: "Desserts" },
        { id: "drinks", name: "Drinks" },
      ],
      items: [
        // For burritos category
        {
          id: "carne-asada-burrito",
          name: "Carne Asada Burrito",
          description:
            "Flour tortilla filled with grilled steak, rice, beans, and pico de gallo.",
          price: 11.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/carne-asada-burrito.jpg",
          category: "burritos",
        },
        // For specialties category
        {
          id: "chile-relleno",
          name: "Chile Relleno",
          description:
            "Roasted poblano pepper stuffed with cheese, battered and fried, served with rice and beans.",
          price: 14.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/chile-relleno.jpg",
          category: "specialties",
        },

        // For desserts category
        {
          id: "churros",
          name: "Churros con Chocolate",
          description:
            "Fried dough pastry coated in cinnamon sugar, served with chocolate dipping sauce.",
          price: 6.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/churros.jpg",
          category: "desserts",
        },

        // For drinks category
        {
          id: "horchata",
          name: "Horchata",
          description: "Sweet rice milk beverage flavored with cinnamon.",
          price: 3.49,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/horchata.jpg",
          category: "drinks",
        },
        {
          id: "guacamole",
          name: "Fresh Guacamole",
          description:
            "Freshly made guacamole with avocados, tomatoes, onions, cilantro and lime",
          price: 7.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/guacamole.jpg",
          category: "appetizers",
          popular: true,
        },
        {
          id: "tacos-al-pastor",
          name: "Tacos Al Pastor",
          description:
            "Three corn tortillas with marinated pork, pineapple, onions, and cilantro",
          price: 9.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/tacos-al-pastor.jpg",
          category: "tacos",
          popular: true,
        },
      ],
    },
    reviews: [
      {
        id: "rev1",
        userName: "Carlos M.",
        rating: 5,
        date: "April 2, 2025",
        comment:
          "Most authentic Mexican food I've found in Miami! The tacos al pastor are incredible.",
        profileImage: "/images/profiles/user7.jpg",
      },
      {
        id: "rev2",
        userName: "Sophia L.",
        rating: 5,
        date: "March 25, 2025",
        comment: "Excellent food and fast delivery. The guacamole is the best!",
        profileImage: "/images/profiles/user8.jpg",
      },
    ],
  },

  {
    id: "french-bistro-sf",
    name: "Le Petit Bistro",
    category: "restaurants",
    city: "sf",
    address: "123 Powell St",
    description:
      "Charming French bistro offering classic dishes in an intimate atmosphere",
    rating: 4.7,
    reviewCount: 2,
    priceRange: "$$$",
    deliveryTime: "35-50 min",
    deliveryFee: "$3.99",
    imageUrl:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/french.jpg",
    headerImage:
      "https://res.cloudinary.com/dynoujkny/image/upload/images/restaurant-images/french-header.jpg",
    coordinates: [-122.408, 37.7893],
    hours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    menu: {
      categories: [
        { id: "appetizers", name: "Appetizers" },
        { id: "entrees", name: "Main Courses" },
        { id: "desserts", name: "Desserts" },
      ],
      items: [
        {
          id: "creme-brulee",
          name: "Crème Brûlée",
          description:
            "Classic French custard dessert with caramelized sugar top.",
          price: 8.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/creme-brulee.jpg",
          category: "desserts",
        },
        {
          id: "french-onion-soup",
          name: "French Onion Soup",
          description:
            "Classic soup with caramelized onions, beef broth, and melted Gruyère cheese",
          price: 9.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/french-onion-soup.jpg",
          category: "appetizers",
          popular: true,
        },
        {
          id: "coq-au-vin",
          name: "Coq au Vin",
          description: "Chicken braised with  mushrooms, onions",
          price: 24.99,
          imageUrl:
            "https://res.cloudinary.com/dynoujkny/image/upload/images/menu-items/coq-au-vin.jpg",
          category: "entrees",
          popular: true,
        },
      ],
    },
    reviews: [
      {
        id: "rev1",
        userName: "Emily W.",
        rating: 5,
        date: "February 27, 2025",
        comment:
          "Such an authentic French dining experience! The coq au vin transported me straight to Paris.",
        profileImage: "/images/profiles/user9.jpg",
      },
      {
        id: "rev2",
        userName: "Thomas B.",
        rating: 4,
        date: "February 14, 2025",
        comment:
          "Great food and ambiance. A little pricey but worth it for special occasions.",
        profileImage: "/images/profiles/user10.jpg",
      },
    ],
  },
];

// Add this reviews array inside each restaurant object

module.exports = { restaurants, options };
