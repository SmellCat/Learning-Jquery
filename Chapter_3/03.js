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
$(document).ready(function() {
   $('#switcher-default').addClass('selected');
   $('#switcher button').on('click', function() { // .on('click', function(){}) 的简写事件方式，是.click(function() {})
       let bodyClass = this.id.split('-')[1];
       $('body').removeClass().addClass(bodyClass);
       $('#switcher button').removeClass('selected');
       $(this).addClass('selected');
   });
});

$(document).ready(function() {
    $('#switcher h3').click(() => {
        $('#switcher button').toggleClass('hidden');
    });
});