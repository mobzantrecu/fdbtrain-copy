const raw = `
(function(){var a=window.mutiny=window.mutiny||{};if(!window.mutiny.client){a.client={_queue:{}};var b=["identify","trackConversion"];var c=[].concat(b,["defaultOptOut","optOut","optIn"]);var d=function factory(c){return function(){for(var d=arguments.length,e=new Array(d),f=0;f<d;f++){e[f]=arguments[f]}a.client._queue[c]=a.client._queue[c]||[];if(b.includes(c)){return new Promise(function(b,d){a.client._queue[c].push({args:e,resolve:b,reject:d});setTimeout(d,500)})}else{a.client._queue[c].push({args:e})}}};c.forEach(function(b){a.client[b]=d(b)})}})();
`

const MutinySnippetScript = () => (
  <>
    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: raw }} />
    <script
      data-cfasync="false"
      src="https://client-registry.mutinycdn.com/personalize/client/5d70d91d0a4f48b3.js"
    ></script>
  </>
)

export default MutinySnippetScript
