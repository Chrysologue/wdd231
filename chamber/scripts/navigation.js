const navButton = document.getElementById('myButton');
const navElement = document.getElementById('myLinks')
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navElement.classList.toggle('show')
});

const path = window.location.pathname.split("/").pop();
const links = document.querySelectorAll('#myLinks a');
links.forEach(link => {
    if (link.getAttribute('href') === path)
    {
        link.classList.add('active');
    }
    else {
        link.classList.remove('active');
    }
});
