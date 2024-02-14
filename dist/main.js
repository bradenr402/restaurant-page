/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-element.js":
/*!****************************!*\
  !*** ./src/add-element.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addElement)
/* harmony export */ });
function addElement(elementTag, textContent) {
  const element = document.createElement(elementTag);
  const elementContent = document.createTextNode(textContent);
  element.appendChild(elementContent);

  return element;
}


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-element */ "./src/add-element.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const main = document.querySelector('#content > main');

  const mainSection = document.createElement('section');
  mainSection.id = contact;

  const sectionHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'Contact Us');
  mainSection.appendChild(sectionHeading);

  const addressHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'Address');
  mainSection.appendChild(addressHeading);

  const address = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'p',
    '[36 Symphony Street, Crescendo City, WA] (Google Maps link)'
  );
  mainSection.appendChild(address);

  const hoursHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'Hours');
  mainSection.appendChild(hoursHeading);

  const hoursList = document.createElement('ul');
  const weekdayHours = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'Monday - Thursday: 4:00pm - 9:00pm');
  const fridayHours = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'Friday: 4:00pm - 9:00pm');
  const saturdayHours = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'Saturday: 5:00pm - 10:00pm');
  const sundayHours = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'Sunday: 5:00pm - 9:00pm');
  hoursList.append(weekdayHours, fridayHours, saturdayHours, sundayHours);
  mainSection.appendChild(hoursList);

  const contactHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'Contact Info');
  mainSection.appendChild(contactHeading);

  const emailHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'Email');
  mainSection.appendChild(emailHeading);

  const email = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'example@email.com');
  mainSection.appendChild(email);

  const phoneHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'Phone');
  mainSection.appendChild(phoneHeading);

  const phoneNumber = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('p', '555-555-5555');
  mainSection.appendChild(phoneNumber);

  const reservationsHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'Reservations');
  mainSection.appendChild(reservationsHeading);

  const reservations = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'You can make reservations online using the button below, or by calling us at 555-555-5555.');
  mainSection.appendChild(reservations);
  const reservationsBtn = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Make Reservation');
  mainSection.appendChild(reservationsBtn);

  const socialMediaHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'Social Media');
  mainSection.appendChild(socialMediaHeading);

  const socialMediaList = document.createElement('ul');
  const facebook = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'Follow us on Facebook: [Facebook page link]');
  const instagram = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'Follow us on Instagram: [Instagram page link]');
  socialMediaList.append(facebook, instagram);
  mainSection.appendChild(socialMediaList);

  main.replaceChildren(mainSection);

  return 'contact';
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-element */ "./src/add-element.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const main = document.querySelector('#content > main');

  const mainSection = document.createElement('section');
  mainSection.id = 'home';

  const sectionArticle = document.createElement('article');

  const sectionHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'Serenade Bistro');
  mainSection.appendChild(sectionHeading);

  sectionArticle.appendChild(
    (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])(
      'p',
      `Welcome to "Serenade Bistro," where every meal is a symphony of flavor
        and elegance. Nestled in the heart of downtown, our restaurant exudes a
        charming ambiance that effortlessly blends modern sophistication with
        warm hospitality.`
    )
  );

  sectionArticle.appendChild(
    (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])(
      'p',
      `As you step through the doors of Serenade Bistro, you're greeted by the
        inviting aroma of freshly prepared cuisine and the soft glow of ambient
        lighting. Our chic yet cozy dining area features intimate seating
        arrangements, perfect for romantic dinners, celebratory gatherings, or
        quiet evenings with friends.`
    )
  );

  sectionArticle.appendChild(
    (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])(
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
    (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])(
      'p',
      `Complementing our exquisite fare is an extensive wine list, featuring a
        curated selection of varietals from around the world. Whether you're a
        connoisseur or a novice, our knowledgeable staff is on hand to help you
        find the perfect pairing to enhance your dining experience.`
    )
  );

  sectionArticle.appendChild(
    (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])(
      'p',
      `At Serenade Bistro, we believe that dining should be a delight for all
        the senses. From the first sip of a perfectly crafted cocktail to the
        last bite of a delectable dessert, every moment spent with us is sure to
        leave you craving more.`
    )
  );

  sectionArticle.appendChild(
    (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])(
      'p',
      `Join us at Serenade Bistro and let us serenade you with an unforgettable
        dining experience.`
    )
  );

  mainSection.appendChild(sectionArticle);

  main.replaceChildren(mainSection);

  return 'home';
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-element */ "./src/add-element.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const main = document.querySelector('#content > main');

  const mainSection = document.createElement('section');
  mainSection.id = 'menu';

  const sectionHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'Menu');
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

  dishItem.appendChild((0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', title));
  dishItem.appendChild((0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('p', description));
  dishItem.appendChild((0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('span', price));

  li.appendChild(dishItem);

  return li;
}

function addMenuSection(menuSectionTitle, dishItemInfo) {
  const menuSection = document.createElement('article');
  const menuSectionHeading = (0,_add_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', menuSectionTitle);
  menuSection.appendChild(menuSectionHeading);

  const menuSectionList = document.createElement('ul');

  dishItemInfo.forEach((dishItem) => {
    menuSectionList.appendChild(addDishItem(...dishItem));
  });

  menuSection.appendChild(menuSectionList);

  return menuSection;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



// import './style.css';

let currentTabId = (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

function tabChange(newTabID) {
  let currentTab = document.getElementById(`${currentTabId}`);
  currentTab.classList.remove('selected');

  let newTab = document.getElementById(`${newTabID}`);
  newTab.classList.add('selected');
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    console.log([e.target.id, currentTabId]);
    if (e.target.id !== currentTabId) tabChange(e.target.id);

    switch (e.target.id) {
      case 'home':
        currentTabId = (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
        break;
      case 'menu':
        currentTabId = (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        break;
      case 'contact':
        currentTabId = (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
        break;
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0E7QUFDTTtBQUN6Qzs7QUFFQSxtQkFBbUIsaURBQWE7O0FBRWhDO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7O0FBRUEsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQWE7QUFDcEM7QUFDQTtBQUNBLHVCQUF1QixpREFBYTtBQUNwQztBQUNBO0FBQ0EsdUJBQXVCLG9EQUFnQjtBQUN2QztBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEVsZW1lbnQoZWxlbWVudFRhZywgdGV4dENvbnRlbnQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFRhZyk7XG4gIGNvbnN0IGVsZW1lbnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dENvbnRlbnQpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRDb250ZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCBhZGRFbGVtZW50IGZyb20gJy4vYWRkLWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCA+IG1haW4nKTtcblxuICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbWFpblNlY3Rpb24uaWQgPSBjb250YWN0O1xuXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nID0gYWRkRWxlbWVudCgnaDEnLCAnQ29udGFjdCBVcycpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGluZyk7XG5cbiAgY29uc3QgYWRkcmVzc0hlYWRpbmcgPSBhZGRFbGVtZW50KCdoMicsICdBZGRyZXNzJyk7XG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkaW5nKTtcblxuICBjb25zdCBhZGRyZXNzID0gYWRkRWxlbWVudChcbiAgICAncCcsXG4gICAgJ1szNiBTeW1waG9ueSBTdHJlZXQsIENyZXNjZW5kbyBDaXR5LCBXQV0gKEdvb2dsZSBNYXBzIGxpbmspJ1xuICApO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICBjb25zdCBob3Vyc0hlYWRpbmcgPSBhZGRFbGVtZW50KCdoMicsICdIb3VycycpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuXG4gIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IHdlZWtkYXlIb3VycyA9IGFkZEVsZW1lbnQoJ2xpJywgJ01vbmRheSAtIFRodXJzZGF5OiA0OjAwcG0gLSA5OjAwcG0nKTtcbiAgY29uc3QgZnJpZGF5SG91cnMgPSBhZGRFbGVtZW50KCdsaScsICdGcmlkYXk6IDQ6MDBwbSAtIDk6MDBwbScpO1xuICBjb25zdCBzYXR1cmRheUhvdXJzID0gYWRkRWxlbWVudCgnbGknLCAnU2F0dXJkYXk6IDU6MDBwbSAtIDEwOjAwcG0nKTtcbiAgY29uc3Qgc3VuZGF5SG91cnMgPSBhZGRFbGVtZW50KCdsaScsICdTdW5kYXk6IDU6MDBwbSAtIDk6MDBwbScpO1xuICBob3Vyc0xpc3QuYXBwZW5kKHdlZWtkYXlIb3VycywgZnJpZGF5SG91cnMsIHNhdHVyZGF5SG91cnMsIHN1bmRheUhvdXJzKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcblxuICBjb25zdCBjb250YWN0SGVhZGluZyA9IGFkZEVsZW1lbnQoJ2gyJywgJ0NvbnRhY3QgSW5mbycpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGluZyk7XG5cbiAgY29uc3QgZW1haWxIZWFkaW5nID0gYWRkRWxlbWVudCgnaDMnLCAnRW1haWwnKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoZW1haWxIZWFkaW5nKTtcblxuICBjb25zdCBlbWFpbCA9IGFkZEVsZW1lbnQoJ3AnLCAnZXhhbXBsZUBlbWFpbC5jb20nKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIGNvbnN0IHBob25lSGVhZGluZyA9IGFkZEVsZW1lbnQoJ2gzJywgJ1Bob25lJyk7XG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKHBob25lSGVhZGluZyk7XG5cbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBhZGRFbGVtZW50KCdwJywgJzU1NS01NTUtNTU1NScpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25zSGVhZGluZyA9IGFkZEVsZW1lbnQoJ2gyJywgJ1Jlc2VydmF0aW9ucycpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbnNIZWFkaW5nKTtcblxuICBjb25zdCByZXNlcnZhdGlvbnMgPSBhZGRFbGVtZW50KCdwJywgJ1lvdSBjYW4gbWFrZSByZXNlcnZhdGlvbnMgb25saW5lIHVzaW5nIHRoZSBidXR0b24gYmVsb3csIG9yIGJ5IGNhbGxpbmcgdXMgYXQgNTU1LTU1NS01NTU1LicpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbnMpO1xuICBjb25zdCByZXNlcnZhdGlvbnNCdG4gPSBhZGRFbGVtZW50KCdidXR0b24nLCAnTWFrZSBSZXNlcnZhdGlvbicpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbnNCdG4pO1xuXG4gIGNvbnN0IHNvY2lhbE1lZGlhSGVhZGluZyA9IGFkZEVsZW1lbnQoJ2gyJywgJ1NvY2lhbCBNZWRpYScpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUhlYWRpbmcpO1xuXG4gIGNvbnN0IHNvY2lhbE1lZGlhTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGZhY2Vib29rID0gYWRkRWxlbWVudCgnbGknLCAnRm9sbG93IHVzIG9uIEZhY2Vib29rOiBbRmFjZWJvb2sgcGFnZSBsaW5rXScpO1xuICBjb25zdCBpbnN0YWdyYW0gPSBhZGRFbGVtZW50KCdsaScsICdGb2xsb3cgdXMgb24gSW5zdGFncmFtOiBbSW5zdGFncmFtIHBhZ2UgbGlua10nKTtcbiAgc29jaWFsTWVkaWFMaXN0LmFwcGVuZChmYWNlYm9vaywgaW5zdGFncmFtKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWFMaXN0KTtcblxuICBtYWluLnJlcGxhY2VDaGlsZHJlbihtYWluU2VjdGlvbik7XG5cbiAgcmV0dXJuICdjb250YWN0Jztcbn1cbiIsImltcG9ydCBhZGRFbGVtZW50IGZyb20gJy4vYWRkLWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCA+IG1haW4nKTtcblxuICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbWFpblNlY3Rpb24uaWQgPSAnaG9tZSc7XG5cbiAgY29uc3Qgc2VjdGlvbkFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG5cbiAgY29uc3Qgc2VjdGlvbkhlYWRpbmcgPSBhZGRFbGVtZW50KCdoMScsICdTZXJlbmFkZSBCaXN0cm8nKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRpbmcpO1xuXG4gIHNlY3Rpb25BcnRpY2xlLmFwcGVuZENoaWxkKFxuICAgIGFkZEVsZW1lbnQoXG4gICAgICAncCcsXG4gICAgICBgV2VsY29tZSB0byBcIlNlcmVuYWRlIEJpc3RybyxcIiB3aGVyZSBldmVyeSBtZWFsIGlzIGEgc3ltcGhvbnkgb2YgZmxhdm9yXG4gICAgICAgIGFuZCBlbGVnYW5jZS4gTmVzdGxlZCBpbiB0aGUgaGVhcnQgb2YgZG93bnRvd24sIG91ciByZXN0YXVyYW50IGV4dWRlcyBhXG4gICAgICAgIGNoYXJtaW5nIGFtYmlhbmNlIHRoYXQgZWZmb3J0bGVzc2x5IGJsZW5kcyBtb2Rlcm4gc29waGlzdGljYXRpb24gd2l0aFxuICAgICAgICB3YXJtIGhvc3BpdGFsaXR5LmBcbiAgICApXG4gICk7XG5cbiAgc2VjdGlvbkFydGljbGUuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIGBBcyB5b3Ugc3RlcCB0aHJvdWdoIHRoZSBkb29ycyBvZiBTZXJlbmFkZSBCaXN0cm8sIHlvdSdyZSBncmVldGVkIGJ5IHRoZVxuICAgICAgICBpbnZpdGluZyBhcm9tYSBvZiBmcmVzaGx5IHByZXBhcmVkIGN1aXNpbmUgYW5kIHRoZSBzb2Z0IGdsb3cgb2YgYW1iaWVudFxuICAgICAgICBsaWdodGluZy4gT3VyIGNoaWMgeWV0IGNvenkgZGluaW5nIGFyZWEgZmVhdHVyZXMgaW50aW1hdGUgc2VhdGluZ1xuICAgICAgICBhcnJhbmdlbWVudHMsIHBlcmZlY3QgZm9yIHJvbWFudGljIGRpbm5lcnMsIGNlbGVicmF0b3J5IGdhdGhlcmluZ3MsIG9yXG4gICAgICAgIHF1aWV0IGV2ZW5pbmdzIHdpdGggZnJpZW5kcy5gXG4gICAgKVxuICApO1xuXG4gIHNlY3Rpb25BcnRpY2xlLmFwcGVuZENoaWxkKFxuICAgIGFkZEVsZW1lbnQoXG4gICAgICAncCcsXG4gICAgICBgQXQgU2VyZW5hZGUgQmlzdHJvLCB3ZSBwcmlkZSBvdXJzZWx2ZXMgb24gb2ZmZXJpbmcgYSBjdWxpbmFyeSBleHBlcmllbmNlXG4gICAgICAgIHRoYXQgdGFudGFsaXplcyB0aGUgdGFzdGUgYnVkcyBhbmQgaWduaXRlcyB0aGUgc2Vuc2VzLiBPdXIgbWVudVxuICAgICAgICBzaG93Y2FzZXMgYSB0YW50YWxpemluZyBhcnJheSBvZiBkaXNoZXMgY3JhZnRlZCBmcm9tIHRoZSBmaW5lc3Qgc2Vhc29uYWxcbiAgICAgICAgaW5ncmVkaWVudHMsIHNvdXJjZWQgbG9jYWxseSB3aGVuZXZlciBwb3NzaWJsZS4gRnJvbSBzdW1wdHVvdXMgc3RhcnRlcnNcbiAgICAgICAgdG8gaW5kdWxnZW50IG1haW5zIGFuZCBkZWNhZGVudCBkZXNzZXJ0cywgZWFjaCBkaXNoIGlzIGEgbWFzdGVycGllY2UsXG4gICAgICAgIGV4cGVydGx5IHByZXBhcmVkIGJ5IG91ciB0YWxlbnRlZCB0ZWFtIG9mIGNoZWZzLmBcbiAgICApXG4gICk7XG5cbiAgc2VjdGlvbkFydGljbGUuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIGBDb21wbGVtZW50aW5nIG91ciBleHF1aXNpdGUgZmFyZSBpcyBhbiBleHRlbnNpdmUgd2luZSBsaXN0LCBmZWF0dXJpbmcgYVxuICAgICAgICBjdXJhdGVkIHNlbGVjdGlvbiBvZiB2YXJpZXRhbHMgZnJvbSBhcm91bmQgdGhlIHdvcmxkLiBXaGV0aGVyIHlvdSdyZSBhXG4gICAgICAgIGNvbm5vaXNzZXVyIG9yIGEgbm92aWNlLCBvdXIga25vd2xlZGdlYWJsZSBzdGFmZiBpcyBvbiBoYW5kIHRvIGhlbHAgeW91XG4gICAgICAgIGZpbmQgdGhlIHBlcmZlY3QgcGFpcmluZyB0byBlbmhhbmNlIHlvdXIgZGluaW5nIGV4cGVyaWVuY2UuYFxuICAgIClcbiAgKTtcblxuICBzZWN0aW9uQXJ0aWNsZS5hcHBlbmRDaGlsZChcbiAgICBhZGRFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAgYEF0IFNlcmVuYWRlIEJpc3Rybywgd2UgYmVsaWV2ZSB0aGF0IGRpbmluZyBzaG91bGQgYmUgYSBkZWxpZ2h0IGZvciBhbGxcbiAgICAgICAgdGhlIHNlbnNlcy4gRnJvbSB0aGUgZmlyc3Qgc2lwIG9mIGEgcGVyZmVjdGx5IGNyYWZ0ZWQgY29ja3RhaWwgdG8gdGhlXG4gICAgICAgIGxhc3QgYml0ZSBvZiBhIGRlbGVjdGFibGUgZGVzc2VydCwgZXZlcnkgbW9tZW50IHNwZW50IHdpdGggdXMgaXMgc3VyZSB0b1xuICAgICAgICBsZWF2ZSB5b3UgY3JhdmluZyBtb3JlLmBcbiAgICApXG4gICk7XG5cbiAgc2VjdGlvbkFydGljbGUuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIGBKb2luIHVzIGF0IFNlcmVuYWRlIEJpc3RybyBhbmQgbGV0IHVzIHNlcmVuYWRlIHlvdSB3aXRoIGFuIHVuZm9yZ2V0dGFibGVcbiAgICAgICAgZGluaW5nIGV4cGVyaWVuY2UuYFxuICAgIClcbiAgKTtcblxuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uQXJ0aWNsZSk7XG5cbiAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4obWFpblNlY3Rpb24pO1xuXG4gIHJldHVybiAnaG9tZSc7XG59XG4iLCJpbXBvcnQgYWRkRWxlbWVudCBmcm9tICcuL2FkZC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQgPiBtYWluJyk7XG5cbiAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG1haW5TZWN0aW9uLmlkID0gJ21lbnUnO1xuXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5nID0gYWRkRWxlbWVudCgnaDEnLCAnTWVudScpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGluZyk7XG5cbiAgY29uc3Qgc3RhcnRlckl0ZW1zID0gW1xuICAgIFtcbiAgICAgICdTZWFyZWQgU2NhbGxvcHMgd2l0aCBDb3JuIGFuZCBCbGFjayBCZWFuIFNhbHNhJyxcbiAgICAgICdQYW4tc2VhcmVkIHNjYWxsb3BzIHNlcnZlZCBvbiBhIGJlZCBvZiBmcmVzaCBjb3JuIGFuZCBibGFjayBiZWFuIHNhbHNhLCBkcml6emxlZCB3aXRoIGEgY2l0cnVzIHZpbmFpZ3JldHRlLicsXG4gICAgICAnJDE1Ljk5JyxcbiAgICBdLFxuICAgIFtcbiAgICAgICdSb2FzdGVkIEdvYXQgQ2hlZXNlIENyb3N0aW5pIHdpdGggRmlnIEphbScsXG4gICAgICAnV2FybSB0b2FzdGVkIGNyb3N0aW5pIHRvcHBlZCB3aXRoIGNyZWFteSBnb2F0IGNoZWVzZSwgZmlnIGphbSwgYW5kIGEgZHJpenpsZSBvZiBiYWxzYW1pYyByZWR1Y3Rpb24uJyxcbiAgICAgICckMTEuOTknLFxuICAgIF0sXG4gIF07XG5cbiAgY29uc3Qgc3RhcnRlcnMgPSBhZGRNZW51U2VjdGlvbignU3RhcnRlcnMnLCBzdGFydGVySXRlbXMpO1xuXG4gIGNvbnN0IG1haW5Db3Vyc2VJdGVtcyA9IFtcbiAgICBbXG4gICAgICAnUGFuLVNlYXJlZCBGaWxldCBNaWdub24gd2l0aCBQZXBwZXJjb3JuIFNhdWNlJyxcbiAgICAgICdUZW5kZXIgZmlsZXQgbWlnbm9uIGNvb2tlZCB0byB5b3VyIGxpa2luZywgc2VydmVkIHdpdGggYSByaWNoIHBlcHBlcmNvcm4gc2F1Y2UsIG1hc2hlZCBwb3RhdG9lcywgYW5kIHNlYXNvbmFsIHZlZ2V0YWJsZXMuJyxcbiAgICAgICckMzcuOTknLFxuICAgIF0sXG4gICAgW1xuICAgICAgJ0dyaWxsZWQgU2FsbW9uIHdpdGggTGVtb24gRGlsbCBTYXVjZScsXG4gICAgICAnRmxha3kgc2FsbW9uIGdyaWxsZWQgdG8gcGVyZmVjdGlvbiwgdG9wcGVkIHdpdGggYSBsaWdodCBhbmQgZmxhdm9yZnVsIGxlbW9uIGRpbGwgc2F1Y2UsIHNlcnZlZCB3aXRoIHJvYXN0ZWQgYXNwYXJhZ3VzIGFuZCBxdWlub2EuJyxcbiAgICAgICckMzEuOTknLFxuICAgIF0sXG4gICAgW1xuICAgICAgJ0hlcmItQ3J1c3RlZCBSYWNrIG9mIExhbWIgd2l0aCBNaW50IEdyZW1vbGF0YScsXG4gICAgICAnU3VjY3VsZW50IHJhY2sgb2YgbGFtYiBzZWFzb25lZCB3aXRoIGEgZnJhZ3JhbnQgaGVyYiBjcnVzdCwgcGFuLXJvYXN0ZWQgdG8gYSBwZXJmZWN0IG1lZGl1bS1yYXJlLCBhbmQgZHJpenpsZWQgd2l0aCBhIHZpYnJhbnQgbWludCBncmVtb2xhdGEuIEFjY29tcGFuaWVkIGJ5IGNyZWFteSBwb2xlbnRhIGluZnVzZWQgd2l0aCBwYXJtZXNhbiBjaGVlc2UgYW5kIHJvYXN0ZWQgc2Vhc29uYWwgdmVnZXRhYmxlcyBmb3IgYSBjb21mb3J0aW5nIGFuZCBmbGF2b3JmdWwgcGxhdGUuJyxcbiAgICAgICckMzUuOTknLFxuICAgIF0sXG4gICAgW1xuICAgICAgJ1NlYXJlZCBTY2FsbG9wcyB3aXRoIFNhZmZyb24gUmlzb3R0byBhbmQgQXNwYXJhZ3VzIFRpcHMnLFxuICAgICAgJ1BsdW1wIHNlYSBzY2FsbG9wcyBwZXJmZWN0bHkgc2VhcmVkLCB0aGVpciBjYXJhbWVsaXplZCBleHRlcmlvcnMgY29udHJhc3Rpbmcgd2l0aCB0aGVpciB0ZW5kZXIgaW50ZXJpb3JzLiBOZXN0bGVkIGF0b3AgYSBiZWQgb2YgY3JlYW15IHNhZmZyb24gcmlzb3R0bywgaW5mdXNlZCB3aXRoIGRlbGljYXRlIHNhZmZyb24gYW5kIHBhcm1lc2FuIGNoZWVzZS4gRGVsaWNhdGVseSBmaW5pc2hlZCB3aXRoIHZpYnJhbnQgYXNwYXJhZ3VzIHRpcHMgZm9yIGEgdGV4dHVyYWwgYW5kIGNvbG9yZnVsIHRvdWNoLicsXG4gICAgICAnJDMzLjk5JyxcbiAgICBdLFxuICAgIFtcbiAgICAgICdQYW4tU2VhcmVkIENoaWNrZW4gQnJlYXN0IHdpdGggTGVtb24gVGh5bWUgU2F1Y2UgYW5kIFdpbGQgUmljZSBQaWxhZicsXG4gICAgICAnRmxhdm9yZnVsLCBwYW4tc2VhcmVkIGNoaWNrZW4gYnJlYXN0IGRyaXp6bGVkIHdpdGggYSBsaWdodCBhbmQgemVzdHkgbGVtb24gdGh5bWUgc2F1Y2UuIFNlcnZlZCBhdG9wIGEgYmVkIG9mIGZsdWZmeSB3aWxkIHJpY2UgcGlsYWYgaW5mdXNlZCB3aXRoIGVhcnRoeSBtdXNocm9vbXMgYW5kIGhlcmJzLicsXG4gICAgICAnJDI3Ljk5JyxcbiAgICBdLFxuICBdO1xuXG4gIGNvbnN0IG1haW5Db3Vyc2VzID0gYWRkTWVudVNlY3Rpb24oJ01haW4gQ291cnNlcycsIG1haW5Db3Vyc2VJdGVtcyk7XG5cbiAgY29uc3QgZGVzc2VydEl0ZW1zID0gW1xuICAgIFtcbiAgICAgICdDaG9jb2xhdGUgTGF2YSBDYWtlIHdpdGggVmFuaWxsYSBJY2UgQ3JlYW0nLFxuICAgICAgJ1dhcm0sIGdvb2V5IGNob2NvbGF0ZSBsYXZhIGNha2Ugc2VydmVkIHdpdGggYSBzY29vcCBvZiB2YW5pbGxhIGljZSBjcmVhbSwgcGVyZmVjdCBmb3Igc2hhcmluZy4nLFxuICAgICAgJyQxMy45OScsXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ2hlZXNlY2FrZSB3aXRoIEJlcnJ5IENvbXBvdGUnLFxuICAgICAgJ1JpY2ggYW5kIGNyZWFteSBjaGVlc2VjYWtlIHRvcHBlZCB3aXRoIGEgZnJlc2ggYmVycnkgY29tcG90ZS4nLFxuICAgICAgJyQ5Ljk5JyxcbiAgICBdLFxuICAgIFtcbiAgICAgICdDYXJhbWVsIEFwcGxlIFRhcnQgd2l0aCBWYW5pbGxhIEJlYW4gSWNlIENyZWFtJyxcbiAgICAgICdJbmR1bGdlIGluIGJ1dHRlcnksIGZsYWt5IHBhc3RyeSBmaWxsZWQgd2l0aCB3YXJtLCBzcGljZWQgYXBwbGVzIGFuZCBhIHRvdWNoIG9mIGRlY2FkZW50IGNhcmFtZWwuIEEgc2Nvb3Agb2YgdmFuaWxsYSBiZWFuIGljZSBjcmVhbSBhZGRzIGEgY29vbCwgY3JlYW15IGNvdW50ZXJwb2ludCwgbWFraW5nIHRoaXMgYSBjbGFzc2ljIGRlc3NlcnQgd2l0aCBhIHNhdGlzZnlpbmcgdHdpc3QuJyxcbiAgICAgICckMTEuOTknXG4gICAgXSxcbiAgXTtcblxuICBjb25zdCBkZXNzZXJ0cyA9IGFkZE1lbnVTZWN0aW9uKCdEZXNzZXJ0cycsIGRlc3NlcnRJdGVtcyk7XG5cbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoc3RhcnRlcnMpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQ291cnNlcyk7XG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcblxuICBtYWluLnJlcGxhY2VDaGlsZHJlbihtYWluU2VjdGlvbik7XG5cbiAgcmV0dXJuICdtZW51Jztcbn1cblxuZnVuY3Rpb24gYWRkRGlzaEl0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGRpc2hJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZGlzaEl0ZW0uYXBwZW5kQ2hpbGQoYWRkRWxlbWVudCgnaDMnLCB0aXRsZSkpO1xuICBkaXNoSXRlbS5hcHBlbmRDaGlsZChhZGRFbGVtZW50KCdwJywgZGVzY3JpcHRpb24pKTtcbiAgZGlzaEl0ZW0uYXBwZW5kQ2hpbGQoYWRkRWxlbWVudCgnc3BhbicsIHByaWNlKSk7XG5cbiAgbGkuYXBwZW5kQ2hpbGQoZGlzaEl0ZW0pO1xuXG4gIHJldHVybiBsaTtcbn1cblxuZnVuY3Rpb24gYWRkTWVudVNlY3Rpb24obWVudVNlY3Rpb25UaXRsZSwgZGlzaEl0ZW1JbmZvKSB7XG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICBjb25zdCBtZW51U2VjdGlvbkhlYWRpbmcgPSBhZGRFbGVtZW50KCdoMicsIG1lbnVTZWN0aW9uVGl0bGUpO1xuICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51U2VjdGlvbkhlYWRpbmcpO1xuXG4gIGNvbnN0IG1lbnVTZWN0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgZGlzaEl0ZW1JbmZvLmZvckVhY2goKGRpc2hJdGVtKSA9PiB7XG4gICAgbWVudVNlY3Rpb25MaXN0LmFwcGVuZENoaWxkKGFkZERpc2hJdGVtKC4uLmRpc2hJdGVtKSk7XG4gIH0pO1xuXG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uTGlzdCk7XG5cbiAgcmV0dXJuIG1lbnVTZWN0aW9uO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYnVpbGRIb21lUGFnZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGJ1aWxkTWVudVBhZ2UgZnJvbSAnLi9tZW51JztcbmltcG9ydCBidWlsZENvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdCc7XG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IGN1cnJlbnRUYWJJZCA9IGJ1aWxkSG9tZVBhZ2UoKTtcblxuZnVuY3Rpb24gdGFiQ2hhbmdlKG5ld1RhYklEKSB7XG4gIGxldCBjdXJyZW50VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y3VycmVudFRhYklkfWApO1xuICBjdXJyZW50VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbiAgbGV0IG5ld1RhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25ld1RhYklEfWApO1xuICBuZXdUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn1cblxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coW2UudGFyZ2V0LmlkLCBjdXJyZW50VGFiSWRdKTtcbiAgICBpZiAoZS50YXJnZXQuaWQgIT09IGN1cnJlbnRUYWJJZCkgdGFiQ2hhbmdlKGUudGFyZ2V0LmlkKTtcblxuICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICBjdXJyZW50VGFiSWQgPSBidWlsZEhvbWVQYWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgIGN1cnJlbnRUYWJJZCA9IGJ1aWxkTWVudVBhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgY3VycmVudFRhYklkID0gYnVpbGRDb250YWN0UGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=