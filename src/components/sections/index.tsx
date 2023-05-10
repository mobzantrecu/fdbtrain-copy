import { isDev } from 'lib/constants'
import { SectionFragment, GeneralDataFragment } from 'lib/contentful/generated'
import dynamic from 'next/dynamic'
import FeaturedResourcesSection from './featuredResources'
import TwoColumnsSection from './home/two-columns'
import InlineStats from './inlineStats'
import PricingPagePlansSection from './pricing/pricing-page-plans'
import SmallTitleAndLinkCard from './smallTitleAndLinkCard'
import TwoInlineCards from './twoInlineCards'
import LargeCardsSection from './large-cards'
import IntegrationsCard from './integrations'
import PurpleTableSection from './purpleTable'
import LinkAndCardDetailSection from './linkAndCardDetail'
import PrefooterWithLinks from './prefooter/withLink'

const ApplicationsComparisonSection = dynamic(
  () => import('components/sections/home/applications-comparison')
)
const OnlyZag = dynamic(() => import('components/sections/home/only-zag'))
const CaseStudiesSection = dynamic(
  () => import('components/sections/home/case-studies')
)
const IconCardsGridSection = dynamic(
  () => import('components/sections/home/icon-cards-grid')
)
const IconCardsGridLogosSection = dynamic(
  () => import('components/sections/home/icon-cards-grid-logos')
)
const ZigZagSection = dynamic(() => import('components/sections/home/zig-zag'))
const ZigZagNoBackgroundSection = dynamic(
  () => import('components/sections/home/zig-zag-no-background')
)

const MediaCardsSection = dynamic(
  () => import('components/sections/home/media-cards')
)
const FeaturesGridSection = dynamic(
  () => import('components/sections/features/features-grid')
)
const VerifiedByJepsenSection = dynamic(
  () => import('components/sections/features/verified-by-jepsen')
)
const DeveloperCardsSection = dynamic(
  () => import('components/sections/features/developer-cards')
)
const VerticalImagesSection = dynamic(
  () => import('components/sections/features/vertical-images')
)
const RegionsSection = dynamic(
  () => import('components/sections/features/regions')
)
const Prefooter = dynamic(() => import('components/sections/prefooter'))
const PrefooterLight = dynamic(
  () => import('components/sections/prefooter/light')
)
const PrefooterDark = dynamic(
  () => import('components/sections/prefooter/dark')
)
const CompanyVisionSection = dynamic(() => import('./company/company-vision'))
const TeamGridSection = dynamic(() => import('./company/team-grid'))
const BoardMembersGridSection = dynamic(
  () => import('./company/board-members-grid')
)
const LogosCardSection = dynamic(() => import('./company/logos-card'))
const BoardMembersWithoutAvatarGridSection = dynamic(
  () => import('./company/board-members-without-avatar-grid')
)
const TwoBigCardsSection = dynamic(() => import('./community/two-big-cards'))
const CommunityLeadersGridSection = dynamic(
  () => import('./community/community-leaders-grid')
)
const MediaSection = dynamic(() => import('./learn/media'))
const TweetsSliderSection = dynamic(() => import('./community/tweets-slider'))
const CustomersGridSection = dynamic(() => import('./customers/customers-grid'))
const MarkdownBodySection = dynamic(() => import('./blog/markdown-body'))
const ZigZagCareersSection = dynamic(() => import('./careers/zig-zag-careers'))
const CareerPerksGridSection = dynamic(
  () => import('./careers/career-perks-grid')
)
const JobListingsSection = dynamic(() => import('./careers/job-listings'))
const PricingPlansSection = dynamic(() => import('./pricing/plans'))
const TableSection = dynamic(() => import('./pricing/table'))
const PriceCalculatorSection = dynamic(() => import('./pricing/calculator'))
const TwoQuotes = dynamic(() => import('./other/two-quotes'))
const CardLinks = dynamic(() => import('./other/card-links'))
const OneBigQuote = dynamic(() => import('./careers/one-big-quote'))
const CorePrinciples = dynamic(
  () => import('../sections/careers/core-principles')
)
const WideVerticalImages = dynamic(
  () => import('../sections/other/wide-vertical-images')
)
const Ctas = dynamic(() => import('./ctas'))
const PricingPlansSectionOld = dynamic(() => import('./pricing/plans-old'))
const TrustGrid = dynamic(() => import('./trust/trust-grid'))
const TrustCompliance = dynamic(() => import('./trust/compliance'))
const TrustLogos = dynamic(() => import('./trust/trust-logos'))

