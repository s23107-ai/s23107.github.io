// skills.js
const skills = document.getElementById('skills');
skills.innerHTML = `
    <h2>Skills</h2>
    <div style="display:flex; flex-wrap:wrap; gap:10px;">
        <span class="cta-btn outline">Math Analysis</span>
        <span class="cta-btn outline">Physics Logic</span>
        <span class="cta-btn outline">Excel/Sheets</span>
        <span class="cta-btn outline">Figma</span>
        <span class="cta-btn outline">Canva</span>
        <span class="cta-btn outline">Photoshop</span>
    </div>
`;

// contact.js
const contact = document.getElementById('contact');
contact.innerHTML = `
    <h2>Contact</h2>
    <p>Feel free to reach out for collaboration!</p>
    <p style="font-size:1.5rem; margin:1rem 0;">📧 loloklam.demo@example.com</p>
    <button class="cta-btn">Download Portfolio PDF</button>
`;

// footer.js
const footer = document.getElementById('footer');
footer.innerHTML = `
    <hr style="border:0; border-top:1px solid var(--secondary); margin:2rem 0;">
    <div style="text-align:center; padding-bottom:2rem;">
        <p>Lo Lok Lam — "hello everyone"</p>
        <p style="font-size:0.8rem; color:var(--text-dim);">© 2026 Lo Lok Lam Portfolio. Built with Vibe Coding.</p>
    </div>
`;