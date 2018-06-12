/**
 * Created by anthony on 2018/6/11.
 */
//  时间构造器
var TimeLine=function () {
    this.order=[];   // 动画序列
    this.add=function (timeout,func,name) {
        this.order.push({
            timeout:timeout,
            func:func,
            name:name
        })
    };
    //  参数支持快进
    this.start=function (ff) {
        ff=ff||0;
        for(s in this.order){
            (function (me) {
                var fn=me.func;
                var time=me.timeout;
                var name=me.name;
                time=Math.max(time-ff,0);
                setTimeout(fn,time);
                setTimeout(function () {
                    console.log('time->',time);
                },time)
            })(this.order[s])
        }
    }
};
//  获取DOM对象
var g=function (id) {
    return document.getElementById(id);
};


//  初试化
var scene1=new TimeLine();
//  粽子展开的场景
var scene2=new TimeLine();
//  粽子旋转
var scene3=new TimeLine();

scene1.add(1,function () {
    g('c_zongzi_box').className='c_zongzi_box c_zongzi_box_rock';
    g('c_shengzi').onclick=function () {
        scene2.start();
        g('c_shengzi').onclick=function () {

        }
    };
},'init');
//  定义粽子站展开的动画
scene2.add(1,function () {
    g('c_zongzi_box').className='c_zongzi_box';
    g('text').className='text text_in';
});
scene2.add(100,function () {
    g('c_shengzi').className='c_shengzi_2';
});
scene2.add(500,function () {
    g('c_shengzi').className='c_shengzi_3';
});
scene2.add(1000,function () {
    g('c_shengzi').className='c_shengzi_4';
    g('caption').className='caption caption_rock'
});
scene2.add(1500,function () {
    g('c_shengzi').className='c_shengzi_0';
});
scene2.add(2000,function () {
    g('c_zongzi').className='c_zongzi c_zongzi_out';
    g('c_zongzirou').className='c_zongzirou c_zongzirou_in';
    g('c_zuoye').className='c_zuoye c_zuoye_in';
    g('c_youye').className='c_youye c_youye_in';
});
scene2.add(3000,function () {
    g('c_zuoye').className='c_zuoye c_zuoye_in c_zuoye_out';
    g('c_youye').className='c_youye c_youye_in c_youye_out';
    g('c_diye').className='c_diye c_diye_in';
    g("c_text_1").className='c_text_1 c_text_in';
    g("c_text_2").className='c_text_2 c_text_mirror_0';
    scene3.start();
});


//  粽子托盘旋转
scene3.add(1000,function () {
    g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_1';
});
scene3.add(1200,function () {
    g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_2';
    g("c_text_1").className='c_text_1 c_text_in c_text_view_2';
    g("c_text_2").className='c_text_2 c_text_in c_text_mirror_2';
});
scene3.add(1400,function () {
    g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_3';
    g("c_text_1").className='c_text_1 c_text_in c_text_view_3';
    g("c_text_2").className='c_text_2 c_text_in c_text_mirror_3';
});
scene3.add(1600,function () {
    g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_4';
    g("c_text_1").className='c_text_1 c_text_in c_text_view_4';
    g("c_text_2").className='c_text_2 c_text_in c_text_mirror_4';
});
scene3.add(1800,function () {
    g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_0';
    g("c_text_1").className='c_text_1 c_text_in c_text_mirror_0';
    g("c_text_2").className='c_text_2  c_text_in c_text_view_0';
});
scene3.add(3000,function () {
    g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_4';
    g("c_text_1").className='c_text_1 c_text_in c_text_view_4';
    g("c_text_2").className='c_text_2 c_text_in c_text_mirror_4';
});
scene3.add(3200,function () {
    g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_3';
    g("c_text_1").className='c_text_1 c_text_in c_text_view_3';
    g("c_text_2").className='c_text_2 c_text_in c_text_mirror_3';
});
scene3.add(3400,function () {
    g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_2';
    g("c_text_1").className='c_text_1 c_text_in c_text_view_2';
    g("c_text_2").className='c_text_2 c_text_in c_text_mirror_2';
});
scene3.add(3600,function () {
    g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_1';
    g("c_text_1").className='c_text_1 c_text_in c_text_view_0';
    g("c_text_2").className='c_text_2 c_text_in c_text_mirror_0 ';
});
scene3.add(5000,function () {
    scene3.start();
});
// scene1.start(0);

var imgs=['img/zzr_2.png','img/zzr_3.png','img/zzr_4.png'];
var imgs_onload = function(){
    imgs.pop();
    if(imgs.length == 0){
        scene1.start()
    }
};
for(s in imgs){
    var img=new Image;
    img.onload = imgs_onload;
    img.src= imgs[s];
}
