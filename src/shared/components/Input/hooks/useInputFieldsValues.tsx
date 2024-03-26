import { UpdateValueProps } from '@/shared';

const validateComplete = (values: string[], maxLength?: number) =>
  values.every(Boolean) && values.every((value) => value.length === maxLength);

export const useInputFieldsValues = (
  values: string[],
  onValueChange?: (payload: { values: string[] }) => void,
  onValueComplete?: (payload: { values: string[] }) => void,
) => {
  const updateValue = ({ index, value, inputRefs, maxLength, focus = true }: UpdateValueProps) => {
    const newValues = [...values];
    newValues[index] = value;
    onValueChange?.({ values: newValues });

    if (validateComplete?.(newValues, maxLength)) {
      onValueComplete?.({ values: newValues });
    }

    if (focus) {
      if ((maxLength && value.length === maxLength) || (!maxLength && value)) {
        if (index < inputRefs.length - 1) {
          inputRefs[index + 1].current?.focus();
        }
      } else if (value.length === 0 && index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  return { value: values, update: updateValue };
};
