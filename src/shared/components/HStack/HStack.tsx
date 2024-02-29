import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { AsProps, StyleProps } from '@/shared/styles';
import { DefaultStyled } from '@/shared/styles/DefaultStyled.tsx';

type HStackProps = PropsWithChildren<StyleProps & AsProps>;

export const HStack = ({ children, ...props }: HStackProps) => <Root {...props}>{children}</Root>;

const Root = styled(DefaultStyled)<HStackProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
`;

HStack.displayName = 'HStack';
