type GtagCommand = "event" | "config" | "js";

declare global {
  interface Window {
    gtag?: (command: GtagCommand, eventName: string, params?: Record<string, unknown>) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};