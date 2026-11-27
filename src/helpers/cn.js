// Helper ringan untuk menggabungkan conditional className.
// Jika kebutuhan className merging makin kompleks, pertimbangkan clsx + tailwind-merge.
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
