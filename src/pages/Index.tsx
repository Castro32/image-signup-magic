// // import avyaImage from "../assets/B.png";
// // import { Button } from "@/components/ui/button";

// // const Index = () => {
// //   const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSctHvErxAhocF8mHRnX74T9JO0hycE4ANL3l2L4x1usxCmRYQ/viewform?usp=header";
  
// //   return (
// //     <main className="flex min-h-screen flex-col items-center justify-center bg-[#595959] p-1 sm:p-6 md:p-8">
// //       <div className="w-full sm:max-w-[1366px] animate-in fade-in duration-1000">
// //         <div className="relative overflow-hidden rounded-none sm:rounded-2xl shadow-2xl w-full min-h-[80vh] sm:min-h-[70vh] md:min-h-0 md:aspect-video">
// //           <img
// //             src={"https://res.cloudinary.com/dnacduwvj/image/upload/v1760449553/Home_3_l4s0ya.png"}
// //             alt="AVYA - Luxury Beauty Science Longevity - Coming Soon"
// //             className="absolute inset-0 h-full w-full object-cover object-center"
// //           />
// //           <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4">
// //             <Button
// //               asChild
// //               size="lg"
// //               className="group relative overflow-hidden bg-[#262626] backdrop-blur-sm px-6 py-3 sm:px-10 sm:py-4 md:px-14 md:py-5 lg:px-16 lg:py-6 text-xs sm:text-sm md:text-base font-normal tracking-wider shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[#B0C2B0] uppercase"
// //             >
// //               <a
// //                 href={googleFormUrl}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 <span className="relative z-10 text-[#FFFFFF]">SIGN UP TO BE THE FIRST TO KNOW </span>
// //               </a>
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Index;
// import { Button } from "@/components/ui/button";
// import W4 from "../assets/wp.svg";

// const Index = () => {
//   const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSctHvErxAhocF8mHRnX74T9JO0hycE4ANL3l2L4x1usxCmRYQ/viewform?usp=header";
//   const whatsappNumber = "254116444433";
//   const whatsappUrl = `https://wa.me/${whatsappNumber}`;

//   return (
//     <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
//       {/* Full-screen background image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://res.cloudinary.com/dnacduwvj/image/upload/v1760449553/Home_3_l4s0ya.png"
//           alt="AVYA - Luxury Beauty Science Longevity - Coming Soon"
//           className="h-full w-full object-cover object-center"
//         />
//       </div>

//       {/* Content overlay */}
//       <div className="relative z-10 flex min-h-screen w-full items-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4">
//         <Button
//           asChild
//           size="lg"
//           className="group relative overflow-hidden bg-[#262626] backdrop-blur-sm px-6 py-3 sm:px-10 sm:py-4 md:px-14 md:py-5 lg:px-16 lg:py-6 text-xs sm:text-sm md:text-base font-normal tracking-wider shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[#B0C2B0] uppercase"
//         >
//           <a
//             href={googleFormUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span className="relative z-10 text-[#FFFFFF]">SIGN UP TO BE THE FIRST TO KNOW</span>
//           </a>
//         </Button>
//       </div>

//       {/* Floating WhatsApp Button */}
//       <a
//         href={whatsappUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl sm:h-16 sm:w-16"
//         aria-label="Contact us on WhatsApp"
//       >
//         {/* Option 1: Use the imported SVG as an <img> */}
//         <img src={W4} alt="WhatsApp" className="h-7 w-7 sm:h-8 sm:w-8" />

//       </a>
//     </main>
//   );
// };

// export default Index;
import { Button } from "@/components/ui/button";
import W4 from "../assets/wp.svg";
import W5 from "../assets/n.png";


const Index = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSctHvErxAhocF8mHRnX74T9JO0hycE4ANL3l2L4x1usxCmRYQ/viewform?usp=header";
  const whatsappNumber = "254116444433";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src={W5}
          alt="AVYA - Luxury Beauty Science Longevity - Coming Soon"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-screen w-full items-end justify-center pb-4 sm:pb-12 md:pb-16 lg:pb-20 px-4">
        <Button
          asChild
          size="lg"
          className="group relative overflow-hidden bg-[#262626] backdrop-blur-sm px-6 py-3 sm:px-10 sm:py-4 md:px-14 md:py-5 lg:px-16 lg:py-6 text-xs sm:text-sm md:text-base font-normal tracking-wider shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[#B0C2B0] uppercase"
        >
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10 text-[#FFFFFF]">SIGN UP TO BE THE FIRST TO KNOW</span>
          </a>
        </Button>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl sm:bottom-6 sm:h-20 sm:w-20"
        aria-label="Contact us on WhatsApp"
      >
        <img
          src={W4}
          alt="WhatsApp"
          className="h-10 w-10 sm:h-12 sm:w-12"
        />
      </a>
    </main>
  );
};

export default Index;
