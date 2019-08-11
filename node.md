## 第三章
1、.ready()的简写形式
$(document).ready()结构，实际上是在基于document这个元素的构建而成的**JQuery**对象上调用
了.ready()方法。$()函数式简写

2、由于很多库都使用$标识符，需要一种方式避免名称冲突
```html
<script src="prototype.js"></script>
<script src="jquery.js"></script>
<script>
    JQuery.noConflict();
</script>
<script src="myscript.js"></script>
```
首先，包含JQuery之外的库（prototype）,然后包含JQuery库，取得对$的使用权。接着调用.noConflict()
方法让出$。**但是**在需要使用JQuery方法时，必须记住要用**JQuery**而不是$来调用。

在这种情况下，还有一个在.ready()方法中使用$的技巧。我们传递给它的回调函数可以接收一个参数---JQuery
对象本身。利用这个参数可以重新命名JQuery为$，而不必担心造成冲突
```javascript
JQuery(document).ready(function($) {
  // 在这里，可以正常使用
});
// 或者也可以使用下面
JQuery(function($) {
    // 使用$ 的代码
});
```