import { getEcommerceData } from '@/app/server/actions'
import QuoteDetails from '../../../../../../views/apps/cases/list/index'

const CasesPage = async () => {
  const data = await getEcommerceData()

  return (
    <>
      {/* <h1 className='mb-4'>#Cases</h1> */}
      <QuoteDetails orderData={data?.orderData}></QuoteDetails>
    </>
  )
}

export default CasesPage
