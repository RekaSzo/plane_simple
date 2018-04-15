// creating a click event handler to all the links that have “#” anywhere in the href.
// check if the link is pointing to the same page by checking for a match between location.pathname.
// this helps to ensure that the link includes a qualified URL or just an identifier.

$(document).ready(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;


// when user clicks the menu link, it will remove the class active on that current active menu link and add it to that menu link that the user has clicked.
// this will also scroll to the target div id section.
// set scrolling effect faster/ slower by changing the value of 1000
// 1000 = 1000 milliseconds
// can use value “fast” (200 milliseconds) or “slow” (600 milliseconds)
// default = 400 milliseconds.

          $(this).click(function() {
$("#nav li a").removeClass("active");
$(this).addClass('active');
            $('html, body').animate({scrollTop: targetOffset}, 1000);
            return false;
          });
      }
    }
  });
});
