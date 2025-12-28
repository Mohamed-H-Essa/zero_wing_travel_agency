import { 
  Users, Award, HeadphonesIcon, Shield, MapPin, CreditCard, 
  Facebook, Instagram, Twitter, Mail, Phone 
} from 'lucide-react';

export const navLinks = [
  { id: 'destinations', href: '#destinations', translationKey: 'nav.destinations' },
  { id: 'tours', href: '#tours', translationKey: 'nav.tours' },
  { id: 'about', href: '#about', translationKey: 'nav.about' },
  { id: 'faqs', href: '#faqs', translationKey: 'nav.faqs' },
  { id: 'contact', href: '#contact', translationKey: 'nav.contact' },
];

export const socialProofStats = [
  { id: 'reviews', value: '4.9/5', translationKey: 'social_proof.reviews' },
  { id: 'travelers', value: '15,000+', translationKey: 'social_proof.happy_travelers' },
  { id: 'experience', value: '12 Years', translationKey: 'social_proof.experience', valueKey: 'social_proof.years' },
  { id: 'security', value: '100%', translationKey: 'social_proof.secure_booking' },
];

export const tours = [
  {
    id: 'pyramids',
    price: 89,
    rating: 4.9,
    reviews: 342,
    image: 'https://images.pexels.com/photos/3647171/pexels-photo-3647171.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '8 hours',
    location: 'Cairo',
    content: {
      en: {
        title: "Pyramids of Giza & Egyptian Museum",
        description: "Explore the last remaining wonder of the ancient world with an expert Egyptologist guide."
      },
      ar: {
        title: "أهرامات الجيزة وأبو الهول",
        description: "استكشف الأهرامات العظيمة وأبو الهول ومعبد الوادي مع عالم مصريات خبير."
      }
    }
  },
  {
    id: 'nile_cruise',
    price: 65,
    rating: 4.8,
    reviews: 289,
    image: 'https://images.pexels.com/photos/11743327/pexels-photo-11743327.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3 hours',
    location: 'Cairo',
    content: {
      en: {
        title: "Nile River Cruise & Dinner",
        description: "Enjoy a magical evening cruise with traditional entertainment and authentic Egyptian cuisine."
      },
      ar: {
        title: "رحلة نيلية فاخرة",
        description: "أبحر من الأقصر إلى أسوان على متن سفينة 5 نجوم، وقم بزيارة معابد الكرنك وإدفو وكوم أمبو."
      }
    }
  },
  {
    id: 'luxor',
    price: 145,
    rating: 5.0,
    reviews: 428,
    image: 'https://images.pexels.com/photos/13246970/pexels-photo-13246970.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '10 hours',
    location: 'Luxor',
    content: {
      en: {
        title: "Luxor Temple & Valley of the Kings",
        description: "Discover the magnificent temples and royal tombs in the ancient city of Thebes."
      },
      ar: {
        title: "معبد الأقصر ووادي الملوك",
        description: "اكتشف المعابد الرائعة والمقابر الملكية في مدينة طيبة القديمة."
      }
    }
  },
  {
    id: 'red_sea',
    price: 75,
    rating: 4.9,
    reviews: 256,
    image: 'https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '6 hours',
    location: 'Hurghada',
    content: {
      en: {
        title: "Red Sea Snorkeling Adventure",
        description: "Dive into crystal-clear waters and explore vibrant coral reefs and marine life."
      },
      ar: {
        title: "مغامرة الغوص في البحر الأحمر",
        description: "اكتشف الشعاب المرجانية النابضة بالحياة والحياة البحرية في مياه الغردقة الصافية."
      }
    }
  },
  {
    id: 'alexandria',
    price: 95,
    rating: 4.7,
    reviews: 198,
    image: 'https://images.pexels.com/photos/10727962/pexels-photo-10727962.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '9 hours',
    location: 'Alexandria',
    content: {
      en: {
        title: "Alexandria Historical Tour",
        description: "Visit the Bibliotheca Alexandrina, Citadel of Qaitbay, and Roman amphitheater."
      },
      ar: {
        title: "جولة تاريخية في الإسكندرية",
        description: "قم بزيارة مكتبة الإسكندرية وقلعة قايتباي والمسرح الروماني."
      }
    }
  },
  {
    id: 'abu_simbel',
    price: 185,
    rating: 5.0,
    reviews: 312,
    image: 'https://images.pexels.com/photos/10498654/pexels-photo-10498654.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '12 hours',
    location: 'Aswan',
    content: {
      en: {
        title: "Abu Simbel Temples Day Trip",
        description: "Marvel at Ramses II's colossal temples carved into the mountainside."
      },
      ar: {
        title: "رحلة يومية إلى معابد أبو سمبل",
        description: "تعجب من معابد رمسيس الثاني الضخمة المنحوتة في الجبل."
      }
    }
  },
];

