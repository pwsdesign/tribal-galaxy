// ─── Types ────────────────────────────────────────────────────────────────────

export type DisciplineType =
  | "Percussion & Rhythm"
  | "Sound Healing"
  | "Breathwork"
  | "Yoga"
  | "Voice & Song"
  | "Meditation";

export type Level = "Beginner" | "All Levels" | "Advanced";

export interface Teacher {
  id: string;
  slug: string;
  name: string;
  discipline: DisciplineType;
  photoGradient: string;
  shortBio: string;
  fullBio: string;
  lineage: string;
  approach: string;
  quote: string;
  courseIds: string[];
}

export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  teacherId: string;
  teacherName: string;
  category: string;
  thumbnailGradient: string;
  description: string;
  price: number;
  isFree: boolean;
  sessionCount: number;
  isLive: boolean;
  level: Level;
  duration: string;
  language: string;
  whatYouReceive: string[];
  curriculum: CourseModule[];
  relatedCourseIds: string[];
}

export interface EnrolledCourse {
  courseId: string;
  title: string;
  teacherName: string;
  progress: number;
  totalSessions: number;
  completedSessions: number;
}

export interface LiveSession {
  id: string;
  title: string;
  teacherName: string;
  date: string;
  time: string;
  courseId: string;
}

export interface DashboardData {
  studentName: string;
  enrolledCourses: EnrolledCourse[];
  upcomingSessions: LiveSession[];
  recommendedCourseIds: string[];
}

// ─── Teachers ─────────────────────────────────────────────────────────────────

