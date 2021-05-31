import logo from '../../assets/image/logo.png';
function Header() {
  return (
    <div className="row">
      <div className="col-md-2">
        <img src={logo} className="logo_img" alt="" />
      </div>
    </div>
  );
}

export default Header;
