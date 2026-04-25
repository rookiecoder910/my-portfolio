const state = {
    highImpactOnly: false,
};

const focusAreas = [
    { title: "Embedded systems & defense tech", detail: "DRDO · ShortOrbit Technologies" },
    { title: "Blockchain healthcare", detail: "MEDILEDGER · IPFS · Solidity" },
    { title: "On-device ML inference", detail: "TensorFlow · CNNs · 95%+ accuracy" },
];

const experiences = [
    {
        company: "ShortOrbit Technologies — DRDO Delhi Campus",
        title: "Electronics & Software Engineering Intern",
        timeframe: "Mar 2026 – Sep 2026",
        impact: "Selected for 6-month paid internship on a confidential defense-grade client project at DRDO. Working on embedded systems and software integration in a professional lab environment.",
    },
    {
        company: "Coding Samurai",
        title: "Android Developer Intern",
        timeframe: "Oct 2025 – Nov 2025",
        impact: "Built 3+ production-ready Android apps with Kotlin, Jetpack Compose, Firebase Auth & Firestore. Implemented Hilt DI, Retrofit APIs, and Material 3 UIs in agile multi-module architecture.",
    },
    {
        company: "Deloitte Australia · GIH Hackathon 2025",
        title: "Cybersecurity Virtual Intern · Hackathon Finalist",
        timeframe: "2025",
        impact: "Threat modeling & vulnerability analysis via OWASP Top 10; scored 99% in Palo Alto Networks cert. Finalist at GIH 2025 — built eMediBot in 36 hours, selected from 120+ teams; shipped 7+ hackathon prototypes.",
    },
];

