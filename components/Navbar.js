export default function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg shadow navbar-custom bg-custom mb-4 fixed-top" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="homepage.html">PANCAKE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarExample-expand-lg" aria-controls="offcanvasNavbarExample-expand-lg">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="order-3 d-none d-lg-flex justify-content-end">
          <a href="./booking.html" className="btn btn-custom">BOOK NOW</a>
        </div>
        <div className="offcanvas offcanvas-start bg-custom" tabIndex="-1" id="offcanvasNavbarExample-expand-lg"
            aria-labelledby="offcanvasNavbarExample-expand-lg">
          <div className="offcanvas-header">
            <h3 className="offcanvas-title" id="offcanvasLabel" style={{ color: "black" }}>LINKS</h3>
          </div>
          <div className="offcanvas-body bg-custom">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" href="./homepage.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Hiring.html">Hiring</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./au-bou.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./STORE.html">Store</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gift cards</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="./kitchen.html">Kitchen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Social League</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./faq2.html">Faq'S</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./contact.html">Contact Us</a>
              </li>
              <li className="nav-item d-lg-none">
                <a href="./booking.html" className="btn btn-custom w-100">BOOK NOW</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
