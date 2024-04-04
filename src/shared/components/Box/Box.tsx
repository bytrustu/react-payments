import { PropsWithChildren, FocusEvent, forwardRef } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type BoxProps = PropsWithChildren<
  StyleProps &
    AsProps & {
      onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
      onMouseEnter?: () => void;
      onMouseLeave?: () => void;
      tabIndex?: number;
    }
>;

const Root = styled(DefaultStyled)<BoxProps>``;

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, tabIndex = -1, ...props }, ref) => (
  <Root tabIndex={tabIndex} ref={ref} {...props}>
    {children}
  </Root>
));

Box.displayName = 'Box';
