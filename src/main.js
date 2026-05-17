import './styles/main.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/services.css';
import './styles/expertise.css';
import './styles/clients.css';
import './styles/about.css';
import './styles/footer.css';

import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
import { Expertise } from './components/Expertise.js';
import { Clients } from './components/Clients.js';
import { About } from './components/About.js';
import { Footer } from './components/Footer.js';

document.querySelector('#navbar-placeholder').innerHTML = Navbar;
document.querySelector('#hero-placeholder').innerHTML = Hero;
document.querySelector('#services-placeholder').innerHTML = Services;
document.querySelector('#expertise-placeholder').innerHTML = Expertise;
document.querySelector('#clients-placeholder').innerHTML = Clients;
document.querySelector('#about-placeholder').innerHTML = About;
document.querySelector('#footer-placeholder').innerHTML = Footer;

// Simple Scroll Animation Handler
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mobile Toggle Handler
const setupMobileToggle = () => {
    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
        });
        
        // Close menu when clicking links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }
};

setupMobileToggle();
