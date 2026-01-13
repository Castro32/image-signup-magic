// // // // // // // // import avyaImage from "../assets/B.png";
// // // // // // // // import { Button } from "@/components/ui/button";

// // // // // // // // const Index = () => {
// // // // // // // //   const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSctHvErxAhocF8mHRnX74T9JO0hycE4ANL3l2L4x1usxCmRYQ/viewform?usp=header";
  
// // // // // // // //   return (
// // // // // // // //     <main className="flex min-h-screen flex-col items-center justify-center bg-[#595959] p-1 sm:p-6 md:p-8">
// // // // // // // //       <div className="w-full sm:max-w-[1366px] animate-in fade-in duration-1000">
// // // // // // // //         <div className="relative overflow-hidden rounded-none sm:rounded-2xl shadow-2xl w-full min-h-[80vh] sm:min-h-[70vh] md:min-h-0 md:aspect-video">
// // // // // // // //           <img
// // // // // // // //             src={"https://res.cloudinary.com/dnacduwvj/image/upload/v1760449553/Home_3_l4s0ya.png"}
// // // // // // // //             alt="AVYA - Luxury Beauty Science Longevity - Coming Soon"
// // // // // // // //             className="absolute inset-0 h-full w-full object-cover object-center"
// // // // // // // //           />
// // // // // // // //           <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4">
// // // // // // // //             <Button
// // // // // // // //               asChild
// // // // // // // //               size="lg"
// // // // // // // //               className="group relative overflow-hidden bg-[#262626] backdrop-blur-sm px-6 py-3 sm:px-10 sm:py-4 md:px-14 md:py-5 lg:px-16 lg:py-6 text-xs sm:text-sm md:text-base font-normal tracking-wider shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[#B0C2B0] uppercase"
// // // // // // // //             >
// // // // // // // //               <a
// // // // // // // //                 href={googleFormUrl}
// // // // // // // //                 target="_blank"
// // // // // // // //                 rel="noopener noreferrer"
// // // // // // // //               >
// // // // // // // //                 <span className="relative z-10 text-[#FFFFFF]">SIGN UP TO BE THE FIRST TO KNOW </span>
// // // // // // // //               </a>
// // // // // // // //             </Button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </main>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Index;
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import W4 from "../assets/wp.svg";

// // // // // // // const Index = () => {
// // // // // // //   const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSctHvErxAhocF8mHRnX74T9JO0hycE4ANL3l2L4x1usxCmRYQ/viewform?usp=header";
// // // // // // //   const whatsappNumber = "254116444433";
// // // // // // //   const whatsappUrl = `https://wa.me/${whatsappNumber}`;

// // // // // // //   return (
// // // // // // //     <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
// // // // // // //       {/* Full-screen background image */}
// // // // // // //       <div className="absolute inset-0">
// // // // // // //         <img
// // // // // // //           src="https://res.cloudinary.com/dnacduwvj/image/upload/v1760449553/Home_3_l4s0ya.png"
// // // // // // //           alt="AVYA - Luxury Beauty Science Longevity - Coming Soon"
// // // // // // //           className="h-full w-full object-cover object-center"
// // // // // // //         />
// // // // // // //       </div>

// // // // // // //       {/* Content overlay */}
// // // // // // //       <div className="relative z-10 flex min-h-screen w-full items-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4">
// // // // // // //         <Button
// // // // // // //           asChild
// // // // // // //           size="lg"
// // // // // // //           className="group relative overflow-hidden bg-[#262626] backdrop-blur-sm px-6 py-3 sm:px-10 sm:py-4 md:px-14 md:py-5 lg:px-16 lg:py-6 text-xs sm:text-sm md:text-base font-normal tracking-wider shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[#B0C2B0] uppercase"
// // // // // // //         >
// // // // // // //           <a
// // // // // // //             href={googleFormUrl}
// // // // // // //             target="_blank"
// // // // // // //             rel="noopener noreferrer"
// // // // // // //           >
// // // // // // //             <span className="relative z-10 text-[#FFFFFF]">SIGN UP TO BE THE FIRST TO KNOW</span>
// // // // // // //           </a>
// // // // // // //         </Button>
// // // // // // //       </div>

