const nn = document.querySelector('.resumebutton');

nn.addEventListener ('clicked', (event) => {
    console.log('onyeka');
    event.target.textContent = 'clicked';

},
false
);

const ll = document.getElementById('error-message')
ll.style.display='none';
const resumeBtn = document.querySelector('.resumebutton');
const aboutMe = document.querySelector('.describeme');
resumeBtn.addEventListener ('click', () => {
    alert("Hello World!");
//   aboutMe.style.display = 'none';
  aboutMe.style.color = 'orange';

});


const email = document.getElementById('mail');

email.onfocus = function() {
    email.style.background = 'violet'
}
email.onblur = function() {
    email.style.background = 'white'
}

const hh = document.querySelector('.last-paragraph h2');
hh.onmouseover = function() {
    hh.style.color = 'red';
}

hh.onmouseout = function() {
    hh.style.color = 'green';
}