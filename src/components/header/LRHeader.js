import { useContext } from "react";
import { appContext } from "../../store/AppContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch, BsBell } from "react-icons/bs";
import { MdPersonAdd } from "react-icons/md";
import UserOptionsDropDown from "../userOptionsDropDown/UserOptionsDropDown";
import { menu } from "./helper";
import LRAvatar from "../avatar/LRAvatar";
import "./headerStyle.css";

function LRHeader() {
  const { setShowDrawer } = useContext(appContext);
  const handleShowDrawer = () => setShowDrawer(true);

  return (
    <header className="header flex">
      <RxHamburgerMenu onClick={handleShowDrawer} />
      <div>
        <BsSearch />
        <input type="text" />
      </div>
      <div className="flex">
        <MdPersonAdd />
        <p>Invite Team Member</p>
      </div>
      <div className="flex">
        <BsBell />
        <UserOptionsDropDown menu={menu}>
          <LRAvatar>FL</LRAvatar>
        </UserOptionsDropDown>
      </div>
    </header>
  );
}

export default LRHeader;
