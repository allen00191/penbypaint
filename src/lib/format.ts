const dateFormatter = new Intl.DateTimeFormat("zh-HK", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const dateTimeFormatter = new Intl.DateTimeFormat("zh-HK", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const priceFormatter = new Intl.NumberFormat("zh-HK", {
  style: "currency",
  currency: "HKD",
  maximumFractionDigits: 0,
});

export function formatDate(value: string) {
  return dateFormatter.format(new Date(value)).replace(/\//g, ".");
}

export function formatDateTime(value: string) {
  return dateTimeFormatter.format(new Date(value));
}

export function formatPrice(value: number) {
  return priceFormatter.format(value);
}

export const workshopStatusLabel = {
  open: "開放報名",
  full: "已額滿",
  closed: "已結束",
  upcoming: "即將開放",
} as const;
