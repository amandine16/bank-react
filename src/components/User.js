import UserIcon from "./UserIcon";

const User = (props) => {
  return (
    <div className="User">
      <p>{props.name}</p>
      <div className="userIcon">
        <UserIcon />
      </div>
    </div>
  );
};

export default User;
