(() => {
  function install(shell) {
    const scroller = shell.querySelector('.toc-block');
    if (!scroller || shell.querySelector('.toc-scrollbar')) return;

    const track = document.createElement('div');
    track.className = 'toc-scrollbar';
    track.setAttribute('aria-hidden', 'true');
    const thumb = document.createElement('div');
    thumb.className = 'toc-scrollbar-thumb';
    track.appendChild(thumb);
    shell.appendChild(track);

    let dragging = false;
    let pointerStart = 0;
    let scrollStart = 0;

    function metrics() {
      const trackHeight = track.clientHeight;
      const ratio = Math.min(1, scroller.clientHeight / scroller.scrollHeight);
      const thumbHeight = Math.max(24, trackHeight * ratio);
      const travel = Math.max(0, trackHeight - thumbHeight);
      const scrollRange = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
      return { trackHeight, thumbHeight, travel, scrollRange };
    }

    function update() {
      const { thumbHeight, travel, scrollRange } = metrics();
      const overflowing = scrollRange > 2 && window.innerWidth > 768;
      track.hidden = !overflowing;
      if (!overflowing) return;
      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${scrollRange ? (scroller.scrollTop / scrollRange) * travel : 0}px)`;
    }

    thumb.addEventListener('pointerdown', (event) => {
      dragging = true;
      pointerStart = event.clientY;
      scrollStart = scroller.scrollTop;
      thumb.classList.add('dragging');
      thumb.setPointerCapture(event.pointerId);
      event.preventDefault();
    });
    thumb.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      const { travel, scrollRange } = metrics();
      if (travel) scroller.scrollTop = scrollStart + ((event.clientY - pointerStart) / travel) * scrollRange;
    });
    const stop = (event) => {
      if (!dragging) return;
      dragging = false;
      thumb.classList.remove('dragging');
      if (thumb.hasPointerCapture(event.pointerId)) thumb.releasePointerCapture(event.pointerId);
    };
    thumb.addEventListener('pointerup', stop);
    thumb.addEventListener('pointercancel', stop);
    track.addEventListener('pointerdown', (event) => {
      if (event.target === thumb) return;
      const { thumbHeight, scrollRange } = metrics();
      const ratio = (event.clientY - track.getBoundingClientRect().top - thumbHeight / 2) / Math.max(1, track.clientHeight - thumbHeight);
      scroller.scrollTop = Math.max(0, Math.min(scrollRange, ratio * scrollRange));
    });
    scroller.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    if ('ResizeObserver' in window) new ResizeObserver(update).observe(scroller);
    update();
  }

  document.querySelectorAll('.toc-shell').forEach(install);
})();
