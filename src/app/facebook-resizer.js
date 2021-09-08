// Facebook plugin script
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&appId=2318953551684085&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

// Facebook resize scripts
  var container_width = 0;
  var container_height = 0;
  var resize;

  function initFBPlugin(){
    setTimeout(function() {resizeFBPlugin();}, 350); // timeouts add up!!!
  }

  function resizeFBPlugin(){
    setTimeout(function() {
      if ($(".fb-page").length > 0) {
        // getting parent box width
        container_width = (Number($('.fb-page').width()) - Number($('.fb-page').css('padding-left').replace("px", ""))).toFixed(0);

        // same height as instagram - 15(average padding)
        container_height = Number($('.instagram-widget').height() - 15);

        $(".fb-placeholder").attr("style", "height:" + (container_height - 6).toString() + "px");
      }
    }, 600); //should be smaller than resize's timeout

    clearTimeout(resize);
    resize = setTimeout(function() {
      if (!isNaN(container_width) && !isNaN(container_height)) {
          $(".fb-page").attr("data-width", container_width).attr("data-height", container_height);
      }
      if (typeof FB !== 'undefined' ) {
          FB.XFBML.parse();
      }
    }, 700);
  }
