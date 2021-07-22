const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = 'Nick Dowmon ' + thisYear;

footer.appendChild(copyright);

const skills = ['eating', 'talking', 'sleeping'];

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul');

for (const skillString of skills) {
  const skill = document.createElement('li');
  skill.innerHTML = skillString;
  skillsList.appendChild(skill);
}