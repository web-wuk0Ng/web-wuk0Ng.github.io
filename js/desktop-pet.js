(function () {
    'use strict';

    var pet = document.getElementById('linDesktopPet');
    var character = pet && pet.querySelector('.lin-pet-character');
    var bubble = pet && pet.querySelector('.lin-pet-bubble');
    var closeButton = pet && pet.querySelector('.lin-pet-close');
    var restoreButton = document.getElementById('linPetRestore');

    if (!pet || !character || !bubble || !closeButton || !restoreButton) return;

    var messages = [
        '在看什么？我也瞧瞧。',
        '林间有风，写累了便歇一会儿。',
        '这篇文章，倒有几分意思。',
        '既然来了，就留下些灵感吧。',
        '慢慢读，我一直在这里。'
    ];
    var messageIndex = 0;
    var hideTimer = 0;
    var drag = null;

    function speak() {
        messageIndex = (messageIndex + 1) % messages.length;
        bubble.textContent = messages[messageIndex];
        bubble.classList.add('is-visible');
        character.classList.remove('is-greeting');
        void character.offsetWidth;
        character.classList.add('is-greeting');
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(function () {
            bubble.classList.remove('is-visible');
        }, 3600);
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
