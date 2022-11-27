import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Progress,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import ApexActivityChart from "./components/ActivityChart.js";
import CommunityChart from "./components/CommunityChart";



import s from "./Dashboard.module.scss";

const DashComponent = () => {
  const [checkboxes, setCheckboxes] = useState([true, false])
  const [content, setContent] = useState({});

  const toggleCheckbox = (id) => {
    setCheckboxes(checkboxes => checkboxes
      .map((checkbox, index) => index === id ? !checkbox : checkbox ))
  }

 
   useEffect(() => {
        const url = "https://cesam-backend.9dr61ahlt5k84.us-east-2.cs.amazonlightsail.com/Users";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(JSON.parse(json.data[0]));
                setContent(JSON.parse(json.data[0]));
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

  return (
    <div>
      <Row>
        <Col className="pr-grid-col" xs={20} lg={10}>
          <Row className="gutter mb-4">
             <Col className="mb-4 mb-md-0" xs={15} md={8}> {/*xs={12} md={6} */}
              <Widget className="">
                <div className="d-flex justify-content-between widget-p-md">
                  <div className="headline-3 d-flex align-items-center">YOUR COTISATION</div>
                </div>
                <ApexActivityChart className="pb-4"/>
              </Widget>
            </Col>

          </Row>

          <Row className="gutter mb-4">
             <Col className="mb-4 mb-md-0" > {/*xs={12} md={6} */}
              <Widget className="">
                <div className="d-flex justify-content-between widget-p-md">
                  <div className="headline-3 d-flex align-items-center">COMMUNITY</div>
                  
                </div>
                <CommunityChart className="pb-4"/>
              </Widget>
            </Col>
            </Row>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget className="widget-p-none">
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                  <div className="d-flex flex-column align-items-center col-12 col-xl-6 p-sm-4">
                    <p className="headline-1">Contactez nous</p>

                    <div className="d-flex justify-content-between my-4">
                      <Button className="rounded-pill mr-3" color="primary">Mail</Button>
                      <Button className="rounded-pill mr-3" color="primary">Instagramm</Button>
                      {/* <Button className="rounded-pill mr-3" color="primary">Facebook</Button> */}
                      <Button className="rounded-pill body-3" outline color="dark">Téléphone</Button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center col-12 col-xl-6">
                    <img className="p-1 img-fluid"  alt="..." />
                  </div>
                </div>
              </Widget>
            </Col>
          </Row>
          </Col>

      </Row>
    </div>
  )
}

export default DashComponent;
