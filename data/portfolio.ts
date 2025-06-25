export const personalInfo = {
  name: "Vedant Sheel",
  titles: [
    "AI Developer.",
    "Machine Learning Researcher.",
    "Innovator.",
    "Science Fair Champion.",
    "Building Tech With Purpose.",
  ],
  subtitle: "Coding the future, one solution at a time.",
  intro:
    "Hi, I’m Vedant Sheel. I am a 17 year old SHSM student at Waterdown District High School, a machine learning researcher, and passionate about building tech with purpose. I’m currently a research intern at McMaster University, where I’m working on AI models to help predict lung disease, and I previously did machine learning research at the University of Waterloo. I’ve also worked as a software engineering intern at Clearcable Networks, building automation tools that improve how teams work. At school, I lead the Robotics, Coding, Math, HSA and DECA clubs, and I’ve earned two silver medals at the Canada-Wide Science Fair for real-world AI projects that tackle environmental, and accessibility challenges. I believe in using technology to make a real difference, and I’m driven to keep learning, building, and solving problems that matter.",
  email: "v3dant.sheel456@gmail.com",
  linkedin: "linkedin.com/in/vedantsheel",
  github: "github.com/VedantSheel08",
};

export const skills = [
  "Python",
  "React",
  "YOLOv8",
  "TensorFlow",
  "MongoDB",
  "Flask",
  "Arduino",
  "LSTMs",
  "CNNs",
  "Self-Attention",
  "PyTorch",
  "Scikit-learn",
  "OpenCV",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Docker",
];

