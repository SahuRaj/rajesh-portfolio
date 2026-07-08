// Reveal rows as they enter the viewport
const rows = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && rows.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting){
        setTimeout(() => entry.target.classList.add('in'), i * 40);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  rows.forEach(row => io.observe(row));
} else {
  rows.forEach(row => row.classList.add('in'));
}
