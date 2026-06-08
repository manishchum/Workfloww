import ReactGA from "react-ga4";

export const trackEvent = (
  category: string,
  action: string,
  label?: string
) => {
//   console.log("GA Event Fired 🚀", {
//     category,
//     action,
//     label,
//   });

  ReactGA.event(action, {
    category,
    label,
  });
};

export default function Analytics() {
  return null;
}