var $ = require('jquery');

/**
 * 表单禁止输入空格
 *
 * @param selector 禁止空格的表单元素 默认：input.nospace
 */
module.exports = function (selector) {
	selector = selector ? selector : "input.nospace";
	$(selector).keydown(function (e) {
		if (e.keyCode == 32) {
			return false;
		}
	});
};
