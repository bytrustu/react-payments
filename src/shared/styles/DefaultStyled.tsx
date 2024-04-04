import styled from '@emotion/styled';

import type { AsProps, StyleProps } from '@/shared/types';

type DefaultStyledProps = StyleProps & AsProps;

export const DefaultStyled = styled.div<DefaultStyledProps>`
  ${({ display }) => display && `display: ${display};`};
  ${({ flex }) => flex && `flex: ${flex};`};
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent};`};
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`};
  ${({ flexBasis }) => flexBasis && `flex-basis: ${flexBasis};`};
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`};
  ${({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink};`};
  ${({ order }) => order && `order: ${order};`};
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`};
  ${({ gap }) => gap && `gap: ${gap};`};
  ${({ gridGap }) => gridGap && `grid-gap: ${gridGap};`};
  ${({ gridRowGap }) => gridRowGap && `grid-row-gap: ${gridRowGap};`};
  ${({ gridColumnGap }) => gridColumnGap && `grid-column-gap: ${gridColumnGap};`};
  ${({ gridTemplateRows }) => gridTemplateRows && `grid-template-rows: ${gridTemplateRows};`};
  ${({ gridTemplateColumns }) => gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns};`};
  ${({ gridTemplateAreas }) => gridTemplateAreas && `grid-template-areas: ${gridTemplateAreas};`};
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea};`};
  ${({ margin }) => margin && `margin: ${margin};`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`};
  ${({ padding }) => padding && `padding: ${padding};`};
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`};
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`};
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom};`};
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`};
  ${({ width }) => width && `width: ${width};`};
  ${({ height }) => height && `height: ${height};`};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`};
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`};
  ${({ color }) => color && `color: ${color};`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`};
  ${({ letterSpacing }) => letterSpacing && `letter-spacing: ${letterSpacing};`};
  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`};
  ${({ textOverflow }) => textOverflow && `text-overflow: ${textOverflow};`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`};
  ${({ backgroundImage }) => backgroundImage && `background-image: url(${backgroundImage});`};
  ${({ backgroundSize }) => backgroundSize && `background-size: ${backgroundSize};`};
  ${({ backgroundPosition }) => backgroundPosition && `background-position: ${backgroundPosition};`};
  ${({ backgroundRepeat }) => backgroundRepeat && `background-repeat: ${backgroundRepeat};`};
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`};
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`};
  ${({ border }) => border && `border: ${border};`};
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`};
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`};
  ${({ borderStyle }) => borderStyle && `border-style: ${borderStyle};`};
  ${({ outline }) => outline && `outline: ${outline};`};
  ${({ position }) => position && `position: ${position};`};
  ${({ top }) => top && `top: ${top};`};
  ${({ right }) => right && `right: ${right};`};
  ${({ bottom }) => bottom && `bottom: ${bottom};`};
  ${({ left }) => left && `left: ${left};`};
  ${({ cursor }) => cursor && `cursor: ${cursor};`};
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`};
  ${({ opacity }) => opacity && `opacity: ${opacity};`};
  ${({ overflow }) => overflow && `overflow: ${overflow};`};
  ${({ transition }) => transition && `transition: ${transition};`};
  ${({ transform }) => transform && `transform: ${transform};`};
`;
