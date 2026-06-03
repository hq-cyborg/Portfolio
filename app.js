/**
 * Hassan's OS - Core Windows 11 Interaction Framework (app.js)
 * Implements standard desktop environments: taskbars, widgets, start menus,
 * dynamic windows cascading, retro commands terminal, and audio synthesizers.
 */

// --- Project & Structural Data ---
const DATA = {
    projects: [
        {
            id: 1,
            title: "HUSH – The Sound of Death",
            category: "gamedev",
            date: "Jun 2025 – Aug 2025",
            summary: "A short horror game built in Unity. Players must escape a blind creature hunting purely by sound — even the sound of breathing.",
            description: "A short horror game titled HUSH has been released on itch.io. In this game, players must escape a blind creature that hunts entirely by sound — even the sound of breathing. Players can hold their breath to avoid detection. Every footstep and every noise could lead to death. While the experience is brief — under 10 minutes — it's packed with atmospheric tension and features one unforgettable jumpscare. Hints are available in-game for those who get stuck, but stealth and timing are essential to survive.",
            controls: [
                { key: "W A S D", action: "Move player" },
                { key: "LMB", action: "Interact with objects" },
                { key: "Tab", action: "Hold your breath (avoid sound)" }
            ],
            objective: "Find the keys. Stay silent. Escape… if you can.",
            preview: "HS",
            tags: ["Unity", "C# Scripting", "3D Audio", "Stealth Design"],
            liveUrl: "https://codeblooded98.itch.io/hush",
            gitUrl: "https://github.com/hassanq2003/HUSH",
            skills: ["Unity", "C#", "3D Game Engine", "Audio Detection"]
        },
        {
            id: 2,
            title: "BrickBreaker Game",
            category: "gamedev",
            date: "Oct 2024 – Nov 2024",
            summary: "A console-based Brick Breaker game implemented entirely in x86 Assembly Language (ASM) for a COAL course project.",
            description: "BrickBreaker-ASM is a console-based Brick Breaker game implemented entirely in Assembly Language. This project was created as part of a COAL (Computer Organization and Assembly Language) course project. The game offers an engaging gameplay experience with progressively challenging levels, dynamic speed changes, and a robust scoring system. It is designed to run in a purely console-based environment, demonstrating the capabilities of ASM in creating interactive applications.",
            features: [
                "Three Exciting Levels: Unique tile arrangements and increasing speed to test reflexes and precision.",
                "Top Ten Scores: Persistent file-handling system saves top player records and encourages competition.",
                "Dynamic Difficulty: Ball's speed increases with each level, making gameplay progressively harder.",
                "Tile Variety: Various tile types and arrangements keep the gameplay fresh and challenging.",
                "Console-Based Gameplay: Fully functional inside a console, demonstrating optimized assembly code."
            ],
            controls: [
                { key: "J", action: "Move paddle to the left" },
                { key: "K", action: "Move paddle to the right" },
                { key: "P", action: "Pause / Resume game" },
                { key: "Q", action: "Quit current level (when paused)" }
            ],
            howToPlay: [
                "Start the Game: Run the program in a supported console environment. Follow the instructions on the screen.",
                "Objective: Break all tiles on the screen using the ball. Keep the ball in play by moving the paddle.",
                "Advancing Levels: Clear all tiles to progress to the next level. Be prepared for faster speeds.",
                "Score: Aim high to secure a spot in the top ten leaderboard."
            ],
            preview: "BB",
            tags: ["x86 Assembly", "COAL", "File IO", "Systems Prog"],
            liveUrl: "https://github.com/hassanq2003/BrickBreaker-ASM",
            gitUrl: "https://github.com/hassanq2003/BrickBreaker-ASM",
            skills: ["Assembly Language", "Systems Architecture", "File IO"]
        },
        {
            id: 3,
            title: "Fruit Merger",
            category: "gamedev",
            date: "Jan 2024 – May 2024",
            summary: "🍏 Fruit Merger – A Fun & Addictive Fruit Puzzle Game! Merge similar fruits to level up and boost scores! 🍎",
            description: "Introducing Fruit Merger, a casual game where players merge similar fruits to level up and boost their scores! Merge similar fruits (like apples, berries, and oranges) to upgrade them into larger fruits and trigger exciting combo points.",
            preview: "FM",
            image: "fruit_merger.jpg",
            tags: ["Unity", "C#", "2D Physics", "Casual Game"],
            liveUrl: "https://www.linkedin.com/in/hassan-qureshi-059677294/details/projects/",
            gitUrl: "https://github.com/hassanq2003/FruitMerger",
            skills: ["Unity 2D", "C# Scripting", "Physics System", "Casual Mechanics"],
            otherContributors: "View all contributors"
        },
        {
            id: 4,
            title: "SpaceShooter Game",
            category: "gamedev",
            date: "Jan 2024 – May 2024",
            summary: "🚀 Space Warfare – Conquer the Galaxy! Take command of your starfighter, face wave after wave of enemy ships, and defend the universe. 🌌🔥",
            description: "Prepare for an epic interstellar battle in Space Warfare! Take command of your starfighter, face relentless waves of enemy ships, and unleash devastating firepower to defend the galaxy. Features modular shooting components, dynamic enemy spawning algorithms, fluid movements, and retro style VFX and audio feeds.",
            preview: "SW",
            tags: ["Unity", "C#", "Spawning Algos", "VFX / Audio"],
            liveUrl: "https://github.com/hassanq2003/SpaceShooter",
            gitUrl: "https://github.com/hassanq2003/SpaceShooter",
            skills: ["Unity", "C#", "Spawning Algos", "VFX & Spatial Sound"]
        }
    ],
    skills: {
        frontend: [
            { name: "Unity & C# Scripting", level: 95 },
            { name: "Virtual Reality (VR)", level: 90 },
            { name: "Game Mechanics & Math", level: 92 },
            { name: "eSports Tactics & Logic", level: 85 }
        ],
        backend: [
            { name: "Python / Data Science", level: 88 },
            { name: "Flutter & Dart (Mobile)", level: 82 },
            { name: "Data Structures & Algos", level: 95 },
            { name: "HTML5 / Vanilla CSS", level: 85 }
        ]
    },
    experience: [
        {
            date: "Jan 2026 - Present • 5 mos",
            title: "Teaching Assistant (Data Structures) • Full-time",
            org: "National University of Computer and Emerging Sciences • On-site",
            desc: "Serving as Course Assistant / TA for Data Structures. Conducted lab tutorials, evaluated code scripts for 60+ students, and constructed debugging visualizations to simplify memory hierarchies, pointers, and trees."
        },
        {
            date: "Jan 2026 - Present • 5 mos",
            title: "Game Developer Intern • Internship",
            org: "ZyroNest Inc. • Remote",
            desc: "Collaborated on production-level game engines to design scalable visual assets and optimize runtime behaviors. Refined gameplay systems and optimized C# code blocks for enhanced rendering performance."
        },
        {
            date: "Sep 2025 - Present • 9 mos",
            title: "Unity Developer • Hybrid",
            org: "XI-Pulse",
            desc: "Engineered core modules in Unity, implementing physics loops, spatial audio feeds, and dynamic animations. Skills utilized: C#, Unity, and Game Optimization."
        },
        {
            date: "Jul 2025 - Aug 2025 • 2 mos",
            title: "Game Development Intern (Protect Lab) • On-site",
            org: "ProtectLab • Internship",
            desc: "Assisted in crafting high-impact simulation frameworks for game dev platforms, contributing to rapid prototyping phases and validating mathematical calculations. Skills: Unity, Virtual Reality (VR), and Spatial Mathematics."
        }
    ],
    education: [
        {
            date: "Oct 2023 – May 2027",
            title: "Bachelor of Engineering - BE, Computer Software Engineering",
            org: "National University of Computer and Emerging Sciences",
            desc: "Currently achieving excellence in software paradigms. Activities and societies: Cricket, Football, Esports. Hardwork and Resilient. Skills: C++, Advanced Data Structures, Pointers, and Algorithms."
        },
        {
            date: "Jul 2022 – Oct 2023",
            title: "Bachelor's degree, Computer Software Engineering",
            org: "Punjab Group Of Colleges",
            desc: "Grade: 1044/1100. Completed intermediate software engineering foundations, establishing a robust mathematical and technical groundwork for advanced computational sciences."
        },
        {
            date: "Jan 2019 – Jan 2020",
            title: "Matriculation",
            org: "Overseas Pakistani Foundation",
            desc: "Grade: 1061/1100. Graduated with honors in sciences, initiating a lifelong passion for technical computation, programming, and mathematical research."
        }
    ],
    certifications: [
        {
            title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
            issuer: "IBM",
            date: "Jul 2025",
            credentialId: "MN4LXZ2DIXY8",
            skills: ["Android Development", "Flutter", "Dart", "Mobile Design"]
        },
        {
            title: "Introduction to Unity and Basic C# Scripting",
            issuer: "Packt",
            date: "Jun 2025",
            credentialId: "YY4GXMWC1E8R",
            skills: ["Unity", "C# Scripting", "Game Dev Fundamentals"]
        },
        {
            title: "Python for Data Science and AI",
            issuer: "Coursera",
            date: "Jun 2025",
            skills: ["Python", "Data Science", "Artificial Intelligence"]
        },
        {
            title: "Getting started with Flutter Development",
            issuer: "Google Cloud Training Online",
            date: "Jun 2025",
            skills: ["Android Development", "Flutter"]
        }
    ]
};

