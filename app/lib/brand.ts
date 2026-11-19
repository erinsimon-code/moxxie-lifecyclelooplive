// Central brand/content constants for LifecycleLoop Live.
// Keep every page in sync by importing from here instead of hardcoding copy.

export const BRAND = "LifecycleLoop Live";
export const DOMAIN = "lifecyclelooplive.com";
export const SITE_URL = `https://${DOMAIN}`;

// --- Legal / contact details -------------------------------------------
export const LEGAL_NAME = "LifeCycleLoop LLC";
export const ADDRESS = "3 Germay Dr, Unit 4 #3226, Wilmington, DE 19804, United States";
export const PHONE = "+13022080355"; // E.164, used in tel: links
export const PHONE_DISPLAY = "(302) 208-0355";
export const EMAIL = "support@lifecyclelooplive.com";

// Used on /privacy and /terms where the operator must be named explicitly.
export const OPERATOR_LINE = "LifecycleLoop Live, operated by LifeCycleLoop LLC";

// Required addition to the /sms-terms program description section.
export const TOLL_FREE_NOTE = "Messages are sent from a toll-free number.";

export const TAGLINE = "Real-time updates for every step of your work journey.";

export const POSITIONING_PARAGRAPH =
  "LifecycleLoop Live is an internal employee communication program. Employers use it to send real-time text updates to their own enrolled employees at each stage of the employee lifecycle: onboarding steps, training reminders, schedule and shift changes, benefits enrollment deadlines, and workplace announcements. Messages go only to current employees of a participating employer who enroll with their company ID. The program is never open to the general public.";

export const POSITIONING_BULLETS = [
  "Voluntary. Joining is never a condition of employment, and employees can opt out any time.",
  "No marketing, promotions or third-party offers. Not used for recruiting or job seekers.",
  "Texts never include pay, SSNs, account numbers or benefit balances. They only point to the portal.",
  "Phone numbers and opt-in consent are never sold, rented or shared with third parties.",
];

export const NO_SHARING_CLAUSE =
  "Phone numbers and opt-in consent are never sold, rented or shared with third parties.";

// Word-for-word legal clause required on /privacy.
export const PRIVACY_NO_SHARING_CLAUSE =
  "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.";

export type MessageType = {
  title: string;
  description: string;
};

export const MESSAGE_TYPES: MessageType[] = [
  {
    title: "Onboarding steps",
    description: "Guidance on what to complete next when you're new to the team.",
  },
  {
    title: "Training reminders",
    description: "Heads-up notices for required or scheduled training sessions.",
  },
  {
    title: "Schedule and shift changes",
    description: "Updates when a shift is added, changed, or needs coverage.",
  },
  {
    title: "Benefits enrollment deadlines",
    description: "Reminders about open enrollment and benefits elections windows.",
  },
  {
    title: "Workplace announcements",
    description: "Important updates from your employer that apply to your workplace.",
  },
];

export const SAMPLE_MESSAGES: string[] = [
  "LifecycleLoop Live: Welcome aboard! Your next onboarding step is ready at lifecyclelooplive.com/portal. Reply HELP for help, STOP to opt out.",
  "LifecycleLoop Live: Reminder: Safety training is tomorrow 11/20 at 9:00 AM. Details at lifecyclelooplive.com/portal. Reply STOP to opt out.",
  "LifecycleLoop Live: Your shift on Sat 11/22 has changed to 10:00 AM-6:00 PM. View your schedule at lifecyclelooplive.com/portal. Reply STOP to opt out.",
  "LifecycleLoop Live: Benefits open enrollment closes 12/5. Review your options at lifecyclelooplive.com/portal. Reply STOP to opt out.",
];

export const CONSENT_LABEL_PREFIX =
  "I agree to receive recurring text messages from LifecycleLoop Live about my employment, including onboarding steps, training reminders, schedule changes, benefits deadlines and workplace announcements, at the number provided. Consent is not a condition of employment. Message frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out. See our";

export const STOP_KEYWORDS = ["STOP", "END", "CANCEL", "UNSUBSCRIBE", "QUIT"];

export const CONSENT_MOBILE_REQUIRED_ERROR =
  "Please enter your mobile number to receive text updates, or uncheck the box.";

export const CONSENT_MOBILE_INVALID_ERROR =
  "Please enter a valid 10-digit mobile number, or uncheck the box.";

export const DEFAULT_TITLE = "LifecycleLoop Live: Employee Updates";
export const DEFAULT_DESCRIPTION =
  "LifecycleLoop Live sends real-time text updates to enrolled employees about onboarding, training, schedules and benefits deadlines.";
