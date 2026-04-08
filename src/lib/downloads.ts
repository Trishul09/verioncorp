const withBase = (file: string) => `${import.meta.env.BASE_URL}downloads/${file}`;

export const DOWNLOADS = {
  macOS: {
    label: "macOS",
    href: withBase("Aether-0.1.0-mac-arm64.dmg"),
    filename: "Aether-0.1.0-mac-arm64.dmg",
    available: true,
  },
  Windows: {
    label: "Windows",
    href: withBase("Aether-Setup-0.1.0-x64.exe"),
    filename: "Aether-Setup-0.1.0-x64.exe",
    available: true,
  },
  Linux: {
    label: "Linux",
    href: "",
    filename: "",
    available: false,
  },
  iOS: {
    label: "iOS",
    href: "",
    filename: "",
    available: false,
  },
  Android: {
    label: "Android",
    href: "",
    filename: "",
    available: false,
  },
} as const;

export type DownloadPlatform = keyof typeof DOWNLOADS;

export const detectOS = (): DownloadPlatform | "Unknown" => {
  if (typeof navigator === "undefined") return "Unknown";

  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return "iOS";
  if (/android/.test(ua)) return "Android";
  if (/mac/.test(ua)) return "macOS";
  if (/win/.test(ua)) return "Windows";
  if (/linux/.test(ua)) return "Linux";
  return "Unknown";
};

export const getPrimaryDownload = (platform: DownloadPlatform | "Unknown") => {
  if (platform !== "Unknown" && DOWNLOADS[platform].available) {
    return DOWNLOADS[platform];
  }

  return DOWNLOADS.macOS;
};
