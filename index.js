const link = document.getElementById('share-link');
const button = document.getElementById("button");
const button2 = document.getElementById("button2");
let displayState = false; 
link.style = 'display: none';


const linkDisplay = () => {
    if (displayState === false) {
        link.style = 'display: grid';
        button.style = 'background-color: hsl(217, 19%, 35%)';
        return displayState = true;
    } else {
        link.style = 'display: none';
        button.style = 'background-color: hsl(210, 46%, 95%)';
        return displayState = false;
    }
};

button.addEventListener('click', linkDisplay);
button2.addEventListener('click', linkDisplay);