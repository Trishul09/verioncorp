export type Language = 
  | 'en' // English
  | 'hi' // Hindi
  | 'ta' // Tamil
  | 'te' // Telugu
  | 'bn' // Bengali
  | 'mr' // Marathi
  | 'gu' // Gujarati
  | 'kn' // Kannada
  | 'ml' // Malayalam
  | 'pa' // Punjabi
  | 'or' // Odia
  | 'as' // Assamese
  | 'es' // Spanish
  | 'fr' // French
  | 'de' // German
  | 'zh' // Chinese
  | 'ja' // Japanese
  | 'ar' // Arabic
  | 'pt' // Portuguese
  | 'ru'; // Russian

export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिंदी (Hindi)',
  ta: 'தமிழ் (Tamil)',
  te: 'తెలుగు (Telugu)',
  bn: 'বাংলা (Bengali)',
  mr: 'मराठी (Marathi)',
  gu: 'ગુજરાતી (Gujarati)',
  kn: 'ಕನ್ನಡ (Kannada)',
  ml: 'മലയാളം (Malayalam)',
  pa: 'ਪੰਜਾਬੀ (Punjabi)',
  or: 'ଓଡ଼ିଆ (Odia)',
  as: 'অসমীয়া (Assamese)',
  es: 'Español (Spanish)',
  fr: 'Français (French)',
  de: 'Deutsch (German)',
  zh: '中文 (Chinese)',
  ja: '日本語 (Japanese)',
  ar: 'العربية (Arabic)',
  pt: 'Português (Portuguese)',
  ru: 'Русский (Russian)',
};

