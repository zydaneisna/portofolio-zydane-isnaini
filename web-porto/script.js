// ==================================================
// ELEMENT HTML
// ==================================================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

const backToTop = document.getElementById("backToTop");

const navLinks = document.querySelectorAll(".navbar a");


// ==================================================
// MENU MOBILE
// ==================================================

menuIcon.addEventListener("click", function () {

  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {

    menuIcon.innerHTML = '<i class="bx bx-x"></i>';

  } else {

    menuIcon.innerHTML = '<i class="bx bx-menu"></i>';

  }

});


// ==================================================
// TUTUP MENU SETELAH LINK DIKLIK
// ==================================================

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navbar.classList.remove("active");

    menuIcon.innerHTML = '<i class="bx bx-menu"></i>';

  });

});


// ==================================================
// HEADER SAAT SCROLL
// ==================================================

window.addEventListener("scroll", function () {

  if (window.scrollY > 50) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


// ==================================================
// ANIMASI SAAT SCROLL
// ==================================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

  function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.15
  }

);


revealElements.forEach(function (element) {

  observer.observe(element);

});


// ==================================================
// BACK TO TOP
// ==================================================

window.addEventListener("scroll", function () {

  if (window.scrollY > 400) {

    backToTop.classList.add("show");

  } else {

    backToTop.classList.remove("show");

  }

});


backToTop.addEventListener("click", function () {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});


// ==================================================
// TAHUN OTOMATIS
// ==================================================

const tahun = document.getElementById("tahun");

tahun.textContent = new Date().getFullYear();


// ==================================================
// NAVBAR ACTIVE
// ==================================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

  let current = "";

  sections.forEach(function (section) {

    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      current = section.getAttribute("id");

    }

  });


  navLinks.forEach(function (link) {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});