export const destinations = [
  {
    id: 'cairo',
    tours: 28,
    image: 'https://images.pexels.com/photos/3873677/pexels-photo-3873677.jpeg',
    content: {
      en: {
        name: "Cairo",
        description: "Ancient pyramids & vibrant culture"
      },
      ar: {
        name: "القاهرة",
        description: "العاصمة الصاخبة، موطن الأهرامات والمتحف المصري."
      }
    }
  },
  {
    id: 'luxor',
    tours: 18,
    image: 'https://images.pexels.com/photos/21668633/pexels-photo-21668633.jpeg',
    content: {
      en: {
        name: "Luxor",
        description: "Valley of the Kings & temples"
      },
      ar: {
        name: "الأقصر",
        description: "أكبر متحف مفتوح في العالم، يضم وادي الملوك."
      }
    }
  },
  {
    id: 'aswan',
    tours: 15,
    image: 'https://images.pexels.com/photos/15131485/pexels-photo-15131485.jpeg',
    content: {
      en: {
        name: "Aswan",
        description: "Nubian culture & Nile beauty"
      },
      ar: {
        name: "أسوان",
        description: "مدينة هادئة على النيل، تشتهر بالسد العالي ومعبد فيلة."
      }
    }
  },
  {
    id: 'hurghada',
    tours: 22,
    image: 'https://images.pexels.com/photos/13034805/pexels-photo-13034805.jpeg',
    content: {
      en: {
        name: "Hurghada",
        description: "Red Sea diving & beaches"
      },
      ar: {
        name: "الغردقة",
        description: "وجهة غوص رائدة ذات شواطئ خلابة وحياة ليلية نابضة بالحياة."
      }
    }
  },
  {
    id: 'alexandria',
    tours: 12,
    image: 'https://images.pexels.com/photos/10727962/pexels-photo-10727962.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: {
      en: {
        name: "Alexandria",
        description: "Mediterranean charm & history"
      },
      ar: {
        name: "الإسكندرية",
        description: "لؤلؤة البحر المتوسط، غنية بالتاريخ والثقافة."
      }
    }
  },
  {
    id: 'sharm',
    tours: 20,
    image: 'https://images.pexels.com/photos/914055/pexels-photo-914055.jpeg',
    content: {
      en: {
        name: "Sharm El Sheikh",
        description: "Resort paradise & coral reefs"
      },
      ar: {
        name: "شرم الشيخ",
        description: "مدينة منتجعات عالمية تشتهر بشواطئها الرملية وشعابها المرجانية."
      }
    }
  },
];

