import React, { Component } from "react";

export default class TextAreaComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soal: "",
      kunci: "",
      score: "",
    };
  }

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    alert(
      `soal : ${this.state.soal} Kunci:${this.state.kunci} Score: ${this.state.score} `
    );
  };

  handleChangeSoal = (e) => {
    this.setState({ soal: e.target.value });
  };

  handleKunci = (e) => {
    this.setState({ kunci: e.target.value });
  };

  handleScore = (e) => {
    this.setState({ score: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Soal
            </label>
            <input
              value={this.state.soal}
              className="form-control"
              id="exampleFormControlInput1"
              onChange={this.handleChangeSoal}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Kunci
            </label>
            <input
              value={this.state.kunci}
              className="form-control"
              id="exampleFormControlInput1"
              onChange={this.handleKunci}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Score
            </label>
            <input
              value={this.state.score}
              className="form-control"
              id="exampleFormControlInput1"
              onChange={this.handleScore}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
