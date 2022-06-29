"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7681],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1242:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Running a Validator",d={unversionedId:"Validators/validator-guides/running-a-validator",id:"Validators/validator-guides/running-a-validator",isDocsHomePage:!1,title:"Running a Validator",description:"Staking on NEAR",source:"@site/docs/Validators/validator-guides/running-a-validator.md",sourceDirName:"Validators/validator-guides",slug:"/Validators/validator-guides/running-a-validator",permalink:"/wiki/docs/Validators/validator-guides/running-a-validator",editUrl:"https://github.com/near/wiki/edit/main/wiki/docs/Validators/validator-guides/running-a-validator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running a Validator (PT)",permalink:"/wiki/docs/Validators/validator-guides/running-a-validator-pt"},next:{title:"Support",permalink:"/wiki/docs/Validators/validator-support/README"}},p=[{value:"Staking on NEAR",id:"staking-on-near",children:[{value:"Translations",id:"translations",children:[],level:3},{value:"<em>READ THIS QUICKSTART GUIDE BEFORE YOU START</em>",id:"read-this-quickstart-guide-before-you-start",children:[],level:3}],level:2},{value:"Node hardware requirements",id:"node-hardware-requirements",children:[],level:2},{value:"Setting up your environment",id:"setting-up-your-environment",children:[],level:2},{value:"Run the Node",id:"run-the-node",children:[],level:2},{value:"Authorize <code>near-cli</code> to your TestNet account",id:"authorize-near-cli-to-your-testnet-account",children:[],level:2},{value:"Deploy the staking pool",id:"deploy-the-staking-pool",children:[],level:2},{value:"Configure your node&#39;s <code>validator_key.json</code> and restart nearup",id:"configure-your-nodes-validator_keyjson-and-restart-nearup",children:[],level:2},{value:"Becoming a Validator in the <em>active set</em>",id:"becoming-a-validator-in-the-active-set",children:[],level:2},{value:"See the list of current and future validators",id:"see-the-list-of-current-and-future-validators",children:[],level:2},{value:"Automatically re-staking",id:"automatically-re-staking",children:[],level:2},{value:"Additional links",id:"additional-links",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-validator"},"Running a Validator"),(0,o.kt)("h2",{id:"staking-on-near"},"Staking on NEAR"),(0,o.kt)("h3",{id:"translations"},"Translations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wiki/docs/Validators/validator-guides/running-a-validator-kr"},"Korean")),(0,o.kt)("li",{parentName:"ul"},"Add your language too via ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/docs/pull/385"},"Github pull request"))),(0,o.kt)("h3",{id:"read-this-quickstart-guide-before-you-start"},(0,o.kt)("em",{parentName:"h3"},"READ THIS QUICKSTART GUIDE BEFORE YOU START")),(0,o.kt)("p",null,"Wait until your node is fully synced before you send a staking transaction. An out of sync node cannot produce or validate blocks, so if you're chosen as a validator, you're at risk of being kicked out of the validator pool and losing your rewards if your node doesn't maintain the appropriate uptime (i.e. validate / produce the number of assigned blocks for that epoch)."),(0,o.kt)("p",null,"You can test your validator infrastructure on NEAR ",(0,o.kt)("em",{parentName:"p"},"TestNet"),". You can generate an account with a few tokens from the ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org"},"NEAR wallet"),", and use it to deploy your staking pool. Then, contact NEAR Core-dev on ",(0,o.kt)("a",{parentName:"p",href:"https://near.chat"},"Discord")," to request sufficient stake to become a validator on TestNet."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For this current session: run the command ",(0,o.kt)("inlineCode",{parentName:"li"},"export NODE_ENV=testnet")),(0,o.kt)("li",{parentName:"ol"},"Add this same line (",(0,o.kt)("inlineCode",{parentName:"li"},"export NODE_ENV=testnet"),") to the end of the file ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.bashrc")," if you want to ensure this environment variable persists at machine restarts.")),(0,o.kt)("p",null,"TestNet is running on separate URLs for the explorer, the wallet and the Json RPC:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u26d4\ufe0f MainNet"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u2705 TestNet"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://explorer.near.org"},"https://explorer.near.org")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://explorer.testnet.near.org"},"https://explorer.testnet.near.org"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://wallet.near.org"},"https://wallet.near.org")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://wallet.testnet.near.org"},"https://wallet.testnet.near.org"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://rpc.near.org"},"https://rpc.near.org")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://rpc.testnet.near.org"},"https://rpc.testnet.near.org"))))),(0,o.kt)("p",null,"Every new TestNet account receives automatically a few hundred tokens to deploy smart contracts and test your APIs."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/nearup"},"nearup")," to easily deploy your TestNet node on a VPS. If you plan to deploy on MainNet, ",(0,o.kt)("strong",{parentName:"p"},"you can't use nearup"),", and we suggest following the guidelines ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/develop/node/validator/deploy-on-mainnet"},"here"),". Join NEAR validator channels ",(0,o.kt)("a",{parentName:"p",href:"https://near.chat"},"on Discord")," to receive technical support by NEAR team and the rest of the community."),(0,o.kt)("p",null,"NEAR Validators should:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Know how to compile, deploy and configure NEAR Validator nodes"),(0,o.kt)("li",{parentName:"ul"},"Understand the difference between ",(0,o.kt)("inlineCode",{parentName:"li"},"account_key"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"node_key"),"and ",(0,o.kt)("inlineCode",{parentName:"li"},"validator_key")," (see the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.near.org/docs/develop/node/intro/keys"},"keys on NEAR Platform")," doc)"),(0,o.kt)("li",{parentName:"ul"},"Understand how to deploy a NEAR contract, and the difference between ",(0,o.kt)("inlineCode",{parentName:"li"},"view")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"call")," methods. Know how to leverage them via ",(0,o.kt)("inlineCode",{parentName:"li"},"near-cli")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"near RPC")),(0,o.kt)("li",{parentName:"ul"},"Have a monitoring platform in place, to measure the generated and missed blocks, peers and connectivity, current node version, along with the typical CPU, memory, storage, and networking performance"),(0,o.kt)("li",{parentName:"ul"},"Understand the state of a validator: ",(0,o.kt)("inlineCode",{parentName:"li"},"proposals"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"next")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"current")),(0,o.kt)("li",{parentName:"ul"},"Use the information above to control if the validator is falling outside of the active set, and what needs to be done to fix the issue"),(0,o.kt)("li",{parentName:"ul"},"Know where to find information about upcoming ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/nearcore/releases"},"nearcore releases")," and other tooling upgrades")),(0,o.kt)("h2",{id:"node-hardware-requirements"},"Node hardware requirements"),(0,o.kt)("p",null,"The minimum requirements to run a validator node on NEAR are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"At least 4 CPU cores\nAt least 16GB RAM\nAt least 100GB SSD (Note: HDD will not work)\n")),(0,o.kt)("p",null,"More information is on the ",(0,o.kt)("a",{parentName:"p",href:"/wiki/docs/Validators/validator-docs/hardware"},"Hardware Requirements")," docs."),(0,o.kt)("h2",{id:"setting-up-your-environment"},"Setting up your environment"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT: Make sure you have the latest version of")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-cli"},(0,o.kt)("strong",{parentName:"a"},"NEAR CLI"))," ",(0,o.kt)("strong",{parentName:"p"},"and Node Version 12.x")),(0,o.kt)("p",null,"You can install and upgrade Near CLI by using npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Download Near CLI with npm:\nnpm i -g near-cli\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The default network for ",(0,o.kt)("inlineCode",{parentName:"p"},"near-cli")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet"),". If you would like to change this to ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"betanet"),", please see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/tools/near-cli#network-selection"},(0,o.kt)("inlineCode",{parentName:"a"},"near-cli")," network selection")," for instructions."),(0,o.kt)("p",null,"Once Near CLI is installed, go ahead and run your node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Pro Tip")),(0,o.kt)("p",{parentName:"blockquote"},"You don't have to run near-cli on your validator node: all staking commands are issued to the staking pool, which is a normal smart contract.")),(0,o.kt)("h2",{id:"run-the-node"},"Run the Node"),(0,o.kt)("p",null,"Please follow ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/nearup"},"Nearup documentation")," to start your TestNet node. Remember that ",(0,o.kt)("inlineCode",{parentName:"p"},"nearup")," doesn't support MainNet, so you will have to build your startup scripts and follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/develop/node/validator/deploy-on-mainnet"},"mainnet deployment guide"),"."),(0,o.kt)("p",null,"At the first start, ",(0,o.kt)("inlineCode",{parentName:"p"},"nearup")," will ask for your validator account ID. Put a placeholder, like ",(0,o.kt)("inlineCode",{parentName:"p"},"coming_soon"),", to let the node sync with the network while you deploy the staking pool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nearup run testnet --account-id coming_soon\n2020-10-16 14:02:29.190 INFO nearup - run: Home directory is /home/nearkat/.near/testnet...\n2020-10-16 14:02:29.191 INFO nodelib - setup_and_run: Using officially compiled binary\n2020-10-16 14:02:30.027 INFO util - download_binaries: Downloading latest deployed version for testnet\n2020-10-16 14:02:30.028 INFO util - download_binaries: Downloading near to /home/nearkat/.nearup/near/testnet/near from nearcore/Linux/1.16.0/974d93dc657f620d98de6589a2b5bc97be1db816/near...\n2020-10-16 14:02:33.755 INFO util - download_binaries: Downloaded near to /home/nearkat/.nearup/near/testnet/near...\n2020-10-16 14:02:33.758 INFO util - download_binaries: Making the near executable...\n2020-10-16 14:02:33.758 INFO util - download_binaries: Downloading genesis-csv-to-json to /home/nearkat/.nearup/near/testnet/genesis-csv-to-json from nearcore/Linux/1.16.0/974d93dc657f620d98de6589a2b5bc97be1db816/genesis-csv-to-json...\n2020-10-16 14:02:34.710 INFO util - download_binaries: Downloaded genesis-csv-to-json to /home/nearkat/.nearup/near/testnet/genesis-csv-to-json...\n2020-10-16 14:02:34.710 INFO util - download_binaries: Making the genesis-csv-to-json executable...\n2020-10-16 14:02:34.712 INFO nodelib - check_and_setup: Setting up network configuration.\n2020-10-16 14:02:34.712 INFO nodelib - init_near: Initializing the node configuration using near binary...\nOct 16 14:02:34.726  INFO near: Version: 1.16.0-rc.1, Build: 974d93dc-modified, Latest Protocol: 39\nOct 16 14:02:34.727  INFO near: Use key ed25519:4msyQstQ3Z7Gq1qrwE78HPTRYdLFtCmJ9dydrrbUtrer for coming_soon to stake.\nOct 16 14:02:34.727  INFO near: Downloading config file from: https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/testnet/genesis.json ...\n")),(0,o.kt)("p",null,"While the sync is in progress, you ",(0,o.kt)("strong",{parentName:"p"},"have to retrieve your validator key from")," ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.near/testnet/validator_key.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "account_id": "coming_soon",\n  "public_key": "ed25519:4msyQstQ3Z7Gq1qrwE78HPTRYdLFtCmJ9dydrrbUtrer",\n  "secret_key": "ed25519:<PRIVATE_KEY>"\n}\n')),(0,o.kt)("p",null,"This key will be needed to do the ",(0,o.kt)("em",{parentName:"p"},"pairing")," between your validator node and its staking pool."),(0,o.kt)("h2",{id:"authorize-near-cli-to-your-testnet-account"},"Authorize ",(0,o.kt)("inlineCode",{parentName:"h2"},"near-cli")," to your TestNet account"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("inlineCode",{parentName:"li"},"near-cli")," to use TestNet, issuing the command ",(0,o.kt)("inlineCode",{parentName:"li"},"export NODE_ENV=testnet")),(0,o.kt)("li",{parentName:"ol"},"Authenticate ",(0,o.kt)("inlineCode",{parentName:"li"},"near-cli")," with your NEAR Wallet account, by running the command ",(0,o.kt)("inlineCode",{parentName:"li"},"near login"))),(0,o.kt)("p",null,"You will be asked to navigate to a URL to authenticate your staking account. You can expect a result similar to the one below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ near login\n\nPlease authorize NEAR CLI on at least one of your accounts.\n\nIf your browser doesn't automatically open, please visit this URL\nhttps://wallet.testnet.near.org/login/?title=NEAR+CLI&public_key=ed25519%3A7xuBXjTabXM1yZ8WQB1Ezj95BjDnqX63cKj6RBgYa3it&success_url=http%3A%2F%2F127.0.0.1%3A5000\nPlease authorize at least one account at the URL above.\n\nWhich account did you authorize for use with NEAR CLI?\nEnter it here (if not redirected automatically):\n")),(0,o.kt)("p",null,"Be careful to specify the same TestNet account ID in the browser and ",(0,o.kt)("inlineCode",{parentName:"p"},"near-cli"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Which account did you authorize for use with NEAR CLI?\nEnter it here (if not redirected automatically):\n")),(0,o.kt)("p",null,"Once you completed the login in the browser and put the account id in the input field above, you should expect a message like the one below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nearkat.testnet\nLogged in as [ nearkat.testnet ] with public key [ ed25519:7xuBXj... ] successfully\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Heads Up!")),(0,o.kt)("p",{parentName:"blockquote"},"If you get an ERR_CONNECTION_REFUSED error, double-check that your browser is not trying to open the address ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:5000"},"http://127.0.0.1:5000"),". This is a wrong redirect of near-cli running on a remote instance, and can be ignored.")),(0,o.kt)("p",null,"To test if your ",(0,o.kt)("inlineCode",{parentName:"p"},"near-cli")," is capable to control your ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," account, issue the command: ",(0,o.kt)("inlineCode",{parentName:"p"},"$ near send nearkat.testnet testnet 0.1"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"nearkat.testnet")," is the sender, and ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," the recipient of ",(0,o.kt)("inlineCode",{parentName:"p"},"0.1")," NEAR tokens. You can expect a result similar to this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ near send quato.testnet testnet 0.1\nSending 0.1 NEAR to testnet from quato.testnet\nTransaction Id Hm6hRz8NS9sXV6yPzeyYJZwqTSUTYcifws3iu3VcbkyW\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/Hm6hRz8NS9sXV6yPzeyYJZwqTSUTYcifws3iu3VcbkyW\n")),(0,o.kt)("h2",{id:"deploy-the-staking-pool"},"Deploy the staking pool"),(0,o.kt)("p",null,"NEAR Protocol provides a staking pool smart contract from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/initial-contracts"},"initial contracts")," Github repository."),(0,o.kt)("p",null,"Deploy your staking pool by sending the call method below to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/core-contracts/tree/master/staking-pool-factory"},"staking pool factory"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'near call pool.f863973.m0 create_staking_pool \'{"staking_pool_id":"<POOL_ID>", "owner_id":"<OWNER_ID>", "stake_public_key":"<VALIDATOR_KEY>", "reward_fee_fraction": {"numerator": <X>, "denominator": <Y>}}\' --account_id <OWNER_ID> --amount 50 --gas 300000000000000\n')),(0,o.kt)("p",null,"Where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pool.f863973.m0")," is the staking pool factory mentioned above"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<POOL_ID>")," is the name of the staking pool contract. If you pass the parameter ",(0,o.kt)("inlineCode",{parentName:"li"},"heyheyhey")," the result will be ",(0,o.kt)("inlineCode",{parentName:"li"},"heyheyhey.pool.f863973.m0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<OWNER_ID>")," is the account authorized to send the ",(0,o.kt)("em",{parentName:"li"},"owner methods")," to the pool, such as the validator key or the fees"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<VALIDATOR_KEY>")," is the public key stored at ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.near/testnet/validator_key.json")," on your validator node (see ",(0,o.kt)("a",{parentName:"li",href:"/wiki/docs/Validators/validator-guides/running-a-validator#run-the-node"},"staking#run-the-node")," step above)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'{"numerator": <X>, "denominator": <Y>}')," set the validator fees. 10% of fees requires ",(0,o.kt)("inlineCode",{parentName:"li"},"x=10")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"y=100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--amount 50")," attaches 50 $NEAR to the transaction, as a reserve to pay the contract storage"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--gas 300000000000000")," specifies the gas for the transaction (optional)")),(0,o.kt)("p",null,"You can expect a result similar to this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ near call pool.f863973.m0 create_staking_pool \'{"staking_pool_id":"quato", "owner_id":"quato.testnet", "stake_public_key":"ed25519:4msyQstQ3Z7Gq1qrwE78HPTRYdLFtCmJ9dydrrbUtrer", "reward_fee_fraction": {"numerator": 5, "denominator": 100}}\' --account_id quato.testnet --amount 50 --gas 300000000000000\nScheduling a call: pool.f863973.m0.create_staking_pool({"staking_pool_id":"quato", "owner_id":"quato.testnet", "stake_public_key":"ed25519:4msyQstQ3Z7Gq1qrwE78HPTRYdLFtCmJ9dydrrbUtrer", "reward_fee_fraction": {"numerator": 5, "denominator": 100}}) with attached 50 NEAR\nReceipt: ByuKqFBuQY4oBu7GypRWEwUjAvxHacTJLGLfwUNjRunV\n  Failure [pool.f863973.m0]: Error: {"index":0}\nReceipts: 3Y8yjPkd894WSTaapyURe1moMtY8Yvbrjwmz3Pv3N2RZ, EeCy4HyRs8cuxsraxcaiW53gmvWL55xzTqDjfUaPcoXM\n  Log [pool.f863973.m0]: The staking pool @quato.pool.f863973.m0 was successfully created. Whitelisting...\nTransaction Id BYAffkmrssiErMDbmDrF2AoHKDLCQrcCe1Vk1CGEnBZB\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/BYAffkmrssiErMDbmDrF2AoHKDLCQrcCe1Vk1CGEnBZB\ntrue\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," statement in the last line and the explorer link provide proof that the staking pool is deployed and ready to receive the stake"),(0,o.kt)("h2",{id:"configure-your-nodes-validator_keyjson-and-restart-nearup"},"Configure your node's ",(0,o.kt)("inlineCode",{parentName:"h2"},"validator_key.json")," and restart nearup"),(0,o.kt)("p",null,"Once the staking pool is deployed, manually edit the file ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.near/testnet/validator_key.json")," on your validator node and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"coming_soon")," with your staking pool account name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "account_id": "quato.pool.f863973.m0",\n  "public_key": "ed25519:4msyQstQ3Z7Gq1qrwE78HPTRYdLFtCmJ9dydrrbUtrer",\n  "secret_key": "ed25519:<PRIVATE_KEY>"\n}\n')),(0,o.kt)("p",null,"Once done, you can stop and restart ",(0,o.kt)("inlineCode",{parentName:"p"},"nearup"),", with the command: ",(0,o.kt)("inlineCode",{parentName:"p"},"nearup stop")),(0,o.kt)("p",null,"followed by: ",(0,o.kt)("inlineCode",{parentName:"p"},"nearup run testnet")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Heads Up!")),(0,o.kt)("p",{parentName:"blockquote"},"Be sure that your node downloaded entirely the genesis.json file before giving the stop command to nearup.")),(0,o.kt)("h2",{id:"becoming-a-validator-in-the-active-set"},"Becoming a Validator in the ",(0,o.kt)("em",{parentName:"h2"},"active set")),(0,o.kt)("p",null,"Once the staking pool is deployed, you can ",(0,o.kt)("em",{parentName:"p"},"stake")," tokens using any of the methods offered in the ",(0,o.kt)("a",{parentName:"p",href:"../../getting-started/near-token/token-delegation.md"},"delegation docs"),". Make sure that you are using a tool that supports TestNet and not only MainNet."),(0,o.kt)("p",null,'NEAR TestNet and MainNet require at least 24 hours bonding period to accept your staking pool bid. You can verify if you are a validator when in the logs of the node you see "V/" - where V means this node is currently a validator:'),(0,o.kt)("p",null,"![Legend: # 7153 | BlockHeight V/1 | 'V' (validator) or '\u2014' (regular node)]","(</../../../../static/img/validators-1-.png)"),(0,o.kt)("p",null,"The 0/0/40 shows the total validators: connected peers / up to date peers / my peers. This number may change over time."),(0,o.kt)("p",null,"To learn more about how validators are chosen, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/wiki/docs/Validators/validator-support/faq"},"Staking FAQ"),"."),(0,o.kt)("h2",{id:"see-the-list-of-current-and-future-validators"},"See the list of current and future validators"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"near-cli")," to review the validator set in the next three epochs:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"near proposals")),(0,o.kt)("td",{parentName:"tr",align:null},"All validators that sent a staking transaction (",(0,o.kt)("inlineCode",{parentName:"td"},"Proposal(Accepted)"),"), or are re-elected (",(0,o.kt)("inlineCode",{parentName:"td"},"Rollover"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"near validators next")),(0,o.kt)("td",{parentName:"tr",align:null},"All validators that will produce blocks in the next epoch. Can be ",(0,o.kt)("inlineCode",{parentName:"td"},"New"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Rewarded")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"Kicked out"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"near validators current")),(0,o.kt)("td",{parentName:"tr",align:null},"All Validators that are producing blocks in the current epoch, and the number of blocks they produced")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Heads Up!")),(0,o.kt)("p",{parentName:"blockquote"},"You have to wait at least 2 epochs (43,200 blocks each) before your")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The default network for ",(0,o.kt)("inlineCode",{parentName:"p"},"near-cli")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet"),". If you would like to change this to ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"betanet"),", please see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/tools/near-cli#network-selection"},(0,o.kt)("inlineCode",{parentName:"a"},"near-cli")," network selection")," for instructions."),(0,o.kt)("h2",{id:"automatically-re-staking"},"Automatically re-staking"),(0,o.kt)("p",null,"NEAR Protocol automatically re-stakes all inflationary rewards, unless you decide to manually unstake some of the funds."),(0,o.kt)("h2",{id:"additional-links"},"Additional links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../getting-started/near-token/lockups.md"},"Lockup contracts explained")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/core-contracts"},"NEAR Core Contracts on Github")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nearprotocol/stakewars"},"NEAR Stake Wars"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Got a question? ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/nearprotocol"},"Ask it on StackOverflow!"))))}c.isMDXComponent=!0}}]);