/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jai Krishna Singh",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Jai Krishna Singh",
  logo_name: "JaiKrishna Singh",
  nickname: "Happiness",
  subTitle:
    "I am a MERN FULL STACK DEVELOPER 💻. I specialize in JavaScript. I have in-depth knowledge of HTML, CSS, JavaScript, React.js, and Git.",
  resumeLink:
    "https://drive.google.com/file/d/1mW9_YjID_0E-jI1XXZiKhgk4oq0Z-pDh/view?usp=sharing",
  portfolio_repository: "https://github.com/JaiS739/Sugar-Cosmetic",
  githubProfile: "https://github.com/JaiS739",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/JaiS739",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jai-krishna-singh/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: ["⚡ Building responsive website front end using React-Redux"],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Masai School",
      subtitle: "Full Stack Web Developer",
      logo_path: "logo.svg",
      alt_name: "Masai Schbool, Bangalore",
      duration: "Jan 2022 - Aug 2022",
      descriptions: [
        "⚡ I have studied software developer subjects like DS & Algorithms, JavaScript, HTML, CSS, React, Redux etc.",
      ],
      website_link: "https://www.masaischool.com/",
    },
    {
      title: "Mathura Devi Groups Of Institutions",
      subtitle: "B.E. in Mechanical Engineering",
      logo_path: "logo_new (1).png",
      alt_name: "MDITM, Indore",
      duration: "July 2013 - July 2018",
      descriptions: [
        "⚡ I have studied basic Mechanical engineering subjects like Machine Designing, Thermodynamics, Strength of Material, Internal Combustion Engines etc.",
      ],
      website_link: "http://www.mathuradevigroupofinstitutions.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Developer",
      subtitle: "",
      logo_path: "logo.svg",
      certificate_link: "",
      alt_name: "Masai School",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked with two big BPO companies CRM Services LTD, and Continuum Global Solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Transaction Processor",
          company: "Continuum Global Solutions",
          company_url: "https://www.continuumgbl.com/",
          logo_path: "logo-422w.webp",
          duration: "March 2019 - Jan 2022",
          location: "Indore, MP",
          description:
            "I used to support US customers with their queries and complaints.",
          color: "#0879bf",
        },
        {
          title: "Customer Service Executive",
          company: "CRM Sevices PVT LTD",
          company_url: "https://www.teleperformance.com/",
          logo_path: "download.png",
          duration: "Sep 2017 - Feb 2019",
          location: "Indore, MP",
          description:
            "I used to support Indian customers with their queries regarding our product and help them to understand the different aspects of our product.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [],
    },
    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

let project = "";

// Projects Page
const projectsHeader = {
  title: "Sugar Cosmetic Clone",
  description:
    "My project makes use of vast variety of technologies like HTML, CSS, JavaScript, Node.js. It was my best experience to create Sugar Cosmetics Clone.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

// About Page
const contactPageData = {
  contactSection: {
    title: "About Me",
    profile_image_path: "jai.png",
    description:
      "I am a MERN full stack web developer from Khandwa MP. I like to visit new places. I am available on social media like linkedIn.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@jksingh00739/sugar-cosmetics-851b92ca0953",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "56 Vidhya Nagar, Anand Nagar, Dist.-Khandwa, Madhya Pradesh - 450001",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/eWrufsujJDSbTHnW8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9098987322",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
