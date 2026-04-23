// nav.js - Navigation Construction
const nav = document.getElementById('navbar');
nav.innerHTML = `
    <div class="logo">Lo Lok Lam</div>
    <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#game">Play</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="hamburger" style="display:none;">☰</div>
`;