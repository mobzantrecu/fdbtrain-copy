/** @jsx jsx */
import { jsx, Heading, Text, Grid } from 'theme-ui'
import { Asset, Maybe, SectionBlockFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import Image from 'next/image'
import CaseStudyCard from '../cards/case-study'
import CommunityLeaderCard from '../cards/community-leader'
import TweetCard from '../cards/tweet'
import formStrategy, { getFormName } from './forms/form.builder'

type Props = SectionBlockFragment & {
  toTheRight?: boolean
  stripDown?: boolean
  index?: number
  isHome?: boolean
  isAlt?: boolean
  noBackground?: boolean
}

type Media =
  | Maybe<
      { __typename?: 'Asset' | undefined } & {
        __typename?: 'Asset' | undefined
      } & Pick<
          Asset,
          'url' | 'title' | 'width' | 'description' | 'contentType' | 'height'
        >
    >
  | undefined

const returnCustomerProof = (customerProof: any, media?: Media) => {
  switch (customerProof?.__typename) {
    case 'Tweet':
      return (
        <TweetCard
          {...customerProof}
          pushSx={{
            mr: [null, null, null, null],
            width: [null, null, null, null]
          }}
        />
      )
    case 'Quote2':
      return <CaseStudyCard {...customerProof} />

    case 'Person':
      return <CommunityLeaderCard {...customerProof} />

    default:
      return (
        <div
          sx={{
            maxWidth: '100%',
            width: ['100%', null],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {media?.url && (
            <Image
              src={media?.url ?? ''}
              alt={media?.title ?? ''}
              width={media?.width ?? 720}
              height={media?.height ?? 480}
              layout="intrinsic"
              quality={100}
            />
          )}
        </div>
      )
  }
}

const returnMediaSx = (typename?: string) => {
  switch (typename) {
    case 'Person':
      return {}
    case 'Quote2':
      return {}
    case 'Tweet':
      return {
        width: '100%',
        height: '250px'
      }
    default:
      return {
        width: '574.5px'
      }
  }
}

const SectionBlockWithIllustration = ({
  title,
  subtitle,
  media,
  actionsCollection,
  noBackground,
  toTheRight,
  stripDown,
  backgroundImage,
  anchorLinkId,
  customerProof,
  isHome = false,
  isAlt = false
}: Props) => {
  const backgroundHasBlue = backgroundImage?.title?.includes('blue')
  const formName = getFormName(media?.title as string)
  const mediaSx = returnMediaSx(customerProof?.__typename)

  let buttonVariant = backgroundHasBlue
    ? 'buttons.outline'
    : 'buttons.newDarkSecondary'

  let background = !noBackground ? `url(${backgroundImage?.url})` : '#f9f9f9'
  let fontColor = backgroundHasBlue ? 'gray1' : 'gray10'

  if (noBackground) {
    fontColor = 'gray10'
    buttonVariant = 'buttons.newDarkSecondary'
  }

  if (!noBackground && isHome && backgroundHasBlue) {
    background = '#1F1244'
  }

  return stripDown ? (
    <div
      id={anchorLinkId ?? undefined}
      sx={{
        textAlign: ['center', null, 'left'],
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background',
        maxWidth: '460px',
        padding: '10px 25px',
        margin: ['25px 0px', '24px 24px'],
        boxShadow: 'card',
        borderRadius: '8px'
      }}
    >
      {!formName
        ? returnCustomerProof(customerProof, media)
        : formStrategy(formName)}
      <div
        sx={{
          gridColumn: toTheRight ? ['1', null, '2'] : '1',
          color: 'gray10'
        }}
      >
        <Heading
          as="h1"
          variant="heading.3"
          sx={{
            mb: '8px',
            fontWeight: '600',
            letterSpacing: '0px'
          }}
        >
          {title}
        </Heading>
        <Text
          variant="normal"
          sx={{ mb: 3, maxWidth: '520px', lineHeight: '24px' }}
        >
          {defaultRenderer(subtitle?.json)}
        </Text>
        {actionsCollection?.items.map((action) => (
          <Link
            {...action}
            key={action?.href}
            sx={{
              ':not(:last-of-type)': { mr: 3 },
              fontWeight: '600'
            }}
            variant="accent"
            arrow
            backgroundColor={backgroundImage?.title}
          />
        ))}
      </div>
    </div>
  ) : (
    <Grid
      id={anchorLinkId ?? undefined}
      columns={[1, null, 'repeat(2, fit-content(50%))']}
      gap={[null, null, 5, '85px']}
      sx={{
        '&:nth-of-type(4)': {
          scrollMarginTop: '0'
        },
        scrollMarginTop: '8rem',
        px: ['30px', '100px', null, '192px'],
        gridAutoFlow: 'dense',
        textAlign: ['center', null, 'left'],
        alignItems: 'center',
        justifyContent: 'center',
        background: background,
        backgroundRepeat: 'no-repeat',
        backgroundSize: ['auto', null, '100% 100%'],
        backgroundPosition: 'center',
        py: backgroundHasBlue
          ? isHome
            ? isAlt
              ? ['35px', '35px', null]
              : ['20px', '20px', null]
            : '150px'
          : backgroundImage?.title?.includes('periwinkle')
          ? ['200px', '250px']
          : isAlt
          ? ['20px', '20px', '70px']
          : ['20px', '20px', null],
        paddingBottom: isHome ? '30px !important' : 'inherit',
        '@media screen and (max-width: 425px)': {
          px: '25px'
        },
        ':last-of-type': {
          mb: isHome ? (isAlt ? '15px' : 0) : 5
        }
      }}
    >
      <div
        sx={{
          gridColumn: toTheRight ? ['1', null, '2'] : '1',
          color: fontColor
        }}
      >
        <Heading
          as="h1"
          variant="heading.3"
          sx={{
            mb: 3,
            '@media screen and (max-width: 831px)': {
              mt: backgroundHasBlue ? 4 : ''
            },
            fontWeight: '600',
            maxWidth: ['100%', '100%', '450px'],
            letterSpacing: '0px'
          }}
        >
          {title}
        </Heading>
        <Text
          variant="normal"
          sx={{
            mb: 3,
            maxWidth: ['100%', '100%', '520px'],
            lineHeight: '24px'
          }}
        >
          {defaultRenderer(subtitle?.json, backgroundHasBlue ? true : false)}
        </Text>
        {actionsCollection?.items.map((action) =>
          action?.children?.includes('|') ? (
            <Link
              {...action}
              key={action?.href}
              sx={{
                zIndex: 'general',
                position: 'relative',
                height: '34px',
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: ['11px', '12px'],
                letterSpacing: '0.5px',
                lineHeight: '19px',
                px: ['13px', '23px'],
                width: 'fit-content',
                '@media screen and (max-width: 831px)': {
                  display: 'none'
                }
              }}
              backgroundColor={backgroundImage?.title}
              variant={buttonVariant}
            />
          ) : (
            <Link
              {...action}
              key={action?.href}
              sx={{
                ':not(:last-of-type)': { mr: 3 },
                fontWeight: '600',
                color: backgroundHasBlue ? 'darkBackgroundAnchor' : 'primary',
                '@media screen and (max-width: 831px)': {
                  display: 'none'
                },
                '&:hover': {
                  textDecoration: backgroundHasBlue ? 'underline' : ''
                }
              }}
              variant="accent"
              arrow
            />
          )
        )}
      </div>
      <div
        sx={{
          maxWidth: '100%',
          height: [
            !isAlt ? '429px' : 'fit-content',
            null,
            !isAlt ? null : 'initial'
          ],
          width: ['100%', null],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '& > div': {
            '@media screen and (min-width: 1600px)': { ...mediaSx }
          }
        }}
      >
        {!formName
          ? returnCustomerProof(customerProof, media)
          : formStrategy(formName)}
      </div>

      {actionsCollection?.items && actionsCollection?.items?.length > 0 && (
        <div
          sx={{
            '@media screen and (max-width: 831px)': {
              alignSelf: 'baseline',
              mt: 4
            },
            '@media screen and (min-width: 832px)': {
              display: 'none'
            }
          }}
        >
          {actionsCollection?.items.map((action) =>
            action?.children?.includes('|') ? (
              <Link
                {...action}
                key={action?.href}
                sx={{
                  zIndex: 'general',
                  position: 'relative',
                  height: '34px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: ['11px', '12px'],
                  letterSpacing: '0.5px',
                  lineHeight: '19px',
                  px: ['13px', '23px'],
                  width: 'fit-content'
                }}
                backgroundColor={backgroundImage?.title}
                variant={buttonVariant}
              />
            ) : (
              <Link
                {...action}
                key={action?.href}
                sx={{
                  ':not(:last-of-type)': { mr: 3 },
                  fontWeight: '600',
                  color: backgroundHasBlue ? 'background' : 'primary'
                }}
                variant="accent"
                arrow
              />
            )
          )}
        </div>
      )}
    </Grid>
  )
}

export default SectionBlockWithIllustration
