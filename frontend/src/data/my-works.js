import {
  FruitVeg,
  Dashboard,
  SpeedConnection,
  DonationApp,
} from "../images/images"; // Ensure the path is correct

export const sections = {
  project1: {
    image: Dashboard,
    title: "Admin Dashboard for Attendance Tracking",
    description:
      "Designed a dashboard for administrators to track attendance with detailed analytics on punctuality, lateness, and absences. Handled both front-end and back-end development, utilizing React for the front-end, Node.js with Express for the back-end, MUI Core for responsive UI, and Nivo for advanced data visualizations like line and pie charts.",
    techniques: ["React", "Express.js", "Node.js", "MySQL", "Nivo", "XAMPP"],
  },
  project2: {
    image: DonationApp,
    title: "Donations App",
    description:
      "Constructed a responsive website using HTML, CSS, JavaScript, and the Foundation framework for optimal user experience. Integrated intuitive donation forms and progress trackers to enhance user engagement and facilitate contributions. Created visually appealing interfaces and interactive elements to promote water donation awareness and support.",
    techniques: ["HTML", "CSS", "JavaScript", "Foundation"],
  },
  project3: {
    image: SpeedConnection,
    title: "Speed Connection Service",
    description:
      "Developed an online service to evaluate and improve internet connection quality. Designed a user-friendly interface for measuring connection speed and providing personalized solutions, created during my internship at Tunisie Telecom TT.",
    techniques: ["React", "Front-end", "Bootstrap"],
  },
  project4: {
    image: FruitVeg,
    title: "FruitVegSite",
    description:
      "Built a dynamic and interactive website for fresh fruit and vegetable sales. The website features a user-friendly interface with advanced filtering options, real-time inventory updates, and a seamless checkout experience.",
    techniques: ["React", "Bootstrap", "Front-end", "Foundation"],
  },
};
