$(document).ready(function() {
    $('#selected-plays > li').addClass('horizontal');
    $('#selected-plays li:not(.horizontal)').addClass('sub-level')
});

$(document).ready(function() {
    /*
        属性选择符使用一种从正则表达式借鉴来的通配符语法，以^表示值在字符串的开始，以$表示值在字符串的结尾。
        而且，也是用星号*表示要匹配的值可以出现在字符串中任意位置，用叹号!表示对值取反。
    */
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
    // 属性选择符也可以组合使用。例如，可以为href属性即以http开头且任意位置包含henry的所有链接添加一个henrylink类
    $('a[href^="http"][href*="henry"]').addClass('henrylink');
});

$(document).ready(function() {
    // $('tr:even').addClass('alt'); // eq()、:odd、:even选择符都使用JavaScript内置从0开始编号
    $('tr:nth-child(odd)').addClass('alt');
});