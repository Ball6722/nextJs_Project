import "@/styles/globals.css";
import Layout from "../components/Layout";
import CustomHead from '../components/CustomHead';
export default function App({ Component, pageProps }) {
  return(
  <>
  <CustomHead />
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </> )
   
}
