import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MainSection from "../sections/MainSection";


export default function MainLayout() {
  return (
    <div className="container mx-auto">
          <Navbar />
          <Banner />
          <MainSection />
          <Footer />
    </div>
  )
}
