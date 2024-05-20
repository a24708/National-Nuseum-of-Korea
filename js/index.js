$(function() {
    $('.btn_slide01 > ul').hide()

    $('.btn_slide01').on('click',function(e) {
        e.preventDefault()

        /* $(".btn_slide01").css(
            {
                "background" : "#333",
                "color" : "#fff",
                //"padding" : "10px 20px",
            }
        ) */
        $(".btn_slide01 > ul").slideToggle("fast");
    }) 
})

$(function() {
    $('.btn_slide02 > ul').hide()

    $('.btn_slide02').on('click',function(e) {
        e.preventDefault()

        $(".btn_slide02 > ul").slideToggle("fast");
    })
})



//main
$(function() {
    var swiper = new Swiper(".main_bg", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true, 
        autoplay : {
            delay : 3000
        },
        speed: 1200
      });
})

$(function() {
    var swiper = new Swiper(".banner", {
        loop: true, 
        autoplay : {
            delay : 3000
        },
        speed: 1200
    });
})

$(function() {
    var swiper = new Swiper(".show_list", {
        loop: true, 
        slidesPerView: 4,
        spaceBetween: 30,
        
      });
})


//main-notice
$(function() {
    $('.notice_contents > ul > li').on('click', function(e) {
        e.preventDefault()
        /* 
            - index() : 순서를 알려주는 메소드 (단순히 "순서"만 알려주는 역할)
            - eq() : 몇 번째에 해당하는 요소가 동작까지 가능한 메소드 
        */
       // 방금 클릭한 li에 순서를 변수에 저장
       let i = $(this).index()
       //console.log(i)

       //실행 전에 li에 on클래스가 있는지 확인하고 제거
       $('.notice_contents > ul > li').removeClass('on')
       $('.notice_contents > ul > li').eq(i).addClass('on')
       

       //실행 전에 div에 on클래스가 있는지 확인하고 제거
       $('.notice_tab > ul').removeClass('on')
       $('.notice_tab > ul').eq(i).addClass('on')
    })
})
