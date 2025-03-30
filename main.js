// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add mobile menu functionality if needed
const mobileMenu = () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-menu');
  
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Instagram feed images (hardcoded from profile)
  const instagramPhotos = [
    'https://instagram.fpoa40-1.fna.fbcdn.net/v/t51.2885-15/411289838_18305091456344188_4603339404465474758_n.jpg',
    'https://instagram.fpoa40-1.fna.fbcdn.net/v/t51.2885-15/411051837_1488131585266145_3874861339941061377_n.jpg',
    'https://instagram.fpoa40-1.fna.fbcdn.net/v/t51.2885-15/409871334_1097661794963858_8377590829721320069_n.jpg'
  ];

  // Add Instagram feed to page
  const addInstagramFeed = () => {
    const feedContainer = document.querySelector('.instagram-feed');
    if (feedContainer) {
      instagramPhotos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = "Instagram Post"; // Added alt text
        img.classList.add('w-full', 'h-64', 'object-cover', 'rounded-lg');
        feedContainer.appendChild(img);
      });
    }
  };

  mobileMenu();
  addInstagramFeed();
});
