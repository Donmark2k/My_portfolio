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

var cars = ["Saab","Volvo","BMW"];
var text = "";
for (let i=0; i< cars.length; i++ ){
    text += cars[i] + " ";

}
console.log(text);

for (let i=0; i< cars.length; i++ ){
    console.log(cars[i]);
}


var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

console.log(text)
function myFunction(value) {
  text += "<li>" + value + "</li>";
}

var fruits, text, i, car;
fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach ( function(fruit) {
    console.log(fruit);

});
car = "";
fruits.forEach ( function(i) {
    car += i + " ";

});
console.log(car);
