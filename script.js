'use strict';
// Add your real contact details here. Empty values keep contact links hidden.
const PROFILE = {
  linkedin: 'https://www.linkedin.com/in/s-mohammad-sadeghi',
  email: 'mohamadsadeghi75@gmail.com'
};
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.hidden = false;
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) { closeMenu(); menuButton.focus(); }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
const linkedin = document.querySelector('#linkedin-link');
const email = document.querySelector('#email-link');
if (/^https:\/\/(www\.)?linkedin\.com\/in\/[^\s]+$/i.test(PROFILE.linkedin)) {
  linkedin.href = PROFILE.linkedin;
  linkedin.target = '_blank';
  linkedin.rel = 'noopener noreferrer';
  linkedin.hidden = false;
}
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(PROFILE.email)) {
  email.href = 'mailto:' + PROFILE.email;
  email.hidden = false;
}
document.querySelector('#contact-links').hidden = linkedin.hidden && email.hidden;
