import React, { Component } from "react";
import { Form, Select, Button } from "antd";
import CommonComponents from "./CommonComponents";
const { Option } = Select;

class S1OwnOrRent extends Component {
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

        <div className=" d-xl-flex d-sm-flex" style={{ minHeight: "50vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
          >
           <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
               <h1> Start Saving On Homeowners Insurance Today!</h1>
              <h3>Do You Own Or Rent</h3>
              <br />
              <Form.Item
                name="ownOrRent"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select An Option!",
                  },
                ]}
              >
                <Select
                  placeholder="Select An Option"
                  onChange={(value) => this.props.onChange(value)}
                  size="large"
                >
                  <Option value="i-own">I Own</Option>
                  <Option value="i-rent">I Rent</Option>
                </Select>
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

export default S1OwnOrRent;
