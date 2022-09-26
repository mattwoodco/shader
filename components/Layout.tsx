import { Header } from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen-ios h-screen-ios">
      <Header />
      {children}
    </div>
  )
}
