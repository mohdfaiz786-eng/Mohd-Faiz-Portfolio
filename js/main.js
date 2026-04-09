// ========== Wait for DOM to Load ==========
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== Loader ==========
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 1500);
    }
    
    // ========== Typed.js Animation ==========
    if (typeof Typed !== 'undefined') {
        new Typed('.typed-text', {
            strings: ['Data Scientist', 'Python Developer', 'ML Engineer', 'Data Analyst'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }
    
    // ========== Navbar Scroll Effect ==========
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ========== Active Navigation Link ==========
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
    
    // ========== Mobile Menu ==========
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // ========== Theme Toggle ==========
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    if (themeToggle) {
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
    
    // ========== AOS Init ==========
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50
        });
    }
    
    // ========== Projects Data (Mohd Faiz ke projects) ==========
    const projects = [
        {
            title: "Heart Disease Prediction System",
            description: "ML system using Random Forest to predict heart disease with 85% accuracy. Deployed with Streamlit web interface.",
            image: "https://via.placeholder.com/400x200?text=Heart+Disease+Prediction",
            tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
            category: "ml",
            github: "https://github.com/mohdfaiz786-eng",
            live: "#"
        },
        {
            title: "Sentiment & Sales Insights Analytics",
            description: "AI-powered analytics pipeline using TF-IDF and Transformer models for sentiment analysis from call recordings.",
            image: "https://via.placeholder.com/400x200?text=Sentiment+Analytics",
            tech: ["Python", "TF-IDF", "Transformers", "Plotly"],
            category: "ai",
            github: "https://github.com/mohdfaiz786-eng",
            live: "#"
        },
        {
            title: "Data Analytics Dashboard",
            description: "Interactive dashboard for visualizing CRM data with Plotly. Automated preprocessing and feature engineering.",
            image: "https://via.placeholder.com/400x200?text=Analytics+Dashboard",
            tech: ["Python", "Pandas", "Plotly", "Streamlit"],
            category: "web",
            github: "https://github.com/mohdfaiz786-eng",
            live: "#"
        },
        {
            title: "Customer Segmentation Analysis",
            description: "Unsupervised learning project for customer segmentation using K-Means clustering and PCA.",
            image: "https://via.placeholder.com/400x200?text=Customer+Segmentation",
            tech: ["Python", "K-Means", "PCA", "Seaborn"],
            category: "ml",
            github: "https://github.com/mohdfaiz786-eng",
            live: "#"
        },
        {
            title: "House Price Prediction",
            description: "Regression model predicting housing prices with 92% R-squared score using advanced techniques.",
            image: "https://via.placeholder.com/400x200?text=House+Price",
            tech: ["Python", "Regression", "Pandas", "Matplotlib"],
            category: "ml",
            github: "https://github.com/mohdfaiz786-eng",
            live: "#"
        }
    ];
    
    // ========== Render Projects ==========
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card" data-aos="fade-up">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <a href="${project.github}" class="project-link" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${project.live}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // ========== Certifications Data ==========
    const certifications = [
        {
            title: "Data Analytics Internship Certificate",
            issuer: "Python and Pandas",
            date: "July 2024",
            icon: "fas fa-chart-line"
        },
        {
            title: "Summer Training on Python with Data Science",
            issuer: "Softpro Intern",
            date: "July 2025",
            icon: "fab fa-python"
        },
        {
            title: "Statistics Using R And Python",
            issuer: "Certification",
            date: "October 2023",
            icon: "fas fa-chart-bar"
        }
    ];
    
    const certGrid = document.getElementById('certificationsGrid');
    if (certGrid) {
        certGrid.innerHTML = certifications.map(cert => `
            <div class="cert-card" data-aos="fade-up">
                <div class="cert-icon">
                    <i class="${cert.icon}"></i>
                </div>
                <h3 class="cert-title">${cert.title}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
                <p class="cert-date">${cert.date}</p>
            </div>
        `).join('');
    }
    
    // ========== GitHub Stats ==========
    async function fetchGitHubStats() {
        const username = 'mohdfaiz786-eng';
        
        try {
            const userRes = await fetch(`https://api.github.com/users/${username}`);
            const userData = await userRes.json();
            
            const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
            const reposData = await reposRes.json();
            
            const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
            
            document.getElementById('repoCount').textContent = userData.public_repos || 0;
            document.getElementById('starCount').textContent = totalStars || 0;
            document.getElementById('followerCount').textContent = userData.followers || 0;
            
            // Fallback commits (GitHub API limits)
            document.getElementById('commitCount').textContent = '50+';
            
            // Stats images
            document.getElementById('githubLangChart').src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=radical&hide_border=true`;
            document.getElementById('githubStatsChart').src = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true`;
            
        } catch (error) {
            console.log('GitHub API error, using fallback');
            document.getElementById('repoCount').textContent = '10+';
            document.getElementById('commitCount').textContent = '50+';
            document.getElementById('starCount').textContent = '5+';
            document.getElementById('followerCount').textContent = '10+';
        }
    }
    
    fetchGitHubStats();
    
    // ========== Contact Form ==========
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // ========== Smooth Scroll ==========
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
    
    // ========== Dynamic Year ==========
    const yearElement = document.querySelector('.footer-text p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', new Date().getFullYear());
    }
    
    // ========== Console Welcome ==========
    console.log('%c🚀 Welcome to Mohd Faiz Portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
});
