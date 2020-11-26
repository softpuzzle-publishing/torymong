var Common = {
	init : function(){
		Common.event();
		Common.scrolling();
		Common.top();
		window.addEventListener('mousewheel', Common.scrolling);
		window.addEventListener('touchmove', Common.scrolling);

		$(window).scroll(function(){
			Common.scrolling();
		});
	},
	scrolling : function(e){
		var scrollTop = $(window).scrollTop();

		if(scrollTop > 0){
			$('html').addClass('is-scrolled');
		}else{
			$('html').removeClass('is-scrolled');
        }

        if($(window).scrollTop() + $(window).height() > $(document).height() - $('.main-footer').height()) {
            $('.btn-top').addClass('moveup');
        }else{
            $('.btn-top').removeClass('moveup');
        }
	},
	top : function(){
		$('.btn-top').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 300);
        });
	},
	event : function(){
		//https://www.daterangepicker.com/
		//single datepicker
		$('[data-event="singleDatepicker"]').daterangepicker({
			singleDatePicker: true,
			locale: {
				format: 'YYYY-MM-DD'
			}
		});
		//range datepicker
		$('[data-event="rangeDatepicker"]').daterangepicker({
			locale: {
				format: 'YYYY-MM-DD'
			}
		});

		//length check
		$('textarea, input').on("input", function () {
			if ($(this).attr('maxlength') !== "") {
				var maxlength = $(this).attr("maxlength");
				var content = $(this).val();

				$($(this).attr('data-byte-target')).html(content.length);

				if (content.length > maxlength) {
					$(this).val(content.substring(0, maxlength));
					$($(this).attr('data-byte-target')).html();
				}
			}
		});
	}
};

Common.init();