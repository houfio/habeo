/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string;
}

declare module '@fortawesome/vue-fontawesome' {
  export const FontAwesomeIcon: any;
}
