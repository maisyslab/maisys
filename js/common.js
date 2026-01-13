const headerHTML = `
<header>
    <h1>Medical AI Systems (MAISys)</h1>
    <p>Research Group at Indian Institute of Technology Jodhpur, India</p>
</header>
`;

const navHTML = `
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="research.html">Research</a></li>
        <li><a href="people.html">People</a></li>
        <li><a href="funding.html">Funding</a></li>
    </ul>
</nav>
`;

const footerHTML = `
<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h4>Contact Us</h4>
            <p>Medical AI Systems Group, 217A CSE Department<br>
            Indian Institute of Technology Jodhpur<br>
            NH 62, Nagaur Road, Karwar<br>
            Jodhpur, Rajasthan 342030, India</p>
        </div>
        <div class="footer-section">
            <h4>Get in Touch</h4>
            <p>Email: dmishra@iitj.ac.in<br>
            Phone: +91 291 280 1234</p>
        </div>
        <div class="footer-section">
            <h4>Follow Us</h4>
            <a href="https://www.linkedin.com/company/maisys-lab" class="social-link" target="_blank" aria-label="Follow us on LinkedIn">
                <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </a>
        </div>
    </div>
</footer>
`;

function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (headerPlaceholder) headerPlaceholder.outerHTML = headerHTML;
    if (navPlaceholder) navPlaceholder.outerHTML = navHTML;
    if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;
}

function toggleHighlights() {
    const list = document.getElementById("highlightsList");
    const items = list.getElementsByTagName("li");
    const readMoreLink = list.nextElementSibling.getElementsByTagName("a")[0];

    for (let i = 3; i < items.length; i++) {
        if (
            items[i].style.display === "none" ||
            items[i].style.display === ""
        ) {
            items[i].style.display = "block";
            readMoreLink.textContent = "Show less";
        } else {
            items[i].style.display = "none";
            readMoreLink.textContent = "Read more";
        }
    }
}

function toggleAnnouncements() {
    const list = document.getElementById("announcementsList");
    const items = list.getElementsByTagName("li");
    const readMoreLink = list.nextElementSibling.getElementsByTagName("a")[0];

    if (items.length <= 3) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].style.display === "none") {
                items[i].style.display = "block";
                readMoreLink.textContent = "Show less";
            } else {
                items[i].style.display = "none";
                readMoreLink.textContent = "Read more";
            }
        }
    } else {
        for (let i = 3; i < items.length; i++) {
            if (
                items[i].style.display === "none" ||
                items[i].style.display === ""
            ) {
                items[i].style.display = "block";
                readMoreLink.textContent = "Show less";
            } else {
                items[i].style.display = "none";
                readMoreLink.textContent = "Read more";
            }
        }
    }
}

function toggleAbstract(element) {
    const abstractContent = element.previousElementSibling;
    abstractContent.classList.toggle("expanded");
    element.textContent = abstractContent.classList.contains("expanded")
        ? "Read Less"
        : "Read More";
}

document.addEventListener("DOMContentLoaded", loadComponents);
