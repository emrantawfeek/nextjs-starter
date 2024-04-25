// TODO Local Fonts
// import local from "next/font/local";
// export const fontName = local({
//   src: [
//     {
//       path: "../public/fonts/fontfull",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-fontName",
// });
// ----------------------------
// TODO Google Fonts
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
