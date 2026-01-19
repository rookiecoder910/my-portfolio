const state = {
    highImpactOnly: false,
};

const focusAreas = [
    { title: "Mobile growth experiments", detail: "Cohort analytics · A/B testing" },
    { title: "Design systems", detail: "Token-driven theming for Android + Web" },
    { title: "Product ops", detail: "CI/CD, crash-free goals, release notes" },
];

const experiences = [
    {
        company: "Coding Samurai",
        title: "App developer Project Based Intern",
        timeframe: "Oct 2025-Nov 2025",
        impact: "Learned to build MVVM apps with Jetpack Compose",
    },
   
];

const skills = [
    {
        label: "Languages",
        depth: "Polyglot systems",
        stack: [
            { name: "C", icon: "https://cdn.simpleicons.org/c/00599C" },
            { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
            { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
            { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/EA2D2E" },
            { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
        ],
    },
    {
        label: "Android & SaaS",
        depth: "App architecture",
        stack: [
            { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
            { name: "MVVM", icon: "https://cdn.simpleicons.org/android/3DDC84" },
            { name: "Room DB", icon: "https://cdn.simpleicons.org/sqlite/003B57" },
            { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
            { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
            { name: "Compose", icon: "https://cdn.simpleicons.org/jetpackcompose/4285F4" },
        ],
    },
    {
        label: "Backend Frameworks",
        depth: "API delivery",
        stack: [
            { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
            { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
            { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
            { name: "REST", icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
            { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
        ],
    },
    {
        label: "ML Tooling",
        depth: "Edge + research",
        stack: [
            { name: "TensorFlow Lite", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
            { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
            { name: "Keras", icon: "https://cdn.simpleicons.org/keras/D00000" },
            { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
            { name: "SciKit", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
            { name: "Vision AI", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
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
        title: "Emedibot",
        description: "AI health aide that tracks doses, schedules reminders, and surfaces med insights via Gemini.",
        impact: "100+ daily active users",
        tags: ["Kotlin", "Jetpack Compose", "Firebase", "Gemini"],
        link: "https://github.com/rookiecoder910/emedibot",
        tier: "medium",
    },
    {
        title: "Crop Sense",
        description: "CNN-powered detector that flags crop diseases using on-device inference for farmers.",
        impact: "NASA Space Apps prototype finalist",
        tags: ["Python", "TensorFlow", "FastAPI", "Kotlin"],
        link: "https://github.com/rookiecoder910/Crop-Disease-Detector-",
        tier: "medium",
    },
    {
        title: "Cognify",
        description: "Brain-training experience with adaptive levels, heatmaps, and real-time analytics dashboards.",
        impact: "Featured in Innotech 2025",
        tags: ["Kotlin", "Jetpack Compose"," Firebase"],
        link: "https://github.com/rookiecoder910/Cognify",
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
        <article class="project-card fade-in">
            <h3>${project.title}</h3>
            <p class="text-slate-300">${project.description}</p>
            <p class="text-sm text-slate-400 mt-3">${project.impact}</p>
            <div class="project-meta mt-4">
                ${project.tags.map((tag) => `<span>#${tag}</span>`).join("")}
            </div>
            <a href="${project.link}" class="btn-link mt-6 inline-flex" target="_blank" rel="noopener noreferrer">View GitHub repo</a>
        </article>
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
    bindContactForm();
    updateYear();
    observeFadeIns();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
