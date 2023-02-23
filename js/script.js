// ================ active script for navbar ======================
// Get the container element
var btnContainer = document.getElementById('myDIV');

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName('nav-link');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// ================ navbar backgrount when scroll change ============
function changeBg() {
  let navbar = document.getElementById('navbar_part');
  let scrollValue = window.scrollY;
  if (scrollValue < 150) {
    navbar.classList.remove('nav_scroll');
  } else {
    navbar.classList.add('nav_scroll');
  }
}
window.addEventListener('scroll', changeBg);

// banner_part slider

$('#banner_part').slick({
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});

// form part scritp
const firebaseConfig = {
  apiKey: 'AIzaSyDBX5Syz3JbPAHWF5Vqi-_4wU6ITJMTdLU',
  authDomain: 'sti-contact-us-form.firebaseapp.com',
  databaseURL: 'https://sti-contact-us-form-default-rtdb.firebaseio.com',
  projectId: 'sti-contact-us-form',
  storageBucket: 'sti-contact-us-form.appspot.com',
  messagingSenderId: '201138949309',
  appId: '1:201138949309:web:58008ef9c830147ca43bd4',
  measurementId: 'G-5DS6BJVMTX',
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('name');
  var phone = getElementVal('phone');
  var emailid = getElementVal('email');
  var msgContent = getElementVal('message');

  saveMessages(name, phone, emailid, msgContent);

  //   enable alert
  document.querySelector('.alert').style.display = 'block';

  //   remove the alert
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //   reset the form
  document.getElementById('contactForm').reset();
}

const saveMessages = (name, phone, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    phone: phone,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
