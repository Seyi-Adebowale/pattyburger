/**
 * Menu data — single source for products and categories used across the
 * homepage (Featured Favorites, Menu Explorer) and later the Menu page.
 *
 * NOTE: `image` URLs are placeholder stock photos. Replace them with real
 * Pattyburger photography. If an image fails to load, <FoodImage> falls back
 * to the item's `emoji` on a branded gradient, so the layout never breaks.
 */

export const CATEGORIES = [
  { id: 'burgers', label: 'Burgers', emoji: '🍔' },
  { id: 'chicken', label: 'Chicken', emoji: '🍗' },
  { id: 'fries', label: 'Fries', emoji: '🍟' },
  { id: 'waffles', label: 'Waffles', emoji: '🧇' },
  { id: 'pancakes', label: 'Pancakes', emoji: '🥞' },
  { id: 'milkshakes', label: 'Milkshakes', emoji: '🥤' },
  { id: 'boba', label: 'Boba Tea', emoji: '🧋' },
  { id: 'drinks', label: 'Drinks', emoji: '🥤' },
]

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`

export const PRODUCTS = [
  // --- Burgers --------------------------------------------------------------
  {
    id: 'classic-beef-burger',
    name: 'Classic Beef Burger',
    category: 'burgers',
    price: 4500,
    description: 'Juicy beef patty, fresh lettuce, tomato, cheese & signature sauce.',
    emoji: '🍔',
    image: img('1568901346375-23c9450c58cd'),
    badge: 'bestseller',
    featured: true,
  },
  {
    id: 'double-cheeseburger',
    name: 'Double Cheeseburger',
    category: 'burgers',
    price: 5800,
    description: 'Two beef patties, double cheese, onions & smoky sauce.',
    emoji: '🍔',
    image: img('1550547660-d9450f859349'),
    badge: 'bestseller',
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Chicken Burger',
    category: 'burgers',
    price: 4200,
    description: 'Crunchy fried chicken, slaw, pickles & creamy mayo.',
    emoji: '🍔',
    image: img('1615297928064-24977384d0da'),
  },
  {
    id: 'veggie-burger',
    name: 'Veggie Burger',
    category: 'burgers',
    price: 3800,
    description: 'Plant-based patty, avocado, lettuce & garlic aioli.',
    emoji: '🥬',
    image: img('1520072959219-c595dc870360'),
  },

  // --- Chicken ----------------------------------------------------------------
  {
    id: 'crispy-fried-chicken',
    name: 'Crispy Fried Chicken',
    category: 'chicken',
    price: 4500,
    description: 'Golden, crunchy fried chicken pieces, seasoned all the way through.',
    emoji: '🍗',
    image: img('1562967914-608f82629710'),
    badge: 'bestseller',
    featured: true,
  },
  {
    id: 'spicy-chicken-wings',
    name: 'Spicy Chicken Wings',
    category: 'chicken',
    price: 3500,
    description: 'Tossed in a fiery house sauce, served hot and crispy.',
    emoji: '🍗',
    image: img('1608039829572-78524f79c4c7'),
  },
  {
    id: 'grilled-chicken',
    name: 'Grilled Chicken',
    category: 'chicken',
    price: 4200,
    description: 'Flame-grilled chicken with smoky spices, char-kissed and juicy.',
    emoji: '🍗',
    image: img('1532550907401-a500c9a57435'),
  },

  // --- Fries ------------------------------------------------------------------
  {
    id: 'classic-fries',
    name: 'Classic Fries',
    category: 'fries',
    price: 1800,
    description: 'Golden, crispy fries, lightly salted.',
    emoji: '🍟',
    image: img('1573080496219-bb080dd4f877'),
  },
  {
    id: 'loaded-cheese-fries',
    name: 'Loaded Cheese Fries',
    category: 'fries',
    price: 2800,
    description: 'Fries loaded with melted cheese, sauce & a sprinkle of spice.',
    emoji: '🍟',
    image: img('1585109649139-366815a0d713'),
  },
  {
    id: 'sweet-potato-fries',
    name: 'Sweet Potato Fries',
    category: 'fries',
    price: 2200,
    description: 'Crispy sweet potato fries with a hint of caramelized sweetness.',
    emoji: '🍠',
    image: img('1639024471283-03518883512d'),
  },

  // --- Waffles --------------------------------------------------------------
  {
    id: 'chocolate-waffle',
    name: 'Chocolate Waffle',
    category: 'waffles',
    price: 3200,
    description: 'Warm waffle, chocolate drizzle & vanilla ice cream.',
    emoji: '🧇',
    image: img('1562376552-0d160a2f238d'),
    featured: true,
  },
  {
    id: 'strawberry-waffle',
    name: 'Strawberry Waffle',
    category: 'waffles',
    price: 3400,
    description: 'Crisp waffle topped with fresh strawberries & cream.',
    emoji: '🧇',
    image: img('1598214886806-c87b84b7078b'),
  },
  {
    id: 'classic-waffle',
    name: 'Classic Waffle',
    category: 'waffles',
    price: 2800,
    description: 'Golden waffle with maple syrup and a dusting of sugar.',
    emoji: '🧇',
    image: img('1504387432042-8aca549e4729'),
  },

  // --- Pancakes -------------------------------------------------------------
  {
    id: 'fluffy-pancakes',
    name: 'Fluffy Pancakes',
    category: 'pancakes',
    price: 3000,
    description: 'Stack of fluffy pancakes with butter & maple syrup.',
    emoji: '🥞',
    image: img('1567620905732-2d1ec7ab7445'),
  },
  {
    id: 'berry-pancakes',
    name: 'Berry Pancakes',
    category: 'pancakes',
    price: 3500,
    description: 'Pancakes loaded with mixed berries & whipped cream.',
    emoji: '🥞',
    image: img('1528207776546-365bb710ee93'),
  },

  // --- Milkshakes -----------------------------------------------------------
  {
    id: 'oreo-milkshake',
    name: 'Oreo Milkshake',
    category: 'milkshakes',
    price: 3000,
    description: 'Creamy Oreo shake blended to perfection.',
    emoji: '🥤',
    image: img('1572490122747-3968b75cc699'),
    featured: true,
  },
  {
    id: 'vanilla-milkshake',
    name: 'Vanilla Milkshake',
    category: 'milkshakes',
    price: 2800,
    description: 'Smooth vanilla shake topped with whipped cream.',
    emoji: '🥤',
    image: img('1541658016709-82535e94bc69'),
  },
  {
    id: 'strawberry-milkshake',
    name: 'Strawberry Milkshake',
    category: 'milkshakes',
    price: 2900,
    description: 'Fresh strawberry shake, thick, cold and creamy.',
    emoji: '🥤',
    image: img('1553787499-6f9133860278'),
  },

  // --- Boba Tea -------------------------------------------------------------
  {
    id: 'classic-boba',
    name: 'Classic Milk Boba',
    category: 'boba',
    price: 2500,
    description: 'Milk tea with chewy tapioca pearls, lightly sweet.',
    emoji: '🧋',
    image: img('1558857563-b371033873b8'),
  },
  {
    id: 'taro-boba',
    name: 'Taro Boba',
    category: 'boba',
    price: 2700,
    description: 'Creamy taro milk tea with tapioca pearls.',
    emoji: '🧋',
    image: img('1627998792088-f8a6a4a4f3a7'),
  },
  {
    id: 'matcha-boba',
    name: 'Matcha Boba',
    category: 'boba',
    price: 2800,
    description: 'Earthy matcha latte with sweet chewy pearls.',
    emoji: '🧋',
    image: img('1515823662972-da6a2e4d3002'),
  },

  // --- Drinks ---------------------------------------------------------------
  {
    id: 'chapman',
    name: 'Chapman',
    category: 'drinks',
    price: 1500,
    description: 'Nigerian classic — fruity, fizzy and refreshing.',
    emoji: '🥤',
    image: img('1437418747212-8d9709afab22'),
  },
  {
    id: 'fresh-juice',
    name: 'Fresh Orange Juice',
    category: 'drinks',
    price: 1800,
    description: 'Freshly squeezed oranges, no added sugar.',
    emoji: '🧃',
    image: img('1600271886742-f049cd451bba'),
  },
  {
    id: 'soft-drink',
    name: 'Chilled Soft Drink',
    category: 'drinks',
    price: 1000,
    description: 'Ice-cold bottled soft drink of your choice.',
    emoji: '🥤',
    image: img('1554866585-cd94860890b7'),
  },
]

/** Products flagged for the "Featured Favorites" row (in display order). */
export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured)

/** Get products for a given category id. */
export const getProductsByCategory = (categoryId) =>
  PRODUCTS.filter((p) => p.category === categoryId)
