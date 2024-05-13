import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { GridSizes } from '~/app/components'

const variants = cva('', {
  defaultVariants: {
    span: 'auto',
  },
  variants: {
    span: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
      auto: 'col-auto',
      full: 'col-span-full',
    },
    start: {
      1: 'col-start-1',
      2: 'col-start-2',
      3: 'col-start-3',
      4: 'col-start-4',
      5: 'col-start-5',
      6: 'col-start-6',
      7: 'col-start-7',
      8: 'col-start-8',
      9: 'col-start-9',
      10: 'col-start-10',
      11: 'col-start-11',
      12: 'col-start-12',
      auto: 'col-start-auto',
    },
    end: {
      1: 'col-end-1',
      2: 'col-end-2',
      3: 'col-end-3',
      4: 'col-end-4',
      5: 'col-end-5',
      6: 'col-end-6',
      7: 'col-end-7',
      8: 'col-end-8',
      9: 'col-end-9',
      10: 'col-end-10',
      11: 'col-end-11',
      12: 'col-end-12',
      auto: 'col-end-auto',
    },
  },
})

export interface GridColProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {
  span?: GridSizes | 'auto' | 'full'
  start?: GridSizes | 'auto'
  end?: GridSizes | 'auto'
}

export function GridCol({ className, children, span, start, end, ...props }: GridColProps) {
  return (
    <div className={cx(variants({ span, start, end }), className)} {...props}>
      {children}
    </div>
  )
}
