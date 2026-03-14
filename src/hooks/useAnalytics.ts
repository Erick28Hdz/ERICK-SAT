import { trackEvent } from "../analitycs/analytics";

export const useAnalytics = () => {

  const trackSocial = (platform: string, url: string) => {
    trackEvent("social_click", {
      social_platform: platform,
      social_url: url,
    });
  };

  const trackCTA = (ctaName: string) => {
    trackEvent("cta_click", {
      cta_name: ctaName,
    });
  };

  const trackContact = (method: string) => {
    trackEvent("contact_click", {
      contact_method: method,
    });
  };

  return {
    trackSocial,
    trackCTA,
    trackContact,
  };
};