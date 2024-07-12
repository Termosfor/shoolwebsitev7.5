/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)
;/**
 * When I noticed the growing popularity of JS-Slide and JS-Fade effects I have
 * decide to develop a plugin for jQuery. This plugin will help you to add thise
 * effects to the site in more simple way.
 * Note: If the mousewheel plugin has been included on the page then the slider will
 * also respond to the mouse wheel.
 *
 * @name jQuery ulSlide plugin
 * @license GPL
 * @version 1.4.9
 * @date April 1th, 2013
 * @category jQuery plugin
 * @author Kotelnitskiy Evgeniy (evgennniy@gmail.com)
 * @copyright (c) 2012 Kotelnitskiy Evgeniy (http://4coder.info/en/)
 * @example Visit http://4coder.info/en/code/jquery-plugins/ulslide/ for more informations about this jQuery plugin
 */
(function($) {
    ulslide_last_id = 0;

    $.fn.ulslide = function(settings) {
        var thisObj = this;
        if (thisObj.length == 0) return false;
        var thisEl = thisObj[0];
        if (! $(thisEl).attr('id')) {
            ulslide_last_id ++;
            $(thisEl).attr('id', 'ulslide-' + ulslide_last_id);
        }
        var id = $(thisEl).attr('id');

        // Settings
        settings = $.extend({
            effect: {
                type: 'slide', // slide, fade or carousel (use showCount for carousel)
                axis: 'x',     // x, y
                distance: 20   // Distance between frames
            },
            duration: 600,     // Changing duration
            direction: 'f',    // f, b
            autoslide: false,  // Autoscrolling interval (ms)
            current: 0,
			
            width: thisObj.width(),
            height: 'auto',    // pixels or 'auto'
			
            statusbar: true,
			loadTimeout: 6000, // images loading timeout
            lazyload: false,   // testing
            ajax: false,
			
            mousewheel: false, // Scroll on "mousewheel"
			
            // Selectors:
            pager: false,
            nextButton: false,
            prevButton: false,
            printCurrentTo: false,
			
            //framesOnPage: 2, 
            onAnimateStart: function(settings, thisEl){},
            onAnimate: function(settings, thisEl){},
            onAjaxStart: function(settings, thisEl){},
            onAjaxStop: function(settings, thisEl){},
			
			debug: false
			
        },settings);

        // Deprecated Options
        if (typeof settings['affect']        != 'undefined') settings['effect']['type']     = settings['affect'];
        if (typeof settings['axis']          != 'undefined') settings['effect']['axis']     = settings['axis'];
        if (typeof settings['padding']       != 'undefined') settings['effect']['distance'] = settings['padding'];
        if (typeof settings['navigator']     != 'undefined') settings['pager']              = settings['navigator'];
        if (typeof settings['print_current'] != 'undefined') settings['printCurrentTo']     = settings['print_current'];
        if (typeof settings['bnext']         != 'undefined') settings['nextButton']         = settings['bnext'];
        if (typeof settings['bprev']         != 'undefined') settings['prevButton']         = settings['bprev'];
        // end Deprecated Options
		
        if (typeof settings['effect']['distance'] == 'undefined') settings['effect']['distance'] = 20;
        settings['fwidth'] = settings['width'] + settings['effect']['distance'];
        settings['fheight'] = settings['height'] + settings['effect']['distance'];
        settings['prev'] = settings['current'];
        settings['count'] = $('> *', thisObj).length;

        if (settings['lazyload']) {
            $('img', thisObj).each(function(i){
                var img = $(this);
                img.attr('rel', img.attr('src'));
                if (i > 0) {
                    img.removeAttr("src");
                }
            });
            /*settings['_lazyloaded'][0] = true;*/
        }

		
		function carouselGetFramePos(i, current){
			if (i >= settings['effect']['showCount'] - current) {
				var l = settings['count'] - settings['effect']['showCount'];
				var ci = (i + current - settings['effect']['showCount']) - l;
				return ci;
			}
			else return i + current;
		}
		
		// CSS for elements		
        $('> *', thisObj).each(function(i){
            var liel = $(this);
            liel.addClass('slide-node slide-node-'+i);
            liel.css("position", 'absolute');
            liel.css("margin", '0');
            liel.css("distance", '0');
            liel.css("width", settings['width']);
            liel.css("overflow", "hidden");
			
			if (settings['effect']['type'] == 'carousel') {
                var ci = carouselGetFramePos(i, settings['current']);
                if (settings['effect']['axis'] == 'y') {
                    liel.css("top", (ci * settings['fheight']));
                    liel.css("left", '0');
                }
                else {
                    liel.css("top", '0');
                    liel.css("left", (ci * settings['fwidth']));
                }
			}
			else {
				if (i == settings['current']){
					liel.css("top", '0');
					liel.css("left", '0');
				}
				else{
					liel.css("top", '0');
					liel.css("left", -(settings['width'] + settings['effect']['distance']));
				}
			}
        });

		// CSS for container
        thisObj.css("list-style", "none");
        thisObj.css("distance", "0");
        thisObj.css("position", "relative"); 
        thisObj.css("padding", 0);
        if (settings['effect']['type'] != 'rotate') 
			thisObj.css("overflow", "hidden");

		if (settings['effect']['type'] == 'carousel') {
            if (settings['effect']['axis'] == 'y') {
                thisObj.css("width", settings['width']);
                thisObj.css("height", settings['fheight'] * settings['effect']['showCount'] - settings['effect']['distance']);
            }
            else {
                thisObj.css("width", settings['fwidth'] * settings['effect']['showCount'] - settings['effect']['distance']);
                thisObj.css("height", settings['height']);
            }
		}
		else {
			thisObj.css("width", settings['width']);
            
            if (settings['height'] == 'auto'){
                thisObj.css("height", $('> *:eq('+settings['current']+')', thisObj).height());
            }
            else thisObj.css("height", settings['height']);
		} 
        settings['prevHeight'] = settings['height'];

        thisEl.getSlide = function getSlide(num) {
            return $('> *:eq('+num+')', thisEl);
        };
		
        function next() {
            var c = thisEl.uslCurrent();
            settings['direction'] = 'f';
            if (c + 1 < settings['count']) {
                thisEl.uslRefresh(c + 1);
            } else {
				
                thisEl.uslRefresh(0);
            }          
        }
		
        function prev() {
            var c = thisEl.uslCurrent();
            settings['direction'] = 'b';
            if (c > 0) {
                thisEl.uslRefresh(c - 1);
            } else {
                thisEl.uslRefresh(settings['count'] - 1);
            }
        }

        if (settings['height'] == 'auto')
            thisEl.currentHeight = thisEl.getSlide(settings['current']).height();
        else thisEl.currentHeight = settings['height'];

        thisEl.uslCurrent = function(new_value){
            if (new_value == undefined){
                return settings['current'];
            }
            else {
                var old = thisEl.uslCurrent();
                var c = new_value;

                settings['current'] = new_value;
                return new_value;
            }
        };

        thisEl.autoslideNext = function(){
			if (settings['direction'] == 'f') next();
            else prev();
        };

        thisEl.initAutoslide = function(){
            if (settings['TimeoutID']) clearTimeout(settings['TimeoutID']);
            settings['TimeoutID'] = setTimeout("jQuery('#"+$(thisEl).attr('id')+"')[0].autoslideNext()", settings['autoslide']);
			
			if (settings['debug'])
				console.log('initAutoslide: ' + settings['TimeoutID']);
        };

        thisEl.clearAutoslide = function(){
            if (settings['TimeoutID']) {
                clearTimeout(settings['TimeoutID']);
            }
        };

        thisEl.uslRefresh = function(slide_index, fast, callback){
			if (settings['debug'])
				console.log('uslRefresh()');
				
            if (! thisEl.ready) {
                if (settings['debug'])
					console.log('uslRefresh / ' + settings['id'] + ': ! thisEl.ready');
					
                setTimeout("jQuery('#"+$(thisEl).attr('id')+"')[0].uslRefresh()", 400);
                return;
            }
			if (settings['LoadTimeoutID']) clearTimeout(settings['LoadTimeoutID']);
            thisEl.ready = false;
			
            if (typeof(slide_index) != 'undefined') {
                thisEl.uslCurrent(slide_index);
            }

            thisEl.clearAutoslide();
            var prev = thisEl.getSlide(settings['prev']);
            var current = thisEl.getSlide(settings['current']);
            current.css('display', 'block');

            function doRefresh() {
				if (settings['debug'])
					console.log('doRefresh()');			

                settings['onAnimateStart'](settings, thisEl); // notification
                //console.log(settings['id'] + ': doRefresh');

                if (settings['height'] == 'auto') {
                    thisEl.currentHeight = thisEl.getSlide(settings['current']).height();
                    settings['prevHeight'] = thisEl.getSlide(settings['prev']).height();
                }

                function finish_animate() {
					if (settings['debug'])
						console.log('finish_animate(): start');
					
                    if (settings['printCurrentTo']) {
                        $(settings['printCurrentTo']).html(settings['current'] + 1);
                    }

                    if ((settings['prev'] != settings['current']) && (settings['effect']['type'] != 'carousel') ) {
                        prev.css('display', 'none');
                    }

                    if (settings['height'] == 'auto') {
                        thisObj.animate({
                            'height': thisEl.currentHeight
                        }, 250/*, function() { alert(settings['id'] + ': finish_animate()' + thisEl.currentHeight); }*/);
                    }
                    
                    //settings['prev'] = settings['current'];
					if (settings['debug'])
						console.log('finish_animate(): autoslide = ' + settings['autoslide']);
						
                    if (settings['autoslide']) thisEl.initAutoslide();
                    settings['onAnimate'](settings, thisEl); // notification
                    settings['prev'] = settings['current'];
                    thisEl.uslRefreshClasses();
                    thisEl.ready = true;

                    if (typeof callback != 'undefined') callback();
                }

                if (settings['prev'] == settings['current']) {
                    finish_animate();
                    return;
                }
								
                if (settings['effect']['type'] == 'slide') {
                    if (settings['effect']['axis'] == 'x'){
						if (settings['prev'] != settings['current']){
							if (settings['direction'] == 'f'){
								prev.animate({
									'left': -(settings['width'] + settings['effect']['distance'])
								}, settings['duration'], settings['easing']);
								current.css('left', settings['width'] + settings['effect']['distance']);
							}
							else{
								prev.animate({
									'left': settings['width'] + settings['effect']['distance']
								}, settings['duration'], settings['easing']);
								current.css('left', -(settings['width'] + settings['effect']['distance']));
							}
						}
						current.animate({
							'left': 0
						}, settings['duration'], settings['easing'], function(){
							finish_animate();
						});
                    }
                    else {
                        if (settings['prev'] != settings['current']){
                            if (settings['direction'] == 'f'){
                                prev.animate({
                                    'top': thisEl.currentHeight + settings['effect']['distance']
                                }, settings['duration'], settings['easing'], function(){
                                    prev.css('left', -(settings['width'] + settings['effect']['distance']));
                                });
                                current.css('top', -(settings['prevHeight'] + settings['effect']['distance']));
                            }
                            else{
                                prev.animate({
                                    'top': -(thisEl.currentHeight + settings['effect']['distance'])
                                }, settings['duration'], settings['easing'], function(){
                                    prev.css('left', -(settings['width'] + settings['effect']['distance']));
                                });
                                current.css('top', settings['prevHeight'] + settings['effect']['distance']);
                            }
                        }
                        current.css('left', 0);
                        current.animate({
                            'top': 0
                        }, settings['duration'], settings['easing'], function(){
                            finish_animate();
                        });
                    }
                }
                else if (settings['effect']['type'] == 'fade') {
                    current.css('display', 'none');
                    //current.css('z-index', 2);
                    current.css('left', 0);
                    current.css('top', 0);
                    //prev.css('z-index', 1);
                    var duration = settings['duration'];
                    if (typeof fast != 'undefined') duration = 0;
                    
                    prev.fadeOut(duration, function(){
                        prev.css('display', 'none');
                        current.fadeIn(duration, function(){
                            finish_animate();
                        });
                    });
                }
                else if (settings['effect']['type'] == 'rotate') {
					var rotate_pref = settings['direction'] == 'f' ? '-' : '';
					current.animate({'rotate': rotate_pref + '90deg', 'scale': '0.01', 'opacity': 0.3, 'z-index': 2, 'left': 0, 'top': 0}, 0);
                    prev.css('z-index', 1);
                    
					prev.animate({'opacity': 0}, settings['duration'], settings['easing'], function(){ });
					current.animate({'rotate': rotate_pref + '360deg', 'scale': '1', 'opacity': 1}, settings['duration'], settings['easing'], function(){
						finish_animate();
					});
                }
                else if (settings['effect']['type'] == 'scale') {
					if (settings['direction'] == 'f') {
						var rotate_pref =  '-';
						var rotate_pref_i =  '';
					}
					else {
						var rotate_pref = '';
						var rotate_pref_i = '-';
					}

					current.animate({'scale': '0.05', 'opacity': 0.3, 'z-index': 2, 'left': 0, 'top': 0, 'marginLeft': rotate_pref_i + (settings['fwidth']/2)+'px'}, 0);					
                    prev.css('z-index', 1);
                    
					prev.animate({'scale': '0.01', 'opacity': 0, 'marginLeft': rotate_pref + (settings['fwidth']/2)+'px'}, settings['duration'], settings['easing'], function(){ });

					current.animate({'scale': '1', 'opacity': 1, 'marginLeft': '0px'}, settings['duration'], settings['easing'], function(){
						finish_animate();
					});
                }
				else if (settings['effect']['type'] == 'carousel') {
					$('> *', thisObj).each(function(i){
						liel = $(this);
						var ci = carouselGetFramePos(i, settings['current']);
						if (settings['direction'] == 'f')
							 var pi = carouselGetFramePos(i, settings['current'] - 1);
						else var pi = carouselGetFramePos(i, settings['current'] + 1);
 
                        //*****************************************************
                        
                        if (settings['effect']['axis'] == 'y') {                        
                            if ((settings['direction'] == 'f') && (ci == 0)) {
                                liel.css('top', (-1 * settings['fheight']));
                                liel.animate({'top': ci * settings['fheight']}, settings['duration'], settings['easing']);
                            }
                            else if ((settings['direction'] == 'f') && (pi + 1 == settings['effect']['showCount'])) {
                                liel.animate({'top': (settings['effect']['showCount']) * settings['fheight']}, settings['duration'], settings['easing']);
                            }
                            else if ((settings['direction'] == 'b') && (pi == 0)) {
                                liel.animate({'top': -1 * settings['fheight']}, settings['duration'], settings['easing']);
                            }
                            else if ((settings['direction'] == 'b') && (ci + 1 == settings['effect']['showCount'])) {
                                liel.css('top', (ci + 1) * settings['fheight']);
                                liel.animate({'top': ci * settings['fheight']}, settings['duration'], settings['easing']);
                            }
                            else {
                                if ((ci < settings['effect']['showCount']) && (ci >= 0)) {
                                    liel.animate({'top': ci * settings['fheight']}, settings['duration'], settings['easing']);
                                }
                                else {
                                    liel.css('top', (ci * settings['fheight']));
                                }
                            }
                        }
                        else {
                            if ((settings['direction'] == 'f') && (ci == 0)) {
                                liel.css('left', (-1 * settings['fwidth']));
                                liel.animate({'left': ci * settings['fwidth']}, settings['duration'], settings['easing']);
                            }
                            else if ((settings['direction'] == 'f') && (pi + 1 == settings['effect']['showCount'])) {
                                liel.animate({'left': (settings['effect']['showCount']) * settings['fwidth']}, settings['duration'], settings['easing']);
                            }
                            else if ((settings['direction'] == 'b') && (pi == 0)) {
                                liel.animate({'left': -1 * settings['fwidth']}, settings['duration'], settings['easing']);
                            }
                            else if ((settings['direction'] == 'b') && (ci + 1 == settings['effect']['showCount'])) {
                                liel.css('left', (ci + 1) * settings['fwidth']);
                                liel.animate({'left': ci * settings['fwidth']}, settings['duration'], settings['easing']);
                            }
                            else {
                                if ((ci < settings['effect']['showCount']) && (ci >= 0)) {
                                    liel.animate({'left': ci * settings['fwidth']}, settings['duration'], settings['easing']);
                                }
                                else {
                                    liel.css('left', (ci * settings['fwidth']));
                                }
                            }
                        }

						setTimeout(function(){
								finish_animate();
						}, settings['duration'] + 100);					
					});
				}
            }
			
            if (settings['ajax']) {
                settings['onAjaxStart'](settings, thisEl); // notification
                var statusbar_loaded = thisEl.getSlide(settings['current'])[0].usl_ajax_loaded;

                thisEl.uslAjaxLoadSlide(settings['current'], function() {
					settings['onAjaxStop'](settings, thisEl); // notification
					doRefresh();
                })
            }
            else {
                if (settings['lazyload']) {
                    var $imgToLoad = $('img', current[0]);

                    $imgToLoad.each(function(i){
                        var img = $(this);
                        img.attr('src', img.attr('rel'));
                    });

                    settings['z_img_count'] = $imgToLoad.length;
                    settings['z_img_loaded'] = 0;
                    $imgToLoad.each(function(){
                        if (this.complete) {
                            settings['z_img_loaded'] ++;
                        }
                        else {
                            $(this).load(function(){
                                settings['z_img_loaded'] ++;
                                if (settings['z_img_loaded'] == settings['z_img_count']){
                                    doRefresh();
                                }
                            });
                        }
                    });

                    if (settings['z_img_loaded'] == settings['z_img_count']){
                        doRefresh();
                    }
                    return;
                }
                
                doRefresh();
            }
        };
		
        thisEl.uslAjaxLoadSlide = function(slide_num, callback) {
            var current = thisEl.getSlide(slide_num);

            if (current[0].usl_ajax_loaded) {
                callback();
            }
            else {
                var url = $(settings['pager']).eq(slide_num).attr('href');
                current[0].usl_ajax_loaded = true;
                current.load(url + '?ajax=1', false, callback);
            }
        };

        thisEl.uslRefreshClasses = function(){
            if (settings['count'] > 1){
                if (settings['nextButton']) $(settings['nextButton']).addClass('active-btn');
                if (settings['prevButton']) $(settings['prevButton']).addClass('active-btn');
            }
            if (settings['pager']){
                $(settings['pager']).removeClass('usl-current');
                $(settings['pager'] + '.usl-pager-'+thisEl.uslCurrent()).addClass('usl-current');
                $(settings['pager']).parent().removeClass('usl-current-parent');
                $(settings['pager'] + '.usl-pager-'+thisEl.uslCurrent()).parent().addClass('usl-current-parent');
            }
        };

        if (settings['nextButton']){
            $(settings['nextButton']).click(function(){
                next();
                return false;
            });
        }
		
        if (settings['prevButton']){
            $(settings['prevButton']).click(function(){
                prev();
                return false;
            });
        }

        function setNavigator(s_navigator) {
            var pager = $(s_navigator);
            pager.each(function(index){
                this.usl_navigator_index = index;
                $(this).addClass('usl-pager-' + index);
            });
					
            pager.click(function(){
                var c = this.usl_navigator_index;
                if ((c < settings['count']) && (c != thisEl.uslCurrent())) {
                    //thisEl.uslCurrent(c);
                    if (c > thisEl.uslCurrent()) settings['direction'] = 'f';
                    else settings['direction'] = 'b';
                    thisEl.uslRefresh(c);
                }
                return false;
            });
        }
		
        if (settings['pager']){
            setNavigator(settings['pager']);
        }
        if (settings['navigator2']){
            setNavigator(settings['navigator2']);
        }
        
        function loadingStatus(loading) {
            if (loading) {
                thisObj.addClass('usl-loading');
            }
            else {
                thisObj.removeClass('usl-loading');
            }
        }
		
        thisEl.uslStatusbar = function() {		
		
			function isImageLoaded(img) {
				// �� ����� ������� load IE � ������ �������� ���������
				// ���������� ��������� �������� ����� ������� complete.
				// ���������� ���������� Gecko-based ��������.
				if (!img.complete) {
					return false;
				}
				// ��� �� �����, � ��� ���� ��� ����� �������� ��������: naturalWidth � naturalHeight.
				// ��� ���� �������� ������ �����������. ���� ��������� ��� �� �����������,
				// �� ��� ������ ���� ����� ����.
				if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
					return false;
				}
				// �������� ���������.
				return true;
			}
		
            if (settings['lazyload']) {
                var $imgToLoad = $('>li:eq('+settings['current']+') img', thisEl);
            }
            else {
                var $imgToLoad = $('img', thisEl);
            }
            
            settings['img_count'] = $imgToLoad.length;
            if (settings['img_count']) {
                loadingStatus(true);
            }

            settings['img_loaded'] = 0;
            $imgToLoad.each(function(){
							
                if (isImageLoaded(this)) {
                    settings['img_loaded'] ++;
					if (settings['debug'])
						console.log($(this).attr('src') + ' loaded'); 
                }
                else {
                    $(this).load(function(){
                        settings['img_loaded'] ++;
						
						if (settings['debug']) 
							console.log('Img LOAD / ' + settings['img_loaded'] + ' of ' + settings['img_count']);
						
                        if (settings['img_loaded'] == settings['img_count']){
                            loadingStatus(false);
                            thisEl.ready = true;
                            thisEl.uslRefresh();
                        }
                    });
					if (settings['debug'])
						console.log($(this).attr('src') + ' NOT loaded'); 
                }
            });
			
			if (settings['debug'])
				console.log('uslStatusbar() / ' + settings['img_loaded'] + ' of ' + settings['img_count']);

            if (settings['img_loaded'] == settings['img_count']){
                loadingStatus(false);
                thisEl.ready = true;
                thisEl.uslRefresh();
            }
			
			settings['LoadTimeoutID'] = setTimeout(function(){ 
											loadingStatus(false);
											thisEl.ready = true;											
											thisEl.uslRefresh(); 
										}, settings['loadTimeout']);
        };

        // statusbar
        if (settings['statusbar'] && !settings['ajax']){
            thisEl.uslStatusbar();
        }

        /*
         * If the mousewheel plugin has been included on the page then
         * the slider will also respond to the mouse wheel.
         */
        if (settings['mousewheel']) {
            thisObj.bind(
                'mousewheel',
                function (event, delta) {
                    if (thisEl.ready) {
                        if (delta < 0) {
                            next();
                        }
                        else {
                            prev();
                        }
                    }
                    return false;
                });
        }
        
        if (! settings['statusbar'] || settings['ajax']) {
            thisEl.ready = true;
            thisEl.uslRefresh();
        }
    };
})(jQuery); ;