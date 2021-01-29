import React, { Component } from "react";
import CheckboxComp from "./CheckboxComp";
import RadioComp from "./RadioComp";

import TextAreaComp from "./TextAreaComp";

export default class PageHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tipeSoal: "radio",
      soal: "",
      jawabA: "",
      jawabB: "",
      jawabC: "",
      jawabD: "",
      kunci: "",
      score: "",
    };
  }
  changeType = (e) => {
    this.setState({ tipeSoal: e.target.value });
  };

  tampilSoal = () => {
    if (this.state.tipeSoal === "checkbox") {
      return <CheckboxComp />;
    } else if (this.state.tipeSoal === "radio") {
      return <RadioComp />;
    } else {
      return <TextAreaComp />;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col" style={{ backgroundColor: "#62959c" }}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Api berwarna apa ?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Merah
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Hitam
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Ungu
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Hijau
                </label>
              </div>
            </div>
          </div>
          <div className="col-sm" style={{ backgroundColor: "#a3ddcb" }}>
            <div className="container">
              <label htmlFor="">Select</label>
              <select className="form-select" onChange={this.changeType}>
                <option value="radio">Radio</option>
                <option value="checkbox">CheckBox</option>
                <option value="textarea">TextArea</option>
              </select>
              {this.tampilSoal()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="container">
  <label htmlFor="">Select</label>
  <select className="form-select" onChange={this.changeType}>
    <option value="radio">Radio</option>
    <option value="checkbox">CheckBox</option>
    <option value="textarea">TextArea</option>
  </select>
</div>;
{
  this.tampilSoal();
} */
}
