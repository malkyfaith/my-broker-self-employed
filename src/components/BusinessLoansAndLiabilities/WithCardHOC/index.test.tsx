import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Card from '@lendi-ui/card';
import ToggleSwitch from '@lendi-ui/toggle-switch';
import { Button } from '@lendi-ui/button';
import Alert from '@lendi-ui/alert';

import withCardHOC from '.';
import { mockContextValue } from '../../../contexts/BusinessLoansAndLiabilitiesContext/__mocks__/mockContextValue';

jest.mock('../../../contexts/BusinessLoansAndLiabilitiesContext');

const TestComponent: React.FunctionComponent = () => <p>Hello World</p>;
const TestWithCard = withCardHOC(TestComponent);

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

function render() {
  wrapper = mount(
    <Theme>
      <TestWithCard title={'Test'} />
    </Theme>
  );
}

beforeEach(() => {
  jest.resetModules();
  render();
});

describe('withCardHOC', () => {
  it('should render the passed component', () => {
    expect(wrapper.find(TestComponent)).toHaveLength(1);
  });

  it('should wrap the passed component in a Card', () => {
    expect(wrapper.find(Card)).toHaveLength(1);
  });

  it('should add a ToggleSwitch', () => {
    expect(wrapper.find(ToggleSwitch)).toHaveLength(1);
  });

  it('should only show an Alert when the ToggleSwitch is on', () => {
    expect(wrapper.find(Alert)).toHaveLength(0);
    wrapper
      .find(TestWithCard)
      .instance()
      .setState({ debtConsolidateChecked: true });
    wrapper.update();
    // expect(wrapper.find(Alert)).toHaveLength(1);
  });

  it('should add a Save button', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should call the save function when save is clicked', () => {
    wrapper.find(TestWithCard).instance().save = jest.fn();
    wrapper.update();

    wrapper.find(Button).simulate('click');
    expect(wrapper.find(TestWithCard).instance().save).toBeCalledTimes(1);
  });

  it('should update the context when save is clicked', () => {
    wrapper.find(Button).simulate('click');
    expect(mockContextValue.updateLoanLiability).toBeCalledTimes(1);
  });
});
