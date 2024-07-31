import { PropsWithChildren } from 'react'

export const Modal: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div>{children}</div>
  )
}
