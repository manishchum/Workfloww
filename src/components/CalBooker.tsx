import * as React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

class CalErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("CalBooker caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          We couldn’t load the calendar right now. Please refresh and try again.
        </div>
      );
    }
    return this.props.children;
  }
}

type CalBookerProps = {
  eventSlug: string;
  username: string;
  onSuccess?: () => void;
  className?: string;
};

export default function CalBooker({ eventSlug, username, onSuccess, className }: CalBookerProps) {
  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { styles: { branding: { brandColor: "#000000" } }, hideEventTypeDetails: false, layout: "month_view" });
      
      // Optionally handle booking successful here or in other ways if needed
      // but standard embed will just work
    })();
  }, []);

  return (
    <CalErrorBoundary>
      <div className={className ?? "border border-slate-200 rounded-2xl overflow-hidden w-full h-[600px]"}>
        <Cal
          calLink={`${username}/${eventSlug}`}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </CalErrorBoundary>
  );
}
