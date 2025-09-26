import { Component } from 'react';
import { Result } from './components/Result';
import Search from './components/Search';
import type { ApiResponse, SuccessResponse } from './assets/type';

interface AppState {
  inputValue: string;
  isLoading: boolean;
  error: string | null;
  data: SuccessResponse | null;
}

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
    this.state = { inputValue: '', isLoading: false, error: null, data: null };
  }

  handleSearch = async () => {
    this.setState((prev) => ({ ...prev, isLoading: true }));
    localStorage.setItem('inputValue', this.state.inputValue);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${this.state.inputValue}`
    );
    const data = (await response.json()) as ApiResponse;
    if ('error' in data) {
      this.setState((prev) => ({
        ...prev,
        error: data.error,
        data: null,
        isLoading: false,
      }));
    } else {
      this.setState((prev) => ({
        ...prev,
        error: null,
        data,
        isLoading: false,
      }));
    }
  };

  handleInputValue = (value: string) => {
    this.setState({ inputValue: value });
  };

  render() {
    return (
      <>
        <Search
          handleSearch={this.handleSearch}
          handleInputValue={this.handleInputValue}
        />
        {this.state.isLoading && <div>Loading...</div>}
        <Result data={this.state.data} error={this.state.error} />
      </>
    );
  }
}

export default App;
