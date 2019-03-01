import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films?limit=5')
      .then(
        response => {
          if (response.status !== 200) {
            console.log(`Looks like there was a problem. Status Code: ${response.status}`);
            return;
          }

          response.json().then(data => {
            this.setState({projects: data})
          })
        }
      )
      .catch(err => {
        console.log(`Fetch Error :-S ${err}`);
      })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.projects.map(project => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>strong: <strong>{project.director}</strong> | release date: <strong>{project.release_date}</strong></p>
              <hr/>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default About;
