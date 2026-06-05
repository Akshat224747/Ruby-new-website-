// =============================================
// RUBY BEAUTY CLINIC - HINDI/ENGLISH TOGGLE
// =============================================

const TRANSLATIONS = {
  en: {
    // NAVBAR
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_bridal: "Bridal",
    nav_reviews: "Reviews",
    nav_about: "About",
    nav_contact: "Contact",
    nav_book: "Book Now",

    // HERO
    hero_tag: "✦ Premium Beauty Clinic · Muzaffarnagar",
    hero_welcome: "Welcome to",
    hero_title: "Ruby <em>Beauty</em><br>Clinic",
    hero_desc: "Experience luxury beauty treatments crafted just for you. From radiant facials to breathtaking bridal transformations — your beauty is our passion.",
    hero_btn1: "Book Appointment",
    hero_btn2: "Our Services",
    hero_badge: "✦ Muzaffarnagar's Premium Clinic",

    // COUNTERS
    counter_clients: "Happy Clients",
    counter_exp: "Years Experience",
    counter_services: "Services Offered",
    counter_rating: "Star Rating",

    // SERVICES SECTION
    services_tag: "What We Offer",
    services_title: "Our <em>Signature</em> Services",
    services_sub: "Premium treatments delivered with professional expertise and top-quality products.",
    services_view: "View All Services & Prices",
    s1_name: "Facials & Skin Care",
    s1_desc: "Deep cleansing, brightening & anti-aging facial treatments for glowing skin.",
    s2_name: "Makeup & Styling",
    s2_desc: "Party, bridal & everyday makeup by expert artists using top brands.",
    s3_name: "Hair Treatments",
    s3_desc: "Cuts, coloring, keratin, smoothening & all hair care services.",
    s4_name: "Nail Art",
    s4_desc: "Manicure, pedicure, gel nails & creative nail art designs.",
    s5_name: "Waxing & Threading",
    s5_desc: "Full body waxing, threading & hair removal with premium wax.",
    s6_name: "Bridal Packages",
    s6_desc: "Complete bridal makeover packages for your most special day.",

    // OFFERS
    offers_tag: "Limited Time",
    offers_title: "Special <em>Offers</em>",
    offers_sub: "Exclusive deals for our valued clients. Book today and save!",
    offer1_badge: "New Clients",
    offer1_title: "First Visit Discount",
    offer1_desc: "Get a flat discount on any service on your first visit. No minimum spend required!",
    offer1_btn: "Claim Offer",
    offer1_terms: "*First visit only. Valid on all services.",
    offer2_badge: "Bridal Special",
    offer2_title: "Bridal Package",
    offer2_desc: "Complete bridal makeover — makeup, hair, skin prep & more. Make your wedding unforgettable.",
    offer2_btn: "View Packages",
    offer2_terms: "*Starting price. Packages vary by requirements.",
    offer3_badge: "Refer & Earn",
    offer3_title: "Refer a Friend",
    offer3_desc: "Refer your friend — both of you get 10% off! The more you refer, the more you save.",
    offer3_btn: "Refer Now",
    offer3_terms: "*Valid for both referrer & new client.",

    // WHY US
    why_tag: "Why Ruby Beauty",
    why_title: "The <em>Ruby</em> Difference",
    why1_title: "Expert Professionals",
    why1_desc: "Trained & certified beauty experts with years of hands-on experience.",
    why2_title: "Premium Products",
    why2_desc: "We use only top-quality, skin-safe products for all treatments.",
    why3_title: "Hygienic Environment",
    why3_desc: "100% sanitized tools & clean environment for every client.",
    why4_title: "Affordable Prices",
    why4_desc: "Luxury beauty services at prices that fit every budget.",

    // FAQ
    faq_tag: "Help Center",
    faq_title: "Frequently Asked <em>Questions</em>",
    faq1_q: "Is walk-in allowed or appointment only?",
    faq1_a: "Yes, walk-ins are welcome! However, during busy hours there may be a wait. Booking an appointment saves your time and gives you priority. Appointments can be confirmed on WhatsApp in just 5 minutes.",
    faq2_q: "What are the opening hours?",
    faq2_a: "We are open Monday to Saturday 9:00 AM to 8:00 PM and Sunday 10:00 AM to 6:00 PM. Timings may change on public holidays — please confirm on WhatsApp.",
    faq3_q: "What is included in the bridal package?",
    faq3_a: "Bridal packages include bridal makeup, hair styling, pre-bridal skin treatment, mehendi session, and trial makeup. Packages start from ₹1,500 and are customized as per requirements.",
    faq4_q: "Is home service available?",
    faq4_a: "We mainly provide in-salon services. For bridal events, special home/venue service is available. Contact us on WhatsApp with your details.",
    faq5_q: "What payment methods are accepted?",
    faq5_a: "We accept Cash, UPI (PhonePe, Google Pay, Paytm), and all major payment methods. No hidden charges — the quoted price is the final price.",
    faq6_q: "How much time does a service take?",
    faq6_a: "Simple facial or cleanup takes 45–60 minutes. Full makeup 1–2 hours. Bridal full package can take 3–4 hours or more. Exact timing is shared at the time of booking.",

    // CTA
    cta_title: "Ready for Your <em>Transformation?</em>",
    cta_desc: "Book your appointment today and let us bring out your best beauty.",
    cta_btn1: "Book Appointment",
    cta_btn2: "WhatsApp Us",

    // FOOTER
    footer_desc: "Premium beauty services in Muzaffarnagar. Your transformation is our mission.",
    footer_links: "Quick Links",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_hours: "Mon–Sat: 9:00 AM – 8:00 PM | Sunday: 10:00 AM – 6:00 PM",
    footer_copy: "© 2024 Ruby Beauty Clinic. All rights reserved.",
  },

  hi: {
    // NAVBAR
    nav_home: "होम",
    nav_services: "सेवाएं",
    nav_gallery: "गैलरी",
    nav_bridal: "ब्राइडल",
    nav_reviews: "समीक्षा",
    nav_about: "हमारे बारे में",
    nav_contact: "संपर्क",
    nav_book: "बुक करें",

    // HERO
    hero_tag: "✦ प्रीमियम ब्यूटी क्लिनिक · मुज़फ्फरनगर",
    hero_welcome: "आपका स्वागत है",
    hero_title: "Ruby <em>Beauty</em><br>Clinic",
    hero_desc: "आपके लिए खास ब्यूटी ट्रीटमेंट का अनुभव लें। चमकदार फेशियल से लेकर शानदार ब्राइडल मेकओवर तक — आपकी सुंदरता हमारी जिम्मेदारी है।",
    hero_btn1: "अपॉइंटमेंट बुक करें",
    hero_btn2: "हमारी सेवाएं",
    hero_badge: "✦ मुज़फ्फरनगर का प्रीमियम क्लिनिक",

    // COUNTERS
    counter_clients: "खुश ग्राहक",
    counter_exp: "साल का अनुभव",
    counter_services: "सेवाएं उपलब्ध",
    counter_rating: "स्टार रेटिंग",

    // SERVICES SECTION
    services_tag: "हम क्या देते हैं",
    services_title: "हमारी <em>खास</em> सेवाएं",
    services_sub: "प्रोफेशनल विशेषज्ञों द्वारा प्रीमियम उत्पादों से दी जाने वाली सेवाएं।",
    services_view: "सभी सेवाएं और कीमतें देखें",
    s1_name: "फेशियल और स्किन केयर",
    s1_desc: "चमकदार त्वचा के लिए डीप क्लींजिंग, ब्राइटनिंग और एंटी-एजिंग फेशियल।",
    s2_name: "मेकअप और स्टाइलिंग",
    s2_desc: "पार्टी, ब्राइडल और रोज़मर्रा का मेकअप — टॉप ब्रांड्स के साथ।",
    s3_name: "हेयर ट्रीटमेंट",
    s3_desc: "कटिंग, कलरिंग, केरातिन, स्मूदनिंग और सभी हेयर केयर सेवाएं।",
    s4_name: "नेल आर्ट",
    s4_desc: "मैनीक्योर, पेडीक्योर, जेल नेल्स और क्रिएटिव नेल आर्ट।",
    s5_name: "वैक्सिंग और थ्रेडिंग",
    s5_desc: "फुल बॉडी वैक्सिंग, थ्रेडिंग और हेयर रिमूवल।",
    s6_name: "ब्राइडल पैकेज",
    s6_desc: "आपके खास दिन के लिए पूरा ब्राइडल मेकओवर पैकेज।",

    // OFFERS
    offers_tag: "सीमित समय",
    offers_title: "Special <em>Offers</em>",
    offers_sub: "हमारे प्रिय ग्राहकों के लिए खास डील। आज बुक करें और बचत करें!",
    offer1_badge: "नए ग्राहक",
    offer1_title: "पहली विज़िट पर छूट",
    offer1_desc: "पहली बार आएं और किसी भी सेवा पर फ्लैट छूट पाएं। कोई न्यूनतम खर्च नहीं!",
    offer1_btn: "ऑफर क्लेम करें",
    offer1_terms: "*केवल पहली विज़िट। सभी सेवाओं पर मान्य।",
    offer2_badge: "ब्राइडल स्पेशल",
    offer2_title: "ब्राइडल पैकेज",
    offer2_desc: "पूरा ब्राइडल मेकओवर — मेकअप, हेयर, स्किन प्रेप और बहुत कुछ।",
    offer2_btn: "पैकेज देखें",
    offer2_terms: "*शुरुआती कीमत। पैकेज ज़रूरतों के हिसाब से।",
    offer3_badge: "रेफर और कमाएं",
    offer3_title: "दोस्त को रेफर करें",
    offer3_desc: "अपनी सहेली को रेफर करें — दोनों को 10% छूट मिलेगी!",
    offer3_btn: "अभी रेफर करें",
    offer3_terms: "*रेफरर और नए ग्राहक दोनों के लिए।",

    // WHY US
    why_tag: "Ruby Beauty क्यों?",
    why_title: "The <em>Ruby</em> Difference",
    why1_title: "विशेषज्ञ पेशेवर",
    why1_desc: "प्रशिक्षित और प्रमाणित ब्यूटी विशेषज्ञ, वर्षों के अनुभव के साथ।",
    why2_title: "प्रीमियम उत्पाद",
    why2_desc: "हम केवल उच्च गुणवत्ता, त्वचा-सुरक्षित उत्पादों का उपयोग करते हैं।",
    why3_title: "स्वच्छ वातावरण",
    why3_desc: "100% सैनिटाइज़्ड उपकरण और हर ग्राहक के लिए साफ वातावरण।",
    why4_title: "किफायती कीमतें",
    why4_desc: "हर बजट के लिए लग्ज़री ब्यूटी सेवाएं।",

    // FAQ
    faq_tag: "सहायता केंद्र",
    faq_title: "अक्सर पूछे जाने वाले <em>सवाल</em>",
    faq1_q: "वॉक-इन की सुविधा है या सिर्फ अपॉइंटमेंट पर?",
    faq1_a: "हां, वॉक-इन का स्वागत है! लेकिन व्यस्त समय में इंतज़ार करना पड़ सकता है। अपॉइंटमेंट से आपका समय बचता है और प्राथमिकता मिलती है। WhatsApp पर 5 मिनट में अपॉइंटमेंट कन्फर्म हो जाती है।",
    faq2_q: "खुलने का समय क्या है?",
    faq2_a: "हम सोमवार से शनिवार सुबह 9:00 बजे से रात 8:00 बजे तक और रविवार सुबह 10:00 बजे से शाम 6:00 बजे तक खुले रहते हैं।",
    faq3_q: "ब्राइडल पैकेज में क्या शामिल है?",
    faq3_a: "ब्राइडल पैकेज में ब्राइडल मेकअप, हेयर स्टाइलिंग, प्री-ब्राइडल स्किन ट्रीटमेंट, मेहंदी सेशन और ट्रायल मेकअप शामिल है। पैकेज ₹1,500 से शुरू होता है।",
    faq4_q: "क्या होम सर्विस उपलब्ध है?",
    faq4_a: "हम मुख्यतः सैलून में सेवा देते हैं। ब्राइडल इवेंट के लिए होम/वेन्यू सर्विस उपलब्ध है। WhatsApp पर संपर्क करें।",
    faq5_q: "भुगतान के क्या विकल्प हैं?",
    faq5_a: "हम Cash, UPI (PhonePe, Google Pay, Paytm) और सभी प्रमुख भुगतान विधियां स्वीकार करते हैं। कोई छुपा शुल्क नहीं।",
    faq6_q: "सेवा में कितना समय लगता है?",
    faq6_a: "साधारण फेशियल 45-60 मिनट। पूरा मेकअप 1-2 घंटे। ब्राइडल पैकेज 3-4 घंटे या उससे अधिक।",

    // CTA
    cta_title: "तैयार हैं अपने <em>नए रूप</em> के लिए?",
    cta_desc: "आज ही अपॉइंटमेंट बुक करें और अपनी सुंदरता निखारें।",
    cta_btn1: "अपॉइंटमेंट बुक करें",
    cta_btn2: "WhatsApp करें",

    // FOOTER
    footer_desc: "मुज़फ्फरनगर में प्रीमियम ब्यूटी सेवाएं। आपका रूपांतरण हमारी जिम्मेदारी।",
    footer_links: "त्वरित लिंक",
    footer_services: "सेवाएं",
    footer_contact: "संपर्क",
    footer_hours: "सोम–शनि: 9AM–8PM | रवि: 10AM–6PM",
    footer_copy: "© 2024 Ruby Beauty Clinic. सर्वाधिकार सुरक्षित।",
  }
};

let currentLang = localStorage.getItem('rbc_lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('rbc_lang', lang);
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (t[key] !== undefined) {
      if (el.dataset.html === 'true') {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  // Toggle button text
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'en' ? 'हिंदी' : 'English';
  });
  // html lang attribute
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'hi' : 'en');
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
});
