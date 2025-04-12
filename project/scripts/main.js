import { projects } from './projects.js';

const container = document.querySelector('.portfolio-grid');
container.textContent = '';

function getProjectDetails() {
  projects.forEach((project) => {
    const portfolioCard = document.createElement('div');
    portfolioCard.setAttribute('class', 'portfolio-card');
    portfolioCard.innerHTML = `
    <div>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <p>${project.technologies.join(', ')}</p>
    </div>
    <img src="${project.image}" alt="${project.title}" loading="lazy">
    <a href="${project.link}">Link to Project</a>
    `;
    container.appendChild(portfolioCard);
  });
}
getProjectDetails();
