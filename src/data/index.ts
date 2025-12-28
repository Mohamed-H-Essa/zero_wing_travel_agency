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
    id: 'what_is_zero_wing',
    content: {
      en: {
        question: "What is Zero Wing?",
        answer: "Zero Wing is a helping-hand service designed to support travelers and connect them with authentic local experiences across Egypt. We focus on people, culture, and real connections — not just traditional tourist routes."
      },
      ar: {
        question: "ما هي زيرو وينج؟",
        answer: "زيرو وينج هي خدمة مساعدة مصممة لدعم المسافرين وربطهم بتجارب محلية أصيلة في جميع أنحاء مصر. نحن نركز على الناس والثقافة والروابط الحقيقية - وليس فقط الطرق السياحية التقليدية."
      }
    }
  },
  { 
    id: 'is_agency',
    content: {
      en: {
        question: "Is Zero Wing a travel agency?",
        answer: "No. Zero Wing is not a traditional travel agency. We act as a support and connection platform, helping travelers find trusted local assistance, services, and experiences based on their needs."
      },
      ar: {
        question: "هل زيرو وينج وكالة سفر؟",
        answer: "لا. زيرو وينج ليست وكالة سفر تقليدية. نحن نعمل كمنصة دعم وتوصيل، نساعد المسافرين في العثور على مساعدة وخدمات وتجارب محلية موثوقة بناءً على احتياجاتهم."
      }
    }
  },
  { 
    id: 'charges',
    content: {
      en: {
        question: "Do you charge for your services?",
        answer: "Some assistance and guidance may be offered free of charge, while other services may involve fees depending on the request and third-party providers. Any costs will always be communicated clearly before confirmation."
      },
      ar: {
        question: "هل تتقاضون رسومًا مقابل خدماتكم؟",
        answer: "قد يتم تقديم بعض المساعدة والتوجيه مجانًا، بينما قد تنطوي خدمات أخرى على رسوم حسب الطلب ومقدمي الخدمات من جهات خارجية. سيتم دائمًا توضيح أي تكاليف بوضوح قبل التأكيد."
      }
    }
  },
  { 
    id: 'contact',
    content: {
      en: {
        question: "How can I contact Zero Wing?",
        answer: "You can reach us via email, social media, or messaging platforms such as WhatsApp. All contact details are available on our website and social pages."
      },
      ar: {
        question: "كيف يمكنني التواصل مع زيرو وينج؟",
        answer: "يمكنك التواصل معنا عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي أو منصات المراسلة مثل واتساب. جميع تفاصيل الاتصال متاحة على موقعنا وصفحاتنا الاجتماعية."
      }
    }
  },
  { 
    id: 'partners',
    content: {
      en: {
        question: "Who does Zero Wing work with?",
        answer: "We work with a network of local individuals and trusted service providers, including drivers, hosts, guides, and small businesses. Our goal is to connect travelers with reliable, local support."
      },
      ar: {
        question: "مع من تعمل زيرو وينج؟",
        answer: "نحن نعمل مع شبكة من الأفراد المحليين ومقدمي الخدمات الموثوق بهم، بما في ذلك السائقين والمضيفين والمرشدين والشركات الصغيرة. هدفنا هو ربط المسافرين بدعم محلي موثوق."
      }
    }
  },
  { 
    id: 'availability',
    content: {
      en: {
        question: "Is Zero Wing available across all of Egypt?",
        answer: "We aim to provide assistance across different regions of Egypt. Availability may vary depending on location and timing, but we always try to help or guide you to the right solution."
      },
      ar: {
        question: "هل زيرو وينج متاحة في جميع أنحاء مصر؟",
        answer: "نحن نهدف إلى تقديم المساعدة في مختلف مناطق مصر. قد يختلف التوافر حسب الموقع والتوقيت، لكننا نحاول دائمًا مساعدتك أو توجيهك إلى الحل الصحيح."
      }
    }
  },
  { 
    id: 'privacy',
    content: {
      en: {
        question: "Is my personal information safe with Zero Wing?",
        answer: "Yes. We respect your privacy and only collect the information necessary to communicate with you and assist with your requests. We do not sell or misuse personal data."
      },
      ar: {
        question: "هل معلوماتي الشخصية آمنة مع زيرو وينج؟",
        answer: "نعم. نحن نحترم خصوصيتك ونجمع فقط المعلومات اللازمة للتواصل معك والمساعدة في طلباتك. نحن لا نبيع أو نسيء استخدام البيانات الشخصية."
      }
    }
  },
  { 
    id: 'urgent',
    content: {
      en: {
        question: "Can Zero Wing help in urgent situations?",
        answer: "We do our best to respond quickly and offer guidance in urgent situations. However, availability depends on circumstances, location, and local conditions."
      },
      ar: {
        question: "هل يمكن لزيرو وينج المساعدة في الحالات العاجلة؟",
        answer: "نحن نبذل قصارى جهدنا للاستجابة بسرعة وتقديم التوجيه في الحالات العاجلة. ومع ذلك، يعتمد التوافر على الظروف والموقع والأحوال المحلية."
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
  ],
  policies: [
    { id: 'privacy', href: '/privacy', translationKey: 'footer.links.privacy' },
    { id: 'terms', href: '/terms', translationKey: 'footer.links.terms' },
  ],
  contact: [
    { id: 'phone', icon: Phone, text: contactInfo.phone.display, href: contactInfo.phone.link },
    { id: 'email', icon: Mail, text: contactInfo.email.display, href: contactInfo.email.link },
  ]
};