// --- OS System Parameters ---
const OS = {
    settings: {
        theme: "theme-cyber-dark",
        soundEnabled: true,
        animationSpeed: true,
        wallpaper: "wp-default"
    },
    windows: {},
    focusStack: [],
    windowCascadeIndex: 0,
    lockScreenActive: true,
    poweringOff: false
};

// --- Web Audio Synth Sound System ---
const SoundSystem = {
    ctx: null,

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
    },

    play(type) {
        if (!OS.settings.soundEnabled) return;
        this.init();
        
        try {
            const now = this.ctx.currentTime;
            
            switch (type) {
                case "click":
                    this.beep(800, 0.03, "sine", 0.05);
                    break;
                case "unlock":
                    this.beep(523.25, 0.08, "sine", 0.04, now); // C5
                    this.beep(659.25, 0.08, "sine", 0.04, now + 0.06); // E5
                    this.beep(783.99, 0.08, "sine", 0.04, now + 0.12); // G5
                    this.beep(1046.50, 0.18, "sine", 0.06, now + 0.18); // C6
                    break;
                case "window-open":
                    this.slideBeep(400, 800, 0.1, 0.04);
                    break;
                case "window-close":
                    this.slideBeep(700, 350, 0.08, 0.04);
                    break;
                case "error":
                    this.beep(160, 0.12, "triangle", 0.08, now);
                    this.beep(160, 0.12, "triangle", 0.08, now + 0.14);
                    break;
                case "success":
                    this.beep(987.77, 0.04, "sine", 0.05, now); // B5
                    this.beep(1318.51, 0.12, "sine", 0.06, now + 0.04); // E6
                    break;
                case "shutdown":
                    this.slideBeep(523.25, 130.81, 0.5, 0.08); // C5 to C3
                    break;
            }
        } catch (e) {
            console.error("Audio Synthesis Error: ", e);
        }
    },

    beep(freq, duration, type = "sine", vol = 0.1, startTime = null) {
        const time = startTime || this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, time);
        
        gain.gain.setValueAtTime(vol, time);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
        
        osc.start(time);
        osc.stop(time + duration);
    },

    slideBeep(startFreq, endFreq, duration, vol = 0.1) {
        const time = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(startFreq, time);
        osc.frequency.exponentialRampToValueAtTime(endFreq, time + duration);
        
        gain.gain.setValueAtTime(vol, time);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
        
        osc.start(time);
        osc.stop(time + duration);
    }
};

