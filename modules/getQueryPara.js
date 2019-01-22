/**
 * Js获取页面地址get参数，返回null或字符串结果
 *
 * @param paraName 参数名称
 * @param dft 默认值，如果没找到结果，返回该值
 * @returns {string} 参数值
 */
export default function (paraName, dft = null) {
	var sUrl = location.href;
	var sReg = '[\?&]{1}' + paraName + '=([^&]*)';
	var re = new RegExp(sReg);
	var rst = (sUrl.match(re));
	if (rst === null) return dft;
	return decodeURIComponent(rst[1]);
}
