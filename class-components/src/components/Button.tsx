import { Component } from 'react';

interface ButtonProps {
  handleSearch: () => void;
  isLoading: boolean;
}

export class Button extends Component<ButtonProps> {
  handleClick = () => {
    this.props.handleSearch();
  };
  render() {
    return (
      <button onClick={this.handleClick} disabled={this.props.isLoading}>
        Search
      </button>
    );
  }
}