export const teachers: Teacher[] = [
  {
    id: "t1",
    slug: "tamir-hassan",
    name: "Tamir Hassan",
    discipline: "Percussion & Rhythm",
    photoGradient:
      "linear-gradient(145deg, #1a0e00 0%, #3d2200 50%, #c9a84c18 100%)",
    shortBio:
      "West African and Cuban percussion master with 20 years of rhythmic transmission and ceremonial drumming.",
    fullBio:
      "Tamir Hassan has dedicated his life to the study and transmission of sacred rhythm traditions from West Africa and Cuba. His journey began at the age of seven in Dakar, where he trained under master djembefola Mamadou Kouyaté. Over two decades, he has woven together the traditions of Mandinka, Wolof, and Afro-Cuban drumming into a living, breathing practice that speaks to modern students seeking the heartbeat beneath all music.",
    lineage:
      "Trained under Mamadou Kouyaté (Dakar), Sibo Bangoura (Guinea), and Abbécé Diallo (New York). Holds certification from the Association for Cultural Exchange in West African Percussion.",
    approach:
      "Tamir teaches rhythm as a language of the body — before the hands learn the pattern, the feet must feel the pulse. His classes are immersive, communal, and rooted in oral tradition, where the teacher's presence is as important as any technique.",
    quote: "The drum is the first mirror. It shows you exactly where you are.",
    courseIds: ["c1"],
  },
  {
    id: "t2",
    slug: "leila-santos",
    name: "Leila Santos",
    discipline: "Sound Healing",
    photoGradient:
      "linear-gradient(145deg, #050a14 0%, #0a2240 50%, #2a8a7a18 100%)",
    shortBio:
      "Tibetan bowl practitioner and sound therapist trained across Nepal, Bali, and Peru.",
    fullBio:
      "Leila Santos first encountered sound healing during a pilgrimage to Nepal, where a Tibetan monk struck a bowl beside her head and she felt something ancient unlock. That moment became a calling. She spent three years studying with sound masters in Kathmandu, Ubud, and Cusco, learning not just the instruments but the intention behind their use. She holds certifications in Sound Therapy, Vibrational Medicine, and Gong Bath facilitation.",
    lineage:
      "Studied with Shyam Tamang (Kathmandu), Ketut Arya (Ubud Sound Institute), and Alejandra Rojas (Pachamama Sound School, Cusco).",
    approach:
      "Leila works with sound as a carrier wave for consciousness — using Tibetan bowls, gongs, koshi chimes, and voice to create acoustic environments where deep healing can occur naturally. Her sessions move from structure into surrender.",
    quote:
      "Sound doesn't heal you. It creates the conditions for you to heal yourself.",
    courseIds: ["c2"],
  },
  {
    id: "t3",
    slug: "ravi-krishnamurthy",
    name: "Ravi Krishnamurthy",
    discipline: "Breathwork",
    photoGradient:
      "linear-gradient(145deg, #0a1205 0%, #1a3010 50%, #3db89e18 100%)",
    shortBio:
      "Pranayama teacher and Holotropic Breathwork facilitator bridging ancient yogic science with modern somatic practice.",
    fullBio:
      "Ravi Krishnamurthy grew up in Mysore, India, where breath was never a technique — it was a daily practice woven into his family's Shaiva tradition. After studying computer science in Bangalore, a profound burnout crisis led him back to the breath. He trained extensively in Pranayama with B.K.S. Iyengar's lineage before discovering Holotropic Breathwork, which he now facilitates internationally.",
    lineage:
      "Pranayama training with Iyengar Yoga Institute (Pune). Holotropic Breathwork certification through Grof Transpersonal Training. Additional study in Wim Hof Method and Soma Breath.",
    approach:
      "Ravi's approach is rigorous and tender in equal measure. He teaches breath as the interface between the conscious and unconscious — a key that opens what cannot be opened by thinking alone.",
    quote:
      "Every exhale is a small death. Every inhale, a small resurrection.",
    courseIds: ["c3", "c6"],
  },
  {
    id: "t4",
    slug: "amara-osei",
    name: "Amara Osei",
    discipline: "Yoga",
    photoGradient:
      "linear-gradient(145deg, #14050a 0%, #380a20 50%, #8b203518 100%)",
    shortBio:
      "Ghanaian-born yoga teacher and ceremonial vocalist blending West African movement with classical yoga philosophy.",
    fullBio:
      "Amara Osei was born in Accra, Ghana, and raised in a household where dance, song, and prayer were inseparable. She came to yoga through the Ghanaian dance and movement tradition, finding unexpected resonance with the body-awareness practices of Iyengar and Forrest yoga. Over fifteen years of teaching she has developed what she calls 'rooted flight' — an integration of West African movement principles with classical yoga philosophy.",
    lineage:
      "200-hour YTT with Ana Forrest (Forrest Yoga). Advanced study with Rodney Yee. Voice work with Silvia Nakkach (Nada Yoga) and Bobby McFerrin's Circle Songs method.",
    approach:
      "For Amara, yoga is not a series of shapes. It is a conversation between the earth and the sky, held inside the body. Her classes are fierce, spacious, and full of unexpected music.",
    quote: "Your body is already praying. Your practice is learning how to listen.",
    courseIds: ["c4", "c5"],
  },
];

// ─── Courses ──────────────────────────────────────────────────────────────────

