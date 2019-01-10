// Facebook plugin script
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

// Custom scripts for responsive webpage
  function resizeFBPlugin(){
      if ($(".fb-page").length > 0) {
      // getting parent box width
      var container_width = (Number($('.fb-page').width()) - Number($('.fb-page').css('padding-left').replace("px", ""))).toFixed(0);
      // getting parent box height
      // var container_height = Number($('.fb-page').height());

      // same height as instagram - 15(average padding)
      var container_height = Number($('.instagram-widget').height() - 15);

      if (!isNaN(container_width) && !isNaN(container_height)) {
          $(".fb-page").attr("data-width", container_width).attr("data-height", container_height);
      }
      if (typeof FB !== 'undefined' ) {
          FB.XFBML.parse();
      }
    }
  }

// calls functions when needed
  $(window).on('resize', function() {
    setTimeout(function(){resizeFBPlugin()}, 500);
  });
  $(window).on('load', function() {
      setTimeout(function(){resizeFBPlugin()}, 1500);
  });