import React, { Component } from "react";
import { Form, Input, Select, Button } from "antd";
import CommonComponents from "./CommonComponents";
import Axios from "axios";  
const { Option } = Select;

class S10Personalnfo extends Component {
  state = {};

  onFinish = (values) => {
    console.log("Success:", values);
    
    this.props.nextStep();
    this.props.callMediaAlpha();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  PostDataOfHomeInsurance = (object) => {
    console.log(object);
    Axios.post("https://quotehound.leadspediatrack.com/post.do", null, {
      params: object,
    })
      .then((res) => {  
        console.log(res.data);
       
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  render() {
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
        <div className="d-flex" style={{ minHeight: "50vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                city : this.props.city
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item>
                <h3>Confirm Submission</h3>
                <br />
              </Form.Item>
              <h5>City</h5>
              <Form.Item
                name="city"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your City Name!",
                  },
                  {
                    max: 100,
                    message: "Max Length Of City is 100 Characters",
                  },
                ]}
              >
                <Input
                  defaultValue={this.props.city}
                  onChange={(value) => {
                    this.props.onChange(value, "");
                  }}
                  size="large"
                  placeholder="City"
                />
              </Form.Item>
              <h5>Credit Rating</h5>
              <Form.Item
                name="Credit"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select An Option!",
                  },
                ]}
              >
                <Select
                  onChange={(value) => {
                    this.props.onChange("", value);
                  }}
                  size="large"
                  placeholder="Credit Rating"
                >
                  <Option value="Average">Average</Option>
                  <Option value="Poor">Poor</Option>
                  <Option value="Good">Good</Option>
                  <Option value="Excellent">Excellent</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <p
                  className="text-justify"
                  style={{ color: "#777777", fontSize: "12px" }}
                >
                  By clicking "Get My Quote" I provide my electronic signature
                  and express written consent to telemarketing calls, text
                  messages, emails, and postal mail from this Web site our
                  marketing and re-marketing network, and up to eight insurance
                  companies or their affiliates or representatives at the phone
                  number (including wireless number), email address, and postal
                  address provided by me. I consent to calls and text messages
                  transmitting insurance quotes, or seeking related additional
                  information from me, using an Automatic Telephone Dialing
                  System or prerecorded or artificial voices. I consent that my
                  signature is not a condition of purchasing any property,
                  goods, or services and that I may revoke my consent at any
                  time.
                </p>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  onClick={() =>{
                    this.PostDataOfHomeInsurance(this.props.object);
                    }
                  }
                >
                  Get My Quote!
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default S10Personalnfo;
