import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, titlePage }) => {
  return (
    <div>
      <Header titlePage={titlePage} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
