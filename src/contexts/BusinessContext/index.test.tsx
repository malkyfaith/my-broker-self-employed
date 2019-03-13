import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { BusinessProvider } from '.';
import { BusinessProviderState } from './types';

let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
function render() {
  component = mount(
    <Theme>
      <BusinessProvider />
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
    console.log(component.find(BusinessProvider).instance().state);
  });
  it('should render component with an state having affiliatedParty object', () => {
    expect((component.find(BusinessProvider).instance().state as BusinessProviderState).affiliatedParty).toBeDefined();
  });
});
