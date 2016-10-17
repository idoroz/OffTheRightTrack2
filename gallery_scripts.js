$(document).ready(function() {


        var $lg = $('#lightgallery');

    $("#lightgallery").lightGallery({
        mode: 'lg-fade',
        download: false,
        selector: 'div.custom-selector',
        zoom: true,
        scale: 1,
        counter: false,
        closable: false,
        hideBarsDelay: 1200,
        resize: false,
        actualSize: true,
        thumbnail: true,
        height: '100%',
        width: '100%',


    });

    $lg.on('onCloseAfter.lg', function(event) {
        document.location = 'index.html';


        return false;
    });

$("#firstImgGallery").click();
	});