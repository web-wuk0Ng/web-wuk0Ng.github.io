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
        '本站安全技术内容仅供合法学习与授权测试；任何滥用行为及其后果，均应由实施者自行承担，与本站及作者无关。',
        '阅读本站文章不代表获得任何目标的测试授权；擅自行动产生的责任，应由操作者本人承担。',
        '本站不支持未授权扫描；访客自行扫描他人系统造成的后果，与本站及作者无关。',
        '文中涉及的入侵思路只用于研究与防护；若被用于非法入侵，责任应由使用者自行承担。',
        '漏洞利用内容不构成攻击许可；将其用于真实目标所产生的责任，不应归于本站或作者。',
        '本站不会授意任何人攻击他人网站；借用文章实施攻击者，应对自己的行为负责。',
        '文中命令仅供合法环境验证；照搬至未授权系统造成的损失及责任，由执行者自行承担，与本站及作者无关。',
        '本站分享技术不等于鼓励盗号；利用相关知识窃取账号的责任，与本站及作者无关。',
        '密码测试内容仅适用于自有或已授权目标；擅自爆破他人账号者，应自行承担相应后果。',
        '数据库技术只供学习和安全测试；利用它窃取数据的行为，由实施者本人负责。',
        '本站不参与任何隐私窃取；访客滥用技术收集他人信息，应自行承担责任。',
        '木马分析内容用于防御研究；将其制作或投放至真实设备者，应对后果自行负责。',
        'WebShell相关内容只用于授权环境；擅自在他人服务器留后门，与本站及作者无关。',
        '本站不支持勒索软件的制作与传播；任何人自行实施，由其本人承担全部行为责任。',
        '压力测试知识须在授权范围内使用；未经许可发起DDoS造成的后果，应由发起者承担。',
        '自动化工具只是研究材料；用它批量攻击真实目标者，不能将责任推给本站或作者。',
        '钓鱼与社工内容用于识别风险和受控演练；用于欺骗他人的责任，由使用者自行承担。',
        '本站不会要求访客冒充他人套取信息；擅自实施此类行为者，应自行负责。',
        '摄像头、麦克风相关技术仅供防护研究；非法控制他人设备的责任，与本站及作者无关。',
        '无线安全内容只适用于自有或授权网络；攻击他人网络造成的影响及责任，由操作者承担，与本站及作者无关。',
        '内网渗透文章用于靶场和授权测试；擅自横向进入他人系统者，应自行承担责任。',
        '权限提升技术用于验证漏洞；借此控制未授权设备的后果，不应归责于本站或作者。',
        '身份验证绕过内容只供漏洞研究；用于侵入真实账户者，应对自己的行为负责。',
        '云安全知识不代表可以访问他人云资产；未经授权操作产生的责任，由实施者承担。',
        'API测试内容仅用于合法调试；借其窃取数据或消耗他人资源，与本站及作者无关。',
        '本站不支持利用他人设备挖矿；任何人自行实施，应承担由此产生的责任。',
        '僵尸网络相关内容只用于原理分析和防御；组建或使用者，应自行承担行为后果。',
        '供应链安全文章旨在帮助排查风险；向公共依赖植入恶意代码者，应独自负责。',
        '漏洞利用代码只应在隔离且获准的环境运行；超出该范围的责任，由执行者承担。',
        '本站提供的是研究资料，不是攻击服务；任何违法用途均属使用者个人行为。',
        '下载本站示例并不转移责任；如何使用、用于何处及造成何种后果，均由下载者自行判断并承担。',
        '复现文章案例前应自行确认授权；未经确认便操作，责任不应归于本站或作者。',
        '本站不参与访客针对第三方的测试；由此引发的故障、损失或纠纷，由访客自行承担，与本站及作者无关。',
        '相似域名和关联公司不因出现在文章中而自动获得测试许可；擅自触碰者应自行负责。',
        '外部链接与第三方工具仅作资料引用；访客自行使用产生的责任，与本站及作者无关。',
        '他人转载或改编本站内容后实施违法行为，相关责任由转载者、改编者或实施者承担，与本站及作者无关。',
        '基于本站内容开发的攻击工具，其制作、传播与使用责任，应由开发者和使用者承担。',
        '本站文章不能替代书面授权；任何人不得将“看过教程”当作越界理由，相关责任由实际操作人承担。',
        '比赛与靶场题解仅供学习；将同类手法用于现实系统者，应自行承担相应责任。',
        '教程展示风险是为了防护，不代表本站认可任何未授权利用；滥用责任归实施者。',
        '本站不对访客的具体操作作出指令；访客自行选择实施的行为，应由其本人负责。',
        '技术内容可能被用于不同环境，使用者须自行判断合法性；违规使用与本站及作者无关。',
        '因擅自修改、执行文中代码导致的系统损坏，应由实际操作人自行承担责任。',
        '因未授权测试造成的业务中断、数据丢失或经济损失，责任应由行为实施者承担。',
        '本站不为任何违法攻击提供背书；引用本站名称，也不能改变行为人的责任归属。',
        '“只是学习”不能成为攻击真实目标的借口；实际采取行动的人，应对结果自行负责。',
        '“只是试试”也不构成免责理由；未经授权使用本站技术者，应承担自己的行为后果。',
        '本站与作者不参与、不组织任何非法网络活动；访客自行实施的行为由其本人负责。',
        '请将本站内容用于学习、防护和合法授权测试；若选择滥用，相关责任应由使用者承担。',
        '最后说明一次：技术可以阅读，边界不可越过；擅自用于违法破坏，与本站及作者无关。'
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
