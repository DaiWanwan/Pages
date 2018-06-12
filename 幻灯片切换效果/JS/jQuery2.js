/**
 * Created by anthony on 2017/7/25.
 */

$(document).ready(function () {
    $('.main-1').addClass('main-i_active');
    $('.ctrl-1').addClass('ctrl-i_active');
    var $ctrl_i=$('.ctrl-i');
    var i=1;
    var ii=5;
   $ctrl_i.click(function () {
        var $Class = this.id.split('-')[1];
        ii=$Class;
        $('.main-i').removeClass('main-i_active');
        $('.ctrl-i').removeClass('ctrl-i_active');
        $('.main-'+ii).addClass('main-i_active');
        $('.ctrl-'+ii).addClass('ctrl-i_active');
    });
    setInterval(function () {
        if(i!=ii){
            i=ii;
        }
        $('.main-'+i).removeClass('main-i_active');
        $('.ctrl-'+i).removeClass('ctrl-i_active');
        if(i>=7){
            i=1;
        }else{
            i+=1;
        }
        $('.main-'+i).addClass('main-i_active');
        $('.ctrl-'+i).addClass('ctrl-i_active');
    },3000)

});



$(function(){
    var c;
    $("#ctrl-1").click(function(){
        c=111;
    });
    $(function(){
        $("#ctrl-2").click(function(){
            alert(c);
        });
    });
});