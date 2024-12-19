// Fluid typography and spacing utilities
export const fluid = {
  // Fluid font sizes that scale with viewport
  text: {
    sm: 'text-[clamp(0.8rem,0.17vw+0.76rem,0.89rem)]',
    base: 'text-[clamp(1rem,0.34vw+0.91rem,1.19rem)]',
    lg: 'text-[clamp(1.25rem,0.61vw+1.1rem,1.58rem)]',
    xl: 'text-[clamp(1.56rem,1vw+1.31rem,2.11rem)]',
    '2xl': 'text-[clamp(1.95rem,1.56vw+1.56rem,2.81rem)]',
    '3xl': 'text-[clamp(2.44rem,2.38vw+1.85rem,3.75rem)]',
  },
  // Fluid spacing that scales with viewport
  spacing: {
    sm: 'clamp(0.5rem, 0.5vw + 0.25rem, 1rem)',
    base: 'clamp(1rem, 1vw + 0.5rem, 2rem)',
    lg: 'clamp(2rem, 2vw + 1rem, 4rem)',
    xl: 'clamp(3rem, 3vw + 1.5rem, 6rem)',
  }
};