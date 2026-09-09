export type Service = {
  slug: string;
  name: string;
  summary: string;
  /** Concrete deliverables. What actually happens. */
  points: string[];
};

export type ServiceGroup = {
  id: string;
  name: string;
  kicker: string;
  description: string;
  services: Service[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "repair",
    name: "Service & Repair",
    kicker: "Keep it running",
    description:
      "Every machine we sell, we service. Most of what we service, we did not sell — bring us any brand.",
    services: [
      {
        slug: "printer-repair",
        name: "Printer repair",
        summary: "Diagnosis and repair for inkjet, ink tank and laser printers across all brands.",
        points: ["Fault diagnosis", "Part replacement", "Workshop or on-site", "All brands"],
      },
      {
        slug: "photocopier-service",
        name: "Photocopier service",
        summary: "Servicing for A3 and A4 multifunction devices — Canon, Kyocera, Konica Minolta, Xerox.",
        points: ["Copy quality faults", "Feeder and jam faults", "Drum and roller replacement", "Network and scan setup"],
      },
      {
        slug: "installation",
        name: "Installation",
        summary: "Delivery, placement, network configuration and a handover your team can actually use.",
        points: ["Site placement", "Network & Wi-Fi setup", "Scan-to-mail / folder config", "Staff walkthrough"],
      },
      {
        slug: "maintenance",
        name: "Preventive maintenance",
        summary: "Scheduled servicing so machines fail less and last longer.",
        points: ["Periodic visits", "Cleaning and calibration", "Wear-part checks", "Consumable planning"],
      },
      {
        slug: "toner-replacement",
        name: "Toner & cartridge replacement",
        summary: "Genuine or compatible, fitted and tested at the counter or at your desk.",
        points: ["Correct part matched to model", "Genuine or compatible", "Fitted and test printed", "Cartridge refilling"],
      },
    ],
  },
  {
    id: "printing",
    name: "Printing & Document Services",
    kicker: "Bring us the file",
    description:
      "Walk in with a file and walk out with the finished job. Design help included where you need it.",
    services: [
      {
        slug: "visiting-cards",
        name: "Visiting cards",
        summary: "Design and print visiting cards in the quantity you actually need.",
        points: ["Design or print-ready files", "Small and bulk runs", "Finishing options"],
      },
      {
        slug: "letterheads",
        name: "Letterhead printing & design",
        summary: "Letterheads and stationery designed and printed to match your identity.",
        points: ["Design assistance", "Short and long runs", "Paper stock choice"],
      },
      {
        slug: "certificates",
        name: "Certificate design & printing",
        summary: "Certificates for institutions, events and training programmes.",
        points: ["Template design", "Variable name printing", "Premium stock"],
      },
      {
        slug: "bulk-printing",
        name: "Bulk printing",
        summary: "High-volume document runs on production equipment, priced per job.",
        points: ["Mono and colour", "A4 and A3", "Collating and finishing"],
      },
      {
        slug: "bulk-photocopying",
        name: "Bulk photocopying",
        summary: "Large copy jobs turned around on machines built for the volume.",
        points: ["High-volume copying", "Double-sided", "Sorting and stapling"],
      },
      {
        slug: "lamination",
        name: "Lamination",
        summary: "Hot and cold lamination up to A3, on the spot.",
        points: ["A4 and A3", "Hot and cold", "Films and pouches stocked"],
      },
      {
        slug: "pvc-card-printing",
        name: "PVC & ID card printing",
        summary: "ID cards, membership cards and PVC visiting cards, printed and cut.",
        points: ["ID and membership cards", "Inkjet and direct-to-card", "Cut and finished"],
      },
      {
        slug: "photo-framing",
        name: "Photo framing",
        summary: "Photo printing and framing for offices, institutions and homes.",
        points: ["Photo printing", "Framing options"],
      },
    ],
  },
  {
    id: "rental",
    name: "Rental",
    kicker: "Use it, don't buy it",
    description:
      "Rent a photocopier or printer instead of buying one. Installation, maintenance and support are part of the deal, not extras.",
    services: [
      {
        slug: "equipment-rental",
        name: "Printer & photocopier rental",
        summary: "Short-term or long-term rental on machines matched to your monthly volume.",
        points: [
          "Short and long-term terms",
          "Installation included",
          "Maintenance and support included",
          "Machine sized to your volume",
        ],
      },
    ],
  },
  {
    id: "exchange",
    name: "Exchange",
    kicker: "Trade up",
    description:
      "Your old machine is worth something. Put its value against a current model instead of letting it sit in a corner.",
    services: [
      {
        slug: "equipment-exchange",
        name: "Equipment exchange",
        summary: "Trade in an old printer or photocopier for credit toward a new one.",
        points: [
          "Valuation on inspection",
          "Credit against a new machine",
          "All brands considered",
          "Data and settings handled",
        ],
      },
    ],
  },
];

export const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) =>
  g.services.map((s) => ({ ...s, group: g.name, groupId: g.id }))
);

/** Verifiable reasons to choose us. Nothing here is a number we cannot back up. */
export const TRUST_POINTS = [
  {
    title: "Canon authorised dealer",
    body: "Authorised dealer for Canon printers and photocopier machines in Ernakulam, Kerala.",
  },
  {
    title: "Six major brands under one roof",
    body: "Canon, Kyocera, Konica Minolta, Xerox, Epson and Brother — sales, spares and service.",
  },
  {
    title: "We service what we sell — and what we didn't",
    body: "Repair, installation and maintenance for multifunction devices across all brands.",
  },
  {
    title: "Genuine and compatible consumables",
    body: "Both options stocked, clearly labelled, matched to your exact model at the counter.",
  },
  {
    title: "Buy, rent or exchange",
    body: "Three ways to get the machine you need, including credit for the one you already own.",
  },
  {
    title: "Walk-in showroom in Kacheripady",
    body: "A physical counter on Banerji Road, Ernakulam — not a listing and a phone number.",
  },
];
