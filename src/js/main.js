$( document ).ready(function() {
	// alert("js working");
  //  video background
	var vid = document.getElementById('video');

	$('#myBtn').click(function() {
		console.log(vid.paused); // true
		if (vid.paused == false) {
			$(vid).get(0).pause();
			$('#myBtn').html("Play");
		} else {
			$(vid).get(0).play();
			$('#myBtn').html("Pause");
		}
  });

  // carousel start
  $('.carousel').carousel();

  //-- Single product page 
	//-- Click on detail
	$("ul.menu-items > li").on("click",function(){
	  $("ul.menu-items > li").removeClass("active");
	  $(this).addClass("active");
	})

	$(".attr,.attr2").on("click",function(){
	  var clase = $(this).attr("class");
	  $("." + clase).removeClass("active");
	  $(this).addClass("active");
	})

	//-- Click on QUANTITY
	$(".btn-minus").on("click",function(){
	  var now = $(".section > div > input").val();
	  if ($.isNumeric(now)){
	    if (parseInt(now) -1 > 0){ now--;}
	    $(".section > div > input").val(now);
	  }else{
	    $(".section > div > input").val("1");
	  }
	})            
	$(".btn-plus").on("click",function(){
	  var now = $(".section > div > input").val();
	  if ($.isNumeric(now)){
	    $(".section > div > input").val(parseInt(now)+1);
	  }else{
	    $(".section > div > input").val("1");
	  }
	})       

	// --------------------------------------
	// modal
	$('#exampleModalCenter').css({"z-index": "-1"});	
	$("#buy-btn").on("click", function() {
		// alert("ok");
		$('#exampleModalCenter').modal('show');	
		$('#exampleModalCenter').css({"z-index": "2000"});
	}) 
	


});

