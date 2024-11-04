// Next Imports
import { redirect } from 'next/navigation'

// Component Imports

// Data Imports
import { getApolloLeadData } from '@/app/server/actions'
import QuoteDetails from '@views/apps/leads/apollo_leads/details'

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
const ApolloLeadsPage = async ({ params }) => {
  // Vars
  const data = await getApolloLeadData()
  const filteredData = data?.filter(item => item.order === params.id)[0]

  if (!filteredData) {
    redirect('/not-found')
  }

  return filteredData ? <QuoteDetails orderData={filteredData} order={params.id} /> : null
}

export default ApolloLeadsPage
