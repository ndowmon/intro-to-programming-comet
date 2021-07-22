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

//-----------------------------------------

const messageForm = document.querySelector('form');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  console.log({
    name,
    email,
    message,
  });

  const messagesSection = document.getElementById('messages');
  const messagesList = messagesSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href=mailto:${email}>${name}</a> wrote: <span>${message} </span>`;
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', (e) => {
    const entry = e.target.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messagesList.appendChild(newMessage);
  messageForm.reset();
})