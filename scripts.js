$(document).ready(function() {

    setTimeout(function() {
        $('.menuWrapper').css('display', 'flex');
        $('.bioTextWrapper').css('display', 'block');
    }, 400);


      $('#backToTop').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 1000);
      return false;
});


      $('.websiteTitle').click(function (e) {
      e.preventDefault();
         var aboutMePosition = $('#aboutMe').offset();
        $('html, body').animate({scrollTop: aboutMePosition.top}, 1000);
      return false;
  });

            $('.sketchTitle').click(function (e) {
      e.preventDefault();
         var sketchPagePosition = $('.gridWrapper').offset();
        $('html, body').animate({scrollTop: sketchPagePosition.top}, 1000);
      return false;
  });

        $('.galleryTitle').click(function (e) {
                e.preventDefault();
                document.location = 'gallery.html';
            })

            $('.toGallery').click(function (e) {
                e.preventDefault();
                document.location = 'gallery.html';
            })

     $('.grid').isotope({
        layoutMode: 'fitRows',
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.grid-sizer',
            hybrid: true,
            fitToSection: true

        }
    });


    //lightbox options
    lightbox.option({
        'resizeDuration': 500,

        'albumLabel': ""
    })




    ///run the sketchbook card gallery
    runTheCards();



});


////Autoplay on background slideshows

var counter = 0, // to keep track of current slide
    $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function() {
    var itemToShow = Math.abs(counter % numItems); // uses remainder (aka modulo) operator to get the actual index of the element to show  

    $items.removeClass('show'); // remove .show from whichever element currently has it
    $items.eq(itemToShow).addClass('show');
};



////Autoplay on background slideshow

var BGSlide = window.setInterval(function() {

    function changeBG() {
        console.log("Boom!");
        counter++;
        showCurrent();
    }
    if (counter >= 5) {
        counter = 0;
    }

    changeBG();
}, 5000);

////Autoplay on background slideshow


