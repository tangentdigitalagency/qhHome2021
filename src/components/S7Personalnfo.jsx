import React, { Component } from "react";
import { Form, Input, Button, Progress } from "antd";
import CommonComponents from "./CommonComponents";
import { withRouter } from "react-router-dom";

class S7Personalnfo extends Component {
  state = {};

  onFinish = (values) => {
    // this.props.nextStep();
    // console.log("Success:", values);
    this.props.history.push("/step8");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
                <Progress percent={63} status="active" showInfo={true} className="pbar" />

        {/* <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        /> */}
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
                Phone: this.props.phone_home,
                email_address: this.props.email_address,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Personal Info</h3>
              <br />
              <h5>Phone Number</h5>
              <Form.Item
                name="phone_home"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your phone number !",
                  },
                  {
                    max: 10,
                    message: "Please Enter A Correct Phone Number",
                  },
                  {
                    min: 10,
                    message: "Please Enter A Correct Phone Number",
                  },
                ]}
              >
                <Input
                  defaultValue={this.props.phone_home}
                  type="number"
                  onChange={(value) => {
                    this.props.onChange(value, "");
                  }}
                  size="large"
                  placeholder="1234567890"
                />
              </Form.Item>
              <h5>Email</h5>
              <Form.Item
                value={this.props.email_address}
                name="email_address"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Email Address!",
                  },
                  {
                    type: "email",
                    message: "Email Is Not Correct",
                  },
                ]}
              >
                <Input
                  defaultValue={this.props.Email}
                  onChange={(value) => {
                    this.props.onChange("", value);
                  }}
                  size="large"
                  placeholder="abc@email.com"
                />
              </Form.Item>

              <p className="tcpa">
                By hitting <b> Next </b> below, I provide my express written
                consent to the following. Telemarketing calls, text messages,
                emails, and postal mail from this Web site, our{" "}
                <a href="https://www.quotehound.com/partners">marketing </a> and
                re-marketing network, and up to eight insurance companies or
                their affiliates or representatives at the phone number
                (including wireless number), email address, and postal address
                provided by me. Telemarketing calls, text messages, emails, and
                postal mail (including wireless number), email address, and
                postal address provided by me. Calls and text messages
                transmitting insurance quotes, or seeking related additional
                information from me, using an Automated Telephone Dialing System
                or prerecorded or artificial voices. Electronic video monitoring
                and recordation of my activities on this Site; and I acknowledge
                that I may revoke my consent at any time by Calling
                <a href="tel:1883161350">1 888-316-1350 </a> or emailing “STOP”
                to
                <a href="mailto:optout@quotehound.com">
                  {" "}
                  optout@quotehound.com
                </a>
                .<b>I AGREE TO ALL OF THE ABOVE AND SEND MY QUOTE</b>
              </p>
              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Next
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(S7Personalnfo);
