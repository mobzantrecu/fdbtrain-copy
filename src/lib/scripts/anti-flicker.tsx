const antiFlickeringBody = `
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({'event': 'optimize.home-activate-c'});
`

const AntiFlickeringBody = () => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{ __html: antiFlickeringBody }}
  />
)

export default AntiFlickeringBody
