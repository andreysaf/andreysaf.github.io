import ReactGA from "react-ga4"
 
export const initGA = () => {
  ReactGA.initialize("G-MTPRRGBYGW")
}
 
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
}