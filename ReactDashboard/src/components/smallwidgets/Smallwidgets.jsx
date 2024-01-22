import "./smallwidgets.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import pic from "../../img/pic.jpg";

const Smallwidgets = () => {
  return (
    <div className="smallwidget">
      <span className="smallwidgetTitle">New Members</span>
      <ul className="smallwidgetList">
        <li className="smallwidgetListItem">
          <img src={pic} alt="" className="smallwidgetImg" />
          <div className="smallwidgetUser">
            <span className="smallwidgetUsername">Jhon Snow</span>
            <span className="smallwidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallwidgetButton">
            <VisibilityIcon className="smallwidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallwidgetListItem">
          <img src={pic} alt="" className="smallwidgetImg" />
          <div className="smallwidgetUser">
            <span className="smallwidgetUsername">Jhon Snow</span>
            <span className="smallwidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallwidgetButton">
            <VisibilityIcon className="smallwidgetIcon" />
            Display
          </button>
        </li>

        <li className="smallwidgetListItem">
          <img src={pic} alt="" className="smallwidgetImg" />
          <div className="smallwidgetUser">
            <span className="smallwidgetUsername">Jhon Snow</span>
            <span className="smallwidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallwidgetButton">
            <VisibilityIcon className="smallwidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallwidgetListItem">
          <img src={pic} alt="" className="smallwidgetImg" />
          <div className="smallwidgetUser">
            <span className="smallwidgetUsername">Jhon Snow</span>
            <span className="smallwidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallwidgetButton">
            <VisibilityIcon className="smallwidgetIcon" />
            Display
          </button>
        </li>

        <li className="smallwidgetListItem">
          <img src={pic} alt="" className="smallwidgetImg" />
          <div className="smallwidgetUser">
            <span className="smallwidgetUsername">Jhon Snow</span>
            <span className="smallwidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallwidgetButton">
            <VisibilityIcon className="smallwidgetIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Smallwidgets;