export const courses: Course[] = [
  {
    id: "c1",
    slug: "the-living-drum",
    title: "The Living Drum",
    teacherId: "t1",
    teacherName: "Tamir Hassan",
    category: "Percussion & Rhythm",
    thumbnailGradient:
      "linear-gradient(135deg, #1a0e00 0%, #3d2200 60%, #c9a84c12 100%)",
    description:
      "A deep immersion into West African and Afro-Cuban percussion traditions. Learn to read, feel, and transmit rhythm as a living language — not just a skill.",
    price: 120,
    isFree: false,
    sessionCount: 8,
    isLive: false,
    level: "All Levels",
    duration: "8 weeks",
    language: "English",
    whatYouReceive: [
      "Foundation in djembe technique and hand positioning",
      "Three complete West African rhythms with cultural and ceremonial context",
      "Two Afro-Cuban clave patterns and their relationship to space",
      "A practice framework for developing your internal pulse",
      "Access to a private community of co-practitioners",
      "Lifetime access to all session recordings",
    ],
    curriculum: [
      {
        title: "The Heartbeat",
        lessons: [
          "What rhythm is and isn't",
          "Hand positioning and posture",
          "The foundational bass stroke",
        ],
      },
      {
        title: "Kuku — The Fishermen's Song",
        lessons: [
          "History and ceremonial context",
          "Learning the support parts",
          "Adding the lead voice",
        ],
      },
      {
        title: "Dundunba — Dance of the Strong Men",
        lessons: [
          "The clave relationship in West African music",
          "Building the full ensemble pattern",
          "Speed and dynamics",
        ],
      },
      {
        title: "Afro-Cuban Clave",
        lessons: [
          "Son clave vs. rumba clave",
          "Clave and the body",
          "Improvisation within the grid",
        ],
      },
      {
        title: "Djolé — The Women's Rhythm",
        lessons: [
          "Ceremonial context and lineage",
          "The offbeat relationship",
          "Call and response structure",
        ],
      },
      {
        title: "Putting It All Together",
        lessons: [
          "Rhythm as conversation",
          "Playing with others",
          "Creating your practice going forward",
        ],
      },
    ],
    relatedCourseIds: ["c2", "c5"],
  },
  {
    id: "c2",
    slug: "singing-bowl-mastery",
    title: "Singing Bowl Mastery",
    teacherId: "t2",
    teacherName: "Leila Santos",
    category: "Sound Healing",
    thumbnailGradient:
      "linear-gradient(135deg, #000a0e 0%, #00283d 60%, #2a8a7a12 100%)",
    description:
      "From selection to ceremony — a complete guide to working with Tibetan singing bowls for personal healing and group facilitation.",
    price: 95,
    isFree: false,
    sessionCount: 6,
    isLive: false,
    level: "Beginner",
    duration: "6 weeks",
    language: "English",
    whatYouReceive: [
      "How to select, cleanse, and tune your singing bowl",
      "Three playing techniques: rim, strike, and wah-wah",
      "A 20-minute personal healing protocol using bowls and breath",
      "Guidelines for facilitating group sound baths",
      "An introduction to chakra toning and bowl placement on the body",
      "A downloadable guide to bowl selection and care",
    ],
    curriculum: [
      {
        title: "The Sacred Object",
        lessons: [
          "History of Tibetan and Nepalese bowls",
          "How to choose your bowl",
          "Cleansing and intention-setting",
        ],
      },
      {
        title: "Playing Technique",
        lessons: [
          "The rim technique in detail",
          "Strike patterns and mallet varieties",
          "The wah-wah: creating the pulse",
        ],
      },
      {
        title: "Working on Yourself",
        lessons: [
          "Creating your personal sound bath",
          "Using breath with the bowl",
          "Morning and evening protocols",
        ],
      },
      {
        title: "Working with Others",
        lessons: [
          "Setting up a healing space",
          "Reading the room energetically",
          "Closing a session safely",
        ],
      },
      {
        title: "Chakra Toning",
        lessons: [
          "The seven-bowl system",
          "Placement on the body",
          "Voice and bowl together",
        ],
      },
      {
        title: "Group Facilitation",
        lessons: [
          "Designing a sound bath",
          "Working with multiple instruments",
          "Integration practices",
        ],
      },
    ],
    relatedCourseIds: ["c3", "c6"],
  },
  {
    id: "c3",
    slug: "breath-as-teacher",
    title: "Breath as Teacher",
    teacherId: "t3",
    teacherName: "Ravi Krishnamurthy",
    category: "Breathwork",
    thumbnailGradient:
      "linear-gradient(135deg, #020e06 0%, #083020 60%, #3db89e12 100%)",
    description:
      "A free foundational course in conscious breathing — introducing pranayama, box breathing, and the physiology of the breath as a gateway to nervous system regulation.",
    price: 0,
    isFree: true,
    sessionCount: 4,
    isLive: false,
    level: "Beginner",
    duration: "4 weeks",
    language: "English",
    whatYouReceive: [
      "Understanding the physiology of breath and the vagus nerve",
      "Four foundational pranayama techniques with guided practice",
      "Box breathing protocol for anxiety and stress regulation",
      "A morning breathing ritual you can sustain for life",
      "Introduction to Holotropic Breathwork principles",
    ],
    curriculum: [
      {
        title: "You Are Already Breathing Wrong",
        lessons: [
          "Mouth vs. nose breathing",
          "The diaphragm and how we've forgotten it",
          "First exercises: finding your baseline",
        ],
      },
      {
        title: "The Ancient Techniques",
        lessons: [
          "Nadi Shodhana: alternate nostril breathing",
          "Bhramari: the humming bee",
          "Ujjayi: the ocean breath",
        ],
      },
      {
        title: "The Nervous System",
        lessons: [
          "Sympathetic vs. parasympathetic",
          "Box breathing explained",
          "The 4-7-8 technique for sleep",
        ],
      },
      {
        title: "Making It a Practice",
        lessons: [
          "Designing your morning ritual",
          "Breath and movement integration",
          "Where to go from here",
        ],
      },
    ],
    relatedCourseIds: ["c6", "c4"],
  },
  {
    id: "c4",
    slug: "moon-and-body-yoga",
    title: "Moon & Body: Yoga Foundations",
    teacherId: "t4",
    teacherName: "Amara Osei",
    category: "Yoga",
    thumbnailGradient:
      "linear-gradient(135deg, #0e0005 0%, #280010 60%, #8b203512 100%)",
    description:
      "A lunar-cycle-aligned yoga program rooted in Forrest and African movement traditions. Build a sustainable home practice that moves with your body's natural rhythms.",
    price: 85,
    isFree: false,
    sessionCount: 12,
    isLive: true,
    level: "Beginner",
    duration: "4 weeks · live",
    language: "English",
    whatYouReceive: [
      "A complete yoga foundation aligned with the lunar calendar",
      "Understanding of how the moon affects the physical body",
      "12 live sessions with Amara — each unique, never repeated",
      "A personal movement journal practice",
      "West African warm-up sequences for the spine and hips",
      "Access to session recordings for 90 days after each class",
    ],
    curriculum: [
      {
        title: "New Moon — Planting",
        lessons: [
          "Setting intention through movement",
          "Foundational standing postures",
          "Grounding sequences",
        ],
      },
      {
        title: "Waxing Moon — Growing",
        lessons: [
          "Building strength: warrior sequences",
          "Core and breath integration",
          "The spine as antenna",
        ],
      },
      {
        title: "Full Moon — Releasing",
        lessons: [
          "Deep hip openers and release",
          "Lunar salutation",
          "Ceremony and movement",
        ],
      },
      {
        title: "Waning Moon — Integrating",
        lessons: [
          "Restorative practice",
          "Yin postures for long bones",
          "Voice and final integration",
        ],
      },
    ],
    relatedCourseIds: ["c5", "c3"],
  },
  {
    id: "c5",
    slug: "voice-as-medicine",
    title: "Voice as Medicine",
    teacherId: "t4",
    teacherName: "Amara Osei",
    category: "Voice & Song",
    thumbnailGradient:
      "linear-gradient(135deg, #080005 0%, #1e0015 60%, #8b203518 100%)",
    description:
      "Discover your voice as a healing instrument — exploring toning, chant, overtone singing, and ceremonial song across African and Indian traditions.",
    price: 110,
    isFree: false,
    sessionCount: 7,
    isLive: false,
    level: "All Levels",
    duration: "7 weeks",
    language: "English",
    whatYouReceive: [
      "Techniques for releasing vocal constriction and shame",
      "Toning: using sustained vowel sounds for healing",
      "Introduction to overtone singing and harmonic voice",
      "Ghanaian call-and-response traditions",
      "South Indian vocal warm-up sequences",
      "A personal song-writing ritual for ceremony",
    ],
    curriculum: [
      {
        title: "Finding Your Voice",
        lessons: [
          "Where does your voice live?",
          "The relationship between voice and identity",
          "First exercises: the breath-voice connection",
        ],
      },
      {
        title: "Toning for Healing",
        lessons: [
          "The science of resonance in the body",
          "Vowel toning protocol",
          "Chakra toning with voice",
        ],
      },
      {
        title: "Overtone Singing",
        lessons: [
          "What overtones are and how they arise",
          "The throat singing spectrum",
          "Beginning exercises",
        ],
      },
      {
        title: "African Traditions",
        lessons: [
          "Call and response as spiritual practice",
          "Ghanaian work songs",
          "Group coherence through voice",
        ],
      },
      {
        title: "Indian Traditions",
        lessons: [
          "The swara system and sa-re-ga",
          "Nada Yoga: union through sound",
          "Raga as medicine",
        ],
      },
      {
        title: "Writing Your Ceremony Song",
        lessons: [
          "What a ceremony song is",
          "Listening for the song that wants to come through",
          "Sharing in sacred space",
        ],
      },
    ],
    relatedCourseIds: ["c1", "c2"],
  },
  {
    id: "c6",
    slug: "stillness-in-motion",
    title: "Stillness in Motion",
    teacherId: "t3",
    teacherName: "Ravi Krishnamurthy",
    category: "Meditation",
    thumbnailGradient:
      "linear-gradient(135deg, #020a08 0%, #062018 60%, #2a8a7a18 100%)",
    description:
      "A free introductory meditation course for people who think they cannot meditate — bridging Vipassana tradition with modern neuroscience.",
    price: 0,
    isFree: true,
    sessionCount: 5,
    isLive: false,
    level: "Beginner",
    duration: "5 weeks",
    language: "English",
    whatYouReceive: [
      "Why meditation isn't about emptying the mind — and what it actually is",
      "Five distinct meditation styles to find what works for you",
      "A daily 10-minute practice you can realistically maintain",
      "Understanding of the default mode network and mind-wandering",
      "Guided audio sessions for each technique",
    ],
    curriculum: [
      {
        title: "The Myth of the Empty Mind",
        lessons: [
          "What meditation actually is",
          "How the brain responds to practice",
          "Your first 5-minute sit",
        ],
      },
      {
        title: "Breath Awareness",
        lessons: [
          "Anchor and return: the core movement",
          "Counting breaths",
          "Working with distraction",
        ],
      },
      {
        title: "Body Scan",
        lessons: [
          "Bottom-up vs. top-down attention",
          "Full body scan guided practice",
          "Using sensation as anchor",
        ],
      },
      {
        title: "Open Awareness",
        lessons: [
          "From concentration to spaciousness",
          "The sky and the clouds",
          "Choiceless awareness practice",
        ],
      },
      {
        title: "Making It Stick",
        lessons: [
          "Habit formation for meditation",
          "Dealing with the difficult sits",
          "Building a home sanctuary",
        ],
      },
    ],
    relatedCourseIds: ["c3", "c4"],
  },
];

