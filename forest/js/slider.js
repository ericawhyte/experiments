$(document).ready(function(){	

/*slider code*/
		var options = {
				nextButton: true,
				prevButton: true,
				showNextButtonOnInit: true,
				showPrevButtonOnInit: true,
				animateStartingFrameIn: true,
				autoPlayDelay: 500,
				preloader: true,
				pauseOnHover: true,
				keyNavigation: false,
				swipePreventsDefault: true,
				preloadTheseFrames: [1],
				preloadTheseImages: [
					"images/slider/nike_reel_house_bts_0003.jpg",
					"images/slider/nike_reel_house_bts_0005.jpg",
					"images/slider/nike_reel_house_bts_0009.jpg",
					"images/slider/nike_reel_house_bts_0012.jpg",
					"images/slider/nike_reel_house_bts_0018.jpg",
					"images/slider/nike_reel_house_bts_0019.jpg",
					"images/slider/nike_reel_house_bts_0062.jpg",
					"images/slider/nike_reel_house_bts_0063.jpg",
					"images/slider/nike_reel_house_bts_0064.jpg",
					"images/slider/nike_reel_house_bts_0065.jpg",
					"images/slider/nike_reel_house_bts_0066.jpg",
					"images/slider/nike_reel_house_bts_0067.jpg",
					"images/slider/nike_reel_house_bts_0069.jpg",
					"images/slider/nike_reel_house_bts_0071.jpg",
					"images/slider/nike_reel_house_bts_0099.jpg",
					"images/slider/nike_reel_house_bts_0109.jpg",
					"images/slider/nike_reel_house_bts_0119.jpg",
					"images/slider/nike_reel_house_bts_0128.jpg",
					"images/slider/nike_reel_house_bts_0228.jpg",
					"images/slider/nike_reel_house_bts_0244.jpg",
					"images/slider/nike_reel_house_bts_0264.jpg",
					"images/slider/nike_reel_house_bts_0267.jpg",
					"images/slider/nike_reel_house_bts_0272.jpg",
					"images/slider/nike_reel_house_bts_0278.jpg",
					"images/slider/nike_reel_house_bts_0300.jpg",
					"images/slider/nike_reel_house_bts_0312.jpg",
					"images/slider/nike_reel_house_bts_0313.jpg",
					"images/slider/nike_reel_house_bts_0314.jpg",
					"images/slider/nike_reel_house_bts_0326.jpg",
					"images/slider/nike_reel_house_bts_0341.jpg",
					"images/slider/nike_reel_house_bts_0363.jpg"
				]
			};
		
			var sequence = $("#sequence").sequence(options).data("sequence");

			sequence.afterLoaded = function(){
				$("#nav").fadeIn(100);
				$("#nav li:nth-child("+(sequence.settings.startingFrameID)+") img").addClass("active");
			}

			sequence.beforeNextFrameAnimatesIn = function(){
				$("#nav li:not(:nth-child("+(sequence.nextFrameID)+")) img").removeClass("active");
				$("#nav li:nth-child("+(sequence.nextFrameID)+") img").addClass("active");
			}
			
			$("#nav li").click(function(){
				$(this).children("img").removeClass("active").children("img").addClass("active");
				sequence.nextFrameID = $(this).index()+1;
				sequence.goTo(sequence.nextFrameID);
			});

});