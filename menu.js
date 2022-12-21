const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-branding');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navLogo.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

// pop-up menu
const projects = [{
  id: '1',
  name: ' Keeping track of hundreds of components',
  cardImage: 'img/pop-up.png',
  desktopImage: 'img/desktop-modal.png',
  closeIcon: 'img/close-icon.png',
  description: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://donmark2k.github.io/My_portfolio/',
  sourceLink: 'https://github.com/Donmark2k/My_portfolio',
},
{
  id: '2',
  name: ' Keeping track of hundreds of components',
  cardImage: 'img/pop-up.png',
  desktopImage: 'img/desktop-modal.png',
  closeIcon: 'img/close-icon.png',
  description: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://donmark2k.github.io/My_portfolio/',
  sourceLink: 'https://github.com/Donmark2k/My_portfolio',
},
{
  id: '3',
  name: ' Keeping track of hundreds of components',
  cardImage: 'img/pop-up.png',
  closeIcon: 'img/close-icon.png',
  desktopImage: 'img/desktop-modal.png',
  description: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://donmark2k.github.io/My_portfolio/',
  sourceLink: 'https://github.com/Donmark2k/My_portfolio',
},
{
  id: '4',
  name: ' Keeping track of hundreds of components',
  cardImage: 'img/pop-up.png',
  desktopImage: 'img/desktop-modal.png',
  closeIcon: 'img/close-icon.png',
  description: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://donmark2k.github.io/My_portfolio/',
  sourceLink: 'https://github.com/Donmark2k/My_portfolio',
},
{
  id: '5',
  name: ' Keeping track of hundreds of components',
  cardImage: 'img/pop-up.png',
  desktopImage: 'img/desktop-modal.png',
  closeIcon: 'img/close-icon.png',
  description: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://donmark2k.github.io/My_portfolio/',
  sourceLink: 'https://github.com/Donmark2k/My_portfolio',
},
{
  id: '006',
  name: ' Keeping track of hundreds of components',
  cardImage: 'img/pop-up.png',
  desktopImage: 'img/desktop-modal.png',
  closeIcon: 'img/close-icon.png',
  description: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
  modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://donmark2k.github.io/My_portfolio/',
  sourceLink: 'https://github.com/Donmark2k/My_portfolio',
}];

const myrecentwork = document.querySelector('#myrecentwork');
for (let i = 0; i < projects.length; i += 1) {
  myrecentwork.innerHTML += `
      <article id="recentcard" class="firstbox">
      <article class="innerdownbox">
        <p>
          ${projects[i].description}
        </p>
        <ul aria-label="Languages used in coding the work">
          ${projects[i].technologies
    .map((j) => `<li> <a href="#">${j}</a></li>`).join('')}
        </ul>

        <div class="button-box">
          <button class="resumebutton buttons" type="submit" id="btn-${i}" aria-label="view">
            See Project
          </button>
        </div>
      </article>
    </article>
      `;
}

const modal = document.getElementById('portfolios');

for (let j = 0; j < projects.length; j += 1) {
  const projectBtn = document.querySelectorAll(`[id=btn-${j}]`);
  projectBtn.forEach((bt) => {
    bt.addEventListener('click', () => {
      modal.style.display = 'block';
      modal.innerHTML = `
      <div class="modal-box">
            <img id="close-id" class="close" src="${projects[j].closeIcon}" alt="language details" />
        
       <div class="modal-img">
          <img class="desktopPic" src="${projects[j].desktopImage}" alt="language details" />
          <img class="cardPic" src="${projects[j].cardImage}" alt="language details" />
       </div>

      <h2  class="modal-h1">${projects[j].name}</h2> 
          <ul aria-label="Languages used in coding the work">
          ${projects[j].technologies
    .map((k) => `<li> <a href="#">${k}</a></li>`).join('')}
            </ul>

      <p class="modal-p">${projects[j].modalInfo}</p>   

      <div class="modal-anchor">
        <a href="${projects[j].liveLink}" class="modal-href"> ${projects[j].liveText}<img class="modal-href-pic" src="img/see-live.png" alt=" see live icon" /></a>
        <a href="${projects[j].sourceLink}"class="modal-href"> ${projects[j].sourceText}<img  class="modal-href-pic" src="img/see-source.png" alt=" see live icon" /></a>
      </div>
      </div>
            `;
      // To close the mobile pop-up when clicked on close icon

      const closeModal = document.getElementById('close-id');
      if (closeModal) {
        closeModal.addEventListener('click', () => {
          modal.style.display = 'none';
        });
      }
    });
  });
}
