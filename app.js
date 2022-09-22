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
const Cards = [
  {
    CardsId: 'cards-1',
    TitleBig: 'Members and Collaborators',
    Image: './images+/socio-director.jpg',
    Image1: './images+/Picture-top.png',
    TitleSpeakers: 'Julia Robert',
    SubTitleSpeakers: 'Director/a of project',
    Text: 'she was consecrated as director 4 years ago after the G20 summit',
  },
  {
    CardsId: 'cards-2',
    Image: './images+/socio-fundador.jpg',
    Image1: './images+/Picture-top.png',
    TitleSpeakers: 'George Campbell',
    SubTitleSpeakers: 'Founder of project',
    Text: 'has created the decoration company in 1995',
  },
  {
    CardsId: 'cards-3',
    Image: './images+/socio-co-fundador.jpg',
    Image1: './images+/Picture-top.png',
    TitleSpeakers: 'David Lohan',
    SubTitleSpeakers: 'Co-Founder of project',
    Text: 'He was consecrated as director 4 years ago after the G20 summit.',
  },
  {
    CardsId: 'cards-4',
    Image: './images+/roger.jpg',
    Image1: './images+/Picture-top.png',
    TitleSpeakers: 'Roger Federer',
    SubTitleSpeakers: 'Director of human resources',
    Text: 'He won the elections four years ago',
  },
];
document.getElementById('title-speakers').textContent = Cards[0].TitleBig;
document.getElementById('image-project').src = Cards[0].Image;
document.getElementById('image-project0').src = Cards[0].Image1;
document.getElementById('title-main-speakers').textContent = Cards[0].TitleSpeakers;
document.getElementById('subtitle-main-speakers').textContent = Cards[0].SubTitleSpeakers;
document.getElementById('text-speakers').textContent = Cards[0].Text;

document.getElementById('image-project1').src = Cards[1].Image;
document.getElementById('image-project11').src = Cards[0].Image1;
document.getElementById('title-main-speakers1').textContent = Cards[1].TitleSpeakers;
document.getElementById('subtitle-main-speakers1').textContent = Cards[1].SubTitleSpeakers;
document.getElementById('text-speakers1').textContent = Cards[1].Text;

document.getElementById('image-project2').src = Cards[2].Image;
document.getElementById('image-project22').src = Cards[0].Image1;
document.getElementById('title-main-speakers2').textContent = Cards[2].TitleSpeakers;
document.getElementById('subtitle-main-speakers2').textContent = Cards[2].SubTitleSpeakers;
document.getElementById('text-speakers2').textContent = Cards[2].Text;

document.getElementById('image-project3').src = Cards[3].Image;
document.getElementById('image-project33').src = Cards[0].Image1;
document.getElementById('title-main-speakers3').textContent = Cards[3].TitleSpeakers;
document.getElementById('subtitle-main-speakers3').textContent = Cards[3].SubTitleSpeakers;
document.getElementById('text-speakers3').textContent = Cards[3].Text;
