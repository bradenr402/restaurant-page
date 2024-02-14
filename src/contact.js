import addElement from './add-element';

export default function () {
  const main = document.querySelector('#content > main');

  const mainSection = document.createElement('section');
  mainSection.id = contact;

  const sectionHeading = addElement('h1', 'Contact Us');
  mainSection.appendChild(sectionHeading);

  addAddressArticle(mainSection);

  addHoursArticle(mainSection);

  addContactSection(mainSection);

  addReservationSection(mainSection);

  addSocialMediaArticle(mainSection);

  main.replaceChildren(mainSection);

  return 'contact';
}

function addAddressArticle(mainSection) {
  const addressArticle = document.createElement('article');

  const addressHeading = addElement('h2', 'Address');
  addressArticle.appendChild(addressHeading);

  const address = addElement(
    'p',
    '36 Symphony Street, Crescendo City, WA'
  );
  addressArticle.appendChild(address);
  mainSection.appendChild(addressArticle);
}

function addHoursArticle(mainSection) {
  const hoursArticle = document.createElement('article');

  const hoursHeading = addElement('h2', 'Hours');
  hoursArticle.appendChild(hoursHeading);

  const hoursList = document.createElement('ul');
  const weekdayHours = addElement('li', 'Monday - Thursday: 4:00pm - 9:00pm');
  const fridayHours = addElement('li', 'Friday: 4:00pm - 9:00pm');
  const saturdayHours = addElement('li', 'Saturday: 5:00pm - 10:00pm');
  const sundayHours = addElement('li', 'Sunday: 5:00pm - 9:00pm');
  hoursList.append(weekdayHours, fridayHours, saturdayHours, sundayHours);
  hoursArticle.appendChild(hoursList);

  mainSection.appendChild(hoursArticle);
}

function addContactSection(mainSection) {
  const contactArticle = document.createElement('article');

  const contactHeading = addElement('h2', 'Contact Info');
  contactArticle.appendChild(contactHeading);

  const contactList = document.createElement('ul');

  const email = addElement('li', 'Email: example@email.com');
  contactList.appendChild(email);

  const phoneNumber = addElement('li', 'Phone: 555-555-5555');
  contactList.appendChild(phoneNumber);

  contactArticle.appendChild(contactList);

  mainSection.appendChild(contactArticle);
}

function addReservationSection(mainSection) {
  const reservationArticle = document.createElement('article');

  const reservationsHeading = addElement('h2', 'Reservations');
  reservationArticle.appendChild(reservationsHeading);

  const reservations = addElement(
    'p',
    'You can make reservations online using the button below, or by calling us at 555-555-5555.'
  );
  reservationArticle.appendChild(reservations);
  const reservationsBtn = addElement('button', 'Make Reservation');
  reservationArticle.appendChild(reservationsBtn);

  mainSection.appendChild(reservationArticle);
}

function addSocialMediaArticle(mainSection) {
  const socialMediaArticle = document.createElement('article');

  const socialMediaHeading = addElement('h2', 'Social Media');
  socialMediaArticle.appendChild(socialMediaHeading);

  const socialMediaList = document.createElement('ul');
  const facebook = addElement(
    'li',
    'Follow us on Facebook: [Facebook page link]'
  );
  const instagram = addElement(
    'li',
    'Follow us on Instagram: [Instagram page link]'
  );
  socialMediaList.append(facebook, instagram);
  socialMediaArticle.appendChild(socialMediaList);

  mainSection.appendChild(socialMediaArticle);
}
