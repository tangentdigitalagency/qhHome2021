import React, { Component } from "react";
import { Form, Select, Button, Progress  } from "antd";
import CommonComponents from "./CommonComponents";
import { withRouter } from "react-router-dom";
const { Option } = Select;

class S1OwnOrRent extends Component {
  onFinish = (values) => {
    // this.props.nextStep();
    this.props.history.push("/step2");
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
              <h1> Get your free quote!</h1>
              <h3>Do You Own Or Rent</h3>
              <br />
              <Form.Item
                name="own_or_rent"
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
                  <Option value="Own">I Own</Option>
                  <Option value="Rent">I Rent</Option>
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

export default withRouter(S1OwnOrRent);
