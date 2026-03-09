export const siteConfig = {
  name: "Tooth Architect Dental Care",
  doctor: "Dr. Shiva Talebi, D.M.D.",
  doctorShort: "Dr. Talebi",
  tagline: "Conservative dentistry with a preventative approach and minimalist treatment planning",
  phone: {
    newPatients: "(404) 666-8066",
    newPatientsTel: "+14046668066",
    existingPatients: "(404) 255-7047",
    existingPatientsTel: "+14042557047",
  },
  address: {
    street: "6667 Vernon Woods Dr NE",
    suite: "Suite B-30",
    city: "Sandy Springs",
    state: "GA",
    zip: "30328",
    full: "6667 Vernon Woods Dr NE, Ste B 30, Sandy Springs, GA 30328",
    googleMapsUrl: "https://maps.google.com/?q=6667+Vernon+Woods+Dr+NE+Ste+B+30+Sandy+Springs+GA+30328",
  },
  hours: {
    weekdays: "Mon – Thu: 8:00 AM – 4:00 PM",
    friday: "Fri: 9:00 AM – 2:00 PM (by appointment only)",
    schedule: [
      { days: "Monday – Thursday", hours: "8:00 AM – 4:00 PM" },
      { days: "Friday", hours: "9:00 AM – 2:00 PM" },
      { days: "Saturday – Sunday", hours: "Closed" },
    ],
  },
  google: {
    rating: 4.9,
    reviewCount: 195,
    profileUrl: "https://www.google.com/maps/place/Tooth+Architect+Dental+Care/",
  },
  social: {
    instagram: "https://www.instagram.com/tootharchitectdental/",
  },
  images: {
    logo: "/logos/tadc-primary-full-color-rgb.svg",
    logoWhite: "/logos/tadc-primary-white-rgb.svg",
    logoIcon: "/logos/tadc-icon-full-color-rgb.svg",
    // Hero: dental chair first (most visually impressive), then Dr. Talebi, then the beautiful lobby
    heroSlide1: "/images/photoshoot/_DSC_4382-HDR-2-Edit.jpg",   // 1. Treatment room — pretty patient room with dental chair
    heroSlide2: "/images/team/Shiva_Color_DSC_2860.jpeg",        // 2. Dr. Talebi — personal connection
    heroSlide3: "/images/office/Console-and-light-lobby.jpeg",   // 3. Lobby — mid-century reception
    // Portrait in "Meet Dr. Talebi" section: different shot from heroSlide2, no on-page duplicate
    drTalebiPortrait: "/images/team/DSC_3155.jpeg",
  },
  insurance: ["Cigna PPO", "Guardian PPO", "Humana PPO", "Delta Dental PPO"],
  affiliations: [
    "American Dental Association (ADA)",
    "Georgia Dental Association",
    "American Institute of Architects (AIA)",
    "Academy of General Dentistry (AGD)",
    "American Academy of Clear Aligners",
    "American Academy of Facial Esthetics (AAFE)",
    "Jewish Family & Career Services (JFCS)",
    "Ben Massell Dental Clinic (Volunteer)",
    "AmeriCorps",
  ],
} as const;