export enum SectionType {
  ZigZag = 'Zig Zag',
  TwoColumns = 'Two Columns',
  LargeCards2X2 = '2X2 Large Cards',
  TwoInlineCards = 'Two Inline Card',
  PrefooterWithLinks = 'Prefooter With Links',
  InlineStats = 'Inline Stats',
  SmallTitleAndLinkCard = 'Small Title And Link Card',
  ZigZagNoBackground = 'Zig Zag NB',
  CaseStudies = 'Case Studies',
  IconCardsGrid = 'Icon Cards Grid',
  IconCardsLogosGrid = 'Icon Cards Grid Logos',
  ApplicationsComparison = 'Applications Comparison',
  NewsCards = 'News Cards',
  FeaturesGrid = 'Features Grid',
  VerifiedbyJepsen = 'Verified by Jepsen',
  DeveloperCards = 'Developer Cards',
  VerticalImages = 'Vertical Images',
  Regions = 'Regions',
  Prefooter = 'Prefooter',
  PrefooterLight = 'Prefooter Light',
  PrefooterDark = 'Prefooter Dark Text',
  CompanyVision = 'Company Vision',
  TeamGrid = 'Team Grid',
  BoardMembersGrid = 'Board Members Grid',
  BoardMembersWithoutAvatarGrid = 'Board Members Without Avatar Grid',
  LogosCard = 'Logos Card',
  TwoBigCards = 'Two Big Cards',
  CommunityLeadersGrid = 'Community Leaders Grid',
  MediaBlocksGrid = 'Media Blocks Grid',
  TweetsSlider = 'Tweets Slider',
  CustomersGrid = 'Customers Grid',
  MarkdownBody = 'Markdown Body',
  CareerPerksGrid = 'Career Perks Grid',
  ZigZagCareers = 'Zig Zag Careers',
  ZigZagCareersWide = 'Zig Zag Careers Wide',
  JobListings = 'Job Listings',
  PricingPlans = 'Pricing Plans',
  PricingPlansV2 = 'Pricing Plans V2',
  Table = 'Table',
  PriceCalculator = 'Price Calculator',
  IllustrationImages = 'Illustration Images',
  TwoQuotes = 'Two Quotes',
  CardLinks = 'Card Links',
  OneBigQuote = 'One Big Quote',
  Principles = 'Principles',
  CareersSlider = 'Careers Slider',
  WideVerticalImages = 'Wide Vertical Images',
  Ctas = 'CTAs',
  TrustGrid = 'Trust - Grid',
  TrustCompliance = 'Trust - Compliance',
  TrustLogos = 'Trust - Logos',
  OnlyZagRight = 'Only Zag Right',
  OnlyZagLeft = 'Only Zag Left',
  IntegrationDetails = 'Integration Details',
  FeaturedResources = 'Featured Resources',
  LinkToCards = 'Link To Cards',
  PurpleTable = 'Purple Table'
}

type Props = {
  section: SectionFragment | null
  smallHeading?: boolean
  pricingTotalLabel?: string
  generalData?: GeneralDataFragment | null
  comingSoonText?: string
  isHome?: boolean
  isAlt?: boolean
  pageSlug?: string
}

