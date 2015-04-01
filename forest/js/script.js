$(document).ready(function(){	

/*
<!--[if IE]>
	if ($(window).height <= 900 && $(window).height >=801) {
        	$(window).bind('scroll',function(e){
				parallaxScroll900();
			});
		} else if () {}
<!--[endif]-->*/

		/*if (Modernizr.touch){
		   $('#touchguide').css("visibility", "visible");
		   $('.next').css("visibility","hidden");
		   $('.prev').css("visibility","hidden");
		   $('#pillarlayer').css("visibility","hidden");
		   $('#pillar1').css("visibility","hidden");
		   $('#pillar2').css("visibility","hidden");
		   $('#pillar3').css("visibility","hidden");
		   $('#pillar4').css("visibility","hidden");
		   $('#pillar5').css("visibility","hidden");
		   
		} *//*else {
		   $('#touchguide').css("visibility", "hidden");
		   $('.next').css("visibility","visible");
		   $('.prev').css("visibility","visible");
		   $('#pillarlayer').css("visibility","visible");
		   $('#pillar1').css("visibility","visible");
		   $('#pillar2').css("visibility","visible");
		   $('#pillar3').css("visibility","visible");
		   $('#pillar4').css("visibility","visible");
		   $('#pillar5').css("visibility","visible");
		   enquire.register('only screen and (min-height: 1801px) and (max-height: 2048px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll2048();
					});
			  }
		  }).register('only screen and (min-height: 1601px) and (max-height: 1800px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll1800();
					});
			  }
		  }).register('only screen and (min-height: 1537px) and (max-height: 1600px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll1600();
					});
			  }
		  }).register('only screen and (min-height: 1441px) and (max-height: 1536px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll1536();
					});
			  }
		  }).register('only screen and (min-height: 1137px) and (max-height: 1440px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll1440();
					});
			  }
		  }).register('only screen and (min-height: 1081px) and (max-height: 1136px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll1136();
					});
			  }
		  }).register('only screen and (min-height: 1051px) and (max-height: 1080px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll1080();
					});
			  }
		  }).register('only screen and (min-height: 1025px) and (max-height: 1050px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll1050();
					});
			  }
		  }).register('only screen and (min-height: 961px) and (max-height: 1024px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll1024();
					});
			  }
		  }).register('only screen and (min-height: 901px) and (max-height: 960px) ', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll960();
					});
			  }
		  }).register('only screen and (min-height: 801px) and (max-height: 900px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll900();
					});
			  }
		  }).register('only screen and (min-height: 769px) and (max-height: 800px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll800();
					});
			  }
		  }).register('only screen and (min-height: 641px) and (max-height: 768px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll768();
					});
			  }
		  }).register('only screen and (min-height: 601px) and (max-height: 640px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll640();
					});
			  }
		  }).register('only screen and (min-height: 480px) and (max-height: 600px) ', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll600();
					});
			  }
		  }).register('only screen and (min-height: 320px) and (max-height: 480px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll480();
					});
			  }
		  }).register('only screen and (min-height: 0px) and (max-height: 320px)', {
			  match : function () {
					$(window).bind('scroll',function(e){
						parallaxScroll320();
					});
			  }
		  }).listen();
		}*/	
/*=========================================================================*/
		

		
/*=========================================================================*/		
		
		
/*=========================================================================*/				
		
/*Parallax functions*/		
	  
/*parallax functions specific to media queries*/
	  function parallaxScroll(){
		var scrolled = $(window).scrollLeft();
		$('#birch').css('left', ((-5)-(scrolled*.07))+'%');
		$('body > section#trees > img#tree1').css('left',(25-(scrolled*.07))+'%');
		$('#tree2').css('left',(65-(scrolled*.07))+'%');
		$('#tree3').css('left',(95-(scrolled*.07))+'%');
		$('#tree4').css('left',(120-(scrolled*.07))+'%');
		$('#tree5').css('left',(155-(scrolled*.07))+'%');
		$('#mid_ground').css('left',(14-(scrolled*.0075))+'%');
		$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
/*	function parallaxScroll320() {
			var scrolled = $(window).scrollLeft();
			$('#writeup').css('left',(9.8-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('left',(13-(scrolled*.0075))+'%');
			$('#dynamicboothvid').css('left',(18.2-(scrolled*.0045))+'%');
			$('#gallery').css('left',(22.8-(scrolled*.0075))+'%');
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	function parallaxScroll480() {
			var scrolled = $(window).scrollLeft();
			$('#writeup').css('left',(25.3-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('left',(42.4-(scrolled*.0075))+'%');
			$('#dynamicboothvid').css('left',(53.3-(scrolled*.0045))+'%');
			$('#gallery').css('left',(64.9-(scrolled*.0075))+'%');
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll600() {
			var scrolled = $(window).scrollLeft();
			$('#writeup').css('left',(14-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.08))+'%');
			$('#dynamicboothvid').css('top',(-(175-(scrolled*.1)))+'%');
			$('#gallery').css('left',(57-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 1800){  
							$("#gallery").fadeOut(2000);
					   } else if( distanceFromLeft > 1800 && distanceFromLeft < 2200) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 2200)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll640() {
			var scrolled = $(window).scrollLeft();
			$('#writeup').css('left',(17-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.06))+'%');
			$('#dynamicboothvid').css('top',(-(175-(scrolled*.125)))+'%');
			$('#gallery').css('left',(50-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 2000){ 
							$("#gallery").fadeOut(2000); 
					   } else if( distanceFromLeft > 2000 && distanceFromLeft < 2600) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 2600)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll768() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(25-(scrolled*.08))+'%');
			$('#pillar2').css('left',(110-(scrolled*.08))+'%');
			$('#pillar3').css('left',(200-(scrolled*.08))+'%');
			$('#pillar4').css('left',(245-(scrolled*.08))+'%');
			$('#pillar5').css('left',(320-(scrolled*.08))+'%');
			$('#writeup').css('left',(14-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.080))+'%');
			$('#dynamicboothvid').css('top',(-(175-(scrolled*.095)))+'%');
			$('#gallery').css('left',(57-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 2600){
							$("#gallery").fadeOut(2000);  
					   } else if( distanceFromLeft > 2600 && distanceFromLeft < 3200) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 3200)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll800() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(30-(scrolled*.08))+'%');
			$('#pillar2').css('left',(120-(scrolled*.08))+'%');
			$('#pillar3').css('left',(203-(scrolled*.08))+'%');
			$('#pillar4').css('left',(266-(scrolled*.08))+'%');
			$('#pillar5').css('left',(350-(scrolled*.08))+'%');
			$('#writeup').css('left',(17-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.05))+'%');
			$('#dynamicboothvid').css('top',(-(175-(scrolled*.085)))+'%');
			$('#gallery').css('left',(60-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 3200){  
							$("#gallery").fadeOut(2000);
					   } else if( distanceFromLeft > 3200 && distanceFromLeft < 3500) {
							$("#gallery").fadeIn(2000);
					   } else if(distanceFromLeft >= 3500){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll900() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(50-(scrolled*.08))+'%');
			$('#pillar2').css('left',(140-(scrolled*.08))+'%');
			$('#pillar3').css('left',(240-(scrolled*.08))+'%');
			$('#pillar4').css('left',(320-(scrolled*.08))+'%');
			$('#pillar5').css('left',(410-(scrolled*.08))+'%');
			$('#writeup').css('left',(15-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.050))+'%');
			$('#dynamicboothvid').css('top',(-(175-(scrolled*.075)))+'%');
			$('#gallery').css('left',(70-(scrolled*.0075))+'%')
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 4000){
							$("#gallery").fadeOut(2000);
					   } else if( distanceFromLeft > 4000 && distanceFromLeft < 4400) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 4400)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll960() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(50-(scrolled*.08))+'%');
			$('#pillar2').css('left',(170-(scrolled*.08))+'%');
			$('#pillar3').css('left',(262-(scrolled*.08))+'%');
			$('#pillar4').css('left',(340-(scrolled*.08))+'%');
			$('#pillar5').css('left',(450-(scrolled*.08))+'%');
			$('#writeup').css('left',(15-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.03))+'%');
			$('#dynamicboothvid').css('top',(-(100-(scrolled*.04)))+'%');
			$('#gallery').css('left',(70-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 3000){ 
							$("#gallery").fadeOut(2000);
					   } else if( distanceFromLeft > 3000 && distanceFromLeft < 4200) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 4200)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll1024() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(50-(scrolled*.08))+'%');
			$('#pillar2').css('left',(165-(scrolled*.08))+'%');
			$('#pillar3').css('left',(274-(scrolled*.08))+'%');
			$('#pillar4').css('left',(355-(scrolled*.08))+'%');
			$('#pillar5').css('left',(475-(scrolled*.08))+'%');
			$('#writeup').css('left',(20-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.03))+'%');
			$('#dynamicboothvid').css('top',(-(100-(scrolled*.04)))+'%');
			$('#gallery').css('left',(70-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 3300){
							$("#gallery").fadeOut(2000); 
					   } else if( distanceFromLeft > 3300 && distanceFromLeft < 4500) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 4500)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll1050() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(52-(scrolled*.09))+'%');
			$('#pillar2').css('left',(185-(scrolled*.09))+'%');
			$('#pillar3').css('left',(302-(scrolled*.09))+'%');
			$('#pillar4').css('left',(412-(scrolled*.09))+'%');
			$('#pillar5').css('left',(530-(scrolled*.09))+'%');
			$('#writeup').css('left',(20.5-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.03))+'%');
			$('#dynamicboothvid').css('top',(-(100-(scrolled*.03)))+'%');
			$('#gallery').css('left',(75-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 3500){ 
							$("#gallery").fadeOut(2000);
					   } else if( distanceFromLeft > 3500 && distanceFromLeft < 4800) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 4800)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll1080() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(60-(scrolled*.09))+'%');
			$('#pillar2').css('left',(185-(scrolled*.09))+'%');
			$('#pillar3').css('left',(312-(scrolled*.09))+'%');
			$('#pillar4').css('left',(426-(scrolled*.09))+'%');
			$('#pillar5').css('left',(555-(scrolled*.09))+'%');
			$('#writeup').css('left',(21-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.03))+'%');
			$('#dynamicboothvid').css('top',(-(100-(scrolled*.03)))+'%');
			$('#gallery').css('left',(73-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 4000){
							$("#gallery").fadeOut(2000);
					   } else if( distanceFromLeft > 4000 && distanceFromLeft < 5000) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 5000)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll1136() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(70-(scrolled*.09))+'%');
			$('#pillar2').css('left',(195-(scrolled*.09))+'%');
			$('#pillar3').css('left',(335-(scrolled*.09))+'%');
			$('#pillar4').css('left',(448-(scrolled*.09))+'%');
			$('#pillar5').css('left',(585-(scrolled*.09))+'%');
			$('#writeup').css('left',(22.5-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.03))+'%');
			$('#dynamicboothvid').css('top',(-(100-(scrolled*.03)))+'%');
			$('#gallery').css('left',(78-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 4200){  
							$("#gallery").fadeOut(2000);
					   } else if( distanceFromLeft > 4200 && distanceFromLeft < 5300) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 5300)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
 
	 function parallaxScroll1440() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(70-(scrolled*.09))+'%');
			$('#pillar2').css('left',(235-(scrolled*.09))+'%');
			$('#pillar3').css('left',(395-(scrolled*.09))+'%');
			$('#pillar4').css('left',(530-(scrolled*.09))+'%');
			$('#pillar5').css('left',(700-(scrolled*.09))+'%');
			$('#writeup').css('left',(26-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(100-(scrolled*.02))+'%');
			$('#dynamicboothvid').css('top',(-(100-(scrolled*.025)))+'%');
			$('#gallery').css('left',(95-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 4400){ 
							$("#gallery").fadeOut(2000); 
					   } else if( distanceFromLeft > 4400 && distanceFromLeft < 6500) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 6500)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
 /*not done yet */ 	  
	/*  function parallaxScroll1536() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(25-(scrolled*.07))+'%');
			$('#pillar2').css('left',(103-(scrolled*.07))+'%');
			$('#pillar3').css('left',(181-(scrolled*.07))+'%');
			$('#pillar4').css('left',(235-(scrolled*.07))+'%');
			$('#pillar5').css('left',(316-(scrolled*.07))+'%');
			$('#writeup').css('left',(20-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(25-(scrolled*.0075))+'%');
			$('#dynamicboothvid').css('top',(-(30-(scrolled*.0045)))+'%');
			$('#gallery').css('left',(35-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 3300){
							$("#gallery").fadeOut(2000);  
					   } else if( distanceFromLeft > 3300 && distanceFromLeft < 3400) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 3400)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll1680() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(25-(scrolled*.07))+'%');
			$('#pillar2').css('left',(103-(scrolled*.07))+'%');
			$('#pillar3').css('left',(181-(scrolled*.07))+'%');
			$('#pillar4').css('left',(235-(scrolled*.07))+'%');
			$('#pillar5').css('left',(316-(scrolled*.07))+'%');
			$('#writeup').css('left',(20-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(25-(scrolled*.0075))+'%');
			$('#dynamicboothvid').css('top',(-(30-(scrolled*.0045)))+'%');
			$('#gallery').css('left',(35-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 3300){  
							$("#gallery").fadeOut(2000);
					   } else if( distanceFromLeft > 3300 && distanceFromLeft < 3400) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 3400)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }
	  
	  function parallaxScroll2048() {
			var scrolled = $(window).scrollLeft();
			$('#pillar1').css('left',(25-(scrolled*.07))+'%');
			$('#pillar2').css('left',(103-(scrolled*.07))+'%');
			$('#pillar3').css('left',(181-(scrolled*.07))+'%');
			$('#pillar4').css('left',(235-(scrolled*.07))+'%');
			$('#pillar5').css('left',(316-(scrolled*.07))+'%');
			$('#writeup').css('left',(20-(scrolled*.0075))+'%');
			$('#jazzyjeffvid').css('top',(25-(scrolled*.0075))+'%');
			$('#dynamicboothvid').css('top',(-(30-(scrolled*.0045)))+'%');
			$('#gallery').css('left',(35-(scrolled*.0075))+'%');
			$(window).scroll(function(){
					   var distanceFromLeft = $(window).scrollLeft();
					   if(distanceFromLeft <= 3300){
							$("#gallery").fadeOut(2000);  
					   } else if( distanceFromLeft > 3300 && distanceFromLeft < 3400) {
							$("#gallery").fadeIn(2000);
					   } else if($("#gallery").is(":visible") && (distanceFromLeft >= 3400)){
							$("#gallery").fadeOut(2000);
					  }
			});
			$('#bg').css('left',(0-(scrolled*.01))+'%'); 
	  }*/
	 	
});	

/*=========================================================================*/	