// --- Real-time Date and Clock Sync Loop ---
function updateSystemClock() {
    const now = new Date();
    
    // Lock screen time (Big Clock)
    const lockTimeEl = document.getElementById("lock-time");
    if (lockTimeEl) {
        lockTimeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    
    // Lock screen date
    const lockDateEl = document.getElementById("lock-date");
    if (lockDateEl) {
        lockDateEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }
    
    // System tray clock
    const trayTimeEl = document.getElementById("tray-time");
    if (trayTimeEl) {
        trayTimeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    }
    
    // System tray date
    const trayDateEl = document.getElementById("tray-date");
    if (trayDateEl) {
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        const yyyy = now.getFullYear();
        trayDateEl.textContent = `${mm}/${dd}/${yyyy}`;
    }
}
setInterval(updateSystemClock, 1000);
updateSystemClock();

// --- Lock Screen Login sequence ---
const lockScreen = document.getElementById("lock-screen");
const btnLogin = document.getElementById("btn-login");

function unlockOS() {
    if (!OS.lockScreenActive) return;
    
    SoundSystem.play("unlock");
    lockScreen.classList.remove("active");
    lockScreen.classList.add("exiting");
    
    const desktopEnv = document.getElementById("desktop-env");
    desktopEnv.classList.remove("hidden");
    
    setTimeout(() => {
        lockScreen.classList.add("hidden");
        OS.lockScreenActive = false;
    }, 450);
}

if (btnLogin) btnLogin.addEventListener("click", unlockOS);
document.addEventListener("keydown", (e) => {
    if (OS.lockScreenActive) {
        unlockOS();
    }
});

// --- Desktop Grid Icon Double-Click / Tap Logic ---
document.querySelectorAll(".desktop-icon").forEach(icon => {
    let clickTimeout = null;
    
    icon.addEventListener("click", (e) => {
        e.stopPropagation();
        
        document.querySelectorAll(".desktop-icon").forEach(el => el.classList.remove("selected"));
        icon.classList.add("selected");
        
        // Mobile tap detection (Single tap launches window on small viewports)
        if (window.innerWidth <= 768) {
            const appId = icon.getAttribute("data-app");
            openApp(appId);
            SoundSystem.play("click");
            icon.classList.remove("selected");
        } else {
            // Simulated double click
            if (clickTimeout) {
                clearTimeout(clickTimeout);
                clickTimeout = null;
                const appId = icon.getAttribute("data-app");
                openApp(appId);
                SoundSystem.play("click");
                icon.classList.remove("selected");
            } else {
                clickTimeout = setTimeout(() => {
                    clickTimeout = null;
                }, 300);
            }
        }
    });
});

// Deselect desktop elements when clicking empty desktop area
document.getElementById("desktop").addEventListener("click", (e) => {
    if (e.target.id === "desktop" || e.target.classList.contains("wallpaper-glow")) {
        document.querySelectorAll(".desktop-icon").forEach(icon => icon.classList.remove("selected"));
        closeContextMenu();
        closeStartMenu();
        closeSearchPanel();
        closeWidgetsPanel();
    }
});

// --- Centered Taskbar & Start Menu Toggle ---
const btnStart = document.getElementById("btn-start");
const startMenu = document.getElementById("start-menu");

function toggleStartMenu(e) {
    if (e) e.stopPropagation();
    SoundSystem.play("click");
    closeSearchPanel();
    closeWidgetsPanel();
    
    if (startMenu.classList.contains("hidden")) {
        startMenu.classList.remove("hidden");
        document.getElementById("start-search-input").focus();
    } else {
        closeStartMenu();
    }
}

function closeStartMenu() {
    startMenu.classList.add("hidden");
    closePowerDropdown();
}

if (btnStart) btnStart.addEventListener("click", toggleStartMenu);

// Pinned Apps launcher inside Start Menu
document.querySelectorAll(".pinned-app-item, .recommended-item").forEach(item => {
    item.addEventListener("click", () => {
        const appId = item.getAttribute("data-app");
        openApp(appId);
        closeStartMenu();
        SoundSystem.play("click");
    });
});

// Start Menu Search filter
const startSearch = document.getElementById("start-search-input");
if (startSearch) {
    startSearch.addEventListener("input", () => {
        const val = startSearch.value.trim().toLowerCase();
        const pinnedItems = document.querySelectorAll(".pinned-app-item");
        
        pinnedItems.forEach(item => {
            const text = item.querySelector("span").textContent.toLowerCase();
            if (text.includes(val)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });
}

// Power dropdown drop-up in Start menu
const btnPower = document.getElementById("btn-start-power");
const powerDropdown = document.getElementById("power-dropdown");

if (btnPower) {
    btnPower.addEventListener("click", (e) => {
        e.stopPropagation();
        SoundSystem.play("click");
        powerDropdown.classList.toggle("hidden");
    });
}

function closePowerDropdown() {
    if (powerDropdown) powerDropdown.classList.add("hidden");
}

document.addEventListener("click", () => {
    closePowerDropdown();
});

// --- Search Panel slide-out/up Trigger ---
const searchTrigger = document.getElementById("taskbar-search");
const searchPanel = document.getElementById("search-panel");
const searchInput = document.getElementById("windows-search-input");

if (searchTrigger) {
    searchTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        SoundSystem.play("click");
        closeStartMenu();
        closeWidgetsPanel();
        
        if (searchPanel.classList.contains("hidden")) {
            searchPanel.classList.remove("hidden");
            searchInput.focus();
        } else {
            closeSearchPanel();
        }
    });
}

function closeSearchPanel() {
    if (searchPanel) searchPanel.classList.add("hidden");
}

// Search Results Filter
if (searchInput) {
    searchInput.addEventListener("input", () => {
        const val = searchInput.value.trim().toLowerCase();
        const resultsContainer = document.querySelector(".search-results-container");
        
        if (val === "") {
            // Restore default
            resultsContainer.innerHTML = `
                <div class="search-section">
                    <h4>Best Match</h4>
                    <div class="search-item active" data-app="about">
                        <span class="search-item-icon">👤</span>
                        <div class="search-item-info">
                            <strong>About Hassan Qureshi.txt</strong>
                            <span>Learn about skills and background</span>
                        </div>
                    </div>
                </div>
                <div class="search-section" style="margin-top:15px;">
                    <h4>Quick Search Suggestions</h4>
                    <div class="search-suggestions-row">
                        <button class="s-suggestion" data-app="projects">Projects List</button>
                        <button class="s-suggestion" data-app="resume">Resume CV</button>
                        <button class="s-suggestion" data-app="terminal">System Terminal</button>
                        <button class="s-suggestion" data-app="contact">Get in Touch</button>
                    </div>
                </div>
            `;
            bindSearchSuggestionEvents();
            return;
        }
        
        // Search matches
        const apps = [
            { id: "about", title: "About Hassan Qureshi.txt", desc: "Skills and visual background", icon: "👤" },
            { id: "projects", title: "Projects Grid", desc: "Interactive developer sandbox creations", icon: "📁" },
            { id: "resume", title: "Resume CV Timeline", desc: "Qualifications and professional history", icon: "📄" },
            { id: "terminal", title: "Developer Terminal Prompt", desc: "Simulated bash terminal CLI shell", icon: "💻" },
            { id: "contact", title: "Secure Contact Mailer", desc: "Send mock message directly over ports", icon: "✉️" },
            { id: "settings", title: "System Control Panel Settings", desc: "Themes, sounds, wallpapers customization", icon: "⚙️" }
        ];
        
        const matches = apps.filter(a => a.title.toLowerCase().includes(val) || a.desc.toLowerCase().includes(val));
        
        if (matches.length > 0) {
            let html = `<div class="search-section"><h4>Search Matches</h4>`;
            matches.forEach((m, idx) => {
                html += `
                    <div class="search-item ${idx === 0 ? 'active' : ''}" data-app="${m.id}">
                        <span class="search-item-icon">${m.icon}</span>
                        <div class="search-item-info">
                            <strong>${m.title}</strong>
                            <span>${m.desc}</span>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
            resultsContainer.innerHTML = html;
            
            // Re-bind click event to search list items
            resultsContainer.querySelectorAll(".search-item").forEach(item => {
                item.addEventListener("click", () => {
                    const appId = item.getAttribute("data-app");
                    openApp(appId);
                    closeSearchPanel();
                    SoundSystem.play("click");
                });
            });
        } else {
            resultsContainer.innerHTML = `
                <div class="search-section">
                    <h4>No Results Match</h4>
                    <p style="font-size:0.75rem; color:var(--text-muted); padding:10px 0;">No matching apps or documents found inside local indices.</p>
                </div>
            `;
        }
    });
}

function bindSearchSuggestionEvents() {
    document.querySelectorAll(".s-suggestion, .search-item").forEach(item => {
        item.addEventListener("click", () => {
            const appId = item.getAttribute("data-app");
            openApp(appId);
            closeSearchPanel();
            SoundSystem.play("click");
        });
    });
}
bindSearchSuggestionEvents();

// --- Left Widgets Panel Slide-Out Trigger ---
const widgetsTrigger = document.getElementById("btn-widgets");
const widgetsPanel = document.getElementById("widgets-panel");
const btnCloseWidgets = document.getElementById("btn-close-widgets");

if (widgetsTrigger) {
    widgetsTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        SoundSystem.play("click");
        closeStartMenu();
        closeSearchPanel();
        widgetsPanel.classList.toggle("hidden");
    });
}

if (btnCloseWidgets) {
    btnCloseWidgets.addEventListener("click", () => {
        SoundSystem.play("click");
        closeWidgetsPanel();
    });
}

function closeWidgetsPanel() {
    if (widgetsPanel) widgetsPanel.classList.add("hidden");
}

// --- Power Screens Operations (Shutdown / Reboot) ---
const powerScreen = document.getElementById("power-screen");
const powerMessage = document.getElementById("power-message");
const powerRestart = document.getElementById("power-restart");
const powerShutdown = document.getElementById("power-shutdown");
const btnRebootTrigger = document.getElementById("btn-reboot-trigger");

function triggerPowerSequence(mode) {
    closeStartMenu();
    SoundSystem.play("shutdown");
    
    // Display shutdown screen
    powerScreen.classList.remove("hidden");
    powerMessage.textContent = mode === "shutdown" ? "Shutting down..." : "Rebooting...";
    OS.poweringOff = true;
    
    setTimeout(() => {
        // Fade to total black
        powerScreen.style.background = "#000000";
        const spinner = powerScreen.querySelector(".spinner");
        const subText = powerScreen.querySelector(".power-sub");
        if (spinner) spinner.style.display = "none";
        if (subText) subText.style.display = "none";
        
        if (mode === "shutdown") {
            powerMessage.innerHTML = `<span style="color:#64748b; font-size:1.1rem; font-weight:normal;">System suspended safely.</span>`;
            // Show hidden trigger button to "turn on" computer again
            btnRebootTrigger.classList.remove("hidden-button");
        } else {
            // Simulated restart
            setTimeout(() => {
                location.reload();
            }, 1200);
        }
    }, 2500);
}

if (powerShutdown) powerShutdown.addEventListener("click", () => triggerPowerSequence("shutdown"));
if (powerRestart) powerRestart.addEventListener("click", () => triggerPowerSequence("reboot"));
if (btnRebootTrigger) {
    btnRebootTrigger.addEventListener("click", () => {
        location.reload();
    });
}

// --- Dynamic Theme & Appearance Synchronization ---
function changeTheme(themeName) {
    const body = document.body;
    body.className = ""; // Reset body classes
    body.classList.add(themeName);
    OS.settings.theme = themeName;
    
    // Sync settings cards if visible
    document.querySelectorAll(".theme-card").forEach(card => {
        card.classList.remove("active");
        if (card.getAttribute("data-theme") === themeName) {
            card.classList.add("active");
        }
    });
    
    // Save to diagnostic panel switches
    const soundSwitch = document.getElementById("setting-sound");
    if (soundSwitch) {
        soundSwitch.checked = OS.settings.soundEnabled;
    }
}

// --- Desktop Context Menu (Right Click) ---
const contextMenu = document.getElementById("context-menu");

document.getElementById("desktop").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    
    const posX = e.clientX;
    const posY = e.clientY;
    
    // Ensure boundary constraints inside viewports
    const menuWidth = 160;
    const menuHeight = 140;
    const adjustedX = (posX + menuWidth > window.innerWidth) ? posX - menuWidth : posX;
    const adjustedY = (posY + menuHeight > window.innerHeight) ? posY - menuHeight : posY;
    
    contextMenu.style.left = `${adjustedX}px`;
    contextMenu.style.top = `${adjustedY}px`;
    contextMenu.classList.remove("hidden");
    
    SoundSystem.play("click");
});

function closeContextMenu() {
    if (contextMenu) contextMenu.classList.add("hidden");
}

document.addEventListener("click", closeContextMenu);

// Context Menu Action Listeners
document.getElementById("ctx-refresh").addEventListener("click", () => {
    SoundSystem.play("success");
    document.querySelectorAll(".icon-wrapper").forEach(icon => {
        icon.style.transform = "rotate(360deg) scale(1.15)";
        setTimeout(() => {
            icon.style.transform = "";
        }, 600);
    });
});

document.getElementById("ctx-theme-cyber").addEventListener("click", () => changeTheme("theme-cyber-dark"));
document.getElementById("ctx-theme-light").addEventListener("click", () => changeTheme("theme-light"));
document.getElementById("ctx-theme-retro").addEventListener("click", () => changeTheme("theme-retro"));

document.getElementById("ctx-clean").addEventListener("click", () => {
    SoundSystem.play("success");
    document.querySelectorAll(".desktop-icon").forEach((icon, i) => {
        icon.style.animation = "fadeInUp 0.3s ease forwards";
        icon.style.animationDelay = `${i * 0.04}s`;
        setTimeout(() => {
            icon.style.animation = "";
        }, 1000);
    });
});

// --- Sound and System Tray controls ---
const traySound = document.getElementById("tray-sound");
const iconSoundOn = document.getElementById("icon-sound-on");
const iconSoundOff = document.getElementById("icon-sound-off");

if (traySound) {
    traySound.addEventListener("click", () => {
        OS.settings.soundEnabled = !OS.settings.soundEnabled;
        if (OS.settings.soundEnabled) {
            traySound.classList.add("active");
            iconSoundOn.classList.remove("hidden");
            iconSoundOff.classList.add("hidden");
            SoundSystem.play("success");
        } else {
            traySound.classList.remove("active");
            iconSoundOn.classList.add("hidden");
            iconSoundOff.classList.remove("hidden");
        }
    });
}

// Battery tray popup
const trayBattery = document.getElementById("tray-battery");
if (trayBattery) {
    trayBattery.addEventListener("click", () => {
        SoundSystem.play("success");
        alert("Diagnostics Info:\n- Battery Charge: 100% (AC adaptor connected)\n- State: Fully Charged\n- Performance Mode: Optimized Balanced");
    });
}

// --- Window Manager Architecture ---
const windowsContainer = document.getElementById("windows-container");
const taskbarShortcuts = document.getElementById("taskbar-shortcuts");

function openApp(appId) {
    if (OS.windows[appId]) {
        const win = OS.windows[appId];
        if (win.minimized) {
            restoreWindow(appId);
        } else {
            focusWindow(appId);
        }
        return;
    }
    
    SoundSystem.play("window-open");
    
    const winConfig = getAppWindowConfig(appId);
    
    // Cascaded positioning
    const offset = OS.windowCascadeIndex * 24;
    const startTop = Math.min(60 + offset, window.innerHeight - 380);
    const startLeft = Math.min(100 + offset, window.innerWidth - 500);
    OS.windowCascadeIndex = (OS.windowCascadeIndex + 1) % 6;
    
    const windowEl = document.createElement("div");
    windowEl.id = `win-${appId}`;
    windowEl.className = "window";
    windowEl.setAttribute("data-app", appId);
    windowEl.style.top = `${startTop}px`;
    windowEl.style.left = `${startLeft}px`;
    
    // Render window DOM Skeleton
    windowEl.innerHTML = `
        <div class="window-header" id="win-header-${appId}">
            <div class="window-title-container">
                <span class="window-icon">${winConfig.iconSvg}</span>
                <span>${winConfig.title}</span>
            </div>
            <div class="window-controls">
                <button class="win-btn win-btn-min" aria-label="Minimize" title="Minimize"></button>
                <button class="win-btn win-btn-max" aria-label="Maximize" title="Maximize"></button>
                <button class="win-btn win-btn-close" aria-label="Close" title="Close"></button>
            </div>
        </div>
        <div class="window-body" id="win-body-${appId}">
            ${winConfig.contentHtml}
        </div>
    `;
    
    windowsContainer.appendChild(windowEl);
    
    OS.windows[appId] = {
        el: windowEl,
        minimized: false,
        maximized: false,
        top: startTop,
        left: startLeft,
        width: 660,
        height: 460
    };
    
    createTaskbarShortcut(appId, winConfig.title, winConfig.iconSvg);
    
    const minBtn = windowEl.querySelector(".win-btn-min");
    const maxBtn = windowEl.querySelector(".win-btn-max");
    const closeBtn = windowEl.querySelector(".win-btn-close");
    
    minBtn.addEventListener("click", (e) => { e.stopPropagation(); minimizeWindow(appId); });
    maxBtn.addEventListener("click", (e) => { e.stopPropagation(); toggleMaximizeWindow(appId); });
    closeBtn.addEventListener("click", (e) => { e.stopPropagation(); closeWindow(appId); });
    
    windowEl.addEventListener("mousedown", () => {
        focusWindow(appId);
    });
    
    makeWindowDraggable(appId, windowEl.querySelector(".window-header"));
    focusWindow(appId);
    triggerPostOpenEvents(appId);
}

function focusWindow(appId) {
    if (!OS.windows[appId]) return;
    
    document.querySelectorAll(".window").forEach(win => {
        win.classList.remove("active-focus");
    });
    
    const winObj = OS.windows[appId];
    winObj.el.classList.add("active-focus");
    
    OS.focusStack = OS.focusStack.filter(id => id !== appId);
    OS.focusStack.push(appId);
    
    OS.focusStack.forEach((id, index) => {
        if (OS.windows[id]) {
            OS.windows[id].el.style.zIndex = 50 + index;
        }
    });
    
    document.querySelectorAll(".taskbar-shortcut").forEach(tab => {
        tab.classList.remove("active");
    });
    const activeTab = document.getElementById(`task-tab-${appId}`);
    if (activeTab) activeTab.classList.add("active");
}

function minimizeWindow(appId) {
    if (!OS.windows[appId]) return;
    
    SoundSystem.play("click");
    const winObj = OS.windows[appId];
    winObj.minimized = true;
    winObj.el.classList.add("minimized");
    winObj.el.classList.remove("active-focus");
    
    const tab = document.getElementById(`task-tab-${appId}`);
    if (tab) tab.classList.remove("active");
    
    OS.focusStack = OS.focusStack.filter(id => id !== appId);
    if (OS.focusStack.length > 0) {
        focusWindow(OS.focusStack[OS.focusStack.length - 1]);
    }
}

function restoreWindow(appId) {
    if (!OS.windows[appId]) return;
    
    SoundSystem.play("click");
    const winObj = OS.windows[appId];
    winObj.minimized = false;
    winObj.el.classList.remove("minimized");
    focusWindow(appId);
}

function toggleMaximizeWindow(appId) {
    if (!OS.windows[appId]) return;
    
    SoundSystem.play("click");
    const winObj = OS.windows[appId];
    winObj.maximized = !winObj.maximized;
    
    if (winObj.maximized) {
        winObj.el.classList.add("maximized");
    } else {
        winObj.el.classList.remove("maximized");
    }
    focusWindow(appId);
}

function closeWindow(appId) {
    if (!OS.windows[appId]) return;
    
    SoundSystem.play("window-close");
    const winObj = OS.windows[appId];
    winObj.el.style.animation = "windowOpen 0.2s reverse ease-in forwards";
    
    setTimeout(() => {
        winObj.el.remove();
        const tab = document.getElementById(`task-tab-${appId}`);
        if (tab) tab.remove();
        
        delete OS.windows[appId];
        OS.focusStack = OS.focusStack.filter(id => id !== appId);
        
        if (OS.focusStack.length > 0) {
            focusWindow(OS.focusStack[OS.focusStack.length - 1]);
        }
    }, 200);
}

// Window Dragging Mechanics
function makeWindowDraggable(appId, header) {
    const winObj = OS.windows[appId];
    const el = winObj.el;
    
    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    header.addEventListener("mousedown", dragStart);
    header.addEventListener("touchstart", dragStart, { passive: true });
    
    function dragStart(e) {
        if (winObj.maximized) return;
        
        focusWindow(appId);
        const rect = el.getBoundingClientRect();
        xOffset = rect.left;
        yOffset = rect.top;
        
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        
        active = true;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", dragEnd);
        document.addEventListener("touchmove", drag, { passive: false });
        document.addEventListener("touchend", dragEnd);
    }
    
    function drag(e) {
        if (!active) return;
        e.preventDefault();
        
        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }
        
        const minValX = -200;
        const maxValX = window.innerWidth - 100;
        const minValY = 0;
        const maxValY = window.innerHeight - 80;
        
        currentX = Math.max(minValX, Math.min(currentX, maxValX));
        currentY = Math.max(minValY, Math.min(currentY, maxValY));
        
        winObj.left = currentX;
        winObj.top = currentY;
        
        el.style.left = `${currentX}px`;
        el.style.top = `${currentY}px`;
    }
    
    function dragEnd() {
        active = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", dragEnd);
        document.removeEventListener("touchmove", drag);
        document.removeEventListener("touchend", dragEnd);
    }
    
    // Double click to maximize
    header.addEventListener("dblclick", () => {
        toggleMaximizeWindow(appId);
    });
}

function createTaskbarShortcut(appId, title, iconSvg) {
    const tabEl = document.createElement("button");
    tabEl.id = `task-tab-${appId}`;
    tabEl.className = "taskbar-shortcut";
    tabEl.innerHTML = iconSvg;
    tabEl.setAttribute("title", title);
    
    tabEl.addEventListener("click", () => {
        const winObj = OS.windows[appId];
        if (winObj.minimized) {
            restoreWindow(appId);
        } else if (winObj.el.classList.contains("active-focus")) {
            minimizeWindow(appId);
        } else {
            focusWindow(appId);
        }
    });
    
    taskbarShortcuts.appendChild(tabEl);
}

// Close panels on clicking outside
document.addEventListener("click", (e) => {
    if (searchPanel && !searchPanel.contains(e.target) && e.target !== searchTrigger && !searchTrigger.contains(e.target)) {
        closeSearchPanel();
    }
    if (widgetsPanel && !widgetsPanel.contains(e.target) && e.target !== widgetsTrigger && !widgetsTrigger.contains(e.target)) {
        closeWidgetsPanel();
    }
});

// Close Start Menu clicking outside
document.addEventListener("mousedown", (e) => {
    if (startMenu && !startMenu.contains(e.target) && e.target !== btnStart && !btnStart.contains(e.target)) {
        closeStartMenu();
    }
});

// --- Window App Content Layout Templates ---
function getAppWindowConfig(appId) {
    const icons = {
        about: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        projects: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>`,
        resume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
        terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
        contact: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
        settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
        paint: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.953 9.953 0 0 0 12 22z"/><circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"/><circle cx="11.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"/></svg>`,
        notepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`
    };
    
    switch (appId) {
        case "about":
            return {
                title: "About Hassan Qureshi.txt",
                iconSvg: icons.about,
                contentHtml: `
                    <div class="about-container">
                        <div class="about-left">
                            <div class="about-avatar" style="background-image: url('profile.jpg'); background-size: cover; background-position: center; border: 2px solid var(--text-accent); border-radius: 50%;">
                            </div>
                            <div class="about-bio-brief">
                                <h2>Hassan Qureshi</h2>
                                <p>Game Dev & Software Engineer</p>
                            </div>
                            <div class="about-stats">
                                <div class="stat-item">
                                    <span class="stat-label">Location:</span>
                                    <span class="stat-value">Islamabad, PK</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Availability:</span>
                                    <span class="stat-value" style="color:#27c93f;">Active / Intern</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Status:</span>
                                    <span class="stat-value">FAST NUCES (6th Sem)</span>
                                </div>
                            </div>
                            <button class="btn-secondary" onclick="openApp('resume')">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                                <span style="margin-left:4px;">View Resume</span>
                            </button>
                        </div>
                        
                        <div class="about-right">
                            <div class="about-section">
                                <h3 class="section-title">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14h.01M12 8v4"/></svg>
                                    <span>Core Profile</span>
                                </h3>
                                <p class="about-paragraph">
                                    I am a software engineer passionate about building interactive gameplay mechanics and immersive systems. As a student at FAST NUCES in Islamabad, I specialize in Unity Game Development, Virtual Reality (VR) engineering, C#, and Python. Guided by a strong mathematical foundation, I enjoy solving complex structural problems and creating experiences that bring value and engagement to users.
                                </p>
                            </div>
                            
                            <div class="about-section">
                                <h3 class="section-title">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                    <span>Core Skills</span>
                                </h3>
                                <div class="skills-grid">
                                    ${renderSkillCategory("frontend", "Game & VR Engineering")}
                                    ${renderSkillCategory("backend", "Software Eng & Languages")}
                                </div>
                            </div>
                        </div>
                    </div>
                `
            };
            
        case "projects":
            return {
                title: "Active Projects",
                iconSvg: icons.projects,
                contentHtml: `
                    <div class="projects-container" style="position: relative;">
                        <div class="projects-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 10px; flex-wrap: wrap; gap: 10px;">
                            <div class="projects-title">
                                <h2>Interactive Creations</h2>
                            </div>
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <div class="projects-filter" style="display: flex; gap: 6px;">
                                    <button class="filter-btn active" data-filter="all">All</button>
                                    <button class="filter-btn" data-filter="gamedev">Game Dev</button>
                                    <button class="filter-btn" data-filter="frontend">Web Apps</button>
                                </div>
                                <a href="https://www.linkedin.com/in/hassan-qureshi-059677294/details/projects/" target="_blank" class="btn-secondary" style="font-size: 0.68rem; padding: 4px 10px; display: inline-flex; align-items: center; text-decoration: none; gap: 4px; border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-standard); color: var(--text-primary); transition: all var(--transition-fast);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 12px; height: 12px; color: #0078d4;"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    <span>LinkedIn Projects</span>
                                </a>
                            </div>
                        </div>
                        
                        <div class="projects-grid" id="projects-grid-list">
                            ${renderProjects()}
                        </div>
                        
                        <!-- Premium Project Details Flyout -->
                        <div class="project-details-flyout hidden" id="proj-flyout">
                            <div class="flyout-header">
                                <button class="btn-back-to-grid" id="btn-close-flyout" onclick="closeProjectDetails()">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px; height:14px; margin-right:4px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                                    <span>Back to Projects</span>
                                </button>
                            </div>
                            <div class="flyout-body" id="proj-flyout-content"></div>
                        </div>
                    </div>
                `
            };
            
        case "resume":
            return {
                title: "Resume_Hassan_Qureshi.pdf",
                iconSvg: icons.resume,
                contentHtml: `
                    <div class="resume-container">
                        <div class="resume-header">
                            <div>
                                <h2>Qualifications & Timeline</h2>
                            </div>
                            <div class="resume-actions">
                                <a href="Hassan_Qureshi_CV.docx" download="Hassan_Qureshi_CV.docx" onclick="SoundSystem.play('success');" class="btn-secondary" style="display:inline-flex;">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                                    <span style="margin-left:6px;">Download CV</span>
                                </a>
                            </div>
                        </div>
                        
                        <div class="resume-content">
                            <div class="timeline-section">
                                <h3>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                                    <span>Experience</span>
                                </h3>
                                <div class="timeline">
                                    ${renderTimelineItems(DATA.experience)}
                                </div>
                            </div>
                            
                            <div class="timeline-section">
                                <h3>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                                    <span>Education</span>
                                </h3>
                                <div class="timeline">
                                    ${renderTimelineItems(DATA.education)}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Dynamic Credentials Section -->
                        <div class="resume-credentials-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border-glass);">
                            <div class="cred-section">
                                <h3 style="display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 600; margin-bottom: 12px; color: var(--text-accent);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px; height:16px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                    <span>Certifications</span>
                                </h3>
                                <div class="cred-list-wrapper" style="display: flex; flex-direction: column; gap: 10px;">
                                    ${renderCertifications()}
                                </div>
                            </div>
                            
                            <div class="cred-section">
                                <h3 style="display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 600; margin-bottom: 12px; color: var(--text-accent-secondary);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px; height:16px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                                    <span>Honors & Awards</span>
                                </h3>
                                <ul style="list-style: none; padding: 0; font-size: 0.78rem; line-height: 1.6; color: var(--text-secondary);">
                                    <li style="margin-bottom: 6px; display: flex; align-items: start; gap: 6px;"><span style="color:var(--text-accent-secondary);">★</span> <strong>Rector List Merit</strong> — FAST NUCES</li>
                                    <li style="margin-bottom: 6px; display: flex; align-items: start; gap: 6px;"><span style="color:var(--text-accent-secondary);">★</span> <strong>3X Gold & Silver</strong> — Esports & Academics</li>
                                    <li style="margin-bottom: 6px; display: flex; align-items: start; gap: 6px;"><span style="color:var(--text-accent-secondary);">★</span> <strong>Resilient & Hardworking Ethos</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `
            };
            
        case "terminal":
            return {
                title: "Simulated System Shell",
                iconSvg: icons.terminal,
                contentHtml: `
                    <div class="terminal-container">
                        <canvas class="matrix-canvas" id="canvas-matrix"></canvas>
                        <div class="terminal-body-wrapper">
                            <div class="terminal-history" id="term-history">
                                <div class="terminal-line">Hassan OS (v1.0.4-LTS) Core Shell CLI</div>
                                <div class="terminal-line">Copyright (c) 2026. All rights secured.</div>
                                <div class="terminal-line">Type <span style="color:#fff; font-weight:bold;">help</span> to retrieve commands list.</div>
                                <div class="terminal-line">----------------------------------------------------</div>
                            </div>
                            <div class="terminal-prompt-container">
                                <span class="terminal-prompt-text">hassan@root:~$</span>
                                <input type="text" id="terminal-input" autofocus autocomplete="off" spellcheck="false" aria-label="Terminal prompt">
                            </div>
                        </div>
                    </div>
                `
            };
            
        case "contact":
            return {
                title: "Contact Hassan Qureshi.txt",
                iconSvg: icons.contact,
                contentHtml: `
                    <div class="contact-container" style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:30px; text-align:center; background:rgba(0,0,0,0.15); border-radius:var(--radius-window);">
                        <div style="margin-bottom:25px;">
                            <div style="font-size:2.8rem; margin-bottom:10px; animation: float-blob 4s infinite alternate ease-in-out;">📬</div>
                            <h2 style="font-size:1.6rem; font-weight:600; color:var(--text-accent); margin-bottom:8px;">Hassan Qureshi</h2>
                            <p style="font-size:0.8rem; color:var(--text-secondary); max-width:340px; margin:0 auto; line-height:1.4;">Game Dev & Software Engineer. Reach out directly through these active coordinates.</p>
                        </div>
                        
                        <div style="display:flex; flex-direction:column; gap:12px; width:100%; max-width:320px;">
                            <a href="mailto:qentertainer5@gmail.com" class="btn-secondary" style="display:flex; align-items:center; justify-content:center; gap:10px; padding:12px 18px; border-radius:var(--radius-standard); font-size:0.8rem; font-weight:500; text-decoration:none; transition: all var(--transition-fast);">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px; height:16px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                <span>qentertainer5@gmail.com</span>
                            </a>
                            
                            <a href="https://linkedin.com/in/hassanqureshi-059677294" target="_blank" class="btn-primary" style="display:flex; align-items:center; justify-content:center; gap:10px; padding:12px 18px; border-radius:var(--radius-standard); font-size:0.8rem; font-weight:500; text-decoration:none; transition: all var(--transition-fast);">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px; height:16px;"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                <span>LinkedIn Profile</span>
                            </a>
                            
                            <div style="display:flex; align-items:center; justify-content:center; gap:8px; font-size:0.75rem; color:var(--text-muted); margin-top:8px;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px; height:14px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                <span>Islamabad, Pakistan</span>
                            </div>
                        </div>
                    </div>
                `
            };
            
        case "settings":
            return {
                title: "Control Panel & Settings",
                iconSvg: icons.settings,
                contentHtml: `
                    <div class="settings-container">
                        <div class="settings-sidebar">
                            <div class="settings-tab active" data-pane="theme">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"/></svg>
                                <span>Appearance</span>
                            </div>
                            <div class="settings-tab" data-pane="system">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                                <span>Diagnostics</span>
                            </div>
                        </div>
                        
                        <div class="settings-content">
                            <div class="settings-pane" id="pane-theme">
                                <h3>Visual Themes</h3>
                                <p class="settings-section-desc">Change the desktop environment color scheme instantly.</p>
                                <div class="theme-options">
                                    <div class="theme-card active" data-theme="theme-cyber-dark">
                                        <div class="theme-preview-dot cyber" style="background:#0c0c16;">⚡</div>
                                        <strong>Cyber Dark</strong>
                                    </div>
                                    <div class="theme-card" data-theme="theme-light">
                                        <div class="theme-preview-dot light" style="background:#f3f3f3;">🌤️</div>
                                        <strong>Glass Light</strong>
                                    </div>
                                    <div class="theme-card" data-theme="theme-retro">
                                        <div class="theme-preview-dot retro" style="background:#030803; color:#33ff33;">📟</div>
                                        <strong>Retro CRT</strong>
                                    </div>
                                    <div class="theme-card" data-theme="theme-crimson">
                                        <div class="theme-preview-dot crimson" style="background:#1a080d; color:#ff1e64;">🧛</div>
                                        <strong>Crimson Glass</strong>
                                    </div>
                                    <div class="theme-card" data-theme="theme-matrix">
                                        <div class="theme-preview-dot matrix" style="background:#000000; color:#39ff14; border:1px solid #39ff14;">🕶️</div>
                                        <strong>Matrix Neon</strong>
                                    </div>
                                    <div class="theme-card" data-theme="theme-synthwave">
                                        <div class="theme-preview-dot synthwave" style="background:#2b0f54; color:#ff007f;">🌴</div>
                                        <strong>Synthwave Grid</strong>
                                    </div>
                                </div>
                                
                                <h3 style="margin-top:20px;">Wallpaper Design</h3>
                                <div class="wallpaper-options">
                                    <div class="wallpaper-card wp-default active" data-wall="wp-default">
                                        <span>Deep Space</span>
                                    </div>
                                    <div class="wallpaper-card wp-neon" data-wall="wp-neon">
                                        <span>Neon Glow</span>
                                    </div>
                                    <div class="wallpaper-card wp-deep" data-wall="wp-deep">
                                        <span>Ocean Deep</span>
                                    </div>
                                    <div class="wallpaper-card wp-minimal" data-wall="wp-minimal">
                                        <span>Minimal Gray</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="settings-pane hidden" id="pane-system">
                                <h3>Auditory & Performance</h3>
                                <p class="settings-section-desc">Tweak UI diagnostic configurations.</p>
                                <div class="option-row">
                                    <div class="option-info">
                                        <strong>Synthesized Chimes</strong>
                                        <span>Produce vintage Web Audio beep effects on UI clicks.</span>
                                    </div>
                                    <label class="switch">
                                        <input type="checkbox" id="setting-sound" checked>
                                        <span class="slider"></span>
                                    </label>
                                </div>
                                <div class="option-row">
                                    <div class="option-info">
                                        <strong>Desktop Motion Graphics</strong>
                                        <span>Enable rich slide transitions and fade overlays.</span>
                                    </div>
                                    <label class="switch">
                                        <input type="checkbox" id="setting-graphics" checked>
                                        <span class="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            };
        case "paint":
            return {
                title: "Paintbrush.exe",
                iconSvg: icons.paint,
                contentHtml: `
                    <div class="paint-container" style="display:flex; flex-direction:column; height:100%; padding:12px; gap:10px; background:#181825; color:#cdd6f4;">
                        <div class="paint-toolbar" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:8px; gap:10px;">
                            <div style="display:flex; align-items:center; gap:8px;">
                                <span style="font-size:0.75rem; color:#a6adc8;">Colors:</span>
                                <div style="display:flex; gap:6px;">
                                    <button class="paint-color" data-color="#0078d4" style="width:18px; height:18px; border-radius:50%; border:2px solid #ffffff; background:#0078d4; cursor:pointer; padding:0; box-sizing:border-box;"></button>
                                    <button class="paint-color" data-color="#f35588" style="width:18px; height:18px; border-radius:50%; border:1px solid rgba(255,255,255,0.2); background:#f35588; cursor:pointer; padding:0; box-sizing:border-box;"></button>
                                    <button class="paint-color" data-color="#33ff33" style="width:18px; height:18px; border-radius:50%; border:1px solid rgba(255,255,255,0.2); background:#33ff33; cursor:pointer; padding:0; box-sizing:border-box;"></button>
                                    <button class="paint-color" data-color="#ffcc00" style="width:18px; height:18px; border-radius:50%; border:1px solid rgba(255,255,255,0.2); background:#ffcc00; cursor:pointer; padding:0; box-sizing:border-box;"></button>
                                    <button class="paint-color" data-color="#ffffff" style="width:18px; height:18px; border-radius:50%; border:1px solid rgba(255,255,255,0.2); background:#ffffff; cursor:pointer; padding:0; box-sizing:border-box;"></button>
                                    <button class="paint-color" data-color="#11111b" style="width:18px; height:18px; border-radius:50%; border:1px solid rgba(255,255,255,0.2); background:#11111b; cursor:pointer; padding:0; box-sizing:border-box;"></button>
                                </div>
                            </div>
                            <div style="display:flex; align-items:center; gap:10px;">
                                <label style="font-size:0.75rem; color:#a6adc8; display:flex; align-items:center; gap:5px;">
                                    Size:
                                    <input type="range" id="paint-size" min="2" max="25" value="5" style="width:60px; height:4px; cursor:pointer; background:#313244;">
                                </label>
                                <button id="paint-clear" class="btn-secondary" style="padding:4px 8px; font-size:0.7rem; border-radius:4px; cursor:pointer;">Clear</button>
                            </div>
                        </div>
                        <div style="flex:1; border:1px solid rgba(255,255,255,0.05); border-radius:6px; background:#11111b; position:relative; overflow:hidden; min-height: 250px;">
                            <canvas id="paint-canvas" style="display:block; width:100%; height:100%; cursor:crosshair;"></canvas>
                        </div>
                    </div>
                `
            };
        case "notepad":
            return {
                title: "Notepad.exe",
                iconSvg: icons.notepad,
                contentHtml: `
                    <div class="notepad-container" style="display:flex; flex-direction:column; height:100%; padding:12px; gap:10px; background:#1e1e2e; color:#cdd6f4;">
                        <div class="notepad-toolbar" style="display:flex; align-items:center; gap:15px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:8px;">
                            <label style="font-size:0.75rem; color:#a6adc8;">Font Size:
                                <select id="notepad-font-size" style="background:#313244; color:#cdd6f4; border:1px solid #45475a; border-radius:4px; padding:2px 6px; font-family:var(--font-mono); font-size:0.72rem; outline:none; cursor:pointer;">
                                    <option value="12">12px</option>
                                    <option value="14" selected>14px</option>
                                    <option value="16">16px</option>
                                    <option value="18">18px</option>
                                    <option value="20">20px</option>
                                </select>
                            </label>
                            <button id="notepad-save" class="btn-primary" style="padding:4px 10px; font-size:0.7rem; border-radius:4px; cursor:pointer;">Save</button>
                            <button id="notepad-clear" class="btn-secondary" style="padding:4px 10px; font-size:0.7rem; border-radius:4px; cursor:pointer;">Clear</button>
                        </div>
                        <textarea id="notepad-textarea" placeholder="Type your ideas, scratchpads, or logs here..." style="flex:1; width:100%; border:none; background:transparent; color:#cdd6f4; font-family:var(--font-mono); font-size:14px; line-height:1.5; resize:none; outline:none; padding-top:5px; min-height: 250px;"></textarea>
                    </div>
                `
            };
    }
}

function renderSkillCategory(catId, title) {
    const list = DATA.skills[catId];
    let html = `
        <div class="skill-bar-container" style="grid-column: span 2; margin-top: 6px;">
            <strong style="color:var(--text-accent); font-size:0.75rem;">${title}</strong>
        </div>
    `;
    
    list.forEach(skill => {
        html += `
            <div class="skill-bar-container">
                <div class="skill-info">
                    <span class="stat-label">${skill.name}</span>
                    <span class="stat-value">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" data-level="${skill.level}" style="width: 0%"></div>
                </div>
            </div>
        `;
    });
    return html;
}

function renderProjects() {
    return DATA.projects.map(proj => `
        <div class="project-card" data-cat="${proj.category}" onclick="showProjectDetails(${proj.id})">
            <div class="project-preview" style="${proj.image ? `background-image: url('${proj.image}'); background-size: cover; background-position: center; height: 110px;` : 'height: 100px;'}">
                ${proj.image ? '' : `<div class="project-preview-mock">${proj.preview}</div>`}
            </div>
            <div class="project-details">
                <div>
                    <h3>${proj.title}</h3>
                    <p>${proj.summary}</p>
                    <div class="project-tags">
                        ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="project-actions" onclick="event.stopPropagation();">
                    <a href="${proj.gitUrl}" target="_blank" class="project-btn" onclick="SoundSystem.play('click')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                        <span>GitHub</span>
                    </a>
                    <a href="${proj.liveUrl}" target="_blank" class="project-btn" style="border-color: var(--text-accent); color: var(--text-accent);" onclick="SoundSystem.play('success');">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        <span>${proj.category === 'gamedev' && !proj.liveUrl.includes('github.com') ? 'Play Here' : 'Live Demo'}</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTimelineItems(list) {
    return list.map(item => `
        <div class="timeline-item">
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-org">${item.org}</div>
            <div class="timeline-desc">${item.desc}</div>
        </div>
    `).join('');
}

function renderCertifications() {
    return DATA.certifications.map(cert => `
        <div class="cred-card" style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 6px; padding: 10px; transition: all var(--transition-fast); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; gap: 10px; align-items: flex-start;">
                <div style="color: var(--text-accent); font-size: 1rem; margin-top: 2px;">✔</div>
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <strong style="font-size: 0.8rem; color: var(--text-primary); line-height: 1.3;">${cert.title}</strong>
                    <span style="font-size: 0.68rem; color: var(--text-secondary);">${cert.issuer} • Issued ${cert.date}</span>
                    ${cert.credentialId ? `<span style="font-size: 0.62rem; color: var(--text-muted);">Credential ID: <code style="font-family: var(--font-mono); background: rgba(255,255,255,0.04); padding: 1px 4px; border-radius: 2px;">${cert.credentialId}</code></span>` : ''}
                </div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-left: 20px;">
                ${cert.skills.map(s => `<span style="font-size: 0.58rem; font-family: var(--font-mono); padding: 1px 6px; background: rgba(0, 120, 212, 0.1); border-radius: 2px; color: var(--text-accent);">${s}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function showProjectDetails(projId) {
    const proj = DATA.projects.find(p => p.id === projId);
    if (!proj) return;
    
    SoundSystem.play("click");
    
    const flyout = document.getElementById("proj-flyout");
    const content = document.getElementById("proj-flyout-content");
    if (!flyout || !content) return;
    
    let html = `
        <div class="flyout-hero" style="${proj.image ? `background-image: url('${proj.image}'); background-size: cover; background-position: center; height: 180px; border-radius: var(--radius-standard);` : `background: linear-gradient(135deg, rgba(0, 120, 212, 0.15) 0%, rgba(0, 198, 255, 0.15) 100%); height: 100px; display: flex; align-items: center; justify-content: center; border-radius: var(--radius-standard);`}">
            ${proj.image ? '' : `<div style="font-size: 2.5rem; font-weight: 700; color: rgba(255,255,255,0.15);">${proj.preview}</div>`}
        </div>
        
        <div class="flyout-details-body" style="padding: 16px 0; display: flex; flex-direction: column; gap: 20px;">
            <div class="flyout-title-row" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; flex-wrap: wrap;">
                <div>
                    <h2 style="font-size: 1.3rem; font-weight: 600; color: var(--text-primary);">${proj.title}</h2>
                    <span style="font-size: 0.72rem; color: var(--text-accent); font-family: var(--font-mono); font-weight: 600;">${proj.date}</span>
                </div>
                <div class="flyout-actions" style="display: flex; gap: 8px;">
                    <a href="${proj.gitUrl}" target="_blank" class="project-btn" style="padding: 6px 12px; font-size: 0.72rem;" onclick="SoundSystem.play('click')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px; height:12px; margin-right:4px;"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                        <span>Repository</span>
                    </a>
                    <a href="${proj.liveUrl}" target="_blank" class="project-btn" style="border-color: var(--text-accent); color: var(--text-accent); padding: 6px 12px; font-size: 0.72rem;" onclick="SoundSystem.play('success')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px; height:12px; margin-right:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        <span>${proj.category === 'gamedev' && !proj.liveUrl.includes('github.com') ? 'Play Now' : 'Live Link'}</span>
                    </a>
                </div>
            </div>
            
            <div class="flyout-sections-grid" style="display: grid; grid-template-columns: 1fr 220px; gap: 24px;">
                <div class="flyout-main-info" style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <h3 style="font-size: 0.88rem; font-weight: 600; color: var(--text-primary); margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; color: var(--text-accent);"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            <span>Project Description</span>
                        </h3>
                        <p style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.5; white-space: pre-line;">${proj.description}</p>
                    </div>
                    
                    ${proj.features ? `
                        <div>
                            <h3 style="font-size: 0.88rem; font-weight: 600; color: var(--text-primary); margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; color: var(--text-accent);"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                <span>Key Features</span>
                            </h3>
                            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 6px; font-size: 0.75rem; color: var(--text-secondary);">
                                ${proj.features.map(f => `<li style="display: flex; gap: 8px; align-items: flex-start;"><span style="color: var(--text-accent); font-weight: bold;">✔</span> <span>${f}</span></li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    
                    ${proj.howToPlay ? `
                        <div>
                            <h3 style="font-size: 0.88rem; font-weight: 600; color: var(--text-primary); margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; color: var(--text-accent);"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                <span>Operations & Guide</span>
                            </h3>
                            <ol style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; font-size: 0.75rem; color: var(--text-secondary);">
                                ${proj.howToPlay.map((h, i) => `
                                    <li style="display: flex; gap: 10px; align-items: flex-start;">
                                        <span style="background: rgba(0,120,212,0.1); color: var(--text-accent); font-weight: bold; border-radius: 50%; width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; flex-shrink: 0; margin-top: 1px;">${i+1}</span>
                                        <span>${h}</span>
                                    </li>
                                `).join('')}
                            </ol>
                        </div>
                    ` : ''}
                </div>
                
                <div class="flyout-sidebar-info" style="display: flex; flex-direction: column; gap: 16px; background: rgba(255,255,255,0.01); border-left: 1px solid rgba(255,255,255,0.03); padding-left: 15px;">
                    <div>
                        <h4 style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 6px; letter-spacing: 0.5px;">Skills Applied</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                            ${proj.skills.map(s => `<span style="font-size: 0.6rem; padding: 2px 6px; background: rgba(255, 255, 255, 0.04); border-radius: 4px; color: var(--text-accent);">${s}</span>`).join('')}
                        </div>
                    </div>
                    
                    ${proj.controls ? `
                        <div>
                            <h4 style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 8px; letter-spacing: 0.5px;">Controls Mapping</h4>
                            <div style="display: flex; flex-direction: column; gap: 6px;">
                                ${proj.controls.map(c => `
                                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem;">
                                        <kbd style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); border-radius: 3px; padding: 2px 5px; font-family: var(--font-mono); font-weight: bold; color: var(--text-primary); min-width: 20px; text-align: center;">${c.key}</kbd>
                                        <span style="color: var(--text-secondary); text-align: right;">${c.action}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${proj.objective ? `
                        <div>
                            <h4 style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; letter-spacing: 0.5px;">Core Objective</h4>
                            <p style="font-size: 0.7rem; font-style: italic; color: var(--text-secondary); line-height: 1.4; background: rgba(0, 120, 212, 0.03); padding: 8px; border-left: 2px solid var(--text-accent); border-radius: 0 4px 4px 0;">"${proj.objective}"</p>
                        </div>
                    ` : ''}
                    
                    ${proj.otherContributors ? `
                        <div>
                            <h4 style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; letter-spacing: 0.5px;">Development</h4>
                            <div style="display: flex; gap: 6px; align-items: center; font-size: 0.68rem; color: var(--text-secondary); background: rgba(39, 201, 63, 0.05); padding: 6px 10px; border-radius: 4px; border: 1px solid rgba(39, 201, 63, 0.1);">
                                <span>👥</span> <span>Collaborative Release</span>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    content.innerHTML = html;
    flyout.classList.remove("hidden");
    content.scrollTop = 0; // Scroll back to top
}

function closeProjectDetails() {
    SoundSystem.play("click");
    const flyout = document.getElementById("proj-flyout");
    if (flyout) flyout.classList.add("hidden");
}

// --- App Setup Scripts Post-Instantiation ---
function triggerPostOpenEvents(appId) {
    if (appId === "about") {
        setTimeout(() => {
            const container = document.getElementById(`win-${appId}`);
            if (container) {
                container.querySelectorAll(".skill-progress").forEach(bar => {
                    const level = bar.getAttribute("data-level");
                    bar.style.width = `${level}%`;
                });
            }
        }, 150);
    }
    
    else if (appId === "projects") {
        const win = document.getElementById(`win-${appId}`);
        if (!win) return;
        
        const filterBtns = win.querySelectorAll(".filter-btn");
        const cards = win.querySelectorAll(".project-card");
        
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                SoundSystem.play("click");
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                
                const filter = btn.getAttribute("data-filter");
                
                cards.forEach(card => {
                    if (filter === "all" || card.getAttribute("data-cat") === filter) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }
    

    
    else if (appId === "settings") {
        const win = document.getElementById(`win-${appId}`);
        if (!win) return;
        
        const tabs = win.querySelectorAll(".settings-tab");
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                SoundSystem.play("click");
                tabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                
                const paneId = tab.getAttribute("data-pane");
                win.querySelectorAll(".settings-pane").forEach(pane => pane.classList.add("hidden"));
                win.querySelector(`#pane-${paneId}`).classList.remove("hidden");
            });
        });
        
        win.querySelectorAll(".theme-card").forEach(card => {
            card.addEventListener("click", () => {
                const selectedTheme = card.getAttribute("data-theme");
                changeTheme(selectedTheme);
                SoundSystem.play("success");
            });
        });
        
        win.querySelectorAll(".wallpaper-card").forEach(wp => {
            wp.addEventListener("click", () => {
                SoundSystem.play("success");
                win.querySelectorAll(".wallpaper-card").forEach(w => w.classList.remove("active"));
                wp.classList.add("active");
                
                const wallClass = wp.getAttribute("data-wall");
                const wallpaperGlow = document.querySelector(".wallpaper-glow");
                const desktopEnv = document.getElementById("desktop-env");
                
                desktopEnv.style.background = "";
                if (wallClass === "wp-default") {
                    desktopEnv.style.background = "radial-gradient(circle at 50% 50%, #150f30 0%, #06060c 80%)";
                    wallpaperGlow.style.background = "radial-gradient(circle, rgba(0, 120, 212, 0.15) 0%, transparent 65%)";
                } else if (wallClass === "wp-neon") {
                    desktopEnv.style.background = "linear-gradient(135deg, #300f26 0%, #06060c 100%)";
                    wallpaperGlow.style.background = "radial-gradient(circle, rgba(243, 85, 136, 0.15) 0%, transparent 65%)";
                } else if (wallClass === "wp-deep") {
                    desktopEnv.style.background = "radial-gradient(circle, #0e1e38 0%, #020617 100%)";
                    wallpaperGlow.style.background = "radial-gradient(circle, rgba(0, 198, 255, 0.15) 0%, transparent 65%)";
                } else if (wallClass === "wp-minimal") {
                    desktopEnv.style.background = "#0f172a";
                    wallpaperGlow.style.background = "none";
                }
                
                OS.settings.wallpaper = wallClass;
            });
        });
        
        const soundCheck = win.querySelector("#setting-sound");
        soundCheck.checked = OS.settings.soundEnabled;
        soundCheck.addEventListener("change", () => {
            OS.settings.soundEnabled = soundCheck.checked;
            SoundSystem.play("click");
            
            if (OS.settings.soundEnabled) {
                traySound.classList.add("active");
                iconSoundOn.classList.remove("hidden");
                iconSoundOff.classList.add("hidden");
            } else {
                traySound.classList.remove("active");
                iconSoundOn.classList.add("hidden");
                iconSoundOff.classList.remove("hidden");
            }
        });
    }
    
    else if (appId === "terminal") {
        initTerminalApp();
    }
    else if (appId === "paint") {
        initPaintApp();
    }
    else if (appId === "notepad") {
        initNotepadApp();
    }
}

// --- Simulated Retro Terminal CLI Shell ---
function initTerminalApp() {
    const win = document.getElementById("win-terminal");
    if (!win) return;
    
    const input = win.querySelector("#terminal-input");
    const history = win.querySelector("#term-history");
    const canvas = win.querySelector("#canvas-matrix");
    
    input.focus();
    win.addEventListener("click", () => input.focus());
    
    let matrixInterval = null;
    if (canvas) {
        matrixInterval = startMatrixEffect(canvas);
    }
    
    const closeBtn = win.querySelector(".win-btn-close");
    const cleanup = () => {
        if (matrixInterval) clearInterval(matrixInterval);
    };
    closeBtn.addEventListener("click", cleanup);
    
    const commands = {
        help: "Lists all available structural commands.",
        about: "Open the creative developer bio app.",
        projects: "Open the active creations sandbox app.",
        resume: "Reveal CV and qualifications timeline.",
        contact: "Open secure encrypted mailer.",
        settings: "Modify desktop parameters control panel.",
        neofetch: "Print system hardware details.",
        clear: "Flush local terminal output history.",
        date: "Return real-time diagnostic clock timestamps.",
        matrix: "Toggles glowing code rain overlay canvas.",
        sysinfo: "Review operational system threads details."
    };
    
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const rawVal = input.value.trim();
            input.value = "";
            
            if (rawVal === "") return;
            
            SoundSystem.play("click");
            
            const userLine = document.createElement("div");
            userLine.className = "terminal-line input-cmd";
            userLine.textContent = `hassan@root:~$ ${rawVal}`;
            history.appendChild(userLine);
            
            const parts = rawVal.split(' ');
            const cmd = parts[0].toLowerCase();
            
            const responseLine = document.createElement("div");
            responseLine.className = "terminal-line output-res";
            
            switch (cmd) {
                case "help":
                    let helpHtml = "Recognized CLI Shell Commands:<br>";
                    for (const [name, desc] of Object.entries(commands)) {
                        helpHtml += `&nbsp;&nbsp;<span style="color:#0078d4; font-weight:bold;">${name.padEnd(12)}</span> - ${desc}<br>`;
                    }
                    responseLine.innerHTML = helpHtml;
                    break;
                    
                case "about":
                    openApp("about");
                    responseLine.textContent = "Launching Bio Profile window...";
                    break;
                    
                case "projects":
                    openApp("projects");
                    responseLine.textContent = "Launching Sandbox Creations window...";
                    break;
                    
                case "resume":
                    openApp("resume");
                    responseLine.textContent = "Launching Professional Resume window...";
                    break;
                    
                case "contact":
                    openApp("contact");
                    responseLine.textContent = "Launching Secure Dispatcher window...";
                    break;
                    
                case "settings":
                    openApp("settings");
                    responseLine.textContent = "Launching System Settings Panel...";
                    break;
                    
                case "clear":
                    history.innerHTML = "";
                    break;
                    
                case "date":
                    responseLine.textContent = `Timestamp: ${new Date().toString()}`;
                    break;
                    
                case "matrix":
                    if (canvas) {
                        const op = canvas.style.opacity || "0.15";
                        if (op === "0") {
                            canvas.style.opacity = "0.15";
                            responseLine.textContent = "Matrix code canvas activated.";
                        } else {
                            canvas.style.opacity = "0";
                            responseLine.textContent = "Matrix code canvas suspended.";
                        }
                    }
                    break;
                    
                case "neofetch":
                    responseLine.innerHTML = `
                        <div class="neofetch-container">
                            <div class="neofetch-logo">
      ██████╗  ██████╗
     ██╔═══██╗██╔════╝
     ██║   ██║███████╗
     ██║   ██║╚════██║
     ╚██████╔╝███████║
      ╚═════╝ ╚══════╝
                            </div>
                            <div class="neofetch-info">
                                <div><span>hassanqureshi</span>@<span>fast-nuces-desktop</span></div>
                                <div>--------------------</div>
                                <div><span>OS:</span> Hassan Qureshi OS v11.6</div>
                                <div><span>Kernel:</span> WebCore v3.6.0-fast</div>
                                <div><span>Uptime:</span> ${Math.floor(performance.now() / 1000)} seconds</div>
                                <div><span>Terminal:</span> Bash Simulated Command Prompt</div>
                                <div><span>Theme:</span> ${OS.settings.theme.replace('theme-', '')}</div>
                                <div><span>Wallpaper:</span> ${OS.settings.wallpaper}</div>
                                <div><span>CPU:</span> AMD Ryzen 9 7950X3D (Simulated)</div>
                            </div>
                        </div>
                    `;
                    break;
                    
                case "sysinfo":
                    const activeP = Object.keys(OS.windows).length;
                    responseLine.innerHTML = `
                        Diagnostics Panel:<br>
                        - Active Processes: ${activeP} concurrent threads<br>
                        - Sounds: ${OS.settings.soundEnabled ? "ONLINE" : "MUTED"}<br>
                        - Encryption Protocols: SECURE SSL/TSL<br>
                        - Browser Engine: ${navigator.userAgent.slice(0, 42)}...
                    `;
                    break;
                    
                default:
                    SoundSystem.play("error");
                    responseLine.className = "terminal-line error-res";
                    responseLine.textContent = `Error: unrecognized command directive '${cmd}'. Type 'help' for diagnostics.`;
                    break;
            }
            
            if (cmd !== "clear") {
                history.appendChild(responseLine);
            }
            history.scrollTop = history.scrollHeight;
        }
    });
}

function startMatrixEffect(canvas) {
    const ctx = canvas.getContext("2d");
    
    function resizeCanvas() {
        const parent = canvas.parentElement;
        if (parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }
    }
    resizeCanvas();
    
    const chars = "010101010101".split("");
    const fontSize = 10;
    const columns = Math.floor(canvas.width / fontSize) + 1;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * -100;
    }
    
    function draw() {
        ctx.fillStyle = "rgba(12, 12, 12, 0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#0078d4"; // Windows blue matrix style!
        ctx.font = fontSize + "px 'Fira Code', monospace";
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    const timer = setInterval(draw, 35);
    return timer;
}

// --- Dynamic Canvas Paint Application ---
function initPaintApp() {
    const win = document.getElementById("win-paint");
    if (!win) return;
    const canvas = win.querySelector("#paint-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let currentColor = "#0078d4";
    let currentWidth = 5;
    
    const resizeCanvas = () => {
        const rect = canvas.parentNode.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentWidth;
    };
    
    setTimeout(resizeCanvas, 150);
    
    function startDrawing(e) {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        if (e.touches) {
            lastX = e.touches[0].clientX - rect.left;
            lastY = e.touches[0].clientY - rect.top;
        } else {
            lastX = e.clientX - rect.left;
            lastY = e.clientY - rect.top;
        }
    }
    
    function draw(e) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        let x, y;
        if (e.touches) {
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        }
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        lastX = x;
        lastY = y;
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);
    
    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        startDrawing(e);
    });
    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        draw(e);
    });
    canvas.addEventListener("touchend", stopDrawing);
    
    win.querySelectorAll(".paint-color").forEach(btn => {
        btn.addEventListener("click", () => {
            currentColor = btn.getAttribute("data-color");
            ctx.strokeStyle = currentColor;
            win.querySelectorAll(".paint-color").forEach(b => {
                b.style.borderColor = "rgba(255,255,255,0.2)";
                b.style.borderWidth = "1px";
            });
            btn.style.borderColor = "#ffffff";
            btn.style.borderWidth = "2px";
        });
    });
    
    const sizeRange = win.querySelector("#paint-size");
    if (sizeRange) {
        sizeRange.addEventListener("input", (e) => {
            currentWidth = e.target.value;
            ctx.lineWidth = currentWidth;
        });
    }
    
    const btnClear = win.querySelector("#paint-clear");
    if (btnClear) {
        btnClear.addEventListener("click", () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }
}

// --- Dynamic LocalStorage Ideas Notepad ---
function initNotepadApp() {
    const win = document.getElementById("win-notepad");
    if (!win) return;
    const textarea = win.querySelector("#notepad-textarea");
    const saveBtn = win.querySelector("#notepad-save");
    const clearBtn = win.querySelector("#notepad-clear");
    const sizeSelect = win.querySelector("#notepad-font-size");
    
    if (!textarea) return;
    
    const savedNote = localStorage.getItem("portfolio_note");
    if (savedNote) {
        textarea.value = savedNote;
    }
    
    if (saveBtn) {
        saveBtn.addEventListener("click", () => {
            localStorage.setItem("portfolio_note", textarea.value);
            SoundSystem.play("success");
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            textarea.value = "";
            localStorage.removeItem("portfolio_note");
        });
    }
    
    if (sizeSelect) {
        sizeSelect.addEventListener("change", (e) => {
            textarea.style.fontSize = `${e.target.value}px`;
        });
    }
}
