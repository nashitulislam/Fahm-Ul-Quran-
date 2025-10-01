export const mainCourse = {
  title: 'Fahm Ul Quran Diploma Course',
  arabicTitle: 'فہم القرآن ڈپلومہ کورس ',
  duration: '15 Months',
  mode: 'Online & Offline',
  level: 'Beginner to Advanced',
  description: 'Learn a complete understanding and translation of the Holy Quran in this comprehensive diploma course.',
  features: [
    'Complete Quran Translation',
    'Tafseer aur Tashreeh',
    'Arabic Grammar Basics',
    'Hadees, Islami Fiqh, Seerat-un-Nabi ﷺ',
    'Islamic Inheritance laws etc.',
    'Certificate upon Completion'
  ],
  price: 'Pay able Fee',
  installments: 'Monthly Pay able Fee'
};

export const otherCourses = [
  {
    title: 'Basic Islamic Studies',
    arabicTitle: 'بنیادی اسلامی تعلیمات',
    duration: '5 Months',
    description: 'For Islamic Aqaid and Basic Knowledge',
    price: 'Pay able Fee'
  },
  {
    title: 'Hadees Study Program',
    arabicTitle: 'حدیث شریف کا مطالعہ',
    duration: '1 Year',
    description: 'Teachings and Understanding of Sahih Hadith',
    price: 'Pay able Fee'
  },
  {
    title: 'Islamic Jurisprudence (Fiqh)',
    arabicTitle: 'فقہ اسلامی',
    duration: '1 Year',
    description: 'Islamic law and practical guidance',
    price: 'Pay able Fee'
  },
  {
    title: 'Tajweed & Qirat',
    arabicTitle: 'تجوید اور قرأت',
    duration: '1 Year',
    description: 'Learn Correct Quranic Recitation',
    price: 'Pay able Fee'
  },
  {
    title: 'Dars-e-Nizami',
    arabicTitle: 'درس نظامی',
    duration: '4 Years',
    description: 'Learn correct recitation and fundamentals of Quranic studies.',
    price: 'Pay able Fee'
  },
  {
    title: 'Hifz-e-Quran (Selected Surahs)',
    arabicTitle: 'حفظ قرآن (منتخب سورہ)',
    duration: '1 Year',
    description: 'Memorize selected Surahs and learn proper recitation.',
    price: 'Pay able Fee'
  },
  {
    title: 'Aqaid Course',
    arabicTitle: 'عقائد کورس',
    duration: '5 Months',
    description: 'Gain basic knowledge of Islamic beliefs and creed.',
    price: 'Pay able Fee'
  },
  {
    title: 'Seerat Course',
    arabicTitle: 'سیرت کورس',
    duration: '5 Months',
    description: 'Learn the life, character, and teachings of Prophet Muhammad ﷺ.',
    price: 'Pay able Fee'
  },
  {
    title: 'Farz-ul-Uloom Course',
    arabicTitle: 'فرض العلوم کورس',
    duration: '5 Months',
    description: 'A concise course covering essential Islamic knowledge.',
    price: 'Pay able Fee'
  },
  {
    title: 'Nazra Course',
    arabicTitle: 'نظرہ کورس',
    duration: '15 Months',
    description: 'Learn to read the Quran with correct pronunciation.',
    price: 'Pay able Fee'
  },
  {
    title: 'Adeeb Arabic',
    arabicTitle: 'ادیب عربی',
    duration: '1 Year',
    description: 'Learn Arabic literature and basic grammar.',
    price: 'Pay able Fee'
  },
  {
    title: 'Arabic Language Course',
    arabicTitle: 'عربی زبان کورس',
    duration: '15 Months',
    description: 'Master the Arabic language from basic to advanced level.',
    price: 'Pay able Fee'
  }
];

export const allCourseTitles = [mainCourse.title, ...otherCourses.map(c => c.title)];
