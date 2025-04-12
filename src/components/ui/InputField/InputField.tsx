import { FormikProps } from 'formik';
import React from 'react';

interface InputProps {
  name: string;
  type?: string;
  inputType?: 'text' | 'textarea';
  label: string;
  placeholder: string;
  disabled?: boolean;
  formik?: FormikProps<any>;
  className?: string;
  id?: string;
  autoComplete?: string;
  icon?: React.ReactNode;
  rows?: number;
  maxLength?: number;
}

const InputField: React.FC<InputProps> = ({
  name,
  type = "text",
  inputType = 'text',
  label,
  placeholder,
  disabled = false,
  formik,
  className = '',
  id,
  autoComplete = 'off',
  icon,
  rows = 4,
  maxLength
}) => {
  const fieldProps = formik ? formik.getFieldProps(name) : {};
  const hasError = formik && formik.touched[name] && formik.errors[name];

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id || name} className="flex justify-between text-sm">
        <span className='text-black dark:text-neutral-200'>{label}</span>
        {hasError && <span className="text-red-500 text-xs">{formik.errors[name] as string}</span>}
      </label>
      <div className="relative w-full">
        {inputType === 'textarea' ? (
          <textarea
            id={id || name}
            placeholder={placeholder}
            {...fieldProps}
            name={name}
            autoComplete={autoComplete}
            maxLength={maxLength}
            className={`p-5 w-full rounded-lg border hover:ring-1 transition-shadow outline-none duration-300 
              ${disabled ? 'bg-neutral-100 cursor-not-allowed' : ''} 
              ${className}`}
            disabled={disabled}
            rows={rows}
            aria-invalid={hasError ? 'true' : 'false'}
            aria-describedby={hasError ? `${name}-error` : undefined}
          />
        ) : (
          <input
            id={id || name}
            type={type}
            placeholder={placeholder}
            {...fieldProps}
            name={name}
            autoComplete={autoComplete}
            maxLength={maxLength}
            className={`p-5 ${icon && 'pr-14'} w-full rounded-lg border hover:ring-1 transition-shadow outline-none duration-300 
              ${disabled ? 'bg-neutral-100 cursor-not-allowed' : ''} 
              ${className}`}
            disabled={disabled}
            aria-invalid={hasError ? 'true' : 'false'}
            aria-describedby={hasError ? `${name}-error` : undefined}
          />
        )}
        {icon && inputType !== 'textarea' && (
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2">{icon}</div>
        )}
      </div>
    </div>
  );
};

export default InputField;
