import styled from 'styled-components';
import { p } from '@lendi-ui/spacing';
import { grid, unit } from '@lendi-ui/grid';

// REMOVE WHEN GRID IS FIXED
const Unit = styled.div`
  ${unit};
`;
export const Grid = styled.div`
  ${grid};
`;
//

export const PaddedUnit = styled(Unit)`
  ${p('xs')};
`;
