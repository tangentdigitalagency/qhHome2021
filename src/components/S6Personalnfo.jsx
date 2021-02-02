import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import CommonComponents from "./CommonComponents";

class S6Personalnfo extends Component { 
  

  onFinish = (values) => {
    this.props.nextStep();
    console.log("Success:", values);
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
                first_name: this.props.first_name,
                last_name: this.props.last_name
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Personal Info</h3>
              <br />
              <h5>First Name</h5>
              <Form.Item
                name="first_name"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your First Name",
                  },
                  {
                      max:100, message:'Max Length Of First Name Is 100 Characters'
                  }
                ]}
              >
                <Input  
                  onChange={(e) => {
                    this.props.onChange(e, "");
                  }}
                  size="large"
                  placeholder="First Name"
                />
              </Form.Item>
              <h5>Last Name</h5>
              <Form.Item
                name="last_name"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Last Name",
                  },
                  {
                    max:100, message:'Max Length Of Last Name Is 100 Characters'
                }
                ]}
              >
                <Input 
                  onChange={(e) => {
                    this.props.onChange("", e);
                  }}
                  size="large"
                  placeholder="Last Name"
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

export default S6Personalnfo;
