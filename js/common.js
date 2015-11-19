    var imgUrl = "http://www.cathassist.org/pray/icon.png";
    var lineLink = "http://www.cathassist.org/pray/index.php";
    var descContent = "代祷本——天主教小助手";
    var shareTitle = "代祷本——天主教小助手";
    var appid = "wxe95ac80cef656f14";

    function shareFriend() {
        WeixinJSBridge.invoke('sendAppMessage',{
            "appid": appid,
            "img_url": imgUrl,
            "img_width": "640",
            "img_height": "640",
            "link": lineLink,
            "desc": descContent,
            "title": shareTitle
            }, function(res) {
            _report('send_msg', res.err_msg);
        });
    }

    function shareTimeline() {
        WeixinJSBridge.invoke('shareTimeline',{
            "img_url": imgUrl,
            "img_width": "640",
            "img_height": "640",
            "link": lineLink,
            "desc": descContent,
            "title": shareTitle
            }, function(res) {
            _report('timeline', res.err_msg);
        });
    }

    function shareWeibo() {
        WeixinJSBridge.invoke('shareWeibo',{
            "content": "#天主教小助手# " + descContent + lineLink,
            "url": lineLink,
            }, function(res) {
            _report('weibo', res.err_msg);
        });
    }

    // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function(argv){
            shareFriend();
        });

        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function(argv){
            shareTimeline();
        });

        // 分享到微博
        WeixinJSBridge.on('menu:share:weibo', function(argv){
            shareWeibo();
        });
    }, false);

    jQuery(document).ready(function() {

      $(".nav a").on("click", function(){
         $(".nav").find(".active").removeClass("active");
         $(this).parent().addClass("active");
      });

      var offset = 220;
      var duration = 850;
      jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > offset) {
              jQuery('.elevator-top').fadeIn(duration);
          } else {
              jQuery('.elevator-top').fadeOut(duration);
          }
      });
      
      jQuery('.elevator-top').click(function(event) {
          event.preventDefault();
          $(document.body).animate({scrollTop: 0}, duration);
          return false;
      });
    });
