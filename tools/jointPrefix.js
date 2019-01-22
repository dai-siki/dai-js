/**
 * 给字符串加前缀
 *
 * @type signature
 * String a -> String b -> String c
 * String a -> [String b] -> [String c]
 * String a -> {x: String b} -> {x: String c}
 */
export default (pre, url) => {
	if (typeof url === 'object') {
		Object.keys(url).forEach((k) => {
			url[k] = jointPrefix(pre, url[k]);
		});
	} else if (Array.isArray(url)) {
		url = url.map(item => jointPrefix(pre, item));
	} else if (typeof url === 'string') {
		url = pre + url;
	}

	return url;
}
