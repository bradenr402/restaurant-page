import addElement from './add-element';

export default function () {
  const main = document.querySelector('#content > main');

  const mainSection = document.createElement('section');
  mainSection.id = 'menu';

  const sectionHeading = addElement('h1', 'Menu');
  mainSection.appendChild(sectionHeading);

  const starterItems = [
    [
      'Seared Scallops with Corn and Black Bean Salsa',
      'Pan-seared scallops served on a bed of fresh corn and black bean salsa, drizzled with a citrus vinaigrette.',
      '$15.99',
    ],
    [
      'Roasted Goat Cheese Crostini with Fig Jam',
      'Warm toasted crostini topped with creamy goat cheese, fig jam, and a drizzle of balsamic reduction.',
      '$11.99',
    ],
  ];

  const starters = addMenuSection('Starters', starterItems);

  const mainCourseItems = [
    [
      'Pan-Seared Filet Mignon with Peppercorn Sauce',
      'Tender filet mignon cooked to your liking, served with a rich peppercorn sauce, mashed potatoes, and seasonal vegetables.',
      '$37.99',
    ],
    [
      'Grilled Salmon with Lemon Dill Sauce',
      'Flaky salmon grilled to perfection, topped with a light and flavorful lemon dill sauce, served with roasted asparagus and quinoa.',
      '$31.99',
    ],
    [
      'Herb-Crusted Rack of Lamb with Mint Gremolata',
      'Succulent rack of lamb seasoned with a fragrant herb crust, pan-roasted to a perfect medium-rare, and drizzled with a vibrant mint gremolata. Accompanied by creamy polenta infused with parmesan cheese and roasted seasonal vegetables for a comforting and flavorful plate.',
      '$35.99',
    ],
    [
      'Seared Scallops with Saffron Risotto and Asparagus Tips',
      'Plump sea scallops perfectly seared, their caramelized exteriors contrasting with their tender interiors. Nestled atop a bed of creamy saffron risotto, infused with delicate saffron and parmesan cheese. Delicately finished with vibrant asparagus tips for a textural and colorful touch.',
      '$33.99',
    ],
    [
      'Pan-Seared Chicken Breast with Lemon Thyme Sauce and Wild Rice Pilaf',
      'Flavorful, pan-seared chicken breast drizzled with a light and zesty lemon thyme sauce. Served atop a bed of fluffy wild rice pilaf infused with earthy mushrooms and herbs.',
      '$27.99',
    ],
  ];

  const mainCourses = addMenuSection('Main Courses', mainCourseItems);

  const dessertItems = [
    [
      'Chocolate Lava Cake with Vanilla Ice Cream',
      'Warm, gooey chocolate lava cake served with a scoop of vanilla ice cream, perfect for sharing.',
      '$13.99',
    ],
    [
      'Cheesecake with Berry Compote',
      'Rich and creamy cheesecake topped with a fresh berry compote.',
      '$9.99',
    ],
    [
      'Caramel Apple Tart with Vanilla Bean Ice Cream',
      'Indulge in buttery, flaky pastry filled with warm, spiced apples and a touch of decadent caramel. A scoop of vanilla bean ice cream adds a cool, creamy counterpoint, making this a classic dessert with a satisfying twist.',
      '$11.99'
    ],
  ];

  const desserts = addMenuSection('Desserts', dessertItems);

  mainSection.appendChild(starters);
  mainSection.appendChild(mainCourses);
  mainSection.appendChild(desserts);

  main.replaceChildren(mainSection);

  return 'menu';
}

function addDishItem(title, description, price) {
  const li = document.createElement('li');
  const dishItem = document.createElement('div');

  dishItem.appendChild(addElement('h3', title));
  dishItem.appendChild(addElement('p', description));
  dishItem.appendChild(addElement('span', price));

  li.appendChild(dishItem);

  return li;
}

function addMenuSection(menuSectionTitle, dishItemInfo) {
  const menuSection = document.createElement('article');
  const menuSectionHeading = addElement('h2', menuSectionTitle);
  menuSection.appendChild(menuSectionHeading);

  const menuSectionList = document.createElement('ul');

  dishItemInfo.forEach((dishItem) => {
    menuSectionList.appendChild(addDishItem(...dishItem));
  });

  menuSection.appendChild(menuSectionList);

  return menuSection;
}
