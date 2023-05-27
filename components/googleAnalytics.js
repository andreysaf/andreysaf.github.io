import ReactGA from "react-ga4"
 
export const initGA = () => {
  ReactGA.initialize("G-MTPRRGBYGW")
}
 
export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: window.document.title })
}