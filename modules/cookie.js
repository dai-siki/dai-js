/* cookie操作
 ---------------------------------------------------------------*/

export default {
    /*
	 * 写入cookie
	 */
	set(name, value) {
		let argv = arguments,
			argc = arguments.length,
			expires = (2 < argc) ? argv[2] : null,
			path = (3 < argc) ? argv[3] : null,
			domain = (4 < argc) ? argv[4] : null,
			secure = (5 < argc) ? argv[5] : false;
		document.cookie = name + '=' + encodeURIComponent(value)
			+ ((expires == null)  ? '' : ('; expires=' + expires.toGMTString()))
			+ ((path == null) ? '; path=/' : ('; path=' + path))
			+ ((domain == null) ? '' : ('; domain=' + domain))
			+ ((secure == true) ? '; secure' : '');
	},

    /*
	 * 获取cookie
	 */
	get(name) {
		return decodeURIComponent(
			document.cookie.replace(
				new RegExp('(?:(?:^|.*;)\\s*'
					+ encodeURIComponent(name).replace(/[\-\.\+\*]/g, '\\$&')
					+ '\\s*\\=\\s*([^;]*).*$)|^.*$'
				), '$1'
			)
		)
		|| null;
	},

    /*
	 * 移除cookie
	 */
	remove(sName, sPath, sDomain) {
		this.set(sName, '', new Date(0), sPath, sDomain);
	},

    /*
	 * 清空cookie
	 */
	clear() {
		let cookies = document.cookie.split(';'),
			len = cookies.length;
		for (let i = 0; i < len; i++) {
			let cookie = cookies[i],
				eqPos = cookie.indexOf('='),
				name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			name = name.replace(/^\s*|\s*$/, '');
			document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
		}
	}
};
