import LRHeader from "../../components/header";
import LRDrawer from "../../components/drawer";
import { useContext } from "react";
import { appContext } from "../../store/AppContext";
import LRtabs from "../../components/tabs/LRtabs";
import { items } from "./helper";

function Home() {
  const { showDrawer, setShowDrawer } = useContext(appContext);

  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };

  const handleTabChange = (key) => {
    console.log(key);
  };
  
  return (
    <div>
      <LRHeader />
      <LRDrawer onClose={handleCloseDrawer} open={showDrawer}>
        <h1>Drawer</h1>
        <LRtabs
          items={items}
          defaultActiveKey={"all"}
          onChange={handleTabChange}
        />
      </LRDrawer>
    </div>
  );
}

export default Home;
