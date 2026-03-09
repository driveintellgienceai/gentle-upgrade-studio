/**
 * Tooth Architect Dental Care — Site Configuration
 * Single source of truth for all contact info, branding, and navigation.
 * Import this everywhere. Never hardcode these values in components.
 */

export const practice = {
  name: 'Tooth Architect Dental Care',
  doctor: 'Dr. Shiva Talebi, D.M.D.',
  doctorShort: 'Dr. Talebi',
  doctorFirst: 'Shiva',
  title: 'General Dentist',
  tagline: "Atlanta's Dental Architect",
  description:
    'Holistic and conservative dental care in Sandy Springs, GA. Dr. Shiva Talebi combines architectural precision with minimalist treatment planning.',
  url: 'https://www.tootharchitectdental.com',
} as const;

export const contact = {
  phoneNew: '(404) 666-8066',
  phoneNewRaw: '+14046668066',
  phoneExisting: '(404) 255-7047',
  phoneExistingRaw: '+14042557047',
  address: {
    street: '6667 Vernon Woods Dr NE',
    suite: 'Ste B 30',
    city: 'Sandy Springs',
    state: 'GA',
    zip: '30328',
    full: '6667 Vernon Woods Dr NE, Ste B 30, Sandy Springs, GA 30328',
  },
  googleMapsUrl:
    'https://maps.google.com/?q=6667+Vernon+Woods+Dr+NE+Ste+B+30+Sandy+Springs+GA+30328',
  googleRating: 4.9,
  googleReviewCount: 195,
} as const;

export const hours = {
  monday:    { open: '8:00 AM', close: '4:00 PM' },
  tuesday:   { open: '8:00 AM', close: '4:00 PM' },
  wednesday: { open: '8:00 AM', close: '4:00 PM' },
  thursday:  { open: '8:00 AM', close: '4:00 PM' },
  friday:    { open: '9:00 AM', close: '2:00 PM', note: 'By appointment only' },
  saturday:  null,
  sunday:    null,
  display:   'Mon–Thu 8am–4pm, Fri 9am–2pm',
} as const;

export const social = {
  instagram: 'https://www.instagram.com/tootharchitectdental/',
} as const;

export const brand = {
  // EXACT VALUES from Wonderist Brand Style Guide PDF (TADC BSG.pdf)
  colors: {
    // Primary colors (use freely)
    olive:      '#5F5B35',   // RGB(95,91,53)    CMYK(0,4,44,63)   PMS 450 C
    avocado:    '#7F7947',   // RGB(127,121,71)  CMYK(0,5,44,50)   PMS 5825 C
    // Secondary colors (use sparingly)
    eucalyptus: '#B1C6B7',   // RGB(177,198,183) CMYK(11,0,8,22)   PMS 5585 C
    linen:      '#F1DDBC',   // RGB(241,221,188) CMYK(0,8,22,5)    PMS 7506 C
    // Accent (CTAs and key details only)
    rust:       '#D47D45',   // RGB(212,125,69)  CMYK(0,41,67,17)  PMS 1575 C
  },
  voice: {
    words: ['Thoughtful', 'Artful', 'Genuine'] as const,
    tone: 'Calm confidence reflecting creativity and professionalism. Warm and conversational — never clinical or overly formal.',
  },
  fonts: {
    heading:         'Mostra Nuova',
    body:            'Museo Sans',
    headingFallback: 'Cormorant Garamond',
    bodyFallback:    'Nunito Sans',
  },
} as const;

export const insurance = [
  'Cigna PPO',
  'Guardian PPO',
  'Humana PPO',
  'Delta Dental PPO',
] as const;

export const affiliations = [
  'American Dental Association (ADA)',
  'Georgia Dental Association',
  'American Institute of Architects (AIA)',
  'Academy of General Dentistry (AGD)',
  'American Academy of Clear Aligners',
  'American Academy of Facial Esthetics (AAFE)',
  'Jewish Family & Career Services (JFCS)',
  'Ben Massell Dental Clinic (Volunteer)',
  'AmeriCorps',
] as const;

export const staff = [
  { name: 'Patty',    role: 'Front Desk' },
  { name: 'Michele',  role: 'Dental Assistant' },
  { name: 'Susan',    role: 'Hygienist' },
  { name: 'Mercedes', role: 'Dental Assistant' },
] as const;

