var $ = require('jquery');

/**
 * 当滚动条超过容器高度时切换css类（如：固定位置）
 *
 * @param selector 元素选择器
 * @param onClassName 超过时添加的类名
 * @param offClassName 默认类名
 */
module.exports = function (selector, onClassName, offClassName) {
	selector = selector ? selector : ".mytoolbar";
	onClassName = onClassName ? onClassName : "";
	offClassName = offClassName ? offClassName : "";
	var $win = $(window);
	var $nav = $(selector);
	var navTop = $nav.length && $nav.offset().top;
	var isOn = 0;
	$win.scroll(function () {
		var scrollTop = $win.scrollTop();
		if (scrollTop >= navTop && !isOn) {
			isOn = 1;
			$nav.addClass(onClassName).removeClass(offClassName);
		} else if (scrollTop <= navTop && isOn) {
			isOn = 0;
			$nav.addClass(offClassName).removeClass(onClassName);
		}
	});
};
