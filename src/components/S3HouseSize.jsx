import React, { Component } from "react";
import { Form, Select, Button } from "antd";
import CommonComponents from "./CommonComponents";
const { Option } = Select;
class S3HouseSize extends Component {
  state = {};

  CreateHomeSizeSelect = () => {
    let i = 0;
    
    const arr = [];
    for (i = 500; i <= 5200; i += 100) {
      arr.push(
        <Option className="p-0 text-center" key={i} value={i}>
          {i}
        </Option>
      );
    }
    return arr;
  };

  CreateNumberOfStoriesSelect = () => {
    const arr = [];
    const storiesValues=['1','1.5','2','3','4','Bi-Level','Tri-Level'];
    for (let j = 0; j < storiesValues.length; j++) {
      arr.push(
        <Option className="p-0 text-center" key={storiesValues[j]} value={storiesValues[j]}>
          {storiesValues[j]}
        </Option>
      );
    }
    return arr;
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
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
        {/* <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        /> */}
        <div className=" d-flex" style={{ minHeight: "50vh" }}>
          <div
            className=" card-body d-xl-flex justify-content-center align-items-center"
            align="center"
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Tell Me a Little Bit About Your Home Size</h3>
              <br />
              <h5>Number Of Stories</h5>
              <Form.Item
                name="stories"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select An Option!",
                  },
                ]}
              >
                <Select
                //defaultValue={this.props.Stories}
                  size="large"
                  placeholder="Number Of Stories"
                  onChange={(value) => {
                    this.props.onChange(value, "");
                  }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {this.CreateNumberOfStoriesSelect()}
                </Select>
              </Form.Item>
              <h5>Size In Square Feet</h5>
              <Form.Item>
                <Select
                  //defaultValue={this.props.size_in_square_feet}
                  size="large"
                  placeholder="House Size"
                  onChange={(value) => {
                    this.props.onChange("", value);
                  }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {this.CreateHomeSizeSelect()}
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

export default S3HouseSize;