export const features = [
  { 
    id: 'small_group', 
    icon: Users,
    content: {
      en: {
        title: "Small Group Tours",
        description: "Maximum 12 travelers per tour for a personalized, intimate experience with your expert guide."
      },
      ar: {
        title: "جولات مجموعات صغيرة",
        description: "بحد أقصى 12 مسافراً في الجولة لتجربة شخصية وحميمة مع مرشدك الخبير." // Corrected translation based on context if not in file, or inferred standard
      }
    }
  },
  { 
    id: 'expert_guides', 
    icon: Award,
    content: {
      en: {
        title: "Expert Local Guides",
        description: "Licensed Egyptologists and certified guides with deep knowledge and passion for their heritage."
      },
      ar: {
        title: "مرشدون محليون خبراء",
        description: "مرشدونا هم علماء مصريات مرخصون شغوفون بمشاركة تاريخهم."
      }
    }
  },
  { 
    id: 'support', 
    icon: HeadphonesIcon,
    content: {
      en: {
        title: "24/7 Support",
        description: "Round-the-clock customer support throughout your journey for complete peace of mind."
      },
      ar: {
        title: "دعم 24/7",
        description: "نحن هنا لمساعدتك على مدار الساعة، من لحظة الحجز حتى عودتك إلى المنزل."
      }
    }
  },
  { 
    id: 'price_guarantee', 
    icon: Shield,
    content: {
      en: {
        title: "Best Price Guarantee",
        description: "We match or beat any competitor price with our transparent, no hidden fees policy."
      },
      ar: {
        title: "أفضل قيمة", // Mapping 'value' from ar json to 'price_guarantee' logic
        description: "نقدم أسعاراً تنافسية دون المساومة على الجودة أو الخدمة."
      }
    }
  },
  { 
    id: 'customizable', 
    icon: MapPin,
    content: {
      en: {
        title: "Customizable Itineraries",
        description: "Tailor your adventure to your interests, pace, and budget with our flexible planning."
      },
      ar: {
        title: "جولات قابلة للتخصيص",
        description: "صمم برنامج رحلتك ليناسب اهتماماتك وميزانيتك وجدولك الزمني."
      }
    }
  },
  { 
    id: 'secure_payments', 
    icon: CreditCard,
    content: {
      en: {
        title: "Secure Payments",
        description: "Protected transactions with flexible payment options and free cancellation up to 48 hours."
      },
      ar: {
        title: "حجز سهل", // Mapping 'booking' from ar json as closest match or 'safety'
        description: "احجز جولتك عبر الإنترنت ببضع نقرات فقط باستخدام نظام الدفع الآمن لدينا."
      }
    }
  },
];

