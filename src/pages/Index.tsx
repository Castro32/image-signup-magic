import avyaImage from "@/assets/avya-coming-soon.png";
import { Button } from "@/components/ui/button";

const Index = () => {
  const googleFormUrl = "https://forms.google.com/your-form-link";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-2xl animate-in fade-in duration-1000">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={avyaImage}
            alt="AVYA - Luxury Beauty Science Longevity - Coming Soon"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary/90 backdrop-blur-sm px-12 py-6 text-lg font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary"
            >
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="relative z-10">Sign Up</span>
                <svg
                  className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Index;