// // // // // // //       {/* Floating WhatsApp Button */}
// // // // // // //       <a
// // // // // // //         href={whatsappUrl}
// // // // // // //         target="_blank"
// // // // // // //         rel="noopener noreferrer"
// // // // // // //         className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl sm:h-16 sm:w-16"
// // // // // // //         aria-label="Contact us on WhatsApp"
// // // // // // //       >
// // // // // // //         {/* Option 1: Use the imported SVG as an <img> */}
// // // // // // //         <img src={W4} alt="WhatsApp" className="h-7 w-7 sm:h-8 sm:w-8" />

// // // // // // //       </a>
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Index;
// // // // // // import { useState } from "react";
// // // // // // import W4 from "../assets/wp.svg";
// // // // // // import W5 from "../assets/n.png";


// // // // // // const Index = () => {
// // // // // //   const whatsappNumber = "254116444433";
// // // // // //   const whatsappUrl = `https://wa.me/${whatsappNumber}`;

// // // // // //   const [email, setEmail] = useState('');
// // // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // //   const [error, setError] = useState<string | null>(null);
// // // // // //   const [success, setSuccess] = useState(false);

// // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     const normalizedEmail = email.toLowerCase().trim();
    
// // // // // //     if (!normalizedEmail || !normalizedEmail.includes('@')) {
// // // // // //       setError('Please enter a valid email address.');
// // // // // //       return;
// // // // // //     }
    
// // // // // //     setIsSubmitting(true);
// // // // // //     setError(null);

// // // // // //     try {
// // // // // //       // Call your backend API endpoint
// // // // // //       const response = await fetch('/api/subscribe', {
// // // // // //         method: 'POST',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //         },
// // // // // //         body: JSON.stringify({ email: normalizedEmail }),
// // // // // //       });

// // // // // //       const data = await response.json();

// // // // // //       if (!response.ok) {
// // // // // //         // Handle different error types
// // // // // //         if (data.title === 'Member Exists') {
// // // // // //           setError('This email is already subscribed to our newsletter.');
// // // // // //         } else if (data.title === 'Invalid Resource') {
// // // // // //           setError('Please enter a valid email address.');
// // // // // //         } else {
// // // // // //           setError(data.detail || 'Failed to subscribe. Please try again.');
// // // // // //         }
// // // // // //         return;
// // // // // //       }

// // // // // //       setSuccess(true);
// // // // // //       setEmail('');
// // // // // //       setTimeout(() => setSuccess(false), 3000);
// // // // // //     } catch (err) {
// // // // // //       setError('Failed to subscribe. Please try again.');
// // // // // //     } finally {
// // // // // //       setIsSubmitting(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
// // // // // //       {/* Full-screen background image */}
// // // // // //       <div className="absolute inset-0">
// // // // // //         <img
// // // // // //           src={W5}
// // // // // //           alt="AVYA - Luxury Beauty Science Longevity - Coming Soon"
// // // // // //           className="h-full w-full object-cover object-center"
// // // // // //         />
// // // // // //       </div>

