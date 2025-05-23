export const formatNumber = (n: number): string =>
  new Intl.NumberFormat('en', {
    notation: 'compact',
    compactDisplay: 'short',
  })
    .format(n)
    .toLowerCase()
