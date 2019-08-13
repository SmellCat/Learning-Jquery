// 第一版
// $(document).ready(function() {
//     // $('body').addClass('large');
//     $('#switcher-default').addClass('selected').on('click', function() {
//        $('body').removeClass('large');
//        $('body').removeClass('narrow');
//        $('#switcher button').removeClass('selected');
//        $(this).addClass('selected');
//     });
//     $('#switcher-large').on('click', function() {
//         $('body').addClass('large');
//         $('body').removeClass('narrow');
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
//     $('#switcher-narrow').on('click', function() {
//         $('body').addClass('narrow');
//         $('body').removeClass('large');
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });

// 第二版
// $(document).ready(function() {
//     $('#switcher-default')
//         .addClass('selected')
//         .on('click', function() {
//             $('body').removeClass('narrow').removeClass('large');
//         });
//     $('#switcher-large')
//         .on('click', function() {
//             $('body').addClass('large').removeClass('narrow');
//         });
//     $('#switcher-narrow')
//         .on('click', function() {
//             $('body').addClass('narrow').removeClass('large');
//         });
//     $('#switcher button').on('click', function() {
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });

// 第三版
// $(document).ready(function() {
//     $("#switcher-default")
//         .addClass('selected')
//         .on('click', function() {
//             $('body').removeClass();
//         });
//     $('#switcher-narrow').on('click', function() {
//         $('body').removeClass().addClass('narrow');
//     });
//     $('#switcher-large').on('click', function() {
//         $('body').removeClass().addClass('large');
//     });
//     $('#switcher button').on('click', function() {
//         $('#switcher-button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });

// 第四版
// $(document).ready(function() {
//     $('#switcher-default').addClass('selected');
//     $('#switcher button').on('click', function() {
//         $('body').removeClass();
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
//     $('#switcher-narrow').on('click', function() {
//         $('body').addClass('narrow');
//     });
//     $('#switcher-large').on('click', function() {
//         $('body').addClass('large');
//     })
// });

// 第五版
/*
    因为上下文关键字this引用的是DOM元素，而不是JQuery对象，所以可以使用原生DOM属性来确定被单击元素的ID
* */
// $(document).ready(function() {
//    $('#switcher-default').addClass('selected');
//    $('#switcher button').on('click', function() { // .on('click', function(){}) 的简写事件方式，是.click(function() {})
//        let bodyClass = this.id.split('-')[1];
//        $('body').removeClass().addClass(bodyClass);
//        $('#switcher button').removeClass('selected');
//        $(this).addClass('selected');
//    });
// });

// $(document).ready(function() {
//     $('#switcher h3').click(() => {
//         $('#switcher button').toggleClass('hidden');
//     });
// });

// $(document).ready(function() {
//    $('#switcher h3').hover(function() {
//        $(this).addClass('hover');
//    }, function() {
//        $(this).removeClass('hover')
//    });
// });

//  因为 事件冒泡 会导致点击按钮时，而触发这个事件
// $(document).ready(function() {
//     $('#switcher').click(function() {  //
//         $('#switcher button').toggleClass('hidden');
//     });
// });

// $(document).ready(function() {
//     $('#switcher').click(function(event) {
//         if (event.target == this) {
//             $('#switcher button').toggleClass('hidden');
//         }
//     })
// });

// $(document).ready(function() {
//     $('#switcher-default').addClass('selected');
//     $('#switcher button').click(function(event) {
//        let bodyClass = this.id.split('-')[1];
//        $('body').removeClass().addClass(bodyClass);
//        $('#switcher button').removeClass('selected');
//        $(this).addClass('selected');
//        event.stopPropagation(); // 停止事件传播
//     });
// });

// $(document).ready(function() {
//     $('#switcher-default').addClass('selected');
//     $('#switcher').click(function(event) {
//         if ($(event.target).is('button')) {
//             let bodyClass = event.target.id.split('-')[1];
//             $('body').removeClass().addClass(bodyClass);
//             $('#switcher button').removeClass('selected');
//             $(event.target).addClass('selected');
//             event.stopPropagation();  // 在此处没有效果
//         }
//     });
// });

/*
$(document).ready(function() {
    $('#switcher').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
});

$(document).ready(function() {
    $('#switcher').click(function(event) {
        if (!$(event.target).is('button')) {
            $('#switcher button').toggleClass('hidden');
        }
    })
});

$(document).ready(function() {
    $('#switcher-default').addClass('selected');
    $('#switcher').click(function(event) {
        if ($(event.target).is('button')) {
            let bodyClass = event.target.id.split('-')[1];
            $('body').removeClass().addClass(bodyClass);
            $('#switcher button').removeClass('selected');
            $(event.target).addClass('selected');
        }
    });
});
*/

$(document).ready(function() {
    $('#switcher').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
});


// $(document).ready(function() {
//     $('#switcher-default').addClass('selected');
//     $('#switcher').click(function(event) {
//         if ($(event.target).is('button')) {
//             let bodyClass = event.target.id.split('-')[1];
//             $('body').removeClass().addClass(bodyClass);
//             $('#switcher button').removeClass('selected');
//             $(event.target).addClass('selected');
//         } else {
//             $('#switcher button').toggleClass('hidden');
//         }
//     });
// });


$(document).ready(function() {
    $('#switcher-default').addClass('selected');
    $('#switcher').on('click', 'button', function(event) {
        let bodyClass = event.target.id.split('-')[1];
        $('body').removeClass().addClass(bodyClass);
        $('#switcher button').removeClass('selected');
        $(event.target).addClass('selected');
    });
});
