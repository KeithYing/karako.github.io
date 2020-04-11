$(function() {
        $('.toggle-sidebar-info > span').on('click', function() {
            var toggleText = $(this).attr('data-toggle')
            $(this).attr('data-toggle', $(this).text())
            $(this).text(toggleText)
            changeSideBarInfo()
        })
        $('#toggle-sidebar').on('click', function() {
            if (!isMobile() && $('#sidebar').is(':visible')) {
                var isOpen = $(this).hasClass('on')
                isOpen ? $(this).removeClass('on') : $(this).addClass('on')
                if (isOpen) {
                    $('#page-header').removeClass('open-sidebar')
                    $('body').velocity('stop').velocity({
                        paddingLeft: '0px'
                    }, {
                        duration: 200
                    })
                    $('#sidebar').velocity('stop').velocity({
                        translateX: '0px'
                    }, {
                        duration: 200
                    })
                    $('#toggle-sidebar').velocity('stop').velocity({
                        rotateZ: '0deg',
                        color: '#1F2D3D'
                    }, {
                        duration: 200
                    })
                } else {
                    $('#page-header').addClass('open-sidebar')
                    $('body').velocity('stop').velocity({
                        paddingLeft: '300px'
                    }, {
                        duration: 200
                    })
                    $('#sidebar').velocity('stop').velocity({
                        translateX: '300px'
                    }, {
                        duration: 200
                    })
                    $('#toggle-sidebar').velocity('stop').velocity({
                        rotateZ: '180deg',
                        color: '#99a9bf'
                    }, {
                        duration: 200
                    })
                }
            }
        })

        function changeSideBarInfo() {
            if ($('.author-info').is(':visible')) {
                $('.author-info').velocity('stop')
                    .velocity('transition.slideLeftOut', {
                        duration: 300,
                        complete: function() {
                            $('.sidebar-toc').velocity('stop')
                                .velocity('transition.slideRightIn', { duration: 500 })
                        }
                    })
            } else {
                $('.sidebar-toc').velocity('stop')
                    .velocity('transition.slideRightOut', {
                        duration: 300,
                        complete: function() {
                            $('.author-info').velocity('stop')
                                .velocity('transition.slideLeftIn', { duration: 500 })
                        }
                    })
            }
        }
    })
    /* ######################################################################################### */
var chakhsu = function(r) {
    function t() {
        return b[Math.floor(Math.random() * b.length)]
    }

    function e() {
        return String.fromCharCode(94 * Math.random() + 33)
    }

    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var l = document.createElement("span");
            l.textContent = e(),
                l.style.color = t(),
                n.appendChild(l)
        }
        return n
    }

    function i() {
        var t = o[c.skillI];
        c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")),
            r.textContent = c.text,
            r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))),
            setTimeout(i, d)
    }
    var l = "一个喜欢",
        o = [
            "动漫的中二病患者",
            "码代码的代码工匠",
            "分享生活的文艺青年"
        ].map(function(r) {
            return r
        }),
        a = 3, // 变换停滞时间(单位为秒s)
        g = 1,
        s = 5, // 混乱字符数
        d = 75, // 间隔时间
        /* 混乱字符颜色 */
        b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
        c = {
            text: "",
            prefixP: -s,
            skillI: 0,
            skillP: 0,
            direction: "forward",
            delay: a,
            step: g
        };
    i()
};
chakhsu(document.getElementsByClassName("author-info__like")[0]);