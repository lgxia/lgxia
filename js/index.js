window.addEventListener("load", function () {

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


  })
  var D = document.querySelector(".d");
  var H = this.document.querySelector(".h");
  var M = this.document.querySelector(".mi");
  var S = document.querySelector(".s");
  this.setInterval(countTime, 1000);
  function countTime() {
    var recentime = +new Date();//取得到1997年到当前时间的毫秒值
    var respect = +new Date("2022-7-26 22:00:00");//获取活动时间到1997年的毫秒值
    var distance = respect - recentime;
    var day = parseInt(distance / 1000 / 60 / 60 / 24);//剩余的天数
    day = day < 10 ? "0" + day : day;
    var hours = parseInt(distance / 1000 / 60 / 60 % 24);//剩余小时
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = parseInt(distance / 1000 / 60 % 60);//剩余分钟
    minutes = minutes < 10 ? "0" + minutes : minutes;
    minutes = minutes < 0 ? "0" + "0" : minutes;
    var seconds = parseInt(distance / 1000 % 60);//剩余的秒数
    seconds = seconds < 10 ? "0" + seconds : seconds;
    D.innerHTML = day;
    H.innerHTML = hours;
    M.innerHTML = minutes;
    S.innerHTML = seconds;
  }
  // return "还剩：" + day + "天" + hours + "时" + minuses + "分" + seconds + "秒"
  // var d = new Date();
  // const newLocal = d.valueOf();
  // 为导航栏建立点击事件
  // var rightNav=this.document.querySelector(".rightNav");
  // var ul1=document.rightNav.querySelector(ul);
  // var li1=document.rightNav.ul.querySelector(li);
  // var rightContent=document.querySelector("rightContent");
  // var li2=document.rightContent.querySelector("li")
  $(function () {
    $("#left li").mouseover(function () {
      //query的隐式迭代，为每一个小li绑定了一个点击事件
      var index = $(this).index();
      //获取每一个小li的值 
      $(".centerpicture .rightContent").show();
      $(".rightContent li").eq(index).show();
      // console.log(index);
      //隐藏除此之外的兄弟
      $(".rightContent li").eq(index).siblings().hide();
      $(".centerpicture .swiper").hide();
    });


    $(".rightContent li p").mouseover(function () {
      $(".centerpicture .swiper").hide();

    });
    $("body").click(function () {
      $(".centerpicture .swiper").show();
      $(".rightContent").hide();

    });



  })


})
