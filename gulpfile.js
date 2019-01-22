/******************************************************
 *             ----前端工程自动化构建----             *
 *                                                    *
 *      @author dai-siki同学 < 851733175@qq.com >     *
 ******************************************************/

'use strict';

// import package
const $ = require('gulp-load-plugins')(),
	named = require('vinyl-named'),
	webpack = require('webpack-stream'),
	gulp = require('gulp');

//延时操作
const nextTick = (cd = 0) => new Promise(reslove => setTimeout(reslove, cd));

//打印
const log = (...list) => {
	list.forEach((item) => {
		console.log(item);
	});
};

//错误提示
const _errrHandler =  err => {
	$.util.beep();
	$.util.log(err);
};


/** 开发
 -------------------------------------------------------------*/
// jS task
gulp.task('js', () => {
	let webpack_config = {};
	webpack_config['module'] = {
		rules: [{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: [{
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
				}
			}]
		}, {
			test: /\.js$/,
			use: [{
				loader: 'babel-loader',
				query: {
					presets: [
						'stage-3',
						'es2015'
					],
					plugins: [
						['transform-runtime', {
							helpers: false,
							polyfill: false,
							regenerator: true
						}]
					]
				}
			}]
		}]
	};

	return gulp.src(['test/test.js'])
		.pipe($.plumber({
			errorHandler: _errrHandler
		}))
		.pipe($.sourcemaps.init())
		.pipe(named(file => 'test-b'))
		.pipe(webpack(webpack_config))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('test'));
});
