import { ManualAddress } from '.';
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Form, Field as FinalField } from 'react-final-form';
import Field from '@lendi-ui/field';
import { Unit, Grid } from '../BusinessDetails/index.style';

let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
function render(type: string) {
  component = mount(
    <Theme>
      <Form onSubmit={jest.fn()}>
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <ManualAddress type={type} />
          </form>
        )}
      </Form>
    </Theme>
  );
}
const types = ['Accountant', 'Business'];

describe('ManualAddress', () => {
  types.forEach((type) => {
    describe(`${type} Address type`, () => {
      beforeEach(() => {
        render(type);
      });
      it('should render ManualAddress', () => {
        expect(component).toBeDefined();
        expect(component.find(ManualAddress)).toHaveLength(1);
      });
      it('should render Fields', () => {
        expect(component).toBeDefined();
        expect(component.find(FinalField)).toHaveLength(7);
        expect(component.find(Field)).toHaveLength(7);
        component.find(Field).forEach(f => {
            expect(f.props().label).toBeDefined();
            expect(f.props().touched).toBeDefined();
        })
      });
      it(`should assert all field name having correct name type - ${type}`, () => {
        expect(
          component
            .find(FinalField)
            .first()
            .props().name
        ).toEqual(`${type}.unitNo`);
        component.find(FinalField).forEach((field) => expect(field.props().name.indexOf(`${type}`)).not.toEqual(-1));
      });
      it('should have render with LUI grid', ()=>{
        expect(component.find(Grid)).toBeDefined();
        expect(component.find(Unit)).toBeDefined();
      })
    });
  });
});
