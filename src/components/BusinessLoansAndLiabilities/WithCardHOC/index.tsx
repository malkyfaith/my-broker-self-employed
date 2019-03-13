import * as React from 'react';
import { Field as FinalField, Form } from 'react-final-form';
import Alert from '@lendi-ui/alert';
import { Button } from '@lendi-ui/button';
import Field from '@lendi-ui/field';
import ToggleSwitch from '@lendi-ui/toggle-switch';
import { ButtonWrapper, StyledCard } from './index.style';
import { BusinessLoansAndLiabilitiesContext } from '../../../contexts/BusinessLoansAndLiabilitiesContext';
import { consolidateDebtFieldData } from '../../../models/loanLiability.model';

// Reference: https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb

interface withCardHOCProps {
  title: string;
}

const withCardHOC = <P extends object>(Component: React.ComponentType<P>) => {
  return class extends React.Component<P & withCardHOCProps> {
    static contextType = BusinessLoansAndLiabilitiesContext;

    getAlert = () => (
      <Alert variant={'warn'}>
        Most lenders have strict policies around consolidating business loans and liabilities, please contact your BDM
        to confirm
      </Alert>
    );

    getToggle = () => {
      //const { debtConsolidateChecked } = this.state;
      return (
        <FinalField {...consolidateDebtFieldData}>
          {({ input, meta }) => {
            return (
              <Field error={meta.error} touched={meta.touched}>
                <ToggleSwitch size={'sm'} {...input} isChecked={input.value} label={'Consolidate this debt'} />
              </Field>
            );
          }}
        </FinalField>
      );
    };

    onSubmit(values: any) {
      window.alert(JSON.stringify(values, undefined, 2));
    }

    save(values: any): void {
      // TODO: Save data to database
      this.context.updateLoanLiability(values);
    }

    render() {
      const { title, ...rest } = this.props;
      return (
        <StyledCard title={title}>
          <Form onSubmit={this.onSubmit} initialValues={{ ...this.context.loanLiability }}>
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <Component {...rest as P} />
                {this.getToggle()}
                {values.clearing_from_this_loan && this.getAlert()}
                <pre>{JSON.stringify(values, undefined, 2)}</pre>
                <ButtonWrapper>
                  <Button variant={'primary'} isInverse onClick={() => this.save(values)}>
                    Save
                  </Button>
                </ButtonWrapper>
              </form>
            )}
          </Form>
        </StyledCard>
      );
    }
  };
};

export default withCardHOC;
