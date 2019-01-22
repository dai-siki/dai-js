'use strict';

/**
 * ajax请求
 */
export default {
	//公共数据，如_token
	commonData: {},
	//get请求 返回json
	get (url, queryData = {}) {
		let self = this;
		return new Promise(function (resolve, reject) {
			var client = new XMLHttpRequest();
			url = paramJoinUrl(url, param(Object.assign({}, self.commonData, queryData)));
			client.open('GET', url, true);
			client.onreadystatechange = function () {
				if (this.readyState !== 4) {
					return;
				}
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					reject(this.status);
				}
			};
			client.send();
		});
	},
	//post请求 返回json 【暂不支持多维数组】
	post(url, queryData = {}){
		let self = this;
		return new Promise(function (resolve, reject) {
			let client = new XMLHttpRequest(),
				data = param(Object.assign({}, self.commonData, queryData));
			client.open('POST', url, true);
			client.onreadystatechange = function () {
				if (this.readyState !== 4) {
					return;
				}
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					reject(this.status);
				}
			};
			client.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=utf-8');
			client.send(data);
		});
	}
};

/**
 * 将对象参数转为ajax请求需要的格式，暂不支持二维数组
 *
 * @param opts 对象 如：{name:'a', password: '111'}
 * @returns 字符串 如：'name=a&password=111'
 */
function param(opts = {}) {
	if (opts == {}) {
		return '';
	}
	let keys = Object.keys(opts).map(function (key) {
		return encodeURIComponent(key) + '=' + encodeURIComponent(opts[key]);
	});
	return keys.join('&');
}

/**
 * 参数和url合并
 *
 * @param href 如: '/car'
 * @param param 如：'name=a&password=111'
 * @returns {*} 如：'/car?name=a&password=111'
 */
function paramJoinUrl(href, param = '') {
	if (param == '') {
		return href;
	}
	return href + (href.indexOf('?') != -1 ? '&' : '?') + param;
}
