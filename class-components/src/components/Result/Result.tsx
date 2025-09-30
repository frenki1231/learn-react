import { Component } from 'react';
import type { SuccessResponse } from '../../assets/type';
import ListItems from '../ListItems/ListItems';

type ResultProps = {
  data: SuccessResponse | null;
  error: string | null;
};

export class Result extends Component<ResultProps> {
  render() {
    return (
      <div>
        {this.props.error && <div>{this.props.error}</div>}
        {this.props.data && <ListItems items={this.props.data.results} />}
      </div>
    );
  }
}
