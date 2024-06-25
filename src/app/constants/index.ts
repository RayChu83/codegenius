import { AiFillThunderbolt } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaClock } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { GrOptimize } from "react-icons/gr";
import { IoBug, IoCloseSharp, IoDocumentsOutline } from "react-icons/io5";
import { PiRectangleDashedBold } from "react-icons/pi";
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
  { icon: GoDash },
  { icon: PiRectangleDashedBold },
  { icon: IoCloseSharp, className: "hover:text-red-500" },
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
    className: "drop-shadow-lightBlue z-1",
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
    className: "drop-shadow-lightBlue z-1",
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
    icon: "",
  },
  {
    heading: "Start Coding",
    description:
      "Begin coding as usual, and our AI will provide real-time suggestions and feedback.",
    icon: "",
  },
  {
    heading: "Optimize and Debug",
    description:
      "Utilize the AI's optimization and debugging tools to enhance your code and fix issues quickly.",
    icon: "",
  },
];
