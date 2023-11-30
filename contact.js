// スクロールトップの設定

function PageTopAnime() {
    let scroll = $(window).scrollTop();

    if(scroll >= 200){
        $("#page-top").removeClass("down-move");
        $("#page-top").addClass("up-move");
    }else{

        if($("#page-top").hasClass("up-move")){
            $("#page-top").removeClass("up-move");
            $("#page-top").addClass("down-move");
        }
    }
};

$(window).on("scroll",function () {
    PageTopAnime();
});

console.log(scroll);

$(window).on("load",function(){
    PageTopAnime();
})

$("#page-top").click(function(){
    $("body,html").anime({
        scrollTop:0
    },500)
    return false;
});