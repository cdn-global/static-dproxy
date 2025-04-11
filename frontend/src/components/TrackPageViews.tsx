import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export const TrackPageViews = ({ consentGiven }) => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag && consentGiven) {
      console.log("TrackPageViews: Sending page view for", location.pathname);
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        send_to: "G-G91KXQWM64",
      });
    }
  }, [location.pathname, consentGiven]);

  return null;
};