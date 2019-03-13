import * as React from 'react';
import AffiliatedParty from '../../models/affilicatedParty.model';
import { BusinessContextState, BusinessProviderState } from './types';

// Business context conatining all information related to business like accountant details
export const BusinessContext = React.createContext<BusinessContextState>({
  affiliatedParty: null,
  updateAffiliatedParty: () => {},
});

export class BusinessProvider extends React.Component<{}, BusinessProviderState> {
  state: BusinessProviderState = {
    affiliatedParty: null,
  };

  componentDidMount() {
    // there will be an ajax request to access accoutant details from back-end
    const affiliatedParty: AffiliatedParty = {
      title: 'Mrs.',
      firstName: 'Malkeet',
      middleName: 'Mel',
      lastName: 'Singh',
      contactNumber: '0444444444',
      email: 'mel@email.com',
      address: 'Lendi, Synder 8000'
    };
    this.setState({
      affiliatedParty,
    });
  }

  // on success saving of affiliated prty details, update the context.
  updateAffiliatedParty = (affiliatedParty: AffiliatedParty) => {
    console.log('inside business context:', affiliatedParty);
    
    this.setState({
      affiliatedParty,
    });
  };

  render() {
    return (
      <BusinessContext.Provider value={{ ...this.state, updateAffiliatedParty: this.updateAffiliatedParty }}>
        {this.props.children}
      </BusinessContext.Provider>
    );
  }
}
