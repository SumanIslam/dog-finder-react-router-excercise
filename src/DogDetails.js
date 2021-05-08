import React, { Component } from "react";
import { Link } from "react-router-dom";
// styles
import "./DogDetails.css";

class DogDetails extends Component {
  render() {
    const { dog } = this.props;
    return (
        <div className="DogDetails row justify-content-center">
          <div className="col col-11 col-lg-5">
            <div className="DogDetails-card card mt-2">
              <img className="card-img-top" src={dog.src} alt={dog.name} />
              <div className="card-body">
                <h2 className="card-title">{dog.name}</h2>
                <p className="card-subtitle text-muted font-weight-bold mb-2">
                  {dog.age} years old
                </p>
              </div>
              <ul className="list-group list-group-flush">
                {dog.facts.map((fact,i) => (
                  <li className="list-group-item" key={i}>{fact}</li>
                ))}
              </ul>
              <div className="card-body">
                <Link to="/dogs" className="card-link btn btn-info">
                  Go Back!
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default DogDetails;
