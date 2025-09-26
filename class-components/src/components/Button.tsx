import { Component } from 'react';

interface ButtonProps {
  handleSearch: () => void;
}

export class Button extends Component<ButtonProps> {
  handleClick = () => {
    this.props.handleSearch();
  };
  render() {
    return <button onClick={this.handleClick}>Search</button>;
  }
}