const skills = [
    {
        label: "Languages",
        depth: "Polyglot systems",
        stack: [
            { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
            { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/EA2D2E" },
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
            { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
            { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        ],
    },
    {
        label: "Mobile & Web",
        depth: "App architecture",
        stack: [
            { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
            { name: "Jetpack Compose", icon: "https://cdn.simpleicons.org/jetpackcompose/4285F4" },
            { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
            { name: "Retrofit", icon: "https://cdn.simpleicons.org/square/3DDC84" },
            { name: "Hilt", icon: "https://cdn.simpleicons.org/android/3DDC84" },
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        ],
    },
    {
        label: "Backend & AI",
        depth: "API + intelligence",
        stack: [
            { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
            { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
            { name: "Keras", icon: "https://cdn.simpleicons.org/keras/D00000" },
            { name: "CNNs", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
            { name: "Gemini API", icon: "https://cdn.simpleicons.org/google/4285F4" },
        ],
    },
    {
        label: "Databases",
        depth: "Data persistence",
        stack: [
            { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
            { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
            { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite/003B57" },
            { name: "Room DB", icon: "https://cdn.simpleicons.org/android/3DDC84" },
        ],
    },
    {
        label: "DevOps & Tools",
        depth: "Ship & iterate",
        stack: [
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
            { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
            { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
            { name: "IPFS", icon: "https://cdn.simpleicons.org/ipfs/65C2CB" },
            { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/363636" },
        ],
    },
    {
        label: "Security",
        depth: "Defense & audit",
        stack: [
            { name: "OWASP Top 10", icon: "https://cdn.simpleicons.org/owasp/000000" },
            { name: "Threat Modeling", icon: "https://cdn.simpleicons.org/hackthebox/9FEF00" },
            { name: "CVE Analysis", icon: "https://cdn.simpleicons.org/virustotal/394EFF" },
        ],
    },
];

const projects = [
    {
        title: "PixelPholio",
        description: "Super Mario-inspired portfolio that lets recruiters explore my work as a playable world.",
        impact: "Featured in campus dev showcase",
        tags: ["Android", "Jetpack Compose", "MVVM"],
        link: "https://github.com/rookiecoder910/pixelpholio",
        tier: "high",
    },
    {
        title: "eMediBot",
        description: "GIH Hackathon 2025 Finalist — end-to-end app built in 36 hours. Firebase Realtime DB, Google Sign-In, Material 3 with Gemini API chatbot for medication queries and clean MVVM architecture.",
        impact: "GIH 2025 Finalist · Selected from 120+ teams",
        tags: ["Kotlin", "Jetpack Compose", "Firebase", "Gemini API"],
        link: "https://github.com/rookiecoder910/emedibot",
        tier: "high",
    },
    {
        title: "CropSense",
        description: "Full-stack crop disease detection system. Trained CNN on TensorFlow achieving 95%+ accuracy across 38+ diseases on PlantVillage dataset. Jetpack Compose frontend + FastAPI backend with sub-second inference.",
        impact: "95%+ accuracy · 38+ disease classes",
        tags: ["Kotlin", "FastAPI", "TensorFlow", "CNN"],
        link: "https://github.com/rookiecoder910/cropsense",
        tier: "high",
    },
    {
        title: "MEDILEDGER",
        description: "Final Year Project — decentralized EHR on blockchain with patient-controlled access and IPFS storage. Co-authored research paper currently under review.",
        impact: "Research paper under review · Final Year Project",
        tags: ["Node.js", "Solidity", "IPFS", "React"],
        link: "https://github.com/rookiecoder910/mediledger",
        tier: "high",
    },
    {
        title: "Cognify",
        description: "Brain-training experience with adaptive levels, heatmaps, and real-time analytics dashboards.",
        impact: "Featured in Innotech 2025",
        tags: ["Kotlin", "Jetpack Compose", "Firebase"],
        link: "https://github.com/rookiecoder910/Cognify",
        tier: "medium",
    },
    {
        title: "ShopIt",
        description: "Feature-rich e-commerce Android app with seamless shopping experience, cart management, and secure checkout.",
        impact: "End-to-end shopping solution",
        tags: ["Kotlin", "Android", "E-commerce"],
        link: "https://github.com/rookiecoder910/ShopIt",
        tier: "medium",
    },
];

const apps = [
    {
        name: "PixelPholio",
        version: "v1.1.1",
        platform: "Android",
        notes: "Portfolio arcade with Super Mario mechanics to browse projects and resume clips.",
        apk: "https://drive.google.com/file/d/1kNByN3GYxmPdrzXDcbGHiwHqtWhMn5fq/view?usp=sharing",
        size: "42 MB",
    },
    {
        name: "Cognify",
        version: "v1.4.0",
        platform: "Android",
        notes: "Cognitive assessment and brain training companion with wearable sync.",
        apk: "https://drive.google.com/file/d/1iMN5unTNldHOPKienFk2fQ5IOtAJ__16/view?usp=sharing",
        size: "38 MB",
    },
    {
        name: "Emedibot",
        version: "v1.9",
        platform: "Android",
        notes: "Chat-assisted medication tracker with refill nudges and caregiver reports.",
        apk: "https://drive.google.com/file/d/1n_kOk4AW1W4TfgVGL-Hr5Fl3ajM1dkqU/view?usp=sharing",
        size: "44 MB",
    },
    {
        name: "ShopIt",
        version: "v1.0.0",
        platform: "Android",
        notes: "E-commerce app with intuitive shopping experience, cart management, and secure checkout flow.",
        apk: "https://drive.google.com/file/d/1eUNvZdKOY8FAjmz73wXElkm3Apm_QqCw/view?usp=sharing",
        size: "35 MB",
    },
];

const qs = (selector) => document.querySelector(selector);

function mountFocusList() {
    const list = qs("#focusList");
    list.innerHTML = focusAreas
        .map((item) => `<li class="fade-in"><span>${item.title}</span><span>${item.detail}</span></li>`)
        .join("");
}

function mountTimeline() {
    const timeline = qs("#experienceTimeline");
    timeline.innerHTML = experiences
        .map(
            (job) => `
            <li class="fade-in">
                <p class="badge">${job.timeframe}</p>
                <h3 class="text-2xl font-display mt-3">${job.title}</h3>
                <p class="text-sm text-slate-400">${job.company}</p>
                <p class="text-slate-300 mt-2">${job.impact}</p>
            </li>
        `
        )
        .join("");
}

function mountSkills() {
    const container = qs("#skillsList");
    container.innerHTML = skills
        .map(
            (skill) => `
            <div class="skill-chip fade-in">
                <span class="tagline">${skill.label}</span>
                <strong>${skill.depth}</strong>
                <ul class="skill-stack">
                    ${skill.stack
                        .map((item) => {
                            if (typeof item === "string") {
                                return `<li>${item}</li>`;
                            }
                            const icon = item.icon
                                ? `<img class="stack-icon" src="${item.icon}" alt="${item.name} logo" loading="lazy">`
                                : "";
                            return `<li>${icon}<span>${item.name}</span></li>`;
                        })
                        .join("")}
                </ul>
            </div>
        `
        )
        .join("");
}

function projectTemplate(project) {
    return `
        <a class="project-card fade-in" href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title} on GitHub">
            <h3>${project.title}</h3>
            <p class="text-slate-300">${project.description}</p>
            <p class="text-sm text-slate-400 mt-3">${project.impact}</p>
            <div class="project-meta mt-4">
                ${project.tags.map((tag) => `<span>#${tag}</span>`).join("")}
            </div>
            <span class="btn-link mt-6 inline-flex" aria-hidden="true">View GitHub repo</span>
        </a>
    `;
}

function mountProjects() {
    const gallery = qs("#projectGallery");
    const filtered = state.highImpactOnly ? projects.filter((p) => p.tier === "high") : projects;
    gallery.innerHTML = filtered.map(projectTemplate).join("");
}

function mountApps() {
    const shelf = qs("#appShelf");
    shelf.innerHTML = apps
        .map(
            (app) => `
            <div class="app-card fade-in">
                <div class="flex items-center justify-between">
                    <h3 class="font-display text-xl">${app.name}</h3>
                    <span class="badge">${app.platform}</span>
                </div>
                <p class="text-sm text-slate-400">${app.notes}</p>
                <p class="text-sm text-slate-500">${app.version} · ${app.size}</p>
                <a class="btn-ghost" href="${app.apk}" target="_blank" rel="noreferrer">Download APK</a>
            </div>
        `
        )
        .join("");
}

function bindProjectFilter() {
    const filterBtn = qs("#projectFilter");
    filterBtn?.addEventListener("click", () => {
        state.highImpactOnly = !state.highImpactOnly;
        filterBtn.classList.toggle("active", state.highImpactOnly);
        filterBtn.textContent = state.highImpactOnly ? "Showing high impact" : "Filter by impact";
        mountProjects();
        observeFadeIns();
    });
}

function bindThemeToggle() {
    const toggle = qs("#themeToggle");
    toggle?.addEventListener("click", () => {
        document.body.classList.toggle("light");
        toggle.textContent = document.body.classList.contains("light") ? "Dark" : "Light";
    });
}

function bindNavToggle() {
    const nav = document.querySelector(".nav-shell");
    const toggle = qs("#navToggle");
    const navContent = qs("#navContent");

    if (!nav || !toggle || !navContent) {
        return;
    }

    nav.classList.add("js-enabled");

    const setAriaState = (isOpen, forceVisible = false) => {
        toggle.setAttribute("aria-expanded", String(isOpen));
        if (forceVisible) {
            navContent.setAttribute("aria-hidden", "false");
        } else {
            navContent.setAttribute("aria-hidden", String(!isOpen));
        }
    };

    toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        setAriaState(open);
    });

    navContent.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 1024 && nav.classList.contains("is-open")) {
                nav.classList.remove("is-open");
                setAriaState(false);
            }
        });
    });

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            nav.classList.remove("is-open");
            setAriaState(false, true);
        } else {
            setAriaState(nav.classList.contains("is-open"));
        }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
}

function bindContactForm() {
    const form = qs("#contactForm");
    const status = qs("#formStatus");
    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());
        status.textContent = "Sending...";
        setTimeout(() => {
            status.textContent = `Thanks ${payload.name}, I will respond at ${payload.email}.`;
            form.reset();
        }, 700);
    });
}

function updateYear() {
    const yearEl = qs("#year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

function observeFadeIns() {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}

function init() {
    mountFocusList();
    mountTimeline();
    mountSkills();
    mountProjects();
    mountApps();
    bindProjectFilter();
    bindThemeToggle();
    bindNavToggle();
    bindContactForm();
    updateYear();
    observeFadeIns();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
