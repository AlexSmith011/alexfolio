export type ExperienceCategory = "internships" | "clubs" | "research";
export type ExperienceFilter = "all" | ExperienceCategory;

export interface ExperienceItem {
  id: string;
  category: ExperienceCategory;
  title: string;
  organization: string;
  period: string;
  sortDate: string;
  role?: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  articleUrl?: string;
  articleLabel?: string;
  notice?: string;
  skills: string[];
}

export interface Degree {
  type: "bachelors" | "masters";
  label: string;
  graduation: string;
  majors?: string[];
  additionalMajor?: string;
  gpa?: string;
  coursework?: string[];
}

export interface Education {
  school: string;
  location?: string;
  degrees: Degree[];
}

export interface CertificationEntry {
  id: string;
  title: string;
  date: string;
  credentialId?: string;
  image?: string;
}

export interface CertificationGroup {
  id: string;
  title: string;
  issuer: string;
  period: string;
  sortDate: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  certifications: CertificationEntry[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const siteConfig = {
  name: "Alex Smith",
  fullName: "Alexander (Alex) Smith",
  pronouns: "he/him",
  email: "asmith5@andrew.cmu.edu",
  phone: "+1 (360) 540-5207",
  linkedin: "https://linkedin.com/in/alex-g-smith/",
  resumePdf: "/documents/alex-smith-resume.pdf",
  portfolioPdf: "/documents/portfolio.pdf",
  location: "Pittsburgh, PA",
  homeBio: {
    greeting: "Hello,",
    paragraphs: [
      "My name is Alex Smith, and I am a mechanical engineering student at Carnegie Mellon University pursuing my B.S. (May 2027) and M.S. (May 2028).",
      "I enjoy engineering challenges where performance and measurable results matter. Through Carnegie Mellon Racing's Formula SAE team, I've gained hands-on experience in design, analysis, manufacturing, and vehicle development while pursuing my passion for motorsport. I've also expanded my perspective through internships at General Motors and Boeing, working on automotive design engineering and aerospace connectivity systems.",
      "I'm always looking for opportunities to learn, build, and solve challenging engineering problems. If you'd like to connect, feel free to reach out through email or LinkedIn below.",
    ],
    signoff: "Best,",
    signoffName: "Alex",
  },
  education: {
    school: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    degrees: [
      {
        type: "masters" as const,
        label: "Master of Science in Mechanical Engineering, Advanced Study",
        graduation: "Expected graduation — May 2028",
      },
      {
        type: "bachelors" as const,
        label: "Bachelor of Science in Mechanical Engineering",
        graduation: "Expected graduation — May 2027",
        gpa: "3.90 / 4.00",
      },
    ] as Degree[],
  } satisfies Education,
  skills: [
    {
      title: "CAD / CAE",
      skills: [
        "SolidWorks CAD",
        "NX CAD & Motion",
        "Ansys Structural & Fluent",
        "KISSsoft",
        "nTopology",
        "Fusion 360 CAD/CAM",
        "MasterCAM",
        "CATIA V5",
        "FDM Slicers",
      ],
    },
    {
      title: "Manufacturing",
      skills: [
        "DfM",
        "DfA",
        "GD&T",
        "CNC 3-Axis Mill",
        "CNC Lathe",
        "Manual Mill",
        "Manual Lathe",
        "Manual Tools",
        "FDM 3D Printing",
      ],
    },
    {
      title: "Programming",
      skills: ["Python", "MATLAB", "Java"],
    },
  ] satisfies SkillGroup[],
  honors: ["Dean's List", "INCIGHT Scholar"],
  societies: [
    "Carnegie Mellon Racing (FSAE)",
    "Robotics Club (Combat Robotics)",
    "Pi Tau Sigma",
    "Mortar Board",
    "ASME",
    "Club Lacrosse",
  ],
};

export const experiences: Record<ExperienceCategory, ExperienceItem[]> = {
  internships: [
    {
      id: "gm-intern",
      category: "internships",
      title: "Design Engineering Intern",
      organization: "General Motors",
      period: "May 2026 – August 2026",
      sortDate: "2026-05",
      role: "Warren, MI",
      description:
        "Owned early-stage Siemens NX CAD design across five performance-vehicle subsystems, balancing packaging, manufacturability, and cost from concept through design review.",
      longDescription:
        "Owned early-stage Siemens NX CAD design across five performance-vehicle subsystems (exhaust, intake, brake, power unit, suspension), taking concepts from initial geometry through design review. Balanced packaging, manufacturability, and cost constraints to improve clearances and reduce mass, part count, and assembly time while meeting all program requirements and engineering standards.",
      image: "/images/experiences/gm/gm-logo.jpg",
      images: [
        "/images/experiences/gm/escalade-engine-bay.png",
        "/images/experiences/gm/ct5-exhaust.png",
        "/images/experiences/gm/ct5-exhaust-tips.png",
        "/images/experiences/gm/ct5-brakes.png",
        "/images/experiences/gm/escalade-suspension.png",
      ],
      skills: ["NX CAD", "DfM", "Design Review", "Performance Vehicle Design"],
    },
    {
      id: "boeing-intern",
      category: "internships",
      title: "Technical Program Management Intern",
      organization: "Boeing",
      period: "May 2025 – August 2025",
      sortDate: "2025-05",
      role: "Seattle, WA",
      description:
        "Co-led satellite antenna and in-flight Wi-Fi connectivity design reviews, integrating engineering data across aircraft, LEO satellites, and antenna systems.",
      longDescription:
        "Co-led modifications to satellite antenna and Wi-Fi connectivity through design review, evaluating LEO satellite, antenna, and in-flight connectivity hardware against system requirements. Integrated engineering data across aircraft, LEO satellites, and antenna systems into a single source of truth, distilling satellite-communications and power architectures for cross-functional and executive stakeholders.",
      image: "/images/experiences/boeing/boeing-logo.jpg",
      images: [
        "/images/experiences/boeing/viasat-esa.png",
        "/images/experiences/boeing/leo-meo-geo.png",
        "/images/experiences/boeing/first-class-interior.png",
      ],
      skills: [
        "Technical Program Management",
        "CATIA V5",
        "LEO Satellites",
        "Tableau",
        "Excel",
      ],
    },
  ],
  clubs: [
    {
      id: "fsae-powertrain",
      category: "clubs",
      title: "Powertrain Engineering Captain",
      organization: "Carnegie Mellon Racing (FSAE)",
      period: "April 2026 – Present",
      sortDate: "2026-04",
      role: "Pittsburgh, PA",
      description:
        "Leading development of metal additively manufactured uprights, gearsets, hubs, cooling sleeves, and brakes for the FSAE team.",
      longDescription:
        "Leading development of metal additively manufactured uprights, gearsets, hubs, cooling sleeves, and brakes. Creating and optimizing a 2-stage, fixed planetary gearset with a maximum input speed of 20k rpm using KISSsoft software.",
      image: "/images/experiences/powertrain/cmr-logo.jpg",
      images: [
        "/images/experiences/powertrain/exploded-stackup.png",
        "/images/experiences/powertrain/topology-upright.png",
        "/images/experiences/powertrain/cut-view.png",
      ],
      skills: ["KISSsoft", "Additive Manufacturing", "Powertrain Design", "nTopology"],
    },
    {
      id: "fsae-steering",
      category: "clubs",
      title: "Steering System Lead Mechanical Engineer",
      organization: "Carnegie Mellon Racing (FSAE)",
      period: "May 2025 – April 2026",
      sortDate: "2025-09",
      role: "Pittsburgh, PA",
      description:
        "Designed and manufactured the steering system for a driverless electric FSAE racecar, achieving >95% Ackermann target accuracy.",
      longDescription:
        "Designed, validated, and manufactured the steering system for a driverless electric FSAE racecar from first principles using SolidWorks CAD for modeling and clearance checks, Ansys FEA for stress analysis, and Fusion 360 CAM for machining. Developed and experimentally validated Ackermann geometry and steering effort models, achieving >95% target accuracy and <10% prediction error; partnered with autonomous systems engineers to ensure robust driverless vehicle handling, contributing to a six-place gain in autocross performance.",
      image: "/images/experiences/steering/cmr-26x.jpg",
      images: [
        "/images/experiences/steering/full-view.png",
        "/images/experiences/steering/installed.png",
        "/images/experiences/steering/steering-wheel.png",
        "/images/experiences/steering/eps-assembly.png",
        "/images/experiences/steering/col-sup-cad.png",
        "/images/experiences/steering/col-sup-fea.png",
        "/images/experiences/steering/sclamp-cad.png",
        "/images/experiences/steering/sclamp-fea.png",
        "/images/experiences/steering/rear-tab.png",
        "/images/experiences/steering/clearance.png",
        "/images/experiences/steering/effort-tool.png",
        "/images/experiences/steering/effort-sensitivity.png",
        "/images/experiences/steering/bump-steer.png",
      ],
      skills: [
        "SolidWorks",
        "Ansys FEA",
        "Fusion 360 CAM",
        "Vehicle Dynamics",
        "GD&T",
      ],
    },
    {
      id: "combat-robotics",
      category: "clubs",
      title: "Chassis Design Engineer",
      organization: "Carnegie Mellon Robotics Club - Combat Robotics",
      period: "August 2025 – May 2026",
      sortDate: "2025-08",
      role: "Pittsburgh, PA",
      description:
        "Designed the chassis for a 30-pound weight class robot, 'Spicy Toucan', and engineered a magnetic clutch hammer system for NHRL competition.",
      longDescription:
        "Designed the chassis for a 30-pound weight class robot, 'Spicy Toucan', to compete in the March 2026 NHRL competition using SolidWorks CAD and Ansys FEA. Engineered a magnetic clutch system to activate a 5-pound hammer with a 9-pound flywheel spinning at 200 rpm.",
      image: "/images/experiences/combat-robotics/spicy-toucan.png",
      images: [
        "/images/experiences/combat-robotics/spicy-toucan.png",
        "/images/experiences/combat-robotics/chassis-exposed.png",
      ],
      skills: ["SolidWorks", "Ansys FEA", "Mechanism Design", "DfM"],
    },
    {
      id: "fsae-suspension",
      category: "clubs",
      title: "Suspension Link Lead Mechanical Engineer",
      organization: "Carnegie Mellon Racing (FSAE)",
      period: "August 2024 – April 2025",
      sortDate: "2024-08",
      role: "Pittsburgh, PA",
      description:
        "Reduced suspension subsystem mass by nearly 25% and cut costs by 30% through improved material selection, GD&T drawings, and design optimization.",
      longDescription:
        "Reduced subsystem mass by nearly 25% through improved material selection and design, staying within 0.05 of factor-of-safety targets. Created technical drawings with GD&T and detailed cost reporting for all suspension subsystems for professional review; all drawings were verified and accepted, and cost was reduced by 30% compared to the prior year.",
      image: "/images/experiences/suspension/cmr-25e.jpg",
      images: [
        "/images/experiences/suspension/front-pushrod.png",
        "/images/experiences/suspension/rear-pushrod.png",
        "/images/experiences/suspension/calculations.png",
        "/images/experiences/suspension/two-force-members.png",
        "/images/experiences/suspension/lathe.png",
      ],
      skills: ["SolidWorks", "GD&T", "DfM", "CNC Lathe", "Structural Analysis"],
    },
  ],
  research: [
    {
      id: "rollett-am",
      category: "research",
      title: "Additive Manufacturing Research Assistant",
      organization: "CMU Materials Science Department — Rollett Group",
      period: "August 2026 – Present",
      sortDate: "2026-08",
      role: "Pittsburgh, PA",
      description:
        "Studying process–microstructure–property relationships in metal additive manufacturing.",
      longDescription:
        "Joining the Rollett Group to study process–microstructure–property relationships in metal additive manufacturing, connecting build parameters to material performance for advanced manufactured components.",
      image: "/images/experiences/rollett-am/mse-logo.jpg",
      images: ["/images/experiences/rollett-am/mse-logo.jpg"],
      articleUrl: "https://anthony.rollett.org",
      articleLabel: "A. D. Rollett — Materials Science & Engineering, Carnegie Mellon University",
      notice: "Planned for the future",
      skills: ["Additive Manufacturing", "Materials Science", "Metal AM"],
    },
    {
      id: "ai-cad",
      category: "research",
      title: "AI CAD Research Assistant",
      organization: "CMU Mechanical Engineering Department",
      period: "January 2026 – August 2026",
      sortDate: "2026-01",
      role: "Pittsburgh, PA",
      description:
        "Collaborated with Lockheed Martin to develop an AI pipeline that turns natural language into parameterized, optimized aerospace CAD.",
      longDescription:
        "Collaborated with Lockheed Martin to develop an end-to-end pipeline to turn natural language into fully parameterized and optimized CAD for aerospace components utilizing AI LLMs.",
      image: "/images/experiences/ai-cad/cmu-me-logo.jpg",
      images: [
        "/images/experiences/ai-cad/rear-wing.png",
        "/images/experiences/ai-cad/rear-wing-airfoils.png",
        "/images/experiences/ai-cad/planetary-gearset.png",
        "/images/experiences/ai-cad/gearbox.png",
        "/images/experiences/ai-cad/gear.jpg",
        "/images/experiences/ai-cad/abstract-boxes.jpg",
      ],
      articleUrl: "https://levburkara.github.io/",
      articleLabel: "Visual Design and Engineering Lab — Carnegie Mellon University",
      skills: ["Python", "LLMs", "CAD Automation", "Aerospace Design"],
    },
    {
      id: "robotics-institute",
      category: "research",
      title: "Robotics Research Assistant",
      organization: "Carnegie Mellon University Robotics Institute — Appleseed Labs",
      period: "January 2025 – May 2025",
      sortDate: "2025-01",
      role: "Pittsburgh, PA",
      description:
        "Designed DFMA-focused mechanical components for Johnny B. Root, an award-winning autonomous reforestation robot that earned the Excellence in Regenerative Agriculture award at the 2025 Farm Robotics Challenge.",
      longDescription:
        "As part of Appleseed Labs in the Kantor Lab, designed and validated DFMA-focused mechanical components for Johnny B. Root — an autonomous reforestation robot built for the 2025 Farm Robotics Challenge. The platform uses an auger and high-precision arm to drill and place seedlings, with LiDAR-based obstacle detection and a vision-based person detector for safe field operation. Our team received the Excellence in Regenerative Agriculture award out of 22 competing teams for outstanding commitment to environmental sustainability and ecosystem health.",
      image: "/images/experiences/robotics-research/robotics-institute-logo.jpg",
      images: [
        "/images/experiences/robotics-research/full-robot.png",
        "/images/experiences/robotics-research/robot-drilling.png",
        "/images/experiences/robotics-research/linear-actuator-drill.png",
      ],
      articleUrl:
        "https://www.ri.cmu.edu/cmus-autonomous-reforestation-robot-earns-national-award/",
      articleLabel: "CMU Robotics Institute — Autonomous Reforestation Robot Earns National Award",
      skills: ["DFMA", "SolidWorks", "3D Printing", "Robotic Systems"],
    },
  ],
};

export const certificationGroups: CertificationGroup[] = [
  {
    id: "group-dfma",
    title: "Design for Manufacture and Assembly",
    issuer: "General Motors",
    period: "Jun 2026",
    sortDate: "2026-06",
    description:
      "DFMA certifications covering failure mode analysis, design review, assembly design, and base engineered content reduction.",
    longDescription:
      "General Motors Design for Manufacture and Assembly certifications focused on failure mode and effects analysis (FMEA), design review based on failure mode (DRBFM), design for assembly, DFMEA, and base engineered content reduction.",
    image: "/images/certs/drbfm.png",
    images: [
      "/images/certs/drbfm.png",
      "/images/certs/fmea.png",
      "/images/certs/dfmea.png",
      "/images/certs/dfa.png",
      "/images/certs/bec-reduction.png",
    ],
    certifications: [
      {
        id: "gm-dfma-drbdfm",
        title: "Design Review Based on Failure Mode",
        date: "Jun 2026",
        image: "/images/certs/drbfm.png",
      },
      {
        id: "gm-dfma-fmea",
        title: "Failure Mode and Effects Analysis",
        date: "Jun 2026",
        image: "/images/certs/fmea.png",
      },
      {
        id: "gm-dfma-design-fmea",
        title: "Design for Failure Mode and Effects Analysis",
        date: "Jun 2026",
        image: "/images/certs/dfmea.png",
      },
      {
        id: "gm-dfma-dfa",
        title: "Design for Assembly (DFA)",
        date: "Jun 2026",
        image: "/images/certs/dfa.png",
      },
      {
        id: "gm-dfma-bec",
        title: "Base Engineered Content Reduction",
        date: "Jun 2026",
        image: "/images/certs/bec-reduction.png",
      },
    ],
  },
  {
    id: "group-additive-manufacturing",
    title: "Additive Manufacturing",
    issuer: "General Motors",
    period: "May – Jun 2026",
    sortDate: "2026-05",
    description:
      "Foundational through advanced additive manufacturing certifications covering AM processes and design principles.",
    longDescription:
      "General Motors additive manufacturing certification track spanning foundational concepts through intermediate and advanced AM design and production workflows.",
    image: "/images/certs/am-foundational.png",
    images: [
      "/images/certs/am-foundational.png",
      "/images/certs/am-intermediate.png",
      "/images/certs/am-advanced.png",
    ],
    certifications: [
      {
        id: "gm-am-foundational",
        title: "Additive Manufacturing — Foundational",
        date: "May 2026",
        image: "/images/certs/am-foundational.png",
      },
      {
        id: "gm-am-intermediate",
        title: "Additive Manufacturing — Intermediate",
        date: "May 2026",
        image: "/images/certs/am-intermediate.png",
      },
      {
        id: "gm-am-advanced",
        title: "Additive Manufacturing — Advanced",
        date: "Jun 2026",
        image: "/images/certs/am-advanced.png",
      },
    ],
  },
  {
    id: "group-nx-cad",
    title: "NX CAD — Surfaces and Sheet Metal",
    issuer: "General Motors",
    period: "May 2026",
    sortDate: "2026-05",
    description:
      "NX CAD certifications covering sheet metal design workflows within GM's engineering development programs.",
    longDescription:
      "Certifications earned through General Motors' NX CAD curriculum, focused on surfaces and sheet metal design for production vehicle subsystems.",
    image: "/images/certs/nx-sheet-metal.png",
    images: ["/images/certs/nx-sheet-metal.png"],
    certifications: [
      {
        id: "gm-nx-sheet-metal",
        title: "NX Sheet Metal",
        date: "Jun 2026",
        image: "/images/certs/nx-sheet-metal.png",
      },
    ],
  },
  {
    id: "group-dfm-composites",
    title: "Design for Materials — Composites",
    issuer: "General Motors",
    period: "Jun 2026",
    sortDate: "2026-06",
    description:
      "Design for fiber reinforced composite materials — from material basics through applied composite engineering.",
    longDescription:
      "General Motors Design for Materials certifications focused on fiber reinforced composites, covering fundamental material behavior and design considerations for composite components.",
    image: "/images/certs/composites-material-basics.png",
    images: [
      "/images/certs/composites-material-basics.png",
      "/images/certs/composites-frc.png",
    ],
    certifications: [
      {
        id: "gm-composites-basics",
        title: "Material Basics — Fiber Reinforced Composites",
        date: "Jun 2026",
        image: "/images/certs/composites-material-basics.png",
      },
      {
        id: "gm-composites-frc",
        title: "Fiber Reinforced Composites",
        date: "Jun 2026",
        image: "/images/certs/composites-frc.png",
      },
    ],
  },
  {
    id: "group-dfm-plastics",
    title: "Design for Materials — Plastics",
    issuer: "General Motors",
    period: "Jun 2026",
    sortDate: "2026-06",
    description:
      "Plastic material design certifications covering injection molding and elastic averaging for production parts.",
    longDescription:
      "General Motors Design for Materials certifications in plastics engineering, covering injection molding processes and elastic averaging principles for robust plastic component design.",
    image: "/images/certs/elastic-averaging.png",
    images: [
      "/images/certs/elastic-averaging.png",
      "/images/certs/injection-molding.png",
    ],
    certifications: [
      {
        id: "gm-plastics-elastic",
        title: "Elastic Averaging",
        date: "Jun 2026",
        image: "/images/certs/elastic-averaging.png",
      },
      {
        id: "gm-plastics-injection",
        title: "Injection Molding",
        date: "Jun 2026",
        image: "/images/certs/injection-molding.png",
      },
    ],
  },
  {
    id: "group-dfm-metals",
    title: "Design for Materials — Metals",
    issuer: "General Motors",
    period: "Jun 2026",
    sortDate: "2026-06",
    description:
      "Sheet steel design certifications covering progressive levels of metals engineering for automotive applications.",
    longDescription:
      "General Motors Design for Materials certifications in metals, spanning three levels of sheet steel design for structural and body-in-white applications.",
    image: "/images/certs/sheet-steel-1.png",
    images: [
      "/images/certs/sheet-steel-1.png",
      "/images/certs/sheet-steel-2.png",
      "/images/certs/sheet-steel-3.png",
    ],
    certifications: [
      {
        id: "gm-metals-sheet-1",
        title: "Sheet Steel 1",
        date: "Jun 2026",
        image: "/images/certs/sheet-steel-1.png",
      },
      {
        id: "gm-metals-sheet-2",
        title: "Sheet Steel 2",
        date: "Jun 2026",
        image: "/images/certs/sheet-steel-2.png",
      },
      {
        id: "gm-metals-sheet-3",
        title: "Sheet Steel 3",
        date: "Jun 2026",
        image: "/images/certs/sheet-steel-3.png",
      },
    ],
  },
  {
    id: "group-geomiq-gdt",
    title: "3D Geometric Dimensioning and Tolerancing",
    issuer: "Geomiq",
    period: "Mar 2026",
    sortDate: "2026-03",
    description:
      "3D GD&T certification covering geometric dimensioning and tolerancing for precision mechanical design and manufacturing.",
    longDescription:
      "Completed Geomiq Academy's Mastering 3D Geometric Dimensioning and Tolerancing (GD&T) certification, demonstrating proficiency in GD&T symbols, principles, and applications for manufacturing, inspection, and quality control.",
    image: "/images/certs/geomiq-gdt.png",
    images: ["/images/certs/geomiq-gdt.png"],
    certifications: [
      {
        id: "geomiq-gdt",
        title: "3D Geometric Dimensioning & Tolerancing",
        date: "Mar 2026",
        credentialId: "cert_b9npwlpn",
        image: "/images/certs/geomiq-gdt.png",
      },
    ],
  },
];

export const experienceFilterLabels: Record<ExperienceFilter, string> = {
  all: "All",
  internships: "Internships",
  clubs: "Clubs",
  research: "Research",
};

export function getAllExperiences(): ExperienceItem[] {
  return [
    ...experiences.internships,
    ...experiences.clubs,
    ...experiences.research,
  ];
}
