import { Tabs } from "antd";
import React from "react";

function LRtabs({ items, defaultActiveKey, onChange }) {
  return (
    <>
      <Tabs
        items={items}
        defaultActiveKey={defaultActiveKey}
        onChange={onChange}
      />
    </>
  );
}

export default LRtabs;
