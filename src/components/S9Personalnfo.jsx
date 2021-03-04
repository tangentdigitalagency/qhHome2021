import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import CommonComponents from "./CommonComponents";
import { withRouter } from "react-router-dom";

class S9Personalnfo extends Component {
  state = {};

  onFinish = (values) => {
    // this.props.nextStep();
    // console.log("Success:", values);
    this.props.history.push("/step10");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
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
                zip_code: this.props.zip_code,
                address: this.props.address,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Personal Info</h3>
              <br />
              <h5>Zip Code</h5>
              <Form.Item
                name="zip_code"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Zip Code!",
                  },
                  {
                    max: 5,
                    message: "Max Length Of Zip Code is 6 characters",
                  },
                  {
                    min: 5,
                    message: "Min Length Of Zip Code is 6 characters",
                  },
                ]}
              >
                <Input
                  onChange={(value) => {
                    this.props.onChange(value, "");
                  }}
                  size="large"
                  placeholder="Zip Code"
                />
              </Form.Item>
              <h5>Address</h5>
              <Form.Item
                name="address"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Address!",
                  },
                  {
                    max: 100,
                    message: "Max Length Of Address Is 250 Characters",
                  },
                ]}
              >
                <Input
                  onChange={(value) => {
                    this.props.onChange("", value);
                  }}
                  size="large"
                  placeholder="Address"
                />
              </Form.Item>
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

export default withRouter(S9Personalnfo);
