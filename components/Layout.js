// components/Layout.js


import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* Include the AdminLTE header, sidebar, and footer */}
      {/* You can customize this structure based on your needs */}
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">{children}</div>

        <Footer />
      </div>


      {/* Include additional scripts or custom scripts */}
    </>
  );
};

export default Layout;
