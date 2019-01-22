//得到meta标签的content内容
export default function getMeta(name) {
	let els = document.getElementsByName(name);
	if (els.length > 0) {
		return els[0].getAttribute('content');
	}
	return '';
}
