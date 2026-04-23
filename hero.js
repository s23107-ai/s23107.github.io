// hero.js
const hero = document.getElementById('hero');
hero.innerHTML = `
    <h1>Hello, I'm Lo Lok Lam</h1>
    <p style="text-align:center; color:var(--primary);">"hello everyone"</p>
    <div style="text-align:center; margin-top:2rem;">
        <p>A Form 5 student who loves Math, Physics, and Gaming.</p>
        <div style="margin-top:2rem;">
            <button class="cta-btn" onclick="location.href='#contact'">Get In Touch</button>
            <button class="cta-btn outline" onclick="location.href='#projects'">View Work</button>
        </div>
    </div>
`;