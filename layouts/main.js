import Meta from "../components/meta";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default ({ children }) => (
  <div className="hack">
    <Meta />
    <div className="container">
      <Nav />
      {children}
      <Footer />
    </div>
  </div>
);
