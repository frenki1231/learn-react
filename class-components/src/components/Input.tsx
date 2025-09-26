import { Component } from 'react';

interface InputProps {
  handleInputValue: (value: string) => void;
}
interface InputState {
  value: string;
}

export class Input extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      value: '',
    };
  }

  componentDidMount(): void {
    this.setState({ value: localStorage.getItem('inputValue') ?? '' });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
    this.props.handleInputValue(event.target.value);
  };

  render() {
    return <input value={this.state.value} onChange={this.handleChange} />;
  }
}
