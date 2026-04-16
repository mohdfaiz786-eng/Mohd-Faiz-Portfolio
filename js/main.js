// ========== Wait for DOM ==========
document.addEventListener('DOMContentLoaded', function() {
    
    // Loader
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 1500);
    }
    
    // Typed.js
    if (typeof Typed !== 'undefined') {
        new Typed('.typed-text', {
            strings: ['Data Scientist', 'Python Developer', 'ML Engineer', 'Data Analyst'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }
    
    // Navbar Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active Navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    if (hamburger && navMenu) {
        const closeMenu = () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            if (menuOverlay) menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };
        
        const openMenu = () => {
            hamburger.classList.add('active');
            navMenu.classList.add('active');
            if (menuOverlay) menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };
        
        hamburger.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        if (menuOverlay) {
            menuOverlay.addEventListener('click', closeMenu);
        }
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
    
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        themeToggle.addEventListener('click', () => {
            if (document.body.getAttribute('data-theme') === 'light') {
                document.body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
    }
    
    // AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 50 });
    }
    
    // Projects Data
    const projects = [
        {
            title: "Heart Disease Prediction System",
            description: "ML system using Random Forest to predict heart disease with 85% accuracy. Deployed with Streamlit web interface.",
            image: "assets/images/heart-image.png",
            tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
            category: "ml",
            github: "https://github.com/mohdfaiz786-eng",
            live: "https://heart-disease-predictor.streamlit.app/"
        },
        {
            title: "Sentiment & Sales Insights Analytics",
            description: "AI-powered analytics pipeline using TF-IDF and Transformer models for sentiment analysis from call recordings.",
            image: "assets/images/Sentiment-image.png",
            tech: ["Python", "TF-IDF", "Transformers", "Plotly"],
            category: "ai",
            github: "https://github.com/mohdfaiz786-eng",
            live: "https://company-analysis.streamlit.app/"
        },
        {
            title: "Data Analytics Dashboard",
            description: "Interactive dashboard for visualizing CRM data with Plotly. Automated preprocessing and feature engineering.",
            image: "assets/images/data-image.png",
            tech: ["Python", "Pandas", "Plotly", "Streamlit"],
            category: "web",
            github: "https://github.com/mohdfaiz786-eng",
            live: "#"
        },
        {
            title: "FAQ AI Chatbot",
            description: "NLP-based chatbot using TF-IDF and cosine similarity to answer frequently asked questions.",
            image: "assets/images/chatbot-image.png",
            tech: ["Python", "NLTK", "Flask", "TensorFlow"],
            category: "ai",
            github: "https://github.com/mohdfaiz786-eng",
            live: "https://codealpha-faq-chatbot.onrender.com/"
        }
    ];
    
    // Render Projects
    const projectsGrid = document.getElementById('projectsGrid');
    
    function renderProjects(filter = 'all') {
        if (!projectsGrid) return;
        
        const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
        
        projectsGrid.innerHTML = filtered.map(project => `
            <div class="project-card" data-aos="fade-up">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" onerror="this.src='https://placehold.co/400x200?text=${project.title}'">
                    <div class="project-overlay">
                        <a href="${project.github}" class="project-link" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${project.live}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    renderProjects();
    
    // Project Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });
    
    // Certifications Data
    const certifications = [
        {
            title: "Responsive Web Design",
            issuer: "Free Code Camp",
            date: "December 2024",
            image: "assets/images/Responsive-Certificate.png",
            icon: "fas fa-code",
            description: "Completed Responsive Web Design certification from freeCodeCamp, gaining strong hands-on experience in HTML5, CSS3, Flexbox, and CSS Grid. Built multiple responsive web projects ensuring mobile compatibility, accessibility, and modern UI/UX design principles."
        },
        {
            title: "Data Analytics Internship",
            issuer: "Code Grills",
            date: "October 2024",
            image: "assets/images/certicate codegrills.jpeg",
            icon: "fas fa-chart-line",
            description: "Successfully completed a Data Analytics internship at Code Grills, working with real-world datasets using Python, Pandas, and NumPy. Performed data cleaning, preprocessing, exploratory data analysis (EDA), and created insightful visualizations using Matplotlib and Seaborn."
        },
        {
            title: "Summer Training on Python with Data Science",
            issuer: "Softpro India",
            date: "August 2025",
            image: "assets/images/Certificte sp.jpg",
            icon: "fab fa-python",
            description: "Completed intensive summer training on Python with Data Science at Softpro India, covering core Python programming, data analysis, and machine learning fundamentals. Worked on practical projects involving data preprocessing, model building, and evaluation using libraries like Pandas and Scikit-learn."
        }
    ];
    
    // Render Certifications
    const certGrid = document.getElementById('certificationsGrid');
    if (certGrid) {
        certGrid.innerHTML = certifications.map(cert => `
            <div class="cert-card">
                <div class="cert-image">
                    <img src="${cert.image}" onerror="this.src='https://placehold.co/400x250?text=${cert.title}'">
                </div>
                <div class="cert-content">
                    <div class="cert-icon">
                        <i class="${cert.icon}"></i>
                    </div>
                    <h3 class="cert-title">${cert.title}</h3>
                    <p class="cert-issuer">${cert.issuer}</p>
                    <p class="cert-date"><i class="far fa-calendar-alt"></i> ${cert.date}</p>
                    <div class="cert-short-description">${cert.description.substring(0, 120)}...</div>
                    <div class="cert-full-description" style="display: none;">${cert.description}</div>
                    <button class="cert-readmore" onclick="toggleReadMore(this)">Read More</button>
                </div>
            </div>
        `).join('');
    }
    
    // GitHub Stats
    async function fetchGitHubStats() {
        const username = 'mohdfaiz786-eng';
        
        try {
            const userRes = await fetch(`https://api.github.com/users/${username}`);
            const userData = await userRes.json();
            
            const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
            const reposData = await reposRes.json();
            
            const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
            
            document.getElementById('repoCount').textContent = userData.public_repos || '8+';
            document.getElementById('starCount').textContent = totalStars || '5+';
            document.getElementById('followerCount').textContent = userData.followers || '5+';
            document.getElementById('commitCount').textContent = '50+';
            
        } catch (error) {
            console.log('Using fallback stats');
            document.getElementById('repoCount').textContent = '8+';
            document.getElementById('commitCount').textContent = '50+';
            document.getElementById('starCount').textContent = '5+';
            document.getElementById('followerCount').textContent = '5+';
        }
    }
    
    fetchGitHubStats();
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    alert('✅ Message sent successfully! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    alert('❌ Error sending message. Please email me directly.');
                }
            } catch (error) {
                alert('❌ Network error. Please email me directly at: mf304034123@gmail.com');
            }
        });
    }
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Dynamic Year
    const yearElement = document.querySelector('.footer-text p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', new Date().getFullYear());
    }
    
    console.log('%c🚀 Welcome to Mohd Faiz Portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
});

// Toggle Read More Function
function toggleReadMore(btn) {
    const card = btn.closest('.cert-card');
    const shortDesc = card.querySelector('.cert-short-description');
    const fullDesc = card.querySelector('.cert-full-description');
    
    if (fullDesc.style.display === 'none') {
        shortDesc.style.display = 'none';
        fullDesc.style.display = 'block';
        btn.textContent = 'Read Less';
    } else {
        shortDesc.style.display = 'block';
        fullDesc.style.display = 'none';
        btn.textContent = 'Read More';
    }
}
