"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7153],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3082:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={},s="Validator Economics",d={unversionedId:"Validators/validator-docs/validator-economics",id:"Validators/validator-docs/validator-economics",isDocsHomePage:!1,title:"Validator Economics",description:"Overview",source:"@site/docs/Validators/validator-docs/validator-economics.md",sourceDirName:"Validators/validator-docs",slug:"/Validators/validator-docs/validator-economics",permalink:"/wiki/docs/Validators/validator-docs/validator-economics",editUrl:"https://github.com/near/wiki/edit/main/wiki/docs/Validators/validator-docs/validator-economics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hardware Requirements",permalink:"/wiki/docs/Validators/validator-docs/hardware"},next:{title:"Guides",permalink:"/wiki/docs/Validators/validator-guides/README"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"1. NEAR tokens to stake",id:"1-near-tokens-to-stake",children:[{value:"Stake your NEAR tokens",id:"stake-your-near-tokens",children:[],level:3},{value:"Borrow NEAR tokens via stake delegation",id:"borrow-near-tokens-via-stake-delegation",children:[],level:3}],level:2},{value:"2. Economic implications of running a node",id:"2-economic-implications-of-running-a-node",children:[{value:"Availability",id:"availability",children:[],level:3},{value:"Consistency",id:"consistency",children:[],level:3}],level:2},{value:"3. Maintaining validator seat",id:"3-maintaining-validator-seat",children:[{value:"Adopt the Service Level Objectives",id:"adopt-the-service-level-objectives",children:[],level:3},{value:"Understand market dynamics",id:"understand-market-dynamics",children:[],level:3}],level:2},{value:"Additional links",id:"additional-links",children:[],level:2}],p={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validator-economics"},"Validator Economics"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"NEAR Protocol is a Proof-of-Stake (PoS) blockchain. As a validator there are three major considerations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"NEAR tokens to stake"),(0,r.kt)("li",{parentName:"ol"},"Understanding economic implications of running a node"),(0,r.kt)("li",{parentName:"ol"},"Maintaining validator seat")),(0,r.kt)("h2",{id:"1-near-tokens-to-stake"},"1. NEAR tokens to stake"),(0,r.kt)("p",null,"NEAR Protocol determines validators every new ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch"),", electing them based on their stake. Already elected validators are re-enrolled by automatically ",(0,r.kt)("em",{parentName:"p"},"re-staking")," their tokens plus the accrued rewards; new validators are elected if their stake is above dynamically determined ",(0,r.kt)("em",{parentName:"p"},"seatPrice"),"."),(0,r.kt)("p",null,"To obtain required tokens, you either can own them yourself or borrow via a stake delegation mechanism."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("strong",{parentName:"p"},"did you know?"),"\\\n\\\nThe reward is proportional to the stake, independently of how many discrete seats are taken by given validator.")),(0,r.kt)("h3",{id:"stake-your-near-tokens"},"Stake your NEAR tokens"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/tools/near-cli"},"NEAR CLI")," to issue your staking transaction and generate your ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal")," to become a validator. At the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch"),", if your proposal is above the ",(0,r.kt)("em",{parentName:"p"},"seatPrice"),", your node will become a validator - and will begin to generate rewards after one more epoch. You can increase your ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal")," anytime by signing a larger staking transaction."),(0,r.kt)("p",null,"You can check current validators, upcoming validators and proposals via ",(0,r.kt)("inlineCode",{parentName:"p"},"validators")," method on the RPC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ http post https://rpc.betanet.near.org jsonrpc=2.0 id=123 method=validators params:=\'[null]\'\n{\n    ...\n    "result": {\n        "current_fisherman": ...\n        "current_proposals": ...\n        "current_validators": ...\n        "next_fisherman": ...\n        "next_validators": ...\n        "prev_epoch_kickout": []\n    }\n}\n')),(0,r.kt)("h3",{id:"borrow-near-tokens-via-stake-delegation"},"Borrow NEAR tokens via stake delegation"),(0,r.kt)("p",null,"In NEAR Protocol token holders can lend their $NEAR to validators using ",(0,r.kt)("em",{parentName:"p"},"smart contracts")," receiving percentage of reward validators capturing (also called delegation). Therefore, every validator can implement its staking smart contract, or use the ones made available by NEAR Protocol or the community. This option is still work in progress, so please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nearprotocol/NEPs/pull/27"},"NEP on GitHub")," for specifications and features discussion."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("strong",{parentName:"p"},"heads up"),"\\\n\\\nIn the beginning, the network will run on a limited number of shards, with all validators competing for a limited number of seats. As an example, with 40% of the total supply at stake (400 million out of 1 billion $NEAR) and 100 seats available, every validator will need 4 million $NEAR to take one seat.")),(0,r.kt)("h2",{id:"2-economic-implications-of-running-a-node"},"2. Economic implications of running a node"),(0,r.kt)("p",null,"To actually operate the node and be able to become a validator, you need to setup the infrastructure. At a high level, your setup must provide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Availability"),(0,r.kt)("li",{parentName:"ul"},"Consistency")),(0,r.kt)("h3",{id:"availability"},"Availability"),(0,r.kt)("p",null,"NEAR Protocol doesn't enforce slashing for downtime. However, validators failing to provide a minimum threshold of chunks and blocks within each epoch get ",(0,r.kt)("em",{parentName:"p"},"kicked out")," and lose rewards for that epoch."),(0,r.kt)("p",null,"In practical terms, if your node goes offline for too long and gets kicked out, you have to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Re-stake, by sending staking transaction before the end of the failed epoch, and (if you staked enough and your ",(0,r.kt)("inlineCode",{parentName:"li"},"proposal")," was selected),"),(0,r.kt)("li",{parentName:"ul"},"Wait for one more ",(0,r.kt)("inlineCode",{parentName:"li"},"epoch")," as selection is done for epoch after next.")),(0,r.kt)("p",null,"With 730 epochs per year (one every 12 hours), you miss at least 24 hours of potential rewards."),(0,r.kt)("p",null,"To ensure availability, your node infrastructure should be able to withstand possible attacks of malicious agents, such as DDOS, connection spam and more."),(0,r.kt)("h3",{id:"consistency"},"Consistency"),(0,r.kt)("p",null,"Validators must follow protocol by producing valid blocks and chunks. Deviating from protocol, like producing alternative blocks or chunks that commit to invalid state transitions, will get their stake slashed."),(0,r.kt)("p",null,"A common issue among validators comes from running mulitple nodes which have access to the same private key. In case of misconfiguration, their setup can sign twice the same blocks. Therefore, as a validator, if you are running across different datacenters you must reliably maintain consistency. It is worth doing risk analysis on balancing consistency and availability."),(0,r.kt)("p",null,"For more information on slashing, ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/Economics/README.html#slashing"},"see specification"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("strong",{parentName:"p"},"heads up"),"\\\n\\\nAt the launch of MainNet, NEAR will have no slashing. Therefore, consistency requirements will be initially lower.")),(0,r.kt)("h2",{id:"3-maintaining-validator-seat"},"3. Maintaining validator seat"),(0,r.kt)("p",null,"Validators must keep the operations up and running by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adopting the ",(0,r.kt)("em",{parentName:"li"},"Service Level Objectives")),(0,r.kt)("li",{parentName:"ul"},"Understanding market dynamics")),(0,r.kt)("h3",{id:"adopt-the-service-level-objectives"},"Adopt the Service Level Objectives"),(0,r.kt)("p",null,"As mentioned above, there's no slashing for downtime. However, any new release of the node should be locally tested and deployed with minimum interruptions, to avoid the risks of getting ",(0,r.kt)("em",{parentName:"p"},"kicked out"),". Allocating resources on infrastructure-as-code can increase efficiency and profitability, making ongoing maintenance easier. On top of ordinary maintenance, your operations will require an incident/response playbook, to promptly resolve any infrastructure failure or emergency updates."),(0,r.kt)("h3",{id:"understand-market-dynamics"},"Understand market dynamics"),(0,r.kt)("p",null,"NEAR validators are subject to market and game-theory dynamics, relating to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The total of NEAR tokens at stake"),(0,r.kt)("li",{parentName:"ol"},"The distribution of the stake across validators"),(0,r.kt)("li",{parentName:"ol"},"Transaction fees and inflation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Total of NEAR tokens at stake")," NEAR mints 5% new tokens every year, of which 10% go to the treasury, and the rest is split between validators. Therefore, the initial supply of 1 billion NEAR will generate roughly 45 million tokens (4.5% of 1 billion) in stake rewards in the first year."),(0,r.kt)("p",null,"The reward is fixed regardless of the total amount at stake:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A relatively small stake of 100 million $NEAR tokens (10% of 1 billion) will compensate the network with a nominal return of 45% (45 million NEAR for a stake of 100 million), thus attracting more staking."),(0,r.kt)("li",{parentName:"ul"},"On the other hand, a large stake of 720 million $NEAR (72% of 1 billion) will return 6.25% in rewards (45 million NEAR for a stake of 720 million), which may lead the network to unlock some $NEAR tokens and use them in other applications.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("strong",{parentName:"p"},"did you know?"),"\\\n\\\nThe protocol automatically re-stakes with the validator rewards at the end of each epoch. Meaning the amount staked will be constantly growing if not withdrawn by the validator / staking contract.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Distribution of the stake across validators")," At the end of every ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch"),", NEAR Protocol assigns seats to validators for epoch after next: the calculation is based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal")," in $NEAR, and the total number of ",(0,r.kt)("em",{parentName:"p"},"seats")," available - which is ",(0,r.kt)("inlineCode",{parentName:"p"},"100")," per shard."),(0,r.kt)("p",null,"By monitoring the ",(0,r.kt)("inlineCode",{parentName:"p"},"proposals"),", validators can consistently estimate the stake in $NEAR per each ",(0,r.kt)("em",{parentName:"p"},"seat"),"."),(0,r.kt)("p",null,"Let's say you observe a set of proposals (and rollovers from previous epoch):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Validator"),(0,r.kt)("th",{parentName:"tr",align:null},"Stake"),(0,r.kt)("th",{parentName:"tr",align:null},"# Seats"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V1"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000"),(0,r.kt)("td",{parentName:"tr",align:null},"48")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V2"),(0,r.kt)("td",{parentName:"tr",align:null},"500,000"),(0,r.kt)("td",{parentName:"tr",align:null},"24")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V3"),(0,r.kt)("td",{parentName:"tr",align:null},"300,000"),(0,r.kt)("td",{parentName:"tr",align:null},"14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V4"),(0,r.kt)("td",{parentName:"tr",align:null},"300,000"),(0,r.kt)("td",{parentName:"tr",align:null},"14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"seat price is 20,500"),(0,r.kt)("td",{parentName:"tr",align:null},"---")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V5"),(0,r.kt)("td",{parentName:"tr",align:null},"20,000"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"seat price")," given this proposals is determined by finding such integer number that if you divide each validator's stake with rounding down (e.g. V5 20,000 / 20,500 with rounding down will be 0) - you will get required number of seats. This determines who will get their seat(s) and who's funds will be returned back to them."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"seat price")," for current epoch can be obtained by dividing the total at stake by the number of seats, for example at 400 million $NEAR at stake and 100 total seats, the ",(0,r.kt)("em",{parentName:"p"},"seat price")," will be 4 million."),(0,r.kt)("p",null,"More details can be found in the validators section of the ",(0,r.kt)("a",{parentName:"p",href:"https://near.org/papers/economics-in-sharded-blockchain/#validators"},"Economics White Paper")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transaction fees and inflation")," NEAR Protocol's rewards follow the formula ",(0,r.kt)("inlineCode",{parentName:"p"},"total_supply * 0.045/730")," of NEAR tokens at the end of every ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch"),". However, the protocol ",(0,r.kt)("em",{parentName:"p"},"burns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"tx_fees")," at the end of each block. Therefore, while rewards increase ",(0,r.kt)("inlineCode",{parentName:"p"},"total_supply")," of $NEAR tokens, the fees ",(0,r.kt)("em",{parentName:"p"},"reduce")," it."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("strong",{parentName:"p"},"did you know?"),"\\\n\\\nInflation decreases proportionally to collected fees. Therefore, if fees overcome newly created tokens, the total supply will start decreasing.")),(0,r.kt)("h2",{id:"additional-links"},"Additional links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://near.org/downloads/Nightshade.pdf"},"Nightshade Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.citusdata.com/blog/2018/01/10/sharding-in-plain-english/"},"Sharding in Plain English")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://near.org/papers/economics-in-sharded-blockchain/#validators"},"Economics in Sharded Blockchain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nomicon.io/Economics/README.html"},"Economic specs on NEAR Nomicon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.near.org/docs/api/rpc"},"Validator method on the JSON RPC APIs"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Got a question? "),(0,r.kt)("p",{parentName:"blockquote"},"Ask it on StackOverflow!")))}u.isMDXComponent=!0}}]);