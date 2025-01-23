document.addEventListener('DOMContentLoaded', function () {
  // Get all the accordion toggles (locations)
  const toggles = document.querySelectorAll('.accordion-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      // Toggle 'active' class to rotate chevron
      this.classList.toggle('active');

      // Get the corresponding accordion content (next sibling)
      const content = this.nextElementSibling;

      // Check if content is already visible
      if (content.style.display === 'block') {
        content.style.display = 'none'; // Hide the content
      } else {
        // Hide all other accordion contents
        document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');

        // Show the clicked accordion content
        content.style.display = 'block'; // Show the content
      }
    });
  });
});




// Your JavaScript code
const moreServices1 = document.querySelector('.more-services1');
const serviceNew1 = document.querySelectorAll('.service-new1');


document.addEventListener('DOMContentLoaded', () => {
  if (moreServices1) {
    moreServices1.addEventListener('click', () => {
      moreServices1.classList.add('hidden');
      serviceNew1.forEach((service) => {
        service.classList.remove('hidden');
      });
    });
  }
})


  const bookingPopup = document.getElementById('booking-popup');
  if (bookingPopup) {
    setTimeout(() => {
      bookingPopup.classList.remove('hidden');
    }, 5000);

    document.addEventListener('click', (e) => {
      if (e.target === bookingPopup) {
        bookingPopup.classList.add('hidden');
      }
    });
  }


/*************  ✨ Codeium Command 🌟  *************/
  // FAQ
 
/******  5a94a8af-ae67-4192-9eee-8624aa0d0372  *******/

  

  
