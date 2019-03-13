import * as React from 'react';
import { Form } from 'react-final-form';
import { Button } from '@lendi-ui/button';
import AffiliatedPartyForm from '../AffiliatedParty';
import AffiliatedParty from '../../models/affilicatedParty.model';
import { BusinessContext } from '../../contexts/BusinessContext';
import { BusinessContextState } from '../../contexts/BusinessContext/types';
import { Fetch } from 'react-request';
export default class BusinessDetails extends React.Component {
  onSubmit(values: any) {
    window.alert(JSON.stringify(values, undefined, 2));
  }

  save(ctx: BusinessContextState, values: any): void {
    // api call, then
    console.log('save click');
    ctx.updateAffiliatedParty(values);
  }
  render() {
    return (
      <BusinessContext.Consumer>
        {(context) => {
          let affiliatedPartyValues: AffiliatedParty;
          if (context.affiliatedParty) affiliatedPartyValues = { ...context.affiliatedParty };
          return (
            <Form onSubmit={this.onSubmit} initialValues={{ ...context.affiliatedParty }}>
              {({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                  {/**
                  In future there will be more components related to business details like ABN lookup, ANZSIC lookup, Role, Business address.
                */}

                  <AffiliatedPartyForm {...affiliatedPartyValues} />
                  <pre>{JSON.stringify(values, undefined, 2)}</pre>
                  <Fetch url="http://localhost:5000/api/v1/affiliated-parties" method="post" body={JSON.stringify(values)} lazy>
                    {({ doFetch }: {doFetch: any}) => (
                      <Button variant="primary" onClick={() => doFetch()}>
                        Save
                      </Button>
                    )}
                  </Fetch>
                </form>
              )}
            </Form>
          );
        }}
      </BusinessContext.Consumer>
    );
  }
}
