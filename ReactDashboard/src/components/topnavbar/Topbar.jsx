import React from "react";
import "./Topbar.css";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import pic from "../../img/pic.jpg";
const Topbar = () => {
  return (
    <div className="container">
      <div className="containermain">
        <div className="left">
          <span className="logo">Admin Panel</span>
        </div>

        <div className="right">
          <div className="icons">
            <LanguageIcon />
          </div>

          <div className="icons">
            <CircleNotificationsIcon />
            <span className="iconnotification"> 2</span>
          </div>

          <div className="icons">
            <SettingsRoundedIcon />
          </div>
          <img src={pic} className="img" alt="picture" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
