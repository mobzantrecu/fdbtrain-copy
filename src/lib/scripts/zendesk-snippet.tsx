const raw = `
window.zESettings = {
  webWidget: {
    color: { 
      theme: '#604BE9',
    }
  }
};
zE(function() {
  zE.setLocale('en-US');
});
`

const ZendeskSnippetScript = () => (
  <>
    <script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=6b102a02-1d4e-483e-b5cc-3b1cac8e3ac3"
    ></script>
    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: raw }} />
  </>
)

export default ZendeskSnippetScript
