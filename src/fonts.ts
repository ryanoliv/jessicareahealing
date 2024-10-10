import localFont from "next/font/local";

// Futura Font Configuration
export const futura = localFont({
  src: [
    {
      path: "../public/fonts/futura-pt/FuturaLT-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-pt/FuturaLT-LightOblique.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/futura-pt/FuturaLT-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-pt/FuturaLT-BookOblique.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/futura-pt/FuturaLT-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-pt/FuturaLT-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-pt/FuturaLT-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});

// Brandon Grotesque Font Configuration
export const brandonGrotesque = localFont({
  src: [
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-ThinItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-MediumItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-Bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-BoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/brandon-grotesque/BrandonGrotesque-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-brandon-grotesque",
  display: "swap",
});