export const faqs = [
  { 
    id: 'visa',
    content: {
      en: {
        question: "Do I need a visa to visit Egypt?",
        answer: "Most visitors can obtain a visa on arrival at Egyptian airports for $25 USD. Alternatively, you can apply for an e-visa online before your trip. We provide detailed visa information and assistance with your booking."
      },
      ar: {
        question: "هل أحتاج إلى تأشيرة لزيارة مصر؟",
        answer: "يحتاج معظم الزوار إلى تأشيرة. يمكنك الحصول على تأشيرة عند الوصول إلى المطار أو التقدم بطلب للحصول على تأشيرة إلكترونية عبر الإنترنت."
      }
    }
  },
  { 
    id: 'best_time',
    content: {
      en: {
        question: "What is the best time to visit Egypt?",
        answer: "The ideal time is October to April when temperatures are mild (15-25°C). Summer months (May-September) can be very hot, especially in Upper Egypt. We operate year-round and can recommend the best times for specific destinations."
      },
      ar: {
        question: "ما هو أفضل وقت لزيارة مصر؟", // Added missing AR translation
        answer: "الوقت المثالي هو من أكتوبر إلى أبريل حيث تكون درجات الحرارة معتدلة. أشهر الصيف يمكن أن تكون حارة جداً."
      }
    }
  },
  { 
    id: 'families',
    content: {
      en: {
        question: "Are your tours suitable for families with children?",
        answer: "Absolutely! Many of our tours are family-friendly. We can customize itineraries to suit children of all ages, with engaging activities and comfortable pacing. Our guides are experienced in making history come alive for young travelers."
      },
      ar: {
        question: "هل جولاتكم مناسبة للعائلات؟", // Added missing AR translation
        answer: "بالتأكيد! العديد من جولاتنا مناسبة للعائلات. يمكننا تخصيص مسارات الرحلات لتناسب الأطفال من جميع الأعمار."
      }
    }
  },
  { 
    id: 'included',
    content: {
      en: {
        question: "What is included in the tour price?",
        answer: "Our tour prices include expert guides, entrance fees, transportation, and specified meals. International flights, personal expenses, tips, and optional activities are not included. Full details are provided on each tour page."
      },
      ar: {
        question: "ماذا يشمل سعر الجولة؟", // Added missing AR translation
        answer: "تشمل أسعارنا المرشدين الخبراء ورسوم الدخول والمواصلات والوجبات المحددة."
      }
    }
  },
  { 
    id: 'safety',
    content: {
      en: {
        question: "Is Egypt safe for tourists?",
        answer: "Yes, Egypt is safe for tourists. We work with trusted local partners, follow security protocols, and monitor destinations closely. Our guides are trained in safety procedures and tourist areas have strong security presence."
      },
      ar: {
        question: "هل السفر إلى مصر آمن؟",
        answer: "نعم، يزور ملايين السياح مصر بأمان كل عام. المناطق السياحية مؤمنة جيدًا."
      }
    }
  },
  { 
    id: 'cancellation',
    content: {
      en: {
        question: "What's your cancellation policy?",
        answer: "Free cancellation up to 48 hours before your tour for a full refund. Cancellations within 48 hours are subject to a 50% charge. We recommend travel insurance for added protection. Full terms are available during booking."
      },
      ar: {
        question: "ما هي سياسة الإلغاء؟", // Added missing AR translation
        answer: "إلغاء مجاني حتى 48 ساعة قبل جولتك لاسترداد كامل المبلغ."
      }
    }
  },
];

export const contactInfo = {
  phone: {
    display: '+20 102 895 9236',
    link: 'tel:+201028959236'
  },
  email: {
    display: 'contact@zerowingegypt.com',
    link: 'mailto:contact@zerowingegypt.com'
  },
  whatsapp: {
    link: 'https://wa.me/201028959236'
  },
  social: {
    facebook: '#',
    instagram: 'https://www.instagram.com/zerowing_egy?utm_source=qr',
    twitter: '#'
  }
};

export const socialLinks = [
  { id: 'facebook', icon: Facebook, href: contactInfo.social.facebook },
  { id: 'instagram', icon: Instagram, href: contactInfo.social.instagram },
  { id: 'twitter', icon: Twitter, href: contactInfo.social.twitter },
];

export const footerLinks = {
  quickLinks: [
    { id: 'destinations', href: '#destinations', translationKey: 'footer.links.destinations' },
    { id: 'tours', href: '#tours', translationKey: 'footer.links.tours' },
    { id: 'about', href: '#about', translationKey: 'footer.links.about' },
    { id: 'faqs', href: '#faqs', translationKey: 'footer.links.faqs' },
    { id: 'contact', href: '#contact', translationKey: 'footer.links.contact' },
  ],
  policies: [
    { id: 'privacy', href: '/privacy', translationKey: 'footer.links.privacy' },
    { id: 'terms', href: '/terms', translationKey: 'footer.links.terms' },
    { id: 'cancellation', href: '#', translationKey: 'footer.links.cancellation' },
    { id: 'payment', href: '#', translationKey: 'footer.links.payment' },
    { id: 'insurance', href: '#', translationKey: 'footer.links.insurance' },
  ],
  contact: [
    { id: 'phone', icon: Phone, text: contactInfo.phone.display, href: contactInfo.phone.link },
    { id: 'email', icon: Mail, text: contactInfo.email.display, href: contactInfo.email.link },
  ]
};
