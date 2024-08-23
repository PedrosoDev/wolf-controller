import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {children ? <>{children}</> : <Outlet />}
    </div>
  )
}
