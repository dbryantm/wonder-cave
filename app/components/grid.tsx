import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva(['grid'], {
  defaultVariants: {
    flow: 'col',
    rows: 'auto',
    cols: 'auto',
    gap: 4,
  },
  variants: {
    flow: {
      row: 'grid-flow-row',
      col: 'grid-flow-cols',
    },
    rows: {
      0: 'grid-rows-0',
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
      6: 'grid-rows-6',
      7: 'grid-rows-7',
      8: 'grid-rows-8',
      9: 'grid-rows-9',
      10: 'grid-rows-10',
      11: 'grid-rows-11',
      12: 'grid-rows-12',
      auto: 'rows-auto',
    },
    rowsSm: {
      0: 'sm:grid-rows-0',
      1: 'sm:grid-rows-1',
      2: 'sm:grid-rows-2',
      3: 'sm:grid-rows-3',
      4: 'sm:grid-rows-4',
      5: 'sm:grid-rows-5',
      6: 'sm:grid-rows-6',
      7: 'sm:grid-rows-7',
      8: 'sm:grid-rows-8',
      9: 'sm:grid-rows-9',
      10: 'sm:grid-rows-10',
      11: 'sm:grid-rows-11',
      12: 'sm:grid-rows-12',
      auto: 'sm:rows-auto',
    },
    rowsMd: {
      0: 'md:grid-rows-0',
      1: 'md:grid-rows-1',
      2: 'md:grid-rows-2',
      3: 'md:grid-rows-3',
      4: 'md:grid-rows-4',
      5: 'md:grid-rows-5',
      6: 'md:grid-rows-6',
      7: 'md:grid-rows-7',
      8: 'md:grid-rows-8',
      9: 'md:grid-rows-9',
      10: 'md:grid-rows-10',
      11: 'md:grid-rows-11',
      12: 'md:grid-rows-12',
      auto: 'rows-auto',
    },
    rowsLg: {
      0: 'lg:grid-rows-0',
      1: 'lg:grid-rows-1',
      2: 'lg:grid-rows-2',
      3: 'lg:grid-rows-3',
      4: 'lg:grid-rows-4',
      5: 'lg:grid-rows-5',
      6: 'lg:grid-rows-6',
      7: 'lg:grid-rows-7',
      8: 'lg:grid-rows-8',
      9: 'lg:grid-rows-9',
      10: 'lg:grid-rows-10',
      11: 'lg:grid-rows-11',
      12: 'lg:grid-rows-12',
      auto: 'lg:rows-auto',
    },
    rowsXl: {
      0: 'xl:grid-rows-0',
      1: 'xl:grid-rows-1',
      2: 'xl:grid-rows-2',
      3: 'xl:grid-rows-3',
      4: 'xl:grid-rows-4',
      5: 'xl:grid-rows-5',
      6: 'xl:grid-rows-6',
      7: 'xl:grid-rows-7',
      8: 'xl:grid-rows-8',
      9: 'xl:grid-rows-9',
      10: 'xl:grid-rows-10',
      11: 'xl:grid-rows-11',
      12: 'xl:grid-rows-12',
      auto: 'xl:rows-auto',
    },
    cols: {
      0: 'grid-cols-0',
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
      auto: 'cols-auto',
    },
    colsSm: {
      0: 'sm:grid-cols-0',
      1: 'sm:grid-cols-1',
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-3',
      4: 'sm:grid-cols-4',
      5: 'sm:grid-cols-5',
      6: 'sm:grid-cols-6',
      7: 'sm:grid-cols-7',
      8: 'sm:grid-cols-8',
      9: 'sm:grid-cols-9',
      10: 'sm:grid-cols-10',
      11: 'sm:grid-cols-11',
      12: 'sm:grid-cols-12',
      auto: 'sm:cols-auto',
    },
    colsMd: {
      0: 'md:grid-cols-0',
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
      5: 'md:grid-cols-5',
      6: 'md:grid-cols-6',
      7: 'md:grid-cols-7',
      8: 'md:grid-cols-8',
      9: 'md:grid-cols-9',
      10: 'md:grid-cols-10',
      11: 'md:grid-cols-11',
      12: 'md:grid-cols-12',
      auto: 'md:cols-auto',
    },
    colsLg: {
      0: 'lg:grid-cols-0',
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
      5: 'lg:grid-cols-5',
      6: 'lg:grid-cols-6',
      7: 'lg:grid-cols-7',
      8: 'lg:grid-cols-8',
      9: 'lg:grid-cols-9',
      10: 'lg:grid-cols-10',
      11: 'lg:grid-cols-11',
      12: 'lg:grid-cols-12',
      auto: 'lg:cols-auto',
    },
    colsXl: {
      0: 'xl:grid-cols-0',
      1: 'xl:grid-cols-1',
      2: 'xl:grid-cols-2',
      3: 'xl:grid-cols-3',
      4: 'xl:grid-cols-4',
      5: 'xl:grid-cols-5',
      6: 'xl:grid-cols-6',
      7: 'xl:grid-cols-7',
      8: 'xl:grid-cols-8',
      9: 'xl:grid-cols-9',
      10: 'xl:grid-cols-10',
      11: 'xl:grid-cols-11',
      12: 'xl:grid-cols-12',
      auto: 'xl:cols-auto',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
      9: 'gap-9',
      10: 'gap-10',
      11: 'gap-11',
      12: 'gap-12',
    },
  },
})

export type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface GridProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {
  flow?: 'col' | 'row'
  rows?: GridSizes | 'auto'
  rowsSm?: GridSizes | 'auto'
  rowsMd?: GridSizes | 'auto'
  rowsLg?: GridSizes | 'auto'
  rowsXl?: GridSizes | 'auto'
  cols?: GridSizes | 'auto'
  colsSm?: GridSizes | 'auto'
  colsMd?: GridSizes | 'auto'
  colsLg?: GridSizes | 'auto'
  colsXl?: GridSizes | 'auto'
  gap?: GridSizes
}

export function Grid({
  className,
  children,
  flow,
  rows,
  rowsSm,
  rowsMd,
  rowsLg,
  rowsXl,
  cols,
  colsSm,
  colsMd,
  colsLg,
  colsXl,
  gap,
  ...props
}: GridProps) {
  return (
    <div
      className={cx(
        variants({ flow, rows, rowsSm, rowsMd, rowsLg, rowsXl, cols, colsSm, colsMd, colsLg, colsXl, gap }),
        className,
      )}
      {...props}
      data-testid="grid"
    >
      {children}
    </div>
  )
}
