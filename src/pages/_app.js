import "../styles/globals.css";
import DefaultLayout from "../components/layouts/defaultLayout";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
