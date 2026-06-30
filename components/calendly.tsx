"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function Calendly() {
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.event === "calendly.event_scheduled") {
        console.log("Meeting Scheduled");

        // Facebook Pixel Lead Event
        window.fbq?.("track", "Lead");

        // Redirect after 1 second
        setTimeout(() => {
          router.push("/thank-you");
        }, 1000);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [router]);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className="bg-black text-white py-10 text-center">
        <h1 className="text-4xl font-bold text-lime-400">
          Book Your Free Strategy Call
        </h1>

        <p className="mt-3 text-gray-400">Choose a suitable time below.</p>
      </div>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/rituraj-markededge/30min"
        style={{ minWidth: "320px", height: "850px" }}
      />
    </>
  );
}
