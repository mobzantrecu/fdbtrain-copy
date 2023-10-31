import builder from '@builder.io/react'
import { isDev } from '../../lib/constants'
import { environment } from './../../lib/contentful/index'

const builderEnvs = {
  master: 'prod',
  sandbox: 'qa',
  backup: 'prod',
  redesign: 'prod',
  development: 'qa'
}

const getParsedEnvironment = () => {
  if (isDev) return 'dev'
  return builderEnvs[environment] || 'qa'
}

export const getBuilderContent = async (slug: string) => {
  const builderContent = await builder
    .get('builder-section', {
      query: {
        data: { slug: slug, environment: getParsedEnvironment() }
      },
      includeRefs: true
    })
    .promise()

  if (!builderContent) {
    return
  }

  const blockOptions: any[] = []
  const models: any[] = []
  const referencesToFetch: any[] = []

  if (!builderContent.data.blocks) {
    return builderContent
  }

  builderContent.data?.blocks.forEach((block: any) => {
    const { options } = block.component || {}

    if (options) {
      blockOptions.push(options)
    }
  })

  blockOptions.forEach((opt) => {
    for (const key in opt) {
      if (Object.prototype.hasOwnProperty.call(opt, key)) {
        if (key.includes('Model')) {
          models.push(opt[key])
        }
      }
    }
  })

  models.forEach((model) => {
    if (model.value.data['buttons']) {
      model.value.data.buttons.forEach((ref: any) => {
        if (ref.button.id) {
          referencesToFetch.push(ref.button)
        }
      })
    }
    if (model.value.data['button'] && model.value.data.button?.id) {
      referencesToFetch.push(model.value.data.button)
    }
  })

  for (const ref of referencesToFetch) {
    ref['fetchedData'] = await builder
      .get(ref.model, {
        query: {
          id: ref.id
        },
        includeRefs: true
      })
      .promise()
  }

  return builderContent
}

export default getParsedEnvironment