// ─── Dashboard ────────────────────────────────────────────────────────────────

export const dashboardData: DashboardData = {
  studentName: "Soleil",
  enrolledCourses: [
    {
      courseId: "c2",
      title: "Singing Bowl Mastery",
      teacherName: "Leila Santos",
      progress: 67,
      totalSessions: 6,
      completedSessions: 4,
    },
    {
      courseId: "c3",
      title: "Breath as Teacher",
      teacherName: "Ravi Krishnamurthy",
      progress: 25,
      totalSessions: 4,
      completedSessions: 1,
    },
  ],
  upcomingSessions: [
    {
      id: "ls1",
      title: "Moon & Body: Week 3 — Full Moon Release",
      teacherName: "Amara Osei",
      date: "March 18, 2026",
      time: "7:00 PM EST",
      courseId: "c4",
    },
  ],
  recommendedCourseIds: ["c6", "c5", "c1"],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getTeacherBySlug(slug: string): Teacher | undefined {
  return teachers.find((t) => t.slug === slug);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByIds(ids: string[]): Course[] {
  return courses.filter((c) => ids.includes(c.id));
}

export function getTeacherById(id: string): Teacher | undefined {
  return teachers.find((t) => t.id === id);
}

export const categories: string[] = [
  "Percussion & Rhythm",
  "Sound Healing",
  "Breathwork",
  "Meditation",
  "Yoga",
  "Voice & Song",
  "Spiritual Ceremonies",
  "Mental Wellness",
];
