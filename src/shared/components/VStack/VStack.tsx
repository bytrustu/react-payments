import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { AsProps, DefaultStyled, StyleProps } from '@/shared/styles';

type VStackProps = PropsWithChildren<StyleProps & AsProps>;
export const VStack = ({ children, ...props }: VStackProps) => <Root {...props}>{children}</Root>;

const Root = styled(DefaultStyled)<VStackProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
`;

VStack.displayName = 'VStack';
