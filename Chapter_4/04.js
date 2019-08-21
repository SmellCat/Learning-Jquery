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

// $(document).ready(function () {
    // var $speech = $('div.speech');
    // var defalutSize = $speech.css('fontSize');
    // $('#switcher button').click(function () {
    //     var num = parseFloat($speech.css('fontSize'));
    //     switch (this.id) {
    //         case 'switcher-large':
    //             num *= 1.4;
    //             break;
    //         case 'switcher-small':
    //             num /= 1.4;
    //             break;
    //         default:
    //             num = parseFloat(defalutSize);
    //     }
    //     $speech.css('fontSize', num + 'px');
    // });
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
//     $(document).ready(function () {
//         var $firstPara = $('p').eq(1);
//         $firstPara.hide();
//         $('a.more').click(function (event) {
//             event.preventDefault();
//             $firstPara.animate({
//                 opacity: 'toggle',
//                 height: 'toggle'
//             }, 'slow');
//             var $link = $(this);
//             if ($link.text() == 'read more') {
//                 $link.text('read less');
//             } else {
//                 $link.text('read more');
//             }
//         });
//     });
// });
/*-----4.4.2------*/
$(document).ready(function() {
    var $speech = $('div.speech');
    var defaultSize = $speech.css('fontSize');
    $('#switcher button').click(function() {
        var num = parseFloat($speech.css('fontSize'));
        switch (this.id) {
            case 'switcher-large':
                num *= 1.4;
                break;
            case 'switcher-small':
                num /= 1.4;
                break;
            default:
                num = parseFloat(defaultSize);
        }
        $speech.animate({fontSize: num + 'px'}, 'slow');
    });
});
/* 4-16*/
// $(document).ready(function() {
//     $('div.label').click(function() {
//         var paraWidth = $('div.speech p').outerWidth();
//         var $switcher = $(this).parent();
//         var switcherWidth = $switcher.outerWidth();
//         $switcher.animate({
//             borderWidth: '5px',
//             left: paraWidth - switcherWidth,
//             height: '+=20px'
//         }, 'slow');
//     });
// });
/* 4-17*/
// $(document).ready(function() {
//     $('div.label').click(function() {
//         var paraWidth = $('div.speech p').outerWidth();
//         var $switcher = $(this).parent();
//         var switcherWidth = $switcher.outerWidth();
//         $switcher.css({position: 'absolute'
//         }).animate({
//             borderWidth: '5px',
//             left: paraWidth - switcherWidth,
//             height: '+=20px'
//         }, 'slow');
//     });
// });
/*4-18*/
// $(document).ready(function() {
//     $('div.label').click(function() {
//         var paraWidth = $('div.speech p').outerWidth();
//         var $switcher = $(this).parent();
//         var switcherWidth = $switcher.outerWidth();
//         $switcher.css({position: 'relative'})
//             .animate({left: paraWidth - switcherWidth,height: '+=20px'}, 'slow')
//             .animate({height: '+=20px'}, 'slow')
//             .animate({borderWidth: '5px'}, 'slow');
//         ;
//     });
// });

/*4-19*/
// $(document).ready(function() {
//     $('div.label').click(function() {
//         var paraWidth = $('div.speech p').outerWidth();
//         var $switcher = $(this).parent();
//         var switcherWidth = $switcher.outerWidth();
//         $switcher.css({position: 'relative'})
//             .fadeTo('fast', 0.5)
//             .animate({left: paraWidth - switcherWidth}, 'slow')
//             .fadeTo('slow', 1.0)
//             .slideUp('slow')
//             .slideDown('slow')
//         ;
//     });
// });

/* 4-20 */
// $(document).ready(function() {
//     $('div.label').click(function() {
//         var paraWidth = $('div.speech p').outerWidth();
//         var $switcher = $(this).parent();
//         var switcherWidth = $switcher.outerWidth();
//         $switcher.css({position: 'relative'})
//             .fadeTo('fast', 0.5)
//             .animate({
//                 left: paraWidth - switcherWidth
//             }, {
//                 duration: 'slow',
//                 queue: false
//             })
//             .fadeTo('slow', 1.0)
//             .slideUp('slow')
//             .slideDown('slow')
//         ;
//     });
// });


/* 4-21 */
// $(document).ready(function() {
//     $('div.label').click(function() {
//         var paraWidth = $('div.speech p').outerWidth();
//         var $switcher = $(this).parent();
//         var switcherWidth = $switcher.outerWidth();
//         $switcher.css({position: 'relative'})
//             .fadeTo('fast', 0.5)
//             .animate({
//                 left: paraWidth - switcherWidth
//             }, {
//                 duration: 'slow',
//                 queue: false
//             })
//             .fadeTo('slow', 1.0)
//             .slideUp('slow')
//             .css({backgroundColor: '#f00'})  // 期望效果是在.sldeUp()执行之后但在.slideDown()执行前，
//                                             // 把<div id="switcher">的背景色改为红色。但是排队不能应用到非效果方法。它会在点击后立即执行
//             .slideDown('slow')
//         ;
//     });
// });

/* 4-22 */
$(document).ready(function() {
    $('div.label').click(function() {
        var paraWidth = $('div.speech p').outerWidth();
        var $switcher = $(this).parent();
        var switcherWidth = $switcher.outerWidth();
        $switcher.css({position: 'relative'})
            .fadeTo('fast', 0.5)
            .animate({
                left: paraWidth - switcherWidth
            }, {
                duration: 'slow',
                queue: false
            })
            .fadeTo('slow', 1.0)
            .slideUp('slow')
            .queue(function(next) {   // 把非效果方法添加到队列中的一种方式
                $switcher.css({backgroundColor: '#f00'});
                next()
            })
            .slideDown('slow')
        ;
    });
});