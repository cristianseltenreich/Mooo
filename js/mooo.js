function main() {

  $(".navbar-brand").addClass("animated jello");
	$(".navbar-brand").mouseover(function(){
    $(this).toggleClass("animated jello");
});

	};


$(document).ready(main);
