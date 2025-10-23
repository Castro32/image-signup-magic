// import avyaImage from "../assets/bg.png";
// import { Button } from "@/components/ui/button";

// const Index = () => {
//   const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSctHvErxAhocF8mHRnX74T9JO0hycE4ANL3l2L4x1usxCmRYQ/viewform?usp=header";
  
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-[#595959] p-4 sm:p-6 md:p-8">
//       <div className="w-full max-w-[1366px] animate-in fade-in duration-1000">
//         <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl w-full min-h-[80vh] sm:min-h-[70vh] md:min-h-0 md:aspect-video">
//           <img
//             src={avyaImage}
//             alt="AVYA - Luxury Beauty Science Longevity - Coming Soon"
//             className="absolute inset-0 h-full w-full object-cover sm:object-cover object-center"
//           />
//           <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4">
//             <Button
//               asChild
//               size="lg"
//               className="group relative overflow-hidden bg-white/95 backdrop-blur-sm px-6 py-3 sm:px-10 sm:py-4 md:px-14 md:py-5 lg:px-16 lg:py-6 text-xs sm:text-sm md:text-base font-normal tracking-wider shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white uppercase"
//             >
//               <a
//                 href={googleFormUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="relative z-10 text-[#4A4A4A]">SIGN UP TO BE THE FIRST TO KNOW </span>
//               </a>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Index;
import avyaImage from "../assets/B.png";
import { Button } from "@/components/ui/button";

const Index = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSctHvErxAhocF8mHRnX74T9JO0hycE4ANL3l2L4x1usxCmRYQ/viewform?usp=header";
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#595959] p-1 sm:p-6 md:p-8">
      <div className="w-full sm:max-w-[1366px] animate-in fade-in duration-1000">
        <div className="relative overflow-hidden rounded-none sm:rounded-2xl shadow-2xl w-full min-h-[80vh] sm:min-h-[70vh] md:min-h-0 md:aspect-video">
          <img
            src={avyaImage}
            alt="AVYA - Luxury Beauty Science Longevity - Coming Soon"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4">
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
                <span className="relative z-10 text-[#FFFFFF]">SIGN UP TO BE THE FIRST TO KNOW </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;