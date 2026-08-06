import { StoryItem, TestimonialItem, ProcessStep, ServiceCategory } from '../types';

export const HERO_IMAGES = {
  coupleHero: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85', // Romantic black & white / warm couple
  dressHero: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85', // Wedding gown hanging
  flowerOverlay1: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=300&q=80', // White anemone/jasmine flower
  flowerOverlay2: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=300&q=80',
  flowerFooterDark: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85', // Dark ranunculus / white peonies background
};

export const STORIES: StoryItem[] = [
  {
    id: 'story-1',
    title: 'Amour Rustique au Château de Fleurie',
    coupleName: 'Camille & Antoine',
    date: '24 MAI 2024',
    location: 'Château de Fleurie, Provence',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    category: 'mariage',
    description: 'Une journée empreinte de sérénité et de rires au cœur des vignes provençales. Un mariage champêtre chic orchestré dans les moindres détails.',
  },
  {
    id: 'story-2',
    title: 'Échappée Bohème en Pleine Nature',
    coupleName: 'Éléonore & Julien',
    date: '4 JUILLET 2024',
    location: 'Domaine de la Forêt, Annecy',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
    category: 'elopement',
    description: 'Une cérémonie intime au bord du lac, illuminée par les lumières dorées de fin de journée et entourée de fleurs séchées.',
  },
  {
    id: 'story-3',
    title: 'Élégance Intemporelle à Paris',
    coupleName: 'Sophie & Marc',
    date: '18 AOÛT 2024',
    location: 'Hôtel Particulier, Paris VIII',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85',
    category: 'mariage',
    description: 'Un mariage raffiné dans un écrin haussmannien. Des dorures, de la haute gastronomie et une émotion palpable du début à la fin.',
  },
  {
    id: 'story-4',
    title: 'Promenade d’Engagement au Coucher du Soleil',
    coupleName: 'Clara & Thomas',
    date: '12 SEPTEMBRE 2024',
    location: 'Falaises d’Étretat, Normandie',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85',
    category: 'engagement',
    description: 'Une séance photo d’engagement empreinte de poésie, bercée par la brise marine et la lumière douce des côtes normandes.',
  },
];

export const ABOUT_DATA = {
  title: 'À PROPOS DE MOI',
  heading: 'Je suis pour le naturel, les émotions vraies et la sérénité absolue.',
  textParagraph1:
    'Personnellement, je privilégie la spontanéité et la sincérité. Les seules exceptions sont les couples qui aiment poser avec aisance ! Pour tous les autres, ma mission est de vous faire oublier l\'objectif.',
  textParagraph2:
    'C\'est pourquoi mon rôle combiné de Wedding Planner et Photographe consiste à créer un reportage vivant et harmonieux de votre grand jour. Je saurai toujours vous guider avec bienveillance pour sublimer votre lumière naturelle.',
  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
};

export const LOGO_BRANDS = [
  { name: 'Diva W', subtitle: 'WEDDING & LUXURY' },
  { name: 'Wedding JR Events', subtitle: 'ORGANISATION' },
  { name: 'Marry Me', subtitle: 'MAGAZINE MARIAGE' },
  { name: 'Mariage Élégant', subtitle: 'PRESSE PRESTIGE' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Premier contact',
    subtitle: 'Racontez-moi votre histoire',
    description: 'Envoyez-moi un message, parlez-moi de votre vision, de vos envies et de l\'atmosphère dont vous rêvez pour votre grand jour.',
  },
  {
    number: '02',
    title: 'Rendez-vous conseil',
    subtitle: 'Échangeons de vive voix',
    description: 'Une rencontre chaleureuse pour affiner votre rétroplanning, le style visuel, la sélection des prestataires et la scénographie.',
  },
  {
    number: '03',
    title: 'Le grand jour',
    subtitle: 'Vivez l\'instant pleinement',
    description: 'Le jour J est là : profitez de chaque seconde en toute sérénité. Je coordonne tout avec discrétion et capture la magie brute.',
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'famille',
    title: 'Photographie de Famille',
    subtitle: 'Séances intimes & moments précieux',
    description: 'Des souvenirs chaleureux capturés à la maison ou en extérieur, pour immortaliser la douceur des liens familiaux.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=85',
    features: ['Séance de 1h30 à 2h', 'Galerie privée en ligne HD', 'Aide à la scénographie'],
  },
  {
    id: 'mariage',
    title: 'Mariages & Réceptions',
    subtitle: 'Organisation complète & Reportage photo',
    description: 'De la recherche du lieu idéal à la coordination du jour J, une prise en charge sur-mesure pour un mariage inoubliable.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=85',
    features: ['Rétroplanning sur-mesure', 'Gestion du budget', 'Présence le jour J', 'Reportage photo complet'],
  },
  {
    id: 'portrait',
    title: 'Portraits & Engagements',
    subtitle: 'Sublimer votre singularité',
    description: 'Une séance douce et détendue pour célébrer votre fiançailles ou révéler votre authenticité face à l\'objectif.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=85',
    features: ['Conseils de tenues', 'Lieux d\'exception', 'Retouches haut de gamme'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Laura M.',
    role: 'Mariée à Paris',
    quote: 'Je ne me suis jamais sentie aussi moi-même devant un objectif. Maria a su faire émerger une émotion sincère que nous chérirons toute notre vie.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=85',
    highlight: true,
  },
  {
    id: 'test-2',
    author: 'Maria & Mark O.',
    role: 'Mariage au Château',
    quote: 'Une approche professionnelle, une ponctualité irréprochable et un soin immense apporté à chaque détail. Maria est une véritable magicienne de l\'organisation !',
    highlight: false,
  },
  {
    id: 'test-3',
    author: 'Maggie & Timothée D.',
    role: 'Elopement en Provence',
    quote: 'Grâce à Maria, notre mariage intime a été un havre de paix. Nous avons pu savourer chaque seconde sans le moindre stress.',
    highlight: false,
  },
  {
    id: 'test-4',
    author: 'Karyna & Slava M.',
    role: 'Mariage Champêtre',
    quote: 'Ses photos sont de véritables œuvres d\'art éditoriales. Nos proches en parlent encore des mois après !',
    highlight: false,
  },
  {
    id: 'test-5',
    author: 'Alexia T.',
    role: 'Séance Portrait',
    quote: 'Une douceur et une écoute rares. Elle sait exactement comment vous mettre à l\'aise dès les premières minutes.',
    highlight: false,
  },
];

export const CREATIVE_COLLAGE_DATA = {
  heading: 'Notre façon de créer ensemble',
  subheading: 'Un processus créatif fluide, artistique et personnalisé',
  mainImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85', // Preparation Bride
  secondaryImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=85', // Running couple
  polaroidImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=85', // Smiling polaroid
  point1: 'Je crée un moodboard et un concept personnalisé qui reflètent votre essence. Chaque détail est étudié pour préserver le naturel.',
  point2: 'Nous commençons par un échange chaleureux autour de vos souhaits, de votre histoire et de ce qui vous tient à cœur.',
  point3: 'Je vous accompagne discrètement pendant tout l\'événement pour capturer ce qui est authentique.',
};
