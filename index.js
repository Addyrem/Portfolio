

// MENU NAVBAR CODE
function openNav() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    if (screenWidth <= 430) {
      document.getElementById("myNav").style.width = "100%";
      document.getElementById("myNav").style.fontSize = "36px";
      
    } else if (screenWidth <= 768) {
      document.getElementById("myNav").style.width = "100%";
    } else {
      document.getElementById("myNav").style.width = "100%";
    }
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
  function menuHover() {
    document.getElementById("menu").style.opacity = "0.75";
  }
  
  function menuHoverleave() {
    document.getElementById("menu").style.opacity = "1";
  }







//SCROLL TO SECTIONS

  function scrollToSection1() {
    var section1 = document.querySelector('.section_1');
    section1.scrollIntoView({ behavior: 'smooth' });
    closeNav();
  }

  function scrollToSection2() {
    var section2 = document.querySelector('.section_2');
    section2.scrollIntoView({ behavior: 'smooth' });
    closeNav();

  }

  function scrollToSection3() {
    var section3 = document.querySelector('.section_3');
    section3.scrollIntoView({ behavior: 'smooth' });
    closeNav();

  }

  function scrollToSection4() {
    var section4 = document.querySelector('.section_4');
    section4.scrollIntoView({ behavior: 'smooth' });
    closeNav();

  }

  function scrollToSection5() {
    var section5 = document.querySelector('.section_5');
    section5.scrollIntoView({ behavior: 'smooth' });
    closeNav();

  }










//CODE FOR DOWN BUTTON
   


function scrollToNextSection() {
    const currentSection = document.querySelector('.section:target');
    const sections = document.querySelectorAll('.section');
    const currentIndex = Array.from(sections).indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;

    sections[nextIndex].setAttribute('id', 'section' + (nextIndex + 1));
    window.location = '#' + sections[nextIndex].id;
}





//IMAGE MODEL FOR ZOOM
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var images = document.querySelectorAll(".look-img");
var closeBtn = document.querySelector(".close");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
  });
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
      modal.style.display = "none";
  }
};








//SCROLL TO TOP
document.addEventListener("DOMContentLoaded", function() {
  window.onscroll = function() {
      toggleScrollTopButton();
  };
});

function toggleScrollTopButton() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}











//Contact
const fixedToEmail = 'adityakhanna077@gmail.com';
function composeEmail() {
const subject = document.getElementById('subject').value;
const emailBody = document.getElementById('emailBody').value;

const mailtoLink = `mailto:${fixedToEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

// Open the default email client with the mailto link
window.location.href = mailtoLink;
}










//scroller for education
document.addEventListener("DOMContentLoaded", function() {
  const scrollSection = document.getElementById('education-scroll-section');

  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 200) { // Adjust this value based on when you want the effect to trigger
          scrollSection.classList.add('active');
      } else {
          scrollSection.classList.remove('active');
      }
  });
});