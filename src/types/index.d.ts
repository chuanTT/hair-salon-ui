export {};
declare global {
  interface Window {
    fbAsyncInit: () => any;  // this will be your variable name
    FB: any
  }
}