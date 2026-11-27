import { cn } from '../../helpers/cn'

const variants = {
  primary: 'bg-forest-700 text-white hover:bg-forest-800',
  secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200',
  outline: 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50',
}

function Button({ children, variant = 'primary', className, ...props }) {
  return (
    <button
      className={cn('inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50', variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
