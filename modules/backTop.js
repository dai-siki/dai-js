/**
 * 回到顶部
 *
 * @param id 绑定点击函数元素的id
 */

export default function(id = 'back_top') {
	let back_top = document.getElementById(id),
		speed = 12;
	if(!back_top) return;
	window.addEventListener('scroll', function() {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		if (t > 300) {
			back_top.style.display = 'block';
		} else {
			back_top.style.display = 'none';
		}
	});

	back_top.addEventListener('click', function(e) {
		e.preventDefault();
		function step() {
			let t = document.documentElement.scrollTop || document.body.scrollTop,
				requestAnimationFrame = window.requestAnimationFrame || function(fn) {
					setTimeout(fn, 1000 / 60);
				};
			if (t > speed * 120) {
				window.scrollTo(0, t - speed * 30);
			} else if (t > speed * 60) {
				window.scrollTo(0, t - speed * 15);
			} else if (t > speed * 30) {
				window.scrollTo(0, t - speed * 8);
			} else if (t > speed * 15) {
				window.scrollTo(0, t - speed * 4);
			} else if (t > 0) {
				window.scrollTo(0, t < speed
                    ? 0
                    : t - speed);
			} else {
				return false;
			}
			requestAnimationFrame(step);
		}

		step();
	});
};
