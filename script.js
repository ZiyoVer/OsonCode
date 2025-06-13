document.addEventListener("DOMContentLoaded", function() {
    // SHARIKLAR ANIMATSIYASI
    const purple = document.querySelector('.shape-purple');
    const green = document.querySelector('.shape-green');
    let t = 0;
    function animateBubbles() {
        t += 0.02;
        purple.style.transform = `translateY(${Math.sin(t) * 16}px)`;
        green.style.transform = `translateY(${Math.cos(t) * 16}px)`;
        requestAnimationFrame(animateBubbles);
    }
    animateBubbles();


    //bu bilan dasturlashni organing degan animatsiya
    const badge = document.querySelector('.ai');
    let phase = 0;

    function animateBadge() {
        phase += 0.013;

        let gradPos = 50 + 38 * Math.sin(phase * 0.89);
        badge.style.background = 
          `linear-gradient(120deg, #bfffe1 ${gradPos}%, #6df0b3 80%, #cd9dfe 100%)`;

        let scale = 1 + 0.045 * Math.sin(phase * 1.18);
        badge.style.transform = `scale(${scale})`;

        let glowAlpha = 0.16 + 0.12 * Math.abs(Math.sin(phase * 0.7));
        badge.style.boxShadow =
          `0 2px 14px 0 rgba(128,0,255,${glowAlpha}),
           0 1px 18px 0 rgba(0,255,136,${glowAlpha*0.6}),
           0 0 12px 1px rgba(80,255,240,${glowAlpha*0.45})`;

        let txtGlow = 0.11 + 0.08 * Math.abs(Math.cos(phase * 1.6));
        badge.style.textShadow = `0 2px 10px rgba(110,220,245,${txtGlow})`;

        requestAnimationFrame(animateBadge);
    }
    animateBadge();
});
