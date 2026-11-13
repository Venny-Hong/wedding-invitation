export interface WeddingEvent {
  id: string;
  name: string;
  subTitle: string;
  date: string;
  dateISO: string;
  islamicDate: string;
  time: string;
  lunchDetail?: string;
  venue: string;
  address: string;
  city: string;
  state: string;
  country: string;
  mapsSearchUrl: string;
  badge: string;
}

export interface FamilySide {
  side: "bride" | "groom";
  title: string;
  candidateName: string;
  relationshipTitle: string;
  fatherInfo: string;
  additionalInfo: string;
  issuedBy?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  tag: string;
}

export interface WeddingData {
  bismillahArabic: string;
  bismillahEnglish: string;
  bride: {
    fullName: string;
  
    shortName: string;
  };
  groom: {
    fullName: string;
    
    shortName: string;
  };
  monogram: string;
  dateSummary: string;
  islamicDateSummary: string;
  locationSummary: string;
  targetDateTimeISO: string; // Nikah target in IST: 2026-10-18T12:30:00+05:30
  mainInvitationMessage: {
    heading: string;
    invitationBy: string;
    body: string;
    eventInvite: string;
  };
  events: WeddingEvent[];
  families: {
    bride: FamilySide;
    groom: FamilySide;
  };
  closing: {
    title: string;
    duaArabic: string;
    duaTranslation: string;
    message: string;
    compliments: string;
    sbtFamilyCompliments: string;
  };
  shareDetails: {
    title: string;
    messageText: string;
  };
  qrCode: {
    imageSrc: string;
    title: string;
    caption: string;
  };
}

export const weddingData: WeddingData = {
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahEnglish: "In the name of Allah, the Most Beneficent, the Most Merciful",
  bride: {
    fullName: "Sahima Gouri",
    shortName: "Sahima",
  },
  groom: {
    fullName: "Mohammed Sahil Gouri",
    shortName: "Sahil",
  },
  monogram: "S & S",
  dateSummary: "27 December 2026",
  islamicDateSummary: "18th Rajab 1448 Hijri",
  locationSummary: "Harnawa, Rajasthan",
  targetDateTimeISO: "2026-12-27T12:30:00+05:30",
  mainInvitationMessage: {
    heading: "Wedding Invitation",
    invitationBy: "Mr. Saddik Chotu Teli Gouri Sab.",
    body: "cordially solicits your gracious presence and blessings on the auspicious occasion of the marriage of her granddaughter, Sahima Gouri, with Mohammed Sahil Gouri.",
    eventInvite: "With the blessings of Allah and our families, we invite you to join us for the Mehfil-e-Nikah and Dawat-e-Valima.",
  },
  events: [
    {
      id: "Haldi",
      name: "Jashn-e-Haldi",
      subTitle: "The Haldi Ceremony",
      date: "Friday, 25 December 2026",
      dateISO: "2026-12-25",
      islamicDate: "16th Rajab 1448 Hijri (Inshallaha)",
      time: "5:00 PM",
      lunchDetail: "Dinner: Thereafter",
      venue: "Jubeda Manzil",
      address: "Near harwana Patti, Teli Bash",
      city: "Parbatsar",
      state: "Rajasthan",
      country: "India",
      mapsSearchUrl:
        "https://maps.app.goo.gl/REPYeeGuLknrEaW36",
      badge: "Haldii Ceremony",
    },
    {
      id: "nikah",
      name: "Mehfil-e-Nikah",
      subTitle: "The Sacred Marriage Ceremony",
      date: "Sunday, 27 December 2026",
      dateISO: "2026-12-27",
      islamicDate: "18th Rajab 1448 Hijri (Inshallaha)",
      time: "4:00 PM",
      lunchDetail: "Dinner: Thereafter",
      venue: "Jubeda Manzil",
      address: "Near harwana Patti, Teli Bash",
      city: "Parbatsar",
      state: "Rajasthan",
      country: "India",
      mapsSearchUrl:
        "https://maps.app.goo.gl/REPYeeGuLknrEaW36",
      badge: "Nikah Ceremony",
    },
    {
      id: "valima",
      name: "Dawat-e-Valima",
      subTitle: "The Joyful Reception",
      date: "Monday, 28 december 2026",
      dateISO: "2026-12-28",
      islamicDate: "19th Rajab 1448 Hijri (Inshallaha",
      time: "4:00 PM",
      venue: "Advocate hanif Residence",
      address: "Deeppura Road",
      city: "Kuchaman",
      state: "Rajasthan",
      country: "India",
      mapsSearchUrl:
        "https://maps.app.goo.gl/Ym2DhQbAuEgMEJBg9"  ,
      badge: "Valima Reception",
    },
  ],
  families: {
    bride: {
      side: "bride",
      title: "Bride's Family",
      candidateName: "Sahima Gouri",
      relationshipTitle: "Granddaughter of Saddik Chotu Teli Gouri Sab. (Harwana Wale)",
      fatherInfo: "Daughter of Aslam Saddik Gouri (Harwana Wale)",
      additionalInfo: "Grand eldest daughter of the family",
      issuedBy: "Invitation cordially extended by Mr. Saddik Chotu Teli Gouri Sab.",
    },
    groom: {
      side: "groom",
      title: "Groom's Family",
      candidateName: "Mohammed Sahil Gouri",
      relationshipTitle: "Mahrum Hussain ji Gouri",
      fatherInfo: "Advocate Hanif ji Gouri",
      additionalInfo: "Residing in Kuchaman, Rajasthan",
    },
  },
  closing: {
    title: "With Heartfelt Gratitude & Duas",
    duaArabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "“May Allah bless you, shower His blessings upon you, and unite you both in goodness.”",
    message:
      "Thank you for being part of our celebration. Your presence and duas mean so much to our families. May Allah bless this union with love, mercy, peace, and barakah.",
    compliments: "With best compliments from Relatives & Friends",
    sbtFamilyCompliments: "With Best Compliments: Gouri Family",
  },
  shareDetails: {
    title: "Wedding Invitation — Sahima Gouri & Mohammed Sahil Gouri",
    messageText:
      "Wedding Invitation — Sahima Gouri & Mohammed Sahil Gouri\n\nMehfil-e-Nikah: 27 December 2026 at 4:00 PM, Jubeda Manzil, near Harnawa Patti.\n\nDawat-e-Valima: 28 December 2026 at 4:00 PM, Advocate hanif Residence, Deeppura Road, Kuchaman.\n\nWe warmly invite you to join us and bless the couple.",
  },
  qrCode: {
    imageSrc: "/images/invitation-qr.png",
    title: "Digital Invitation QR Code",
    caption:
      "Supplied wedding invitation QR code. Scan with your camera or QR reader to view.",
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: "wedding-artwork",
    title: "Wedding Floral Artwork",
    caption:
      "Commemorative illustrated wedding artwork of Sahil & Sahima with pink floral wreath and royal crest.",
    src: "/images/wedding-artwork.png",
    alt: "sahil weds sahima illustrated wedding artwork",
    tag: "Artwork",
  },
  {
    id: "printed-invitation",
    title: "Official Printed Invitation",
    caption:
      "The physical wedding invitation card featuring laser-cut Gouri Family filigree cover and royal ivory insert.",
    src: "/images/printed-invitation.jpg",
    alt: "Photograph of physical printed wedding invitation card",
    tag: "Physical Card",
  },
];
