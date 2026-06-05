// ============================================
// RUBY BEAUTY CLINIC - SITE CONFIGURATION
// Sirf yahan edit karo — sab pages update ho jayenge!
// ============================================

const SITE = {
  // CLINIC INFO
  name: "Ruby Beauty Clinic",
  tagline: "Ruby Makeover",
  city: "Muzaffarnagar",

  // CONTACT — YAHAN SIRF EDIT KARO
  phone: "94122 11583",
  phoneLink: "tel:+919412211583",
  whatsapp: "919412211583",
  address: "786/40, Meerut Rd, Yogenderpuri, Qidwai Nagar, Muzaffarnagar, Uttar Pradesh 251001",
  mapLink: "https://maps.app.goo.gl/GfFmBDczrFdtDB7V6?g_st=ac",
  mapCode: "FM6W+22 Muzaffarnagar, Uttar Pradesh",

  // HOURS
  weekdays: "Monday – Saturday: 9:00 AM – 8:00 PM",
  sunday: "Sunday: 10:00 AM – 6:00 PM",

  // OFFERS
  firstVisitOff: "20%",
  bridalStartingPrice: "₹1,500",
  referFriendOff: "10%",
};

// WhatsApp links — auto generate
SITE.waGeneral    = `https://wa.me/${SITE.whatsapp}?text=Hi%20Ruby%20Beauty%20Clinic!%20Main%20appointment%20book%20karna%20chahta%20hoon.`;
SITE.waBridal     = `https://wa.me/${SITE.whatsapp}?text=Hi!%20Main%20Bridal%20Package%20ke%20baare%20mein%20jaanna%20chahta%20hoon.`;
SITE.waFirstVisit = `https://wa.me/${SITE.whatsapp}?text=Hi!%20Main%20pehli%20visit%20discount%20ke%20baare%20mein%20jaanna%20chahta%20hoon.`;
SITE.waRefer      = `https://wa.me/${SITE.whatsapp}?text=Hi!%20Main%20refer%20a%20friend%20offer%20ke%20baare%20mein%20jaanna%20chahta%20hoon.`;

// Auto-fill on page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-phone]").forEach(el => {
    el.textContent = SITE.phone;
    if (el.tagName === "A") el.href = SITE.phoneLink;
  });
  document.querySelectorAll("[data-wa]").forEach(el => {
    el.href = SITE[el.dataset.wa] || SITE.waGeneral;
  });
  document.querySelectorAll("[data-address]").forEach(el => {
    el.textContent = SITE.address;
  });
  document.querySelectorAll("[data-map]").forEach(el => {
    el.href = SITE.mapLink;
  });
  document.querySelectorAll("[data-hours-week]").forEach(el => {
    el.textContent = SITE.weekdays;
  });
  document.querySelectorAll("[data-hours-sun]").forEach(el => {
    el.textContent = SITE.sunday;
  });
  document.querySelectorAll("[data-offer-first]").forEach(el => {
    el.textContent = SITE.firstVisitOff;
  });
  document.querySelectorAll("[data-offer-bridal]").forEach(el => {
    el.textContent = SITE.bridalStartingPrice;
  });
  document.querySelectorAll("[data-offer-refer]").forEach(el => {
    el.textContent = SITE.referFriendOff;
  });
});
