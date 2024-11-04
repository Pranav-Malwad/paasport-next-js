import OrderList from '@/views/apps/orders/list/index'
import { getEcommerceData } from '@/app/server/actions'

const OrdersPage = async () => {
  const data = await getEcommerceData()

  return (
    <>
      {/* <h1 className='mb-4'>#Orders</h1> */}
      <OrderList orderData={data?.orderData}></OrderList>
    </>
  )
}

export default OrdersPage
