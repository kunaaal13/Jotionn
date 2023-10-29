import Navbar from './_components/navbar'

type Props = {
  children: React.ReactNode
}

function MarketingLayout({ children }: Props) {
  return (
    <div className='h-full'>
      <Navbar />
      <main className='h-full pt-40'>{children}</main>
    </div>
  )
}

export default MarketingLayout
