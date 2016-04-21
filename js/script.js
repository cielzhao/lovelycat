
    $(document).ready(
        function() {
            var nowpage = 0;
            //给最大的盒子增加事件监听
            $(".container").swipe(
                {
                    swipe:function(event, direction, distance, duration, fingerCount) {
                         if(direction == "up"){
                            nowpage = nowpage + 1;
                         }else if(direction == "down"){
                            nowpage = nowpage - 1;
                         }

                         if(nowpage > 4){
                            nowpage = 4;
                         }

                         if(nowpage < 0){
                            nowpage = 0;
                         }

                        $(".container").animate({"top":nowpage * -100 + "%"},400);

                        $(".page").eq(nowpage).addClass("cur").siblings().removeClass("cur");
                    }
                }
            );
        }
    );

    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    window.shareData = {
        "timeLineLink": "https://cielzhao.github.io/lovelycat/",    
        "sendFriendLink": "https://cielzhao.github.io/lovelycat/",
        "weiboLink": "https://cielzhao.github.io/lovelycat/",
        "tTitle": "《断章》",
        "tContent": "你站在桥上看风景",
        "fTitle": "看风景的人在楼上看你",
        "fContent": "明月装饰了你的窗子",
        "wContent": "你装饰了别人的梦"
        };
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url": "https://cielzhao.github.io/lovelycat/images/og.jpg",
                "img_width": "300",
                "img_height": "300",
                "link": window.shareData.sendFriendLink,
                "desc": window.shareData.fContent,
                "title": window.shareData.fTitle
            }, function (res) {
                _report('send_msg', res.err_msg);
            })
        });
        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": "https://cielzhao.github.io/lovelycat/images/og.jpg",
                "img_width": "300",
                "img_height": "300",
                "link": window.shareData.timeLineLink,
                "desc": window.shareData.tContent,
                "title": window.shareData.tTitle
            }, function (res) {
                _report('timeline', res.err_msg);
            });
        });
 
    }, false)；
