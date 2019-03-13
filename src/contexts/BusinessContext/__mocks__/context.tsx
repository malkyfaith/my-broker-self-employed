import { BusinessContextState } from '../types';

export const mockBusinessContext: BusinessContextState = {
  affiliatedParty: {
    title: 'Mrs.',
    firstName: 'Malkeet',
    middleName: 'Mel',
    lastName: 'Singh',
    contactNumber: '0444444444',
    email: 'mel@email.com',
    address: 'Lendi, Synder 8000'
  },
  updateAffiliatedParty: jest.fn(),
};
