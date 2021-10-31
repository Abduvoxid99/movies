import React, { Component } from "react";
import "./error.css"

export default class Error extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h5 className="h2"><strong>Siz izlagan kino topilmadi!</strong></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
