import { ShieldCheck, BadgeDollarSign, ZapIcon } from "lucide-react";

export const featuresData = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure & Trusted",
    desc: "We prioritize security and trust, ensuring all accounts are verified and safe for use, giving you peace of mind with every purchase.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Quick security guide",
    desc: "We provide a comprehensive security guide to help you set up and protect your account, ensuring a safe gaming experience.",
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "High Account Quality",
    desc: "Our accounts are of the highest quality, featuring stats and exclusive items to enhance your gaming experience and give you a competitive edge.",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "100k",
    desc: "Best for early-stage startups.",
    credits: "Regular",
    features: [
      "Limited characters",
      "Limited weapon",
      "Early story progress",
      "Low level accounts",
      "Basic items and resources",
    ],
  },
  {
    id: "pro",
    name: "Mid game",
    price: "700k",
    desc: "Medium-tier accounts for growing players.",
    credits: "Medium",
    features: [
      "Some limited characters",
      "Weapons with good stats",
      "Mid story progress",
      "Best stats and items",
      "Easy to complete events",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "End Game",
    price: "2.800k",
    desc: "High-tier accounts for dedicated players.",
    credits: "Advanced",
    features: [
      "All limited characters",
      "All weapons with best stats",
      "Complete story progress",
      "Highest stats and items",
      "Can complete all events, and content",
    ],
  },
];

export const faqData = [
  {
    question: "Are the accounts at Rayzen Store safe?",
    answer:
      "Absolutely. All accounts pass a rigorous verification process. We ensure every account is clear of any history of cheating or illegal activities before they are listed.",
  },
  {
    question: "How do I receive my account after payment?",
    answer:
      "Delivery is nearly instant! Once your payment is confirmed, the account credentials (email/password/recovery info) will be sent to your provided contact method (Email or WhatsApp).",
  },
  {
    question: "Can I change the account details?",
    answer:
      "Yes! You will receive full access to the account, allowing you to change the password, link your own email/phone number, and enable Two-Factor Authentication (2FA) for your security.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various secure payment methods including E-Wallets (DANA, OVO, Gopay, Shoopepay QRIS), and Bank Transfers.",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Home", url: "#" },
      { name: "Services", url: "#" },
      { name: "Work", url: "#" },
      { name: "Contact", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
    ],
  },
];
