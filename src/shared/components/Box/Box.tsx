import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { AsProps, StyleProps } from '@/shared/styles';
import { DefaultStyled } from '@/shared/styles/DefaultStyled.tsx';

type BoxProps = PropsWithChildren<StyleProps & AsProps>;

export const Box = ({ children, ...props }: BoxProps) => <Root {...props}>{children}</Root>;

const Root = styled(DefaultStyled)<BoxProps>``;

Box.displayName = 'Box';
