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
    { name: "HTML/HTML5", value: 80 },
    { name: "CSS/CSS3", value: 90 },
    { name: "Redux ToolKit", value: 75 },
    { name: "Azure CICD", value: 85 },
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
    "I'm currently looking for full-time Full Stack for Web development opportunities! If you know of any positions available or if you just want to say hi, please feel free to email me at",
  email: "reeteshy15@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/Chetu-india.png'),
      date: 'Oct 2019 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/mediatrenz.png'),
      date: 'July- 2018 - Oct-2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
