$(document).ready(function($){
	let text = ['dsafsdfds','dsfsdfsdf','qwryqwiuruw','ytopuitoyiu','xcjkvxcjkbv','xcvxcvhnbxjck'];
	let des_first = ['D','N','D','S','D','R','L'];
	let des_second = ['SIGN','XT','PTH','ARCH','SIRE','D','GEND'];
	let slider_desc =[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, hic fugiat nisi ea qui? Qui cumque doloribus nulla ullam tenetur magnam accusamus ut alias minus eos, dignissimos quasi nostrum voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, hic fugiat nisi ea qui? Qui cumque doloribus nulla ullam tenetur magnam accusamus ut alias minus eos, dignissimos quasi nostrum voluptas.",
		"Minima consectetur quibusdam rem harum aut vel nostrum assumenda voluptas ea earum, hic, sapiente reiciendis facilis. Consequatur ad adipisci modi, tempora nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolore consequuntur, sunt eos soluta sit minus eaque ea amet animi id, repellendus totam, beatae saepe nostrum debitis officiis neque autem.",
		"Quae, hic fugiat nisi ea qui? Qui cumque doloribus nulla ullam tenetur magnam accusamus ut alias minus eos, dignissimos quasi nostrum voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, hic fugiat nisi ea qui? Qui cumque doloribus nulla ullam tenetur magnam accusamus ut alias minus eos, dignissimos quasi nostrum voluptas.",
		"Qui cumque doloribus nulla ullam tenetur magnam accusamus ut alias minus eos, dignissimos quasi nostrum voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, hic fugiat nisi ea qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, hic fugiat nisi ea qui? Qui cumque doloribus nulla ullam tenetur magnam accusamus ut alias minus eos, dignissimos quasi nostrum voluptas.",
		"Veniam vero similique, voluptatum eaque. Cumque dolorum est eos, quos nisi, dignissimos, ea laboriosam cum excepturi odio placeat labore possimus soluta maxime!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, hic fugiat nisi ea qui? Qui cumque doloribus nulla ullam tenetur magnam accusamus ut alias minus eos, dignissimos quasi nostrum voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, hic fugiat nisi ea qui?",
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, hic fugiat nisi ea qui? Qui cumque doloribus nulla ullam tenetur magnam accusamus ut alias minus eos, dignissimos quasi nostrum voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, hic fugiat nisi ea qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, hic fugiat nisi ea qui?"
	];
	$('.gallery_item').click(function() {
		$(".othr_sz").attr('style', $(this).attr('style'));
	});
	let slider = $('.slider').slick({
		dots: true,
		dotsClass: "dots_cast",
		vertical: true,
		verticalSwiping: true,	
		arrows: false,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		// focusOnSelect: true,
		centerMode: true,
		// centerPadding: '60px';
	  	// adaptiveHeight: true
	});
	slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  $('.dot_text').remove();
	  setTimeout(()=>{
	  	$('<div/>').text(text[nextSlide]).addClass('dot_text').appendTo('.slick-active');
	  	$('.slider_desc_field').text(slider_desc[nextSlide]);
	  }, 200);
		
	});
	
	blur_interval('.home_title_link','change_title_by_timer1','change_title_by_timer2');
	blur_interval('.blur_span','change_logo_by_timer2','change_logo_by_timer1');
	let i = 0;
	setInterval(()=>{
		$('.change1').text(des_first[i]);
		$('.change2').text(des_second[i]);
		++i;
	if(i==6){
		i=0;
	}
},500);

//плавный переход по ссылкам меню на страницы
	$("#menu").on("click","a", function (event) {
		// setTimeout(()=>{
			// $('.header_menu_item_link').removeClass('link_active');
			// $(this).addClass('link_active');
		// }, 200);
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top+1}, 1500);
    });

    $(window).scroll(function() {
    	let top = $(this).scrollTop();
    	let about = $('#about').offset().top;
    	let gallery = $('#gallery').offset().top;
    	let projects = $('#projects').offset().top;
    	let style = $('#style').offset().top;
    	if(top<=about){
    		$('.header_menu_item_link').removeClass('link_active');
    		$('.home_link').addClass('link_active');
    	} else if(top<gallery){
    		$('.header_menu_item_link').removeClass('link_active');
    		$('.about_link').addClass('link_active');
    	} else if(top < projects){
    		$('.header_menu_item_link').removeClass('link_active');
    		$('.gallery_link').addClass('link_active');
    	} else if(top < style){
    		$('.header_menu_item_link').removeClass('link_active');
    		$('.projects_link').addClass('link_active');
    	} else {
    		$('.header_menu_item_link').removeClass('link_active');
    		$('.style_link').addClass('link_active');
    	}
   });
	
});

function blur_interval(class_name, color_name1, color_name2){
	setInterval(()=>{
		$(class_name).removeClass(color_name2);
		$(class_name).addClass(color_name1);
		setTimeout(()=>{
			$(class_name).removeClass(color_name1)
			$(class_name).addClass(color_name2);
		},100);
		let rand_num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		switch(rand_num){
			case 1:
				setTimeout(()=>{
					$(class_name).removeClass(color_name2);
					$(class_name).addClass(color_name1);
				},180);
			break;
			case 2:
				setTimeout(()=>{
					$(class_name).removeClass(color_name2);
					$(class_name).addClass(color_name1);
				},250);
			break;
			case 3:
				setTimeout(()=>{
					$(class_name).removeClass(color_name2);
					$(class_name).addClass(color_name1);
				},1000);
			break;
		}
		setTimeout(()=>{
			$(class_name).removeClass(color_name1)
			$(class_name).addClass(color_name2);
		},280);
	},2000);
}