export const translations: Record<Language, any> = {
  en: {
    nav: {
      home: 'Home',
      vision: 'Vision',
      architecture: 'Architecture',
      features: 'Features',
      comparison: 'Comparison',
      careers: 'Careers',
      waitlist: 'Waitlist',
      joinWaitlist: 'Join Waitlist',
      back: 'Back',
    },
    hero: {
      title: 'Privacy-First Communication',
      subtitle: 'Revolutionary platform for secure connections',
      cta: 'Get Started',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      vision: 'विजन',
      architecture: 'आर्किटेक्चर',
      features: 'फीचर्स',
      comparison: 'तुलना',
      careers: 'करियर',
      waitlist: 'वेटलिस्ट',
      joinWaitlist: 'वेटलिस्ट में शामिल हों',
      back: 'वापस',
    },
    hero: {
      title: 'गोपनीयता-प्रथम संचार',
      subtitle: 'सुरक्षित कनेक्शन के लिए क्रांतिकारी प्लेटफॉर्म',
      cta: 'शुरू करें',
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      vision: 'பார்வை',
      architecture: 'கட்டமைப்பு',
      features: 'அம்சங்கள்',
      comparison: 'ஒப்பீடு',
      careers: 'வேலைவாய்ப்புகள்',
      waitlist: 'காத்திருப்பு பட்டியல்',
      joinWaitlist: 'காத்திருப்பு பட்டியலில் சேரவும்',
      back: 'பின்செல்',
    },
    hero: {
      title: 'தனியுரிமை-முதல் தொடர்பு',
      subtitle: 'பாதுகாப்பான இணைப்புகளுக்கான புரட்சிகர தளம்',
      cta: 'தொடங்குங்கள்',
    },
  },
  te: {
    nav: {
      home: 'హోమ్',
      vision: 'విజన్',
      architecture: 'ఆర్కిటెక్చర్',
      features: 'ఫీచర్స్',
      comparison: 'పోలిక',
      careers: 'కెరీర్స్',
      waitlist: 'వెయిట్‌లిస్ట్',
      joinWaitlist: 'వెయిట్‌లిస్ట్‌లో చేరండి',
      back: 'వెనుకకు',
    },
    hero: {
      title: 'గోప్యత-మొదటి కమ్యూనికేషన్',
      subtitle: 'సురక్షిత కనెక్షన్‌ల కోసం విప్లవాత్మక వేదిక',
      cta: 'ప్రారంభించండి',
    },
  },
  bn: {
    nav: {
      home: 'হোম',
      vision: 'ভিশন',
      architecture: 'আর্কিটেকচার',
      features: 'ফিচার',
      comparison: 'তুলনা',
      careers: 'ক্যারিয়ার',
      waitlist: 'ওয়েটলিস্ট',
      joinWaitlist: 'ওয়েটলিস্টে যোগ দিন',
      back: 'ফিরে যান',
    },
    hero: {
      title: 'গোপনীয়তা-প্রথম যোগাযোগ',
      subtitle: 'নিরাপদ সংযোগের জন্য বিপ্লবী প্ল্যাটফর্ম',
      cta: 'শুরু করুন',
    },
  },
  mr: {
    nav: {
      home: 'होम',
      vision: 'व्हिजन',
      architecture: 'आर्किटेक्चर',
      features: 'वैशिष्ट्ये',
      comparison: 'तुलना',
      careers: 'करिअर',
      waitlist: 'वेटलिस्ट',
      joinWaitlist: 'वेटलिस्टमध्ये सामील व्हा',
      back: 'मागे',
    },
    hero: {
      title: 'गोपनीयता-प्रथम संवाद',
      subtitle: 'सुरक्षित कनेक्शनसाठी क्रांतिकारी प्लॅटफॉर्म',
      cta: 'सुरुवात करा',
    },
  },
  gu: {
    nav: {
      home: 'હોમ',
      vision: 'વિઝન',
      architecture: 'આર્કિટેક્ચર',
      features: 'સુવિધાઓ',
      comparison: 'સરખામણી',
      careers: 'કારકિર્દી',
      waitlist: 'વેઇટલિસ્ટ',
      joinWaitlist: 'વેઇટલિસ્ટમાં જોડાઓ',
      back: 'પાછળ',
    },
    hero: {
      title: 'ગોપનીયતા-પ્રથમ સંચાર',
      subtitle: 'સુરક્ષિત કનેક્શન માટે ક્રાંતિકારી પ્લેટફોર્મ',
      cta: 'શરૂ કરો',
    },
  },
  kn: {
    nav: {
      home: 'ಹೋಮ್',
      vision: 'ವಿಷನ್',
      architecture: 'ಆರ್ಕಿಟೆಕ್ಚರ್',
      features: 'ವೈಶಿಷ್ಟ್ಯಗಳು',
      comparison: 'ಹೋಲಿಕೆ',
      careers: 'ವೃತ್ತಿಗಳು',
      waitlist: 'ವೇಟ್‌ಲಿಸ್ಟ್',
      joinWaitlist: 'ವೇಟ್‌ಲಿಸ್ಟ್‌ಗೆ ಸೇರಿ',
      back: 'ಹಿಂದೆ',
    },
    hero: {
      title: 'ಗೌಪ್ಯತೆ-ಮೊದಲ ಸಂವಹನ',
      subtitle: 'ಸುರಕ್ಷಿತ ಸಂಪರ್ಕಗಳಿಗಾಗಿ ಕ್ರಾಂತಿಕಾರಿ ವೇದಿಕೆ',
      cta: 'ಪ್ರಾರಂಭಿಸಿ',
    },
  },
  ml: {
    nav: {
      home: 'ഹോം',
      vision: 'വിഷൻ',
      architecture: 'ആർക്കിടെക്ചർ',
      features: 'സവിശേഷതകൾ',
      comparison: 'താരതമ്യം',
      careers: 'കരിയർ',
      waitlist: 'വെയ്റ്റ്‌ലിസ്റ്റ്',
      joinWaitlist: 'വെയ്റ്റ്‌ലിസ്റ്റിൽ ചേരുക',
      back: 'തിരികെ',
    },
    hero: {
      title: 'സ്വകാര്യത-ആദ്യ ആശയവിനിമയം',
      subtitle: 'സുരക്ഷിത കണക്ഷനുകൾക്കായി വിപ്ലവകരമായ പ്ലാറ്റ്‌ഫോം',
      cta: 'ആരംഭിക്കുക',
    },
  },
  pa: {
    nav: {
      home: 'ਹੋਮ',
      vision: 'ਵਿਜ਼ਨ',
      architecture: 'ਆਰਕੀਟੈਕਚਰ',
      features: 'ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',
      comparison: 'ਤੁਲਨਾ',
      careers: 'ਕੈਰੀਅਰ',
      waitlist: 'ਵੇਟਲਿਸਟ',
      joinWaitlist: 'ਵੇਟਲਿਸਟ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ',
      back: 'ਪਿੱਛੇ',
    },
    hero: {
      title: 'ਗੋਪਨੀਯਤਾ-ਪਹਿਲਾਂ ਸੰਚਾਰ',
      subtitle: 'ਸੁਰੱਖਿਅਤ ਕਨੈਕਸ਼ਨਾਂ ਲਈ ਕ੍ਰਾਂਤੀਕਾਰੀ ਪਲੇਟਫਾਰਮ',
      cta: 'ਸ਼ੁਰੂ ਕਰੋ',
    },
  },
  or: {
    nav: {
      home: 'ହୋମ୍',
      vision: 'ଭିଜନ',
      architecture: 'ଆର୍କିଟେକଚର୍',
      features: 'ବୈଶିଷ୍ଟ୍ୟଗୁଡ଼ିକ',
      comparison: 'ତୁଳନା',
      careers: 'କ୍ୟାରିୟର',
      waitlist: 'ୱେଟଲିଷ୍ଟ',
      joinWaitlist: 'ୱେଟଲିଷ୍ଟରେ ଯୋଗ ଦିଅନ୍ତୁ',
      back: 'ପଛକୁ',
    },
    hero: {
      title: 'ଗୋପନୀୟତା-ପ୍ରଥମ ଯୋଗାଯୋଗ',
      subtitle: 'ସୁରକ୍ଷିତ ସଂଯୋଗ ପାଇଁ ବିପ୍ଳବୀ ପ୍ଲାଟଫର୍ମ',
      cta: 'ଆରମ୍ଭ କରନ୍ତୁ',
    },
  },
  as: {
    nav: {
      home: 'হোম',
      vision: 'ভিজন',
      architecture: 'আৰ্কিটেকচাৰ',
      features: 'বৈশিষ্ট্যসমূহ',
      comparison: 'তুলনা',
      careers: 'কেৰিয়াৰ',
      waitlist: 'ৱেইটলিষ্ট',
      joinWaitlist: 'ৱেইটলিষ্টত যোগদান কৰক',
      back: 'পিছলৈ',
    },
    hero: {
      title: 'গোপনীয়তা-প্ৰথম যোগাযোগ',
      subtitle: 'সুৰক্ষিত সংযোগৰ বাবে বিপ্লৱী মঞ্চ',
      cta: 'আৰম্ভ কৰক',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      vision: 'Visión',
      architecture: 'Arquitectura',
      features: 'Características',
      comparison: 'Comparación',
      careers: 'Carreras',
      waitlist: 'Lista de espera',
      joinWaitlist: 'Unirse a lista de espera',
      back: 'Atrás',
    },
    hero: {
      title: 'Comunicación Privacidad-Primero',
      subtitle: 'Plataforma revolucionaria para conexiones seguras',
      cta: 'Comenzar',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      vision: 'Vision',
      architecture: 'Architecture',
      features: 'Fonctionnalités',
      comparison: 'Comparaison',
      careers: 'Carrières',
      waitlist: 'Liste d\'attente',
      joinWaitlist: 'Rejoindre la liste d\'attente',
      back: 'Retour',
    },
    hero: {
      title: 'Communication Axée sur la Confidentialité',
      subtitle: 'Plateforme révolutionnaire pour des connexions sécurisées',
      cta: 'Commencer',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      vision: 'Vision',
      architecture: 'Architektur',
      features: 'Funktionen',
      comparison: 'Vergleich',
      careers: 'Karriere',
      waitlist: 'Warteliste',
      joinWaitlist: 'Warteliste beitreten',
      back: 'Zurück',
    },
    hero: {
      title: 'Datenschutz-Erste Kommunikation',
      subtitle: 'Revolutionäre Plattform für sichere Verbindungen',
      cta: 'Loslegen',
    },
  },
  zh: {
    nav: {
      home: '首页',
      vision: '愿景',
      architecture: '架构',
      features: '功能',
      comparison: '对比',
      careers: '职业',
      waitlist: '候补名单',
      joinWaitlist: '加入候补名单',
      back: '返回',
    },
    hero: {
      title: '隐私优先通信',
      subtitle: '安全连接的革命性平台',
      cta: '开始使用',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      vision: 'ビジョン',
      architecture: 'アーキテクチャ',
      features: '機能',
      comparison: '比較',
      careers: 'キャリア',
      waitlist: 'ウェイトリスト',
      joinWaitlist: 'ウェイトリストに参加',
      back: '戻る',
    },
    hero: {
      title: 'プライバシー第一のコミュニケーション',
      subtitle: '安全な接続のための革新的なプラットフォーム',
      cta: '始める',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      vision: 'الرؤية',
      architecture: 'البنية',
      features: 'الميزات',
      comparison: 'المقارنة',
      careers: 'الوظائف',
      waitlist: 'قائمة الانتظار',
      joinWaitlist: 'انضم لقائمة الانتظار',
      back: 'رجوع',
    },
    hero: {
      title: 'اتصال يعطي الأولوية للخصوصية',
      subtitle: 'منصة ثورية للاتصالات الآمنة',
      cta: 'ابدأ',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      vision: 'Visão',
      architecture: 'Arquitetura',
      features: 'Recursos',
      comparison: 'Comparação',
      careers: 'Carreiras',
      waitlist: 'Lista de espera',
      joinWaitlist: 'Entrar na lista de espera',
      back: 'Voltar',
    },
    hero: {
      title: 'Comunicação com Privacidade em Primeiro Lugar',
      subtitle: 'Plataforma revolucionária para conexões seguras',
      cta: 'Começar',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      vision: 'Видение',
      architecture: 'Архитектура',
      features: 'Функции',
      comparison: 'Сравнение',
      careers: 'Карьера',
      waitlist: 'Список ожидания',
      joinWaitlist: 'Присоединиться к списку ожидания',
      back: 'Назад',
    },
    hero: {
      title: 'Общение с приоритетом конфиденциальности',
      subtitle: 'Революционная платформа для безопасных соединений',
      cta: 'Начать',
    },
  },
};
