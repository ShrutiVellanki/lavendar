import{j as n}from"./jsx-runtime-z8MfsBtr.js";import{r as u}from"./index-DvCGLPYa.js";import{A as a}from"./accordion-DeAnkaPs.js";import{B as A}from"./button-DMlmaYwa.js";import{c as k}from"./createLucideIcon-B3piHVE0.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-DOvcT7Ga.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],E=k("Star",z),G={title:"Molecules/Accordion",component:a},i=e=>n.jsxs(n.Fragment,{children:[n.jsx(a,{...e,header:"Accordion 1",children:n.jsxs("div",{children:[n.jsx("p",{children:"This is the content of the first accordion."}),n.jsx("p",{children:"It can contain any elements you want."})]})}),n.jsx(a,{...e,header:"Accordion 2",children:n.jsxs("div",{children:[n.jsx("p",{children:"This is the content of the second accordion."}),n.jsx("p",{children:"It can contain any elements you want."})]})})]}),o=i.bind({});o.args={variant:"default"};const c=i.bind({});c.args={variant:"secondary"};const t=i.bind({});t.args={variant:"destructive"};const s=i.bind({});s.args={icon:n.jsx(E,{className:"w-5 h-5"})};const r=()=>{const[e,d]=u.useState(!1),[l,p]=u.useState(!1),h=m=>{d(m),p(m)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4 space-x-4",children:[n.jsx(A,{onClick:()=>h(!0),variant:"primary",size:"md",children:"Expand All"}),n.jsx(A,{onClick:()=>h(!1),variant:"secondary",size:"md",children:"Collapse"})]}),n.jsx(a,{header:"Controlled Accordion 1",isOpen:e,onToggle:()=>d(!e),children:n.jsxs("div",{children:[n.jsx("p",{children:"This is the content of the first controlled accordion."}),n.jsx("p",{children:"It can contain any elements you want."})]})}),n.jsx(a,{header:"Controlled Accordion 2",isOpen:l,onToggle:()=>p(!l),children:n.jsxs("div",{children:[n.jsx("p",{children:"This is the content of the second controlled accordion."}),n.jsx("p",{children:"It can contain any elements you want."})]})})]})};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};var y,g,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(args: any) => <>
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
  </>`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`(args: any) => <>
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
  </>`,...(I=(x=c.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var j,O,T;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`(args: any) => <>
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
  </>`,...(T=(O=t.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var w,C,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`(args: any) => <>
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
  </>`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,_,B;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleAll = (isOpen: boolean) => {
    setIsOpen1(isOpen);
    setIsOpen2(isOpen);
  };
  return <>
      <div className="mb-4 space-x-4">
        <Button onClick={() => toggleAll(true)} variant="primary" size="md">
          Expand All
        </Button>
        <Button onClick={() => toggleAll(false)} variant="secondary" size="md">
          Collapse
        </Button>
      </div>
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
}`,...(B=(_=r.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const H=["Default","Secondary","Destructive","WithIcon","Controlled"];export{r as Controlled,o as Default,t as Destructive,c as Secondary,s as WithIcon,H as __namedExportsOrder,G as default};
