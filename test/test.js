import message from '../modules/message/message';
import log from '../modules/log';

log('123455');
message.success('我是给弄你飞机偶尔就饿哦偶尔就偶分姐姐饿哦Joe就哦欧吉欧福奇偶奇偶', 3000, () => {
	message.warning('3333', 3000, () => {
		message.error('4567');
	});
});
