function scroll_to(selector) {
   $('html, body').animate({
       'scrollTop': $(selector).offset().top
   }, 300);
}