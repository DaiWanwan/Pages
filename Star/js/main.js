/**
 * Created by anthony on 2018/4/1.
 */
var can,   // 获取canvas
    ctx,  //  2d场景
    _width,
    _height;
var img = new Image(),
    star = new Image();
var num = 60,
    stars = [];
var lastTime,
    deltaTime;   //  两帧之间的间隔
var switchy = false,
    life = 0;

function init() {
    can = document.getElementById('canvas');
    ctx = can.getContext('2d');
    _width = can.width;
    _height = can.height;
    document.addEventListener('mousemove', mouseMove, false)
    img.src = 'img/image.jpg';
    star.src = 'img/star.png';
    for (var i = 0; i < num; i++) {
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }
    // Date.now() 返回1970 年 1 月 1日午夜与当前日期和时间之间的毫秒数。
    lastTime = Date.now();
    gameLoop();
}
//  刷新内容，使页面动起来
function gameLoop() {
    window.requestAnimFrame(gameLoop);  //  使页面循环起来
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();
    drawImg();
    drawStars();
    aliveUpdate();
}
function drawBackground() {
    ctx.fillStyle = '#82c17d';
    ctx.fillRect(0, 0, _width, _height);
}
function drawImg() {
//    在canvas内绘画图片，使用drawImage(img,x,y,width,height);
//  x轴坐标正方向向右，y轴正方向向下，原点在左上角
    ctx.drawImage(img, 10, 10, 780, 480);
}
function mouseMove(e) {
    if (e.offsetX || e.layerX) {
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;
        if (px > 10 && px < 790 && py > 10 && py < 490) {
            switchy = true;
        } else {
            switchy = false;
        }
    }
}
document.body.onload = init();