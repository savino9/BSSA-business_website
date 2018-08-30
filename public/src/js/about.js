$(document).ready(function(){
    $("#flip").click(function(e){
		e.preventDefault();
        $("#panel").slideToggle("slow");
    });
});