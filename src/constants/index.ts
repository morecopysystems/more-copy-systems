export const HeroImgs = [
  {
    title: "bussiness ",
    imgUrl: "/hero-img-1.jpg",
    // description:
    // "Every product is selected, roasted, and tested. Honouring the quality that the manufacturers have reliably crafted",
  },
  {
    title: " solutions",
    imgUrl: "/hero-imgg.jpg",
    // description:
    // "Every product is selected, roasted, and tested. Honouring the quality that the manufacturers have reliably crafted",
  },
  {
    title: "bussiness solutions",
    imgUrl: "/hero-img-2.jpg",
    // description:
    // "Every product is selected, roasted, and tested. Honouring the quality that the manufacturers have reliably crafted",
  },
];

export const Servicess = [
  {
    title: "SALES",
    link: "/sales",
    description:
      "Explore our premium range of photocopiers, printers, and printing equipment. Perfect for offices, schools, and home use, our products offer high-quality, efficient, and cost-effective printing solutions for all your needs.",
  },
  {
    title: "SERVICES",
    link: "/services",
    description:
      "We offer installation, maintenance, and repair services to keep your equipment running smoothly, with expert support to handle all your needs and minimize interruptions.",
  },
  {
    title: "SPARES & CONSUMABLES",
    link: "/spares",
    description:
      "We offer high-quality spares and consumables for printers and photocopiers, including ink, toner, paper, and replacement parts, to ensure optimal performance and minimal downtime.",
  },
  {
    title: "RENTAL",
    link: "/rental",
    description:
      "We provide flexible printer and photocopier rentals with included installation, maintenance, and support. Choose from short-term or long-term options.",
  },
  {
    title: "EXCHANGE",
    link: "/exchange",
    description:
      "Our exchange program lets you trade in old printers and photocopiers for credit towards new models, keeping your business updated with minimal cost.",
  },
];

interface ProductType {
  imgUrl: string;
  title?: string;
  desc?: string;
}

