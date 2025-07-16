window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

const video = document.getElementById('bgVideo');
const btn = document.getElementById('toggleBtn');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    video.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});
