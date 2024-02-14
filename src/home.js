import addElement from './add-element';

export default function () {
  const main = document.querySelector('#content > main');

  const mainSection = document.createElement('section');
  mainSection.id = 'home';

  const sectionArticle = document.createElement('article');

  const sectionHeading = addElement('h1', 'Serenade Bistro');
  mainSection.appendChild(sectionHeading);

  sectionArticle.appendChild(
    addElement(
      'p',
      `Welcome to "Serenade Bistro," where every meal is a symphony of flavor
        and elegance. Nestled in the heart of downtown, our restaurant exudes a
        charming ambiance that effortlessly blends modern sophistication with
        warm hospitality.`
    )
  );

  sectionArticle.appendChild(
    addElement(
      'p',
      `As you step through the doors of Serenade Bistro, you're greeted by the
        inviting aroma of freshly prepared cuisine and the soft glow of ambient
        lighting. Our chic yet cozy dining area features intimate seating
        arrangements, perfect for romantic dinners, celebratory gatherings, or
        quiet evenings with friends.`
    )
  );

  sectionArticle.appendChild(
    addElement(
      'p',
      `At Serenade Bistro, we pride ourselves on offering a culinary experience
        that tantalizes the taste buds and ignites the senses. Our menu
        showcases a tantalizing array of dishes crafted from the finest seasonal
        ingredients, sourced locally whenever possible. From sumptuous starters
        to indulgent mains and decadent desserts, each dish is a masterpiece,
        expertly prepared by our talented team of chefs.`
    )
  );

  sectionArticle.appendChild(
    addElement(
      'p',
      `Complementing our exquisite fare is an extensive wine list, featuring a
        curated selection of varietals from around the world. Whether you're a
        connoisseur or a novice, our knowledgeable staff is on hand to help you
        find the perfect pairing to enhance your dining experience.`
    )
  );

  sectionArticle.appendChild(
    addElement(
      'p',
      `At Serenade Bistro, we believe that dining should be a delight for all
        the senses. From the first sip of a perfectly crafted cocktail to the
        last bite of a delectable dessert, every moment spent with us is sure to
        leave you craving more.`
    )
  );

  sectionArticle.appendChild(
    addElement(
      'p',
      `Join us at Serenade Bistro and let us serenade you with an unforgettable
        dining experience.`
    )
  );

  mainSection.appendChild(sectionArticle);

  main.replaceChildren(mainSection);

  return 'home';
}
