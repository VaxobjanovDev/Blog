// ------------------Navbar background changed-------------------- //

window.addEventListener("scroll", function() {
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed", window.scrollY > 10)
});

function navBack() {
    var nav = document.getElementById('nav').classList.toggle("change");
}

// ------------------Onclick navbar hide-----------------//
$('.nav-link').on('click', function() {
    $('.navbar-collapse').collapse('hide')
});

window.addEventListener('onclick', function() {
    var navback = document.getElementsByClassName('collapse');
    navback = false;

});