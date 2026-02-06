import { clsx } from 'clsx'
import { Eye, EyeOff } from 'lucide-react'
import { type InputHTMLAttributes, useState } from 'react'

export interface PwdInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  ref?: React.Ref<HTMLInputElement>
}

export function PwdInput({ className, ref, ...props }: PwdInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <label className={clsx('input', className)}>
      <input ref={ref} type={showPassword ? 'text' : 'password'} {...props} />
      <button
        type="button"
        className="opacity-50 hover:opacity-100"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? <EyeOff className="h-[1em]" /> : <Eye className="h-[1em]" />}
      </button>
    </label>
  )
}

PwdInput.displayName = 'PwdInput'
