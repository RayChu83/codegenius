import { AiFillThunderbolt } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaClock, FaCode } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";
import { IoBug, IoDocumentsOutline } from "react-icons/io5";
import {
  VscDebugRerun,
  VscExtensions,
  VscSearch,
  VscSettingsGear,
  VscSourceControl,
} from "react-icons/vsc";

export const navigationElements = [
  { href: "#hero", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

export const codeEditorNavigationElements = [
  { label: "File" },
  { label: "Edit" },
  { label: "Selection" },
  { label: "View" },
  { label: "Go", hiddenOnBigScreens: true },
  { label: "Debug", hiddenOnBigScreens: true },
  { label: "Terminal", hiddenOnBigScreens: true },
  { label: "Help", hiddenOnBigScreens: true },
];

export const codeEditorRightNavigationElements = [
  { className: "bg-alter hover:bg-alter/80" },
  { className: "bg-minimize hover:bg-minimize/80" },
  { className: "bg-close hover:bg-close/80" },
];

export const codeEditorSidebarElements = [
  { icon: IoDocumentsOutline },
  { icon: VscSearch },
  { icon: VscSourceControl },
  { icon: VscDebugRerun },
  { icon: VscExtensions },
];

export const codeEditorSidebarBottomElements = [
  { icon: CgProfile },
  { icon: VscSettingsGear },
];

export const heroHeadline = [
  { content: "Your" },
  { content: "Personalized" },
  { content: "AI" },
  { content: "Coding", additionalClassNames: "font-black" },
  { content: "Companion", additionalClassNames: "font-black" },
];

export const aiResponse =
  'The provided code is HTML, also known as HyperText Markup Language, which is commonly utilized for constructing web applications. Currently, there are no errors detected. However it is missing the following meta tag for responsive web design: <meta name="viewport" content="width=device-width, initial-scale=1"></meta>. Currently, nothing is being displayed on the screen. Add content to the body to display something. ';

export const features = [
  {
    heading: "Real-Time Code Suggestions",
    bulletPoints: [
      "Recognizes coding patterns and corrects syntax errors",
      "Offers code snippets to speed up development",
      "Provides context-aware recommendations",
      "Enhances coding efficiency ",
    ],
    icon: FaClock,
  },
  {
    heading: "Automated Debugging",
    bulletPoints: [
      "Scans for bugs and errors",
      "Highlights errors and problematic sections",
      "Suggests quick and effective fixes",
      "Ensures code robustness and reliability",
    ],
    icon: IoBug,
    className: "z-10",
  },
  {
    heading: "Code Optimization",
    bulletPoints: [
      "Provides efficiency improvement suggestions",
      "Reduces overall resource consumption significantly",
      "Identifies and eliminates redundant code",
      "Ensures adherence to coding standards",
    ],
    icon: GrOptimize,
    className: "z-10",
  },
  {
    heading: "Seamless Integration",
    bulletPoints: [
      "Compatible with popular code editors",
      "Works with version control systems",
      "Integrates smoothly into existing workflows",
      "Ensures a cohesive coding environment",
    ],
    icon: AiFillThunderbolt,
  },
];

export const benefits = [
  {
    heading: "Enhanced Productivity",
    bulletPoints: [
      "Write code faster with fewer errors",
      "Focus on building amazing projects",
      "Automate repetitive tasks for efficiency",
    ],
    image: "/ai.png",
    additionalClassNames:
      "!col-span-6 row-span-2 drop-shadow-lightBlue flex flex-col justify-center lg:pl-10",
  },
  {
    heading: "Reduced Frustration",
    bulletPoints: [
      "Maintain focus on creative projects",
      "Quickly identify and resolve errors",
      "Spend less time debugging and troubleshooting",
    ],
    additionalClassNames: "z-10",
  },
  {
    heading: "Continuous Improvement",
    bulletPoints: [
      "Learn from AI's real-time suggestions",
      "Improve coding skills consistently",
      "Stay updated with the latest coding practices",
    ],
    additionalClassNames: "z-10",
  },
];

export const roadmap = [
  {
    heading: "Install the Extension",
    description:
      "Download and install our AI assistant extension for your preferred code editor.",
    icon: IoMdDownload,
  },
  {
    heading: "Start Coding",
    description:
      "Begin coding as usual, and our AI will provide real-time suggestions and feedback.",
    icon: FaCode,
  },
  {
    heading: "Optimize and Debug",
    description:
      "Utilize the AI's optimization and debugging tools to enhance your code and fix issues quickly.",
    icon: GrOptimize,
  },
];

export const pricing = [
  {
    name: "Free",
    price: 0,
    bulletPoints: ["Basic code suggestions", "Community support"],
  },
  {
    name: "Professional",
    price: 19,
    bulletPoints: [
      "Customizable code linting and formatting",
      "Advanced code suggestions and intellisense",
      "Automated debugging",
      "Code optimization",
      "Personalized support",
    ],
    additionalClassNames: "drop-shadow-lightBlue !z-10",
  },
  {
    name: "Enterprise",
    price: null,
    bulletPoints: [
      "Includes all professional features",
      "Custom integrations",
      "24/7 dedicated support",
      "Team collaboration tools",
    ],
    additionalClassNames: "md:col-span-2 lg:col-span-1",
  },
];

export const footerLinks = [
  {
    section: "Explore",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Benefits", href: "#benefits" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    section: "Support",
    links: [
      { label: "Contact", href: null },
      { label: "FAQs", href: null },
      { label: "Returns", href: null },
      { label: "Terms", href: null },
      { label: "Privacy", href: null },
    ],
  },
  {
    section: "Company",
    links: [
      { label: "About us", href: null },
      { label: "Careers", href: null },
      { label: "Blogs", href: null },
      { label: "Contact us", href: null },
    ],
  },
];
