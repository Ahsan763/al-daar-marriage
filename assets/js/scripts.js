$(document).ready(function() {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    })
    // $(".mainwrapper").scroll(function(){
    //     var scroll2 = $(".mainwrapper").scrollTop();
    //     if (scroll2 >= 1) {
    //         $(".header").addClass("sticky");
    //     } else {
    //         $(".header").removeClass("sticky");
    //     }
    // })
    $(".tablestab__btn").click(function(){
		$(".tablestab__btn.active").removeClass("active");
		$(this).addClass("active");
		var matchID2 = $(this).attr("href");
		$('.tablestab-main.active').removeClass("active");
		$(matchID2).addClass("active");
	});
    $(".profile-info__aside-togglebtn").click(function(){
        $(".profile-info__aside").toggleClass("active")
    })
    $(".pflist__tab-btn").click(function(){
        $(this).toggleClass("active")
        $(this).nextAll(".pflist__tab-btn-box").eq(0).slideToggle(300);
    });
    $(".faqbox__hdr").click(function(){
        $(this).toggleClass("active")
        $(this).nextAll(".faqbox__body").eq(0).slideToggle(300)
    })
    flatpickr(".flatpickr", {
        dateFormat: "Y-m-d",
        locale: {
            rtl: true
        }
    });
    var data = [
        { id: 0, text: 'أندورا' },
        { id: 1, text: 'الامارات العربية المتحدة' },
        { id: 2, text: 'أفغانستان' },
        { id: 3, text: 'أنتيجوا وبربودا' },
        { id: 4, text: 'أنجويلا' },
        { id: 4, text: 'ألبانيا' },
        { id: 4, text: 'أرمينيا' },
        { id: 4, text: 'أنجولا' },
        { id: 4, text: 'أنجويلا' },
        { id: 4, text: 'أنجويلا' },
    ];
    var data2 = [
        { id: 0, text: 'abudhabi' },
        { id: 1, text: '  dubai' },
        { id: 2, text: 'sharja' },
        { id: 3, text: ' raisulkhaima' },
    ];
    var data3 = [
        { id: 0, text: 'حر' },
        { id: 1, text: '  اسمر' },
    ];
    var data4 = [
        { id: 0, text: 'عزباء' },
        { id: 1, text: '  مطلقة' },
    ];
    var data5 = [
        { id: 0, text: 'غير متعلم' },
        { id: 1, text: '  إبتدائي' },
    ];
    var data6 = [
        { id: 0, text: ' سليم/ة ' },
        { id: 1, text: '  مشاكل صحية بسيطة ' },
    ];
    var data7 = [
        { id: 0, text: '  عصري/ة ' },
        { id: 1, text: ' محافظ/ة ' },
    ];
	$(".countries").select2({
  		data: data,
	})
    $(".dist").select2({
        placeholder:"يمكنك إختيار أكثر من إمارة ",
        data: data2,
    })
    $(".ethnicity").select2({
        placeholder:"يمكنك إختيار أكثر من عرق ",
        data: data3,
    })
    $(".nationality").select2({
        placeholder:"يمكنك إختيار أكثر من جنسية ",
        data: data,
    })
    $(".meritalstatus").select2({
        placeholder:" يمكنك إختيار أكثر من حالة ",
        data: data4,
    })
    $(".edu").select2({
        placeholder:" يمكنك إختيار أكثر من مستوي ",
        data: data5,
    })
    $(".wzesahi").select2({
        placeholder:" يمكنك إختيار أكثر وضع  ",
        data: data6,
    })
    $(".altaby").select2({
        placeholder:" يمكنك إختيار أكثر وضع  ",
        data: data7,
    })
    $(".showpassbtn").click(function() {
        $(this).toggleClass("active");
        var passwordField = $(this).prev("input[type=password]");
        if (passwordField.length > 0) {
          passwordField.prop("type", "text");
        } else {
          passwordField = $(this).prev("input[type=text]");
          passwordField.prop("type", "password");
        }
    });
    
    $(".aside-btn").click(function(){
        $(".aside").toggleClass("active");
        $(".aside-profile").toggleClass("active");
    })
    $("body").click(function() {
        $(".aside").removeClass("active");
        $(".aside-profile").removeClass("active");
    });
    $(".aside-btn, .aside").click(function(event) {
        event.stopPropagation();
    });
    // 
    $(".resetFilter").click(function(){
        $(this).closest(".filtersec").addClass("d-none");
    });
    $(".filtersec-btn__close").click(function(){
        $(this).parent(".filtersec-btn").addClass("d-none")
    })
    //  navlist btn start
    if($(window).width() < 1024) {
        $(".navlist__btn").click(function(event) {
            event.stopPropagation();
            $(".navlist").slideToggle(300);
        });
        $("body").click(function() {
            $(".navlist").slideUp(300);
        });
        $(".navlist__btn, .navlist").click(function(event) {
            event.stopPropagation();
        });
    }
    // navlist btn start


    // navlist btn end
    // sliders start
    // banner slider start
    var swiper = new Swiper(".banner-slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
    // banner slider end
    var swiper2 = new Swiper(".newaddedSlider", {
        slidesPerView:1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    var swiper3 = new Swiper(".certifiedSlider", {
        slidesPerView:1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    // sliders end
    var swiper4 = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    var swiper5 = new Swiper(".plandetails-slider", {
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
    });
    var swiper6 = new Swiper(".postdetails2Sec-slider", {
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
    $('.carousel').carousel({
        interval: false,
    });
    // $(".ckb2").click(function() {
    //     var inputValue = $(this).val();
    //     if (inputValue === "yes") {
    //         $(".yesnobox").addClass("d-block");
    //         $(".yesnobox").removeClass("d-none");
    //     } else {
    //         $(".yesnobox").addClass("d-none");
    //         $(".yesnobox").removeClass("d-block");
    //     }
    // });
});

