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
  function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.plus-minus-icon');

    // Check if the content is expanded
    const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';

    // Close all other accordions (optional, for single open behavior)
    document.querySelectorAll('.accordion-content').forEach((item) => {
      item.style.maxHeight = '0px';
      const itemIcon = item.previousElementSibling.querySelector('.plus-minus-icon');
      if (itemIcon) itemIcon.textContent = '+';
    });

    // Toggle current accordion
    if (isExpanded) {
      content.style.maxHeight = '0px';
      icon.textContent = '+';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'; // Smooth expand
      icon.textContent = '-';
    } 
    // FAQ js
  }
/******  5a94a8af-ae67-4192-9eee-8624aa0d0372  *******/

  

  
