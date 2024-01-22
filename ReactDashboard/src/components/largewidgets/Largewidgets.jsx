import "./largewidgets.css";
import pic from "../../img/pic.jpg";
const Largewidgets = () => {
  const Button = ({ type }) => {
    return <button className={"largewidgetButton " + type}>{type}</button>;
  };
  return (
    <div className="largewidget">
      {" "}
      <h3 className="largewidgetTitle">Latest transactions</h3>
      <table className="largewidgetTable">
        <tr className="largewidgetTr">
          <th className="largewidgetTh">Customer</th>
          <th className="largewidgetTh">Date</th>
          <th className="largewidgetTh">Amount</th>
          <th className="largewidgetTh">Status</th>
        </tr>
        <tr className="largewidgetTr">
          <td className="largewidgetUser">
            <img src={pic} alt="" className="largewidgetImg" />
            <span className="largewidgetName">John Snow</span>
          </td>
          <td className="largewidgetDate">5 Jan 2024</td>
          <td className="largewidgetAmount">$12.00</td>
          <td className="largewidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="largewidgetTr">
          <td className="largewidgetUser">
            <img src={pic} alt="" className="largewidgetImg" />
            <span className="largewidgetName">John Snow</span>
          </td>
          <td className="largewidgetDate">5 Jan 2024</td>
          <td className="largewidgetAmount">$12.00</td>
          <td className="largewidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="largewidgetTr">
          <td className="largewidgetUser">
            <img src={pic} alt="" className="largewidgetImg" />
            <span className="widgetLgName">John Snow</span>
          </td>
          <td className="largewidgetDate">5 Jan 2024</td>
          <td className="largewidgetAmount">$12.00</td>
          <td className="largewidgetStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="largewidgetTr">
          <td className="largewidgetUser">
            <img src={pic} alt="" className="largewidgetImg" />
            <span className="largewidgetName">John Snow</span>
          </td>
          <td className="largewidgetDate">5 Jan 2024</td>
          <td className="largewidgetAmount">$12.00</td>
          <td className="largewidgetStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Largewidgets;
