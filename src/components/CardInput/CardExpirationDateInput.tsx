import { ChangeEvent } from 'react';
import { CARD_INPUT_COLOR, CARD_INPUT_TEXT_FONT_SIZE, CARD_INPUT_TEXT_FONT_WEIGHT } from './constants/cardInputStyles';
import { useInputs } from '@/hook';
import { HStack, Label, TextField, Typography, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

const INITIAL_CARD_EXPIRATIONS_DATES = ['', ''];
const CARD_EXPIRATIONS_DATE_LENGTH = INITIAL_CARD_EXPIRATIONS_DATES.length;
const CARD_EXPIRATIONS_DATE_ID = 'card-expiration-date';

type CardExpirationDateInputProps = {
  onChange?: (value: string) => void;
};
export const CardExpirationDateInput = ({ onChange }: CardExpirationDateInputProps) => {
  const {
    values: cardExpirationDateParts,
    refs: inputRefs,
    handleChange,
    handleKeyDown,
  } = useInputs({
    inputCount: CARD_EXPIRATIONS_DATE_LENGTH,
    maxLength: 2,
    pattern: /^[0-9]*$/,
  });

  const onCardNumberPartChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newCardNumberParts = [...cardExpirationDateParts];
    newCardNumberParts[index] = e.target.value;
    handleChange(index)(e);

    onChange?.(newCardNumberParts.join(' '));
  };

  return (
    <VStack>
      <Label htmlFor={`${CARD_EXPIRATIONS_DATE_ID}-0`} variant="caption" color={styleToken.color.gray700}>
        만료일
      </Label>
      <HStack
        width="140px"
        alignItems="center"
        justifyContent="center"
        backgroundColor={styleToken.color.gray200}
        borderRadius="7px"
        padding="0 20px"
      >
        <TextField
          id={`${CARD_EXPIRATIONS_DATE_ID}-0`}
          ref={inputRefs[0]}
          variant="unstyled"
          value={cardExpirationDateParts[0]}
          onChange={onCardNumberPartChange(0)}
          onKeyDown={handleKeyDown(0)}
          maxLength={2}
          width="30px"
          color={CARD_INPUT_COLOR}
          textAlign="left"
          fontSize={CARD_INPUT_TEXT_FONT_SIZE}
          fontWeight={CARD_INPUT_TEXT_FONT_WEIGHT}
          placeholder="MM"
          _placeholder={{
            fontSize: '16px',
          }}
        />
        <Typography
          variant="title"
          minWidth="10px"
          color={styleToken.color.gray500}
          fontWeight={CARD_INPUT_TEXT_FONT_WEIGHT}
          fontSize={CARD_INPUT_TEXT_FONT_SIZE}
          textAlign="center"
          margin="0 6px 0 2px"
        >
          /
        </Typography>
        <TextField
          id={`${CARD_EXPIRATIONS_DATE_ID}-1`}
          ref={inputRefs[1]}
          variant="unstyled"
          value={cardExpirationDateParts[1]}
          onChange={onCardNumberPartChange(1)}
          onKeyDown={handleKeyDown(1)}
          maxLength={2}
          width="24px"
          color={CARD_INPUT_COLOR}
          textAlign="left"
          fontSize={CARD_INPUT_TEXT_FONT_SIZE}
          fontWeight={CARD_INPUT_TEXT_FONT_WEIGHT}
          placeholder="YY"
          _placeholder={{
            fontSize: '16px',
          }}
        />
      </HStack>
    </VStack>
  );
};

CardExpirationDateInput.displayName = 'CardExpirationDateInput';