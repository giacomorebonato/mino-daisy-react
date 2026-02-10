import { LoaderCircle } from 'lucide-react'
import { Button, type ButtonProps } from '../button'

export interface SubmitButtonProps extends ButtonProps {
  isLoading?: boolean
}

export function SubmitButton({ isLoading, children, disabled, ...props }: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={disabled || isLoading} {...props}>
      {isLoading && <LoaderCircle className="h-[1em] w-[1em] animate-spin" />}
      {children}
    </Button>
  )
}

SubmitButton.displayName = 'SubmitButton'
