import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (20121cc)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,transformTemplate,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,getFonts,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import SecondaryButton from"https://framerusercontent.com/modules/UIGKZgQepra9d8YaLuUV/P1cX36ln1sTOO5AxQiau/p8ljEYBnw.js";import{Input}from"https://framerusercontent.com/modules/4TG0CA0xFC8r92HZNVLs/oNHmObL27xLBv67Gbys4/Input.js";import{Icon as Phosphor}from"https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/PHaFTtd03PsDa8045nJF/Phosphor.js";const SecondaryButtonFonts=getFonts(SecondaryButton);const InputFonts=getFonts(Input);const PhosphorFonts=getFonts(Phosphor);const enabledGestures={"1094:26596":{"hover":true}};const cycleOrder=["1094:26596","dzcSJNPvL","pD4zkHGvP"];const variantClassNames={"1094:26596":"framer-v-14gqkyw","dzcSJNPvL":"framer-v-i3m6fi","pD4zkHGvP":"framer-v-4vwmxo"};const humanReadableVariantMap={"Reg":"1094:26596","Success":"dzcSJNPvL","InvalidEmail":"pD4zkHGvP"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="1094:26596",value:IMoxrNiLf="",onJoinClick:mbmNA6Rhq,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"1094:26596",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onJoinClick76rokt=activeVariantCallback(async(...args)=>{if(mbmNA6Rhq){const res=await mbmNA6Rhq(...args);if(res===false)return false;}});const onTap4vwmxo=activeVariantCallback(async(...args)=>{setVariant("1094:26596");});const variantProps=React.useMemo(()=>({"dzcSJNPvL":{"1094:26596":{"data-border":false,"data-framer-name":"Success","background":null}},"pD4zkHGvP":{"1094:26596":{"onTap":onTap4vwmxo,"data-framer-name":"InvalidEmail","data-highlight":true},"Bd4u8C1z8":{"border":"var(--token-1d36ec64-db78-4174-b047-2d83fb80f3de, rgb(216, 48, 48)) /* {\"name\":\"R500\"} */"},"X3ty6yd2O":{"center":false,"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>Invalid email. Try again.</span><br></div></div>","fonts":["GF;Poppins-500"]}},"1094:26596-hover":{"Bd4u8C1z8":{"border":"var(--token-b12295ad-90aa-43a1-beee-e8d23b7b0889, rgb(197, 203, 211)) /* {\"name\":\"N500\"} */"}}}),[onTap4vwmxo]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(baseVariant==="dzcSJNPvL")return false;return true;};const isDisplayed2=()=>{if(baseVariant==="dzcSJNPvL")return false;return true;};const isDisplayed3=()=>{if(baseVariant==="dzcSJNPvL")return true;return false;};const isDisplayed4=()=>{if(baseVariant==="pD4zkHGvP")return true;return false;};const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-fPZpO",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsxs(Stack,{...restProps,layoutId:"1094:26596",className:cx("framer-14gqkyw",className),style:{"borderBottomLeftRadius":4,"borderBottomRightRadius":4,"borderTopRightRadius":4,"borderTopLeftRadius":4,"backgroundColor":"transparent",...style},background:null,direction:"vertical",distribution:"start",alignment:"center",gap:4,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,"data-framer-name":"Reg",variants:{"dzcSJNPvL":{"backgroundColor":"transparent","--border-bottom-width":"0px","--border-top-width":"0px","--border-right-width":"0px","--border-left-width":"0px"}},transition:transition,ref:ref,...addVariantProps("1094:26596"),children:[/*#__PURE__*/ _jsxs(motion.div,{layoutId:"vINvs_EqT",className:"framer-14c51tn",style:{},background:null,"data-framer-name":"Input",transition:transition,...addVariantProps("vINvs_EqT"),children:[isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"Bd4u8C1z8-container",className:"framer-13fegfg-container",transformTemplate:transformTemplate("y"),transition:transition,...addVariantProps("Bd4u8C1z8-container"),children:/*#__PURE__*/ _jsx(Input,{width:"100%",height:"100%",layoutId:"Bd4u8C1z8",id:"Bd4u8C1z8",placeholder:"hey@email.com",value:IMoxrNiLf,textColor:"var(--token-cfdb92db-d993-4ba2-9121-98d4e77b6d53, rgb(66, 75, 87)) /* {\"name\":\"N900\"} */",caretColor:"var(--token-cfdb92db-d993-4ba2-9121-98d4e77b6d53, rgb(66, 75, 87)) /* {\"name\":\"N900\"} */",placeholderColor:"var(--token-b12295ad-90aa-43a1-beee-e8d23b7b0889, rgb(197, 203, 211)) /* {\"name\":\"N500\"} */",backgroundColor:"rgb(255, 255, 255)",border:"var(--token-ccd79855-2478-4a69-8771-c7d167a8de28, rgb(229, 232, 235)) /* {\"name\":\"N400\"} */",borderWidth:1,focusColor:"var(--token-4926c19a-7f31-48fc-916c-4cb470378b42, rgb(113, 125, 142)) /* {\"name\":\"N800\"} */",focused:false,font:true,fontFamily:"Poppins",fontWeight:400,fontSize:14,lineHeight:1.4,padding:15,paddingPerSide:true,paddingTop:0,paddingRight:88,paddingBottom:0,paddingLeft:16,borderRadius:4,isMixedBorderRadius:false,topLeftRadius:4,topRightRadius:4,bottomRightRadius:4,bottomLeftRadius:4,textAlign:"left",isRTL:false,disabled:false,multiLine:false,truncate:false,password:false,enableLimit:false,maxLength:10,keyboard:"email",style:{"width":"100%","height":"100%"},transition:transition,...addVariantProps("Bd4u8C1z8")})}),isDisplayed2()&&/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"oehXqSDiL-container",className:"framer-76rokt-container",transformTemplate:transformTemplate("y"),transition:transition,...addVariantProps("oehXqSDiL-container"),children:/*#__PURE__*/ _jsx(SecondaryButton,{width:"100%",height:"100%",layoutId:"oehXqSDiL",id:"oehXqSDiL",onJoinClick:onJoinClick76rokt,transition:transition,...addVariantProps("oehXqSDiL")})}),isDisplayed3()&&/*#__PURE__*/ _jsxs(Stack,{layoutId:"f6sKzxvqk",className:"framer-1tj3ftb",style:{"borderBottomLeftRadius":4,"borderBottomRightRadius":4,"borderTopRightRadius":4,"borderTopLeftRadius":4,"backgroundColor":"var(--token-2992b466-0fe3-49d6-b450-e4375f2fc3fa, rgb(227, 250, 241))","--border-bottom-width":"1px","--border-top-width":"1px","--border-right-width":"1px","--border-left-width":"1px","--border-style":"solid","--border-color":"var(--token-159afdef-8b73-4585-9f55-35812a9f97ac, rgb(32, 189, 129)) /* {\"name\":\"G500\"} */"},direction:"horizontal",distribution:"start",alignment:"center",gap:6,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"100%","padding":"0px 0px 0px 16px"},center:"x","data-framer-name":"SuccessBanner","data-border":true,transition:transition,...addVariantProps("f6sKzxvqk"),children:[/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"O1AQ9zLel-container",className:"framer-1tgnjj0-container",transition:transition,...addVariantProps("O1AQ9zLel-container"),children:/*#__PURE__*/ _jsx(Phosphor,{width:"100%",height:"100%",layoutId:"O1AQ9zLel",id:"O1AQ9zLel",selectByList:true,iconSelection:"CheckCircle",iconSearch:"check-circle",color:"var(--token-e241f922-a5ea-48d7-8fe4-c2265652b451, rgb(11, 112, 74)) /* {\"name\":\"G700\"} */",weight:"regular",mirrored:false,style:{"width":"100%","height":"100%"},transition:transition,...addVariantProps("O1AQ9zLel")})}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Poppins\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-e241f922-a5ea-48d7-8fe4-c2265652b451, rgb(11, 112, 74))","--framer-font-size":"14px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"18px","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Poppins-regular"],layoutId:"Qw1T43DBE",className:"framer-1eb0i6s",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>You&#39;re on the list!</span><br></div></div>",transition:transition,...addVariantProps("Qw1T43DBE")})]})]}),isDisplayed4()&&/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Poppins\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-1d36ec64-db78-4174-b047-2d83fb80f3de, rgb(216, 48, 48))","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"18px","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Poppins-regular"],layoutId:"X3ty6yd2O",className:"framer-njzq6q",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>Invalid email. Try again.</span><br></div></div>",variants:{"pD4zkHGvP":{"--framer-font-size":"12px","--framer-font-family":"\"Poppins\", serif","--framer-font-style":"normal","--framer-font-weight":500}},transition:transition,...addVariantProps("X3ty6yd2O")})]})})}));});const css=[".framer-fPZpO [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}",".framer-fPZpO * { box-sizing: border-box; }",".framer-fPZpO .framer-14gqkyw { position: relative; overflow: visible; width: 400px; height: min-content; }",".framer-fPZpO .framer-14c51tn { position: relative; overflow: visible; width: 100%; height: 44px; flex: none; }",".framer-fPZpO .framer-13fegfg-container { position: absolute; width: 100%; height: 100%; right: 0px; top: 50%; flex: none; }",".framer-fPZpO .framer-76rokt-container { position: absolute; width: auto; height: auto; right: 4px; top: 50%; flex: none; }",".framer-fPZpO .framer-1tj3ftb { position: absolute; overflow: visible; width: 100%; height: 100%; left: 50%; top: 0px; flex: none; }",".framer-fPZpO .framer-1tgnjj0-container { position: relative; width: 24px; height: 24px; flex: none; }",".framer-fPZpO .framer-1eb0i6s { position: relative; overflow: visible; width: auto; height: auto; flex: none; white-space: pre; }",".framer-fPZpO .framer-njzq6q { position: relative; overflow: hidden; width: 100%; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-fPZpO.framer-v-i3m6fi .framer-14gqkyw { overflow: visible; }",".framer-fPZpO.framer-v-4vwmxo .framer-14gqkyw, .framer-fPZpO.framer-v-14gqkyw .framer-14gqkyw { cursor: pointer; }",".framer-fPZpO.framer-v-4vwmxo .framer-njzq6q { width: 100%; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 44
 * @framerIntrinsicWidth 400
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "auto"]}, "dzcSJNPvL": {"layout": ["fixed", "auto"]}, "pD4zkHGvP": {"layout": ["fixed", "auto"]}, "Q_CB_HzhU": {"layout": ["fixed", "auto"]}}}
 * @framerVariables {"IMoxrNiLf": "value", "mbmNA6Rhq": "onJoinClick"}
 */ const FramerHGalm0GVC=withCSS(Component,css);export default FramerHGalm0GVC;FramerHGalm0GVC.displayName="EmailInput";FramerHGalm0GVC.defaultProps={"width":400,"height":44};addPropertyControls(FramerHGalm0GVC,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["1094:26596","dzcSJNPvL","pD4zkHGvP"],"optionTitles":["Reg","Success","InvalidEmail"]},"IMoxrNiLf":{"type":ControlType.String,"title":"Value","defaultValue":""},"mbmNA6Rhq":{"type":ControlType.EventHandler,"title":"On Join Click"}});addFonts(FramerHGalm0GVC,[{"url":"https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf","family":"Poppins","style":"normal","weight":"400","moduleAsset":{"url":"https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf","localModuleIdentifier":"local-module:canvasComponent/HGalm0GVC:default"}},...SecondaryButtonFonts,...InputFonts,...PhosphorFonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerHGalm0GVC","slots":[],"annotations":{"framerVariables":"{\"IMoxrNiLf\": \"value\", \"mbmNA6Rhq\": \"onJoinClick\"}","framerContractVersion":"1","framerIntrinsicWidth":"400","framerIntrinsicHeight":"44","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"auto\"]}, \"dzcSJNPvL\": {\"layout\": [\"fixed\", \"auto\"]}, \"pD4zkHGvP\": {\"layout\": [\"fixed\", \"auto\"]}, \"Q_CB_HzhU\": {\"layout\": [\"fixed\", \"auto\"]}}}"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./HGalm0GVC.map