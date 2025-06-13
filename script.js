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

    // BADGE ANIMATSIYASI (drop-shadow o‘rniga gradient background harakat)
    const badge = document.querySelector('.ai');
    let phase = 0;
    function animateBadge() {
        phase += 0.008; // Sekinroq harakat
        // Rang pozitsiyasini aylantirish
        let gradPos = 50 + 30 * Math.sin(phase);
        badge.style.background = `linear-gradient(135deg, #bfffe1 ${gradPos}%, #e6cdff 100%)`;
        // "Pulse" effekti uchun ozgina scale
        let scale = 1 + 0.02 * Math.sin(phase * 2);
        badge.style.transform = `scale(${scale})`;
        requestAnimationFrame(animateBadge);
    }
    animateBadge();
});
