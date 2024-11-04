import OrderList from '@/views/apps/quotes/list/index'
import { getEcommerceData } from '@/app/server/actions'

const QuotesPage = async () => {
  const data = await getEcommerceData()

  return (
    <>
      {/* <h1 className='mb-4'>#Quotes</h1> */}
      <OrderList orderData={data?.orderData}></OrderList>
    </>
  )
}

export default QuotesPage
