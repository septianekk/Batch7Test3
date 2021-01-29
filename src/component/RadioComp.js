import React, { Component } from "react";

export default class RadioComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soal: "",
      jawabA: "",
      jawabB: "",
      jawabC: "",
      jawabD: "",
      kunci: "",
      score: "",
    };
  }

  handleChangeSoal = (e) => {
    this.setState({ soal: e.target.value });
  };

  handleJawabA = (e) => {
    this.setState({ jawabA: e.target.value });
  };

  handleJawabB = (e) => {
    this.setState({ jawabB: e.target.value });
  };

  handleJawabC = (e) => {
    this.setState({ jawabC: e.target.value });
  };

  handleJawabD = (e) => {
    this.setState({ jawabD: e.target.value });
  };

  handleKunci = (e) => {
    this.setState({ kunci: e.target.value });
  };

  handleScore = (e) => {
    this.setState({ score: e.target.value });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    alert(
      `soal : ${this.state.soal} A: ${this.state.jawabA} B: ${this.state.jawabB} B: ${this.state.jawabB} C: ${this.state.jawabC} D: ${this.state.jawabD}`
    );
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
              Jawab A
            </label>
            <input
              value={this.state.jawabA}
              className="form-control"
              id="exampleFormControlInput1"
              onChange={this.handleJawabA}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Jawab B
            </label>
            <input
              value={this.state.jawabB}
              className="form-control"
              id="exampleFormControlInput1"
              onChange={this.handleJawabB}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Jawab C
            </label>
            <input
              value={this.state.jawabC}
              className="form-control"
              id="exampleFormControlInput1"
              onChange={this.handleJawabC}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Jawab D
            </label>
            <input
              value={this.state.jawabD}
              className="form-control"
              id="exampleFormControlInput1"
              onChange={this.handleJawabD}
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
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
