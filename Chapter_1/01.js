// $(document).ready(function() {
// //     $('div.poem-stanza').addClass('highlight')
// // });
// function addHighlightClass() {
//     $('div.poem-stanza').addClass('highlight')
// }
//
// $(document).ready(addHighlightClass)

// 纯JS实现
window.onload = function() {
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        if (hasClass(divs[i], 'poem-stanza') && !hasClass(divs[i], 'highlight')) {
            divs[i].className += ' highlight'; // space
        }
    }

    function hasClass(elem, cls) {
        var reClass = new RegExp(' ' + cls + ' ');
        return reClass.test(" " + elem.className + " ");
    }
};