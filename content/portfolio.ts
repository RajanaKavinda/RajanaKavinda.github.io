// Edit this file to update your portfolio. Duplicate any project to add new work.
export const profile = {
  firstName: 'Rajana Kavinda',
  lastName: 'Samarakoon',
  role: 'M.Eng. Research Student',
  institution: 'Memorial University of Newfoundland',
  location: 'St. John’s, NL · Canada',
  email: 'rajana.k.samarakoon@gmail.com',
  academicEmail: 'ksamarakoonm@mun.ca',
  github: 'https://github.com/RajanaKavinda',
  linkedin: 'https://www.linkedin.com/in/rajana-kavinda/',
  portrait: './profile.jpeg',
  introduction:
    'Graduate researcher exploring how robots localize, collaborate, and navigate the real world. Working at the intersection of robotics, perception, and intelligent systems.',
  research:
    'My thesis-based master’s research at Memorial University of Newfoundland focuses on multi-robot cooperative localization for autonomous robotic systems. I’m interested in reliable state estimation and how robots can use shared information to better understand their position and surroundings.',
  approach:
    'I connect research with hands-on development in motion planning, feedback control, computer vision, and edge AI—building the components that make autonomous systems work together.',
  educationSummary:
    'I completed my bachelor’s degree at the University of Moratuwa’s Faculty of Engineering, specializing in Electronic and Telecommunication Engineering.',
};
export const projects = [
  {
    id: 'f1tenth',
    title: 'F1TENTH Planner & TVLQR Controller',
    category: 'Planning & control',
    date: 'Sep 2026',
    featured: true,
    visual: 'path',
    description:
      'A safety-aware planning and control stack for a simulated F1TENTH car, from occupancy-grid A* to collision-checked smoothing, speed profiling, and finite-horizon TVLQR tracking.',
    detail:
      'Trajectory optimization uses Drake Direct Collocation with SNOPT. The stack brings planning, optimization, and feedback control into a single simulation workflow.',
    tags: ['ROS2', 'A*', 'Drake', 'TVLQR'],
    url: 'https://github.com/RajanaKavinda/F1tenth-car-planner-and-controller',
    linkLabel: 'View source',
  },
  {
    id: 'golf',
    title: 'Golf Companion Robot',
    category: 'Robotics & perception',
    date: 'Aug 2024 – May 2025',
    featured: true,
    visual: 'vision',
    description:
      'A companion robot combining vision-based human following, GPS outdoor navigation, golf ball collection, and mobile app remote control.',
    detail:
      'Developed with three peers. My contribution included the complete human-following feature, dataset creation, model fine-tuning, and robot assembly.',
    tags: ['ROS2', 'YOLO', 'BoTSORT', 'Jetson Orin'],
    url: 'https://drive.google.com/drive/folders/1rH2oln5LGNIdzMdPvgCyo4E8391Eo93w?usp=sharing',
    linkLabel: 'View project',
  },
  {
    id: 'quantum',
    title: 'Quantum PPO for UAV Resource Allocation',
    category: 'Reinforcement learning',
    date: 'Sep 2026',
    featured: true,
    visual: 'quantum',
    description:
      'A hybrid quantum-classical PPO agent for bandwidth allocation and task offloading in a five-user UAV-assisted edge-computing system.',
    detail:
      'Uses five-qubit variational actor and critic circuits with Qiskit Aer to explore quantum reinforcement learning for resource allocation.',
    tags: ['Python', 'PyTorch', 'Qiskit', 'PPO'],
    url: 'https://github.com/RajanaKavinda/Quantum-RL-PPO-based-UAV-Resource-Allocation',
    linkLabel: 'View source',
  },
  {
    id: 'plates',
    title: 'License Plate Recognition',
    category: 'Computer vision',
    date: 'May – Jun 2025',
    featured: false,
    description:
      'License plate detection with YOLOv11 and character recognition with fine-tuned EasyOCR on real-world datasets.',
    tags: ['Python', 'YOLOv11', 'EasyOCR'],
    url: 'https://github.com/RajanaKavinda/License-Plate-Recognition-Project',
    linkLabel: 'View source',
  },
  {
    id: 'arm',
    title: '3-DOF Robot Arm Simulation',
    category: 'Robotics',
    date: 'Jan – Feb 2025',
    featured: false,
    description:
      'A simulated robot arm with Amazon Alexa integration for voice-controlled motion.',
    tags: ['ROS2', 'Gazebo', 'MoveIt2', 'C++'],
    url: 'https://github.com/RajanaKavinda/3DOF-Robot-Arm-Simulation/tree/main',
    linkLabel: 'View source',
  },
  {
    id: 'mobile',
    title: 'Differential Drive Mobile Robot',
    category: 'Localization',
    date: 'Oct – Dec 2024',
    featured: false,
    description:
      'A two-wheel robot simulation in Gazebo using SLAM for localization and mapping, with Kalman filtering for sensor fusion.',
    tags: ['ROS2', 'Gazebo', 'SLAM', 'Kalman filter'],
    url: '',
    linkLabel: '',
  },
  {
    id: 'tracking',
    title: '2D Target Tracking with a Kalman Filter',
    category: 'State estimation',
    date: 'Nov – Dec 2024',
    featured: false,
    description:
      'A Python implementation of a Kalman filter to estimate and track a target’s motion in two-dimensional space.',
    tags: ['Python', 'State estimation'],
    url: 'https://github.com/RajanaKavinda/EN_4594_Target_Tracking_KF',
    linkLabel: 'View source',
  },
  {
    id: 'imu',
    title: 'IMU Sensor Calibration',
    category: 'Sensor fusion',
    date: 'Oct 2024',
    featured: false,
    description:
      'Practical orientation estimation with a Pololu Zumo 32U4 robot, with orientation visualization in RViz2.',
    tags: ['ROS2', 'C++', 'RViz2'],
    url: 'https://github.com/RajanaKavinda/EN4594_IMU_Sensor_Calibration',
    linkLabel: 'View source',
  },
  {
    id: 'unity',
    title: 'Unity WebGL Game',
    category: 'Software engineering',
    date: 'Feb – Jun 2024',
    featured: false,
    description:
      'Led a four-person team building a browser-based coin-collecting game, integrated with a separate quiz application.',
    tags: ['Unity', 'C#', 'React', 'Spring Boot', 'MySQL'],
    url: 'https://github.com/RajanaKavinda/Unity-Game-Environment',
    linkLabel: 'View source',
  },
  {
    id: 'trading',
    title: 'Flower Trading Platform',
    category: 'Software engineering',
    date: 'Jul – Sep 2023',
    featured: false,
    description:
      'A trading platform modeling stock-exchange behavior using object-oriented C++ and multithreading.',
    tags: ['C++', 'OOP', 'Multithreading'],
    url: 'https://github.com/UlinduP/Flower-Trading-Platform',
    linkLabel: 'View source',
  },
  {
    id: 'battle',
    title: 'Battle Robot',
    category: 'Embedded systems',
    date: 'Jun – Jul 2023',
    featured: false,
    description:
      'Designed the circuit for NRF-based remote communication and completed hardware fabrication.',
    tags: ['Arduino', 'SolidWorks', 'Altium'],
    url: 'https://github.com/randika-perera/Battle-Robot',
    linkLabel: 'View source',
  },
  {
    id: 'dual',
    title: 'Autonomous Dual Robot System',
    category: 'Cooperative robotics',
    date: 'Mar – May 2023',
    featured: false,
    description:
      'Two communicating robots navigating a maze and dotted paths, avoiding obstacles, and recognizing surface colors.',
    tags: ['Arduino', 'SolidWorks'],
    url: 'https://github.com/UlinduP/Techno-Odyssey',
    linkLabel: 'View source',
  },
  {
    id: 'gas',
    title: 'Smart LPG Gas Leakage Detector',
    category: 'Electronics',
    date: 'Feb – Jun 2023',
    featured: false,
    description:
      'Designed and fabricated a gas leakage detector with a double-layer PCB and custom enclosure.',
    tags: ['Altium', 'SolidWorks'],
    url: 'https://github.com/RajanaKavinda/Smart-LPG-Gas-Leakage-Detecter-EN2160',
    linkLabel: 'View source',
  },
  {
    id: 'audio',
    title: 'Five Band Audio Equalizer',
    category: 'Electronics',
    date: 'Sep 2022 – Jan 2023',
    featured: false,
    description:
      'An op-amp-based audio filter with adjustable frequency bands, a double-layer PCB, and a custom enclosure.',
    tags: ['Altium', 'SolidWorks', 'Multisim'],
    url: 'https://github.com/RajanaKavinda/FIVE-BAND-AUDIO-EQUALIZER',
    linkLabel: 'View source',
  },
];
export const experience = [
  {
    role: 'Embedded Machine Learning Engineer',
    organization: 'WhizNeuro Limited · UK, remote',
    date: 'Jul 2025 – Jan 2026',
    type: 'Contract',
    description:
      'Designed and deployed optimized machine learning models on NVIDIA edge platforms for real-time multi-camera video analytics during a six-month contract.',
    tags: ['NVIDIA edge platforms', 'Video analytics', 'Model optimization'],
  },
  {
    role: 'Engineering Intern',
    organization: 'Magicbit (Pvt) Ltd · Sri Lanka',
    date: 'Nov 2023 – May 2024',
    type: 'Internship',
    description:
      'Worked on an AI chatbot, IoT gateway systems, and the launch of the Magicbit Tiny board, including STEM content development and testing.',
    tags: ['Embedded systems', 'IoT', 'STEM education'],
  },
];
export const education = [
  {
    degree: 'Master of Engineering (Computer)',
    institution: 'Memorial University of Newfoundland, Canada',
    date: 'Jan 2026 – Present',
    note: 'OGPA 4.00 / 4.00 · Thesis-based graduate research · Multi-robot cooperative localization',
  },
  {
    degree: 'B.Sc. (Hons) Electronic & Telecommunication Engineering',
    institution: 'Faculty of Engineering, University of Moratuwa, Sri Lanka',
    date: 'Jun 2021 – Jun 2025',
    note: 'OGPA 3.68 / 4.00',
  },
];
export const skills = [
  {
    group: 'Robotics & simulation',
    items: ['ROS2', 'MoveIt2', 'Drake', 'Gazebo', 'Webots'],
  },
  {
    group: 'AI & perception',
    items: [
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'NVIDIA DeepStream',
      'TAO Toolkit',
    ],
  },
  {
    group: 'Programming',
    items: ['Python', 'C++', 'Java', 'JavaScript (novice)'],
  },
  {
    group: 'Hardware & development',
    items: [
      'Jetson',
      'Arduino',
      'Altium',
      'SolidWorks',
      'Git',
      'Docker',
      'Linux',
    ],
  },
  {
    group: 'Web & data',
    items: ['React', 'Spring Boot', 'MySQL', 'Firebase Firestore (novice)'],
  },
];
export const certificates = [
  {
    title: 'Introduction to Transformer Models for NLP',
    date: '2025',
    url: 'https://lnkd.in/g78tKFxb',
  },
  {
    title: 'Deep Learning Specialization',
    date: '2024',
    url: 'https://drive.google.com/drive/folders/1-tNrPIXYsT-Uid_7fQ0Y0-wPYyhSTwp9?usp=sharing',
  },
  {
    title: 'Machine Learning Specialization',
    date: '2023',
    url: 'https://coursera.org/share/0303512c9d4ba2bf5b1fefdcb5334233',
  },
  {
    title: 'ROS2 for Beginners · Levels 1, 2 & 3',
    date: '2024',
    url: 'https://drive.google.com/drive/u/0/folders/12YHqd2Yx0wwmAX5sC3QLKTWXGJedsPmc',
  },
  {
    title: 'ROS2 Nav2 · SLAM and Navigation',
    date: '2024',
    url: 'https://drive.google.com/file/d/1r6R-dmnO_fdGqPnjRY8dCjTqB87ls0RV/view?usp=sharing',
  },
  {
    title: 'Full Stack Java · Spring Boot & React',
    date: '2024',
    url: 'https://drive.google.com/file/d/1OoKNIrJKspMjX86VHed_YrZRuLiAPbof/view?usp=sharing',
  },
  {
    title: 'Docker Foundations Professional Certificate',
    date: '2025',
    url: 'https://www.linkedin.com/learning/certificates/8b18d8a8b1e00dfdc24334b1d6cf95d5d5ab84cfa6311bd608d98149705757b6?trk=share_certificate',
  },
];
