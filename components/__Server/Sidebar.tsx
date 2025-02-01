import {PersonalInfo } from "@/types/apiResponse";
import SidebarComponent from "../HomePage/Sidebar";
import { fetchPersonalInfo } from "@/services/generalService";

const Sidebar = async () => {
  const data:PersonalInfo = await fetchPersonalInfo();
  console.log(data)
  return (
    <>
      <SidebarComponent data={data} />
    </>
  );
};

export default Sidebar;
