import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Dropdown from '@lendi-ui/dropdown';
import { Input } from '@lendi-ui/text-input';
import Theme from '@lendi-ui/theme';

import CreditCardStoreCard from '.';

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

function render() {
  wrapper = mount(
    <Theme>
      <CreditCardStoreCard title={'Test Title'} />
    </Theme>
  );
}

beforeEach(() => {
  render();
});

describe('TokenDisplay', () => {
  it('should render two Dropdowns and two Inputs', () => {
    expect(wrapper.find(Dropdown)).toHaveLength(2);
    expect(wrapper.find(Input)).toHaveLength(2);
  });
});
