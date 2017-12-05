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
});