// // // // // //       {/* Content overlay */}
// // // // // //       <div className="relative z-10 flex min-h-screen w-full items-end justify-center pb-4 sm:pb-12 md:pb-16 lg:pb-20 px-4">
// // // // // //         <div className="space-y-6 flex-1 max-w-md">
// // // // // //           {/* <h2 className="text-5xl md:text-6xl font-light font-hatton text-[#595959]">
// // // // // //             Join the AVYA community.
// // // // // //           </h2> */}
// // // // // //           <p className="text-white text-l leading-relaxed">
// // // // // //             Be the first to know about our events and new services.
// // // // // //           </p>
// // // // // //           <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
// // // // // //             <input
// // // // // //               type="email"
// // // // // //               value={email}
// // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // //               placeholder="Your Email"
// // // // // //               className="flex-1 px-4 py-3 bg-white/50 border border-black/20 rounded-lg text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-white/30 font-sans"
// // // // // //             />
// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               disabled={isSubmitting}
// // // // // //               className="px-6 py-3 bg-white text-[#262626] rounded-lg hover:bg-white/90 transition-colors font-sans disabled:bg-gray-400"
// // // // // //             >
// // // // // //               {isSubmitting ? 'Subscribing...' : 'SUBSCRIBE'}
// // // // // //             </button>
// // // // // //           </form>
// // // // // //           {error && <p className="text-red-400 text-sm">{error}</p>}
// // // // // //           {success && <p className="text-green-400 text-sm">Thank you for Joining Avya Community!</p>}
// // // // // //           {/* <p className="text-sm text-[#595959]">
// // // // // //             By signing up to receive emails from AVYA, you agree to our{' '}
// // // // // //             <a href="#" className="underline hover:text-[#595959] transition-colors">
// // // // // //               Privacy Policy
// // // // // //             </a>
// // // // // //             .
// // // // // //           </p> */}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Floating WhatsApp Button */}
// // // // // //       <a
// // // // // //         href={whatsappUrl}
// // // // // //         target="_blank"
// // // // // //         rel="noopener noreferrer"
// // // // // //         className="fixed bottom-12 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl sm:bottom-6 sm:h-20 sm:w-20"
// // // // // //         aria-label="Contact us on WhatsApp"
// // // // // //       >
// // // // // //         <img
// // // // // //           src={W4}
// // // // // //           alt="WhatsApp"
// // // // // //           className="h-10 w-10 sm:h-12 sm:w-12"
// // // // // //         />
// // // // // //       </a>
// // // // // //     </main>
// // // // // //   );
// // // // // // };

// // // // // // export default Index;
// // // // // import { useState } from "react";
// // // // // import W4 from "../assets/wp.svg"; // Assuming this is still for WhatsApp
// // // // // import W5 from "../assets/EMS.png"; // Placeholder for the background image

// // // // // const ComingSoon = () => {
// // // // //   const whatsappNumber = "254116444433"; // Keep WhatsApp for general inquiries
// // // // //   const whatsappUrl = `https://wa.me/${whatsappNumber}`;

// // // // //   const [email, setEmail] = useState('');
// // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // //   const [error, setError] = useState<string | null>(null);
// // // // //   const [success, setSuccess] = useState(false);

// // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     const normalizedEmail = email.toLowerCase().trim();

// // // // //     if (!normalizedEmail || !normalizedEmail.includes('@')) {
// // // // //       setError('Please enter a valid email address.');
// // // // //       return;
// // // // //     }

// // // // //     setIsSubmitting(true);
// // // // //     setError(null);

// // // // //     try {
// // // // //       // You would replace this with your actual backend endpoint for tenant inquiries
// // // // //       const response = await fetch('/api/tenant-inquiry', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //         },
// // // // //         body: JSON.stringify({ email: normalizedEmail, message: 'Interested in occupying space at EMS Mall.' }),
// // // // //       });

// // // // //       const data = await response.json();

// // // // //       if (!response.ok) {
// // // // //         setError(data.detail || 'Failed to send inquiry. Please try again.');
// // // // //         return;
// // // // //       }

// // // // //       setSuccess(true);
// // // // //       setEmail('');
// // // // //       setTimeout(() => setSuccess(false), 3000); // Clear success message after 3 seconds
// // // // //     } catch (err) {
// // // // //       setError('Failed to send inquiry. Please try again.');
// // // // //     } finally {
// // // // //       setIsSubmitting(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
// // // // //       {/* Full-screen background image */}
// // // // //       <div className="absolute inset-0">
// // // // //         <img
// // // // //           src={W5}
// // // // //           alt="EMS Mall - Coming Soon"
// // // // //           className="h-full w-full object-cover object-center"
// // // // //         />
// // // // //       </div>

// // // // //       {/* Content overlay */}
// // // // //       <div className="relative z-10 flex min-h-screen w-full items-end justify-center pb-4 sm:pb-12 md:pb-16 lg:pb-20 px-4 bg-black/40"> {/* Added a dark overlay for text readability */}
// // // // //         <div className="space-y-6 flex-1 max-w-md text-center"> {/* Centered content */}
          
