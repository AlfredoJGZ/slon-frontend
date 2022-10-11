import Navbar from "./Navbar";

type LayoutType = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Navbar />
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
