const headerHTML = `
<header class="bg-[#003366] text-white p-4 shadow-md">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <!-- Logo -->
         <div class="flex-shrink-0">
            <a href="index.html">
                <img src="images/logo.jpeg" alt="MAISys Logo" class="h-16 w-auto bg-white rounded-lg p-1">
            </a>
        </div>
        <div class="text-center sm:text-left">
            <h1 class="text-2xl sm:text-4xl font-bold m-0">Medical AI Systems (MAISys)</h1>
            <p class="mt-2 text-xs sm:text-base opacity-90">Research Group at Indian Institute of Technology Jodhpur, India</p>
        </div>
    </div>
</header>
`;

const navHTML = `
<nav class="bg-[#0077be] p-2 sticky top-0 z-50 shadow-sm">
    <div class="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-4">
        <div class="block sm:hidden ml-auto">
            <button onclick="toggleMobileMenu()" class="text-white hover:text-[#ffd700] focus:outline-none">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </div>
        
        <!-- Navigation Links -->
        <div id="mobile-menu" class="hidden w-full sm:block sm:w-auto mx-auto">
            <ul class="list-none p-0 m-0 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-center py-2 sm:py-0">
                <li><a href="index.html" class="block text-white font-bold no-underline hover:text-[#ffd700] transition-colors duration-300 py-1 sm:py-0">Home</a></li>
                <li><a href="research.html" class="block text-white font-bold no-underline hover:text-[#ffd700] transition-colors duration-300 py-1 sm:py-0">Research</a></li>
                <li><a href="people.html" class="block text-white font-bold no-underline hover:text-[#ffd700] transition-colors duration-300 py-1 sm:py-0">People</a></li>
                <li><a href="gallery.html" class="block text-white font-bold no-underline hover:text-[#ffd700] transition-colors duration-300 py-1 sm:py-0">Gallery</a></li>
                <!-- <li><a href="funding.html" class="block text-white font-bold no-underline hover:text-[#ffd700] transition-colors duration-300 py-1 sm:py-0">Funding</a></li> -->
            </ul>
        </div>
    </div>
</nav>
`;

const footerHTML = `
<footer class="bg-[#003366] text-white py-12 px-4 shadow-inner mt-12">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div class="footer-section">
            <h4 class="text-lg font-bold mb-4 border-b-2 border-[#ffd700] inline-block pb-1">Contact Us</h4>
            <p class="leading-relaxed">Medical AI Systems Group, 217A CSE Department<br>
            Indian Institute of Technology Jodhpur<br>
            NH 62, Nagaur Road, Karwar<br>
            Jodhpur, Rajasthan 342030, India</p>
        </div>
        <div class="footer-section">
            <h4 class="text-lg font-bold mb-4 border-b-2 border-[#ffd700] inline-block pb-1">Get in Touch</h4>
            <p class="leading-relaxed">Email: <a href="mailto:dmishra@iitj.ac.in" class="text-white hover:text-[#ffd700]">dmishra@iitj.ac.in</a><br>
            Phone: +91 291 280 1234</p>
        </div>
        <div class="footer-section">
            <h4 class="text-lg font-bold mb-4 border-b-2 border-[#ffd700] inline-block pb-1">Follow Us</h4>
            <div class="flex justify-center md:justify-start gap-4">
                <a href="https://www.linkedin.com/company/maisys-lab" class="text-white hover:text-[#ffd700] transition-colors" target="_blank" aria-label="Follow us on LinkedIn">
                    <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="text-center mt-8 pt-4 border-t border-blue-800 text-sm text-gray-300">
        <p>&copy; 2026 MAISys Research Group. All Rights Reserved.</p>
    </div>
</footer>
`;

const modalHTML = `
<div id="image-modal" class="fixed inset-0 z-[100] hidden bg-black bg-opacity-90 flex items-center justify-center p-4 transition-opacity duration-300">
    <button onclick="closeImageModal()" class="absolute top-4 right-6 text-white text-5xl font-bold hover:text-[#ffd700] focus:outline-none transition-colors z-[110]">&times;</button>
    <div id="modal-content" class="bg-white rounded-lg overflow-hidden shadow-2xl max-w-5xl w-auto max-h-[90vh] flex flex-col transform scale-95 transition-transform duration-300">
        <div class="flex-1 overflow-auto flex items-center justify-center bg-white p-2">
            <img id="modal-image" class="max-w-full max-h-[80vh] object-contain" src="" alt="">
        </div>
        <div id="modal-caption-container" class="p-4 bg-gray-50 border-t border-gray-200 hidden">
            <p id="modal-caption" class="text-center text-gray-800 font-medium text-sm sm:text-base"></p>
        </div>
    </div>
</div>
`;

function loadComponents() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    const navPlaceholder = document.getElementById("nav-placeholder");
    let footerPlaceholder = document.getElementById("footer-placeholder");

    if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    if (navPlaceholder) navPlaceholder.innerHTML = navHTML;

    if (!footerPlaceholder) {
        footerPlaceholder = document.createElement("div");
        footerPlaceholder.id = "footer-placeholder";
        document.body.appendChild(footerPlaceholder);
    }
    footerPlaceholder.innerHTML = footerHTML;

    // Append modal if it doesn't exist
    if (!document.getElementById("image-modal")) {
        const modalDiv = document.createElement("div");
        modalDiv.innerHTML = modalHTML;
        document.body.appendChild(modalDiv.firstElementChild);
    }
}

