import "./NavBar.scss";

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <nav>
        {props.children}
      </nav>
    </div>
  );
};

export default NavBar;
