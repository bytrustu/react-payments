import {
  PropsWithChildren,
  useContext,
  createContext,
  FormEvent,
  useMemo,
  RefObject,
  forwardRef,
  useState,
  FocusEvent,
} from 'react';
import { useInputFieldsValues, useInputRefs } from './hooks';
import { findComponentsInChildren, isValidateInputValueByType, isValidInputRef } from './utils';
import type { StyleProps } from '@/shared';
import {
  INPUT_COLOR,
  INPUT_FONT_SIZE,
  INPUT_FONT_WEIGHT,
  InputType,
  UpdateValueProps,
  styleToken,
  Box,
  Label,
  TextField,
} from '@/shared';

type PinInputContextValue = {
  id: string;
  values: string[];
  inputElementCount: number;
  placeholder: string;
  updateValue: ({ index, value, inputRefs, maxLength, focus }: UpdateValueProps) => void;
  inputRefs: RefObject<HTMLInputElement | null>[];
  type: InputType;
  mask: boolean;
};

type PinInputProps = PropsWithChildren<{
  id?: string;
  type?: InputType;
  mask?: boolean;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  placeholder?: string;
  value?: string[];
  pattern?: RegExp;
  onValueChange?: (details: { values: string[] }) => void;
  onValueComplete?: (details: { values: string[] }) => void;
}>;

const PinInputContext = createContext<PinInputContextValue | null>(null);

export const PinInput = ({
  id = '',
  type = 'numeric',
  mask = false,
  placeholder = '*',
  value = [],
  pattern,
  onValueChange,
  onValueComplete,
  children,
}: PropsWithChildren<PinInputProps>) => {
  const formatFields = findComponentsInChildren(children, PinInputField.name);
  const inputElementCount = formatFields.length;

  const { value: values, update: updateValue } = useInputFieldsValues({
    values: value,
    pattern,
    onValueChange,
    onValueComplete,
  });
  const inputRefs = useInputRefs(inputElementCount);

  const contextValue = useMemo(
    () => ({
      id,
      values,
      inputElementCount,
      placeholder,
      updateValue,
      inputRefs,
      type,
      mask,
    }),
    [id, values, inputElementCount, placeholder, updateValue, type, mask],
  );

  return <PinInputContext.Provider value={contextValue}>{children}</PinInputContext.Provider>;
};

const PinInputLabel = ({ children }: PropsWithChildren) => {
  const context = useContext(PinInputContext);
  if (context === null) {
    throw new Error('FormatInput.Input 컴포넌트는 FormatInput.Root 하위에서 사용되어야 합니다.');
  }
  const { id } = context;

  return (
    <Label htmlFor={`pin-input-${id}-0`} variant="caption" color={styleToken.color.gray700}>
      {children}
    </Label>
  );
};

const PinInputControl = ({ children }: PropsWithChildren) => (
  <Box display="flex" justifyContent="flex-start" marginTop="2px">
    {children}
  </Box>
);

const PinInputField = forwardRef<
  HTMLInputElement,
  { index: number; readOnly?: boolean; onBlur?: (e: FocusEvent<HTMLInputElement>) => void } & StyleProps
>(
  (
    {
      index,
      readOnly,
      color = INPUT_COLOR,
      fontSize = INPUT_FONT_SIZE,
      fontWeight = INPUT_FONT_WEIGHT,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const context = useContext(PinInputContext);
    if (context === null) {
      throw new Error('PinInput.Input 컴포넌트는 PinInput.Root 하위에서 사용되어야 합니다.');
    }

    const { id, inputElementCount, placeholder, values, updateValue, inputRefs, type, mask } = context;
    const inputRef = ref || inputRefs[index];

    const [error, setError] = useState(false);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
      const inputValue = e.currentTarget.value;
      if (!isValidateInputValueByType(type, inputValue)) {
        return;
      }
      updateValue({
        index,
        value: inputValue,
        inputRefs,
        maxLength: 1,
        focus: !readOnly,
      });
      setError(false);
    };

    const isLastInput = index === inputElementCount - 1;
    const inputType = mask ? 'password' : 'text';
    const inputValue = index < inputElementCount ? values[index] : placeholder;
    const marginRight = isLastInput ? '0' : '10px';

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setError(isValidInputRef(inputRef) && inputRef.current?.value.length === 0);
      onBlur?.(e);
    };

    return (
      <TextField
        id={`pin-input-${id}-${index}`}
        type={inputType}
        variant="filled"
        maxLength={1}
        value={inputValue}
        readOnly={readOnly}
        width="43px"
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign="center"
        marginRight={marginRight}
        onChange={handleChange}
        onBlur={handleBlur}
        {...(error && { outline: `2px solid ${styleToken.color.rose}` })}
        {...(isValidInputRef(inputRef) && { ref: inputRef })}
        {...props}
      />
    );
  },
);

PinInput.displayName = 'PinInput';

PinInput.Root = PinInput;
PinInput.Input = PinInputField;
PinInput.Label = PinInputLabel;
PinInput.Control = PinInputControl;
