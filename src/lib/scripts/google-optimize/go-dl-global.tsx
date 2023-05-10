const raw = `
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({'event': 'optimize.global-activate'});
`
const GoDlGlobal = () => (
  <script type="text/javascript" dangerouslySetInnerHTML={{ __html: raw }} />
)

export default GoDlGlobal
