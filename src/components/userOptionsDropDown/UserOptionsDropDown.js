import { Dropdown } from "antd";


function UserOptionsDropDown({ children, menu, placement = "bottomRight" }) {
  return (
      <Dropdown menu={{menu}} placement={placement} arrow>
        <>
        {children}
        </>
      </Dropdown>
  );
}

export default UserOptionsDropDown;
