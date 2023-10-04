$(function(){
  const defaultTop=parseInt($("#quick_menu").css("top"));
  $(window).on("scroll",function(){
    const scv=$(window).scrollTop();
    $("#quick_menu").stop().animate({top:scv+defaultTop+"px"},1000);  
  });

/*1초 만에 스크롤바가 이동된 만큼 퀵 메뉴가 애니메이션이 적용되어 이동됨.    
 이때 css를 이용해 문서 상단에서 벌린 100px 만큼 거리를 유지되도록 
 변수 defaultTop에 할당된 값을 더함.
*/
$('#quick_menu ul a').click(function(e){
    $.scrollTo(this.hash || 0, 1500); 
    e.preventDefault();
   });
});