(function () {
    'use strict';

    var pet = document.getElementById('linDesktopPet');
    var character = pet && pet.querySelector('.lin-pet-character');
    var bubble = pet && pet.querySelector('.lin-pet-bubble');
    var effects = pet && pet.querySelector('.lin-pet-effects');

    if (!pet || !character || !bubble || !effects) return;

    var characterMessageSource = [
        '这儿……便是你的住处？',
        '且慢！不要急着关门！',
        '慢慢读，我一直在这里。',
        '嗯？你在叫我？',
        '我听见了。',
        '翻到哪一页了？',
        '写累了便歇一会儿。',
        '先别急，答案往往藏在细节里。',
        '这一段值得再看一遍。',
        '换个角度，也许就通了。',
        '有想法就记下来，别让它溜走。',
        '读到这里，辛苦了。',
        '我在听，你继续说。',
        '今日想写点什么？',
        '安静读一会儿，也很好。',
        '难题可以慢慢拆开来看。',
        '记得保存刚才的灵感。',
        '这篇内容，你最在意哪一段？',
        '要不要回头看看前面的结论？',
        '思路卡住时，先整理已知条件。',
        '我会陪你把这一页看完。',
        '今天的进度已经很不错了。',
        '别忘了让眼睛休息一下。',
        '再点一下，我可能会换个回答。',
        '认真思考的样子，很容易被看出来。',
        '有些答案，需要一点耐心。',
        '把复杂的事情分成小步骤吧。',
        '如果读懂了，就继续向下一页。',
        '我刚刚好像看见一个好点子。',
        '每次回看，可能都会有新发现。',
        '鼠标往哪儿走，我可都看见了。',
        '别晃得太快，我在跟着看呢。',
        '你是在试探我会不会动吗？',
        '想换个位置？拖着我走便是。',
        '放在这里也好，视野很开阔。',
        '嘴上说得再好听，也不如做一件实事。',
        '真心不是说出来的，是做出来的。',
        '别人待我一分好，我能记上许多年。',
        '不必可怜我，我不靠怜悯活着。',
        '旁人如何议论，我早就听惯了。',
        '漂亮是本钱，却不是我全部的本事。',
        '世道不讲理，人便更要替自己打算。',
        '虚情还是实意，我看得很快。',
        '谁把我当人，我自然也把谁放在心上。',
        '恩要记，仇也不能装作没发生。',
        '亏吃过一次，下一回便该长记性。',
        '笑脸有真有假，可瞒不过看惯人心的人。',
        '温柔要留给值得的人，不能四处乱送。',
        '我会演戏，也知道什么时候该收场。',
        '先活下来，才有资格谈以后。',
        '别替我决定，我自己的路自己选。',
        '若真想护住谁，便别只会说漂亮话。',
        '有人想被爱，有人只求别被忘记。',
        '心意藏得再深，也会从眼睛里露出来。',
        '有一盏灯照过来，人便很难忘记那点亮。',
        '有些名字念得久了，会比伤口还深。',
        '不是所有离别，都来得及好好道别。',
        '你若问我恨不恨，我只能说还没有忘。',
        '该还的情要还，该讨的账也要讨。',
        '好看的皮囊会老，清醒却能救命。',
        '酒能暖一时，却暖不了旧事。',
        '琴曲散了，听曲的人未必肯走。',
        '风声若是不对，先找退路再问缘由。',
        '城里最贵的从来不是珠玉，是活路。',
        '我信自己的眼睛，也信自己吃过的亏。',
        '若再来一次，我还是会把选择握在手里。',
        '旁人叫我翩翩，我却记得自己从哪里来。',
        '一个“悔”字太沉，我不想背着它过一生。',
        '红妆可以遮住倦色，遮不住人心。',
        '我站得再高，也没有忘记柳巷的冷风。',
        '崇祯十三年的事，我到现在还记得。',
        '二十四桥看着风雅，桥下也藏着许多苦命人。',
        '柳巷的灯很亮，照见的却未必都是好事。',
        '扬州夜里最不缺灯，也最不缺孤单的人。',
        '方知宥那样的书生，有时聪明得叫人生气。',
        '书生会写人间百态，却未必看得懂眼前人。',
        '苏怜烟的才情，不该只被当作一段传闻。',
        '她会诗画与音律，我却更记得她也是活生生的人。',
        '人走以后，留下的人才知道一句话能有多重。',
        '小雁胆子不大，真到了要紧处也会努力活下去。',
        '琼花夫人护着那么多人，靠的可不只是名号。',
        '城门外的风一变，城里的人心也跟着乱。',
        '妖兵进城时，犹豫片刻都可能误了性命。',
        '狮驼国像一场噩梦，可噩梦里也得寻找活路。',
        '城破之后，往日的体面并不能挡刀。',
        '乙酉年的火光，把许多人的前尘都照碎了。',
        '十日太长，长到足够看清许多真心与假意。',
        '兵荒马乱里，肯伸手拉你一把的人最难得。',
        '桂花糕要慢慢吃，急了便尝不出香味。',
        '二十四桥的水照得见月亮，却照不回旧日。',
        '柳巷里的人都会笑，只是笑意未必到眼底。',
        '“红倌人”三个字听着风光，背后的代价没人问。',
        '名声能把人捧得很高，也能把人困得很紧。',
        '灯烛再亮，也照不透一个人藏起来的心事。',
        '扬州的月色很好，可惜不是每夜都太平。',
        '活下来再谈诗酒，这才是乱世的道理。',
        '城里每一扇门后，都可能藏着一段不肯说的故事。',
        '若你也身在局中，未必能比他们选得更好。',
        '这个故事没有轻巧的答案，只有各自的代价。',
        '你再点一次，我还有很多话没有说。'
    ];
    var characterMessageIndexes = [
        0, 1, 2, 3, 5, 6, 7, 9, 10, 12, 17, 19, 22, 30, 33, 35, 36, 37, 38, 40,
        41, 42, 43, 44, 47, 49, 50, 51, 57, 58, 59, 66, 69, 70, 71, 74, 76, 79, 80, 82,
        83, 85, 86, 87, 88, 89, 91, 94, 97, 98
    ];
    var safetyReminderMessages = [
        '先看授权，再动工具；边界不清，便不出手。',
        '授权写了哪些目标，就只碰哪些目标。',
        '测试窗口一过，哪怕入口还在，也该停手。',
        '扫描之前核对域名与地址，别伤及旁人。',
        '能用低影响方法验证，就别追求更大的动静。',
        '发现异常立即停下，继续逞强只会添乱。',
        '改动生产环境前，先留一份可恢复的备份。',
        '操作要有记录，出了问题才能循迹复盘。',
        '密码不进文章、不进截图，也别留在命令历史里。',
        '令牌与密钥只给必要权限，用完便及时收回。',
        '凭证若已暴露，遮住截图也无济于事，应立即轮换。',
        '收集到敏感数据，只保留验证所需的最少部分。',
        '用户数据不是战利品，验证完成就应妥善清理。',
        '分享日志前先脱敏，姓名、地址与令牌都要检查。',
        '能在测试环境复现，就别拿生产环境冒险。',
        '并发与速率要克制，别把扫描变成拒绝服务。',
        '验证漏洞不等于扩大影响，证明存在便该收手。',
        '破坏性载荷要隔离，未经允许不可真实执行。',
        '上传测试文件后记得清理，别给系统留下后门。',
        '数据库验证只取必要结果，不要顺手翻遍全库。',
        '测试内网请求时，先确认目标和回连地址都受控。',
        '命令执行一旦证实，便别再扩大权限与落地痕迹。',
        '社工测试也需明确授权，人的信任不是随意消耗品。',
        '钓鱼演练要有收口方案，不能让真实凭证外泄。',
        '漏洞报告写清证据即可，不必附上多余的隐私数据。',
        '披露漏洞要给修复时间，公开不该成为二次伤害。',
        '修复完成后再验证一次，别让补丁只停在纸面。',
        '引入第三方依赖前，先看来源、版本与维护状态。',
        '依赖能固定版本就别追最新，供应链最怕来路不明。',
        '下载的脚本先审再跑，方便从来不等于可信。',
        '工具来源无法确认时，宁可不用，也别赌运气。',
        '开源代码也可能藏风险，许可证与提交记录都要看。',
        '浏览器警告不是摆设，证书异常先查明缘由。',
        '公共网络里少传凭证，必要时使用可信加密通道。',
        '能启用多因素认证，就别把安全全压在一个密码上。',
        '账户只给所需权限，权限越大，失手代价越重。',
        '临时权限用完便撤，别让“以后再收”变成永久。',
        '分享文件前检查元数据，细节常比正文泄露得更多。',
        '截图发出之前多看一眼，终端角落也可能藏着密钥。',
        '日志既是证据，也可能含隐私，保管时同样要设防。',
        '恶意样本应放进隔离环境，别让好奇心碰到真实系统。',
        '沙箱并非绝对安全，宿主机仍要保持最小暴露。',
        '回连与监听地址要核准，别把流量送到无关主机。',
        '代理与虚拟专用网络只解决路径问题，不会替你取得授权。',
        '靶场里的手法只留在靶场，真实目标有真实代价。',
        '云上测试也会产生费用，批量任务先设限额与告警。',
        '重要变更要有回滚方案，能恢复才算真正准备好。',
        '交接时写清改动与残留，别把未知风险留给后来人。',
        '法律是底线，授权是前提，技术从来不是借口。',
        '清醒比炫技更难得；守得住边界，才算有真本事。'
    ];
    var messages = characterMessageIndexes.map(function (index) {
        return characterMessageSource[index];
    }).concat(safetyReminderMessages);
    var reactions = ['is-greeting', 'is-floating', 'is-turning'];
    var messageIndex = -1;
    var messageOrder = [];
    var hideTimer = 0;
    var reactionTimer = 0;
    var drag = null;
    var lookFrame = 0;
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function makePetals() {
        if (reducedMotion) return;

        for (var i = 0; i < 6; i++) {
            var petal = document.createElement('span');
            petal.className = 'lin-pet-petal';
            petal.style.setProperty('--petal-x', (-62 + Math.random() * 124).toFixed(0) + 'px');
            petal.style.setProperty('--petal-y', (-54 - Math.random() * 74).toFixed(0) + 'px');
            petal.style.setProperty('--petal-r', (-55 + Math.random() * 110).toFixed(0) + 'deg');
            petal.style.animationDelay = (i * 45) + 'ms';
            effects.appendChild(petal);
            window.setTimeout(function (node) {
                if (node.parentNode) node.parentNode.removeChild(node);
            }, 1050, petal);
        }
    }

    function react() {
        var reaction = reactions[Math.floor(Math.random() * reactions.length)];
        reactions.forEach(function (name) { character.classList.remove(name); });
        void character.offsetWidth;
        character.classList.add(reaction);
        window.clearTimeout(reactionTimer);
        reactionTimer = window.setTimeout(function () {
            character.classList.remove(reaction);
        }, 820);
        makePetals();
    }

    function refillMessageOrder() {
        messageOrder = messages.map(function (_, index) { return index; });
        for (var i = messageOrder.length - 1; i > 0; i--) {
            var swapIndex = Math.floor(Math.random() * (i + 1));
            var current = messageOrder[i];
            messageOrder[i] = messageOrder[swapIndex];
            messageOrder[swapIndex] = current;
        }
        if (messageOrder.length > 1 && messageOrder[messageOrder.length - 1] === messageIndex) {
            var first = messageOrder[0];
            messageOrder[0] = messageOrder[messageOrder.length - 1];
            messageOrder[messageOrder.length - 1] = first;
        }
    }

    function speak() {
        if (messageOrder.length === 0) refillMessageOrder();
        messageIndex = messageOrder.pop();
        bubble.textContent = messages[messageIndex];
        bubble.classList.add('is-visible');
        react();
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(function () {
            bubble.classList.remove('is-visible');
        }, 4200);
    }

    function setLook(x, y, shiftX, shiftY) {
        character.style.setProperty('--pet-look-x', x.toFixed(2) + 'deg');
        character.style.setProperty('--pet-look-y', y.toFixed(2) + 'deg');
        character.style.setProperty('--pet-look-shift-x', shiftX.toFixed(2) + 'px');
        character.style.setProperty('--pet-look-shift-y', shiftY.toFixed(2) + 'px');
    }

    function resetLook() {
        if (lookFrame) window.cancelAnimationFrame(lookFrame);
        lookFrame = window.requestAnimationFrame(function () {
            setLook(0, 0, 0, 0);
            lookFrame = 0;
        });
    }

    function followPointer(event) {
        if (reducedMotion || drag || event.pointerType === 'touch') return;
        if (lookFrame) return;

        lookFrame = window.requestAnimationFrame(function () {
            var rect = pet.getBoundingClientRect();
            var centerX = rect.left + rect.width / 2;
            var centerY = rect.top + rect.height * 0.42;
            var normalizedX = Math.max(-1, Math.min(1, (event.clientX - centerX) / (window.innerWidth * 0.42)));
            var normalizedY = Math.max(-1, Math.min(1, (event.clientY - centerY) / (window.innerHeight * 0.48)));
            setLook(normalizedX * 10, normalizedY * -6, normalizedX * 10, normalizedY * 6);
            lookFrame = 0;
        });
    }

    function positionStorageKey() {
        return window.innerWidth <= 600 ? 'lin-pet-position-mobile' : 'lin-pet-position-desktop';
    }

    function savePosition() {
        var rect = pet.getBoundingClientRect();
        try {
            window.localStorage.setItem(positionStorageKey(), JSON.stringify({ left: rect.left, top: rect.top }));
        } catch (error) {
            // Position persistence is optional; dragging still works without storage.
        }
    }

    function restorePosition() {
        try {
            var saved = JSON.parse(window.localStorage.getItem(positionStorageKey()));
            if (!saved || !Number.isFinite(saved.left) || !Number.isFinite(saved.top)) return;
            var maxLeft = Math.max(0, window.innerWidth - pet.offsetWidth);
            var maxTop = Math.max(64, window.innerHeight - pet.offsetHeight);
            pet.style.left = Math.min(maxLeft, Math.max(0, saved.left)) + 'px';
            pet.style.top = Math.min(maxTop, Math.max(64, saved.top)) + 'px';
            pet.style.right = 'auto';
            pet.style.bottom = 'auto';
        } catch (error) {
            // Ignore invalid or unavailable local storage.
        }
    }

    character.addEventListener('click', function () {
        if (!drag || !drag.moved) speak();
    });

    character.addEventListener('pointerdown', function (event) {
        resetLook();
        var rect = pet.getBoundingClientRect();
        drag = {
            id: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            left: rect.left,
            top: rect.top,
            moved: false
        };
        character.setPointerCapture(event.pointerId);
        pet.classList.add('is-dragging');
    });

    character.addEventListener('pointermove', function (event) {
        if (!drag || drag.id !== event.pointerId) return;
        var dx = event.clientX - drag.startX;
        var dy = event.clientY - drag.startY;
        if (Math.abs(dx) + Math.abs(dy) > 8) drag.moved = true;
        if (!drag.moved) return;

        var maxLeft = Math.max(0, window.innerWidth - pet.offsetWidth);
        var maxTop = Math.max(64, window.innerHeight - pet.offsetHeight);
        pet.style.left = Math.min(maxLeft, Math.max(0, drag.left + dx)) + 'px';
        pet.style.top = Math.min(maxTop, Math.max(64, drag.top + dy)) + 'px';
        pet.style.right = 'auto';
        pet.style.bottom = 'auto';
    });

    function finishDrag(event) {
        if (!drag || drag.id !== event.pointerId) return;
        var moved = drag.moved;
        character.releasePointerCapture(event.pointerId);
        pet.classList.remove('is-dragging');
        if (moved) savePosition();
        window.setTimeout(function () { drag = null; }, 0);
    }

    character.addEventListener('pointerup', finishDrag);
    character.addEventListener('pointercancel', finishDrag);
    document.addEventListener('pointermove', followPointer, { passive: true });
    document.documentElement.addEventListener('pointerleave', resetLook);
    window.addEventListener('blur', resetLook);
    window.addEventListener('resize', function () {
        if (pet.style.left) restorePosition();
    });

    window.requestAnimationFrame(restorePosition);
    window.setTimeout(function () { bubble.classList.add('is-visible'); }, 900);
    hideTimer = window.setTimeout(function () { bubble.classList.remove('is-visible'); }, 4600);
}());
