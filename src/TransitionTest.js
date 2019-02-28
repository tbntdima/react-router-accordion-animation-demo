import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class TransitionTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          text: 'link 0'
        },
        {
          id: 1,
          text: 'link 1'
        },
        {
          id: 2,
          text: 'link 2'
        },
      ]
    };
  }

  addItem = () => {
    const id = this.state.items.length;
    this.setState({
      items: [...this.state.items, {id: id, text: `link ${id}`}]
    });
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {this.state.items.map(item => (
            <CSSTransition
              key={item.id}
              classNames="panel"
              timeout={300}
              mountOnEnter
            >
              <li className="box">
                {item.text}
              </li>
            </CSSTransition>
          ))}
          <h1>Test</h1>
        </TransitionGroup>
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

export default TransitionTest;
