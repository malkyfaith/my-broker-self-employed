import BusinessDetails from '.';
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { mockBusinessContext } from '../../contexts/BusinessContext/__mocks__/context';
import AffiliatedPartyForm from '../AffiliatedParty';
import { Button } from '@lendi-ui/button';
import { Form } from 'react-final-form';

jest.mock('../../contexts/BusinessContext');

let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
function render() {
  component = mount(
    <Theme>
      <BusinessDetails />
    </Theme>
  );
}

describe('Business Details', () => {
  beforeEach(() => {
    jest.resetModules();
    render();
  });
  it('should render', () => {
    expect(component).toBeDefined();
    expect(component.find(AffiliatedPartyForm)).toHaveLength(1);
  });

  it('should add AffiliatedPartyForm', () => {
    expect(component.find(AffiliatedPartyForm)).toHaveLength(1);
  });

  it('should render save button', () => {
    expect(component.find(Button)).toHaveLength(1);
  });

  it('should call context updateAffiliatedParty on click', () => {
    component.find('Button').simulate('click');
    expect(mockBusinessContext.updateAffiliatedParty).toBeCalledTimes(1);
  });

  it('should render a form', () => {
    expect(component.find(Form)).toHaveLength(1);
  });
});
