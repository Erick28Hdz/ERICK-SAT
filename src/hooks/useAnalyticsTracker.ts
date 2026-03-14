import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../analitycs/analytics";

export const useAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Registrar cambio de página
    trackEvent("page_view", {
      page_path: location.pathname,
    });

    const startTime = Date.now();

    // Scroll tracking
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      const scrollPercent = (scrollPosition / pageHeight) * 100;

      if (scrollPercent > 90) {
        trackEvent("scroll_90", {
          page_path: location.pathname,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);

      // tiempo en página
      trackEvent("time_on_page", {
        page_path: location.pathname,
        seconds: timeSpent,
      });

      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);
};