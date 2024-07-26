let huaweiband9LeftSlider = new Swiper('.left-huaweiband9-slider__slider', {
    speed: 500,
    slidesPerView: 1,
    navigation: {
        nextEl: '.left-huaweiband9-slider-next',
        prevEl: '.left-huaweiband9-slider-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
let huaweiband9RightSlider = new Swiper('.right-huaweiband9-slider__slider', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.right-huaweiband9-slider-pagination',
        type: 'bullets',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
huaweiband9LeftSlider.controller.control = huaweiband9RightSlider
huaweiband9RightSlider.controller.control = huaweiband9LeftSlider