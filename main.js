// ページ読み込み完了後に実行
document.addEventListener("DOMContentLoaded", function () {
  
  // 1. ページ内リンクのスムーススクロール
  var smoothLinks = document.querySelectorAll('a[href^="#"]');
  
  smoothLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 2. 画像クリックでモーダル拡大機能
  var images = document.querySelectorAll('main img');
  
  images.forEach(function (img) {
    img.style.cursor = 'pointer';
    
    img.addEventListener('click', function () {
      var overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = '9999';

      var enlargedImg = document.createElement('img');
      enlargedImg.src = img.src;
      enlargedImg.alt = img.alt;
      enlargedImg.style.maxWidth = '90%';
      enlargedImg.style.maxHeight = '90%';
      enlargedImg.style.borderRadius = '8px';

      overlay.appendChild(enlargedImg);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', function () {
        document.body.removeChild(overlay);
      });
    });
  });
});