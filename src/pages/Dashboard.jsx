import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Dashboard;
