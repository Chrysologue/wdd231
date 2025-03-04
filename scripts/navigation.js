const navMenu = document.querySelector('.nav-menu');
const menuButt = document.getElementById('menu');
menuButt.addEventListener('click', () => {
	navMenu.classList.toggle('show');
	menuButt.classList.toggle('show');
});
const links = document.querySelectorAll('.nav-menu a');
const path = window.location.pathname.split('/').pop();
links.forEach(link => {
	if(link.getAttribute('href') == path)
	{
		link.classList.add('active');
	}
});