import { default as styled } from 'styled-components';
import { colours, spacings } from '../styles/index.js';
import { BlockStatusText, BlockStatusTextProps } from './block_status_text.js';
import { blockStatusColours } from './index.js';

export const BlockStatusIndicator = styled(BlockStatusText)<BlockStatusTextProps>`
  position: relative;
  padding-right: ${spacings.l};
  letter-spacing: 1px;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: ${({ status }: BlockStatusTextProps) => colours[blockStatusColours[status]]};
  }
`;
