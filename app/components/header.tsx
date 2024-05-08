import { ComponentPropsWithoutRef } from 'react'

export type HeaderProps = ComponentPropsWithoutRef<'header'>

export default function Header({ children, ...props }: HeaderProps) {
  return (
    <header className="mb-4 px-4 py-2 shadow-md" {...props}>
      {children}
    </header>
  )
}
