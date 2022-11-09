import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutType = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
