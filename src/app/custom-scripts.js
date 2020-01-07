// Facebook plugin script
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

// Custom Scripts
/****************Facebook START****************/
  var container_width = 0;
  var container_height = 0;
  var resize;

  function initFBPlugin(){
    setTimeout(function() {resizeFBPlugin();}, 1500); // timeouts add up!!!
  }

  function resizeFBPlugin(){
    setTimeout(function() {
      if ($(".fb-page").length > 0) {
        // getting parent box width
        container_width = (Number($('.fb-page').width()) - Number($('.fb-page').css('padding-left').replace("px", ""))).toFixed(0);

        // same height as instagram - 15(average padding)
        container_height = Number($('.instagram-widget').height() - 15);
      }
    }, 700); //should be smaller than resize's timeout

    clearTimeout(resize);
    resize = setTimeout(function() {
      if (!isNaN(container_width) && !isNaN(container_height)) {
          $(".fb-page").attr("data-width", container_width).attr("data-height", container_height);
      }
      if (typeof FB !== 'undefined' ) {
          FB.XFBML.parse();
      }
    }, 1000);
  }

  $(window).on('resize', function() {
    resizeFBPlugin();
  });
/****************Facebook END****************/
/***********3D Model Viewer START************/


/*var modelPlayer = this['js-3d-model-viewer'];
var viewerElement = document.getElementById('viewer')
var scene = modelPlayer.prepareScene(viewerElement)
modelPlayer.loadObject(scene, './assets/sample.obj')

var fullScreenButton = document.getElementById('fullscreen-button')
fullScreenButton.addEventListener('click', function () {
  modelPlayer.goFullScreen(viewerElement)
})*/


/***********3D Model Viewer END**************/