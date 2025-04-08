// utils/acquisition.ts
export const detectUserPath = (): string => {
  if (typeof window === "undefined") return "unknown";

  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");
  const referrer = document.referrer;

  if (utmSource) {
    return utmSource;
  }

  if (referrer.includes("google.")) return "google";
  if (referrer.includes("instagram.")) return "instagram";
  if (referrer.includes("facebook.")) return "facebook";
  if (referrer.includes("naver.")) return "naver";
  if (referrer.includes("daum.")) return "daum";

  if (referrer === "") return "direct";

  return "other";
};
