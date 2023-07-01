const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu-icon');
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
  name: ' Covid-19 Countries\' Statistics ',
  homeImage: 'img/covidM.png',
  cardImage: 'img/covidH.png',
  desktopImage: 'img/covidD.png',
  closeIcon: 'img/close-icon.png',
  description: 'Covid-19 Countries\' Statistics ',
  technologies: ['redux', 'Bootstrap', 'reactJS'],
  modalInfo: 'A COVID-19 statistics app is a mobile application designed to provide up-to-date information on the number of confirmed cases, deaths, and recoveries from the COVID-19 pandemic.  The app can help users track the current situation of the pandemic in their country or region, and also provide information on the trends and patterns of the virus globally.',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://covidst.netlify.app/',
  sourceLink: 'https://github.com/Donmark2k/covid-stat',
},
{
  id: '2',
  name: ' Leaderboard',
  homeImage: 'img/leaderboardM.png',
  cardImage: 'img/leaderboardM.png',
  desktopImage: 'img/leaderboardD.png',
  closeIcon: 'img/close-icon.png',
  description: 'Leaderboard',
  technologies: ['Javascript', 'css', 'html'],
  modalInfo: 'A leaderboard is a feature commonly found in competitive online games and applications, including chess, that displays the rankings of players based on their scores or other performance metrics.This provides a way for players to track their progress and strive for higher rankings, and can also serve as a means of identifying potential opponents for future games. Overall, a leaderboard is a valuable tool for creating a competitive and engaging environment in which players can hone their skills and compete against others.',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://donmark2k.github.io/leaderboard/dist/',
  sourceLink: 'https://github.com/Donmark2k/leaderboard',
},
{
  id: '3',
  name: ' Maths Magician',
  homeImage: 'img/mathH.png',
  cardImage: 'img/mathM.png',
  closeIcon: 'img/close-icon.png',
  desktopImage: 'img/mathD.png',
  description: 'Maths Magician',
  technologies: ['css', 'reactJS'],
  modalInfo: 'Maths Magician is an educational app that aims to make learning math fun and engaging for children. It provides a range of interactive games and activities that are designed to help children develop and improve their math skills in a way that is both entertaining and challenging. This makes Maths Magician an effective tool for supplementing traditional classroom instruction and helping children build the skills and confidence they need to succeed in math and beyond.',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://mathth.netlify.app/',
  sourceLink: 'https://github.com/Donmark2k/maths-magician',
},
{
  id: '4',
  name: 'Space Traveller',
  homeImage: 'img/spaceH.png',
  cardImage: 'img/spaceM.png',
  desktopImage: 'img/spaceD.png',
  closeIcon: 'img/close-icon.png',
  description: 'Space Traveller',
  technologies: ['Bootstrap', 'reactJS', 'redux'],
  modalInfo: 'A space traveler app could refer to a mobile application designed to assist people who are interested in space exploration, astronomy, or related fields. The app could provide various features, such as real-time updates on space missions, information on celestial events, space news, virtual tours of space locations, 3D simulations of planets and other celestial bodies, educational content about space, and more.',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://spaceth.netlify.app/',
  sourceLink: 'https://github.com/Donmark2k/space-traveler',
},
{
  id: '5',
  name: 'Graphic Designer Summit',
  homeImage: 'img/gdH.png',
  cardImage: 'img/gdM.png',
  desktopImage: 'img/gdD.png',
  closeIcon: 'img/close-icon.png',
  description: 'Graphic Designer Summit',
  technologies: ['css', 'Javascript', 'html'],
  modalInfo: 'GD_summit is a mobile application designed to provide the public with information about the upcoming Graphic Designers Conference scheduled to take place in Nigeria. The app offers details about the conference, including the dates, venue and agenda. Additionally, it provides users with insights into past GD summits, highlighting previous guest speakers, presentations, and key takeaways. By utilizing the GD_summit app, attendees can gain access to vital information about the conference, connect with other attendees, and stay up-to-date with the latest news and developments. Overall, the app is a valuable resource for anyone interested in the graphic design industry and seeking to enhance their skills, knowledge, and network.',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://donmark2k.github.io/GD_summit/',
  sourceLink: 'https://github.com/Donmark2k/GD_summit',
},
{
  id: '6',
  name: ' Todo app',
  homeImage: 'img/todoH.png',
  cardImage: 'img/todoH.png',
  desktopImage: 'img/todoD.png',
  closeIcon: 'img/close-icon.png',
  description: 'Todo app',
  technologies: ['css', 'Javascript', 'html'],
  modalInfo: 'A To-do list app is a software application that assists users in organizing and managing their tasks and responsibilities. It allows users to create a list of tasks or activities that they need to complete, and prioritize them based on their urgency or importance. Additionally, the To-do list app allows users to track progress by marking completed tasks and removing them from the list. This makes it easier to manage daily schedules and achieve goals effectively.',
  liveText: 'See Live',
  seeIcon: '',
  sourceText: 'See Source',
  sourceIcon: '',
  liveLink: 'https://donmark2k.github.io/todo_list/dist/',
  sourceLink: 'https://github.com/Donmark2k/todo_list',
}];

