import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "./contact/ContactForm";
import { X } from "lucide-react";

interface SocialButtonProps {
  href: string;
  icon: string;
  alt: string;
  onClick?: () => void;
}

function SocialButton({ href, icon, alt, onClick }: SocialButtonProps) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="block w-12 h-12 rounded-full overflow-hidden hover:opacity-90 transition-opacity"
      >
        <img src={icon} alt={alt} className="w-full h-full object-cover" />
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-12 h-12 rounded-full overflow-hidden hover:opacity-90 transition-opacity"
    >
      <img src={icon} alt={alt} className="w-full h-full object-cover" />
    </a>
  );
}

export default function SocialButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    // Initial checks
    checkMobile();
    handleScroll();

    // Add event listeners
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialButtons = [
    {
      href: "https://maps.app.goo.gl/cLBSq18m5FvfRpBE8",
      icon: "https://betaviet.vn/wp-content/uploads/2023/12/icon_map.png",
      alt: "Google Maps",
    },
    {
      href: "#",
      icon: "https://betaviet.vn/wp-content/uploads/2023/12/icon_form.png",
      alt: "Contact Form",
      onClick: () => setContactFormOpen(true),
    },
    {
      href: "https://m.me/521739221200526",
      icon: "https://betaviet.vn/wp-content/uploads/2023/12/icon_messenger.png",
      alt: "Messenger",
    },
    {
      href: "https://zalo.me/1474744784995246140",
      icon: "https://betaviet.vn/wp-content/uploads/2023/12/icon_zalo.png",
      alt: "Zalo",
    },
    {
      href: "tel:0915010800",
      icon: "https://betaviet.vn/wp-content/uploads/2023/12/icon_call.png",
      alt: "Call",
    },
  ];

  if (isMobile) {
    return (
      <>
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden">
          <div className="flex justify-between items-center px-2 py-2">
            {socialButtons.map((button, index) => (
              <div key={index} className="flex flex-col items-center space-y-1">
                {button.onClick ? (
                  <button onClick={button.onClick} className="w-10 h-10">
                    <img
                      src={button.icon}
                      alt={button.alt}
                      className="w-full h-full"
                    />
                  </button>
                ) : (
                  <a href={button.href} className="w-10 h-10">
                    <img
                      src={button.icon}
                      alt={button.alt}
                      className="w-full h-full"
                    />
                  </a>
                )}
                <span className="text-xs">{button.alt}</span>
              </div>
            ))}
          </div>
        </div>

        <Dialog open={contactFormOpen} onOpenChange={setContactFormOpen}>
          <DialogContent className="sm:max-w-[500px] p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#B87B44]">
                ĐĂNG KÝ NHẬN ƯU ĐÃI
              </h2>
              <button
                onClick={() => setContactFormOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <ContactForm />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {socialButtons.map((button, index) => (
          <SocialButton
            key={index}
            href={button.href}
            icon={button.icon}
            alt={button.alt}
            onClick={button.onClick}
          />
        ))}
        <button
          onClick={scrollToTop}
          className={`block w-12 h-12 rounded-full overflow-hidden hover:opacity-90 transition-all transform ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
        >
          <img
            src="https://betaviet.vn/wp-content/uploads/2023/12/icon_top3.png"
            alt="Back to Top"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      <Dialog open={contactFormOpen} onOpenChange={setContactFormOpen}>
        <DialogContent className="sm:max-w-[500px] p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#B87B44]">
              ĐĂNG KÝ NHẬN ƯU ĐÃI
            </h2>
            <button
              onClick={() => setContactFormOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
