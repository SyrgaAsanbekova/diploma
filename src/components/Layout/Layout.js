import React, { useState } from "react";
// import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";
import Toolbar from "../Toolbar/Toolbar";
// import { useHistory } from "react-router-dom";

function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const history = useHistory();
  // history.listen((location, action) => {
  //   if (drawerOpen) {
  //     setDrawerOpen(false);
  //   }
  // });
  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return ( 
    <main className="Layout">
      <Toolbar toggleDrawer={toggleDrawer} />
      <Drawer open={drawerOpen} toggle={toggleDrawer} />
      <div className="container">
        {children}
      </div>
      <Footer />
    </main>
   );
}

export default Layout;