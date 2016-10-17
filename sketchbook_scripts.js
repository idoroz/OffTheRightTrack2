function runTheCards() {



    // $(".gridWrapper").slimScroll(
    //       {railVisible:true,
    //         height: '2306px',
    //         start:"top",
    //         size: "10px"

    //       });


    var slider1 = $('.card1').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3010
    });

    var slider2 = $('.card2').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3020
    });

    var slider3 = $('.card3').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3030
    });

    var slider4 = $('.card4').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3040
    });

    var slider5 = $('.card5').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3050
    });

    var slider6 = $('.card6').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3060
    });

    var slider7 = $('.card7').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3070
    });

    var slider8 = $('.card8').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3080
    });


    var slider9 = $('.card9').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3090
    });

    var slider10 = $('.card10').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3100
    });

    var slider11 = $('.card11').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3110
    });

    var slider12 = $('.card12').unslider({
        autoplay: true,
        infinite: true,
        nav: false,
        arrows: false,
        delay: 3120
    });





    slider1.on('unslider.change', function(event, index, slide) {
        var randomIndex1 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg1').attr("src", "img/sketchbook/" + randomIndex1 + ".jpg");
            $('a.frontBigImg1').prop("href", "img/sketchbook/" + randomIndex1 + ".jpg");

        } else {
            $('img.frontThumbImg2').attr("src", "img/sketchbook/" + randomIndex1 + ".jpg");
            $('a.frontBigImg2').prop("href", "img/sketchbook/" + randomIndex1 + ".jpg");


        }
    });



    slider2.on('unslider.change', function(event, index, slide) {
        var randomIndex2 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg3').attr("src", "img/sketchbook/" + randomIndex2 + ".jpg");
            $('a.frontBigImg3').prop("href", "img/sketchbook/" + randomIndex2 + ".jpg");

        } else {
            $('img.frontThumbImg4').attr("src", "img/sketchbook/" + randomIndex2 + ".jpg");
            $('a.frontBigImg4').prop("href", "img/sketchbook/" + randomIndex2 + ".jpg");

        }
    });


    slider3.on('unslider.change', function(event, index, slide) {
        var randomIndex3 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg5').attr("src", "img/sketchbook/" + randomIndex3 + ".jpg");
            $('a.frontBigImg5').prop("href", "img/sketchbook/" + randomIndex3 + ".jpg");

        } else {
            $('img.frontThumbImg6').attr("src", "img/sketchbook/" + randomIndex3 + ".jpg");
            $('a.frontBigImg6').prop("href", "img/sketchbook/" + randomIndex3 + ".jpg");

        }
    });

    slider4.on('unslider.change', function(event, index, slide) {
        var randomIndex4 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg7').attr("src", "img/sketchbook/" + randomIndex4 + ".jpg");
            $('a.frontBigImg7').prop("href", "img/sketchbook/" + randomIndex4 + ".jpg");

        } else {
            $('img.frontThumbImg8').attr("src", "img/sketchbook/" + randomIndex4 + ".jpg");
            $('a.frontBigImg8').prop("href", "img/sketchbook/" + randomIndex4 + ".jpg");
        }
    });


    slider5.on('unslider.change', function(event, index, slide) {
        var randomIndex5 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg9').attr("src", "img/sketchbook/" + randomIndex5 + ".jpg");
            $('a.frontBigImg9').prop("href", "img/sketchbook/" + randomIndex5 + ".jpg");

        } else {
            $('img.frontThumbImg10').attr("src", "img/sketchbook/" + randomIndex5 + ".jpg");
            $('a.frontBigImg10').prop("href", "img/sketchbook/" + randomIndex5 + ".jpg");
        }
    });


    slider6.on('unslider.change', function(event, index, slide) {
        var randomIndex6 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg11').attr("src", "img/sketchbook/" + randomIndex6 + ".jpg");
            $('a.frontBigImg11').prop("href", "img/sketchbook/" + randomIndex6 + ".jpg");

        } else {
            $('img.frontThumbImg12').attr("src", "img/sketchbook/" + randomIndex6 + ".jpg");
            $('a.frontBigImg12').prop("href", "img/sketchbook/" + randomIndex6 + ".jpg");

        }
    });


    slider7.on('unslider.change', function(event, index, slide) {
        var randomIndex7 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg13').attr("src", "img/sketchbook/" + randomIndex7 + ".jpg");
            $('a.frontBigImg13').prop("href", "img/sketchbook/" + randomIndex7 + ".jpg");

        } else {
            $('img.frontThumbImg14').attr("src", "img/sketchbook/" + randomIndex7 + ".jpg");
            $('a.frontBigImg14').prop("href", "img/sketchbook/" + randomIndex7 + ".jpg");


        }
    });


    slider8.on('unslider.change', function(event, index, slide) {
        var randomIndex8 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg15').attr("src", "img/sketchbook/" + randomIndex8 + ".jpg");
            $('a.frontBigImg15').prop("href", "img/sketchbook/" + randomIndex8 + ".jpg");

        } else {
            $('img.frontThumbImg16').attr("src", "img/sketchbook/" + randomIndex8 + ".jpg");
            $('a.frontBigImg16').prop("href", "img/sketchbook/" + randomIndex8 + ".jpg");

        }
    });


    slider9.on('unslider.change', function(event, index, slide) {
        var randomIndex9 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg17').attr("src", "img/sketchbook/" + randomIndex9 + ".jpg");
            $('a.frontBigImg17').prop("href", "img/sketchbook/" + randomIndex9 + ".jpg");

        } else {
            $('img.frontThumbImg18').attr("src", "img/sketchbook/" + randomIndex9 + ".jpg");
            $('a.frontBigImg18').prop("href", "img/sketchbook/" + randomIndex9 + ".jpg");

        }
    });


    slider10.on('unslider.change', function(event, index, slide) {
        var randomIndex10 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg19').attr("src", "img/sketchbook/" + randomIndex10 + ".jpg");
            $('a.frontBigImg19').prop("href", "img/sketchbook/" + randomIndex10 + ".jpg");

        } else {
            $('img.frontThumbImg20').attr("src", "img/sketchbook/" + randomIndex10 + ".jpg");
            $('a.frontBigImg20').prop("href", "img/sketchbook/" + randomIndex10 + ".jpg");

        }
    });

    slider11.on('unslider.change', function(event, index, slide) {
        var randomIndex11 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg21').attr("src", "img/sketchbook/" + randomIndex11 + ".jpg");
            $('a.frontBigImg21').prop("href", "img/sketchbook/" + randomIndex11 + ".jpg");

        } else {
            $('img.frontThumbImg22').attr("src", "img/sketchbook/" + randomIndex11 + ".jpg");
            $('a.frontBigImg22').prop("href", "img/sketchbook/" + randomIndex11 + ".jpg");

        }
    });

    slider12.on('unslider.change', function(event, index, slide) {
        var randomIndex12 = Math.floor((Math.random() * 34) + 1);
        if (index == 2) {
            $('img.frontThumbImg23').attr("src", "img/sketchbook/" + randomIndex12 + ".jpg");
            $('a.frontBigImg23').prop("href", "img/sketchbook/" + randomIndex12 + ".jpg");

        } else {
            $('img.frontThumbImg24').attr("src", "img/sketchbook/" + randomIndex12 + ".jpg");
            $('a.frontBigImg24').prop("href", "img/sketchbook/" + randomIndex12 + ".jpg");

        }
    });


    var info = $("a.frontBigImg24").data("events");
    console.log(info);

};
