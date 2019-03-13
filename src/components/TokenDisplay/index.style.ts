import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { container } from '@lendi-ui/container';
import { px, py, p } from '@lendi-ui/spacing';

export const Wrapper = styled.div`
  text-align: center;
  ${p({ mobile: 'xxxs', tablet: 'lg' })} ${px({ mobile: 'sm', tablet: 'sm', desktop: 'nil' })};
  ${py({ mobile: 'md', tablet: 'md', desktop: 'lg' })};
`;

export const Container = styled.div`
  ${container()};
  ${py({ mobile: 'md', tablet: 'md', desktop: 'lg' })};
  ${bg('shade.100')};
`;
