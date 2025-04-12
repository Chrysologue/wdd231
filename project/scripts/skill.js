async function fetchData() {
  const request = new Request('./data/skills.json');
  try {
    const response = await fetch(request);
    if (response.ok) {
      const data = await response.json();
      const newData = data.skills;
      poplateSkill(newData);
    } else {
      console.log(await response.txt());
    }
  } catch (err) {
    console.log(err);
  }
}
fetchData();

const skillContainer = document.querySelector('.skill-container');
function poplateSkill(newData) {
  newData.forEach((data) => {
    const holder = document.createElement('div');
    const label = document.createElement('label');
    const progress = document.createElement('progress');

    label.textContent = data.name;
    label.setAttribute('for', data.id);

    progress.setAttribute('id', data.id);
    progress.setAttribute('value', data.value);
    progress.setAttribute('max', data.max);
    progress.setAttribute('aria-label', data.ariaLabel);
    holder.appendChild(label);
    holder.appendChild(progress);
    skillContainer.appendChild(holder);
  });
}

const message = document.querySelector('.greeting');

function getDateDifference(lastVisiteDate) {
  const currentDate = new Date();
  const lastVisit = new Date(lastVisiteDate);
  const timeDifference = currentDate - lastVisit;
  return Math.floor(timeDifference / (1000 * 3600 * 24));
}
function setLastVisit() {
  const lastVisitDate = new Date();
  localStorage.setItem('lastvisit', lastVisitDate.toISOString());
}
function getDisplay() {
  const lastVisit = localStorage.getItem('lastvisit');
  if (!lastVisit) {
    message.textContent = 'Welcome! Let us know if you have any questions.';
  } else {
    const timeDiff = getDateDifference(lastVisit);
    if (timeDiff < 1) {
      message.textContent = 'Back so soon! Awesome!';
    } else {
      message.textContent = `You last visited ${timeDiff} ${
        timeDiff == 1 ? 'day' : 'days'
      } ago.`;
    }
  }
  setLastVisit();
}
getDisplay();



import { projects } from './projects.js';

function getThreeRandomProject(projects) {
  let selectedProjects = [];
  while (selectedProjects.length < 3) {
    const randomIndex = Math.floor(Math.random() * projects.length);
    if (!selectedProjects.includes(projects[randomIndex])) {
      selectedProjects.push(projects[randomIndex]);
    }
  }
  return selectedProjects;
}

const container = document.querySelector('#project-overview');
container.textContent = '';


function createThreeProjectButtons() {
  for (let i = 0; i < 3; i++) {
    const projectCard = document.createElement('div');
    projectCard.setAttribute('id', 'three-overview'); 
        projectCard.innerHTML = `
      <button class="showBtn" type="button">Loading...</button>
    `;
    container.appendChild(projectCard);
  }
}


function updateProjectButtons(projects) {
  const buttons = container.querySelectorAll('.showBtn');
  projects.forEach((project, index) => {
    if (buttons[index]) {
      buttons[index].textContent = project.title;
      buttons[index].addEventListener('click', () => {
        showProjectModal(project)
      })
    }
  });
}
const dialog = document.querySelector('.project-dialog');
const title = dialog.querySelector('h2');
const desc = dialog.querySelector('.description');
const tech = dialog.querySelector('.techonology');
function showProjectModal(project)
{
  dialog.showModal();
  title.textContent = project.title;
  desc.textContent = project.description
  tech.textContent = project.technologies.join(", ");
}
document.querySelector('.closeBtn').addEventListener('click', () => {
  dialog.close();
})

createThreeProjectButtons();


updateProjectButtons(getThreeRandomProject(projects));


setInterval(() => {
  updateProjectButtons(getThreeRandomProject(projects));
}, 10000);

