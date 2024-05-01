(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const message = document.getElementById('message');
const submit = document.getElementById('submit');


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <style>
    .info {
        margin-bottom: 10px;
    }
    .info h1 {
        font-size: 18px;
        margin-bottom: 5px;
    }
    .info p {
        margin: 0;
        font-size: 16px;
    }
</style>
<div class="info">
    <p>You recieved a message on your website from: </p>
</div>

<div class="info">
    <h1>Name:</h1>
    <p>${name.value}</p>
</div>

<div class="info">
    <h1>Email:</h1>
    <p>${email.value}</p>
</div>

<div class="info">
    <h1>Phone:</h1>
    <p>${phone.value}</p>
</div>

<div class="info">
    <h1>Date:</h1>
    <p>${date.value}</p>
</div>

<div class="info">
    <h1>Message:</h1>
    <p>${message.value}</p>
</div>
    `;

    Email.send({
        SecureToken : "c098bf41-d35d-4965-80b1-ab171e4dbc3d", //add your token here
        To : 'fatenhamzehslp@gmail.com', 
        From : "fatenhamzehslp@gmail.com",
        Subject : "Form Submitted on the Website",
        Body : ebody
    }).then(
        message => alert("Email sent successfully!")
    );
});