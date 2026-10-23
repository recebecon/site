export const consentCookie = {
  name: "recebecom_consent",
  value: "accepted",
  maxAge: 60 * 60 * 24 * 180,
} as const;

const changeEvent = "recebecom-consent";

export function hasConsent() {
  return document.cookie
    .split("; ")
    .includes(`${consentCookie.name}=${consentCookie.value}`);
}

export function writeConsent() {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${consentCookie.name}=${consentCookie.value}; Path=/; Max-Age=${consentCookie.maxAge}; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(changeEvent));
}

export function subscribeConsent(onChange: () => void) {
  window.addEventListener(changeEvent, onChange);
  return () => window.removeEventListener(changeEvent, onChange);
}
