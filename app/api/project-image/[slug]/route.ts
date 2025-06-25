import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  // Create SVG project preview images based on the project type
  const projectImages: { [key: string]: string } = {
    "pulmonary-fibrosis": generateMedicalAIImage(),
    ecoscan: generateEcoscanImage(),
    "asl-translator": generateASLImage(),
    "waste-wise": generateWasteWiseImage(),
    "lost-found": generateLostFoundImage(),
    "solar-tracker": generateSolarTrackerImage(),
  };

  const svgContent = projectImages[slug] || generateDefaultImage();

  return new NextResponse(svgContent, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000",
    },
  });
}

function generateMedicalAIImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="medicalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#FF8E85;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#4ECDC4;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="lungGrad" cx="50%" cy="50%" r="40%">
          <stop offset="0%" style="stop-color:#00FFFF;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#FF6B6B;stop-opacity:0.3" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#0A0A0A"/>
      
      <!-- Grid Pattern -->
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00FFFF" stroke-width="0.5" opacity="0.2"/>
      </pattern>
      <rect width="400" height="300" fill="url(#grid)"/>
      
      <!-- Lung Shape -->
      <g transform="translate(200,150)">
        <!-- Left lung -->
        <path d="M-60,-40 C-80,-20 -80,20 -60,40 C-40,60 -20,40 -20,20 L-20,-20 C-20,-40 -40,-60 -60,-40 Z" 
              fill="url(#lungGrad)" opacity="0.7" filter="url(#glow)"/>
        <!-- Right lung -->
        <path d="M20,-40 C40,-60 60,-40 60,-20 L60,20 C60,40 40,60 20,40 C0,20 0,-20 20,-40 Z" 
              fill="url(#lungGrad)" opacity="0.7" filter="url(#glow)"/>
      </g>
      
      <!-- Medical Cross -->
      <g transform="translate(350,50)">
        <rect x="-15" y="-5" width="30" height="10" fill="#00FFFF" opacity="0.8"/>
        <rect x="-5" y="-15" width="10" height="30" fill="#00FFFF" opacity="0.8"/>
      </g>
      
      <!-- AI Neural Network Visualization -->
      <g transform="translate(50,50)">
        <!-- Nodes -->
        <circle cx="0" cy="0" r="4" fill="#00FFFF" opacity="0.8"/>
        <circle cx="30" cy="-10" r="4" fill="#FF6B6B" opacity="0.8"/>
        <circle cx="30" cy="10" r="4" fill="#FF6B6B" opacity="0.8"/>
        <circle cx="60" cy="0" r="4" fill="#00FFFF" opacity="0.8"/>
        
        <!-- Connections -->
        <line x1="0" y1="0" x2="30" y2="-10" stroke="#00FFFF" stroke-width="1" opacity="0.6"/>
        <line x1="0" y1="0" x2="30" y2="10" stroke="#00FFFF" stroke-width="1" opacity="0.6"/>
        <line x1="30" y1="-10" x2="60" y2="0" stroke="#FF6B6B" stroke-width="1" opacity="0.6"/>
        <line x1="30" y1="10" x2="60" y2="0" stroke="#FF6B6B" stroke-width="1" opacity="0.6"/>
      </g>
      
      <!-- Data Visualization -->
      <g transform="translate(300,200)">
        <!-- Chart bars -->
        <rect x="0" y="-30" width="8" height="30" fill="#00FFFF" opacity="0.7"/>
        <rect x="12" y="-45" width="8" height="45" fill="#FF6B6B" opacity="0.7"/>
        <rect x="24" y="-20" width="8" height="20" fill="#00FFFF" opacity="0.7"/>
        <rect x="36" y="-35" width="8" height="35" fill="#FF6B6B" opacity="0.7"/>
        
        <!-- Accuracy label -->
        <text x="20" y="-50" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="10" font-weight="bold">94%</text>
      </g>
      
      <!-- Project Title -->
      <text x="200" y="280" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="18" font-weight="bold">
        Pulmonary Fibrosis AI
      </text>
      <text x="200" y="295" text-anchor="middle" fill="#FF6B6B" font-family="Arial" font-size="12">
        Medical ML Diagnosis
      </text>
    </svg>
  `;
}

function generateEcoscanImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ecoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#8BC34A;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00FFFF;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="earthGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2E7D32;stop-opacity:1" />
        </radialGradient>
        <filter id="shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#0A0A0A"/>
      
      <!-- Stars -->
      <circle cx="50" cy="30" r="1" fill="#00FFFF" opacity="0.8"/>
      <circle cx="120" cy="20" r="1" fill="#00FFFF" opacity="0.6"/>
      <circle cx="350" cy="40" r="1" fill="#00FFFF" opacity="0.7"/>
      <circle cx="380" cy="70" r="1" fill="#00FFFF" opacity="0.5"/>
      
      <!-- Earth/Environment -->
      <circle cx="100" cy="200" r="60" fill="url(#earthGrad)" opacity="0.8"/>
      
      <!-- Satellite/Rover -->
      <g transform="translate(200,120)">
        <!-- Main body -->
        <rect x="-25" y="-15" width="50" height="30" rx="5" fill="url(#ecoGrad)" filter="url(#shadow)"/>
        
        <!-- Solar panels -->
        <rect x="-35" y="-5" width="15" height="10" fill="#00FFFF" opacity="0.8"/>
        <rect x="20" y="-5" width="15" height="10" fill="#00FFFF" opacity="0.8"/>
        
        <!-- Wheels -->
        <circle cx="-15" cy="20" r="8" fill="#666" stroke="#00FFFF" stroke-width="2"/>
        <circle cx="15" cy="20" r="8" fill="#666" stroke="#00FFFF" stroke-width="2"/>
        
        <!-- Camera/Sensor -->
        <circle cx="0" cy="-5" r="5" fill="#00FFFF" opacity="0.9"/>
        <circle cx="0" cy="-5" r="2" fill="#000"/>
        
        <!-- Antenna -->
        <line x1="0" y1="-15" x2="0" y2="-35" stroke="#00FFFF" stroke-width="2"/>
        <circle cx="0" cy="-35" r="3" fill="#00FFFF"/>
      </g>
      
      <!-- Animals/Wildlife Detection -->
      <g transform="translate(320,180)">
        <!-- Deer silhouette -->
        <path d="M0,0 C-5,-10 5,-10 10,-5 C15,-8 20,-5 15,0 C10,5 5,10 0,5 C-5,10 -10,5 -5,0 Z" 
              fill="#4CAF50" opacity="0.7"/>
        <!-- Detection box -->
        <rect x="-8" y="-12" width="26" height="22" fill="none" stroke="#00FFFF" stroke-width="1" stroke-dasharray="2,2"/>
      </g>
      
      <!-- Scanning Lines -->
      <g opacity="0.6">
        <line x1="200" y1="120" x2="320" y2="180" stroke="#00FFFF" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="200" y1="120" x2="100" y2="200" stroke="#4CAF50" stroke-width="1" stroke-dasharray="3,3"/>
      </g>
      
      <!-- YOLOv8 Detection Indicator -->
      <text x="50" y="50" fill="#00FFFF" font-family="Arial" font-size="10" font-weight="bold">YOLOv8</text>
      <rect x="40" y="35" width="40" height="18" fill="none" stroke="#00FFFF" stroke-width="1" rx="2"/>
      
      <!-- Project Title -->
      <text x="200" y="270" text-anchor="middle" fill="#4CAF50" font-family="Arial" font-size="16" font-weight="bold">
        ECOSCAN Wildlife Rover
      </text>
      <text x="200" y="285" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="12">
        Conservation Technology
      </text>
    </svg>
  `;
}

function generateASLImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aslGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#9C27B0;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#673AB7;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00FFFF;stop-opacity:1" />
        </linearGradient>
        <filter id="handGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#0A0A0A"/>
      
      <!-- Camera Frame -->
      <rect x="50" y="50" width="150" height="120" fill="none" stroke="#00FFFF" stroke-width="3" rx="10"/>
      <circle cx="190" cy="60" r="5" fill="#FF0000" opacity="0.8"/>
      <text x="210" y="65" fill="#FF0000" font-family="Arial" font-size="10">REC</text>
      
      <!-- Hand Gesture (ASL "Hello") -->
      <g transform="translate(125,110)" filter="url(#handGlow)">
        <!-- Palm -->
        <ellipse cx="0" cy="0" rx="20" ry="25" fill="url(#aslGrad)" opacity="0.8"/>
        
        <!-- Fingers -->
        <ellipse cx="-15" cy="-20" rx="4" ry="12" fill="url(#aslGrad)" opacity="0.8" transform="rotate(-20)"/>
        <ellipse cx="-5" cy="-25" rx="4" ry="15" fill="url(#aslGrad)" opacity="0.8" transform="rotate(-5)"/>
        <ellipse cx="5" cy="-25" rx="4" ry="15" fill="url(#aslGrad)" opacity="0.8" transform="rotate(5)"/>
        <ellipse cx="15" cy="-20" rx="4" ry="12" fill="url(#aslGrad)" opacity="0.8" transform="rotate(20)"/>
        
        <!-- Thumb -->
        <ellipse cx="-25" cy="5" rx="4" ry="10" fill="url(#aslGrad)" opacity="0.8" transform="rotate(-45)"/>
      </g>
      
      <!-- AI Processing Visualization -->
      <g transform="translate(250,100)">
        <!-- Neural network nodes -->
        <circle cx="0" cy="0" r="3" fill="#00FFFF"/>
        <circle cx="20" cy="-10" r="3" fill="#9C27B0"/>
        <circle cx="20" cy="10" r="3" fill="#9C27B0"/>
        <circle cx="40" cy="-15" r="3" fill="#673AB7"/>
        <circle cx="40" cy="0" r="3" fill="#673AB7"/>
        <circle cx="40" cy="15" r="3" fill="#673AB7"/>
        <circle cx="60" cy="0" r="3" fill="#00FFFF"/>
        
        <!-- Connections -->
        <line x1="0" y1="0" x2="20" y2="-10" stroke="#00FFFF" stroke-width="1" opacity="0.7"/>
        <line x1="0" y1="0" x2="20" y2="10" stroke="#00FFFF" stroke-width="1" opacity="0.7"/>
        <line x1="20" y1="-10" x2="40" y2="-15" stroke="#9C27B0" stroke-width="1" opacity="0.7"/>
        <line x1="20" y1="-10" x2="40" y2="0" stroke="#9C27B0" stroke-width="1" opacity="0.7"/>
        <line x1="20" y1="10" x2="40" y2="0" stroke="#9C27B0" stroke-width="1" opacity="0.7"/>
        <line x1="20" y1="10" x2="40" y2="15" stroke="#9C27B0" stroke-width="1" opacity="0.7"/>
        <line x1="40" y1="-15" x2="60" y2="0" stroke="#673AB7" stroke-width="1" opacity="0.7"/>
        <line x1="40" y1="0" x2="60" y2="0" stroke="#673AB7" stroke-width="1" opacity="0.7"/>
        <line x1="40" y1="15" x2="60" y2="0" stroke="#673AB7" stroke-width="1" opacity="0.7"/>
        
        <!-- CNN Label -->
        <text x="30" y="-25" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="8" font-weight="bold">CNN</text>
      </g>
      
      <!-- Text Output -->
      <rect x="230" y="180" width="140" height="60" fill="#1A1A1A" stroke="#00FFFF" stroke-width="2" rx="5"/>
      <text x="240" y="200" fill="#00FFFF" font-family="Arial" font-size="14" font-weight="bold">"Hello"</text>
      <text x="240" y="220" fill="#9C27B0" font-family="Arial" font-size="12">98.4% Confidence</text>
      
      <!-- Sound Waves (TTS) -->
      <g transform="translate(300,160)" opacity="0.7">
        <path d="M0,0 Q5,-5 10,0 Q15,5 20,0" stroke="#00FFFF" stroke-width="2" fill="none"/>
        <path d="M0,0 Q8,-8 16,0 Q24,8 32,0" stroke="#00FFFF" stroke-width="1" fill="none" opacity="0.6"/>
        <path d="M0,0 Q12,-12 24,0 Q36,12 48,0" stroke="#00FFFF" stroke-width="1" fill="none" opacity="0.4"/>
      </g>
      
      <!-- Accessibility Symbol -->
      <g transform="translate(350,50)">
        <circle cx="0" cy="0" r="15" fill="none" stroke="#00FFFF" stroke-width="2"/>
        <circle cx="0" cy="-5" r="3" fill="#00FFFF"/>
        <path d="M-5,5 Q0,10 5,5" stroke="#00FFFF" stroke-width="2" fill="none"/>
      </g>
      
      <!-- Project Title -->
      <text x="200" y="270" text-anchor="middle" fill="#9C27B0" font-family="Arial" font-size="16" font-weight="bold">
        ASL Real-Time Translator
      </text>
      <text x="200" y="285" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="12">
        Accessibility Technology
      </text>
    </svg>
  `;
}

function generateWasteWiseImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wasteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#2196F3;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00FFFF;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="recycleGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#2196F3;stop-opacity:0.4" />
        </radialGradient>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#0A0A0A"/>
      
      <!-- Recycling Bins -->
      <g transform="translate(80,150)">
        <!-- Plastic Bin -->
        <rect x="-20" y="-30" width="40" height="50" rx="5" fill="#2196F3" opacity="0.8"/>
        <rect x="-18" y="-25" width="36" height="5" fill="#00FFFF"/>
        <text x="0" y="35" text-anchor="middle" fill="#2196F3" font-family="Arial" font-size="10" font-weight="bold">PLASTIC</text>
      </g>
      
      <g transform="translate(160,150)">
        <!-- Paper Bin -->
        <rect x="-20" y="-30" width="40" height="50" rx="5" fill="#4CAF50" opacity="0.8"/>
        <rect x="-18" y="-25" width="36" height="5" fill="#00FFFF"/>
        <text x="0" y="35" text-anchor="middle" fill="#4CAF50" font-family="Arial" font-size="10" font-weight="bold">PAPER</text>
      </g>
      
      <g transform="translate(240,150)">
        <!-- Metal Bin -->
        <rect x="-20" y="-30" width="40" height="50" rx="5" fill="#FF9800" opacity="0.8"/>
        <rect x="-18" y="-25" width="36" height="5" fill="#00FFFF"/>
        <text x="0" y="35" text-anchor="middle" fill="#FF9800" font-family="Arial" font-size="10" font-weight="bold">METAL</text>
      </g>
      
      <!-- AI Camera/Scanner -->
      <g transform="translate(320,100)">
        <rect x="-15" y="-10" width="30" height="20" rx="3" fill="#333" stroke="#00FFFF" stroke-width="2"/>
        <circle cx="0" cy="0" r="6" fill="#00FFFF" opacity="0.8"/>
        <circle cx="0" cy="0" r="3" fill="#000"/>
        
        <!-- Scanning beam -->
        <path d="M0,10 L-30,50 L30,50 Z" fill="url(#recycleGrad)" opacity="0.3"/>
        <line x1="0" y1="10" x2="-30" y2="50" stroke="#00FFFF" stroke-width="1" opacity="0.6"/>
        <line x1="0" y1="10" x2="30" y2="50" stroke="#00FFFF" stroke-width="1" opacity="0.6"/>
      </g>
      
      <!-- Waste Items Being Classified -->
      <g transform="translate(160,200)">
        <!-- Plastic bottle -->
        <ellipse cx="-30" cy="0" rx="5" ry="12" fill="#2196F3" opacity="0.7"/>
        <rect x="-32" y="-15" width="4" height="8" fill="#2196F3" opacity="0.7"/>
        
        <!-- Paper -->
        <rect x="0" y="-8" width="15" height="16" fill="#4CAF50" opacity="0.7"/>
        <line x1="2" y1="-5" x2="13" y2="-5" stroke="#FFF" stroke-width="1" opacity="0.5"/>
        <line x1="2" y1="-2" x2="13" y2="-2" stroke="#FFF" stroke-width="1" opacity="0.5"/>
        <line x1="2" y1="1" x2="13" y2="1" stroke="#FFF" stroke-width="1" opacity="0.5"/>
        
        <!-- Metal can -->
        <rect x="25" y="-10" width="10" height="20" rx="5" fill="#FF9800" opacity="0.7"/>
        <ellipse cx="30" cy="-10" rx="5" ry="2" fill="#FFB74D"/>
      </g>
      
      <!-- Classification Labels -->
      <g transform="translate(160,220)">
        <rect x="-40" y="10" width="25" height="15" fill="#2196F3" opacity="0.8" rx="2"/>
        <text x="-27" y="20" text-anchor="middle" fill="#FFF" font-family="Arial" font-size="8">95%</text>
        
        <rect x="-8" y="10" width="25" height="15" fill="#4CAF50" opacity="0.8" rx="2"/>
        <text x="5" y="20" text-anchor="middle" fill="#FFF" font-family="Arial" font-size="8">92%</text>
        
        <rect x="25" y="10" width="25" height="15" fill="#FF9800" opacity="0.8" rx="2"/>
        <text x="37" y="20" text-anchor="middle" fill="#FFF" font-family="Arial" font-size="8">88%</text>
      </g>
      
      <!-- Recycling Symbol -->
      <g transform="translate(50,50)">
        <!-- Three arrows forming triangle -->
        <path d="M0,-15 L13,-7 L8,-2 L3,-7 L-8,-12 Z" fill="url(#wasteGrad)" opacity="0.8"/>
        <path d="M13,-7 L5,8 L0,3 L5,-2 L16,-7 Z" fill="url(#wasteGrad)" opacity="0.8" transform="rotate(120)"/>
        <path d="M5,8 L-13,7 L-8,2 L-3,7 L8,12 Z" fill="url(#wasteGrad)" opacity="0.8" transform="rotate(240)"/>
      </g>
      
      <!-- ML Processing Indicator -->
      <g transform="translate(350,200)">
        <rect x="-25" y="-15" width="50" height="30" fill="#1A1A1A" stroke="#00FFFF" stroke-width="1" rx="3"/>
        <text x="0" y="-5" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="8" font-weight="bold">ML Model</text>
        <text x="0" y="5" text-anchor="middle" fill="#4CAF50" font-family="Arial" font-size="8">Processing...</text>
        
        <!-- Processing dots -->
        <circle cx="-8" cy="10" r="1" fill="#00FFFF" opacity="0.8"/>
        <circle cx="0" cy="10" r="1" fill="#00FFFF" opacity="0.6"/>
        <circle cx="8" cy="10" r="1" fill="#00FFFF" opacity="0.4"/>
      </g>
      
      <!-- Project Title -->
      <text x="200" y="270" text-anchor="middle" fill="#4CAF50" font-family="Arial" font-size="16" font-weight="bold">
        Waste-Wise AI Classifier
      </text>
      <text x="200" y="285" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="12">
        Sustainability Technology
      </text>
    </svg>
  `;
}

function generateLostFoundImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF9800;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#F44336;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00FFFF;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="searchGrad" cx="50%" cy="50%" r="40%">
          <stop offset="0%" style="stop-color:#00FFFF;stop-opacity:0.6" />
          <stop offset="100%" style="stop-color:#FF9800;stop-opacity:0.2" />
        </radialGradient>
        <filter id="searchGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#0A0A0A"/>
      
      <!-- Database/Storage Representation -->
      <g transform="translate(80,150)">
        <!-- Database cylinders -->
        <ellipse cx="0" cy="-20" rx="25" ry="8" fill="#333" stroke="#00FFFF" stroke-width="1"/>
        <rect x="-25" y="-20" width="50" height="25" fill="#333"/>
        <ellipse cx="0" cy="5" rx="25" ry="8" fill="#555" stroke="#00FFFF" stroke-width="1"/>
        
        <ellipse cx="0" cy="-5" rx="25" ry="8" fill="#333" stroke="#00FFFF" stroke-width="1"/>
        <ellipse cx="0" cy="20" rx="25" ry="8" fill="#555" stroke="#00FFFF" stroke-width="1"/>
        
        <!-- Data indicators -->
        <circle cx="-15" cy="-10" r="2" fill="#FF9800"/>
        <circle cx="0" cy="-15" r="2" fill="#F44336"/>
        <circle cx="15" cy="-5" r="2" fill="#00FFFF"/>
        <circle cx="-8" cy="10" r="2" fill="#FF9800"/>
        <circle cx="12" cy="15" r="2" fill="#F44336"/>
        
        <text x="0" y="35" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="10" font-weight="bold">DATABASE</text>
      </g>
      
      <!-- Search Interface -->
      <g transform="translate(200,100)">
        <!-- Search bar -->
        <rect x="-60" y="-10" width="120" height="20" rx="10" fill="#1A1A1A" stroke="#00FFFF" stroke-width="2"/>
        <text x="-55" y="2" fill="#888" font-family="Arial" font-size="10">Search for lost items...</text>
        
        <!-- Search button -->
        <circle cx="70" cy="0" r="12" fill="url(#lfGrad)" filter="url(#searchGlow)"/>
        <path d="M65,-5 L65,5 M70,-5 L70,5 M75,-5 L75,5" stroke="#FFF" stroke-width="1"/>
      </g>
      
      <!-- Search Results/Matches -->
      <g transform="translate(300,150)">
        <!-- Result cards -->
        <rect x="-30" y="-25" width="60" height="20" rx="3" fill="#333" stroke="#00FFFF" stroke-width="1"/>
        <text x="0" y="-15" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="8" font-weight="bold">Phone</text>
        <text x="0" y="-8" text-anchor="middle" fill="#FF9800" font-family="Arial" font-size="7">92% Match</text>
        
        <rect x="-30" y="0" width="60" height="20" rx="3" fill="#333" stroke="#F44336" stroke-width="1"/>
        <text x="0" y="10" text-anchor="middle" fill="#F44336" font-family="Arial" font-size="8" font-weight="bold">Wallet</text>
        <text x="0" y="17" text-anchor="middle" fill="#FF9800" font-family="Arial" font-size="7">87% Match</text>
        
        <rect x="-30" y="25" width="60" height="20" rx="3" fill="#333" stroke="#4CAF50" stroke-width="1"/>
        <text x="0" y="35" text-anchor="middle" fill="#4CAF50" font-family="Arial" font-size="8" font-weight="bold">Keys</text>
        <text x="0" y="42" text-anchor="middle" fill="#FF9800" font-family="Arial" font-size="7">81% Match</text>
      </g>
      
      <!-- AI/ML Processing -->
      <g transform="translate(200,200)">
        <!-- NLP Processing box -->
        <rect x="-40" y="-15" width="80" height="30" fill="#1A1A1A" stroke="#00FFFF" stroke-width="1" rx="5"/>
        <text x="0" y="-5" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="9" font-weight="bold">NLP Engine</text>
        <text x="0" y="5" text-anchor="middle" fill="#FF9800" font-family="Arial" font-size="8">Semantic Analysis</text>
        
        <!-- Processing indicators -->
        <circle cx="-30" cy="10" r="1" fill="#00FFFF" opacity="0.8"/>
        <circle cx="-20" cy="10" r="1" fill="#00FFFF" opacity="0.6"/>
        <circle cx="-10" cy="10" r="1" fill="#00FFFF" opacity="0.4"/>
        <circle cx="0" cy="10" r="1" fill="#00FFFF" opacity="0.6"/>
        <circle cx="10" cy="10" r="1" fill="#00FFFF" opacity="0.8"/>
        <circle cx="20" cy="10" r="1" fill="#00FFFF" opacity="0.4"/>
        <circle cx="30" cy="10" r="1" fill="#00FFFF" opacity="0.6"/>
      </g>
      
      <!-- Lost Items Visualization -->
      <g transform="translate(50,200)">
        <!-- Various lost items -->
        <!-- Phone -->
        <rect x="0" y="0" width="8" height="12" rx="2" fill="#333" stroke="#00FFFF" stroke-width="1"/>
        <rect x="1" y="1" width="6" height="10" fill="#00FFFF" opacity="0.3"/>
        
        <!-- Wallet -->
        <rect x="15" y="2" width="12" height="8" rx="1" fill="#8B4513" stroke="#FF9800" stroke-width="1"/>
        
        <!-- Keys -->
        <circle cx="35" cy="6" r="3" fill="none" stroke="#FFD700" stroke-width="1"/>
        <rect x="32" y="8" width="6" height="3" fill="#FFD700"/>
        
        <text x="20" y="25" text-anchor="middle" fill="#888" font-family="Arial" font-size="8">Lost Items</text>
      </g>
      
      <!-- Magnifying Glass -->
      <g transform="translate(350,50)">
        <circle cx="0" cy="0" r="15" fill="none" stroke="url(#lfGrad)" stroke-width="3" filter="url(#searchGlow)"/>
        <line x1="12" y1="12" x2="25" y2="25" stroke="url(#lfGrad)" stroke-width="3"/>
        <circle cx="0" cy="0" r="8" fill="url(#searchGrad)"/>
      </g>
      
      <!-- Project Title -->
      <text x="200" y="270" text-anchor="middle" fill="#FF9800" font-family="Arial" font-size="16" font-weight="bold">
        Lost & Found AI Engine
      </text>
      <text x="200" y="285" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="12">
        Semantic Search Technology
      </text>
    </svg>
  `;
}

function generateSolarTrackerImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="solarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#FFA500;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FF8C00;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#FFFF00;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFD700;stop-opacity:0.8" />
        </radialGradient>
        <filter id="solarGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#001122"/>
      
      <!-- Sky gradient -->
      <rect width="400" height="150" fill="url(#sunGrad)" opacity="0.1"/>
      
      <!-- Sun -->
      <circle cx="320" cy="60" r="25" fill="url(#sunGrad)" filter="url(#solarGlow)"/>
      <!-- Sun rays -->
      <g transform="translate(320,60)">
        <line x1="-35" y1="0" x2="-30" y2="0" stroke="#FFD700" stroke-width="2"/>
        <line x1="30" y1="0" x2="35" y2="0" stroke="#FFD700" stroke-width="2"/>
        <line x1="0" y1="-35" x2="0" y2="-30" stroke="#FFD700" stroke-width="2"/>
        <line x1="0" y1="30" x2="0" y2="35" stroke="#FFD700" stroke-width="2"/>
        <line x1="-25" y1="-25" x2="-21" y2="-21" stroke="#FFD700" stroke-width="2"/>
        <line x1="21" y1="21" x2="25" y2="25" stroke="#FFD700" stroke-width="2"/>
        <line x1="25" y1="-25" x2="21" y2="-21" stroke="#FFD700" stroke-width="2"/>
        <line x1="-21" y1="21" x2="-25" y2="25" stroke="#FFD700" stroke-width="2"/>
      </g>
      
      <!-- Solar Panel Assembly -->
      <g transform="translate(200,180)">
        <!-- Base/Foundation -->
        <rect x="-40" y="40" width="80" height="15" fill="#444" rx="2"/>
        
        <!-- Support Structure -->
        <rect x="-3" y="20" width="6" height="40" fill="#666"/>
        <rect x="-25" y="35" width="50" height="8" fill="#666" rx="2"/>
        
        <!-- Solar Panel -->
        <g transform="rotate(-15)">
          <rect x="-35" y="-20" width="70" height="40" fill="#1a1a2e" stroke="#00FFFF" stroke-width="2" rx="3"/>
          
          <!-- Solar cells grid -->
          <g fill="url(#solarGrad)" opacity="0.8">
            <rect x="-30" y="-15" width="12" height="12" rx="1"/>
            <rect x="-15" y="-15" width="12" height="12" rx="1"/>
            <rect x="0" y="-15" width="12" height="12" rx="1"/>
            <rect x="15" y="-15" width="12" height="12" rx="1"/>
            
            <rect x="-30" y="0" width="12" height="12" rx="1"/>
            <rect x="-15" y="0" width="12" height="12" rx="1"/>
            <rect x="0" y="0" width="12" height="12" rx="1"/>
            <rect x="15" y="0" width="12" height="12" rx="1"/>
          </g>
          
          <!-- Reflection -->
          <rect x="-35" y="-20" width="70" height="40" fill="url(#sunGrad)" opacity="0.2" rx="3"/>
        </g>
        
        <!-- Servo Motor -->
        <rect x="-8" y="15" width="16" height="10" fill="#333" stroke="#00FFFF" stroke-width="1" rx="2"/>
        <circle cx="0" cy="20" r="3" fill="#00FFFF"/>
        <text x="0" y="0" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="8" font-weight="bold">SERVO</text>
      </g>
      
      <!-- Arduino/Control Unit -->
      <g transform="translate(80,220)">
        <rect x="-20" y="-15" width="40" height="30" fill="#006600" stroke="#00FFFF" stroke-width="1" rx="3"/>
        
        <!-- Pins -->
        <rect x="-18" y="-12" width="36" height="4" fill="#FFD700"/>
        <rect x="-18" y="8" width="36" height="4" fill="#FFD700"/>
        
        <!-- Components -->
        <rect x="-10" y="-5" width="20" height="3" fill="#333"/>
        <rect x="-5" y="0" width="10" height="3" fill="#333"/>
        
        <text x="0" y="25" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="9" font-weight="bold">ARDUINO</text>
      </g>
      
      <!-- Wiring -->
      <path d="M100,220 Q150,200 185,190" stroke="#00FFFF" stroke-width="2" fill="none" opacity="0.8"/>
      
      <!-- Light Sensors -->
      <g transform="translate(320,150)">
        <circle cx="-15" cy="0" r="5" fill="#FFD700" stroke="#00FFFF" stroke-width="1"/>
        <circle cx="15" cy="0" r="5" fill="#FFD700" stroke="#00FFFF" stroke-width="1"/>
        <text x="0" y="15" text-anchor="middle" fill="#FFD700" font-family="Arial" font-size="8">LDR Sensors</text>
      </g>
      
      <!-- Sun tracking arrow -->
      <path d="M320,90 Q280,130 200,155" stroke="#FFD700" stroke-width="2" fill="none" stroke-dasharray="3,3" opacity="0.8"/>
      <polygon points="195,150 205,155 195,160" fill="#FFD700"/>
      
      <!-- Efficiency Display -->
      <g transform="translate(350,200)">
        <rect x="-25" y="-20" width="50" height="40" fill="#1A1A1A" stroke="#00FFFF" stroke-width="1" rx="3"/>
        <text x="0" y="-10" text-anchor="middle" fill="#4CAF50" font-family="Arial" font-size="10" font-weight="bold">+35%</text>
        <text x="0" y="0" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="8">Efficiency</text>
        <text x="0" y="10" text-anchor="middle" fill="#FFD700" font-family="Arial" font-size="8">PID Control</text>
      </g>
      
      <!-- Power Output Visualization -->
      <g transform="translate(50,150)">
        <rect x="0" y="-10" width="5" height="10" fill="#4CAF50" opacity="0.6"/>
        <rect x="7" y="-15" width="5" height="15" fill="#4CAF50" opacity="0.7"/>
        <rect x="14" y="-20" width="5" height="20" fill="#4CAF50" opacity="0.8"/>
        <rect x="21" y="-25" width="5" height="25" fill="#4CAF50" opacity="0.9"/>
        <text x="13" y="10" text-anchor="middle" fill="#4CAF50" font-family="Arial" font-size="8" font-weight="bold">Power Output</text>
      </g>
      
      <!-- Project Title -->
      <text x="200" y="270" text-anchor="middle" fill="#FFD700" font-family="Arial" font-size="16" font-weight="bold">
        Smart Solar Tracker
      </text>
      <text x="200" y="285" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="12">
        PID Controlled System
      </text>
    </svg>
  `;
}

function generateDefaultImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#1a1a1a"/>
      <rect x="150" y="100" width="100" height="100" rx="10" fill="#333"/>
      <text x="200" y="260" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="16" font-weight="bold">Project Preview</text>
      <text x="200" y="280" text-anchor="middle" fill="#888" font-family="Arial" font-size="12">Coming Soon</text>
    </svg>
  `;
}
