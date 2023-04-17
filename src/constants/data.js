const breakfast = [
  {
    title: 'Breakfast Sandwich',
    price: '$6.50',
    description: '2 Fried Eggs with your choice of: Bacon, Ham, Sausage, Steak, Linguisa OR Veggit w/ melted cheese.',
  },
  {
    title: 'Breakfast Bowl',
    price: '$7.99',
    description: '3 Scrambled Eggs w/ sauteed peppers, mushrooms, onions, hash browns, and melted cheese. Choice of Bacon, Ham, Sausage, Linguisa, or Steak.',
  },
  {
    title: 'Kids Meals',
    price: '$10.00',
    tags: 'PBJ, Pita Pizza (Cheese or Pepperoni), Grilled Cheese, or Hot Dog (with Chips, Drink, & Cookie).',
  },
]
const salads = [
  {
    title: 'Garden Salad',
    price: 'Half:$9, Full: $12',
  },
  {
    title: 'Caesar Salad',
    price: 'Half:$9, Full: $12',
  },
  {
    title: 'Greek Salad',
    price: 'Half:$11, Full: $15',
  },
  {
    title: 'Chef Salad',
    price: 'Half:$11, Full: $15',
  },
  {
    title: 'Cobb Salad',
    price: 'Half:$11, Full: $15',
  },
  {
    title: 'Extra Dressing',
    price: '.50 cents',
    description:'Italian, Creamy Italian, Ranch, Blue Cheese, Caesar, Greek, Thousand Island, Balsamic, Oil/Vinegar, Honey Mustard, Peppercorn'
  },
  {
    title: 'Add Meat',
    price: 'Half:$3.50, Full: $4.50',
    description: 'Grilled Chicken, Scoop of Tuna, Ham, Egg, or Seafood Salad.'
  },
]
const vegetarian = [
  {
    title: 'Deluxe Garden',
    price: '$8.50',
    description: 'Lettuce Tomato, Onion, Mayo, Hot Peppers, Swiss, Provolone, Fresh Avocado, Sprouts, Creamy Italian Dressing.'
  },
  {
    title: 'Vegan Hummer',
    price: '$8.50',
    description: 'Hummus, Lettuce, Tomato, Onion, Fresh Avocado, Sprouts.'
  },
  {
    title: 'Guacamole',
    price: '$8.50',
    description: 'Swiss, Provolone, American Cheese, Tomato, Onions, Fresh Avocado, (Hot Peppers??). Served Heated!'
  },
  {
    title: 'Veggie Patty',
    price: '$8.50',
    description: 'Make it your way.'
  },
]

  const sandwiches = [
  {
    title: 'Steak n Cheese',
    price: '$9.50',
  },
  {
    title: 'Meatloaf',
    price: '$6.50',
  },
  {
    title: 'Chicken Parmesan',
    price: '$9.50',
  },
  {
    title: 'Meatball',
    price: '$9.50',
  },
  {
    title: 'Cheeseburger',
    price: '$9.50',
  },
  {
    title: 'Grilled Chicken',
    price: '$9.50',
  },
  {
    title: 'Buffalo Chicken',
    price: '$9.50',
  },
  {
    title: 'Chicken Cutlet',
    price: '$9.50',
  },
  {
    title: 'BLT',
    price: '$8.50',
  },
  {
    title: 'Turkey (Roasted, Smoked Pepper, Santa Fe',
    price: '$8.50',
  },
  {
    title: 'Ham (Smoked, Honey Baked, Boiled)',
    price: '$8.50',
  },
  {
    title: 'Roast Beef',
    price: '$8.50',
  },
  {
    title: 'Sliced Chicken (Honey BBQ, Rotisserie, or Buffalo',
    price: '$8.50',
  },
  {
    title: 'Corned Beef (Hot or Cold)',
    price: '$8.50',
  },
  {
    title: 'Pastrami (Hot or Cold)',
    price: '$8.50',
  },
  {
    title: 'Italian Cold Cut (Mortadella, Capicola, Genoa Salami)',
    price: '$10.00',
  },
  {
    title: 'American Cold Cut (Turkey, Ham, or Roast Beef)',
    price: '$10.00',
  },
  {
    title: 'Bologna & Cheese',
    price: '$8.50',
  },
  {
    title: 'Salami & Cheese',
    price: '$8.50',
  },
  {
    title: 'Liverwurst',
    price: '$8.50',
  },
  {
    title: 'Chicken Salad',
    price: '$8.50',
  },
  {
    title: 'Tuna Salad',
    price: '$8.50',
  },
  ]
  const specialties = [
    {
      title: 'Reuben',
      price: '$10.25',
      description:'Corned Beef, Sauerkraut, Melted Swiss & 1000 Island Dressing served on Grilled Marble Bread'
    },
    {
      title: 'Turkey Stuffing Cranberry Sauce',
      price: '$10.25',
      description: 'Turkey, Stuffing, Cranberry Sauce, and Mayo'
    },
    {
      title: 'Turkey Club',
      price: '$10.25',
      description:'Roasted Turkey, Lettuce, Tomato, Mayo & American Cheese'
    },
    {
      title: 'Tuna Melt',
      price: '$8.50',
      description: 'Tuna Salad, Tomato, Onion & Melted Sharp Cheddar Cheese'
    },
    {
      title: 'All American Burger',
      price: '$12.00',
      description: 'A fresh 6 oz. burger topped with Lettuce, Tomato, Pickle, Onion, Bacon, Mayo & Melted Cheese. Ketchup and Mustard.'
    },
    {
      title: 'Steak Bomb',
      price: '$12.00',
      description: 'Shaved Steak, Sauteed Peppers, Mushrooms, Onions, Sweet Capicola, Genoa Salami & Melted Provolone'
    },
    {
      title: 'BLT Supreme',
      price: '$10.50',
      description: 'Bacon, Lettuce, Tomato, 1000 Island Dressing, & Avocado'
    },
    {
      title: 'California Wrap',
      price: '$10.50',
      description: 'Roasted Turkey, Tomato, Mayo, Avocado, & Sprouts'
    },
    {
      title: 'Monument Wrap',
      price: '$10.50',
      description: 'Roasted Turkey, Honey Baked Ham, Lettuce, Tomato, Honey Mustard, Avocago, & Swiss Cheese.'
    },
    {
      title: 'Hot Roast Beef and Cheddar',
      price: '$9.50',
      description: 'Roast Beef, Tomato, Onions, Horseraddish Sauce, & Melted Cheddar'
    }
  ]  
;

export default { breakfast, salads, vegetarian, sandwiches, specialties };
