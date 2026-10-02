import localFont from "next/font/local";

export const boska = localFont({
  src: [
    {
      path: './fonts/Boska-Extralight.otf',
      weight: '200',
      style: 'normal' 
    }
  ],
   variable: '--font-boska',
   display: 'swap',
})
