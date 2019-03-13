import * as React from 'react';
import { TEST_TOKEN_KEY } from '../constants/token';

interface TokenContextState {
  token: string | null;
}

export const TokenContext = React.createContext<TokenContextState>({ token: null });

export const TokenConsumer = TokenContext.Consumer;

export class TokenProvider extends React.Component<{}, TokenContextState> {
  constructor(props: {}) {
    super(props);

    // Have to do this in the constructor rather than componentDidMount so that its immediatly available to consumers
    this.state = {
      token: localStorage.getItem(TEST_TOKEN_KEY),
    };
  }

  render() {
    return <TokenContext.Provider value={this.state}>{this.props.children}</TokenContext.Provider>;
  }
}
