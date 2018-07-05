import React, { Component } from 'react';

class Detail extends Component {
  renderFeatures() {
    return this.props.projects[this.props.match.params.index].features.map(item =>
      <h5 key={item}>{item}</h5>,
    );
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 mb-4">
          <img className="img-fluid project-img" src={this.props.projects[this.props.match.params.index].image} alt={this.props.projects[this.props.match.params.index].title} />
        </div>
        <div className="col-lg-4 col-12 pt-3 px-4 pr-lg-5">
          <h1>{this.props.projects[this.props.match.params.index].title}</h1>
        </div>
        <div className="col-lg-8 col-12 pt-lg-3 mb-4 pl-lg-5 px-lg-0 px-4 portfolio-content">

          <h4>{this.props.projects[this.props.match.params.index].description}</h4><hr />
          {this.renderFeatures()}
          <h5>
            • <a href={this.props.projects[this.props.match.params.index].url} rel="noopener noreferrer" target="_blank">URL</a>
          </h5>
        </div>
      </div>);
  }
}

export default Detail;
