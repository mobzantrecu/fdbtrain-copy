declare global {
  interface Window {
    ga: any
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
  nonInteraction = false
}: {
  action: string
  category: string
  label: string
  value: string
  nonInteraction?: boolean
}) => {
  try {
    window.ga('event', action, {
      nonInteraction,
      event_category: category,
      event_label: label,
      value: value
    })
  } catch (error) {
    console.error(error)
  }
}

const raw = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGTQJ7M');
`

const GAScript = () => <script dangerouslySetInnerHTML={{ __html: raw }} />

export default GAScript
