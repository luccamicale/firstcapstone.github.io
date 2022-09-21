const hamburger = document.querySelector('.menuu');
const overlay = document.querySelector('.overlay-original');
const mainMenu = document.querySelector('.menu-main');
const cancel = document.querySelector('.cancel');
const linkss = document.querySelectorAll('.menu-cancel');

hamburger.addEventListener('click', () => {
  overlay.style.display = 'flex';
  mainMenu.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

for (let i = 0; i < linkss.length; i += 1) {
  linkss[i].addEventListener('click', () => {
    overlay.style.display = 'none';
  });
}
const Projects = [
  {
    CardsId: 'cards-1',
    TitleBig: 'Socio director',
    Image: '',
    TitleSpeakers: '',
    SubTitleSpeakers: '',
    Text: '',

  },
];
document.getElementById('title-speakers').textContent = Projects[0].TitleBig;