// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    // gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    gradientColors: '#4484ce, #4484ce',
    firstName: 'Tianxing',
    middleName: '',
    lastName: 'Liu',
    message: 'Full-Stack Software Engineer',
    icons: [
        {
            image: 'fa-envelope',
            url: 'mailto:tianxing-liu@outlook.com',
            class: 'fas',
        },
        {
            image: 'fa-github',
            url: 'https://github.com/tianxingl',
            class: 'fab',
        },
        {
            image: 'fa-linkedin',
            url: 'https://www.linkedin.com/in/tianxingliu',
            class: 'fab',
        },
    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
    show: true,
    heading: 'About Me',
    message: `
  I have worked at mid-sized tech companies with a mindset for personal growth and a bias toward actions. 
  I have built systems from scratch as well as migrated and maintained long-running products. 
  I have worn many hats as a software engineer, and my work included frontend, backend, NLP, and ML platform. 
  Some of my industry highlights include-- creating multi-factor authentication feature, building automated 
  report system with SMS notifications, designing conversational AI in web chat, conducting customer research, 
  creating and reviewing technical RFCs, maintaining cloud infrastructures, migrating databases, maintaining CI/CD pipelines, 
  organizing performance and scale testing, developing ML platform tools, training ML models, and conducting engineer interviews.
  `,
    resume: require('../editable-stuff/Tianxing_Liu_Resume.pdf'),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: false,
    heading: 'Recent Projects',
    gitHubUsername: 'hashirshoaeb', //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
};

// Leadership SECTION
const leadership = {
    show: false,
    heading: 'Leadership',
    message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
    images: [
        {
            // img: require("../editable-stuff/hashirshoaeb.png"),
            label: 'First slide label',
            paragraph:
                'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
            // img: require("../editable-stuff/hashirshoaeb.png"),
            label: 'Second slide label',
            paragraph:
                'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
    ],
    imageSize: {
        width: '615',
        height: '450',
    },
};

// SKILLS SECTION
const skills = {
    show: false,
    heading: 'Skills',
    hardSkills: [
        { name: 'Python', value: 90 },
        { name: 'SQL', value: 75 },
        { name: 'Data Structures', value: 85 },
        { name: 'C/C++', value: 65 },
        { name: 'JavaScript', value: 90 },
        { name: 'React', value: 65 },
        { name: 'HTML/CSS', value: 55 },
        { name: 'C#', value: 80 },
    ],
    softSkills: [
        { name: 'Goal-Oriented', value: 80 },
        { name: 'Collaboration', value: 90 },
        { name: 'Positivity', value: 75 },
        { name: 'Adaptability', value: 85 },
        { name: 'Problem Solving', value: 75 },
        { name: 'Empathy', value: 90 },
        { name: 'Organization', value: 70 },
        { name: 'Creativity', value: 90 },
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: false,
    heading: 'Get In Touch',
    message:
        "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: 'hashirshoaeb@gmail.com',
};

const experiences = {
    show: true,
    heading: 'Experiences',
    data: [
        {
            location: 'Boston, MA',
            role: 'Software Engineer II',
            img: require('../assets/img/klaviyo.png'),
            imgHeight: 50,
            date: 'November 2021 - Present',
            highlights: [
                'AWS',
                'Python',
                'Django',
                'Kubernetes',
                'MySQL',
                'NLP',
                'RabbitMQ',
                'React',
                'SQLAlchemy',
            ],
            link: 'https://klaviyo.com',
        },
        {
            location: 'San Diego, CA',
            role: 'Software Engineer I',
            img: require('../assets/img/lytx.png'),
            imgHeight: 50,
            date: 'January 2021 - October 2021',
            highlights: [
                'AWS',
                'Angular',
                'MS SQL Server',
                'MongoDB',
                '.NET',
                'RabbitMQ',
                'Redis',
            ],
            link: 'https://lytx.com/en-us/',
        },
        {
            location: 'San Diego, CA',
            role: 'Software Engineer Intern',
            img: require('../assets/img/lytx.png'),
            imgHeight: 50,
            date: 'June 2020 - January 2021',
            highlights: [
                'AWS',
                'Angular',
                'MS SQL Server',
                'MongoDB',
                '.NET',
                'RabbitMQ',
                'Redis',
            ],
            link: 'https://lytx.com/en-us/',
        },
        {
            location: 'San Diego, CA',
            role: 'Computer Science and Engineering Tutor',
            img: require('../assets/img/ucsd_cse.png'),
            imgHeight: 50,
            date: 'September 2019 - March 2020',
            highlights: ['React', 'C', 'C++', 'Java'],
            link: 'https://cse.ucsd.edu',
        },
        {
            location: 'San Diego, CA',
            role: 'Research Assistant',
            img: require('../assets/img/ucsd_cse.png'),
            imgHeight: 50,
            date: 'June 2019 - September 2020',
            highlights: ['Mixed Reality', 'Unity'],
            link: 'https://cse.ucsd.edu',
        },
        {
            location: 'Beijing, China',
            role: 'Data Engineer Intern',
            img: require('../assets/img/koolearn.png'),
            imgHeight: 50,
            date: 'August 2018 - September 2018',
            highlights: ['Linux', 'MySQL', 'Python', 'Java'],
            link: 'https://koolearn.com'
        },
    ],
};

const education = {
    show: true,
    heading: 'Education',
    data: {
        name: 'University of California, San Diego',
        description: 'Bachelor of Science, Computer Science',
        subDescription: 'Cum Laude',
        img: require('../assets/img/ucsd_seal.png'),
        imgWidth: 200,
        imgHeight: 200,
    },
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
    navBar,
    mainBody,
    about,
    repos,
    skills,
    leadership,
    getInTouch,
    experiences,
    education,
};
