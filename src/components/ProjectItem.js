import React from "react";

class ProjectItem extends React.Component {
  render() {
    const { name, about, technologies } = this.props;
    
    return (
      <div className="project-item">
        <h3>{name}</h3>
        <p>{about}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectItem;