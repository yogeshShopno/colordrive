/* slider */
const targetNumber = 100000;
const interval = 10; // Fast speed
const increment = 1000;
const counterElement = document.getElementById('home-painted-count');
let counter = 0;
function updateCounter() {
  if (counterElement) {
    if (counter < targetNumber) {
      counter += increment; counterElement.textContent = counter.toLocaleString(); setTimeout(updateCounter, interval);
    } else {
      counterElement.textContent = targetNumber.toLocaleString();
    }
  }
} updateCounter();

/* slider */


// Your JavaScript code
const moreServices = document.querySelector('.more-services');
const serviceNew = document.querySelectorAll('.service-new');
if (moreServices) {
  moreServices.addEventListener('click', () => {
    moreServices.classList.add('hidden');
    serviceNew.forEach((service) => {
      service.classList.remove('hidden');
    });
  });
}



