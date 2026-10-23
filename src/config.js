// Public commercial channels confirmed by the business owner.
// Optional VITE_ overrides are public build-time configuration, never secrets.
export const contact = {
  email: (
    import.meta.env.VITE_CONTACT_EMAIL || "raphael@holdsolution.com"
  ).trim(),
  whatsapp: (import.meta.env.VITE_CONTACT_WHATSAPP || "5522992886582").replace(
    /\D/g,
    "",
  ),
};
