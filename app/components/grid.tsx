import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva(['grid'], {
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
  defaultVariants: {
    flow: 'col',
    rows: 'auto',
    cols: 'auto',
    gap: 4,
  },
})

type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface GridProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {
  flow?: 'col' | 'row'
  rows?: GridSizes | 'auto'
  cols?: GridSizes | 'auto'
  gap?: GridSizes
}

export function Grid({ className, children, flow, rows, cols, gap, ...props }: GridProps) {
  return (
    <div className={cx(variants({ flow, rows, cols, gap }), className)} {...props} data-test="grid">
      {children}
    </div>
  )
}
