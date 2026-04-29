function updateClock() {
  const spanishClock = document.getElementById('hora-espanola-text');
  const canaryClock = document.getElementById('hora-canaria-text');
  if (!spanishClock || !canaryClock) return;

  const now = new Date();
  spanishClock.textContent = now.toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid' });
  canaryClock.textContent = now.toLocaleTimeString('es-ES', { timeZone: 'Atlantic/Canary' });
}

function handleEmailForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.querySelector('input[type="email"]')?.value.trim();

  if (email) {
    alert('Correo confirmado. Bienvenido a Aqua Tracker!');
  } else {
    alert('Introduce un correo válido para estar notificado.');
  }
}

function handleDonationForm(event) {
  event.preventDefault();
  const amount = Number(event.currentTarget.querySelector('input[type="number"]')?.value);

  if (amount > 0) {
    alert('Bienvenido al equipo!! Gracias por apoyar la causa!');
  } else {
    alert('Por favor, introduce una cantidad válida.');
  }
}

function initCommonLayout() {
  const activePage = document.body.dataset.page || '';
  renderHeader(activePage);
  renderFooter();

  updateClock();
  setInterval(updateClock, 1000);

  document.querySelectorAll('.js-email-form').forEach((form) => {
    form.addEventListener('submit', handleEmailForm);
  });

  document.querySelectorAll('.js-donation-form').forEach((form) => {
    form.addEventListener('submit', handleDonationForm);
  });
}

document.addEventListener('DOMContentLoaded', initCommonLayout);
