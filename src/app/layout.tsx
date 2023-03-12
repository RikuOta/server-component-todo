import './globals.css';
import {FC, ReactNode} from "react";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type Props = {
  children: ReactNode
}
const RootLayout: FC<Props> = ({
                                 children
                               }) => {
  return (
    <html lang="en">
    <body>
    <header className="bg-gray-600 text-amber-50 text-4xl p-6">
      this is header
    </header>
    {children}
    </body>
    </html>
  )
}
export default RootLayout
