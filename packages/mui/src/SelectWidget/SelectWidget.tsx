import { ChangeEvent, FocusEvent } from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import {
  ariaDescribedByIds,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  labelValue,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from '@rjsf/utils';

/** The `SelectWidget` is a widget for rendering dropdowns.
 *  It is typically used with string properties constrained with enum options.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function SelectWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  schema,
  id,
  name, // remove this from textFieldProps
  options,
  label,
  hideLabel,
  required,
  disabled,
  placeholder,
  readonly,
  value,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  errorSchema,
  rawErrors = [],
  registry,
  uiSchema,
  hideError,
  formContext,
  ...textFieldProps
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled, emptyValue: optEmptyVal } = options;

  multiple = typeof multiple === 'undefined' ? false : !!multiple;

  const emptyValue = multiple ? [] : '';
  const isEmpty = typeof value === 'undefined' || (multiple && value.length < 1) || (!multiple && value === emptyValue);

  const _onChange = ({ target: { value } }: ChangeEvent<{ value: string }>) =>
    onChange(enumOptionsValueForIndex<S>(value, enumOptions, optEmptyVal));
  const _onBlur = ({ target }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, enumOptionsValueForIndex<S>(target && target.value, enumOptions, optEmptyVal));
  const _onFocus = ({ target }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, enumOptionsValueForIndex<S>(target && target.value, enumOptions, optEmptyVal));
  const selectedIndexes = enumOptionsIndexForValue<S>(value, enumOptions, multiple);
  const { InputLabelProps, SelectProps, autocomplete, ...textFieldRemainingProps } = textFieldProps;
  const showPlaceholderOption = !multiple && schema.default === undefined;

  return (
    <TextField
      id={id}
      name={id}
      label={labelValue(label || undefined, hideLabel, undefined)}
      value={!isEmpty && typeof selectedIndexes !== 'undefined' ? selectedIndexes : emptyValue}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      autoComplete={autocomplete}
      placeholder={placeholder}
      error={rawErrors.length > 0}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      {...(textFieldRemainingProps as TextFieldProps)}
      select // Apply this and the following props after the potential overrides defined in textFieldProps
      InputLabelProps={{
        ...InputLabelProps,
        shrink: !isEmpty,
      }}
      SelectProps={{
        ...SelectProps,
        multiple,
      }}
      aria-describedby={ariaDescribedByIds<T>(id)}
    >
      {showPlaceholderOption && <MenuItem value=''>{placeholder}</MenuItem>}
      {Array.isArray(enumOptions) &&
        enumOptions.map(({ value, label }, i: number) => {
          const disabled: boolean = Array.isArray(enumDisabled) && enumDisabled.indexOf(value) !== -1;
          return (
            <MenuItem key={i} value={String(i)} disabled={disabled}>
              {label}
            </MenuItem>
          );
        })}
    </TextField>
  );
}
