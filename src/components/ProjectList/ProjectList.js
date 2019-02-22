import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectList extends Component {
  renderTags = tags =>
    tags.map(tag => (
      <div className="tag" key={tag}>
        {tag}
      </div>
    ));
  renderProjects = () =>
    this.props.projects.map((project, index) => (
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={project.image}>
        <div className="card mb-4 box-shadow h-100">
          <img
            className="card-img-top"
            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
            alt="Project Thumbnail"
            style={{ height: '225px', width: '100%', display: 'block' }}
            src={project.image}
            data-holder-rendered="true"
          />
          <div className="card-body">
            <ul className="tags">
              <li>{project.tags && this.renderTags(project.tags)}</li>
            </ul>
            <p className="card-text">{project.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to={`/detail/${this.props.type}/${index}`}>
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                </Link>
              </div>
              <small className="text-muted">{project.date}</small>
            </div>
          </div>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="album py-5">
        <div className="container">
          <div className="row">{this.renderProjects()}</div>
        </div>
      </div>
    );
  }
}

export default ProjectList;
