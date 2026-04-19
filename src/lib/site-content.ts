export const sequenceFrames = Array.from({ length: 120 }, (_, index) => {
  const frame = String(index).padStart(3, "0");
  return `/sequence/frame_${frame}_delay-0.066s.webp`;
});

export const hero = {
  headline: "Al Sadique Nuhin",
  tagline: "Crafting thoughtful software experiences with a strong engineering foundation.",
  summary:
    "Undergraduate Computer Science & Engineering student at Bangladesh University of Professionals (BUP), building a path toward cloud computing, scalable systems and collaborative product development."
};

export const aboutParagraphs = [
  "Assalamualaikum! I’m Al Sadique Nuhin, an undergraduate Computer Science & Engineering student at Bangladesh University of Professionals (BUP). My academic journey is rooted in the fundamentals of computing while my practical experiences have taught me how to turn ideas into structured, purposeful solutions.",
  "At BUP Computer Programming Club, I serve as Assistant Joint Secretary (Logistics), where I help organize technical events and contribute to a space that encourages learning, teamwork and problem solving. That role has sharpened my leadership, planning and communication skills alongside my technical growth.",
  "I enjoy working with C, C++, Java, and Python and my coursework spans SPL, OOP, SQL, Linux, Data Structures & Algorithms, Data Communication, Theory of Computation, Digital Logic Design, and Operating Systems. Outside the classroom, football keeps me disciplined, competitive and connected to teamwork. My long-term goal is to specialize in Cloud Computing and build modern, scalable software systems that solve real problems."
];

export const stats = [
  { value: "CSE", label: "Undergraduate" },
  { value: "BUP", label: "University" },
  { value: "Problem Solving", label: "Core skill" },
  { value: "Cloud", label: "Future specialization" },
  { value: "Team-first", label: "Leadership style" }
];

export const profile = {
  field: "Undergraduate Student in Computer Science & Engineering",
  university: "Bangladesh University of Professionals (BUP)",
  currentRole: "Assistant Joint Secretary (Logistics), BUP Computer Programming Club"
};

export const snapshotPoints = [
  "Focused on problem solving, software development, and continuous learning.",
  "Interested in cloud computing and scalable modern systems.",
  "Enjoys football, which reinforces discipline and teamwork."
];

export const skills = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Java", "Python"]
  },
  {
    title: "Core Subjects",
    items: ["Data Structures & Algorithms", "OOP", "SPL"]
  },
  {
    title: "Database",
    items: ["SQL"]
  },
  {
    title: "Systems & Tools",
    items: ["Linux", "Operating Systems"]
  },
  {
    title: "Networking & Theory",
    items: ["Data Communication", "Theory of Computation"]
  },
  {
    title: "Hardware Basics",
    items: ["Digital Logic Design", "Introductory EEE"]
  },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Teamwork", "Leadership", "Event Management"]
  }
];

export const projects = [
  {
    name: "Plane Game",
    description:
      "A game development project built in Java that combines animation, interaction, and responsive gameplay logic.",
    purpose:
      "To strengthen object-oriented thinking, event handling, and hands-on Java programming through a fun, interactive build.",
    impact:
      "Demonstrated how core programming concepts can be translated into an engaging user experience while improving control-flow and debugging skills.",
    githubUrl: "https://github.com/Nuhin-2061/Plane_Game."
  },
  {
    name: "Agriculture Management System",
    description:
      "A software solution designed to organize agricultural operations, records, and planning in a more structured way.",
    purpose:
      "To explore how software can support practical workflows and solve domain-specific management challenges.",
    impact:
      "Showed an ability to think beyond theory and design a system that can improve efficiency, clarity, and decision-making.",
    githubUrl: "https://github.com/Nuhin-2061/Agriculture_Management_System."
  },
  {
    name: "Tourist Management System",
    description:
      "A travel management application concept focused on helping users plan and manage tourism-related information more efficiently.",
    purpose:
      "To practice application design, user flow thinking, and data organization in a real-world style project.",
    impact:
      "Highlighted a practical approach to building user-facing software that balances structure, usability, and clarity.",
    githubUrl: "https://github.com/Nuhin-2061/Tourist_Management_System."
  },
  {
    name: "Hospital Management System",
    description:
      "A management platform focused on organizing hospital operations such as patient records, scheduling, and core administrative workflows.",
    purpose:
      "To apply software engineering principles in a real-world healthcare management context and improve operational structure.",
    impact:
      "Demonstrated practical system design for service-heavy environments, with focus on clarity, maintainability, and process efficiency.",
    githubUrl: "https://github.com/Nuhin-2061/Hospital_Management_System."
  }
];

export const education = {
  degree: "Bachelor of Science (BSc) in Computer Science & Engineering",
  institution: "Bangladesh University of Professionals (BUP)"
};

export const achievements = [
  "Assistant Joint Secretary (Logistics), BUP Computer Programming Club",
  "Organized and contributed to technical events and collaborative programming activities",
  "Built a strong academic foundation across core computer science and engineering subjects"
];

export const goals = [
  "Specialize in Cloud Computing",
  "Build scalable and modern software systems",
  "Continuously improve problem-solving and development skills",
  "Grow through collaboration, mentorship, and networking"
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/al-sadique-nuhin"
  },
  {
    label: "GitHub",
    href: "https://github.com/Nuhin-2061"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18DVMwu8dw/"
  }
];

export const resume = {
  title: "Resume Tools",
  description:
    "Use these quick actions to view or download my latest resume. I keep this file updated as my projects, skills, and experience grow.",
  fileUrl: "/resume/al-sadique-nuhin-resume.pdf",
  fileName: "Al-Sadique-Nuhin-Resume.pdf"
};