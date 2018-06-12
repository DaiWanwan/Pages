/**
 * Created by anthony on 2017/7/24.
 */
//第一步 数据定义（实际生产环节中有其他脚本给出，后台
var data=[
    {img:1,h1:'Creative',h2:'DUET'},
    {img:2,h1:'Friendly',h2:'DEVIL'},
    {img:3,h1:'Tranquilent',h2:'COMPATRIOT'},
    {img:4,h1:'Insecure',h2:'HUSSLER'},
    {img:5,h1:'Loving',h2:'REBEL'},
    {img:6,h1:'Passionate',h2:'SEEKER'},
    {img:7,h1:'Crazy',h2:'FRIEND'}
];
//第二步：通用函数 ，获得元素
var g=function (id) {
    //若是class则获取class值
    if(id.substr(0,1)=='.'){
        return document.getElementsByClassName(id.substr(1));
    }
    return document.getElementById(id)
};

//第三步 添加幻灯片的操作所有幻灯片—）
function addSliders() {
//    3.1 获取模板
    var tpl_main=g('Template_main').innerHTML
        .replace(/^\s*/,"").replace(/\s*$/,"");
    var tpl_ctrl=g('Template_ctrl').innerHTML
        .replace(/^\s*/,"").replace(/\s*$/,"");
//    3.2定义最终输出的HTML变量
    var out_main=[];
    var out_ctrl=[];
//    3.3遍历所有数据 构建最终输出效果
    var i;
    for( i in data){
       var _html_main= tpl_main
               .replace(/{{index}}/g,data[i].img)
               .replace(/{{h2}}/g,data[i].h2)
               .replace(/{{h3}}/g,data[i].h1)
               .replace(/{{css}}/g,['','main-i_right'][i%2]);
        var _html_ctrl=tpl_ctrl
                .replace(/{{index}}/g,data[i].img)
        out_main.push( _html_main);
        out_ctrl.push(_html_ctrl)
    }
//    3.4 把HTML回写到对应的DOM里面去
    g('Template_main').innerHTML=out_main.join('');
    g('Template_ctrl').innerHTML=out_ctrl.join('');
    //第七步 增加切换时的背景颜色#main_background
    g('Template_main').innerHTML+=tpl_main
        .replace(/{{index}}/g,'{{index}}')
        .replace(/{{h2}}/g,data[i].h2)
        .replace(/{{h3}}/g,data[i].h1);
    g('main_{{index}}').id='main_background';
}
// 第五步 幻灯片切换
function switchSlider(n) {
    var i;
    //5.1 获得要展现的幻灯片&控制按钮 DOM
    var main=g('main_'+n);
    var ctrl=g('ctrl_'+n);
    //5.2 获得所有的幻灯片级其控制按钮
    var clear_main=g('.main-i');
    var clear_ctrl=g('.ctrl-i');
    //5.3清除他们的active样式
    for(i=0;i<clear_ctrl.length;i++){
        clear_main[i].className=clear_main[i].className
            .replace(' main-i_active','');
        clear_ctrl[i].className=clear_ctrl[i].className
            .replace(' ctrl-i_active','');
    }
    //5.4 为当前幻灯片附加样式
    main.className+=' main-i_active';
    ctrl.className+=' ctrl-i_active';
//    7.2 切换是复制上一张幻灯片到 #main_background中
    setTimeout(function () {
        g('main_background').innerHTML=main.innerHTML;
    },1000);
}

//第六步 动态调整图片位置
function movePictures() {
    var pictures=g('.picture');
    for(i=0;i<pictures.length;i++){
        pictures[i].style.marginTop=(-1*pictures[i]
            .clientHeight/2)+'px'
    }
}

//第四部 定义何时处理幻灯片输出

window.onload=function () {
    addSliders();
    switchSlider(1);
    setTimeout(function () {
            movePictures();
    },100);

};
