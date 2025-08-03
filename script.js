// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile Navigation
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add glow effect on scroll for specific elements
                if (entry.target.classList.contains('about-card') || 
                    entry.target.classList.contains('highlight-item') ||
                    entry.target.classList.contains('skill-category') ||
                    entry.target.classList.contains('contact-item')) {
                    entry.target.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.3)';
                    setTimeout(() => {
                        entry.target.style.boxShadow = '';
                    }, 1000);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-card, .highlight-item, .timeline-item, .skill-category, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Typing Effect
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title .highlight');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            
            // Add glow effect during typing
            heroTitle.style.textShadow = '0 0 20px rgba(99, 102, 241, 0.5)';
            setTimeout(() => {
                heroTitle.style.textShadow = '';
            }, 100);
            
            setTimeout(typeWriter, 150);
        }
    };
    
    // Start typing effect after page load
    setTimeout(typeWriter, 1000);
}

// Tech Sphere Interactions
function initTechSphere() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.5)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = '';
            icon.style.boxShadow = '';
        });
    });
}

// Timeline Interactions
function initTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const marker = item.querySelector('.marker-dot');
            marker.style.transform = 'translateX(-50%) scale(1.3)';
            marker.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.5)';
        });
        
        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.marker-dot');
            marker.style.transform = 'translateX(-50%) scale(1)';
            marker.style.boxShadow = '';
        });
    });
}

// Skill Interactions
function initSkillInteractions() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const skillName = item.getAttribute('data-skill');
            showSkillTooltip(item, skillName);
            
            // Add glow effect
            item.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.3)';
        });
        
        item.addEventListener('mouseleave', () => {
            hideSkillTooltip();
            item.style.boxShadow = '';
        });
    });
}

function showSkillTooltip(element, skillName) {
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    tooltip.textContent = skillName;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(15, 15, 35, 0.95);
        color: #6366f1;
        padding: 10px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        pointer-events: none;
        z-index: 1000;
        transform: translateY(-100%);
        margin-top: -15px;
        border: 1px solid rgba(99, 102, 241, 0.3);
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.top + 'px';
}

function hideSkillTooltip() {
    const tooltip = document.querySelector('.skill-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Language Progress Animation
function initLanguageProgress() {
    const progressBars = document.querySelectorAll('.language-fill');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                    progressBar.style.boxShadow = '0 0 10px rgba(99, 102, 241, 0.3)';
                }, 500);
                
                progressObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Button Interactions
function initButtonInteractions() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
            button.style.boxShadow = '';
        });
        
        button.addEventListener('click', (e) => {
            createRippleEffect(e, button);
        });
    });
}

function createRippleEffect(event, button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(99, 102, 241, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.8s linear;
        pointer-events: none;
        z-index: 1;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 800);
}

// Parallax Effect
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.gradient-orb');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Back to Top Button functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Download CV functionality
function initDownloadCV() {
    const downloadBtn = document.getElementById('downloadCV');
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Create download link
        const link = document.createElement('a');
        link.href = './cv-yigit-kutay-gulben.pdf';
        link.download = 'Yigit-Kutay-Gulben-CV.pdf';
        link.style.display = 'none';
        
        // Add to DOM and trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success notification
        showNotification('CV download started!', 'success');
    });
}

// Simple notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(99, 102, 241, 0.9)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 500;
        backdrop-filter: blur(10px);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Logo click to scroll to top
function initLogoScrollToTop() {
    const logoIcon = document.getElementById('logoIcon');
    if (!logoIcon) return;
    
    logoIcon.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize internationalization first
    initLanguageSwitcher();
    updatePageContent();
    
    // Initialize all features
    initSmoothScrolling();
    initMobileNav();
    initScrollAnimations();
    initTypingEffect();
    initTechSphere();
    initTimelineInteractions();
    initSkillInteractions();
    initLanguageProgress();
    initButtonInteractions();
    initParallaxEffect();
    initDownloadCV();
    initBackToTop();
    initLogoScrollToTop();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes glow {
            0%, 100% { 
                filter: brightness(1) drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
            }
            50% { 
                filter: brightness(1.2) drop-shadow(0 0 20px rgba(99, 102, 241, 0.5));
            }
        }
        
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-30px) rotate(120deg); }
            66% { transform: translateY(30px) rotate(240deg); }
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes counter-rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(style);
});

// Enhanced hover effects for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.about-card, .highlight-item, .skill-category, .contact-item, .timeline-content');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 20px rgba(99, 102, 241, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
});

// Smooth reveal animations
const revealElements = document.querySelectorAll('.section-header, .hero-content, .about-content, .experience-timeline, .skills-grid, .contact-content');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    revealObserver.observe(el);
});

// Internationalization Functions
function updatePageContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (translation && translation !== key) {
            element.textContent = translation;
        }
    });
    
    // Update current language display
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = currentLanguage.toUpperCase();
    }
    
    // Update dropdown active states
    updateCurrentLanguageDisplay();
    
    // Update page title
    document.title = `${t('hero_name_first')} ${t('hero_name_last')} - ${t('hero_badge')}`;
    
    // Reset typing effect for the name if language changed
    if (document.querySelector('.hero-title .highlight')) {
        resetTypingEffect();
    }
}

function initLanguageSwitcher() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (!languageBtn || !languageDropdown) return;
    
    // Toggle dropdown
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        languageDropdown.classList.remove('active');
    });
    
    // Handle language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');
            
            if (selectedLang !== currentLanguage) {
                setLanguage(selectedLang);
                
                // Add smooth transition effect
                document.body.style.opacity = '0.8';
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 200);
            }
            
            languageDropdown.classList.remove('active');
        });
        
        // Highlight current language
        if (option.getAttribute('data-lang') === currentLanguage) {
            option.classList.add('active');
        }
        
        // Add hover effects
        option.addEventListener('mouseenter', () => {
            option.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
        });
        
        option.addEventListener('mouseleave', () => {
            option.style.backgroundColor = '';
        });
    });
    
    // Update current language display
    updateCurrentLanguageDisplay();
}

function updateCurrentLanguageDisplay() {
    const currentLangElement = document.getElementById('currentLang');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (currentLangElement) {
        currentLangElement.textContent = currentLanguage.toUpperCase();
    }
    
    // Update active state for language options
    languageOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === currentLanguage) {
            option.classList.add('active');
        }
    });
}

// Enhanced typing effect that works with different languages
let typingTimeout;
let isTyping = false;

function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (!heroTitle || isTyping) return;
    
    // Clear any existing timeout
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }
    
    const text = t('hero_name_last');
    heroTitle.textContent = '';
    isTyping = true;
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            
            // Add glow effect during typing
            heroTitle.style.textShadow = '0 0 20px rgba(99, 102, 241, 0.5)';
            setTimeout(() => {
                heroTitle.style.textShadow = '';
            }, 100);
            
            typingTimeout = setTimeout(typeWriter, 150);
        } else {
            isTyping = false;
        }
    };
    
    // Start typing effect after a delay
    typingTimeout = setTimeout(typeWriter, 1000);
}

function resetTypingEffect() {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (heroTitle) {
        heroTitle.textContent = t('hero_name_last');
    }
    isTyping = false;
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }
} 