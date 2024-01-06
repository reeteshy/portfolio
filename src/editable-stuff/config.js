// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Reetesh",
  middleName: "",
  lastName: "Yadav",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/reeteshy",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/reeteshy1004/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/reetesh-yadav-developer/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/reeteshy15",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/reeteshy.png"),
  imageSize: 375,
  message:
    "My name is Reetesh Yadav. A skilled React developer with a passion for crafting seamless user experiences and scalable web applications. With 6 of hands-on experience, I specialize in leveraging the power of React.js to build dynamic and responsive interfaces. Proficient in JavaScript (ES6+), HTML5, and CSS3, I excel in state management using tools like Redux, Typescript, Javascript and Other tools",
  resume: "https://docs.google.com/document/d/1Swlcez4xxgkzTfgq7t-YCr6UjB8oF64M/edit?usp=drive_link&ouid=104367892167973918425&rtpof=true&sd=true",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "reeteshy", 
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
    { name: "Typescript", value: 75 },
    { name: "Redux", value: 85 },
    { name: "HTML/CSS", value: 65 },
    { name: "Next Js", value: 55 },
    { name: "Node", value: 45 },
    { name: "Express", value: 45 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Creativity", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Git", value: 80 },
    { name: "VS Code", value: 90 },
    { name: "Postman", value: 90 },
    { name: "GitHub", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering  for Web development opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "reeteshy15@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
