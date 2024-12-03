import Footer from "./components/footer/Footer";
import Navigationbar from "./components/header/Navigationbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Listing from "./components/listing/Listing";
import AddCar from "./components/addcar/AddCar";
import PageNotFound from "./components/notfound/PageNotFound";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";


const App = () => {


  return (
    <>
      {/* header section */}
      <Navigationbar />

      {/* react router setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="listing/" element={<Listing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>









      {/* footer section */}
      <Footer />

    </>
  );
};

export default App;
