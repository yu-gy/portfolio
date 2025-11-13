window.onload = () => {

    //main 
    const main = document.querySelector('#main');
    const butterfly = document.querySelector('.butterfly');
    const cloud = document.querySelector('.cloud');
    const cat = document.querySelector('.cat');
    const flower = document.querySelector('.flower');

    main.addEventListener('mousemove', e => {
        const rect = main.getBoundingClientRect();
        const xpos = e.clientX - rect.left;
        const ypos = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const butterflyMove = 20, butterflyRotate = 25;
        const cloudMove = 30, cloudRotate = 35;
        const catMove = 20, catRotate = 25;
        const flowerMove = 30, flowerRotate = 35;

        butterfly.style.transform = `translate(${(xpos - centerX) / butterflyMove}px, ${(ypos - centerY) / butterflyMove}px) 
                              rotateX(${-(ypos - centerY) / butterflyRotate}deg) 
                              rotateY(${(xpos - centerX) / butterflyRotate}deg)`;

        cloud.style.transform = `translate(${(xpos - centerX) / cloudMove}px, ${(ypos - centerY) / cloudMove}px) 
                                 rotateX(${-(ypos - centerY) / cloudRotate}deg) 
                                 rotateY(${(xpos - centerX) / cloudRotate}deg)`;

        cat.style.transform = `translate(${(xpos - centerX) / catMove}px, ${(ypos - centerY) / catMove}px) 
                               rotateX(${-(ypos - centerY) / catRotate}deg) 
                               rotateY(${(xpos - centerX) / catRotate}deg)`;

        flower.style.transform = `translate(${(xpos - centerX) / flowerMove}px, ${(ypos - centerY) / flowerMove}px) 
                               rotateX(${-(ypos - centerY) / flowerRotate}deg) 
                               rotateY(${(xpos - centerX) / flowerRotate}deg)`;
    });


    //about
    const words = ["소통하는", "열정적인"];
    const span = document.querySelector('.changing-word');
    let index = 0;
    span.addEventListener('animationend', nextWord);

    function nextWord() {
        index = (index + 1) % words.length;
        span.textContent = words[index];

        span.style.animation = 'none';
        span.offsetHeight;
        span.style.animation = 'scrollDown 3s linear';
    }

    //scroll_wrapper
    const about = document.querySelector(".about");
    const project = document.querySelector(".project");
    const menu = document.querySelector(".menu");
    const $logo = $('.logo');
    const $menuAbout = $('.about_menu');
    const $menuProject = $('.project_menu');
    const $menuDesign = $('.design_menu');
    const $design = $('.design');
    const $menuContact = $('.contact_menu');
    const $contact = $('.contact');


    $logo.on('click', function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    $menuAbout.on('click', function () {
        let mainHeight = $('#main').innerHeight();
        $('html, body').animate({
            scrollTop: mainHeight
        }, 1000);
    });
    $menuProject.on('click', function () {
        let projectHeight = $('.project').offset().top;
        $('html, body').stop().animate({
            scrollTop: projectHeight
        }, 1000);
    });
    $menuDesign.on('click', function () {
        let designHeight = $('.design').offset().top;
        $('html, body').stop().animate({
            scrollTop: designHeight
        }, 1000);
    });
    $menuContact.on('click', function () {
        let contactHeight = $('.contact').offset().top;
        $('html, body').stop().animate({
            scrollTop: contactHeight
        }, 1000);
    });

    window.addEventListener("scroll", () => {
        const pinSpacer = document.querySelector(".about").clientHeight + document.querySelector('#main').clientHeight + 400;
        const scrollY = window.scrollY;
        const aboutBottom = about.offsetTop + about.offsetHeight;
        /* console.log(project.offsetTop)
        console.log(scrollY);
        console.log(pinSpacer); */

        if (scrollY > pinSpacer) {
            menu.classList.add("active");
        } else {
            menu.classList.remove("active");
        }

    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".about", {
        yPercent: -120,
        ease: "none",
        scrollTrigger: {
            trigger: ".section-wrapper",
            start: "top top",
            end: "=+2500",
            scrub: true,
            pin: true
        }
    });


    //design
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.5,
        spaceBetween: 20,
        /* autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        speed: 5000,
        loop:true, */
    });

    Fancybox.bind("[data-fancybox='gallery']", {
        click: "close",
        closeButton: "top",
    });


    //contact
    const $innerText = $('.inner-text');
    const $imageBox = $('.image-box');
   
    $('.image-box').hover(
    function() {
        $('.inner-text').css({
            'animation': 'none',
            'opacity': '0'
        });
    },
    function() {
        $('.inner-text').css({
            'animation': '',
            'opacity': '1'
        });
    }
);

}//script end