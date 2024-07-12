/**
 *	@category   Pulsar Framework
 *	@package    Jquery.Lightbox - image slider
 *	@copyright	2009 Dialog WebDesign GmbH
 *	@version    $Id: 1.0 2009-05-26 $
 *	
 *  remake for the case of several galleries on a single page 
 *  based on a jquery.lightbix slider
 *  June 16 2011    
 */

(function ($) {

	/**
	 *	Append markup to the top of body
	 */
	$ (document.body).prepend (
		'<div id="slideBody">' +
			'<div class="slideMask" />' +
			'<div class="slideContent slideLoad">' +
				'<div class="slideControl">' +
					'<div class="slideLB"><div class="slideRB"><div class="slideRT"><div class="slideLT">' +
						'<ul><li class="showLeft"><a href="#">Left</a></li><li class="showSlide"><a href="#">Show</a></li><li class="showRight"><a href="#">Right</a></li><li class="showClose"><a href="#">Close</a></li></ul>' +
						'</div></div></div></div>' +
				'</div>' +
				'<div class="slideContainer">' +
					'<div class="slideView"></div>' +
					'<p class="slideText">Demo text</p>' +
				'</div>' +
			'</div>' +
		'</div>'
	);
	
	/**
	 *	Global settings of the slider
	 */
	var newSet = {
		linkData : false,
		linkCaption : false,
		linkSource : false,
		linkIndex : 0,
		linkWidth : 800,
		linkSize : 100,
	
		viewSpeed : 5000,
		viewTimer : 0,
		viewOpacity : 80,
		viewChange : false,
		
		slideBody : $ ("#slideBody"),
		slideContent : $ (".slideContent"),
		slideMask : $ (".slideMask"),
		slideContainer : $ (".slideContainer"),
		slideView : $ (".slideView"),
		slideText : $ (".slideText"),
		slideShow : $ (".showSlide"),
		slideLeft : $ (".showLeft"),
		slideRight : $ (".showRight"),
		slideClose : $ (".showClose"),
		
		captionPrevious : "Previous",
		captionNext : "Next",
		captionShow : "Show",
		captionClose : "Close",
		galleries: []
	};

	/**
	 *	Append block to the top of body
	 *	@return	object - elements list which was founded by JQuery
	 */	
	$.fn.slidebox_multi = function (userOption, callName) {
	
		newSet = $.extend ( {}, newSet, userOption);
		newSet.linkData = this;
		newSet.galleries.push(newSet.linkSource); //rememeber all galleries sources to switch them later
		newSet.linkData.each (function (VnIndex, itemData) {
			$ (itemData).bind ("click", function (eventData) {
			   
			  //change link source according to a current gallery  
        newSet.linkIndex = 0; //always start showing from the begining
        
			  //var sliderId = $(eventData.currentTarget).parent().attr('id');
			  var sliderId = $(eventData.target).parent().attr('id');
			  
        sliderId.match(/sliderArea(\d+)/);
			  
        newSet.linkSource = newSet.galleries[RegExp.$1]; 
				
        $.fn.slidebox_multi.loader (newSet.linkData, eventData);
				eventClose (eventData);
			});
		});
		var itemIndex = 0,
			itemSource = null,
			itemCompare = null;
		for (itemIndex = 0; itemIndex < newSet.linkSource.length; itemIndex++) {
			itemSource = escape (this.attr ("src").replace (/.*?([^\/]+?)$/gi, "$1")).toLowerCase ();
			itemCompare = newSet.linkSource [itemIndex].replace (/.*?([^\/]+?)$/gi, "$1").toLowerCase ();
			if (itemSource.indexOf (itemCompare) != -1) {
				newSet.linkIndex = itemIndex;
			}
		}
		newSet.slideLeft.attr ("title", newSet.captionPrevious);
		newSet.slideRight.attr ("title", newSet.captionNext);
		newSet.slideShow.attr ("title", newSet.captionShow);
		newSet.slideClose.attr ("title", newSet.captionClose);
		newSet.slideMask	.css ("filter", "alpha(opacity=" + newSet.viewOpacity + ")")
							.css ("opacity", newSet.viewOpacity / 100)
							.css ("-moz-opacity", newSet.viewOpacity / 100)
							.css ("-khtml-opacity", newSet.viewOpacity / 100);					
		if ($.browser.msie && (parseInt ($.browser.version) < 7)) {
			$ (".slideContent").css ("position", "absolute");
		}
		if (typeof (callName) == "function") {
			callName (newSet);
		}
		return this;
	};

	/**
	 *	Click handler for selected item
	 *	@return	boolean - prevent event propagation
	 */	
	$.fn.slidebox_multi.loader = function (itemData, eventData) {
    	  		  
		$ ("object").css ("display", "none");
		if ($.browser.msie && (parseInt ($.browser.version) < 7)) {
			$ ("select, input, textarea, iframe").css ("visibility", "hidden");
		}
		newSet.slideMask.css ("height", screen.height + document.body.scrollHeight);
		if (itemData) {
			fadeSlide (itemData);
		}
		newSet.slideClose.unbind ().bind ("click", function (eventData) {
			eventClose (eventData);
			closeSlide ();
		});
		newSet.slideLeft.unbind ().bind ("click", function (eventData) {
			eventClose (eventData);
			showLeft ();
		});
		newSet.slideRight.unbind ().bind ("click", function (eventData) {
			eventClose (eventData);
			showRight ();
		});
		newSet.slideShow.unbind ().bind ("click", function (eventData) {
			showSlide (eventData);
			eventData.preventDefault ();
			return false;
		});
		$ ("html, body").css ("overflow", "auto");
		posSlide ();
		$ ("body").unbind ().bind ("keydown", function (eventData) {
			switch (eventData.keyCode) {
				case 27 : 	eventClose (eventData);
							closeSlide ();
							break;
				case 37 : 	eventClose (eventData);
							showLeft ();
							break;
				case 39 : 	eventClose (eventData);
							showRight ();
							break;
				case 80 : 	showSlide (eventData);
							break;
			}
		});
		return false;
	};

	/**
	 *	Load image with custom effect
	 *	@return	boolean - prevent event propagation
	 */	
	function fadeSlide () {
		newSet.viewChange = false;
		if (newSet.linkSource [ newSet.linkIndex ]) {
			newSet.slideContent.addClass ("slideLoad");
			var VoImage = $ (new Image ()),
				VnVersion = Math.random (),
				itemSource = newSet.linkSource [ newSet.linkIndex ].replace (/([^\?]+).*$/gi, "$1") + "?size=" + newSet.linkSize + "&width=" + newSet.linkWidth;

    	VoImage.attr ("src", itemSource + "?" + VnVersion)
				   //.attr ("alt", newSet.linkCaption [ newSet.linkIndex ])
				   .attr ("width", newSet.linkWidth)
				   .attr ("title", newSet.linkCaption [ newSet.linkIndex ]);
			if (newSet.slideBody.css ("display") == "none") {
				newSet.slideContainer.hide ();
				newSet.slideBody.fadeIn ();
			}
			newSet.slideContainer.fadeOut (500, function () {
				newSet.slideView.empty ().append (VoImage);
				newSet.slideText.text (newSet.linkCaption [ newSet.linkIndex ]);
			});
			VoImage.load (function () {
				newSet.slideContainer.fadeIn (500, function () {
					newSet.slideContent.removeClass ("slideLoad");
					var sleepTime = setTimeout (function () {
						clearTimeout (sleepTime);
						newSet.viewChange = true;
					}, 500);
				});
			});
		}
		return false;
	}

	/**
	 *	Start slide show
	 *	@return	void
	 */
	function showSlide (eventData) {
		if (newSet.viewTimer == 0) {
			newSet.viewTimer = setInterval (function () {
				if (newSet.viewChange) {
					showRight ();
				}
			}, newSet.viewSpeed);
		} else {
			eventClose (eventData);
		}
	}
	
	/**
	 *	Close any event
	 *	@return	boolean - prevent event propagation
	 */	
	function eventClose (eventData) {
		clearInterval (newSet.viewTimer);
		newSet.viewTimer = 0;
		eventData.preventDefault ();
		eventData.stopPropagation ();
		return false;
	}
	
	/**
	 *	View next image
	 *	@return	boolean - prevent event propagation
	 */	
	function showLeft () { 
		if (newSet.linkIndex > 0) {
			newSet.linkIndex--;
		} else {
			newSet.linkIndex = newSet.linkSource.length - 1;
		}
		fadeSlide (newSet.linkData.get (0));
		return false;
	}

	/**
	 *	View previous image
	 *	@return	boolean - prevent event propagation
	 */	
	function showRight () {
		if (newSet.linkIndex < newSet.linkSource.length - 1) {
			newSet.linkIndex++;
		} else {
			newSet.linkIndex = 0;
		}
		
		fadeSlide (newSet.linkData.get (0));
		return false;
	}

	/**
	 *	Close slider
	 *	@return	boolean - prevent event propagation
	 */	
	function closeSlide () {   
		$ ("object").css ("display", "block");
		if ($.browser.msie && (parseInt ($.browser.version) < 7)) {
			$ ("select, input, textarea, iframe").css ("visibility", "visible");
		}
		newSet.slideBody.fadeOut ();
		return false;
	};

	function posSlide () { 
        var arrPageSizes = ___getPageSize(),
			arrPageScroll = ___getPageScroll();
        newSet.slideContent.css ({
            top : arrPageScroll [1] + 10 + "px",
            left : arrPageScroll [0]
		});
	}
	
	/**
	* getPageSize() by quirksmode.com
	*
	* @return Array Return an array with page width, height and window width, height
	*/
	function ___getPageSize() { 
            var xScroll, yScroll;
            if (window.innerHeight && window.scrollMaxY) {
                xScroll = window.innerWidth + window.scrollMaxX;
                yScroll = window.innerHeight + window.scrollMaxY;
            } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
                xScroll = document.body.scrollWidth;
                yScroll = document.body.scrollHeight;
            } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
                xScroll = document.body.offsetWidth;
                yScroll = document.body.offsetHeight;
            }
            var windowWidth, windowHeight;
            if (self.innerHeight) {	// all except Explorer
                if (document.documentElement.clientWidth) {
                    windowWidth = document.documentElement.clientWidth;
                } else {
                    windowWidth = self.innerWidth;
                }
                windowHeight = self.innerHeight;
            } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
                windowWidth = document.documentElement.clientWidth;
                windowHeight = document.documentElement.clientHeight;
            } else if (document.body) { // other Explorers
                windowWidth = document.body.clientWidth;
                windowHeight = document.body.clientHeight;
            }
            // for small pages with total height less then height of the viewport
            if (yScroll < windowHeight) {
                pageHeight = windowHeight;
            } else {
                pageHeight = yScroll;
            }
            // for small pages with total width less then width of the viewport
            if (xScroll < windowWidth) {
                pageWidth = xScroll;
            } else {
                pageWidth = windowWidth;
            }
            arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
            return arrayPageSize;
    };
    
	/**
    * getPageScroll() - quirksmode.com
    *
    * @return Array Return an array with x,y page scroll values.
    */
    function ___getPageScroll() {  
            var xScroll, yScroll;
            if (self.pageYOffset) {
                yScroll = self.pageYOffset;
                xScroll = self.pageXOffset;
            } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
                yScroll = document.documentElement.scrollTop;
                xScroll = document.documentElement.scrollLeft;
            } else if (document.body) {// all other Explorers
                yScroll = document.body.scrollTop;
                xScroll = document.body.scrollLeft;
            }
            arrayPageScroll = new Array(xScroll, yScroll);
            return arrayPageScroll;
	};
	
}) (jQuery);
