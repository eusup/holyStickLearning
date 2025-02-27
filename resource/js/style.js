$(document).ready(function () {
    // 인트로페이지 로그인 애니메이션입니다. 로딩바가 100% 가 되면 버튼 이 노출됩니다.
    function introLoading() {
        $(".wrap.intro .bottom .progress-bar .ball").animate({ width: '100%' }, 1500);
        setTimeout(function () {
            $(".wrap.intro .bottom > div:nth-child(1)").hide();
            $(".wrap.intro .bottom > .btn-wrap").addClass("act");
        }, 1600);
    }
    introLoading();

    // 이거 뭐 만든거지..
    $(".card-area li").click(function () {
        $(this).addClass("act");
    });

    // (공통) 비디오 재샏시 아이콘 사라짐, 비디오 재생
    $("video").click(function(){
        const videoNow = $('video').get(0);
        if(videoNow.paused == true){
            videoNow.play();
            $(this).siblings(".play").addClass("hide");
            $(this).siblings(".play").removeClass("show");
        }else{
            videoNow.pause();
            $(this).siblings(".play").addClass("show");
            $(this).siblings(".play").removeClass("hide");
        }
    });

    // (리스닝) 결과창 녹음듣기 버튼
    $(".speaking.result .box .audio-wrap .btn").click(function(){
        $(this).find("span").toggleClass("act");
    });

    // (스피킹) 녹음 버튼
    var i = 0;
    $(".rec-wrap .btn.rec").click(function(){
        i++;
        if(i === 1){
            $(this).addClass("show");
            $(this).find("img").toggleClass("act");
        } else if(i === 2){
            $(this).addClass("act");
            $(this).find("p").text("녹음 다시하기");
            $(this).find("img").toggleClass("act");
            $(this).siblings(".play").addClass("show");
        }else if(i === 3){
            $(this).removeClass("show");
            $(this).removeClass("act");
            $(this).find("img:first-child").addClass("act");
            $(this).find("img:last-child").removeClass("act");
            $(this).find("p").text("녹음 완료하기");
            $(this).siblings(".play").removeClass("show");
            $(this).siblings(".play").find("img:last-child").removeClass("act");
            $(this).siblings(".play").find("img:first-child").addClass("act");
            $(this).siblings(".play").removeClass("act");
            i = 0;
        }
    });
    $(".btn-wrap .rec-wrap .btn.play").click(function(){
        $(this).toggleClass("act");
        $(this).find("img").toggleClass("act");
    });

    // (스피킹) 녹화버튼
    $(".speaking.step04 .video.rec .btn.rec").click(function(){
        $(this).toggleClass("act");
    });

    // (보카) step1 카드 뒤집기
    $(".voca.step01 .card-wrap li").click(function(){
        $(this).addClass("act");
        $(".voca.step01 .alert").text($(this).find("span").text());
    });

    // (보카) step3 오지선다 선택시
    $(".rel-scroll ul li button").click(function(){
        $(".rel-scroll ul li button").removeClass("act");
        $(this).addClass("act");
    });

    // 다크모드 테스트
    $(".darkMode-btn").click(function(){
        $(this).toggleClass("act");
        $(this).find("i").toggleClass("act");
        $(".wrap").toggleClass("dark");
    });
});
