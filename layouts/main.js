import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import firebase from "../lib/firebase";

export default ({ children }) => (
  <div className="main">
    <Header />
    <div className="container">
      <Nav />
      {children}
      <Footer />
    </div>
  </div>
);
