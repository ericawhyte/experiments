$(document).ready(function(){
		
	//function to create parallax	
	function parallaxScroll() {
		//set a variable to the scroll position on the horizontal
		var scrolled = $(window).scrollLeft();
		//ammend the css left position of selected elements based on the scroll position and set as percentage
		$('#birch').css('left',((-5)-(scrolled*.02))+'%');
		$('#tree1').css('left',(20-(scrolled*.015))+'%');
		$('#tree2').css('left',(40-(scrolled*.013))+'%');
		$('#tree3').css('left',(60-(scrolled*.015))+'%');
		$('#tree4').css('left',(80-(scrolled*.017))+'%');
		$('#tree5').css('left',(107-(scrolled*.019))+'%');
		$('#mid_ground').css('left',(0-(scrolled*.006))+'%');
	}
	
	//bind the parallax function to the scroll event listener to update as scroll happens
	$(window).bind('scroll',function(){
		parallaxScroll();
	});
	
	
	//function for positioning certain elements based on the left property
	function positioning() {
		//get the width in pixels of the background image
		var bg_width = $('#bg').width();
		//set the left positioning of the header and two writeups based on the width of the background image
		$('body > header').css('left', (bg_width * 0.03993610224) + 'px');
		$('body > section#mid + section > article').css('left', (bg_width * 0.2795527157) + 'px');
		$('body > section#mid + section > article + article').css('left', (bg_width * 0.6389776358) + 'px');
	}
	
	//function for setting the width of certain elements
	function sizing() {
		//get the width in pixels of the background image
		var bg_width = $('#bg').width();
		var bg_height = $('#bg').height();
		//set the width of certain elements based on the width of the background element
		$('body > header').css('width', (bg_width * 0.099840255) + 'px');
		$('body > section#mid + section > article').css('width', (bg_width * 0.279552715) + 'px');
		$('body > section#mid + section > article > p').css('width', (bg_width * 0.199680511) + 'px');
		$('body > section#mid + section > article + article').css('width', (bg_width * 0.259584664) + 'px');
		$('body > section#mid + section > article + article > p').css('width', (bg_width * 0.159744408) + 'px');
		$('body > section#mid').css('width', (bg_width * 0.90) + 'px');
		$('body > section#trees').css('width', (bg_width * 0.90) + 'px');
		$('body > header').css('height', (bg_height * 0.5) + 'px');
		$('body > section#mid + section > article').css('height', (bg_height * 0.569988019) + 'px');
		$('body > section#mid + section > article > p').css('height', (bg_height * 0.667938931) + 'px');
		$('body > section#mid + section > article + article').css('height', (bg_height * 0.669978035) + 'px');
		$('body > section#mid + section > article + article > p').css('height', (bg_height * 0.858778626) + 'px');
	}
	
	//bind the positioning function to the window resize event
	$(window).resize(function() {
		sizing();
		positioning();
	});
	
	//scaling font
	
	//smooth scrolling
	/*$('html, body, *').mousewheel(function(e, delta) {
		this.scrollLeft -= (delta * 40);
		e.preventDefault();
	});*/
	//suspect that css transition is what makes paranorman smooth
	
	//need to find a way to keep the section#mid from resetting to the default sizes on refresh of page
	
	//need to fix the scaling font...won't resize in some browsers and the redraw wasn't working
	
	//going to have to change the height percentages to dynamic with jquery
	
	//issues so far: the overflow & extensions on firefox and opera and safaru on pc both vertical and horizontal; positioning on the text through all browsers; safari on pc is not showning any images; think about adding in smooth scrolling for tabs as well
	
	//need to change overflows to overflow-x: hidden 
});