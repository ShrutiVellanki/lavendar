import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{c as E}from"./utils-oBlX3nyX.js";import{C as F,b as L}from"./card-DW0iegJ8.js";import{A as P}from"./accordion-DeAnkaPs.js";import{c as d}from"./createLucideIcon-B3piHVE0.js";import{T as U}from"./trending-up-lLoB-y42.js";import"./index-C9rmetsa.js";import"./index-DvCGLPYa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-DOvcT7Ga.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],q=d("Banknote",$);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],W=d("CreditCard",z);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],O=d("TrendingDown",H);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],G=d("Wallet",V),l=({name:a,logo:B,balance:m,description:p,balanceColor:M})=>{const u=m<0,R=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Math.abs(m));return e.jsxs("div",{className:"w-full flex items-center justify-between p-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center bg-lavenderDawn-overlay",children:B}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("span",{className:"font-medium text-lavenderDawn-text",children:a}),p&&e.jsx("span",{className:"text-sm text-lavenderDawn-muted",children:p})]})]}),e.jsx("div",{className:"flex items-center space-x-2",children:e.jsxs("span",{className:E("font-medium",M||(u?"text-lavenderDawn-love":"text-lavenderDawn-pine")),children:[u&&"-",R]})})]})};l.__docgenInfo={description:"",methods:[],displayName:"AccountInfo",props:{name:{required:!0,tsType:{name:"string"},description:""},logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},balance:{required:!0,tsType:{name:"number"},description:""},description:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},balanceColor:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Molecules/Account/AccountInfo",component:l,parameters:{layout:"centered"}},i=a=>e.jsx("div",{className:"w-[400px]",children:e.jsx(F,{children:e.jsx(L,{children:e.jsx(l,{...a})})})}),n=i.bind({});n.args={name:"Chase Bank",logo:e.jsx(q,{className:"w-6 h-6 text-blue-600"}),balance:12350,description:"Checking ****4523"};const s=i.bind({});s.args={name:"Amex Platinum",logo:e.jsx(W,{className:"w-6 h-6 text-purple-600"}),balance:-2180,description:"Credit Card ****7890"};const t=i.bind({});t.args={name:"Total Assets",logo:e.jsx(U,{className:"w-6 h-6 text-green-600"}),balance:32450,description:"4 accounts",balanceColor:"text-green-600"};const r=i.bind({});r.args={name:"Total Liabilities",logo:e.jsx(O,{className:"w-6 h-6 text-red-600"}),balance:7888,description:"2 accounts",balanceColor:"text-red-600"};const o=i.bind({});o.args={name:"Fidelity",logo:e.jsx(G,{className:"w-6 h-6 text-green-600"}),balance:15720,description:"Investment ****9981"};const J=a=>e.jsx("div",{className:"w-[400px]",children:e.jsx(P,{header:e.jsx(l,{...a}),children:e.jsx("p",{children:"Additional details about the account..."})})}),c=J.bind({});c.args={name:"Chase Bank",logo:e.jsx(q,{className:"w-6 h-6 text-blue-600"}),balance:12350,description:"Checking ****4523"};var x,g,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => <div className="w-[400px]">
    <Card>
      <CardContent>
        <AccountInfo {...args} />
      </CardContent>
    </Card>
  </div>`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var h,f,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div className="w-[400px]">
    <Card>
      <CardContent>
        <AccountInfo {...args} />
      </CardContent>
    </Card>
  </div>`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,b,N;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => <div className="w-[400px]">
    <Card>
      <CardContent>
        <AccountInfo {...args} />
      </CardContent>
    </Card>
  </div>`,...(N=(b=t.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var w,j,A;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`args => <div className="w-[400px]">
    <Card>
      <CardContent>
        <AccountInfo {...args} />
      </CardContent>
    </Card>
  </div>`,...(A=(j=r.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var k,T,I;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div className="w-[400px]">
    <Card>
      <CardContent>
        <AccountInfo {...args} />
      </CardContent>
    </Card>
  </div>`,...(I=(T=o.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var _,D,S;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`args => <div className="w-[400px]">
    <Accordion header={<AccountInfo {...args} />}>
      <p>Additional details about the account...</p>
    </Accordion>
  </div>`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const oe=["ChaseBank","AmexPlatinum","TotalAssets","TotalLiabilities","FidelityInvestment","ExpandableAccount"];export{s as AmexPlatinum,n as ChaseBank,c as ExpandableAccount,o as FidelityInvestment,t as TotalAssets,r as TotalLiabilities,oe as __namedExportsOrder,re as default};
