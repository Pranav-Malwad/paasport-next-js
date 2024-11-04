// Next Imports
import { redirect } from 'next/navigation'

// Component Imports
import OrderDetails from '@views/apps/quotes/details'

// Data Imports
import { getEcommerceData } from '@/app/server/actions'
import { EditProvider } from '@/contexts/EditContext'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/ecommerce` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getEcommerceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/ecommerce`)

  if (!res.ok) {
    throw new Error('Failed to fetch ecommerce data')
  }

  return res.json()
} */
const QuotesDetailsPage = async ({ params }) => {
  // Vars
  const data = await getEcommerceData()
  const filteredData = data?.orderData.filter(item => item.order === params.id)[0]

  if (!filteredData) {
    redirect('/not-found')
  }

  return filteredData ? (
    <EditProvider>
      <OrderDetails orderData={filteredData} order={params.id} />
    </EditProvider>
  ) : null
}

export default QuotesDetailsPage