/**
 * [判断环境，开发环境则打印信息]
 *
 * @param  {[string]} title [打印日志标题]
 * @param  {[type]} list  [打印日志内容]
 * @return {[boolean]}
 */
export default function (title, ...list) {
	if(typeof title != 'string'){
		list.push(title);
		title = '';
	}
	console.log(`/** ${title}`);
	list.forEach((item) => {
		console.log(item);
	});
	console.log('--------------------*/');
	return true;
}
