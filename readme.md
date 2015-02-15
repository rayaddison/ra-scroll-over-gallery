#RA Scroll-over Gallery

A different approach to image galleries.

## Requirements

*  Jquery  >= 1.7.1

## Get Started

The image array must be included on page. Edit the folder path and image names for standard and retina images. The retina image array will only be used and loaded on the page if it and the images exist. If retina images are not required, remove the line from the script.

````
<div class="photo__gallery">
    <script>
    window.path = "images/";
    window.images = [ path + 'image-01.jpg', path + 'image-02.jpg', path + 'image-03.jpg'];
    window.retinaImages = [ path + 'image-01@2x.jpg', path + 'image-02@2x.jpg', path + 'image-03@2x.jpg'];
    </script>
    <div class="gallery__slide">
        <img class="your-responsive-image-class" src="">
    </div>
</div>
````

Load jQuery just before the ````</body>```` tag. Include the ra-scroll-over js file next. i.e.

````
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="ra-scroll-over.js"></script>
`````

Then call the script on window load or wherever.

````
<script>
  $(window).load(function() {
    // Only call function if the image array is present on the page
    if (typeof images !== 'undefined') {
        raScrollOver();
    }
  });
</script>
````

## Examples

An example is included to demonstrate use.

## Browser Support

Not fully tested throughout browser histories. Currently tested on;

* IE9+
* FF
* Safari
* Chrome

Fallback for older browsers is to only show first image in the sequence - thus no hover interaction. Touch devices will work on touch points across the image container, but no scroll across with finger.
