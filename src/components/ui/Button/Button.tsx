import clsx from 'clsx'
import React, { memo, useCallback } from 'react'

const baseStyles = 'relative inline-flex items-center justify-between gap-2 font-semibold transition duration-300 border outline-none hover:ring-2'

const sizes = {
  'sm': `text-sm px-1 py-1.5`,
  'md': `text-base px-3 py-2.5`,
  'lg': `text-lg px-6 py-4`,
  'xl': `text-xl px-10 py-6`,
  '2xl': `text-2xl px-12 py-8`
}

const variants = {
  primary: 'bg-black text-white border border-neutral-300 hover:bg-neutral-900 dark:bg-white dark:text-black dark:border dark:border-black dark:hover:bg-neutral-200',
  secondary: 'bg-white text-black border border-black hover:bg-neutral-100 dark:bg-black dark:text-white dark:border dark:border-white dark:hover:bg-neutral-800',
  danger: 'bg-red-600 text-white border-red-700 hover:bg-red-700 dark:bg-red-700 dark:text-white dark:border dark:border-red-800 dark:hover:bg-red-800',
  ghost: 'bg-transparent text-black border-transparent hover:bg-neutral-100 dark:text-white dark:border dark:border-transparent dark:hover:bg-neutral-800',
  gradient: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:brightness-110 dark:from-purple-400 dark:to-pink-400',
  disabled: 'bg-neutral-200 text-neutral-500 border-neutral-300 cursor-not-allowed dark:bg-neutral-700 dark:text-neutral-400 dark:border dark:border-neutral-600',
}

const roundness = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

const elevationStyles = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  uppercase?: boolean
  elevation?: 'none' | 'sm' | 'md' | 'lg'
  animated?: boolean
  tooltip?: string
  toggle?: boolean
  active?: boolean
  badge?: string | number
  destructiveConfirm?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  variant = 'primary',
  size = 'lg',
  rounded = 'lg',
  elevation = 'md',
  uppercase = false,
  animated = false,
  className = '',
  tooltip,
  toggle = false,
  active = false,
  badge,
  destructiveConfirm = false,
  ...rest
}) => {
  const isDisabled = disabled || loading
  const confirmed = !destructiveConfirm

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && confirmed && onClick) onClick(e)
    },
    [onClick, isDisabled, confirmed]
  )

  const toggleStyles = toggle && active ? 'ring-2 ring-blue-500' : ''

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      title={tooltip}
      className={clsx(
        baseStyles,
        sizes[size],
        variants[isDisabled ? 'disabled' : variant],
        roundness[rounded],
        elevationStyles[elevation],
        fullWidth && 'w-full',
        uppercase && 'uppercase',
        loading && 'cursor-wait',
        toggleStyles,
        className,
        'transition-shadow'
      )}
      aria-disabled={isDisabled}
      role="button"
      {...rest}
    >
      {icon && iconPosition === 'left' && !loading && <span className="motion-safe:animate-fade-in">{icon}</span>}
      {loading && (
        <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4z" />
        </svg>
      )}
      <span className="relative">
        {children}
        {badge !== undefined && (
          <span className="absolute -top-2 -right-3 text-xs bg-red-600 text-white rounded-full px-1.5 py-0.5">
            {badge}
          </span>
        )}
      </span>
      {icon && iconPosition === 'right' && !loading && <span className="motion-safe:animate-fade-in">{icon}</span>}
    </button>
  )
}

export default memo(Button)
