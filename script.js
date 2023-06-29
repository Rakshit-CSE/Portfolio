/* =======================Toggle Icon Navbar======================= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




/* =======================Scroll Section Active Link======================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top<offset + height)
        {
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/* =======================Sticky Navbar======================= */

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    /* ====Remove Toggle Icon and Navbar when click Navbar Link(Scroll)==== */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* =======================Read More Button======================= */

function readfun() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

/* =======================Scroll Reveal======================= */

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .p-heading, .s-heading, .head', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-box, .contact form, .skills-row', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .education-row, .footer, .progress', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content  ', { origin: 'right' });

/* =======================Typed js======================= */
const typed = new Typed('.multiple-text',{
    strings: ['Web Developer!','Graphic Designer','Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const type = new Typed('.multiple-txt',{
    strings: ['Web Developer!','Graphic Designer','Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

