import { Option } from "../components/options";
import settingsLogo from "../assets/settings.svg";

export const SideBar = () => {
  return (
    <>
      <div className="px-2 py-1">
        SIDEBAR
        <div></div>
        <Option title={"Settings"} logo={settingsLogo} />
      </div>
    </>
  );
};
