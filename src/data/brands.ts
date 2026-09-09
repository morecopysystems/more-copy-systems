export type BrandName =
  | "Canon"
  | "Kyocera"
  | "Konica Minolta"
  | "Xerox"
  | "Epson"
  | "Brother"
  | "Multi-brand";

export type Brand = {
  name: Exclude<BrandName, "Multi-brand">;
  logo: string;
  /** What this brand is actually used for in the shop — no marketing filler. */
  focus: string;
  /** Category slugs where this brand appears. */
  strengths: string[];
};

export const BRANDS: Brand[] = [
  {
    name: "Canon",
    logo: "/canonpng.png",
    focus:
      "imageRUNNER photocopiers, imageCLASS laser printers and PIXMA / MAXIFY ink tank machines. We are a Canon authorised dealer.",
    strengths: ["Photocopiers", "Printers", "Toner & ink"],
  },
  {
    name: "Kyocera",
    logo: "/kyoserapng.png",
    focus:
      "TASKalfa and ECOSYS multifunction devices built for long duty cycles and low cost per page.",
    strengths: ["Photocopiers", "Toner kits"],
  },
  {
    name: "Konica Minolta",
    logo: "/konicapng.png",
    focus: "bizhub A3 mono and colour multifunction printers for mid to high volume offices.",
    strengths: ["Photocopiers"],
  },
  {
    name: "Xerox",
    logo: "/xeroxpng.png",
    focus: "AltaLink A3 colour multifunction systems for demanding workgroups.",
    strengths: ["Photocopiers"],
  },
  {
    name: "Epson",
    logo: "/epsonpng.png",
    focus:
      "EcoTank and MAXIFY-class ink tank printers, dot matrix, photo printers and document scanners.",
    strengths: ["Printers", "Scanners", "Genuine ink"],
  },
  {
    name: "Brother",
    logo: "/brotherpng.png",
    focus: "Compact mono laser printers and all-in-one machines for small offices.",
    strengths: ["Printers"],
  },
];
