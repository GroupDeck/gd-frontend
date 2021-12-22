import Button from "../components/UI/Button/Button";
import qr from "./qr.png";
import classes from "./JoinGroup.module.css"

const JoinGroup = () => {
  return (
    <div >
      <img src={qr} />
      <Button> Join </Button>
    </div>
  );
};

export default JoinGroup;
