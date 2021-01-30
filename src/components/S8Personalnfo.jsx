import React, { Component } from "react"; 
import { Form, Button, Select, Input } from "antd";
import CommonComponents from "./CommonComponents"; 
const { Option } = Select;
class S8Personalnfo extends Component {
  state = {};





  CreateDateOfBirthSelect = () => {
    return ( 
      <Input
          onChange={(e)=>this.props.onChange(e,'')}
          className="w-100 text-center"
          align="center"
          size="large" 
          maxLength={10}
          placeholder="MM/DD/YYYY"
          value={this.props.dob}
        /> 
    );
  };

  onFinish = (values) => {
    this.props.nextStep();
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px"}}>
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
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Personal Info</h3>
                <br />
                <h5>Date Of Birth</h5>
              <Form.Item>
                {this.CreateDateOfBirthSelect()}
              </Form.Item>
              <h5>Gender</h5>
              <Form.Item
                name="Gender"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select An Option!",
                  },
                ]}>
                

                <Select
                  onChange={(value) => {
                    this.props.onChange("", value);
                  }}
                  size="large"
                  placeholder="Select An Option"
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Non-binary">Non Binary</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button 
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                >
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

export default S8Personalnfo;
