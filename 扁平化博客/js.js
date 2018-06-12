/**
 * Created by anthony on 2017/12/17.
 */
$(document).ready(function() {

// 导航栏的提示框
    var delay = {"show": 800, "hide": 800};
    $('[data-toggle="tooltip"]').tooltip(delay);
console.log(aaa)

    $("#nav-list li").click(function() {
        console.log(a)
        $(this).siblings('li').removeClass('active');  // 删除其他兄弟元素的样式

        $(this).addClass('active');     // 添加当前元素的样式
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;

    });







//    Mood






});