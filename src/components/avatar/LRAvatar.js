import { Avatar } from "antd";

function LRAvatar({
  children,
  type = "letter",
  size = "large",
  style = { backgroundColor: "purple", color: "white" },
  src = "",
}) {
  return (
    <Avatar type={type} size={size} style={style} src={src}>
      {children}
    </Avatar>
  );
}

export default LRAvatar;
