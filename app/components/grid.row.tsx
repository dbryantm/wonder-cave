import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { GridSizes } from '~/app/components'

const variants = cva('', {
  defaultVariants: {
    span: 'auto',
  },
  variants: {
    span: {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6',
      7: 'row-span-7',
      8: 'row-span-8',
      9: 'row-span-9',
      10: 'row-span-10',
      11: 'row-span-11',
      12: 'row-span-12',
      auto: 'row-auto',
      full: 'row-full',
    },
    start: {
      1: 'row-start-1',
      2: 'row-start-2',
      3: 'row-start-3',
      4: 'row-start-4',
      5: 'row-start-5',
      6: 'row-start-6',
      7: 'row-start-7',
      8: 'row-start-8',
      9: 'row-start-9',
      10: 'row-start-10',
      11: 'row-start-11',
      12: 'row-start-12',
      auto: 'row-auto',
    },
    end: {
      1: 'row-end-1',
      2: 'row-end-2',
      3: 'row-end-3',
      4: 'row-end-4',
      5: 'row-end-5',
      6: 'row-end-6',
      7: 'row-end-7',
      8: 'row-end-8',
      9: 'row-end-9',
      10: 'row-end-10',
      11: 'row-end-11',
      12: 'row-end-12',
      auto: 'row-auto',
    },
  },
})

export interface GridRowProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {
  span: GridSizes | 'auto' | 'full'
  start: GridSizes | 'auto'
  end: GridSizes | 'auto'
}

export function GridRow({ className, children, span, start, end, ...props }: GridRowProps) {
  return (
    <div className={cx(variants({ span, start, end }), className)} {...props} data-test="grid.row">
      {children}
    </div>
  )
}
