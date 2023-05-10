import { GetServerSidePropsContext } from 'next'
import cookie from 'cookie'

export const variantCookiePrefix = 'fauna-experiment-'

export const getVariantIdFromCookie = (
  ctx: GetServerSidePropsContext,
  pageName: string
) => {
  const pageId = ctx.req.cookies?.[`${variantCookiePrefix}${pageName}`]
  return pageId as string | undefined
}

export const setVariantIdCookie = (
  ctx: GetServerSidePropsContext,
  pageName: string,
  pageId: string
) => {
  ctx.res.setHeader(
    'Set-Cookie',
    cookie.serialize(`${variantCookiePrefix}${pageName}`, pageId, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365 * 100 // 100 years lol
    })
  )
}

export function randomVariant<T>(variants: T[], weights?: number[]) {
  weights = weights ? weights : variants.map(() => 1 / variants.length)
  // From https://stackoverflow.com/a/55671924
  let i
  for (i = 0; i < weights.length; i++) weights[i] += weights[i - 1] || 0
  const random = Math.random() * weights[weights.length - 1]
  for (i = 0; i < weights.length; i++) if (weights[i] > random) break
  return variants[i]
}

type Variant<T> =
  | undefined
  | null
  | ({ sys: { id: string }; variantWeight?: number } & T)

export const getExperimentPage = <T>(
  ctx: GetServerSidePropsContext,
  variants: Variant<T>[],
  experimentName: string
) => {
  const disableVariantCookie =
    process.env.DISABLE_VARIANT_COOKIE === 'true' ||
    (ctx.preview && ctx.query['ab-test'] === 'no-cookie')
  const variantId = disableVariantCookie
    ? undefined
    : getVariantIdFromCookie(ctx, experimentName)
  const random = randomVariant(
    variants,
    variants.map((p) => p?.variantWeight ?? 1 / variants.length)
  )
  const page = variantId
    ? variants.find((p) => p?.sys.id === variantId) ?? random
    : random

  if (!disableVariantCookie) {
    setVariantIdCookie(ctx, experimentName, page?.sys.id ?? variantId ?? '')
  }
  return page
}
