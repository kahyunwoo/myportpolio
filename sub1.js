$(function(){
    $('.img_rolling').bxSlider({
        mode:'horizontal',
        auto:true,
        speed:500,
        pause:2000,
        pager:false,
        controls:false,

        touchEnabled : (navigator.maxTouchPoints > 0),

        onSliderLoad:function(){
            var total_slide = img_rolling.getSlideCount();
            if(total_slide > 3){
                $('.img_rolling .bx-controls-direction').show();
                eslider.startAuto();
            }else{
                $('.img_rolling .bx-controls-direction').hide();
                eslider.stopShow();
            }
        }
    })
})
