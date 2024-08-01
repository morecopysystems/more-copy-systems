
export const HeroImgs = [
  {
    title: "bussiness ",
    imgUrl: "/hero-img.jpg",
    // description:
    // "Every product is selected, roasted, and tested. Honouring the quality that the manufacturers have reliably crafted",
  },
  {
    title: " solutions",
    imgUrl: "/hero-img.jpg",
    // description:
    // "Every product is selected, roasted, and tested. Honouring the quality that the manufacturers have reliably crafted",
  },
  {
    title: "bussiness solutions",
    imgUrl: "/hero-img.jpg",
    // description:
    // "Every product is selected, roasted, and tested. Honouring the quality that the manufacturers have reliably crafted",
  },
];

export const Servicess = [
  {
    title: "SALES",
    link: "/",
    description:
      "Every product is selected, roasted, and tested. Honouring the quality that the manufacturers have reliably crafted",
  },
  {
    title: "SERVICES",
    link: "/",
    description:
      "Every product is selected, roasted, and tested. Honouring the quality that the manufacturers have reliably crafted",
  },
  {
    title: "RENTAL",
    link: "/",
    description:
      "Every product is selected, roasted, and tested. Honouring the quality that the manufacturers have reliably crafted",
  },
  {
    title: "EXCHANGE",
    link: "/",
    description:
      "Every product is selected, roasted, and tested. Honouring the quality that the manufacturers have reliably crafted",
  },
];

// <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
// <div class="elfsight-app-d28f778e-5301-4d6a-bebf-f597ff7bf0f1" data-elfsight-app-lazy></div>

interface ProductType {
  imgUrl: string;
  title: string;
}

export const ProductList = {
  Photocopiers: [
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
  ],

  Printers: [
    {
      imgUrl: "/printer-img.jpg",
      title: "BB-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "XX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
  ],

  Scanners: [
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
  ],

  Laminators: [
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
    {
      imgUrl: "/printer-img.jpg",
      title: "TX-01G400L",
      // link: "/",
    },
  ],
};

export type TProductList = keyof typeof ProductList;
