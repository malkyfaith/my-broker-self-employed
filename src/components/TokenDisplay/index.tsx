import * as React from 'react';
import { Button } from '@lendi-ui/button';
import { Heading, Body } from '@lendi-ui/typography';
import { removeTokenFromStorage } from '../../utils/token';
import { TokenConsumer } from '../../contexts/token-context';
import { Wrapper, Container } from './index.style';
class TokenDisplay extends React.Component {
  removeToken = () => {
    removeTokenFromStorage();
    window.location.reload();
  };

  render() {
    return (
      <TokenConsumer>
        {({ token }) => (
          <Wrapper>
            <Container>
              <Heading size="md">Token Display</Heading>
              <Body size="sm" align="justify" m="md">
                {token}
              </Body>
              <Button variant="emphasis" onClick={this.removeToken}>
                Remove Token
              </Button>
            </Container>
          </Wrapper>
        )}
      </TokenConsumer>
    );
  }
}

export default TokenDisplay;
