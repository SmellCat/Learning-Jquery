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

$(document).ready(function() {
    var $speech = $('div.speech');
    var defalutSize = $speech.css('fontSize');
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
                num = parseFloat(defalutSize);
        }
        $speech.css('fontSize', num + 'px');
    });

    $('p').eq(1).hide();
    $('a.more').click(function () {
        event.preventDefault();
        $('p').eq(1).show();
        $(this).hide();
    });
});
