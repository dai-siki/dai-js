import './message.scss';

export default {
	success(str, seconds, callFn) {
		msg('success', str, seconds, callFn);
	},
	warning(str, seconds, callFn) {
		msg('warning', str, seconds, callFn);
	},
	error(str, seconds, callFn) {
		msg('error', str, seconds, callFn);
	}
};

/**
 * 弹出黑色背景提示框
 *
 * @param type 类型
 * @param str 提示文字
 * @param seconds 提示毫秒数
 * @param callFn 回调函数
 */
function msg(type, str, seconds, callFn) {
	let i = seconds,
		is_start = false,
		is_removed = false,
		body = document.body,
		size = str.length > 10 ? 'lg' : 'md',
		msgNode = document.createElement('div'),
		html = `
			<div class="s-${size} z-${type}">
				<i></i>
				<span>${str}</span>
				<a class="btn-close" title="关闭"></a>
			</div>`,
		fn = callFn == undefined ? function(){} : callFn,
		removeMsg = function() {
			if (is_start && !is_removed) {
				is_removed = true;
				body.removeChild(msgNode);
				body.removeEventListener('click', removeMsg);
			}
		},
		cdInt = setInterval(function() {
			if (is_start == false) {
				body.appendChild(msgNode);
				is_start = true;
			}
			if (i <= 0) {
				clearInterval(cdInt);
				removeMsg();
				fn();
			} else {
				i -= 100;
			}
		}, 100);
	msgNode.classList.add('j-msg');
	msgNode.innerHTML = html;
	body.addEventListener('click', removeMsg);
}