export const navigation = {
  main: [
    { label: 'Home', href: '/' },
    {
      label: 'About Us',
      children: [
        { label: 'Meet the Doctor', href: '/meet-the-doctor/' },
        { label: 'Meet Our Staff',  href: '/meet-our-staff/' },
        { label: 'Office Tour',     href: '/office-tour/' },
      ],
    },
    {
      label: 'Services',
      children: [
        { label: 'General Dentistry',      href: '/general-dentistry/',                    category: 'General' },
        { label: 'Exam & Cleaning',        href: '/exam-cleaning/',                        category: 'General' },
        { label: 'Digital X-Rays',         href: '/digital-x-rays/',                      category: 'General' },
        { label: 'Oral Cancer Screening',  href: '/oral-cancer-screening/',                category: 'General' },
        { label: 'Teeth Whitening',        href: '/teeth-whitening/',                     category: 'Cosmetic' },
        { label: 'Veneers',                href: '/veneers/',                             category: 'Cosmetic' },
        { label: 'Bonding',                href: '/bonding/',                             category: 'Cosmetic' },
        { label: 'Enameloplasty',          href: '/enameloplasty/',                       category: 'Cosmetic' },
        { label: 'Clear Aligners',         href: '/clear-aligners-reveal-suresmile/',     category: 'Cosmetic' },
        { label: 'Crowns',                 href: '/crowns/',                              category: 'Restorative' },
        { label: 'Dental Bridges',         href: '/dental-bridges/',                      category: 'Restorative' },
        { label: 'Dental Implant Crowns',  href: '/dental-implant-crowns/',               category: 'Restorative' },
        { label: 'Tooth Colored Fillings', href: '/tooth-colored-fillings/',              category: 'Restorative' },
        { label: 'Gum Disease Treatment',  href: '/gum-disease-periodontal-treatment/',   category: 'Preventative' },
        { label: 'Nightguards & Sportsguards', href: '/nightguards-sportsguards/',        category: 'Preventative' },
        { label: 'TMJ Treatment',          href: '/tmj/',                                 category: 'Pain Management' },
        { label: 'Botox',                  href: '/botox/',                               category: 'Pain Management' },
        { label: 'Holistic Dentistry',     href: '/holistic-dentistry/',                  category: 'Holistic' },
        { label: 'Second Opinions',        href: '/second-options/',                      category: 'Holistic' },
      ],
    },
    {
      label: 'Patient Resources',
      children: [
        { label: 'Patient Resources', href: '/patient-resources/' },
        { label: 'Blog',              href: '/blog/' },
        { label: 'Promotions',        href: '/promotions/' },
      ],
    },
    { label: 'Gallery',      href: '/gallery/' },
    { label: 'Testimonials', href: '/testimonials/' },
    { label: 'Contact Us',   href: '/contact-us/' },
  ],
} as const;

export const allPages = [
  { name: 'Home',                   path: '/',                                   priority: 'P0' },
  { name: 'Meet the Doctor',        path: '/meet-the-doctor/',                   priority: 'P0' },
  { name: 'Meet Our Staff',         path: '/meet-our-staff/',                    priority: 'P1' },
  { name: 'Office Tour',            path: '/office-tour/',                       priority: 'P1' },
  { name: 'General Dentistry',      path: '/general-dentistry/',                 priority: 'P1' },
  { name: 'Crowns',                 path: '/crowns/',                            priority: 'P1' },
  { name: 'Teeth Whitening',        path: '/teeth-whitening/',                   priority: 'P1' },
  { name: 'Veneers',                path: '/veneers/',                           priority: 'P1' },
  { name: 'Clear Aligners',         path: '/clear-aligners-reveal-suresmile/',   priority: 'P1' },
  { name: 'Enameloplasty',          path: '/enameloplasty/',                     priority: 'P1' },
  { name: 'Bonding',                path: '/bonding/',                           priority: 'P1' },
  { name: 'Dental Implant Crowns',  path: '/dental-implant-crowns/',             priority: 'P1' },
  { name: 'Tooth Colored Fillings', path: '/tooth-colored-fillings/',            priority: 'P1' },
  { name: 'Dental Bridges',         path: '/dental-bridges/',                    priority: 'P1' },
  { name: 'Digital X-Rays',         path: '/digital-x-rays/',                   priority: 'P1' },
  { name: 'Oral Cancer Screening',  path: '/oral-cancer-screening/',             priority: 'P1' },
  { name: 'Exam & Cleaning',        path: '/exam-cleaning/',                     priority: 'P1' },
  { name: 'Gum Disease Treatment',  path: '/gum-disease-periodontal-treatment/', priority: 'P1' },
  { name: 'TMJ',                    path: '/tmj/',                               priority: 'P1' },
  { name: 'Nightguards & Sportsguards', path: '/nightguards-sportsguards/',      priority: 'P1' },
  { name: 'Botox',                  path: '/botox/',                             priority: 'P1' },
  { name: 'Holistic Dentistry',     path: '/holistic-dentistry/',                priority: 'P1' },
  { name: 'Second Options',         path: '/second-options/',                    priority: 'P1' },
  { name: 'Patient Resources',      path: '/patient-resources/',                 priority: 'P2' },
  { name: 'Blog',                   path: '/blog/',                              priority: 'P0' },
  { name: 'Promotions',             path: '/promotions/',                        priority: 'P2' },
  { name: 'Gallery',                path: '/gallery/',                           priority: 'P1' },
  { name: 'Testimonials',           path: '/testimonials/',                      priority: 'P1' },
  { name: 'Contact Us',             path: '/contact-us/',                        priority: 'P0' },
  { name: 'Request Appointment',    path: '/request-an-appointment/',            priority: 'P0' },
] as const;
