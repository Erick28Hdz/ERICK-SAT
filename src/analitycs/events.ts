import { trackEvent } from "./analytics";

export const trackSocialClick = (platform: string, url: string) => {
  trackEvent("social_click", {
    social_platform: platform,
    social_url: url,
  });
};

export const trackCTA = (name: string) => {
  trackEvent("cta_click", {
    cta_name: name,
  });
};

export const trackContact = (method: string) => {
  trackEvent("contact_click", {
    contact_method: method,
  });
};

export const trackFormSubmit = (form: string) => {
  trackEvent("form_submit", {
    form_name: form,
  });
};

export const trackServiceView = (service: string) => {
  trackEvent("service_view", {
    service_name: service,
  });
};

export const trackPortfolioProjectClick = (
  projectName: string,
  link?: string,
) => {
  trackEvent("portfolio_project_click", {
    project_name: projectName,
    project_link: link,
  });
};

export const trackServiceCategoryClick = (category: string) => {
  trackEvent("service_category_click", {
    category_name: category,
  });
};