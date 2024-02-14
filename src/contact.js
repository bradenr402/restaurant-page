import addElement from './add-element';

export default function () {
  const main = document.querySelector('#content > main');

  const mainSection = document.createElement('section');
  mainSection.id = contact;

  const sectionHeading = addElement('h1', 'Contact Us');
  mainSection.appendChild(sectionHeading);

  const addressHeading = addElement('h2', 'Address');
  mainSection.appendChild(addressHeading);

  const address = addElement(
    'p',
    '[36 Symphony Street, Crescendo City, WA] (Google Maps link)'
  );
  mainSection.appendChild(address);

  const hoursHeading = addElement('h2', 'Hours');
  mainSection.appendChild(hoursHeading);

  const hoursList = document.createElement('ul');
  const weekdayHours = addElement('li', 'Monday - Thursday: 4:00pm - 9:00pm');
  const fridayHours = addElement('li', 'Friday: 4:00pm - 9:00pm');
  const saturdayHours = addElement('li', 'Saturday: 5:00pm - 10:00pm');
  const sundayHours = addElement('li', 'Sunday: 5:00pm - 9:00pm');
  hoursList.append(weekdayHours, fridayHours, saturdayHours, sundayHours);
  mainSection.appendChild(hoursList);

  const contactHeading = addElement('h2', 'Contact Info');
  mainSection.appendChild(contactHeading);

  const emailHeading = addElement('h3', 'Email');
  mainSection.appendChild(emailHeading);

  const email = addElement('p', 'example@email.com');
  mainSection.appendChild(email);

  const phoneHeading = addElement('h3', 'Phone');
  mainSection.appendChild(phoneHeading);

  const phoneNumber = addElement('p', '555-555-5555');
  mainSection.appendChild(phoneNumber);

  const reservationsHeading = addElement('h2', 'Reservations');
  mainSection.appendChild(reservationsHeading);

  const reservations = addElement('p', 'You can make reservations online using the button below, or by calling us at 555-555-5555.');
  mainSection.appendChild(reservations);
  const reservationsBtn = addElement('button', 'Make Reservation');
  mainSection.appendChild(reservationsBtn);

  const socialMediaHeading = addElement('h2', 'Social Media');
  mainSection.appendChild(socialMediaHeading);

  const socialMediaList = document.createElement('ul');
  const facebook = addElement('li', 'Follow us on Facebook: [Facebook page link]');
  const instagram = addElement('li', 'Follow us on Instagram: [Instagram page link]');
  socialMediaList.append(facebook, instagram);
  mainSection.appendChild(socialMediaList);

  main.replaceChildren(mainSection);

  return 'contact';
}
