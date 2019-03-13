import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Button } from '@lendi-ui/button';
import Theme from '@lendi-ui/theme';
import { TEST_TOKEN_VALUE } from '../../constants/token';
import { getTokenFromStorage, removeTokenFromStorage, setTokenIntoStorage } from '../../utils/token';

import TokenDisplay from './index';

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

function render() {
  wrapper = mount(
    <Theme>
      <TokenDisplay />
    </Theme>
  );
}

beforeEach(() => {
  removeTokenFromStorage();
  render();
});

describe('TokenDisplay', () => {
  it('should render a button', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should remove the token from localstorage when clicked', () => {
    window.location.reload = jest.fn();
    setTokenIntoStorage(TEST_TOKEN_VALUE);
    let tokenValue = getTokenFromStorage();
    expect(tokenValue).toBe(TEST_TOKEN_VALUE);

    wrapper.find(Button).simulate('click');

    tokenValue = getTokenFromStorage();
    expect(tokenValue).toBeNull();
    expect(window.location.reload).toBeCalledTimes(1);
  });
});
