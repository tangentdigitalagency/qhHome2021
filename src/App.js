import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Logo from "./Assets/logoq.png";
import {Button, Typography } from "antd";

import S1OwnOrRent from "./components/S1OwnOrRent";
import S2HomeType from "./components/S2HomeType";
import StepWizard from "react-step-wizard";
import S3HouseSize from "./components/S3HouseSize";
import S4AboutInsurance from "./components/S4AboutInsurance";
import S5ClaimedAnything from "./components/S5ClaimedAnything";
import S6Personalnfo from "./components/S6Personalnfo";
import S7Personalnfo from "./components/S7Personalnfo";
import S8Personalnfo from "./components/S8Personalnfo";
import S9Personalnfo from "./components/S9Personalnfo";
import S10Personalnfo from "./components/S10Personalnfo";
import {PhoneOutlined } from "@ant-design/icons"
import S11Final from "./components/S11Final";
class App extends Component {
  state = {
    postData: {
      lp_campaign_id:"5fe2370665025",
      lp_campaign_key:"r7zWCbyvMYB4KF2wJq9t",
      state:"NY",
      //extra entries
      Key: "rRkWg9.WrP.Ahm.Ic9hNr9kZruQMcRpNruwIc9tVxVpWrV4MgexMl8QKHpEE",
      TYPE: "34",
      SRC: "Quantum_Website_Home",
      //SRC:"test",
      Landing_Page: "quantumassurance.com",
      IP_Address: "",
      Sub_ID: 101,
      Pub_ID: 102,
      TCPA_Consent: "Yes",
      Occupancy: "Primary Residence",
      Garage: "Unknown",
      Foundation: "Unknown",
      Home_Security: "Unknown",
      Bedrooms: 4,
      Bathrooms: 3,
      Home_Value: 150000,
      Construction_Type: "Unknown",
      Roof_Type: "Other",
      Heating_Type: "Other",
      Coverage_Type: "Unknown",
      Liability: 100000,
      Deductible: 100,

      //Test_Lead:1,
      //Skip_XSL:1,
      //Match_With_Partner_ID:"",
      //Referral_URL:'',
      //Litigator:'Yes',
      //Age_In_Seconds:5,
      //deliveryResponse:'',
      //Optout:'',
      //Unique_Identifier:'',
      //Time_On_Page:12,
      //TCPA_Language:'',
      //Total_Premium:'',
      //Sold_Tier:'',
      //Quoted_Carrrier:'',
      //Age:'', 
      //Insured_Since:'',
      //Policy_Expiration:'',
      //Exterior_Walls:'',
      //Smoke_Alarm:'',
      //Indoor_Sprinklers:'',
      //Central_Air_Conditioning:'',  
      //Years_At_Current_Residence:'',
      //Years_At_Previous_Residence:'',

      //start 
      // form 1 field
      own_or_rent: "",
      // from script
      trusted_form_cert_id: "",
      jornaya_lead_id: "",
      //form 2 fields
      year_house_was_built: "",
      type_of_property: "",
      // form 3 fields
      number_of_stories: "",
      size_in_square_feet: "",
      //form 4 fields
      currently_insured: "No",
      current_insurance_company: "",
      //form 5 fields
      any_claims_over_last_3_years: "No",
      //howMany: "",
      //form 6 fields
      first_name: "",
      last_name: "",
      //form 7 fields
      phone_home: "",
      email_address: "",
      //form 8 fields
      dob: "",
      gender: "",
      //form 9 fields
      zip_code: "",
      address: "",
      //form 10 fields
      city: "",
      Credit: "",
      //end

    },
};
callMediaAlpha = () => {
  // console.log("Hey how arew your")
  window.MediaAlphaExchange = {
    "data": {
       "zip": "90210"
    },
    "placement_id": "3lYU7xIApFzLYwijXxsv88dhUoSiaA",
    "sub_1": "test sub id",
    "type": "ad_unit",
    "version": 17
 };
   window.MediaAlphaExchange__load("target");
 }

  componentDidUpdate = () => {
    //console.log(this.state);
  };

  handleChange = (v) => {
    console.log(`this is: ${v}`)
    this.setState({
      postData: {
        ...this.state.postData,
        own_or_rent: v,
      },
    },
    
    
    );
  };

