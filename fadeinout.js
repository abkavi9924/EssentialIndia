  
  $(document).ready(function() {
    $(window).scroll(function() {
        $(".fade-in-text").each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();

            // Fade in when text is in view
            if (position < scrollPosition + windowHeight - 100) {
                $(this).addClass("visible").removeClass("hidden").fadeIn();
            }

            // Fade out when text is out of view
            if (position > scrollPosition + windowHeight + 100 || position < scrollPosition) {
                $(this).addClass("hidden").removeClass("visible").fadeOut();
            }
        });
    });
});

