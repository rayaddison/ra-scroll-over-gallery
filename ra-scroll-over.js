/////////////////////////////////////////////
/////////// Scroll Over Gallery /////////////
/////////////////////////////////////////////

function raScrollOver() {

    // Check for retina screens and use retinaImages array if available

    if ((window.devicePixelRatio > 1) && (retinaImages !== 'undefined')) {
        images = retinaImages;
    }

    // Gallery array is created with on-page js

    // Find the number of slides in the array 
    var slideCount = images.length;

    // Set the step point in percent value based on image count, and round breakPercent down to avoid missing 100% in the array created below. This is not wholly accurate but will suffice
    breakPercent = Math.floor(100/slideCount);

    // Break 100 into steps based on the breakPercent and set up an array with them
    var steps = [];
    for (var i = breakPercent;i <= 100;i=i+breakPercent) {
        steps.push(i);
    }

    // Set the first image in the array as the default and store the sequence value in a variable for use later
    var imgNumber = 0;
    var imgURL = images[imgNumber];
    $('.gallery__slide img').attr("src", imgURL);

    // Only do something if indexOf is supported (not IE8)

    if (Array.prototype.indexOf) {

        // Monitor the mouse event and apply the offset when required
        // On mousemove
        $('.photo__gallery').on('mousemove', function(evt) {

            // Set variable for the offset
            var parentOffset = $(this).parent().offset();

            console.log(parentOffset);

            // Set mouseposition against offset
            mousePosition = evt.pageX - parentOffset.left;

            // Get the current width of the gallery for RWD
            var galleryWidth = $('.photo__gallery').width();

            // Calculate the position of mousemove within galleryWidth as a percentage (whole number)
            mousePercent = Math.floor((mousePosition/galleryWidth) * 100); 

            // Step through each value in the array
            for (var i = 0; i < slideCount; i++) {

                // If the mousepointer x value as a percentage is within a range of the step array
                if ( mousePercent > (steps[i]-breakPercent) &&  mousePercent < steps[i])
                {
                    // then find the index value of that array array item
                    var index = steps.indexOf(steps[i]);

                    // and if it doesn't match the array index of the existing image, swap to the right image using the index value and update the variable number
                    if (index != imgNumber) {
                        var imgNumber = index;
                        var imgURL = images[index];
                        $(this).find('.gallery__slide img').attr("src", imgURL);
                    }
                }
            }
        });
    }
};