// // // // //           <p className="text-white text-lg leading-relaxed mt-4">
// // // // //             Be part of the next big retail experience.
// // // // //             <br />
// // // // //             Tenants interested in occupying space, please send us your inquiry.
// // // // //           </p>
// // // // //           <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-6">
// // // // //             <input
// // // // //               type="email"
// // // // //               value={email}
// // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // //               placeholder="Your Email"
// // // // //               className="flex-1 px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 font-sans"
// // // // //             />
// // // // //             <button
// // // // //               type="submit"
// // // // //               disabled={isSubmitting}
// // // // //               className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-sans disabled:bg-gray-400"
// // // // //             >
// // // // //               {isSubmitting ? 'Sending Inquiry...' : 'INQUIRE NOW'}
// // // // //             </button>
// // // // //           </form>
// // // // //           {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
// // // // //           {success && <p className="text-green-400 text-sm mt-2">Thank you for your inquiry! We will get in touch soon.</p>}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Floating WhatsApp Button */}
// // // // //       {/* <a
// // // // //         href={whatsappUrl}
// // // // //         target="_blank"
// // // // //         rel="noopener noreferrer"
// // // // //         className="fixed bottom-12 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl sm:bottom-6 sm:h-20 sm:w-20"
// // // // //         aria-label="Contact us on WhatsApp"
// // // // //       >
// // // // //         <img
// // // // //           src={W4}
// // // // //           alt="WhatsApp"
// // // // //           className="h-10 w-10 sm:h-12 sm:w-12"
// // // // //         />
// // // // //       </a> */}
// // // // //     </main>
// // // // //   );
// // // // // };

// // // // // export default ComingSoon;
// // // // import { useState } from "react";
// // // // import W4 from "../assets/wp.svg"; // Assuming this is still for WhatsApp
// // // // import W5 from "../assets/EMS.png"; // Placeholder for the background image

// // // // const ComingSoon = () => {
// // // //   const whatsappNumber = "254116444433"; // Keep WhatsApp for general inquiries
// // // //   const whatsappUrl = `https://wa.me/${whatsappNumber}`;

// // // //   const [email, setEmail] = useState('');
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [error, setError] = useState<string | null>(null);
// // // //   const [success, setSuccess] = useState(false);

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     const normalizedEmail = email.toLowerCase().trim();

// // // //     if (!normalizedEmail || !normalizedEmail.includes('@')) {
// // // //       setError('Please enter a valid email address.');
// // // //       return;
// // // //     }

// // // //     setIsSubmitting(true);
// // // //     setError(null);

// // // //     try {
// // // //       // You would replace this with your actual backend endpoint for tenant inquiries
// // // //       const response = await fetch('/api/tenant-inquiry', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({ email: normalizedEmail, message: 'Interested in occupying space at EMS Mall.' }),
// // // //       });

// // // //       const data = await response.json();

// // // //       if (!response.ok) {
// // // //         setError(data.detail || 'Failed to send inquiry. Please try again.');
// // // //         return;
// // // //       }

// // // //       setSuccess(true);
// // // //       setEmail('');
// // // //       setTimeout(() => setSuccess(false), 3000); // Clear success message after 3 seconds
// // // //     } catch (err) {
// // // //       setError('Failed to send inquiry. Please try again.');
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
// // // //       {/* Full-screen background image using a div with background-image */}
// // // //       <div
// // // //         className="absolute inset-0 bg-cover bg-center"
// // // //         style={{ backgroundImage: `url(${W5})` }}
// // // //       ></div>

// // // //       {/* Content overlay */}
// // // //       <div className="relative z-10 flex min-h-screen w-full items-end justify-center pb-4 sm:pb-12 md:pb-16 lg:pb-20 px-4 bg-black/40"> {/* Added a dark overlay for text readability */}
// // // //         <div className="space-y-6 flex-1 max-w-md text-center"> {/* Centered content */}
// // // //           {/* You might want to add a logo or title here, perhaps "EMS Mall" */}
// // // //           {/* <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
// // // //             EMS Mall
// // // //           </h1> */}
// // // //           <p className="text-white text-lg leading-relaxed mt-4">
// // // //             Be part of the next big retail experience.
// // // //             <br />
// // // //             Tenants interested in occupying space, please send us your inquiry.
// // // //           </p>
// // // //           <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-6">
// // // //             <input
// // // //               type="email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               placeholder="Your Email"
// // // //               className="flex-1 px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 font-sans"
// // // //             />
// // // //             <button
// // // //               type="submit"
// // // //               disabled={isSubmitting}
// // // //               className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-sans disabled:bg-gray-400"
// // // //             >
// // // //               {isSubmitting ? 'Sending Inquiry...' : 'INQUIRE NOW'}
// // // //             </button>
// // // //           </form>
// // // //           {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
// // // //           {success && <p className="text-green-400 text-sm mt-2">Thank you for your inquiry! We will get in touch soon.</p>}
// // // //         </div>
// // // //       </div>

