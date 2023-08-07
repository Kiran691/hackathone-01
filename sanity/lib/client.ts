import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId:`${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset:`${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  apiVersion:"2022-03-25",
  useCdn: false
})
