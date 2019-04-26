<?php
	//Convert to date
	$datestr="2017-12-27 21:45:00";//Your date 
	$date=strtotime($datestr);//Converted to a PHP date (a second count)
	//Calculate difference
	$diff=$date-time();//time returns current time in seconds
	
	if($diff < 0){
		header("Location: http://www.nebulonia.ro"); /* Redirect browser */
		exit();
	}
	
	$days=floor($diff/(60*60*24));//seconds/minute*minutes/hour*hours/day)
	$hours=floor(($diff-$days*60*60*24)/(60*60));
	$minutes=floor(($diff-$days*60*60*24-$hours*60*60)/60);
	$seconds=floor(($diff-$days*60*60*24-$hours*60*60-$minutes*60));
?>

<!--[if lt IE 8 ]><html class="no-js ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="no-js ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 8)|!(IE)]><!--><html class="no-js" lang="en"> <!--<![endif]-->
<head>

   <!--- Basic Page Needs
   ================================================== -->
   <meta charset="utf-8">
	<title>Nebulónia Diákszövetség</title>
	<meta name="description" content="">
	<meta name="author" content="">

   <!-- Mobile Specific Metas
   ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- CSS
    ================================================== -->
   <link rel="stylesheet" href="css/default.css">
	<link rel="stylesheet" href="css/layout.css">
   <link rel="stylesheet" href="css/media-queries.css">
   <link rel="stylesheet" href="css/magnific-popup.css">

   <!-- Script
   ================================================== -->
	<script src="js/modernizr.js"></script>

   <!-- Favicons
	================================================== -->
	<!-- <link rel="shortcut icon" href="favicon.png" > -->
	<link rel="shortcut icon" href="https://instagram.fotp1-1.fna.fbcdn.net/t51.2885-19/s150x150/12783909_138017926586386_1413066415_a.jpg" >
	
	<!-- Timer
	================================================== -->
	<link rel="stylesheet" href="css/timer/animate.css">
	<link rel="stylesheet" href="css/timer/style.css"> 
	
</head>

<body>

   <!-- Header
   ================================================== -->
   <header id="home">

      <div class="row banner">
         <div class="banner-text">
            <h1 class="responsive-headline">Nebulónia <br> Diákszövetség</h1>
            <hr />
            <ul class="social">
               <li><a href="https://www.facebook.com/Nebulonia"><i class="fa fa-facebook"></i></a></li>
               <li><a href="https://www.youtube.com/channel/UCpt-gyMWOTVPn-Dvlr4Hxug"><i class="fa fa-youtube"></i></a></li>
               <li><a href="https://www.instagram.com/nebulonia.alf/"><i class="fa fa-instagram"></i></a></li>
            </ul>
         </div>
		  <!-- Coming Soon -->
		<div id="timer"> 
        <div class="coming-soon">
            <div class="inner-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                        	<div class="logo wow fadeInDown">
                        	</div>
								
								<div class="timer wow fadeInUp">
                                <div class="days-wrapper">
                                    <span class="days"></span><span class="d" style="font-size: 80px;font-weight: 100;line-height: 90px;"><?php echo $days; ?></span><br>days
                                </div> 
                                <span class="slash">/</span> 
                                <div class="hours-wrapper">
                                    <span class="hours"></span><span class="h" style="font-size: 80px;font-weight: 100;line-height: 90px;"><?php echo $hours; ?></span><br>hours
                                </div> 
                                <span class="slash">/</span> 
                                <div class="minutes-wrapper">
                                    <span class="minutes"></span><span class="m" style="font-size: 80px;font-weight: 100;line-height: 90px;"><?php echo $minutes; ?></span><br>minutes
                                </div> 
                                <span class="slash">/</span> 
                                <div class="seconds-wrapper">
                                    <span class="seconds"></span><span class="s" style="font-size: 80px;font-weight: 100;line-height: 90px;"><?php echo $seconds; ?></span><br>seconds
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>

   </header> <!-- Header End -->

   <!-- Java Script
   ================================================== -->
   <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
   <script>window.jQuery || document.write('<script src="js/jquery-1.10.2.min.js"><\/script>')</script>
   <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>

   <script src="js/jquery.flexslider.js"></script>
   <script src="js/waypoints.js"></script>
   <script src="js/jquery.fittext.js"></script>
   <script src="js/magnific-popup.js"></script>
   <script src="js/init.js"></script>
   
    <script src="css/timer/jquery-1.10.2.min.js"></script>
    <script src="css/timer/jquery.backstretch.min.js"></script>
    <script src="css/timer/jquery.countdown.min.js"></script>
    <script src="css/timer/wow.min.js"></script>
    <!--<script src="css/timer/scripts.js"></script> -->
	
	<script>
	var timer = setInterval(function () {
	var update = true;
    $(".s").each(function() {
        var newS = parseInt($(this).text()) - 1;
        if(newS == -1) {
            newS = 59;
		    $(".m").each(function() {
				var newM = parseInt($(this).text()) - 1; 
				if(newM == -1) {
					newM = 59;
					$(".h").each(function() {
						var newH = parseInt($(this).text()) - 1;
						if(newH == -1){
							newH = 23;
							$(".d").each(function() {
								var newD = parseInt($(this).text()) - 1;
								if(newD == -1){
									window.location.replace("http://nebulonia.ro");
									update = false;
								}
								if(update){
									$(this).text(newD);
								}
							});
							if(update)
								$(this).text(newH);
						}
						if(update)
							$(this).text(newH);
					});
					if(update)
						$(this).text(newM);
				}
				if(update)
					$(this).text(newM);
			});
			if(update)
				$(this).text(newS);
        }
        if(update)
			$(this).text(newS);
	});
	}, 1000);
</script>

	<script>
	
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
	ga('create', 'UA-86485143-1', 'auto');
	ga('send', 'pageview');
	
	</script>

</body>

</html>