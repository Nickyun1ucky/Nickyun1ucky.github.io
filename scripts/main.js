let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpg') {
        myImage.setAttribute ('src','images/cat-es-una-mujer.jpg');
    } else {
        myImage.setAttribute ('src','images/cat.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Ты мне нравишься, ' + myName;
      }
    }
    
    if(!localStorage.getItem('name')) {
      setUserName();
    } else {
      let storedName = localStorage.getItem('name');
      myHeading.innerHTML = 'Ты мне нравишься, ' + storedName;
    }
    
    myButton.onclick = function() {
      setUserName();
    }