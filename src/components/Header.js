import Logo from "./Logo";
import User from "./User";
import Accounts from "./Accounts";

const Header = () => {
  return (
    <div className="Header">
      <div className="container head">
        <Logo />
        <User name="Etienne" />
      </div>
    </div>
  );
};

export default Header;