export const projects = [
  {
    id: 1,
    name: "Immediate Pulmonary Fibrosis Prognosis Using Machine Learning Algorithms",
    emoji: "🫁",
    tech: ["Python", "TensorFlow", "Medical AI", "CNN"],
    description: [
      "Built AI model for early pulmonary fibrosis detection",
      "Achieved 94% accuracy in medical image analysis",
      "Collaborated with McMaster University researchers",
    ],
    category: "Medical AI",
    image:
      "https://cdn.builder.io/api/v1/assets/c780ab0108bf493a9f1989603266bb11/image-f620a3?format=webp&width=800",
    buttons: {
      viewPaper:
        "https://github.com/VedantSheel08/Portfolio/raw/main/Immediate%20Pulmonary%20Fibrosis%20Prognosis%20Using%20Machine%20Learning%20Algorithms.pdf",
    },
  },
  {
    id: 2,
    name: "Waste-Wise – Real-Time Waste Classification Platform",
    emoji: "♻️",
    tech: ["Machine Learning", "Sustainability", "Computer Vision"],
    description: [
      "AI-powered waste classification system",
      "Promotes recycling and environmental consciousness",
      "Real-time waste identification and sorting",
    ],
    category: "Sustainability",
    image:
      "https://cdn.builder.io/api/v1/assets/c780ab0108bf493a9f1989603266bb11/image-5c80eb?format=webp&width=800",
    buttons: {
      viewCode: "https://github.com/VedantSheel08/Waste-Wise",
      viewPaper: "pending",
    },
  },
  {
    id: 3,
    name: "Smart Solar Tracker – PID Controlled Arduino System",
    emoji: "☀️",
    tech: ["Arduino", "IoT", "Renewable Energy", "PID Control"],
    description: [
      "Automated solar panel optimization system",
      "Increased energy efficiency by 35%",
      "Weather-adaptive tracking algorithm",
    ],
    category: "Clean Energy",
    image:
      "https://cdn.builder.io/api/v1/assets/c780ab0108bf493a9f1989603266bb11/image-ad1b05?format=webp&width=800",
    buttons: {
      viewCode: "https://github.com/VedantSheel08/SmartSolarTracker",
      liveDemo:
        "https://partner.projectboard.world/ysc/project/smart-solar-tracker",
      viewPaper:
        "https://github.com/VedantSheel08/Portfolio/raw/main/Smart%20Solar%20Tracker.pdf",
    },
  },

  {
    id: 4,
    name: "ECOSCAN – Environmental Conservation and Observation System for Coordinated Outdoor Unmanned Tracking",
    emoji: "🛰️",
    tech: ["YOLOv8", "Arduino", "Computer Vision", "IoT"],
    description: [
      "Autonomous rover for wildlife conservation monitoring",
      "Real-time animal detection and tracking system",
      "Solar-powered with 24/7 operation capability",
    ],
    category: "Conservation Tech",
    image:
      "https://cdn.builder.io/api/v1/assets/c780ab0108bf493a9f1989603266bb11/image-aa7283?format=webp&width=800",
    buttons: {
      viewCode: "https://github.com/VedantSheel08/ECOSCAN",
      viewPaper: "pending",
    },
  },
  {
    id: 5,
    name: "Lost & Found – AI-Powered Semantic Object Retrieval Engine",
    emoji: "🔍",
    tech: ["NLP", "Semantic Search", "MongoDB"],
    description: [
      "Intelligent lost and found matching system",
      "Natural language processing for item descriptions",
      "Smart matching algorithm with 92% accuracy",
    ],
    category: "Social Impact",
    image: "/api/project-image/lost-found",
    buttons: {
      viewCode: "https://github.com/Sudhan-Dahake/LossEndFound",
      viewPaper: "pending",
    },
  },
  {
    id: 6,
    name: "A Voice for the Voiceless – ASL Translator Web App",
    emoji: "🗣️",
    tech: ["CNN", "TTS", "Computer Vision", "Web App"],
    description: [
      "Comprehensive ASL translation web application",
      "Real-time gesture recognition and voice synthesis",
      "Accessible design for deaf and hearing communities",
    ],
    category: "Accessibility",
    image:
      "https://cdn.builder.io/api/v1/assets/c780ab0108bf493a9f1989603266bb11/image-1db1ea?format=webp&width=800",
    buttons: {
      viewCode: "https://github.com/VedantSheel08/ASL_realtime_translator",
      liveDemo:
        "https://partner.projectboard.world/ysc/project/a-voice-for-the-voiceless",
      viewPaper:
        "https://github.com/VedantSheel08/Portfolio/raw/main/A%20Voice%20For%20The%20Voiceless.pdf",
    },
  },
  {
    id: 7,
    name: "Smart Traffic Light System",
    emoji: "🚦",
    tech: ["Arduino Uno", "Ultrasonic Sensors", "C++", "IoT"],
    description: [
      "Built a model traffic light system using Arduino and ultrasonic sensors to detect vehicles and dynamically adjust light changes based on real-time traffic distance",
      "Programmed C++ logic to control green, yellow, and red cycles",
      "Reduced unnecessary stops and starts by over 30% compared to traditional fixed-timer lights in model tests",
    ],
    category: "Smart City",
    image:
      "https://cdn.builder.io/api/v1/assets/c780ab0108bf493a9f1989603266bb11/image-cf71f2?format=webp&width=800",
    buttons: {
      viewCode: "pending",
      viewPaper: "pending",
    },
  },
  {
    id: 8,
    name: "Student Portal Application",
    emoji: "📱",
    tech: ["Web Development", "Database", "User Interface", "Full Stack"],
    description: [
      "Developed a school-wide student portal application to streamline access to academic resources, event information, and club activities",
      "Improved communication and engagement among 1300+ active student users",
      "Centralized platform for academic resources and school community interaction",
    ],
    category: "Web Development",
    image:
      "https://cdn.builder.io/api/v1/assets/c780ab0108bf493a9f1989603266bb11/image-56980b?format=webp&width=800",
    buttons: {
      viewCode: "pending",
      viewPaper: "pending",
    },
  },
];

export const awards = [
  {
    year: "2024",
    title: "Canada-Wide Science Fair Silver Medal",
    description: "National recognition for AI innovation in healthcare",
  },
  {
    year: "2024",
    title: "DECA ICDC Top 30 International",
    description: "Global business competition excellence",
  },
  {
    year: "2023",
    title: "BRSTF Best of Fair",
    description: "Outstanding project at regional science fair",
  },
  {
    year: "2023",
    title: "SHAD Canada Scholar",
    description: "Selected for prestigious STEAM program",
  },
  {
    year: "2023",
    title: "Western University Innovation Award",
    description: "Recognition for creative problem-solving",
  },
  {
    year: "2023",
    title: "Alberta Renewable Energy Award",
    description: "Excellence in sustainable technology development",
  },
];

export const experience = [
  {
    company: "Clearcable",
    role: "AI Developer Intern",
    description: "Chatbot development and workflow automation",
    period: "2024",
  },
  {
    company: "McMaster University",
    role: "Research Assistant",
    description: "Machine learning for lung prognosis",
    period: "2024",
  },
  {
    company: "University of Waterloo",
    role: "Project Contributor",
    description: "Real-time ASL translator development",
    period: "2023",
  },
];
