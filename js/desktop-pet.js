(function () {
    'use strict';

    var pet = document.getElementById('linDesktopPet');
    var character = pet && pet.querySelector('.lin-pet-character');
    var bubble = pet && pet.querySelector('.lin-pet-bubble');
    var effects = pet && pet.querySelector('.lin-pet-effects');
    var closeButton = pet && pet.querySelector('.lin-pet-close');
    var restoreButton = document.getElementById('linPetRestore');

    if (!pet || !character || !bubble || !effects || !closeButton || !restoreButton) return;

    var messages = [
        '在看什么？我也瞧瞧。',
        '写累了便歇一会儿。',
        '这篇文章，倒有几分意思。',
        '既然来了，就留下些灵感吧。',
        '慢慢读，我一直在这里。',
        '嗯？你在叫我？',
        '我听见了。',
        '翻到哪一页了？'
    ];
    var reactions = ['is-greeting', 'is-floating', 'is-turning'];
    var messageIndex = 0;
    var hideTimer = 0;
    var reactionTimer = 0;
    var drag = null;

    function makePetals() {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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

    function speak() {
        var nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * messages.length);
        } while (messages.length > 1 && nextIndex === messageIndex);
        messageIndex = nextIndex;
        bubble.textContent = messages[messageIndex];
        bubble.classList.add('is-visible');
        react();
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(function () {
            bubble.classList.remove('is-visible');
        }, 4200);
    }

    function setHidden(hidden) {
        pet.classList.toggle('is-hidden', hidden);
        restoreButton.classList.toggle('is-visible', hidden);
        try {
            window.sessionStorage.setItem('lin-pet-hidden', hidden ? '1' : '0');
        } catch (error) {
            // Storage can be unavailable in privacy modes; the pet still works.
        }
    }

    closeButton.addEventListener('click', function () { setHidden(true); });
    restoreButton.addEventListener('click', function () { setHidden(false); });

    character.addEventListener('click', function () {
        if (!drag || !drag.moved) speak();
    });

    character.addEventListener('pointerdown', function (event) {
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
        character.releasePointerCapture(event.pointerId);
        pet.classList.remove('is-dragging');
        window.setTimeout(function () { drag = null; }, 0);
    }

    character.addEventListener('pointerup', finishDrag);
    character.addEventListener('pointercancel', finishDrag);

    try {
        if (window.sessionStorage.getItem('lin-pet-hidden') === '1') setHidden(true);
    } catch (error) {
        // Ignore storage access failures.
    }

    window.setTimeout(function () { bubble.classList.add('is-visible'); }, 900);
    hideTimer = window.setTimeout(function () { bubble.classList.remove('is-visible'); }, 4600);
}());
