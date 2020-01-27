import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.title = `Вы нажали на кнопку ${this.state.count} раз`;
  }
  componentDidUpdate() {
    document.title = `Вы нажали на кнопку ${this.state.count} раз`;
  }
  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <p>Вы нажали на кнопку {this.state.count} раз</p>
        <button onClick={this.handleClick}>
          Нажми на меня
        </button>
      </div>
    );
  }
}

export default Counter;