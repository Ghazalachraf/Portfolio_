"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "achraf-ghazal-avuvqs/portfolio";

export default function CalendarEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#2563eb" } },
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="mt-8 overflow-hidden rounded-2xl bg-white">
      <Cal
        calLink={CAL_LINK}
        style={{ width: "100%", height: "600px", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
