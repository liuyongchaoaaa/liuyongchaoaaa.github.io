/**
 * Created by lenovo on 17/12/5 005.
 */
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        //设置分页符能否点击
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});

var mp3=document.querySelector("#mp3");
var mp3Btn=document.querySelector("#mp3Btn");

mp3Btn.onclick = function () {
    if (mp3.paused) {
        //开始旋转
        mp3Btn.style.animationPlayState = 'running';
        //开始音频
        mp3.play();
    } else {
        //暂停旋转
        mp3Btn.style.animationPlayState = 'paused';
        //暂停音频
        mp3.pause();
    }
}