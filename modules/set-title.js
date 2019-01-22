/* 设置页面标题
 ---------------------------------------------------------------*/
const titleEle = document.getElementsByTagName('title')[0],
	h1TitleEle = document.getElementById('h1_title');
export default function(text) {
	if (h1TitleEle) {
		h1TitleEle.innerHTML = text;
	}
	if (titleEle) {
		titleEle.innerHTML = text;
	}
}
