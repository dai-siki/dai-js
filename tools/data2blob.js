/**
 * 字符串转二进制 unable
 *
 * @type signature
 * String a -> String b -> Blob c
 */
export default (mime, data) => {
	// dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
	data = data.split(',')[1];
	data = window.atob(data);
	const ia = new Uint8Array(data.length);
	for (let i = 0; i < data.length; i++) {
		ia[i] = data.charCodeAt(i);
	}
	// canvas.toDataURL 返回的默认格式就是 image/png
	return new Blob([ia], {
		type: mime
	});
}
