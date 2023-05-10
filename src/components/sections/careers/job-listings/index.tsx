import SectionLayout from 'components/layouts/section'
import { SectionFragment } from 'lib/contentful/generated'
import { useEffect } from 'react'
import { Box } from 'theme-ui'

const onLoad = () => {
  // @ts-ignore
  Grnhse.Iframe.load()
}

const appendScript = (scriptToAppend: string) => {
  const script = document.createElement('script')
  script.async = true
  script.onload = onLoad
  script.src = scriptToAppend
  document.body.appendChild(script)
}

const JobListingsSection = ({
  title,
  subtitle,
  anchorLinkId
}: SectionFragment) => {
  useEffect(() => {
    appendScript('https://boards.greenhouse.io/embed/job_board/js?for=fauna')
  }, [])

  return (
    <Box sx={{ backgroundColor: 'gray2' }}>
      <SectionLayout
        anchorId={anchorLinkId}
        title={{ text: title }}
        subtitle={subtitle?.json}
        id="job-listings"
        isHero
        pushSx={{
          pt: '60px !important',
          '&>div>h1': {
            fontWeight: 600
          }
        }}
      >
        <Box
          id="grnhse_app"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            paddingTop: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
            paddingBottom: '30px',
            borderRadius: '8px',
            boxShadow: 'card',
            backgroundColor: 'background'
          }}
        ></Box>
      </SectionLayout>
    </Box>
  )
}

export default JobListingsSection
