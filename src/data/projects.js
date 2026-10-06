export const projects = [
  {
    id: "cocode",
    number: "01",
    title: "CoCode — Unified Real-Time Collaborative Coding Platform",
    shortTitle: "CoCode",
    category: "Full Stack Development | Real-Time Collaboration | Web Application",
    tagline: "Unified Real-Time Collaborative Coding Platform with Multi-File IDE, Execution, Canvas & Chat",
    description:
      "CoCode is a Unified Real-Time Collaborative Coding Platform that brings coding, code execution, communication, visualization, and real-time collaboration together in one workspace. Users can write and execute code, create or join collaborative rooms, edit multiple files in real time, communicate through chat, use a collaborative drawing board, track activity, and manage coding versions.",
    technologies: [
      "React",
      "Vite",
      "JavaScript / JSX",
      "CodeMirror",
      "Tailwind CSS",
      "Socket.IO Client",
      "Tldraw",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "JWT Authentication",
      "REST API",
      "Vercel",
      "Render"
    ],
    techCategories: {
      frontend: ["React", "Vite", "JavaScript / JSX", "CodeMirror", "Tailwind CSS", "Socket.IO Client", "Tldraw"],
      backend: ["Node.js", "Express.js", "Socket.IO", "JWT Authentication", "REST API"],
      deployment: ["Vercel", "Render"]
    },
    roles: ["Room Host / Creator", "Collaborator / Editor", "Peer Developer"],
    featureHighlights: [
      "🔐 User Authentication",
      "💻 Code Compiler",
      "👥 Real-Time Coding",
      "📂 Multi-File Workspace",
      "▶️ Online Execution",
      "💬 Real-Time Chat",
      "🎨 Tldraw Canvas",
      "👀 User Presence",
      "🕒 Activity Timeline",
      "📌 Pinned Notes",
      "🔄 Version Control",
      "🏠 Coding Rooms"
    ],
    features: [
      {
        icon: "🔐",
        title: "User Authentication",
        description: "Secure JWT-based user authentication, protected routes, and session management."
      },
      {
        icon: "💻",
        title: "Personal Code Compiler",
        description: "Personal browser-based code compiler supporting multiple programming languages with custom input."
      },
      {
        icon: "👥",
        title: "Real-Time Collaborative Coding",
        description: "Sub-millisecond code synchronization powered by Socket.IO with multi-cursor live tracking."
      },
      {
        icon: "📂",
        title: "Multi-File Workspace",
        description: "Create, rename, delete, and switch across project files seamlessly with multi-tab management."
      },
      {
        icon: "▶️",
        title: "Online Code Execution",
        description: "Sandboxed remote code execution engine delivering instant terminal output and runtime error diagnostics."
      },
      {
        icon: "💬",
        title: "Real-Time Chat",
        description: "Integrated in-room messaging allowing team members to communicate without switching applications."
      },
      {
        icon: "🎨",
        title: "Collaborative Drawing Board",
        description: "Interactive shared whiteboard powered by Tldraw for system design, sketching, and wireframing."
      },
      {
        icon: "👀",
        title: "User Presence",
        description: "Real-time active participant tracking with color-coded live indicators and cursor status."
      },
      {
        icon: "🕒",
        title: "Activity Timeline",
        description: "Comprehensive chronological logging of room actions, file changes, and compilation events."
      },
      {
        icon: "📌",
        title: "Pinned Notes",
        description: "Quick scratchpad and pinned notes directly within the collaborative workspace for requirements."
      },
      {
        icon: "🔄",
        title: "Version Management",
        description: "Room snapshots, version history tracking, and rollback capabilities to preserve iterations."
      },
      {
        icon: "🏠",
        title: "Create & Join Coding Rooms",
        description: "Instant room generation with unique room IDs, quick invite links, and secure access controls."
      }
    ],
    architecture:
      "Decoupled full-stack architecture: React + Vite frontend utilizing CodeMirror for syntax editing and Tldraw for visualization, communicating with an Express.js & Socket.IO backend for real-time WebSocket delta broadcasting and JWT authentication, deployed across Vercel and Render.",
    challenges:
      "Handling concurrent edits without race conditions, throttling cursor broadcast events to conserve network bandwidth, synchronizing multi-file states across connected peers, and handling sandboxed code execution latency gracefully.",
    github: "https://github.com/jatinraghav22/CoCode",
    liveDemo: "https://co-code-ten.vercel.app/",
    badge: "Featured Platform",
    accentColor: "#8B5CF6",
    highlightStats: [
      { label: "Sync Engine", value: "Socket.IO Real-Time" },
      { label: "Compiler", value: "Online Execution" },
      { label: "Deployment", value: "Vercel + Render" }
    ]
  },
  {
    id: "carcraft",
    number: "02",
    title: "CarCraft",
    category: "Automotive Inventory & Dealership Suite",
    tagline: "Full-stack automotive enterprise suite with showroom and dealer administration",
    description:
      "CarCraft is a full-stack automotive inventory and dealership management platform combining vehicle inventory management, automotive sales workflows, parts and accessories e-commerce, service appointment scheduling and financial tracking.",
    technologies: [
      "React",
      "JavaScript",
      "Axios",
      "Bootstrap",
      "Python",
      "Django",
      "Django REST Framework",
      "MySQL",
      "JWT Auth",
      "REST API",
      "Vercel",
      "Render"
    ],
    techCategories: {
      frontend: ["React", "JavaScript", "Axios", "Bootstrap"],
      backend: ["Python", "Django", "Django REST Framework", "MySQL", "JWT Auth", "REST API"],
      deployment: ["Vercel", "Render"]
    },
    roles: ["Customer Interface", "Admin Management Dashboard"],
    featureHighlights: [
      "🚗 Vehicle Inventory",
      "🛒 Parts E-Commerce",
      "📅 Service Booking",
      "👤 Customer Management",
      "💰 Vehicle Sales",
      "📊 Financial Tracking"
    ],
    features: [
      "Vehicle inventory management with filterable specifications",
      "Customer management and inquiries pipeline",
      "Automotive sales and quotation workflows",
      "Parts & accessories e-commerce store with cart & checkout",
      "Service appointment booking and maintenance scheduling",
      "Dealer financial analytics dashboard with revenue & expense tracking",
      "Separate secure admin management interface (no staff tier)"
    ],
    architecture:
      "Decoupled client-server architecture: React frontend communicating with Django REST Framework back-end, relational schema modeled in MySQL, JWT-based role authentication, and transactional state handling for dealership records.",
    challenges:
      "Balancing high-volume catalog search with dynamic pricing filters, managing inventory synchronization across sales and service orders, and structuring clean role-gated interfaces.",
    github: "https://github.com/jatinraghav22/CarCraft",
    liveDemo: "https://car-craft.vercel.app/",
    badge: "Featured Full-Stack",
    accentColor: "#3B82F6",
    highlightStats: [
      { label: "Architecture", value: "Django + React" },
      { label: "Database", value: "MySQL Schemas" },
      { label: "Portals", value: "Customer & Admin" }
    ]
  },
  {
    id: "ai-resume-analyzer",
    number: "03",
    title: "AI Resume Analyzer",
    category: "AI-Powered Resume Analysis",
    tagline: "Intelligent ATS evaluation engine with algorithmic scoring and keyword gap analysis",
    description:
      "An AI-powered Resume Analyzer designed to evaluate resume quality and ATS compatibility while providing structured feedback and actionable improvement suggestions.",
    technologies: [
      "React 19",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multer",
      "PDF-Parse"
    ],
    roles: ["Student / Job Seeker"],
    features: [
      "Constructed AI-powered Resume Analyzer using React 19, Vite, Node.js, Express.js, MongoDB, Multer, and PDF-Parse",
      "Intelligent resume-to-job description matching with AI-generated ATS scores, keyword gap analysis, and tailored feedback improving evaluation accuracy by 35%",
      "Scalable backend architecture capable of processing 10MB+ PDF resumes seamlessly",
      "Fallback heuristic analysis and local history storage ensuring 100% uninterrupted analysis reliability"
    ],
    architecture:
      "Multipart file streaming pipeline, text extraction micro-service, NLP pattern matching algorithms, JSON scoring models, and persistent user audit history stored in MongoDB.",
    challenges:
      "Extracting unstructured PDF text cleanly across varied multi-column layouts, building robust heuristic fallback rules, and providing immediate visual feedback during analysis.",
    github: "https://github.com/jatinraghav22",
    liveDemo: null,
    badge: "AI & NLP Tool",
    accentColor: "#06B6D4",
    highlightStats: [
      { label: "File Engine", value: "10MB+ PDF Parse" },
      { label: "Accuracy", value: "+35% Matching" },
      { label: "Reliability", value: "100% Heuristic" }
    ]
  },
  {
    id: "course-registration",
    number: "04",
    title: "Course Registration System",
    category: "Full-Stack Web Application",
    tagline: "Synchronized student enrollment portal with real-time admin monitoring",
    description:
      "Full-stack course registration platform enabling students to register for courses while providing administrators with real-time record management, search, and validation.",
    technologies: ["React", "Firebase", "Express.js", "Framer Motion"],
    roles: ["Enrolled Student", "Academic Administrator"],
    features: [
      "Built full-stack course registration platform using React, Firebase, Express.js, and Framer Motion",
      "Real-time database synchronization enabling instant seat availability updates",
      "Enforced client-side and server-side validation, ensuring secure handling of 100+ student registrations while maintaining data consistency",
      "Spearheaded secure admin dashboard featuring advanced search, multi-parameter filtering, and real-time record management"
    ],
    architecture:
      "Reactive client with Firebase Realtime Database integration, Express.js middleware verification endpoints, and declarative state orchestration.",
    challenges:
      "Preventing oversubscription when multiple students submit registration simultaneously, and building intuitive real-time search filters.",
    github: "https://github.com/jatinraghav22",
    liveDemo: null,
    badge: "Full-Stack Platform",
    accentColor: "#10B981",
    highlightStats: [
      { label: "Sync", value: "Firebase Realtime" },
      { label: "Validated", value: "100+ Registrations" },
      { label: "Panel", value: "Admin Dashboard" }
    ]
  }
];
