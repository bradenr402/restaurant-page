import buildHomePage from './home';
import buildMenuPage from './menu';
import buildContactPage from './contact';
import './style.css';

let currentTabId = buildHomePage();

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
        currentTabId = buildHomePage();
        break;
      case 'menu':
        currentTabId = buildMenuPage();
        break;
      case 'contact':
        currentTabId = buildContactPage();
        break;
    }
  });
});
