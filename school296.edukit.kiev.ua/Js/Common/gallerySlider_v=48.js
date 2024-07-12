var gallerySlider = {};

gallerySlider.onload = function(){
    
      //look how many galleries are there on a page
      var galCount = $("div[id^=sliderArea]").length;
      //and apply a slidebox plugin for each  
      for (var i=0; i<galCount; i++)
      {
    	  var photoList = $ ("div[id^=sliderArea"+i+"] > img"), 
    	  photoLink = $ ("div[id^=sliderArea"+i+"] img"), 
    	  photoSource = [],
    	  photoCaption = [];
    	  
    	  photoList.each (function (itemIndex, itemData) {
    		  photoSource.push (itemData.src.replace (/Files/g, "files2"));
    		  photoCaption.push (itemData.title);
    	  });
    	  photoLink.slidebox_multi ({
    		  linkData : photoList,
    		  linkSource : photoSource,
    		  linkCaption : photoCaption
    	  });
      }
      //new slider (cycle) plugin)
      $('[id^=sliderArea]').css('display', 'block');
      $('[id^=sliderNav]').css('display', 'block');
      
      var autoSt = false;
      var autoStCount = 0;
      
      for (var i=0; i<galCount; i++)
      {
    	  var sliderShowNo = $('#sliderArea'+i).attr('class');
    	  if (sliderShowNo == 'hideSl')
    	  {
    		  autoSt = true;
    		  autoStCount = 1;
    	  }
    	
    	  $('#sliderArea'+i).cycle({
    		  autostop:      autoSt,
    		  autostopCount: autoStCount,
    		  fx:      'fadeZoom', 
    		  speed:    1000, 
    		  timeout:  3000,
    		  random: 1,
    		  startingSlide: $('#sliderArea'+i).attr('param'),
    		  pause: 1,
    		  before: function(){
    			  //center picture in slider div
    			  var elt = $(this);
    			  var sliderWidth = elt.parent().width(); //get slider area width
    			  var margin = Math.round((sliderWidth-elt.attr('width'))/2);
    			  elt.css('margin-left', margin+'px');
    		  } 
    	  });
      }
};
if (!$.browser.opera) { $(window).load(gallerySlider.onload); } else { $(gallerySlider.onload); }