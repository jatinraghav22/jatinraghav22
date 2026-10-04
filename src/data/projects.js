export const projects = [
  {
    id: "carcraft",
    number: "01",
    title: "CarCraft",
    category: "Automotive Inventory & Dealership Suite",
    tagline: "Full-stack automotive enterprise suite with showroom and dealer administration",
    description:
      "CarCraft is a full-stack automotive inventory and dealership management platform combining vehicle inventory management, automotive sales workflows, parts and accessories e-commerce, service appointment scheduling and financial tracking.",
    technologies: ["React", "JavaScript", "Python", "Django", "Django REST Framework", "MySQL"],
    roles: ["Customer Interface", "Admin Management Dashboard"],
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
    id: "cocode",
    number: "02",
    title: "CoCode",
    category: "Real-Time Collaborative Code Editor",
    tagline: "Browser-based multiplayer IDE with live cursor sync and code execution",
    description:
      "CoCode is a browser-based collaborative code editor designed for real-time multi-user coding and communication with synchronized cursor state and instant compilation.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Judge0 / Piston API"
    ],
    roles: ["Collaborative Room Members", "Room Host"],
    features: [
      "Engineered real-time collaborative code editor using React, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, and Socket.IO",
      "Live code synchronization, user presence, integrated chat, version history, reducing collaboration latency by 40% and boosting pair-programming efficiency by 35%",
      "Integrated Judge0 / Piston API supporting secure remote execution of 50+ programming languages",
      "Multi-file project workspace management with responsive dark IDE UI and integrated terminal output"
    ],
    architecture:
      "Event-driven bidirectional WebSocket pipeline via Socket.IO, broadcast room topologies, decoupled compiler worker communicating with execution sandbox APIs, and MongoDB for room/snapshot persistence.",
    challenges:
      "Handling concurrent edits without race conditions, throttling cursor broadcast events to conserve network bandwidth, and handling sandboxed code execution latency gracefully.",
    github: "https://github.com/jatinraghav22/CoCodee",
    liveDemo: "https://cocode-dyd7.onrender.com/",
    badge: "Real-Time Systems",
    accentColor: "#8B5CF6",
    highlightStats: [
      { label: "Sync Engine", value: "Socket.IO" },
      { label: "Languages", value: "50+ Supported" },
      { label: "Efficiency", value: "+35% Pair Coding" }
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
