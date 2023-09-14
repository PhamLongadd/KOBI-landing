import Footer from "../../footer";
import Header from "@/components/header";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
