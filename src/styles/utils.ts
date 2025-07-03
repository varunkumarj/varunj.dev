/**
 * Style Utilities
 * 
 * Helper functions to use the theme consistently across the application
 */

import { theme } from './theme';

/**
 * Creates a CSS variable string from a theme value
 */
export const cssVar = (path: string): string => {
  return `var(--${path.replace(/\./g, '-')})`;
};

/**
 * Converts theme object to CSS variables
 */
export const themeToVars = (
  obj: Record<string, any>,
  prefix = ''
): Record<string, string> => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const varName = prefix ? `${prefix}-${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      return {
        ...acc,
        ...themeToVars(value, varName),
      };
    }
    
    return {
      ...acc,
      [`--${varName}`]: value,
    };
  }, {});
};

/**
 * Media query helper for responsive design
 */
export const media = {
  up: (breakpoint: keyof typeof theme.breakpoints) => 
    `@media (min-width: ${theme.breakpoints[breakpoint]})`,
  down: (breakpoint: keyof typeof theme.breakpoints) => 
    `@media (max-width: ${theme.breakpoints[breakpoint]})`,
  between: (min: keyof typeof theme.breakpoints, max: keyof typeof theme.breakpoints) => 
    `@media (min-width: ${theme.breakpoints[min]}) and (max-width: ${theme.breakpoints[max]})`,
};

/**
 * Helper to create responsive values
 */
export type ResponsiveValue<T> = {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

/**
 * Helper to apply responsive styles
 */
export const responsive = <T>(
  property: string,
  values: ResponsiveValue<T>
): Record<string, any> => {
  const { base, ...breakpoints } = values;
  
  const styles: Record<string, any> = {
    [property]: base,
  };
  
  Object.entries(breakpoints).forEach(([breakpoint, value]) => {
    const mediaQuery = media.up(breakpoint as keyof typeof theme.breakpoints);
    styles[mediaQuery] = {
      [property]: value,
    };
  });
  
  return styles;
};

/**
 * Helper to truncate text with ellipsis
 */
export const truncate = (width = '100%') => ({
  maxWidth: width,
  whiteSpace: 'nowrap' as const,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

/**
 * Helper to create a visually hidden element (accessible to screen readers)
 */
export const visuallyHidden = {
  position: 'absolute' as const,
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap' as const,
  borderWidth: '0',
};

/**
 * Helper to create a flex container
 */
export const flex = (
  direction: 'row' | 'column' = 'row',
  justify: string = 'flex-start',
  align: string = 'stretch',
  wrap: 'nowrap' | 'wrap' = 'nowrap'
) => ({
  display: 'flex',
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align,
  flexWrap: wrap,
});

/**
 * Helper to create a grid container
 */
export const grid = (
  columns: number | string = 1,
  rows: number | string = 'auto',
  gap: string = theme.spacing[4]
) => ({
  display: 'grid',
  gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
  gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
  gap,
});

/**
 * Helper to create absolute positioning
 */
export const absolute = (
  top?: string,
  right?: string,
  bottom?: string,
  left?: string
) => ({
  position: 'absolute' as const,
  top,
  right,
  bottom,
  left,
});