// // // //       {/* Floating WhatsApp Button */}
// // // //       {/* <a
// // // //         href={whatsappUrl}
// // // //         target="_blank"
// // // //         rel="noopener noreferrer"
// // // //         className="fixed bottom-12 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl sm:bottom-6 sm:h-20 sm:w-20"
// // // //         aria-label="Contact us on WhatsApp"
// // // //       >
// // // //         <img
// // // //           src={W4}
// // // //           alt="WhatsApp"
// // // //           className="h-10 w-10 sm:h-12 sm:w-12"
// // // //         />
// // // //       </a> */}
// // // //     </main>
// // // //   );
// // // // };

// // // // export default ComingSoon;
// // // import { useState } from "react";
// // // import W5 from "../assets/logo.png";

// // // const ComingSoon = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [error, setError] = useState<string | null>(null);
// // //   const [success, setSuccess] = useState(false);

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     const normalizedEmail = email.toLowerCase().trim();
// // //     url_form = 'https://docs.google.com/forms/d/e/1FAIpQLSdlzL80mwB7sPJh9KZeOWN8YrgyuDEG3lzFdtOqwYRcLfFByA/viewform?usp=header'

// // //     if (!normalizedEmail || !normalizedEmail.includes('@')) {
// // //       setError('Please enter a valid email address.');
      
// // //       return;
// // //     }

// // //     setIsSubmitting(true);
// // //     setError(null);
// // //     setSuccess(false); 

// // //     try {
      
// // //       const response = await fetch('/api/tenant-inquiry', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ email: normalizedEmail, message: 'Interested in occupying space at EMS Mall.' }),
// // //       });

// // //       const data = await response.json();

// // //       if (!response.ok) {
// // //         setError(data.detail || 'Failed to send inquiry. Please try again.');
// // //         return;
// // //       }

// // //       setSuccess(true);
// // //       setEmail(''); 
// // //       setTimeout(() => setSuccess(false), 3000); 
// // //     } catch (err) {
// // //       setError('Failed to send inquiry. Please try again.');
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      
// // //       <div
// // //         className="absolute inset-0 bg-cover bg-center"
// // //         style={{ backgroundImage: `url(${W5})` }}
// // //       ></div>

// // //       <div className="relative z-10 flex min-h-screen w-full items-end justify-center pb-12 sm:pb-20 md:pb-24 lg:pb-28 px-4 bg-black/40">
// // //         <div className="space-y-4 flex-1 max-w-2xl text-center">
// // //           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E7E0D0] uppercase leading-tight tracking-wide">
// // //             BE PART OF THE NEXT BIG RETAIL EXPERIENCE COMING SOON IN NAIROBI.
// // //           </h1>
// // //           <p className="text-white text-lg sm:text-lg md:text-xl leading-relaxed mt-2 font-medium">
// // //             Tenants interested in occupying space, please send us your inquiry.
// // //           </p>
// // //           <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            
// // //             <button
// // //               type="submit"
// // //               disabled={isSubmitting}
// // //               className="px-7 py-3 bg-[#001F3D] text-white rounded-lg hover:bg-[#E7E0D0] transition-colors font-sans font-semibold text-base sm:text-lg disabled:bg-gray-400 disabled:cursor-not-allowed w-full sm:w-auto"
// // //             >
// // //               {isSubmitting ? 'SENDING INQUIRY...' : 'BOOK A SPACE'}
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // };

// // // export default ComingSoon;
// // import { useState } from "react";
// // import W5 from "../assets/logo.png";

// // const ComingSoon = () => {

// //   const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdlzL80mwB7sPJh9KZeOWN8YrgyuDEG3lzFdtOqwYRcLfFByA/viewform?usp=header';

