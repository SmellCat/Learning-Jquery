// $(document).ready(function() {
//     var $speech = $('div.speech');
//     // $('#switcher-large').click(function() {
//     //     var num = parseFloat($speech.css('fontSize'));
//     //     num *= 1.4;
//     //     $speech.css('fontSize', num + 'px');
//     // });
//     $('#switcher button').click(function() {
//         var num = parseFloat($speech.css('fontSize'));
//         if(this.id == 'switcher-large') {
//             num *= 1.4;
//         } else if (this.id == 'switcher-small') {
//             num /= 1.4;
//         }
//         $speech.css('fontSize', num + 'px');
//     });
// });

$(document).ready(function () {
    var $speech = $('div.speech');
    var defalutSize = $speech.css('fontSize');
    $('#switcher button').click(function () {
        var num = parseFloat($speech.css('fontSize'));
        switch (this.id) {
            case 'switcher-large':
                num *= 1.4;
                break;
            case 'switcher-small':
                num /= 1.4;
                break;
            default:
                num = parseFloat(defalutSize);
        }
        $speech.css('fontSize', num + 'px');
    });
    /*
        $('p').eq(1).hide();
        $('a.more').click(function () {
            event.preventDefault();
            $('p').eq(1).show();
            $(this).hide();
        });
    */
    /*
        $('p').eq(1).hide();
        $('a.more').click(function () {
            event.preventDefault();
            $('p').eq(1).show('slow');
            $(this).hide();
        });
    */
    /*
        $('p').eq(1).hide();
        $('a.more').click(function () {
            event.preventDefault();
            $('p').eq(1).fadeIn('slow');
            $(this).hide();
        });
    */
    // $('p').eq(1).hide();
    // $('a.more').click(function () {
    //     event.preventDefault();
    //     $('p').eq(1).slideDown('slow');
    //     $(this).hide();
    // });
    // ---------------------切换可见性
    // var $firstPara = $('p').eq(1);
    // $firstPara.hide();
    // $('a.more').click(function(event) {
    //     event.preventDefault();
    //     if ($firstPara.is(':hidden')) {
    //         $firstPara.fadeIn('slow');
    //         $(this).text('read less');
    //     } else {
    //         $firstPara.fadeOut('slow');
    //         $(this).text('read more')
    //     }
    // });
    // 使用slideToggle()
    // $(document).ready(function() {
    //     var $firstPara = $('p').eq(1);
    //     $firstPara.hide();
    //     $('a.more').click(function(event) {
    //         event.preventDefault();
    //         $firstPara.slideToggle('slow');
    //         var $link = $(this);
    //         if ($link.text() == 'read more') {
    //             $link.text('read less');
    //         } else {
    //             $link.text('read more');
    //         }
    //     })
    // });

    /* 4.4 创建自定义动画 */
    // 4.4.1
    // $(document).ready(function() {
    //    var $firstPara = $('p').eq(1);
    //    $firstPara.hide();
    //    $('a.more').click(function(event) {
    //        event.preventDefault();
    //        $firstPara.animate({height: 'toggle'}, 'slow');
    //        var $link = $(this);
    //        if ($link.text() == 'read more') {
    //            $link.text('read less');
    //        } else {
    //            $link.text('read more');
    //        }
    //    });
    // });
    // 4.4.2
    $(document).ready(function () {
        var $firstPara = $('p').eq(1);
        $firstPara.hide();
        $('a.more').click(function (event) {
            event.preventDefault();
            $firstPara.animate({
                opacity: 'toggle',
                height: 'toggle'
            }, 'slow');
            var $link = $(this);
            if ($link.text() == 'read more') {
                $link.text('read less');
            } else {
                $link.text('read more');
            }
        });
    });
});
