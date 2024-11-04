import OrderList from '@/views/apps/leads/leads/list/index'
import { getEcommerceData } from '@/app/server/actions'
import { getLeadsData } from '../../../../../../server/actions'
const OrdersPage = async () => {
  const data = await getEcommerceData()
const data2 = await getLeadsData()
  return (
    <>
      {/* <h1 className='mb-4'>#Leads</h1> */}
      <OrderList leadData={data2}></OrderList>
    </>
  )
}

export default OrdersPage
