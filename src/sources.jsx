import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";
import { IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaXTwitter, FaYoutube,FaLaptopCode, FaLinkedinIn, FaCss3, FaCss3Alt, FaRegFileCode} from "react-icons/fa6";
import { FaFacebookSquare,FaGithub,FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi'
import {DiJavascript, DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiCss3, SiExpress,SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";


export const resumeUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-fc9ee.appspot.com/o/Portfolio-data%2FRoshans%20Resume.pdf?alt=media&token=d0cb6e36-d314-4b7d-a994-c9e7e86da3b4';

export const tabs = [
    {name:"About Me",id:'about'},
    {name:"Skill",id:'skill'},
    {name:"Services",id:'services'},
    {name:"Projects",id:'projects'},
    // {name:"Testimonials",id:'testimonials'},
]

export const whyChooseMe = [
  {
    title:"Unmatched Local Expertise",
    icon:<GrUserExpert/>,
    link:"",
  },
  {
    title:"Passion for Technology",
    icon:<IoMdAnalytics/>,
    link:"",
  },
  {
    title:"Dedicated Client Support",
    icon:<MdOutlineSupportAgent/>,
    link:"",
  },
  {
    title:"Innovative Problem Solver",
    icon:<RiExchange2Fill/>,
    link:"",
  },
]
export const services = [
  {
    name:"UI/UX Design",
    icon:<FaPaintBrush/>,
    description:`Specializing in UI/UX design, I create intuitive and engaging user interfaces that enhance the overall user experience. From wireframes to interactive prototypes, I focus on aesthetics and usability to deliver visually appealing and user-friendly designs that captivate and convert.`,
  },
  {
    name:"Web Development",
    icon:<FaLaptopCode/>,
    description:`With expertise in web development, I build responsive, high-performance websites using the latest technologies. Whether it's a simple landing page or a complex web application, I ensure seamless functionality and an exceptional user experience across all devices.`,
  },
  {
    name:"Maintenance and Support",
    icon:<TfiWrite/>,
    description:`Maintenance and support services ensure your digital presence remains robust and secure. From regular updates to troubleshooting, I provide reliable solutions to keep your website or application running smoothly. With proactive monitoring and timely responses, I ensure minimal downtime and optimal performance for sustained business success.`,
  },
  
]


export const skills = [

  {
      title:"Frontend Development",
      data:[
          {
              skill:"HTML",
              level:"Experienced",
          },
          {
              skill:"CSS",
              level:"Experienced",
          },
          {
              skill:"JavaScript",
              level:"Experienced",
          },
          {
              skill:"Tailwind",
              level:"Intermediate",
          },
          {
              skill:"Bootstrap",
              level:"Experienced",
          },
          {
            skill:"Material UI",
            level:"Intermediate",
        },
          {
              skill:"React",
              level:"Experienced",
          },
      ]
  },
  {
      title:"Backend Development",
      data:[
          {
              skill:"Node JS",
              level:"Experienced",
          },
          {
              skill:"MangoDB",
              level:"Intermediate",
          },
          {
              skill:"Express JS",
              level:"Experienced",
          },
          {
              skill:"FastAPI",
              level:"Intermediate",
          },
          {
              skill:"SQL",
              level:"Experienced",
          },
          {
            skill:"jQuery",
            level:"Intermediate",
        },
      ]
  },
  {
    title:"Others",
    data:[
        {
            skill:"Figma",
            level:"Intermediate",
        },
        {
            skill:"Git",
            level:"Intermediate",
        },
        {
            skill:"GitHub",
            level:"Intermediate",
        },
        {
          skill:"VS Code",
          level:"Experienced",
      },
      {
        skill:"Postman",
        level:"Experienced",
    },
    ]
},
]


export const projects = [
  { 
    id:1,
    title: 'Movies and TV Shows Application',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fc9ee.appspot.com/o/Portfolio-data%2FProject1.png?alt=media&token=2bc77158-2d3f-4571-9200-2869848b5ebf',
    category:"UI/UX",
    description: `I developed a Movies and TV shows application designed to enhance your entertainment experience. The app allows users to browse a vast collection of movies and TV shows, read detailed descriptions, watch trailers, and manage their watchlist by filtering according to genres. With a user-friendly interface and seamless navigation, it ensures easy access to your favorite content anytime, anywhere.`,
    demoLink: "https://moviesflix-01.web.app/",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"Tailwind",
        icon: <FaCss3Alt/>,
        iconColor:"skyblue",
      },
      {
        name:"TMDB API",
        icon: <FaRegFileCode/>,
        iconColor:"skyblue",
      },
    ]
  },
  {
    id:2,
    title: 'E-Commerce Application',
    image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
    category:"Web",
    description:`Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:3,
    title: 'Tic-Tac-Toe',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fc9ee.appspot.com/o/Portfolio-data%2FProject3.png?alt=media&token=f3e76254-bee0-4111-b082-99e2d65ffb01',
    category:"Web",
    description: `I developed a Tic-Tac-Toe game that offers a simple yet engaging experience. The game features a clean, user-friendly interface, allowing players to enjoy a classic game of strategy. It includes single-player mode with varying difficulty levels and a two-player mode for competitive play. Optimized for all devices, the game ensures smooth performance and fun for users of all ages.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"JavaScript",
        icon: <DiJavascript/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"CSS",
        icon: <SiCss3/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:4,
    title: 'Stone-Paper-Scissors',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fc9ee.appspot.com/o/Portfolio-data%2FProject4.png?alt=media&token=19c98032-19ff-4f24-9acf-4ffbbc828123',
    category:"Apps",
    description: `I developed a Stone-Paper-Scissors game that provides a fun and interactive experience. Featuring a clean and intuitive interface, players can easily engage in this classic game. The game includes both single-player mode, where users can compete against the computer, and a multiplayer mode for challenging friends. Optimized for all devices, it ensures smooth performance and enjoyment for players of all ages.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"JavaScript",
        icon: <DiJavascript/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"CSS",
        icon: <SiCss3/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:5,
    title: 'Mobile bank - App Design',
    image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
    category:"UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"Figma",
        icon: <CgFigma/>,
        iconColor:"orangered",
      },
    ]
  },
  {
    id:6,
    title: 'Quiz App Development',
    image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
    category:"Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
      demoLink: "https://google.com/",
    stack:[
      {
        name:"React Native",
        icon: <TbBrandReactNative/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
]

// Data for Testinomial


// export const clients = [
//   {
//     image:client1,
//     name:'Samuel Eze',
//     review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
//            veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
//            exercitation ullamco laboris`
//   },
//   {
//     image:client2,
//     name:'Richael Linda',
//     review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
//   },
//   {
//     image:client3,
//     name:'Gloria Chiwendu',
//     review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
//            veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
//            exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
//   },
//   {
//     image:client4,
//     name:'Precious Stone',
//     review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
//   },
//   {
//     image:client5,
//     name:'Ndubisi John',
//     review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
//   },

// ];

export const contactOptions = [
  {
    title:"Email",
    value:"roshanscripts@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    title:"Phone Number",
    value:"+91 8409587321",
    icon:<IoCallOutline/>,
  },
  {
    title:"Address",
    value:"Kolkata, West Bengal, India",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
    {
      name:"Linkedin",
      icon:<FaLinkedinIn />,
      link:"https://linkedin.com/in/roshankrmandal",
    },
    {
      name:"Github",
      icon:<FaGithub/>,
      link:"https://github.com/mandalroshan",
    },
    {
      name:"Twitter",
      icon:<FaXTwitter/>,
      link:"",
    },
    {
      name:"Instagram",
      icon:<FaInstagram/>,
      link:"https://www.instagram.com/roshan.mandal.14606",
    },
];

export const footer = [
  {
    title:"Explore",
    routes:[
      {name:"About Me",id:'about'},
      {name:"Skill",id:'skill'},
    ]
  },
  {
      title:"Trusted",
      routes:[
        {name:"Services",id:'services'},
        {name:"Projects",id:'projects'},
        {name:"Testimonials",id:'testimonials'},
      ]
    },
  {
      title:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
]

    