function openImageModal(src, alt, caption) {
    const modal = document.getElementById("image-modal");
    const modalContent = document.getElementById("modal-content");
    const modalImg = document.getElementById("modal-image");
    const modalCaptionContainer = document.getElementById(
        "modal-caption-container"
    );
    const modalCaption = document.getElementById("modal-caption");

    modalImg.src = src;
    modalImg.alt = alt || "";

    if (caption && caption.trim().length > 0) {
        modalCaption.innerText = caption;
        modalCaptionContainer.classList.remove("hidden");
    } else {
        modalCaption.innerText = "";
        modalCaptionContainer.classList.add("hidden");
    }

    modal.classList.remove("hidden");
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        modal.classList.remove("opacity-0");
        modalContent.classList.remove("scale-95");
        modalContent.classList.add("scale-100");
    }, 10);

    document.body.style.overflow = "hidden";
}

function closeImageModal() {
    const modal = document.getElementById("image-modal");
    const modalContent = document.getElementById("modal-content");

    modal.classList.add("opacity-0");
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-95");

    setTimeout(() => {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }, 300);
}

// Close modal when clicking outside the image or pressing ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeImageModal();
});
document.addEventListener("click", (e) => {
    const modal = document.getElementById("image-modal");
    if (e.target === modal) closeImageModal();
});

function setupImageModalLinks() {
    // Exclude people.html from image modal functionality
    if (window.location.pathname.includes("people.html")) {
        return;
    }

    // Select images in typical content areas (excluding logos)
    const contentImages = document.querySelectorAll(
        ".grid img, .space-y-8 img"
    );

    contentImages.forEach((img) => {
        // For gallery items wrapped in a group div (which may have an overlay)
        const possibleGroup = img.closest(".group");
        let caption = "";

        if (possibleGroup) {
            possibleGroup.style.cursor = "pointer";

            // Try to find a caption inside the group (specific to gallery.html)
            const captionEl = possibleGroup.querySelector("p");
            if (captionEl) {
                caption = captionEl.innerText;
            }

            possibleGroup.onclick = (e) => {
                openImageModal(img.src, img.alt, caption);
            };
        } else {
            // For standard images (like in research.html)
            img.style.cursor = "pointer";
            img.onclick = () => openImageModal(img.src, img.alt, "");
        }
    });
}

function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
}

function toggleHighlights() {
    const list = document.getElementById("highlightsList");
    if (!list) return;

    // Check if we are in collapsed state (h-96)
    if (list.classList.contains("h-96")) {
        // Expand
        list.classList.remove("h-96", "overflow-y-auto");
        list.classList.add("h-auto");
        if (event && event.target) event.target.innerText = "Show Less";
    } else {
        // Collapse
        list.classList.remove("h-auto");
        list.classList.add("h-96", "overflow-y-auto");
        list.scrollTop = 0;
        if (event && event.target) event.target.innerText = "Read more";
    }
}

function toggleAnnouncements() {
    const list = document.getElementById("announcementsList");
    if (!list) return;

    if (list.classList.contains("h-96")) {
        list.classList.remove("h-96", "overflow-y-auto");
        list.classList.add("h-auto");
        if (event && event.target) event.target.innerText = "Show Less";
    } else {
        list.classList.remove("h-auto");
        list.classList.add("h-96", "overflow-y-auto");
        list.scrollTop = 0;
        if (event && event.target) event.target.innerText = "Read more";
    }
}

// --- Animation & Skeleton Loading Logic ---
const styles = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-up {
        animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    .animate-on-scroll {
        opacity: 0; /* Intentionally hidden initially */
    }
    .img-loading { opacity: 0; }
    .img-loaded { opacity: 1; }
    
    /* Skeleton Pulse Animation */
    .skeleton-bg {
        background-color: #e2e8f0;
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: .5; }
    }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

function handleImageLoad() {
    // Select all images that are meant to have skeleton loading
    const images = document.querySelectorAll("img");

    images.forEach((img) => {
        if (img.complete) {
            onImageLoaded(img);
        } else {
            img.addEventListener("load", () => onImageLoaded(img));
            img.addEventListener("error", () => onImageLoaded(img));
        }
    });
}

function onImageLoaded(img) {
    img.classList.remove("opacity-0");
    // Remove skeleton class from parent if it exists
    if (
        img.parentElement &&
        img.parentElement.classList.contains("skeleton-bg")
    ) {
        img.parentElement.classList.remove(
            "skeleton-bg",
            "animate-pulse",
            "bg-gray-200"
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponents();
    handleImageLoad();

    // Intersection Observer for scroll animations
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-up");
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with 'animate-on-scroll' class
    document
        .querySelectorAll(".animate-on-scroll, .card, .gallery-item")
        .forEach((el) => {
            el.style.opacity = "0"; // Ensure hidden before animation
            observer.observe(el);
        });

    // Also observe the main containers specific to our pages if classes aren't explicitly there yet
    document.querySelectorAll(".grid > div").forEach((el) => {
        el.style.opacity = "0";
        el.classList.add("fade-in-up"); // Fallback/Default behavior
        observer.observe(el);
    });

    // Initialize Modal Links
    setupImageModalLinks();
});
