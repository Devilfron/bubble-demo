// Отримуємо елементи зі сторінки
const heart = document.getElementById('heart');
const startBtn = document.getElementById('startAnimationBtn');

// Додаємо обробник кліку
startBtn.addEventListener('click', () => {
  // Якщо серце вже анімоване — зупиняємо
  if (heart.classList.contains('animate')) {
    heart.classList.remove('animate');
    startBtn.textContent = '❤️ Запустити анімацію';
  } else {
    // Якщо ні — запускаємо
    heart.classList.add('animate');
    startBtn.textContent = '⏸ Зупинити анімацію';
  }
});
