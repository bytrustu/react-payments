import type { CardState } from '../types/CardState.type';
import { cardValueSplitters } from './cardValueSplitters';
import { isValidateCardModule } from './isValidateCardModule';

export const isValidateCardState = (card: {
  cardNumber: string;
  expirationDate: string;
  ownerName: string;
  securityCode: string;
  password: string;
  label: string;
  color: string;
  createdTimestamp: number;
}): card is CardState => {
  const { cardNumber, expirationDate, securityCode, password, label } = card;

  const splitCardNumber = cardValueSplitters.number(cardNumber);
  const splitExpirationDate = cardValueSplitters.expirationDate(expirationDate);
  const splitSecurityCode = cardValueSplitters.securityCode(securityCode);
  const splitPassword = cardValueSplitters.password(password);

  return (
    isValidateCardModule.number(splitCardNumber) &&
    isValidateCardModule.expirationDate(splitExpirationDate) &&
    isValidateCardModule.securityCode(splitSecurityCode) &&
    isValidateCardModule.password(splitPassword) &&
    isValidateCardModule.brand(label)
  );
};
