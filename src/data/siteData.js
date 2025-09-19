export const HERO = {
  name: 'Faisal Imam',
  tagline: 'Computer Science Engineer • System Programmer • Full-stack Developer',
  short: 'Building practical, user-friendly solutions that merge creativity with real-world impact.',
  long: `I'm Faisal Imam, a Computer Science engineer with a strong interest in system programming, full-stack development, and applied AI. I love turning complex ideas into simple, maintainable solutions — whether it's architecting robust backends, crafting intuitive UIs, or building AI-powered products.\n\nI recently led development of MindTrackAI, an AI-powered mental health prediction and personalized assistance system. I’ve also built various web utilities and image-processing tools, showcasing my ability to ship complete solutions end-to-end.`,
  photo: '/assets/faisal_dp.jpg',
  location: 'Bangalore, India',
  skills: {
    Languages: ['C','C++','Python','Java','SQL','HTML','CSS','JavaScript'],
    Frontend: ['React (familiar)','Tailwind CSS','Responsive Design'],
    Backend: ['Flask','PostgreSQL','Redis','JWT','SQLAlchemy'],
  },
  experience: [
    { org: 'Cambrian Open House', role: 'Finance Head', date: '2023', description: 'Managed budgets and vendor coordination for college events.' },
    { org: 'TEDx (licensed)', role: 'Co-organizer', date: '2024', description: 'Coordinated speakers, logistics and outreach.' }
  ],
  education: [
    { degree: 'B.E. Computer Science and Engineering', institution: 'Cambridge Institute Of Technology, VTU', cgpa: '8.8' },
    { degree: 'Elementary Education', institution: 'DAV Public School' }
  ],
  certifications: [
    { title: 'Problem Solving Through Programming in C', issuer: 'NPTEL (IIT Kharagpur)', link: 'https://drive.google.com/file/d/1fuaW-JgiY8XKXcmGnarOgoYZg04RHd-o/view?usp=sharing' },
    { title: 'Introduction to Algorithms and Analysis', issuer: 'NPTEL (IIT Kharagpur)', link: 'https://drive.google.com/file/d/1uk0ohv1R1Ume-WndD6ZdSIjAcjDULx27/view?usp=sharing' },
    { title: 'The Joy of Computing using Python', issuer: 'NPTEL (IIT Madras)', link: 'https://drive.google.com/file/d/1ursFQIeAnDyBZxfg9IqFAZJ-_1ZkO19O/view?usp=sharing' }
  ],
  testimonials: [
    { author: 'Prof. Jeevitha Prabhakara', role: 'Professor', quote: 'Faisal consistently demonstrates technical depth and leadership. His projects reflect strong problem-solving and practical deployment skills.' }
  ]
}

export const PROJECTS = [
  {
    title: 'MindTrackAI — AI Powered Mental Health Prediction & Assistance',
    summary: 'Predicts mental health state and offers personalized coping strategies and referrals.',
    tech: ['Python','Flask','NLTK','scikit-learn','PostgreSQL','Redis'],
    repo: 'https://github.com/faisalimam1/MindTrackAI',
    screenshots: ['/assets/Screenshot_2025-09-19_111054.png','/assets/Screenshot_2025-09-19_111116.png','/assets/Screenshot_2025-09-19_111130.png']
  },
  {
    title: 'Image Colorisation',
    summary: 'Converts grayscale images to color using a Caffe-based model.',
    tech: ['Python','Flask','Caffe'],
    repo: 'https://github.com/faisalimam1/Projects/tree/main/Image%20Colorisation',
    screenshots: []
  }
]

export const RESUME = { url: '/Faisal_resume.pdf' }

export const CONTACT = {
  email: 'imamfaisal36@gmail.com',
  mailto: 'mailto:imamfaisal36@gmail.com',
  formEndpoint: 'https://formspree.io/f/replace_with_your_form_id'
}
