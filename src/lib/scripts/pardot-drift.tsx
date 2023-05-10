const raw = `
if (document.location.hostname.indexOf("blog.fauna.com") != -1) {
    piAId = '518431';
    piCId = '24614';
    piHostname = 'pi.pardot.com';
 
    (function () {
      function async_load() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = ('https:' === document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
        var c = document.getElementsByTagName('script')[0];
        c.parentNode.insertBefore(s, c);
      }
 
      if (window.attachEvent) {
        window.attachEvent('onload', async_load);
      }
      else {
        window.addEventListener('load', async_load, false);
      }
    })();
  }
`

const PardotScript = () => (
  <script type="text/javascript" dangerouslySetInnerHTML={{ __html: raw }} />
)

export default PardotScript
