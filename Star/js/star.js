/**
 * Created by anthony on 2018/4/1.
 */

var starObj = function () {
    this.x;
    this.y;
    this.picNomber;
    this.timer;
    this.speed;
    this.speadX;
    this.speadY;

};
starObj.prototype.init = function () {
    this.x = Math.random() * 780 + 10;
    this.y = Math.random() * 480 + 10;
    this.picNomber = Math.floor(Math.random() * 7);
    this.speadX = Math.random() * 4 - 2;
    this.speadY = Math.random() * 4 - 2;
    this.speed = 100;
    this.timer = 0;
};
starObj.prototype.update = function () {
    this.x += this.speadX * deltaTime * 0.004;
    this.y += this.speadY * deltaTime * 0.004;
    //  超出范围  init
    if (this.x < 10 || this.x > 790) {
        this.init();
        return;
    }
    if (this.y < 10 || this.y > 490) {
        this.init();
        return;
    }
    this.timer += deltaTime;
    if (this.timer > this.speed) {
        this.picNomber += 1;
        this.picNomber %= 7;
        this.timer = 0;
    }
    console.log(this.picNomber);

};
starObj.prototype.draw = function () {
    ctx.save();  //  zai  ctx.save(); ctx.restore();之间的发生改变
    ctx.globalAlpha = life;    // globalAlpha  全局透明度
    //  drawImage(img,sx,sy,swidth,sheigh,x,y,width,height)
    //   sx，sy:目标图片上的位置,
    ctx.drawImage(star, this.picNomber * 7, 0, 7, 7, this.x, this.y, 7, 7);
    ctx.restore();
};
function drawStars() {
    for (var i = 0; i < num; i++) {
        stars[i].draw();
        stars[i].update();
    }
}
function aliveUpdate() {
    if (switchy) {
        life += 0.03 * deltaTime * 0.05;
        if(life>1){
            life=1;
        }
    } else {
        life -= 0.03 * deltaTime * 0.05;
        if(life<0){
            life = 0;
        }
    }

}