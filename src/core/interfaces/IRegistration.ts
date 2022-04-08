export interface IRegistration {
  email: string;
  name: string;
  birthDate: string;
  cellPhone: string;
  acceptLGPDConsent: boolean;
  acceptMediaConsent: boolean;
  recaptchaToken: string;
}