export const ProductList = {
  Photocopiers: [
    {
      title: "Xerox AltaLink C8130",
      imgUrl: "/Xerox Altalink C8130.jpg",
      desc: "Description",
    },
    {
      title: "Canon imageRUNNER 2425",
      imgUrl: "/PR01 imageRUNNER 2425.jpg",
      desc: "25 ppm, 2GB RAM, Duplex Std, WiFi Std, Mobile printing, Scan to mail & Folder, Pen Drive Printing and Scanning,\n\nimageRUNNER 2425",
      // link: "/",
    },
    {
      title: "Canon imageRUNNER 1643i II  1643iF II",
      imgUrl: "/PR02 imageRUNNER 1643i II  1643iF II.jpg",
      desc: "43 ppm, A4/LGL, 1 GB RAM, Duplex Printing, Scan to Mail & Folder\n\nimageRUNNER 1643i/ 1643iF ( Fax)",
      // link: "/",
    },
    {
      title: "Canon imageRUNNER C3326i",
      imgUrl: "/PR03 imageRUNNER C3326i.jpeg",
      desc: "26 ppm B&W and Color, 2 GB RAM, Mobile Printing, WiFi ready, Scan to mail Scan to folder, Timeline features\n\niRC 3226",
      // link: "/",
    },
    {
      title: "Canon imageRUNNER 2925 2925i",
      imgUrl: "/PR04 imageRUNNER 2925 2925i.png",
      desc: "25 ppm,\nB&W Printing,\n2 GB RAM,\nMobile Printing,\nWiFi Ready,\n2 Main Cassette with capacity of 1100 sheets.",
      // link: "/",
    },
    {
      title: "Canon imageRUNNER 2224N",
      imgUrl: "/PR05 imageRUNNER 2925 2925i.jpg",
      desc: "A3 MFD B&W 24 ppm, 1 GB RAM, Secure Prining, Mobile printing, Wifi ready, Scan to mail Scan to folder",
      // link: "/",
    },
    {
      title: "Konica Minolta bizhub 306i/266i/226i",
      imgUrl: "/PR06 bizhub 306i 266i 226i.jpg",
      desc: "A3 Colour Multifunctional Printers (MFP)\n\nSystem speed A4 -\nBizhub C266i - 26/26 ppm (mono/colour)\nBizhub C226i - 22/22 ppm (mono/colour)\nImaging technology - Laser\nSystem memory - 6 GB\nSystem storage (standard/optional) -\n8 GB microSD/256 GB SSD\nAutomatic document feeder -\nUp to 130 originals; A5-A3; 35-128 g/m²; RADF\nPaper tray input (standard) -\n1×500; A5-A3; custom sizes 60-256g/m²\nPaper tray input (optional) -\n1×500 sheets; A5-A3; custom sizes; 60-256 g/m²\n2×500 sheets; A5-A3; custom sizes; 60-256 g/m²\n1×2,500 sheets; A4; custom sizes; 60-256 g/m²\nManual bypass - 100 sheets; A6-A3; custom sizes, banner; 60-256 g/m²\nAutomatic duplexing - A5-A3; 60-256 g/m²\nOutput Capacity - Max. 250 sheets\nPrint resolution - 1,800(equivalent) × 600 dpi\nMobile printing - iOS/Android/Windows 10 Mobile; WiFi Direct\nScan modes - Scan-to-eMail, Scan-to-URL\nExclude blank documents from being scanned with blank original removal function\nScan destination - 2,000 + 100 (single + groups); LDAP support.",
      // link: "/",
    },
    {
      title: "Konica Minolta bizhub 367/287/227",
      imgUrl: "/PR07 bizhub  367 287 227.jpg",
      desc: "A3 B&W Digital Multifunctional Printer.",
      // link: "/",
    },
    {
      title: "Konica Minolta bizhub 225i/205i",
      imgUrl: "/PR08 bizhub  225i 205i.jpg",
      desc: "TECHNICAL SPECIFICATIONS\n\nSystem speed A4 - bizhub 225i: 22 ppm, bizhub 205i: 20 ppm\nImaging technology - Laser\nToner technology - Simitri® HD polymerised toner\nSystem memory - 256 MB (standard/max)\nAutomatic document feeder (optional) - Up to 130 originals\nPrintable paper size - A5-A3\nPrintable paper weight - 64-157 g/m²\nPaper input capacity - 350 sheets / 1,350 sheets (standard/max)\nPaper tray input (standard) - 1x 250; A5-A3\nPaper tray input (optional) - 1x 250 sheets; B5-A3\nManual bypass - 100 sheets; A5-A3\nAutomatic duplexing (optional) - A5-A3\nOutput capacity - Up to 250 sheets\nPrinter resolution - 600 x 600 dpi\nScan speed - Up to 55/20 ipm in simplex (mono/colour)\nScan resolution - Up to 600 x 600 dpi\nScan modes - Scan-to-eMail; Scan-to-SMB; Scan-to-FTP; Scan-to-USB; TWAIN scan\nFile formats - JPEG; TIFF; PDF\nScan destinations - 32 destinations\nCopy resolution - 600×600 dpi\nOriginal format - Max. A3\nFax - optional\nSystem features - Accounting - Up to 50 user accounts.",
      // link: "/",
    },
    {
      title: "Kyocera TASKalfa MZ3200i",
      imgUrl: "/PR09 TASKalfa MZ3200i.jpg",
      desc: "A Revolutionary Versatile Printer\n\nTECHNICAL SPECIFICATIONS\n⁃ A3/A4/Legal\n⁃ 32 pages per minute\n⁃ Copy, Print, Scan & Fax*\n⁃ Duplex Printing/Scanning\n⁃ Scan To PDF/Scan To Mail\n⁃ 1200x1200dpi Printing ERKBOCER\n⁃ Color Touch Screen 10.1 inch\n⁃ Drum Unit Life 6,00,000 copies\n⁃ Advanced Networking\n⁃  Upto 20,000 pages\n⁃ Monthly Duty Cycle up to 3,00,000 copies",
      // link: "/",
    },
    {
      title: "Kyocera TASKalfa 2020/2320/2321",
      imgUrl: "/PR10 TASKalfa 2020 2320 2321.jpg",
      desc: "KYOCERA\nDocument Solutions\n* TASKalfa 2020/2320/2321\n\nTECHNICAL SPECIFICATIONS\n\nCOPY/PRINT/SCAN/FAX\n\nMonochrome Multifunction Product For A4/A3 FORMAT,\n\nResolution is 600 × 600 dpi,\n\nScan Functions :- 300dpi Mono/Color\n\nMemory - 256 MB\n\nToner Kit = TK - 4140\n\nMaintenance Kit = MK - 4145\n\nDuplex Unit = DU - 480 (TASKalfa 2020 & 2320).\n\nCompatible Toner Kit ^available at the store _ .",
      // link: "/",
    },
    {
      title: "Kyocera ECOSYS M2040dn",
      imgUrl: "/PR11 ECOSYS M2040dn.jpg",
      desc: "KYOCERA\nDocument Solutions\n* ECOSYS M2040dn (3 in 1)\nTECHNICAL SPECIFICATIONS\n\nPRINT/COPY/SCAN\n\nMONOCHROME MULTIFUNCTION PRODUCT FOR A4 FORMAT,\n\nFast Scanning 40/23 ipm Mono/Color,\n\nHigh Printing Quality With Fine 1,200 Print Resolution,\n\nToner Kit = TK 1177 * (7,200 pages),\n\nMaintenance Kit = MK 1158 * (100,000 pages),\n\nPaper Feeder = PF 1100 : 250 sheets (Max. ×2).\n\nCompatible Toner Kit ^ available at the store _ .",
      // link: "/",
    },
  ],

  Printers: [
    {
      title: "Canon PIXMA G2730",
      imgUrl: "/canonPIXMAG2730.jpg",
      desc: '⦁ MULTI-FUNCTIONAL INKJET PRINTER | PRINT | SCAN | COPY\n⦁ ISO Standard print speed (A4): 11.0/6.0 (mono/color) images per minute*3\n⦁ Photo print speed on 10.16x15.24 cm (4"x6") - 45 seconds*3\n⦁ Print resolution of up to 4800x1200 dpi\n⦁ 100 sheets paper input\n⦁ CIS flatbed scanner, up to 600x1200 dpi, up to 99 copies\n⦁ Borderless printing supported, up to A4 (21.0x29.7 cm)\n⦁ Best suited for Document Printing, Copy and Photo Printing ',
      // link: "/",
    },
    {
      title: "Canon PIXMA G3730",
      imgUrl: "/canonPIXMAG3730.jpg",
      desc: '⦁ MULTI-FUNCTIONAL INKJET PRINTER | PRINT | SCAN | COPY | Wi-Fi \n ⦁ ISO Standard print speed (A4): 11.0/6.0 (mono/color) images per minute*3\n⦁ Photo print speed on 10.16x15.24 cm (4"x6") - 45 seconds*3\n⦁ Print resolution of up to 4800x1200 dpi\n⦁ 100 sheets paper input\n⦁ CIS flatbed scanner, up to 600x1200 dpi, up to 99 copies\n⦁ Borderless printing supported, up to A4 (21.0x29.7 cm)\n⦁ Best suited for Document Printing, Copy and Photo Printing \n',
      // link: "/",
    },
    {
      title: "Canon PIXMA G3770",
      imgUrl: "/canonPIXMA G3770.jpg",
      desc: '⦁ ISO Standard print speed (A4): 11.0/6.0 (mono/color) images per minute*3\n⦁ Photo print speed on 10.16x15.24 cm (4"x6") - 45 seconds*3\n⦁ Print resolution of up to 4800x1200 dpi\n⦁ 100 sheets paper input\n⦁ CIS flatbed scanner, up to 600x1200 dpi, up to 99 copies\n⦁ Borderless printing supported, up to A4 (21.0x29.7 cm)\n⦁ Best suited for Document Printing, Copy and Photo Printing \n',
      // link: "/",
    },
    {
      title: "Canon PIXMA G6070",
      imgUrl: "/canonPIXMA G670.jpg",
      desc: '⦁ MULTI-FUNCTIONAL INKJET PRINTER | PRINT | SCAN | COPY\n⦁ ISO Standard print speed (A4): 13.0/6.8 (mono/color) images per minute*3  \n⦁ Photo print speed on 10.16x15.24 cm (4"x6") - 47 seconds*3\n⦁ Print resolution of up to 4800x1200 dpi\n⦁ 100 sheets paper input\n⦁ CIS flatbed scanner, up to 600x1200 dpi, up to 99 copies\n⦁ Borderless printing supported, up to A4 (21.0x29.7 cm)\n⦁ Connectivity: Wi-Fi, WiFi Direct, AirPrint*4, Mopria, PIXMA Cloud Link, Canon Print Inkjet/Selphy App*5\n⦁ Best suited for Document Printing, Copy and Photo Printing \n',
      // link: "/",
    },
    {
      title: "Canon PIXMA GM2070",
      imgUrl: "/canonPIXMA G670.jpg", //replace photo
      desc: "⦁ MONOCHROME PRINTER \n⦁ SINGLE FUNCTIONAL INKJET PRINTER | PRINT | Wi-Fi \n⦁ ISO Standard print speed (A4): 13.0 (mono) images per minute*3  \n⦁ Colour Catridge is optional \n⦁ Print resolution of up to 600x1200 dpi\n⦁ 250+100 sheets paper input\n⦁ Ethernet, Wi-Fi, Wi-Fi Direct PIXMA Cloud Link, Canon Print Inkjet/Selphy App\n ⦁ Best suited for Document Printing",
      // link: "/",
    },
    {
      title: "Canon MAXIFY GX3070",
      imgUrl: "/canonMAXIFY GX3070.jpg",
      desc: "⦁ MAXIFY INK TANK PRINTERS FOR HIGH VOLUME DOCUMENT PRINTING \n ⦁ MULITI-FUNCTIONAL INKJET PRINTER | PRINT | SCAN | COPY | Wi-Fi \n ⦁ High-Perfomance Wireless Ink Tank Printer for Business Printing with 3.4cm LCD Screen\n ⦁ ISO Standard print speed (A4): 18.0/13.0 (mono/color) images per minute*3\n⦁ Print resolution of up to 4800x1200 dpi\n⦁ 3-way paper feed (250+100+1 sheets)\n⦁ Auto two-sided printing\n⦁ CIS flatbed scanner, up to 1200x2400 dpi, up to 99 copies\n⦁ Connectivity: USB, Wi-Fi with Wi-Fi Direct \n ⦁ Best suited for High Volume Document Printing",
      // link: "/",
    },
    {
      title: "Canon MAXIFY GX6070",
      imgUrl: "/canonMAXIFY GX3070.jpg", //replace photo
      desc: "⦁ MAXIFY INK TANK PRINTERS FOR HIGH VOLUME DOCUMENT PRINTING \n ⦁ MULITI-FUNCTIONAL INKJET PRINTER | PRINT | SCAN | COPY | Wi-Fi \n ⦁ Easy Refillable Ink Tank, Wireless Printer for business printing with duplex printing and 6.7cm Touch Screen\n ⦁ ISO Standard print speed (A4): 24.0/15.5 (mono/color) images per minute*3\n⦁ Print resolution of up to 600x1200 dpi\n⦁ 250+100 sheets paper input, 50 sheets ADF \n⦁ Duty Cycle of 45,000 print**1\n⦁ Ethernet, Wi-Fi, Wi-Fi Direct, AirPrint*4, MAXIFY Cloud Link, Canon Print Inkjet/Selphy App*5 \n ⦁ CIS Flatbed scanner, up to 1200x1200 dpi, up to 99 copies \n ⦁ Best suited for High Volume Document Printing",
      // link: "/",
    },
    {
      title: "Canon imageClass LBP6030b",
      imgUrl: "/canonimageCLASS LBP122.jpg",
      desc: "⦁ 18 prints per minute*3 (A4), UFR Based 5,000 prints duty cycle**1\n⦁ Print resolution of 600x600 dpi, up to 2400x600 dpi \n⦁ 150 sheets paper input, 100 sheets paper output\n⦁ Windows, Mac, Linux support\n⦁ Best suited for Document Printing for Home & Small Office Home Office",
      // link: "/",
    },
    {
      title: "Canon imageClass LBP122dw",
      imgUrl: "/canonimageCLASS LBP122.jpg",
      desc: "⦁ SINGLE FUNCTIONAL LASER PRINTER | PRINT | Wi-Fi \n⦁ Printer with duplex Printing, 4.57cm LCD screen and 256mb RAM \n⦁ 29 prints per minute*3 (A4), 20,000 prints duty cycle**1\n⦁ Print resolution of 600x600 dpi\n⦁ 150 sheets paper input, 100 sheets paper output\n⦁ Connectivity: Ethernet, Wi-Fi, Wi-Fi Direct \n⦁ Best suited for Document Printing for Small Office Home Office & SMB",
      // link: "/",
    },
    {
      title: "Canon imageClass LBP223dw",
      imgUrl: "/canonimageCLASSLBP223dw.jpg",
      desc: "⦁ 33 prints per minute*3 (A4), 80,000 prints duty cycle**1\n⦁ Print resolution of 600x600 dpi, up to 1200x1200 dpi\n⦁ 250+100 sheets paper input, 150 sheets paper output\n⦁ Windows, Mac, Linux support\n⦁ Connectivity: Ethernet, Wi-Fi, Wi-Fi Direct",
      // link: "/",
    },
    {
      title: "Canon imageClass MF244dw",
      imgUrl: "/canonimageCLASSMF244dw.jpg",
      desc: "⦁ MONOCHROME PRINTER \n⦁ Printer with duplex Printing, LCD screen and 512mb RAM\n⦁ 27 prints per minute*3 (A4), UFR, PCL6 supported, 50,000 prints duty cycle**1\n⦁ Print resolution of 600x600 dpi, up to 1200x1200 dpi\n⦁ 250+1 sheets paper input, 100 sheets paper output, 35 sheets ADF\n⦁ CIS scanner, 600 dpi, PULL and PUSH scan\n⦁ Windows, Mac, Linux support\n⦁ Connectivity: Ethernet, Wi-Fi, Wi-Fi Direct \n⦁ Best suited for Document Printing for Small Office Home Office & SMB",
      // link: "/",
    },
    {
      title: "Canon imageClass MF274dn",
      imgUrl: "/canonimageClassMF274dn.jpg",
      desc: "⦁ MULTI-FUNCTIONAL LASER PRINTER [4-in-1] PRINT | SCAN | COPY | FAX \n ⦁ Printer with Duplex Printing, Touch screen and 256mb RAM \n⦁ 29 prints per minute*3 (A4), 20,000 prints duty cycle**1\n⦁ Print resolution of 600x600 dpi\n⦁ 150 sheets paper input, 100 sheets paper output\n⦁ CIS scanner, 600 dpi, PULL and PUSH scan\n⦁ Windows, Mac, Linux support\n⦁ Connectivity: Ethernet\n⦁ 33.6 kbps Fax \n ⦁ Best suited for Document Printing for SMB",
      // link: "/",
    },
    {
      title: "Epson EcoTank L130",
      imgUrl: "/L130.jpg",
      desc: "⦁ Print resolution of 5760 dpi\n⦁ Print speed: 27 ppm (Black), 15 ppm (Color)\n⦁ ISO print speed: 7 ipm (Black), 3.5 ipm (Color)",
      // link: "/",
    },
    {
      title: "Epson EcoTank L3210",
      imgUrl: "/L3210-(1).jpg",
      desc: "⦁ Print resolution of 5760 dpi\n⦁ Print speed: 33 ppm (Black), 15 ppm (Color)\n⦁ ISO print speed: 10 ipm (Black), 5 ipm (Color)",
      // link: "/",
    },
    {
      title: "Epson EcoTank L3250",
      imgUrl: "/L3250-(1).jpg",
      desc: "⦁ Print resolution of 5760 dpi\n⦁ Print speed: 33 ppm (Black), 15 ipm (Color)\n⦁ ISO print speed: up to 10 ipm (Black), 5 ipm (Color)\n⦁ Wireless printing with Epson iPrint",
      // link: "/",
    },
    {
      title: "Epson EcoTank L8180",
      imgUrl: "/L8180.jpg",
      desc: "⦁ A3+ new 6-colour ink system\n⦁ Print, scan, copy with flatbed scanning\n⦁ Print resolution of 5760 dpi\n⦁ Borderless photo prints in sizes up to A3+\n⦁ Direct printing on CDs/DVDs\n⦁ Print speed: 32 ppm (Black/Color)",
      // link: "/",
    },
    {
      title: "Epson EcoTank L15180",
      imgUrl: "/L15150_19Cah_FDL_Black_01_2.jpg",
      desc: "⦁ Print resolution of 4800 dpi\n⦁ Print speed: 32 ppm (Black and Color)\n⦁ ISO print speed: up to 25 ipm (Black and Color)\n⦁ Wireless printing with Epson iPrint and Apple AirPrint\n⦁ Double-pass auto duplex scanning\n⦁ Double-sided printing plus ADF\n⦁ Supports Epson Print Admin\n⦁ Smudge and fade-resistant prints with pigment black ink",
      // link: "/",
    },
    {
      title: "Epson LX-1310",
      imgUrl: "/EPSON L1310.jpg",
      desc: "Epson LX-1310 Single Function Monochrome Dot Matrix Printer (Ink Cartridge)\n\nHeavy Duty Printing for 24/7 Business Solutions.\n\nThis 9-pin wide carriage printer prints at a lightning fast speed of 416 CPS (12 CPI) and has a choice of 8 built-in barcode formats for maximum versatility.\n\nNarrow carriage 9-pin SIDM High 347 CPS print speed at 12 CPI\n10,000 power on hour MTBF\nUSB, Serial and Parallel ports",
      // link: "/",
    },
    {
      title: "Epson EcoTank M200/M205",
      imgUrl: "/Epson EcoTank M200.jpg",
      desc: "⦁ Print resolution of 1440 dpi\n⦁ High print speed of 34 ppm\n⦁ USB 2.0 connectivity\n⦁ 30-page Automatic Document Feeder\n⦁ M200: USB + Network only\n⦁ M205: USB + Wi-Fi only",
      // link: "/",
    },
    {
      title: "Epson EcoTank M3170/M3180",
      imgUrl: "/M3170-3.jpg",
      desc: "⦁ Print resolution of 2400 dpi\n⦁ High print speed of 39 ppm\n⦁ ISO print speed of 20 ipm\n⦁ High-speed USB and Wi-Fi Direct connectivity\n⦁ PCL support - only for M3180\n⦁ Apple AirPrint\n⦁ Warranty of 3 years or 100,000 pages",
      // link: "/",
    },
    {
      title: "Epson EcoTank M15180",
      imgUrl: "/M15180 (1).jpg",
      desc: "⦁ Print resolution of 4800 dpi\n⦁ High print speed of 32 ppm\n⦁ ISO print speed of 25 ipm\n⦁ Hi-speed USB connectivity\n⦁ Supports Epson Print Admin\n⦁ Double-pass auto duplex scanning\n⦁ Wireless printing with Epson iPrint and Apple AirPrint\n⦁ Warranty of 1 year or 350,000 pages",
      // link: "/",
    },
    {
      title: "Epson PictureMate PM520",
      imgUrl: "/PM-520-01.png",
      desc: '⦁	Print resolution of 5760 dpi\n⦁	Print speed - 36 secs per 10cm x 15cm (4" x 6") borderless photo\n⦁	6.9 cm (2.7") LCD screen\n⦁	Custom template for passport and Visa photos \n⦁	Economical 8-up (2/4/6/8) Passport size and 16-up Stamp-size photos\n⦁	PictBridge, USB direct, built-in memory card slot\n⦁	Wireless printing with Epson iPrint and Apple AirPrint',
      // link: "/",
    },

    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother.jpg",
      desc: "Description",
      // link: "/",
    },
    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother1.jpg",
      desc: "Description",
      // link: "/",
    },
    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother2.jpg",
      desc: "Description",
      // link: "/",
    },
    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother3.jpg",
      desc: "Description",
      // link: "/",
    },
    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother4.jpg",
      desc: "Description",
      // link: "/",
    },
    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother5.jpg",
      desc: "Description",
      // link: "/",
    },
    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother6.jpg",
      desc: "Description",
      // link: "/",
    },
    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother7.jpg",
      desc: "Description",
      // link: "/",
    },
    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother8.jpg",
      desc: "Description",
      // link: "/",
    },
    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother9.jpg",
      desc: "Description",
      // link: "/",
    },
    {
      title: "Brother DCP-B7500D",
      imgUrl: "/brother10.jpg",
      desc: "Description",
      // link: "/",
    },
  ],

  Scanners: [
    {
      imgUrl: "/scanner.jpg",
      title: "Epson DS-530 II",
      desc: "⦁ Compact A4 business scanner\n⦁ Auto Document Scan and Double Feed Detection Skip\n⦁ 50-page ADF\n⦁ Scan speed: Up to 35 ppm / 70 ipm\n⦁ Wide range of media handling options for efficient document capture and sharing",
      // link: "/",
    },
    {
      imgUrl: "/scanner.jpeg",
      title: "Canon DR-C225 ",
      desc: "⦁ Maximize desk space with its slim design\n⦁ Feeder capacity: 30 sheets\n⦁ Speed: 25 ppm / 50 ipm\n⦁ Scanning resolution: 600 dpi",
      // link: "/",
    },
  ],

  Laminators: [
    {
      imgUrl: "/Laminator.jpg",
      title: "Laminating Metal Machine",
      desc: "Professional Lamination/Laminating Metal Machine | Hot & Cold | A3 Laminator 12.6 inch",
      // link: "/",
    },
    {
      imgUrl: "/Laminator .jpg",
      title: "Laminating Metal Machine",
      desc: "A3 size Laminator\nHi-quality Thermal Laminator\nSilicon Rollers\nPower failure releasing knob\nUser Friendly\nCompact Design\nPower: AC 220-240V/50Hz\nPower Consumption: 620 W\nTemperature Range: 80-180°C\nMax. Laminating width: 330mm",
      // link: "/",
    },
    {
      imgUrl: "/Lamination Machine .jpg",
      title: "Laminating Metal Machine",
      desc: "",
      // link: "/",
    },
  ],
  Binders: [
    {
      imgUrl: "/binders (1).jpg",
      title: "Spiral Binding Machine",
      desc: "Spiral Binding Machine A4 / 14-16 Sheets of 70 GSM & 40 Holes Heavy Duty Machine ",
      // link: "/",
    },
    {
      imgUrl: "/binders (2).jpg",
      title: "Spiral Binding Machine",
      desc: "",
      // link: "/",
    },
    {
      imgUrl: "/binders (3).jpg",
      title: "Spiral Binding Machine",
      desc: "",
      // link: "/",
    },
    {
      imgUrl: "/binders (4).jpg",
      title: "Spiral Binding Machine",
      desc: "",
      // link: "/",
    },
    {
      imgUrl: "/binders (5).jpg",
      title: "Spiral Binding Machine",
      desc: "",
      // link: "/",
    },
  ],
  Inks: [
    {
      imgUrl: "/INKS AND CARTRIDGES.jpg",
      title: "",
      desc: "",
      // link: "/",
    },
    {
      imgUrl: "/EPSON EcoTank GENUINE INK.png",
      title: "EPSON EcoTank GENUINE INK",
      desc: "Suitable for :-\n001 :- L4100/ L4200/ L6100/ L6200/ L14100 .\n\n005 :- M1110/ M1120/ M1140/ M1170/ M1180/ M2110/ M2120/ M2140/ M2170/ M3140/ M3170/ M3180 .\n\n008 :- L6460/ L6490/ L6570/ L6580/ L15150/ L15160/ L15180/ L15140/ M15180 .\n\n774 :- M100/ M105/ M200/ M205/ L605/ L655/ L1455\n\n005 :- M1110/ M1120/ M1140/ M1170/ M1180/ M2110/ M2120/ M2140/ M2170/ M3140/ M3170/ M3180 .\n\n008 :- L6460/ L6490/ L6570/ L6580/ L15150/ L15160/ L15180/ L15140/ M15180 .\n\n774 :- M100/ M105/ M200/ M205/ L605/ L655/ L1455",
      // link: "/",
    },
    {
      imgUrl: "/664 GENUINE EPSON INK.png",
      title: "664 GENUINE EPSON INK",
      desc: "Suitable For Series :-\nL100/ L110/ L130/ L200/ L300/ L310/ L350/ L355/ LL360/ L361/ L365/ L380/ L385/ L405/ L455/ L485/ L550/ L555/ L565/ LL1300",
      // link: "/",
    },
    {
      imgUrl: "/003 GENUINE EPSON ecotank INK.png",
      title: "003 GENUINE EPSON ecotank INK",
      desc: "Suitable For Series :-\nL1100, L1200, L3100, L3200, L5100, L5200",
      // link: "/",
    },
    {
      imgUrl: "/71 Canon PIXMA GENUINE INK.png",
      title: "71 Canon PIXMA GENUINE INK",
      desc: "Suitable For :-\nG1020/ G1730/ G1737/ G2020/ G2021/ G2060/ G2730/ G2770/ G3020/ G3021/ G3060/ G3730/ G3770/ G4770",
      // link: "/",
    },
    {
      imgUrl: "/790 Canon PIXMA GENUINE INK.png",
      title: "790 Canon PIXMA GENUINE INK",
      desc: "Suitable For :-\nG1000/ G1010/ G2000/ G2002/ G2010/ G2012/ G3000/ G3010/ G3012/ G4000/ G4010",
      // link: "/",
    },
    {
      imgUrl: "/KYOCERA DOCUMENT SOLUTIONS TONER KIT .png",
      title: "KYOCERA DOCUMENT SOLUTIONS TONER CARTRIDGE",
      desc: "KYOCERA DOCUMENT SOLUTIONS TONER KIT SUITABLE FOR :- \n• TK 1178 = ECOSYS M2040dn, M2540dn, M2640idw.\n• TK 4109 = TASKalfa 1800\n • TK 4140 = TASKalfa  2020/2320/2321\n• TK 7120 = TASKalfa 3212i\n• Both Original & Compatible Cartridges Available With Us !",
      // link: "/",
    },
    {
      imgUrl: "/12A.jpg",
      title: "Laser Printer Toner Cartridge - ETC 12A",
      desc: "For Use in : HP, Canon - \nH LJ 1010/1012/1015/1018/1020\n/1022/1022N/1022NW/3015/3020\n/3030/3050/3050AI0/3052\n/3055/M1005/M1005/MFP/MI319F\n MFP /CLSLBP2900/2900B/3000",
      // link: "/",
    },
    {
      imgUrl: "/88A.jpg",
      title: "Laser Printer Toner Cartridge - ETC 88A",
      desc: "•For Use in :HP, Canon - \nH LJ P1007/P1008/1106/1108\n/M1136/1213NF//1216NFH/MFP\n MI26nW/M128fw/2020n/202dw",
      // link: "/",
    },
    {
      imgUrl: "/925.jpg",
      title: "Laser Printer Toner Cartridge \n- ETC 925",
      desc: "For Use in : HP, Canon\n- HLJ Pro P1100/P1102/P1102w/P1110\n/M1130/M1132/M1210/M1212nf/1214/ \nM1217nfw/M1219/CLS LBP6000/6018/C \ni-S LBP6020/6030/6040CiC\n LBP6030w/Mf3010/ CiC MF3010",
      // link: "/",
    },
    {
      imgUrl: "/337.jpg",
      title: "Laser Printer Toner Cartridge - ETC 337",
      desc: "* For Use in : Canon -\n MF229dw/226dn/221d/223d /\n 227dw/216n/215/212w/211/\n217w/232w/233n/236n/243d/246dn\n/249dw/L151dw",
      // link: "/",
    },
  ],
  Papers: [
    {
      imgUrl: "/ink8.png",
      title: "Copier Papers",
      desc: "Copier Paper Supply!\n\nSIZE - A4, FS, A3 ....\nGSM - 70, 75, 80, 90 ....\n\n* Manufactured using environmentally sustainable practices\n* Premium quality multipurpose office paper\n* Smooth runnability in all digital copiers & printers\n* Excellent for double-side printing\n* Crisp image formation with superior photo imaging\n* Faster drying for quicker handling\n* Elemental Chlorine Free (ECF) - SAFE.GREEN.CLEAN\n* Brighter & whiter copy/print/fax\n\nCopier Paper and High Quality Office Paper\n\nWidest range of cut size premium quality office & copier paper made using fiber obtained from social farm forestry, designed for high-end versatile printing and copying applications. Includes products for high-end color printing, black & white printing, photo copying, pamphlet printing, letterheads, and legal & accounting documentation.\n\n◦ Premium multipurpose office paper\n◦ Manufactured from plantation wood pulp: 100% ECF\n◦ High whiteness & brightness - acid-free long-lasting paper\n◦ ColorLok technology for bolder black, vivid colors & faster drying\n◦ Highly automated manufacturing technology with TWT\n◦ Suitable for any job on office printers (xerography, inkjet, laserjet, fax)\n◦ Ideal for impressive color printing, training manuals, and assignments.\n\nTested under standard conditions and serving you with pride. Outperforms any ordinary paper.\n\n♻️ Recyclable paper",
      // link: "/",
    },
  ],
  PaperCutters: [
    {
      imgUrl: "/Heavy duty Paper Cutter (Rim Cutter).jpg",
      title: "HEAVY DUTY PAPER CUTTER",
      desc: "HEAVY DUTY PAPER CUTTER\n\nAvailable!\n\nModel - KS 858\nSize - A3+ / 17inch\nMaterial - Mild Steel\nAutomation grade (cutting mode) - Manual\nBase Material - Metal\nCutting Height - 40mm\nMax Cutting Thickness - 40mm\n\nRobust and sturdy SS blade,\nWith an adjustable paper clamp,\nBlade is also easily replaceable,\nWith computer generated grid in inches,\nCut Through 400 to 500 sheets of 80GSM paper,\n\nMachine Size - 26×24×7.5\nWeight - 19kg",
      // link: "/",
    },
    {
      imgUrl: "/rim-cutter-ks-858-a-3.png",
      title: "Rim Cutter",
      desc: "",
      // link: "/",
    },
    {
      imgUrl: "/Paper Cutter .jpg",
      title: "Paper Cutter",
      desc: "",
      // link: "/",
    },
    {
      imgUrl: "/Paper Cutter  A4.jpg",
      title: "A4 Paper Cutter",
      desc: "A4 Paper Cutter\n\nA4 Size, Fs legal Size, A3 Size\n\nBest For Xerox shop, CSC Center, Gift Shop, Office Supplies",
      // link: "/",
    },
  ],
};

export type TProductList = keyof typeof ProductList;