const myrecentwork = document.querySelector('#myrecentwork');
for (let i = 0; i < projects.length; i += 1) {
  myrecentwork.innerHTML += `
      <article id="recentCard" class="firstbox">
      <div class="recentImage"> 
      <img class="articlePic" src="${projects[i].homeImage}" alt="image details" /></div>
        <p>
          ${projects[i].description}
        </p>
        <ul aria-label="Languages used in coding the work">
          ${projects[i].technologies
    .map((j) => `<li> ${j}</li>`).join('')}
        </ul>

        <div class="button-box">
          <button class="see-more buttons" type="submit" id="btn-${i}" aria-label="view">
            See Project
          </button>
        </div>
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
      <div class="h1-button">
      <h2  class="modal-h1">${projects[j].name}</h2>
      <div class="modal-anchor2">
        <a href="${projects[j].liveLink}" class="modal-href2"> ${projects[j].liveText}<img class="modal-href-pic" src="img/see-live.png" alt=" see live icon" /></a>
        <a href="${projects[j].sourceLink}"class="modal-href2"> ${projects[j].sourceText}<img  class="modal-href-pic" src="img/see-source.png" alt=" see live icon" /></a>
      </div>
      </div>
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

const technology = [
  {
    id: '1',
    name: ' JavaScript',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/javaScript.png?raw=true',
  },
  {
    id: '2',
    name: ' Bootstrap',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/bootstrap.png?raw=true',
  },
  {
    id: '3',
    name: ' CSS',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/css.png?raw=true',
  },
  {
    id: '4',
    name: ' React',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/react.png?raw=true',
  },
  {
    id: '5',
    name: ' Redux',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/redux.png?raw=true',
  },
  {
    id: '6',
    name: ' webpack',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/webpack.png?raw=true',
  }, {
    id: '7',
    name: ' Ruby',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/ruby.png?raw=true',
  },
  {
    id: '8',
    name: ' Rail',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/rail.png?raw=true',
  },
  {
    id: '9',
    name: ' Vite',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/vite.png?raw=true',
  },
  {
    id: '10',
    name: ' Postman',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/postman.png?raw=true',
  },
  {
    id: '11',
    name: ' Gitflow',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/gitflow.png?raw=true',
  },
  {
    id: '12',
    name: ' Kanban',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/kanban.png?raw=true',
  },
  {
    id: '13',
    name: ' Jest',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/jest.png?raw=true',
  },
  {
    id: '14',
    name: ' HTML',
    image: 'https://github.com/Donmark2k/My_portfolio/blob/latest/icon/html.png?raw=true',
  },
];

const showTechnology = document.querySelector('.ul-technology');
for (let i = 0; i < technology.length; i += 1) {
  showTechnology.innerHTML += `
      <li class="li-technology">
      <img src="${technology[i].image}" alt="technology icon details" /></div>
        <p>
          ${technology[i].name}
        </p>
    </li>
      `;
}

// Form validation

const form = document.getElementById('contact-me');
const userName = document.getElementById('name');
const email = document.getElementById('mail');
const message = document.getElementById('msg');
const error = document.getElementById('error-message');

error.style.visibility = 'hidden';

function formValidate(event) {
  if (email.value !== email.value.toLowerCase()) {
    error.style.visibility = 'visible';
    error.innerHTML = 'Please input your email address in lowercase.';
    event.preventDefault();
  } else {
    error.style.visibility = 'hidden';
  }
}

form.addEventListener('submit', formValidate);

function storeData() {
  const user = {
    UserName: userName.value,
    UserEmail: email.value,
    UserText: message.value,
  };
  localStorage.setItem('user', JSON.stringify(user));
}

userName.addEventListener('focusout', storeData);
email.addEventListener('focusout', storeData);
message.addEventListener('focusout', storeData);

const data = JSON.parse(localStorage.getItem('user'));

if (data) {
  userName.value = data.UserName;
  email.value = data.UserEmail;
  message.value = data.UserText;
}
