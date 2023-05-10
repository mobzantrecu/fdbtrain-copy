require('dotenv').config()

import { createClient } from 'contentful-management'
import { environmentAlias, postsId } from './constants'

const client = createClient({
  accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_ACCESS_TOKEN as string
})

// 1. Iterate through all posts and get all assets to be uploaded
// 2. Upload them to contentful
// 3. Go through all posts, resolve assets (and all other fields), and upload

async function main() {
  // This API call will request a space with the specified ID
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID as string)
  const environment = await space.getEnvironment(environmentAlias)

  const existingPosts = await environment.getEntries({
    content_type: postsId,
    limit: 1000
  })
  console.log(
    existingPosts.items.forEach((i) => {
      if (
        i.fields.authors?.['en-US']?.[0]?.sys.id === '7zDVpxLLhZBtnPD970WyXA'
      ) {
        console.log(i)
      }
    })
  )
}

main()
