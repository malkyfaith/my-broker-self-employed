import AffiliatedParty from '../../models/affilicatedParty.model';

export interface BusinessProviderState {
  affiliatedParty: AffiliatedParty | null;
}

export interface BusinessContextState extends BusinessProviderState {
  updateAffiliatedParty: (acct: AffiliatedParty) => void;
}
