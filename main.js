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

document.addEventListener('DOMContentLoaded', function() {
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

  // Inicialização do sidenav (menu móvel)
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge: 'right',
    draggable: true,
    inDuration: 250,
    outDuration: 200
  });

  // Scroll suave para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Fechar o sidenav se estiver aberto (em telas móveis)
            var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
            if (sidenavInstance && sidenavInstance.isOpen) {
              sidenavInstance.close();
            }
            
            // Scroll suave para o elemento alvo
            window.scrollTo({
              top: targetElement.offsetTop - 60,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  });

  // Sticky header
  const header = document.querySelector('.navbar-fixed');
  const scrollWatcher = () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', scrollWatcher);

  // Animation on scroll for cards and sections
  const animateElements = document.querySelectorAll('.value-card, .benefit-card, .feature-card, .price-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animateElements.forEach(element => {
    observer.observe(element);
  });

  // Count up animation for stats
  const countElements = document.querySelectorAll('.count-up');
  
  countElements.forEach(element => {
    const target = parseInt(element.getAttribute('data-target'));
    let count = 0;
    const updateCount = () => {
      const increment = target / 100;
      if (count < target) {
        count += increment;
        element.innerText = Math.ceil(count);
        setTimeout(updateCount, 10);
      } else {
        element.innerText = target;
      }
    };
    updateCount();
  });

  // Testimonial carousel if exists
  const testimonialCarousel = document.querySelector('.testimonial-carousel');
  if (testimonialCarousel) {
    M.Carousel.init(testimonialCarousel, {
      fullWidth: true,
      indicators: true
    });
  }

  // Form validation for contact/signup forms
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('invalid');
        } else {
          field.classList.remove('invalid');
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  });

  // FAQ accordion if exists
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      answer.classList.toggle('active');
      question.classList.toggle('open');
    });
  });

  // WhatsApp button pulse animation
  const whatsappBtn = document.querySelector('.btn-whatsapp');
  if (whatsappBtn) {
    setTimeout(() => {
      whatsappBtn.classList.add('pulse');
    }, 2000);
  }
  
  // Add custom video controls if videos exist
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.addEventListener('click', function() {
      if (this.paused) {
        this.play();
      } else {
        this.pause();
      }
    });
  });
});
