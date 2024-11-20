import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    youtube,
    jsp,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    buisness,
    employee1,
    jobseeker,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "2",
      title: "How to use",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    // {
    //   id: "4",
    //   title: "New account",
    //   url: "#signup",
    //   onlyMobile: true,
    // },
    // {
    //   id: "5",
    //   title: "Sign in",
    //   url: "#login",
    //   onlyMobile: true,
    // },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [jsp];
  
  export const brainwaveServices = [
    "Learn: Users gain essential skills through tailored courses, upskilling advice, and mentorship. AI agents suggest content based on market trends, helping users stay competitive.",
    "Do: Users apply skills via automation and project tools, enhancing job applications, client work, and projects. The AI handles admin tasks, letting users focus on impactful work.",
    "Lead: Entrepreneurs get tools for scaling, customer tracking, and financial analysis, while job seekers and freelancers gain career insights for confident leadership.",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Skill Gap Analysis",
      text: "The AI agents analyze users’ profiles, identify skill gaps relative to their desired roles or industry standards, and prioritize learning areas that will have the most immediate impact on their career.",
      imageUrl: jsp,
      colorful: true,
    },
    {
      id: "1",
      title: "Market-Driven Recommendations",
      text: " By continuously tracking in-demand skills in real-time across job listings and industry reports, JobSyncPros' AI ensures users receive up-to-date course recommendations that align with emerging trends.",
      imageUrl: jobseeker,
    },
    {
      id: "2",
      title: "Adaptive Learning Paths",
      text: "Recommendations adjust dynamically as users complete courses or gain new experience. If a skill set shifts or users progress more quickly in certain areas, the AI adapts, suggesting new topics that match their evolving expertise.",
      imageUrl: employee1,
    },
    {
      id: "3",
      title: "Collaborative Learning Suggestions",
      text: " Through its Swarm framework, JobSyncPros also recommends popular courses validated by the community, giving users confidence in high-quality, relevant options.",
      imageUrl: buisness,
    },
  ];
  
  export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "AI-Powered Automation Agents for Freelancers and Job Seekers",
      text: "AI recommends jobs based on skills and experience, tailoring resumes and cover letters for higher application success. Provides insights on in-demand skills, job trends, and salaries to guide career choices.For freelancers, AI curates portfolios using project data.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: jsp,
    },
    {
      id: "1",
      title: "Entrepreneurial and Small Business Tools",
      text: "Automates client communication, follow-ups, and reminders.Generates invoices and tracks payments, with integration for quick transactions.Supports automated lead scoring and tracking through HubSpot API, boosting client acquisition and retention.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: jsp,
      light: true,
    },
    {
      id: "2",
      title: "Entrepreneurial and Small Business Tools",
      text: "Analyzes market trends and competition, offering customer profiles for idea validation. Automates lead generation and customer outreach to enhance sales. AI templates and guidance support effective business planning and pitching.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: jsp,
    },
    {
      id: "3",
      title: "Personalized Learning Paths and Upskilling Suggestions",
      text: "AI identifies skill gaps and suggests relevant courses.Suggests content based on user progress and industry needs for personalized growth.AI mentors offer feedback on interviews, presentations, and career-building efforts.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: jsp,
      light: true,
    },
    {
      id: "4",
      title: "Comprehensive AI-Powered Analytics and Reporting",
      text: "Monitors learning and application outcomes, helping users identify focus areas.Provides small businesses with financial insights and performance tracking.Alerts businesses to customer satisfaction levels for continuous improvement.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: jsp,
    },
    {
      id: "5",
      title: "Unified Application Process",
      text: "One-Click Apply: Offers a unified application process to apply across multiple job boards from one central platform.Pre-Filled Forms: Automatically fills out application forms using saved information, streamlining the application process level.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: jsp,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: youtube,
      url: "https://www.youtube.com/@JobSyncPros",
    },
    // {
    //   id: "1",
    //   title: "Twitter",
    //   iconUrl: twitter,
    //   url: "#",
    // },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/jobsyncpros?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    // {
    //   id: "3",
    //   title: "Telegram",
    //   iconUrl: telegram,
    //   url: "#",
    // },
    // {
    //   id: "4",
    //   title: "Facebook",
    //   iconUrl: facebook,
    //   url: "#",
    // },
  ];