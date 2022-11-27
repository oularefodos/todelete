import CommunityChart from "../../Components/Community";

import Cotisation from "../../Components/Cotisation";
import Matricule from "../../Components/Matricule";
import "./index.css"

const Dashboard = () => {
    return (
        <div className="dash">
            <Cotisation/>
            <Matricule/>
            <CommunityChart/>


        </div>
    )
}

export default Dashboard;