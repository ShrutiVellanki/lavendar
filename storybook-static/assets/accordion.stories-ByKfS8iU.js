import{j as n}from"./jsx-runtime-z8MfsBtr.js";import{r as u}from"./index-BofL8h0e.js";import{A as a}from"./accordion-yw2IAnLs.js";import{c as _}from"./createLucideIcon-OM1hVh93.js";import"./index-C9rmetsa.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],E=_("Star",k),M={title:"Components/Accordion",component:a},i=e=>n.jsxs(n.Fragment,{children:[n.jsx(a,{...e,header:"Accordion 1",children:n.jsxs("div",{children:[n.jsx("p",{children:"This is the content of the first accordion."}),n.jsx("p",{children:"It can contain any elements you want."})]})}),n.jsx(a,{...e,header:"Accordion 2",children:n.jsxs("div",{children:[n.jsx("p",{children:"This is the content of the second accordion."}),n.jsx("p",{children:"It can contain any elements you want."})]})})]}),o=i.bind({});o.args={variant:"default"};const t=i.bind({});t.args={variant:"secondary"};const c=i.bind({});c.args={variant:"destructive"};const s=i.bind({});s.args={icon:n.jsx(E,{className:"w-5 h-5"})};const r=()=>{const[e,d]=u.useState(!1),[l,p]=u.useState(!1),h=m=>{d(m),p(m)};return n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>h(!0),className:"mb-4 px-4 py-2 bg-blue-500 text-white rounded",children:"Expand All"}),n.jsx("button",{onClick:()=>h(!1),className:"mb-4 ml-2 px-4 py-2 bg-red-500 text-white rounded",children:"Collapse All"}),n.jsx(a,{header:"Controlled Accordion 1",isOpen:e,onToggle:()=>d(!e),children:n.jsxs("div",{children:[n.jsx("p",{children:"This is the content of the first controlled accordion."}),n.jsx("p",{children:"It can contain any elements you want."})]})}),n.jsx(a,{header:"Controlled Accordion 2",isOpen:l,onToggle:()=>p(!l),children:n.jsxs("div",{children:[n.jsx("p",{children:"This is the content of the second controlled accordion."}),n.jsx("p",{children:"It can contain any elements you want."})]})})]})};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};var A,g,y;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`(args: any) => <>
    <Accordion {...args} header="Accordion 1">
      <div>
        <p>This is the content of the first accordion.</p>
        <p>It can contain any elements you want.</p>
      </div>
    </Accordion>
    <Accordion {...args} header="Accordion 2">
      <div>
        <p>This is the content of the second accordion.</p>
        <p>It can contain any elements you want.</p>
      </div>
    </Accordion>
  </>`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,x,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`(args: any) => <>
    <Accordion {...args} header="Accordion 1">
      <div>
        <p>This is the content of the first accordion.</p>
        <p>It can contain any elements you want.</p>
      </div>
    </Accordion>
    <Accordion {...args} header="Accordion 2">
      <div>
        <p>This is the content of the second accordion.</p>
        <p>It can contain any elements you want.</p>
      </div>
    </Accordion>
  </>`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var I,j,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(args: any) => <>
    <Accordion {...args} header="Accordion 1">
      <div>
        <p>This is the content of the first accordion.</p>
        <p>It can contain any elements you want.</p>
      </div>
    </Accordion>
    <Accordion {...args} header="Accordion 2">
      <div>
        <p>This is the content of the second accordion.</p>
        <p>It can contain any elements you want.</p>
      </div>
    </Accordion>
  </>`,...(O=(j=c.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var b,w,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(args: any) => <>
    <Accordion {...args} header="Accordion 1">
      <div>
        <p>This is the content of the first accordion.</p>
        <p>It can contain any elements you want.</p>
      </div>
    </Accordion>
    <Accordion {...args} header="Accordion 2">
      <div>
        <p>This is the content of the second accordion.</p>
        <p>It can contain any elements you want.</p>
      </div>
    </Accordion>
  </>`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var C,S,N;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleAll = (isOpen: boolean) => {
    setIsOpen1(isOpen);
    setIsOpen2(isOpen);
  };
  return <>
      <button onClick={() => toggleAll(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        Expand All
      </button>
      <button onClick={() => toggleAll(false)} className="mb-4 ml-2 px-4 py-2 bg-red-500 text-white rounded">
        Collapse All
      </button>
      <Accordion header="Controlled Accordion 1" isOpen={isOpen1} onToggle={() => setIsOpen1(!isOpen1)}>
        <div>
          <p>This is the content of the first controlled accordion.</p>
          <p>It can contain any elements you want.</p>
        </div>
      </Accordion>
      <Accordion header="Controlled Accordion 2" isOpen={isOpen2} onToggle={() => setIsOpen2(!isOpen2)}>
        <div>
          <p>This is the content of the second controlled accordion.</p>
          <p>It can contain any elements you want.</p>
        </div>
      </Accordion>
    </>;
}`,...(N=(S=r.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const R=["Default","Secondary","Destructive","WithIcon","Controlled"];export{r as Controlled,o as Default,c as Destructive,t as Secondary,s as WithIcon,R as __namedExportsOrder,M as default};
