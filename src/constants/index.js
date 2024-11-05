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
    "Skill-Based Suggestions",
    "Career Path Guidance",
    "Resume Generation",
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
      title: "What is Job Sync Pros",
      text: "JobSyncPros stands out by integrating job aggregation, personalized job search, advanced resume features, and community-driven networking capabilities into one platform. It goes beyond traditional job boards and professional networking sites by offering a holistic career management experience, fostering community engagement, and leveraging advanced technology to connect job seekers with opportunities more effectively.",
      imageUrl: jsp,
      colorful: true,
    },
    {
      id: "1",
      title: "For Job Seekers",
      text: "Individuals seeking full-time, part-time, freelance, or gig work, and those looking for comprehensive career management tools.",
      imageUrl: jobseeker,
    },
    {
      id: "2",
      title: "For Employees",
      text: "Companies and recruiters looking for a streamlined platform to post job listings, track applicants, and engage with potential candidates.",
      imageUrl: employee1,
    },
    {
      id: "3",
      title: "Business Model",
      text: "JobSyncPros operates on a freemium model with both free and premium features. Job seekers can access basic job search and application features for free, while premium subscriptions offer advanced features such as personalized career coaching, detailed analytics, and enhanced portfolio options. Employers can post job listings and access premium recruitment tools, including targeted job ad placements and advanced applicant tracking features.",
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
      title: "Advanced Job Aggregation",
      text: "Aggregates job listings from niche job sites (Jobs2caree, CareerJET), and industry-specific platforms. Includes freelance and gig work opportunities alongside traditional full-time roles.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: jsp,
    },
    {
      id: "1",
      title: "Career Analytics and Insights",
      text: "Provides data-driven insights on job search performance, including profile views and application success rates. Offers tools to benchmark salaries and understand market trends.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: jsp,
      light: true,
    },
    {
      id: "2",
      title: "Soft Skills and Personality Assessments",
      text: "Offers assessments to evaluate and showcase soft skills like communication and leadership. Suggests jobs based on personality assessments and career preferences.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: jsp,
    },
    {
      id: "3",
      title: "Real-Time Application Tracking and Notifications",
      text: "Allows job seekers to track the status of their applications across different platforms. Sends automated reminders for follow-ups and application updates.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: jsp,
      light: true,
    },
    {
      id: "4",
      title: "Networking and Community Building",
      text: "Allows job seekers to request referrals from their network directly on the platform.Hosts virtual events to connect job seekers with industry professionals and recruiters.Creates communities and job-related groups",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: jsp,
    },
    {
      id: "5",
      title: "Unified Application Process",
      text: "Offers a unified application process to apply across multiple job boards from one central platform. Automatically fills out application forms using saved information, streamlining the application process.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: jsp,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];