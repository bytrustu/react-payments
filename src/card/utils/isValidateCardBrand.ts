import { CardBrandName } from '@/card/constants';

export const isValidateCardBrand = (brand: string): brand is CardBrandName =>
  Object.values(CardBrandName).includes(brand as CardBrandName);
