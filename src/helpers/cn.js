// Helper ringan untuk menggabungkan conditional class.
// Jika kebutuhan class merging makin kompleks, pertimbangkan clsx + tailwind-merge.
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
