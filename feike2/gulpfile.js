/*
	这个项目要的插件
	gulp-sass
	gulp-minify-css
	gulp-rename

	gulp.connect


	gulp-image  压缩图片 小30%
	gulp-babel  转换ECMA6（EC2015）
*/
const gulp = require("gulp");
//拷贝.html代码
gulp.task("copy-html", function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist/"))
	.pipe(connect.reload());
})

//拷贝.js文件
gulp.task("scripts", function(){
	return gulp.src(["*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
//拷贝php文件
gulp.task("copy-php", function(){
	return gulp.src("*.php")
	.pipe(gulp.dest("dist/php"))
	.pipe(connect.reload());
})
//拷贝json
/* gulp.task("copy-json", function(){
	return gulp.src("*.json")
	.pipe(gulp.dest("dist/json"))
	.pipe(connect.reload());
}) */
//拷贝images图片
gulp.task("images", function(){
	return gulp.src(["*.{jpg,png}", "images/*.{jpg,gif}"])
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//数据
gulp.task("data", function(){
	return gulp.src(["*.json", "!package.json", "!package-lock.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})
/*
	1、建立工程
	2、监听
*/
gulp.task("build", ["copy-html", "scripts","copy-php", "images", "data","sass-bgsdetails","sass-bgs","sass","sass-shopcar","sass-bootstrap","sass-register","sass-login"], function(){
	console.log("工程已建立");
})


//处理scss
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
gulp.task("sass", function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("sass-bgs", function(){
	return gulp.src("stylesheet/bgs.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("bgs.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("sass-bgsdetails", function(){
	return gulp.src("stylesheet/bgsdetails.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("bgsdetails.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass-shopcar", function(){
	return gulp.src("stylesheet/shoppingcar.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("shoppingcar.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass-bootstrap", function(){
	return gulp.src("stylesheet/bootstrap.css")	
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("bootstrap.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass-register", function(){
	return gulp.src("stylesheet/register.scss")	
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("register.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass-login", function(){
	return gulp.src("stylesheet/login.scss")	
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})


//启动监听
gulp.task("watch", function(){
	gulp.watch("*.html", ["copy-html"]);
	gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
	gulp.watch(["*.{jpg,png}", "images/*.{jpg,gif}"], ["images"]);
	gulp.watch("stylesheet/index.scss", ['sass']);
	gulp.watch(["*.json", "!package.json"], ['data']);
	gulp.watch("*.php",["copy-php"]);
	gulp.watch("stylesheet/bgs.scss",["sass-bgs"]);
	gulp.watch("stylesheet/bgsdetails.scss",["sass-bgsdetails"]);
	gulp.watch("stylesheet/shoppingcar.scss",["sass-shopcar"]);
	gulp.watch("stylesheet/bootstrap.css",["sass-bootstrap"]);
	gulp.watch("stylesheet/register.scss",["sass-register"]);
	gulp.watch("stylesheet/login.scss",["sass-login"]);
	// gulp.watch("*.json",["copy-json"]);
})


//启动服务器

const connect = require("gulp-connect");

gulp.task("server", function(){
	connect.server({
		root: "dist",
		port: 8883,
		livereload: true
	})
})

//设置默认任务
gulp.task("default", ["watch", "server"]);