  handleChangeYear = (value) => {

    this.setState({
      postData: {
        ...this.state.postData,
        year_house_was_built: value,
      },
    });
  };

  handleChangeType = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        type_of_property: value,
      },
    });
  };

  handleChangeSize = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        size_in_square_feet: value,
      },
    });
  };
  handleChangeStories = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        number_of_stories: value,
      },
    });
  };
  handleChangeInsured = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        currently_insured: value,
      },
    });
  };
  handleChangeCompany = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        current_insurance_company: value,
      },
    });
  };

  handleChangeClaims = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        any_claims_over_last_3_years: value,
      },
    });
  };
  handleChangeHowMany = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        howMany: value,
      },
    });
  };

  handleChangeFirst_Name = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        first_name: e.target.value,
      },
    });
  };
  handleChangeLast_Name = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        last_name: e.target.value,
      },
    });
  };

  handleChangePrimary_Phone = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        phone_home: e.target.value,
      },
    });
  };
  handleChangeEmail = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        email_address: e.target.value,
      },
    });
  };

  handleChangeDOB = (e) => {
    let value = e.target.value;
    value = value
      .replace(/^(\d\d)(\d)$/g, "$1/$2")
      .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
      .replace(/[^\d\/]/g, "");
    this.setState({
      postData: {
        ...this.state.postData,
        dob: value,
      },
    });
  };
  handleChangeGender = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        gender: value,
      },
    });
  };

  handleChangeZip = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        zip_code: e.target.value,
      },
    });
  };
  handleChangeAddress = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        address: e.target.value,
      },
    });
  };
  handleChangeCity = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        city: e.target.value,
      },
    });
  };
  handleChangeCredit = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Credit: value,
      },
    });
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f7f7f7",
          overflow: "hidden",
        }}
      >
        <nav class="navbar navbar-light "><div class="container">
          <ul class="nav  nav-fill mx-2 w-sm-100">
            <li class="nav-item">
              <img src={Logo} class="mx-2 my-4" width="150px" alt="" />
            </li>
          </ul>
          <ul class="nav  nav-fill mx-2 w-sm-100">
            <li class="nav-item">
              <Button type="primary" size="middle" icon={<PhoneOutlined rotate="90" />}  onClick={(e) => {e.preventDefault(); window.location.href='tel:8556226620'; }} >
              (855) 622-6620
              </Button>
            </li>
          </ul>
        </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col">
              <StepWizard initialStep={1}>
                <S1OwnOrRent
                  own_or_rent={this.state.postData.own_or_rent}
                  onChange={(v) => {
                    // this.handleChange(v);
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        own_or_rent:v,
                        jornaya_lead_id: document.getElementById("jornaya_lead_id")
                          .value,
                          trusted_form_cert_id: document.getElementById(
                          "trusted_form_cert_id_0"
                        ).value,
                      },
                    });
                    console.log(document.getElementById("trusted_form_cert_id_0"));
                  }}
                />
                <S2HomeType
                  year_house_was_built={this.state.postData.year_house_was_built}
                  type_of_property={this.state.postData.type_of_property}
                  onChange={(value, value1) => {
                    if (value !== "") {
                      this.handleChangeYear(value);
                    } else if (value1 !== "") {
                      this.handleChangeType(value1);
                    }
                  }}
                />
                <S3HouseSize
                  size_in_square_feet={this.state.postData.size_in_square_feet}
                  number_of_stories={this.state.postData.number_of_stories}
                  onChange={(value, value1) => {
                    if (value !== "") {
                      this.handleChangeStories(value);
                    } else if (value1 !== "") {
                      this.handleChangeSize(value1);
                    }
                  }}
                />
                <S4AboutInsurance
                  currently_insured={this.state.postData.currently_insured}
                  current_insurance_company={
                    this.state.postData.current_insurance_company
                  }
                  onChange={(value, value1) => {
                    if (value !== "") {
                      this.handleChangeInsured(value);
                    } else if (value1 !== "") {
                      this.handleChangeCompany(value1);
                    }
                  }}
                />
                <S5ClaimedAnything
                  // claimedAnything={this.state.postData.any_claims_over_last_3_years}
                  // howMany={this.state.postData.howMany}
                  // onChange={(value, value1) => {
                  //   if (value !== "") {
                  //     //this.handleChangeHowMany(value);
                  //   } else if (value1 !== "") {
                  //     this.handleChangeClaims(value1);
                  //   }
                  // }}

                  claimedAnything={this.state.postData.claimedAnything}
                  howMany={this.state.postData.howMany}
                  onChange={(value, value1) => {
                    if(value == "Yes"){
                      this.handleChangeClaims(value);
                    }
                     
                   else  if (value1 !== "") {
                      this.handleChangeHowMany(value1);
                    }
                  }}
                />
                <S6Personalnfo
                  first_name={this.state.postData.first_name}
                  last_name={this.state.postData.last_name}
                  onChange={(e, e1) => {
                    if (e !== "") {
                      this.handleChangeFirst_Name(e);
                    } else if (e1 !== "") {
                      this.handleChangeLast_Name(e1);
                    }
                  }}
                />
                <S7Personalnfo
                  phone_home={this.state.postData.phone_home}
                  email_address={this.state.postData.email_address}
                  onChange={(e, e1) => {
                    if (e !== "") {
                      this.handleChangePrimary_Phone(e);
                    } else if (e1 !== "") {
                      this.handleChangeEmail(e1);
                    }
                  }}
                />
                <S8Personalnfo
                  dob={this.state.postData.dob}
                  gender={this.state.postData.gender}
                  onChange={(e, value1) => {
                    if (e !== "") {
                      this.handleChangeDOB(e);
                    } else if (value1 !== "") {
                      this.handleChangeGender(value1);
                    }
                  }}
                />
                <S9Personalnfo
                  zip_code={this.state.postData.zip_code}
                  address={this.state.postData.address}
                  onChange={(e, e1) => {
                    if (e !== "") {
                      this.handleChangeZip(e);
                    } else if (e1 !== "") {
                      this.handleChangeAddress(e1);
                    }
                  }}
                />
                <S10Personalnfo
               callMediaAlpha={this.callMediaAlpha}
                city={this.state.postData.city}
                  Credit={this.state.postData.Credit}
                  onChange={(e, value1) => {
                    if (e !== "") {
                      this.handleChangeCity(e);
                    } else if (value1 !== "") {
                      this.handleChangeCredit(value1);
                    }
                  }}
                  object={this.state.postData}
                />
                <S11Final postData2={this.state.postData}/>
              </StepWizard>
            </div>
          </div>
        </div>

        <Grid
          container
          xs={12}
          align="center"
          style={{ justifyContent: "center" }}
        >
          <Grid container xs={8} style={{ justifyContent: "center" }}>
            <Grid item xs={12}>
              <Typography style={{ fontWeight: 700, lineHeight: 1.5 }}>
                Providers Include:
              </Typography>
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/1.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/2.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/3.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "0rem" }}>
              <img
                width="80%"
                height="auto"
                alt="missing"
                src={require("./Assets/4.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/5.png")}
              />
            </Grid>
          </Grid>
          <Grid
            container
            xs={10}
            style={{ paddingBottom: "1rem", marginTop: "1rem" }}
          >
            <Grid item lg={3} xs={12} style={{ alignSelf: "flex-end" }}>
              <Typography
                style={{ fontSize: "15px", color: "rgb(166, 166, 166)" }}
              >
                @ 2020 Quantum Assurance
              </Typography>
            </Grid>
            <Grid item lg={6} xs={0} />
            <Grid container lg={3} xs={12}>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    color: "rgb(166, 166, 166)",
                    fontWeight: 600,
                  }}
                >
                  <a
                    href="https://quantumassurance.com/"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Visit Us
                  </a>
                </Typography>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{ fontSize: "15px", color: "rgb(166, 166, 166)" }}
                >
                  <a
                    href="https://quantumassurance.com/privacy-policy"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Privacy Policy
                  </a>
                </Typography>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    color: "rgb(166, 166, 166)",
                    fontWeight: 600,
                  }}
                >
                  <a
                    href="https://quantumassurance.com/terms-conditions"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Terms & Conditions
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
