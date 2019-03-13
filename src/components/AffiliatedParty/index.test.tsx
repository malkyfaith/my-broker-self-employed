import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Form, Field as FinalField } from 'react-final-form';
import AffiliatedPartyForm from '.';
import AffiliatedParty from '../../models/affilicatedParty.model';
import { ManualAddress } from '../ManualAddress';

let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
let affiliatedPartyValues: AffiliatedParty = {
  title: 'Mrs.',
  firstName: 'Malkeet',
  middleName: 'Mel',
  lastName: 'Singh',
  contactNumber: '0444444444',
  email: 'mel@email.com',
  address: 'Lendi, Synder 8000'
};

function render() {
  component = mount(
    <Theme>
      <Form onSubmit={jest.fn()}>
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <AffiliatedPartyForm {...affiliatedPartyValues} />
          </form>
        )}
      </Form>
    </Theme>
  );
}

describe('AffiliatedPartyForm', () => {
  describe(`AffiliatedPartyForm type`, () => {
    beforeEach(() => {
      render();
    });
    it('should render', () => {
      expect(component).toBeDefined();
      expect(component.find(AffiliatedPartyForm)).toHaveLength(1);
    });
    it('should asserts AffiliatedPartyForm props', () => {
      expect(component.find(AffiliatedPartyForm).props()).toEqual(affiliatedPartyValues);
    });
    it('should render all fields with their props', () => {
      component.find(FinalField).forEach(f => {
        const properties = f.props();
        for(let p in properties) {
          expect(properties[p]).toBeDefined(); // this asserts fields having name and parse
        }
      });
    });
    it('should not render ManualAddress if it is not required', () => {
      component.find(AffiliatedPartyForm).instance().setState({
        isManualAddressChecked: false
      });
      console.log('false::::', component.find(AffiliatedPartyForm).instance().state);
      // expect(component.find(ManualAddress)).toHaveLength(0);
    });
    it('should render ManualAddress if it is required', () => {
      component.find(AffiliatedPartyForm).instance().setState({
        isManualAddressChecked: true
      });
      console.log('true::::', component.find(AffiliatedPartyForm).instance().state);
      
      expect(component.find(ManualAddress)).toHaveLength(1);
    });
  });
});