// //   return (
// //     <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      
// //       <div
// //         className="absolute inset-0 bg-cover bg-center"
// //         style={{ backgroundImage: `url(${W5})` }}
// //       ></div>

// //       <div className="relative z-10 flex min-h-screen w-full items-end justify-center pb-12 sm:pb-20 md:pb-24 lg:pb-28 px-4 bg-black/40">
// //         <div className="space-y-4 flex-1 max-w-2xl text-center">
// //           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E7E0D0] uppercase leading-tight tracking-wide">
// //             BE PART OF THE NEXT BIG RETAIL EXPERIENCE COMING SOON IN NAIROBI.
// //           </h1>
// //           <p className="text-white text-lg sm:text-lg md:text-xl leading-relaxed mt-2 font-medium">
// //             Tenants interested in occupying space, please send us your inquiry.
// //           </p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
// //             <a
// //               href={googleFormUrl}
// //               target="_blank" 
// //               rel="noopener noreferrer" 
// //               className="px-7 py-3 bg-[#001F3D] text-white rounded-lg hover:bg-[#E7E0D0] transition-colors font-sans font-semibold text-base sm:text-lg w-full sm:w-auto flex items-center justify-center" // Added flex for centering text
// //             >
// //               BOOK A SPACE
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };

// // export default ComingSoon;
// import { useState } from "react";
// import W5 from "../assets/Lodo.png";

// const ComingSoon = () => {

//   const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdlzL80mwB7sPJh9KZeOWN8YrgyuDEG3lzFdtOqwYRcLfFByA/viewform?usp=header';

//   return (
//     <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${W5})` }}
//       ></div>

      
//       <div className="relative z-10 flex min-h-screen w-full items-end justify-center px-10 bg-black/40 pb-12 sm:pb-20 md:pb-24 lg:pb-28"> 
//         <div className="space-y-4 flex-1 max-w-2xl text-center"> 
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E7E0D0] uppercase leading-tight tracking-wide">
//             BE PART OF THE NEXT BIG RETAIL EXPERIENCE COMING SOON IN NAIROBI.
//           </h1>
//           <p className="text-white text-lg sm:text-lg md:text-xl leading-relaxed mt-2 font-medium">
//             Tenants interested in occupying space, please send us your inquiry.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
//             <a
//               href='https://res.cloudinary.com/dnacduwvj/image/upload/v1768289101/Lodo_ertiy5.png'
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-7 py-3 bg-[#001F3D] text-white rounded-none hover:bg-[#E7E0D0] transition-colors font-sans font-semibold text-base sm:text-lg w-full sm:w-auto flex items-center justify-center"
//             >
//               BOOK A SPACE
//             </a>
//           </div>
//         </div>
//       </div>
      

//     </main>
//   );
// };

// export default ComingSoon;
import { useState } from "react";
import W5 from "../assets/Lodo.png";

const ComingSoon = () => {

  const googleFormUrl = 'https://res.cloudinary.com/dnacduwvj/image/upload/v1768289101/Lodo_ertiy5.png';

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${W5})` }}
      ></div>

      
      <div className="relative z-10 flex min-h-screen w-full items-end justify-center px-6 sm:px-10 bg-black/40 pb-8 sm:pb-12 md:pb-16 lg:pb-20"> 
        <div className="space-y-4 w-full max-w-3xl text-center"> 
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E7E0D0] uppercase leading-tight tracking-wide">
            BE PART OF THE NEXT BIG RETAIL EXPERIENCE COMING SOON IN NAIROBI.
          </h1>
          <p className="text-white text-lg sm:text-lg md:text-xl leading-relaxed mt-2 font-medium">
            Tenants interested in occupying space, please send us your inquiry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSdlzL80mwB7sPJh9KZeOWN8YrgyuDEG3lzFdtOqwYRcLfFByA/viewform?usp=header'
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-[#001F3D] text-white rounded-none hover:bg-[#E7E0D0] hover:text-[#001F3D] transition-colors font-sans font-semibold text-base sm:text-lg w-full sm:w-auto flex items-center justify-center"
            >
              BOOK A SPACE
            </a>
          </div>
        </div>
      </div>
      

    </main>
  );
};

export default ComingSoon;