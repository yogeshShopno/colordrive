// model1
function toggleModal1() {
  // toggleModal()
    document.getElementById('modal1').classList.toggle('hidden')
  // let header = document.querySelector('#header')
  // console.log(header.style.zIndex);
  
  // if(header.style.zIndex == 1 || header.style.zIndex == ''){
  //   header.style.zIndex = -1;
  // }else{
  //   header.style.zIndex = 1;
  // }
 
}
// model1



// model2
function toggleModal2() {
  document.getElementById('modal2').classList.toggle('hidden')
}
function toggleModal1AndModal2() {
  toggleModal1();
  toggleModal2();
}
// model2

// model3
function toggleModal3() {
    const popup = document.getElementById('booking-popup');
    popup.classList.toggle('hidden');
}
// model3

// model3
function toggleModal4() {
    const popup = document.getElementById('video-popup');
    popup.classList.toggle('hidden');
}
// model3

// loader
window.addEventListener('load', function () {
  document.getElementById('loader').style.display = 'none';
});
// loader




const mobile_icon = document.getElementById('mobile-icon');
const mobile_menu = document.getElementById('mobile-menu1');
const hamburger_icon = document.querySelector("#mobile-icon i");

function openCloseMenu() {
  mobile_menu.classList.toggle('block');
  mobile_menu.classList.toggle('active');
}

function changeIcon(icon) {
  icon.classList.toggle("fa-xmark");
}

mobile_icon.addEventListener('click', openCloseMenu);

mobile_menu.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log("nhgb");
  openCloseMenu();
  changeIcon(hamburger_icon);
});






// document.getElementById("enquiryForm").addEventListener("submit", function (event) {
//   event.preventDefault(); 

//   const form = event.target;
//   const messageDiv = document.getElementById("message");

//   if (form.checkValidity()) {
//     messageDiv.textContent = "Success! Your enquiry has been submitted.";
//     messageDiv.className = "text-green-500";
//     messageDiv.classList.remove("hidden");
//     form.reset();
//   } else {
//     messageDiv.textContent = "Error! Please fill all required fields.";
//     messageDiv.className = "text-red-500"; 
//     messageDiv.classList.remove("hidden");
//   }
// });



document.getElementById("subscription").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const form = event.target;
  const messageDiv = document.getElementById("message1");

  // Check if all required fields are filled
  if (form.checkValidity()) {
    // Show success message
    messageDiv.textContent = "Success! Your enquiry has been submitted.";
    messageDiv.className = "text-green-500"; // Apply success style
    messageDiv.classList.remove("hidden");
    form.reset(); // Optionally clear form fields after submission
  } else {
    // Show error message
    messageDiv.textContent = "Error! Please fill all required fields.";
    messageDiv.className = "text-red-500"; // Apply error style
    messageDiv.classList.remove("hidden");
  }
});






function toggleInput() {
  const otpRadio = document.getElementById('otp-radio');
  const passwordRadio = document.getElementById('password-radio');
  const otpField = document.getElementById('otp-field');
  const passwordField = document.getElementById('password-field');

  if (otpRadio.checked) {
    otpField.classList.remove('hidden');
    passwordField.classList.add('hidden');
  } else if (passwordRadio.checked) {
    passwordField.classList.remove('hidden');
    otpField.classList.add('hidden');
  }
}

// Initialize the correct field based on the default selected radio
toggleInput();




function scrollToSection(event, id) {
  event.preventDefault(); // Prevent the default anchor behavior
  const targetElement = document.getElementById(id);
  const headerOffset = 95; // Offset for the sticky header

  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
  });
}

// FAQ Content
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

// modal js
document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("modalOverlay").classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modalOverlay").classList.add("hidden");
}); 

// Close modal when clicking outside of it
document.getElementById("modalOverlay").addEventListener("click", function (event) {
  if (event.target === this) {
      this.classList.add("hidden");
  }
});