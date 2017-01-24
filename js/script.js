$(document).ready(function(e) {

  
    
	
  
  
  $(".submenu").prev("a").addClass("drop");
  $("nav a.drop").click(function(){ 
   if($(this).next().is(":visible")){
   $(".submenu").next().slideUp();
   $(this).next().slideUp();
   
   $(this).removeClass("active");
   
      }
   else{
	  $("nav a.drop").removeClass("active"); 
    $(".submenu").slideUp();
	 $(this).next().slideDown(); 
	   $(this).addClass("active");
	   }
	  
	});
	
	
	// level 3
if ((screen.width<=1100))  { 
$(".submenu li a").click(function(){	   
if ($(this).next(".second_lavel").is(':visible')) 

{
$(this).next(".second_lavel").slideUp();
$(this).removeClass("active");	

} 

else{
$(".second_lavel").slideUp();
$(".submenu li a").removeClass("active");
$(this).next(".second_lavel").slideDown();
$(this).addClass("active");	 
		
}

}

)};



	
  
     
$('.bannerslide').bxSlider({
        	      auto:false,
			      speed: 500,
			      pager:true
			      });		
			
			
 
	
		 
		  $(".top_click").click(function(){
		   if($(this).next().is(":visible"))
		   {
			  $(this).removeClass("active"); 
			  $(this).next().slideUp();
			   
			   }   
			   
		  else{
	      $(".top_click").removeClass("active"); 
          $(".click_down").slideUp();
	      $(this).next().slideDown(); 
	      $(this).addClass("active");
	   }
		  
		  });
		  
		 
		  
		  
		  	
 $(".accordiaon .contents").slideUp();		
 $(".accordiaon li .acc_title").click(function(){
	 
  if($(this).next().is(":visible"))
  {
	
     $(this).next().slideUp();	 
	 $(this).removeClass("active"); 
	  
  }
  
  else{
	  
	  $(".accordiaon .contents").slideUp();
	  $(".accordiaon .contents").removeClass("active"); 
	  $(this).next().slideDown();
	  $(this).addClass("active");
	  
	  }
 	 
   });
			
		  
	   	
	  
	  $(".left_menu_tabs li a").click(function(){
		 
		  
	   $(".right_content .tabs").addClass("hides");
	   var rel = $(this).attr("rel");	  
	   $("#" + rel).removeClass("hides");
		
		$(".left_menu_tabs li a").removeClass("active");
		$(this).addClass("active");
		  
		  
	   });
	   
	   
	   $(".leader_ship li a").click(function(){
		 
		  
	   $(".doctor_details .doc").addClass("hides1");
	   var rel = $(this).attr("rel");	  
	   $("#" + rel).removeClass("hides1");
		
		$(".leader_ship li a").removeClass("active");
		$(this).addClass("active");
		  
		  
	   });
	   
	   	
		
	   
	   
	   
   var owl1 = $(".location_slider");
  owl1.owlCarousel({

      items : 1, //10 items above 1000px browser width
      itemsDesktop : [1100,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [800,1], //2 items between 600 and 0
      itemsMobile : [599,1],// itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next1").click(function(){
    owl1.trigger('owl.next');
  })
  $(".prev1").click(function(){
    owl1.trigger('owl.prev');
  });
  
  
     var owl2 = $(".reco_slider");
     owl2.owlCarousel({

      items : 2, //10 items above 1000px browser width
      itemsDesktop : [1100,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [800,1], //2 items between 600 and 0
      itemsMobile : [599,1],// itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next2").click(function(){
    owl2.trigger('owl.next');
  })
  $(".prev2").click(function(){
    owl2.trigger('owl.prev');
  });
  
  
  
     var owl3 = $(".programmes");
     owl3.owlCarousel({

      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1100,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [800,2], //2 items between 600 and 0
      itemsMobile : [599,1],// itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next3").click(function(){
    owl3.trigger('owl.next');
  })
  $(".prev3").click(function(){
    owl3.trigger('owl.prev');
  });
	  
	

});

//$(window).load(function(){
//				$(".conctact_scroll").mCustomScrollbar();
//				$(".inner_scroll").mCustomScrollbar();
//				$(".deatils_scroll").mCustomScrollbar();
//				$(".programme_scroll").mCustomScrollbar();
//			});
		

jQuery("#ver").html(msBeautify.version.msDropdown);
jQuery(".sing_searc_box select").msDropdown({roundedBorder:false});


	
		jQuery('.fancybox').fancybox();

	 jQuery(".form_box_poup").fancybox({
    fitToView : true,
    wrapCSS : 'popup_wrapp' // add a class selector to the fancybox wrap
  });	 