const Section = ({
  section,
  smallHeading,
  generalData,
  comingSoonText,
  pageSlug,
  isHome,
  isAlt
}: Props) => {
  const isPricingPage = pageSlug === 'pricing'
  if (!section) {
    if (isDev) throw new Error('Section came out as null.')
    return null
  }
  switch (section.type as SectionType) {
    case SectionType.ZigZag:
      return <ZigZagSection {...section} isHome={isHome} isAlt={isAlt} />
    case SectionType.TwoColumns:
      return <TwoColumnsSection {...section} />
    case SectionType.TwoInlineCards:
      return <TwoInlineCards {...section} />
    case SectionType.PrefooterWithLinks:
      return <PrefooterWithLinks {...section} />
    case SectionType.InlineStats:
      return <InlineStats {...section} />
    case SectionType.SmallTitleAndLinkCard:
      return <SmallTitleAndLinkCard {...section} />
    case SectionType.LargeCards2X2:
      return <LargeCardsSection {...section} />
    case SectionType.LinkToCards:
      return <LinkAndCardDetailSection {...section} isHome={isHome} />
    case SectionType.ZigZagNoBackground:
      return (
        <ZigZagNoBackgroundSection {...section} isHome={isHome} isAlt={isAlt} />
      )
    case SectionType.OnlyZagLeft:
      return (
        <OnlyZag
          {...section}
          isHome={isHome}
          textToTheRight={true}
          isAlt={isAlt}
        />
      )
    case SectionType.OnlyZagRight:
      return <OnlyZag {...section} isHome={isHome} isAlt={isAlt} />
    case SectionType.CaseStudies:
      return <CaseStudiesSection {...section} isHome={true} />
    case SectionType.IconCardsGrid:
      return <IconCardsGridSection {...section} isHome={true} />
    case SectionType.IconCardsLogosGrid:
      return <IconCardsGridLogosSection {...section} />
    case SectionType.ApplicationsComparison:
      return <ApplicationsComparisonSection {...section} />
    case SectionType.NewsCards:
      return <MediaCardsSection {...section} />
    case SectionType.FeaturesGrid:
      return <FeaturesGridSection {...section} />
    case SectionType.VerifiedbyJepsen:
      return <VerifiedByJepsenSection {...section} />
    case SectionType.DeveloperCards:
      return <DeveloperCardsSection {...section} />
    case SectionType.VerticalImages:
      return <VerticalImagesSection {...section} />
    case SectionType.Regions:
      return <RegionsSection {...section} />
    case SectionType.Prefooter:
      return <Prefooter {...section} />
    case SectionType.PrefooterLight:
      return <PrefooterLight {...section} />
    case SectionType.PrefooterDark:
      return <PrefooterDark {...section} />
    case SectionType.CompanyVision:
      return <CompanyVisionSection {...section} />
    case SectionType.TeamGrid:
      return <TeamGridSection {...section} />
    case SectionType.BoardMembersGrid:
      return <BoardMembersGridSection {...section} />
    case SectionType.BoardMembersWithoutAvatarGrid:
      return <BoardMembersWithoutAvatarGridSection {...section} />
    case SectionType.LogosCard:
      return <LogosCardSection {...section} />
    case SectionType.TwoBigCards:
      return <TwoBigCardsSection {...section} />
    case SectionType.CommunityLeadersGrid:
      return <CommunityLeadersGridSection {...section} />
    case SectionType.MediaBlocksGrid:
      return <MediaSection {...section} smallHeading={smallHeading} />
    case SectionType.TweetsSlider:
      return <TweetsSliderSection {...section} />
    case SectionType.CustomersGrid:
      return <CustomersGridSection {...section} />
    case SectionType.MarkdownBody:
      return <MarkdownBodySection {...section} />
    case SectionType.ZigZagCareers:
      return <ZigZagCareersSection {...section} />
    case SectionType.ZigZagCareersWide:
      return <ZigZagCareersSection {...section} wide />
    case SectionType.CareerPerksGrid:
      return <CareerPerksGridSection {...section} />
    case SectionType.JobListings:
      return <JobListingsSection {...section} />
    case SectionType.PricingPlans:
      return <PricingPlansSectionOld {...section} />
    case SectionType.PricingPlansV2:
      if (isPricingPage) {
        return (
          <PricingPagePlansSection
            {...section}
            comingSoonText={comingSoonText}
          />
        )
      }
      return (
        <PricingPlansSection {...section} comingSoonText={comingSoonText} />
      )
    case SectionType.Table:
      return (
        <TableSection
          isPricingPage={isPricingPage && section.title !== 'Compare plans'}
          {...section}
          comingSoonText={comingSoonText}
        />
      )

    case SectionType.PurpleTable:
      return (
        <PurpleTableSection
          isPricingPage={isPricingPage && section.title !== 'Compare plans'}
          {...section}
          comingSoonText={comingSoonText}
        />
      )
    case SectionType.PriceCalculator:
      return (
        <PriceCalculatorSection
          {...section}
          isPricingPage={isPricingPage}
          totalLabel={generalData?.pricingPageTotalLabel ?? 'Total'}
        />
      )
    case SectionType.IllustrationImages:
      return <ZigZagSection {...section} isFixed />
    case SectionType.TwoQuotes:
      return <TwoQuotes {...section} />
    case SectionType.CardLinks:
      return <CardLinks {...section} />
    case SectionType.OneBigQuote:
      return <OneBigQuote {...section} />
    case SectionType.Principles:
      return <CorePrinciples {...section} />
    case SectionType.WideVerticalImages:
      return <WideVerticalImages {...section} />
    case SectionType.Ctas:
      return <Ctas {...section} />
    case SectionType.TrustGrid:
      return <TrustGrid {...section} />
    case SectionType.TrustCompliance:
      return <TrustCompliance {...section} />
    case SectionType.TrustLogos:
      return <TrustLogos {...section} />
    case SectionType.IntegrationDetails:
      return <IntegrationsCard {...section} />
    case SectionType.FeaturedResources:
      return <FeaturedResourcesSection {...section} />
    default:
      if (isDev) throw new Error(`Unsupported section type, ${section.type}.`)
      return null
  }
}

export default Section
