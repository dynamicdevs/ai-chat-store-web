import { type ChangeEvent, forwardRef } from 'react';

type Props = {
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  label?: string;
  required?: boolean;
  className?: string;
  classNameContent?: string;
  disabled?: boolean;
  maxLength?: number;
  hasError?: boolean;
  onChange?: (e: any) => void;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      defaultValue,
      required,
      className,
      classNameContent,
      disabled,
      maxLength,
      hasError,
      onChange,
      ...props
    }: Props,
    ref
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    return (
      <div className={`relative w-full ${classNameContent}`}>
        <input
          ref={ref}
          defaultValue={defaultValue}
          className={`input ${className} ${
            hasError && '!border-core-interactive-100'
          }`}
          autoComplete='off'
          disabled={disabled}
          maxLength={maxLength}
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
);
