/* eslint-disable linebreak-style */
const speakers = document.getElementById('new-animes');
const speakerData = [
  {
    name: 'Naruto Uzumaki',
    role: 'Hokage, Konohagakure',
    description: 'The protagonist of the Naruto series, a powerful ninja with the goal of becoming the Hokage.',
    image: './ressources/images/Naruto.png',
  },
  {
    name: 'Monkey D. Luffy',
    role: 'Captain, Straw Hat Pirates',
    description: 'The main character of the One Piece series, a rubber-powered pirate on a quest to find the One Piece treasure.',
    image: '/ressources/images/luffy.png',
  },
  {
    name: 'Ichigo Kurosaki',
    role: 'Soul Reaper, Karakura Town',
    description: 'The lead character of the Bleach series, a Soul Reaper with the ability to see ghosts and fight evil spirits.',
    image: './ressources/images/ichigo.png',
  },
  {
    name: 'Sakura Haruno',
    role: 'Medical Ninja, Konohagakure',
    description: 'A skilled medical ninja from the Naruto series, known for her strength and intelligence in battle.',
    image: './ressources/images/sakura.png',
  },
  {
    name: 'Goku Son',
    role: 'Saiyan, Earth',
    description: 'The main character of the Dragon Ball series, a Saiyan warrior with incredible strength and the ability to go Super Saiyan.',
    image: './ressources/images/goku.png',
  },
  {
    name: 'Edward Elric',
    role: 'State Alchemist, Amestris',
    description: 'The protagonist of the Fullmetal Alchemist series, a young alchemist searching for the Philosopher\'s Stone to restore his brother\'s body.',
    image: './ressources/images/edward.png',
  },
];

const showMoreButton = document.querySelector('.button-section2 button');
let isMobile = window.innerWidth < 768; // Determinar si es una pantalla móvil

const renderSpeakers = () => {
  const numVisibleSpeakers = isMobile ? 2 : speakerData.length;
  const speakersToShow = speakerData.slice(0, numVisibleSpeakers);

  speakers.innerHTML = speakersToShow
    .map(
      (speak) => `
        <li class="single-speaker">
          <div class="photo">
            <div class="pattern">
              <img src="${speak.image}" class="speakers-img" alt="">
            </div>
          </div>
          <div class="info">
            <h3>${speak.name}</h3>
            <h4>${speak.role}</h4>
            <hr>
            <p>${speak.description}</p>
          </div>
        </li>
      `,
    )
    .join('');

  if (isMobile) {
    showMoreButton.style.display = 'block';
  } else {
    showMoreButton.style.display = 'none';
  }
};

const handleResize = () => {
  const newIsMobile = window.innerWidth < 768;

  if (isMobile !== newIsMobile) {
    isMobile = newIsMobile;
    renderSpeakers();
  }
};

showMoreButton.addEventListener('click', () => {
  if (isMobile) {
    speakers.innerHTML = speakerData
      .map(
        (speak) => `
          <li class="single-speaker">
            <div class="photo">
              <div class="pattern">
                <img src="${speak.image}" class="speakers-img" alt="">
              </div>
            </div>
            <div class="info">
              <h3>${speak.name}</h3>
              <h4>${speak.role}</h4>
              <hr>
              <p>${speak.description}</p>
            </div>
          </li>
        `,
      )
      .join('');

    showMoreButton.style.display = 'none';
  }
});

// Renderizar los oradores al cargar la página
renderSpeakers();

// Escuchar el cambio de tamaño de la ventana
window.addEventListener('resize', handleResize);