/**
 * 模拟表单提交的方式进行post
 *
 */
export default function(URL, PARAMTERS={}) {
	//创建form表单
	let temp_form = document.createElement('form');
	temp_form.action = URL;
	//如需打开新窗口，form的target属性要设置为'_blank'
	temp_form.target = '_self';
	temp_form.method = 'post';
	temp_form.style.display = 'none';
	//添加参数
	for (let item in PARAMTERS) {
		let opt = document.createElement('textarea');
		opt.name = item;
		opt.value = PARAMTERS[item];
		temp_form.appendChild(opt);
	}
	document.body.appendChild(temp_form);
	//提交数据
	temp_form.submit();
}
