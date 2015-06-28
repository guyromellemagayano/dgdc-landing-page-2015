$(document).ready(function ($) {
  var Centering = {
    image: function(parent, modal, padded) {
      return (($(parent).height() / 2) - ($(modal).height() / 2) - padded);
    }
  };

  // delegate calls to data-toggle="lightbox"
  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      always_show_close: true
    });
  });

});