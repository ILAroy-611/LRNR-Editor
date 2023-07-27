import { Drawer } from "antd";

function LRDrawer({ children, onClose, open, placement = "left", title = "" }) {
  return (
    <>
      <Drawer
        title={title}
        closable={false}
        onClose={onClose}
        placement={placement}
        open={open}
      >
        <h1 onClick={onClose}>X</h1>
        {children}
      </Drawer>
    </>
  );
}

export default LRDrawer;
