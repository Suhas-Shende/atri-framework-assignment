import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex222Cb, useFlex220Cb, useFlex218Cb, useFlex219Cb, useFlex221Cb, useFlex235Cb, useFlex232Cb, useFlex223Cb, useFlex224Cb, useFlex225Cb, useFlex226Cb, useFlex233Cb, useFlex227Cb, useFlex228Cb, useFlex229Cb, useFlex230Cb, useFlex234Cb, useFlex236Cb, useFlex238Cb, useFlex250Cb, useFlex237Cb, useFlex239Cb, useFlex246Cb, useFlex247Cb, useFlex248Cb, useFlex255Cb, useFlex251Cb, useFlex252Cb, useFlex253Cb, useFlex254Cb, useTextBox203Cb, useTextBox204Cb, useTextBox205Cb, useTextBox206Cb, useTextBox207Cb, useImage103Cb, useButton29Cb, useButton30Cb, useTextBox208Cb, useImage104Cb, useTextBox209Cb, useTextBox210Cb, useTextBox211Cb, useTextBox212Cb, useTextBox213Cb, useImage105Cb, useTextBox214Cb, useTextBox215Cb, useTextBox216Cb, useImage106Cb, useTextBox217Cb, useTextBox218Cb, useTextBox219Cb, useImage107Cb, useTextBox220Cb, useTextBox221Cb, useImage108Cb, useTextBox222Cb, useTextBox223Cb, useImage109Cb, useTextBox224Cb, useTextBox225Cb, useTextBox226Cb, useImage110Cb, useTextBox227Cb, useTextBox228Cb, useTextBox229Cb, useTextBox230Cb, useTextBox231Cb, useImage111Cb, useTextBox232Cb, useTextBox233Cb, useButton33Cb, useButton41Cb, useButton42Cb, useButton43Cb, useButton44Cb, useTextBox234Cb, useTextBox235Cb, useImage112Cb, useImage117Cb, useImage118Cb, useImage119Cb, useImage120Cb, useImage121Cb, useImage122Cb, useImage123Cb } from "../page-cbs/Menu";
import "../page-css/Menu.css";
import "../custom/Menu";

export default function Menu() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex222Props = useStore((state)=>state["Menu"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["Menu"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const Flex220Props = useStore((state)=>state["Menu"]["Flex220"]);
const Flex220IoProps = useIoStore((state)=>state["Menu"]["Flex220"]);
const Flex220Cb = useFlex220Cb()
const Flex218Props = useStore((state)=>state["Menu"]["Flex218"]);
const Flex218IoProps = useIoStore((state)=>state["Menu"]["Flex218"]);
const Flex218Cb = useFlex218Cb()
const Flex219Props = useStore((state)=>state["Menu"]["Flex219"]);
const Flex219IoProps = useIoStore((state)=>state["Menu"]["Flex219"]);
const Flex219Cb = useFlex219Cb()
const Flex221Props = useStore((state)=>state["Menu"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["Menu"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const Flex235Props = useStore((state)=>state["Menu"]["Flex235"]);
const Flex235IoProps = useIoStore((state)=>state["Menu"]["Flex235"]);
const Flex235Cb = useFlex235Cb()
const Flex232Props = useStore((state)=>state["Menu"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["Menu"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const Flex223Props = useStore((state)=>state["Menu"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["Menu"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Flex224Props = useStore((state)=>state["Menu"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["Menu"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex225Props = useStore((state)=>state["Menu"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["Menu"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const Flex226Props = useStore((state)=>state["Menu"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["Menu"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Flex233Props = useStore((state)=>state["Menu"]["Flex233"]);
const Flex233IoProps = useIoStore((state)=>state["Menu"]["Flex233"]);
const Flex233Cb = useFlex233Cb()
const Flex227Props = useStore((state)=>state["Menu"]["Flex227"]);
const Flex227IoProps = useIoStore((state)=>state["Menu"]["Flex227"]);
const Flex227Cb = useFlex227Cb()
const Flex228Props = useStore((state)=>state["Menu"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["Menu"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const Flex229Props = useStore((state)=>state["Menu"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["Menu"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Flex230Props = useStore((state)=>state["Menu"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["Menu"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
const Flex234Props = useStore((state)=>state["Menu"]["Flex234"]);
const Flex234IoProps = useIoStore((state)=>state["Menu"]["Flex234"]);
const Flex234Cb = useFlex234Cb()
const Flex236Props = useStore((state)=>state["Menu"]["Flex236"]);
const Flex236IoProps = useIoStore((state)=>state["Menu"]["Flex236"]);
const Flex236Cb = useFlex236Cb()
const Flex238Props = useStore((state)=>state["Menu"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["Menu"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const Flex250Props = useStore((state)=>state["Menu"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["Menu"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Flex237Props = useStore((state)=>state["Menu"]["Flex237"]);
const Flex237IoProps = useIoStore((state)=>state["Menu"]["Flex237"]);
const Flex237Cb = useFlex237Cb()
const Flex239Props = useStore((state)=>state["Menu"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["Menu"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Flex246Props = useStore((state)=>state["Menu"]["Flex246"]);
const Flex246IoProps = useIoStore((state)=>state["Menu"]["Flex246"]);
const Flex246Cb = useFlex246Cb()
const Flex247Props = useStore((state)=>state["Menu"]["Flex247"]);
const Flex247IoProps = useIoStore((state)=>state["Menu"]["Flex247"]);
const Flex247Cb = useFlex247Cb()
const Flex248Props = useStore((state)=>state["Menu"]["Flex248"]);
const Flex248IoProps = useIoStore((state)=>state["Menu"]["Flex248"]);
const Flex248Cb = useFlex248Cb()
const Flex255Props = useStore((state)=>state["Menu"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["Menu"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex251Props = useStore((state)=>state["Menu"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["Menu"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const Flex252Props = useStore((state)=>state["Menu"]["Flex252"]);
const Flex252IoProps = useIoStore((state)=>state["Menu"]["Flex252"]);
const Flex252Cb = useFlex252Cb()
const Flex253Props = useStore((state)=>state["Menu"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["Menu"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex254Props = useStore((state)=>state["Menu"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["Menu"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const TextBox203Props = useStore((state)=>state["Menu"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["Menu"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox204Props = useStore((state)=>state["Menu"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["Menu"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const TextBox205Props = useStore((state)=>state["Menu"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["Menu"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const TextBox206Props = useStore((state)=>state["Menu"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["Menu"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const TextBox207Props = useStore((state)=>state["Menu"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["Menu"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const Image103Props = useStore((state)=>state["Menu"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["Menu"]["Image103"]);
const Image103Cb = useImage103Cb()
const Button29Props = useStore((state)=>state["Menu"]["Button29"]);
const Button29IoProps = useIoStore((state)=>state["Menu"]["Button29"]);
const Button29Cb = useButton29Cb()
const Button30Props = useStore((state)=>state["Menu"]["Button30"]);
const Button30IoProps = useIoStore((state)=>state["Menu"]["Button30"]);
const Button30Cb = useButton30Cb()
const TextBox208Props = useStore((state)=>state["Menu"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Menu"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const Image104Props = useStore((state)=>state["Menu"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["Menu"]["Image104"]);
const Image104Cb = useImage104Cb()
const TextBox209Props = useStore((state)=>state["Menu"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Menu"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox210Props = useStore((state)=>state["Menu"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Menu"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const TextBox211Props = useStore((state)=>state["Menu"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Menu"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox212Props = useStore((state)=>state["Menu"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["Menu"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const TextBox213Props = useStore((state)=>state["Menu"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Menu"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const Image105Props = useStore((state)=>state["Menu"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["Menu"]["Image105"]);
const Image105Cb = useImage105Cb()
const TextBox214Props = useStore((state)=>state["Menu"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Menu"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const TextBox215Props = useStore((state)=>state["Menu"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Menu"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const TextBox216Props = useStore((state)=>state["Menu"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["Menu"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const Image106Props = useStore((state)=>state["Menu"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["Menu"]["Image106"]);
const Image106Cb = useImage106Cb()
const TextBox217Props = useStore((state)=>state["Menu"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["Menu"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox218Props = useStore((state)=>state["Menu"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Menu"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const TextBox219Props = useStore((state)=>state["Menu"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Menu"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const Image107Props = useStore((state)=>state["Menu"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Menu"]["Image107"]);
const Image107Cb = useImage107Cb()
const TextBox220Props = useStore((state)=>state["Menu"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Menu"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox221Props = useStore((state)=>state["Menu"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Menu"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const Image108Props = useStore((state)=>state["Menu"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["Menu"]["Image108"]);
const Image108Cb = useImage108Cb()
const TextBox222Props = useStore((state)=>state["Menu"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Menu"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox223Props = useStore((state)=>state["Menu"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Menu"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const Image109Props = useStore((state)=>state["Menu"]["Image109"]);
const Image109IoProps = useIoStore((state)=>state["Menu"]["Image109"]);
const Image109Cb = useImage109Cb()
const TextBox224Props = useStore((state)=>state["Menu"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Menu"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const TextBox225Props = useStore((state)=>state["Menu"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Menu"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox226Props = useStore((state)=>state["Menu"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Menu"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const Image110Props = useStore((state)=>state["Menu"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["Menu"]["Image110"]);
const Image110Cb = useImage110Cb()
const TextBox227Props = useStore((state)=>state["Menu"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Menu"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox228Props = useStore((state)=>state["Menu"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Menu"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const TextBox229Props = useStore((state)=>state["Menu"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Menu"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox230Props = useStore((state)=>state["Menu"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["Menu"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const TextBox231Props = useStore((state)=>state["Menu"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["Menu"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const Image111Props = useStore((state)=>state["Menu"]["Image111"]);
const Image111IoProps = useIoStore((state)=>state["Menu"]["Image111"]);
const Image111Cb = useImage111Cb()
const TextBox232Props = useStore((state)=>state["Menu"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["Menu"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const TextBox233Props = useStore((state)=>state["Menu"]["TextBox233"]);
const TextBox233IoProps = useIoStore((state)=>state["Menu"]["TextBox233"]);
const TextBox233Cb = useTextBox233Cb()
const Button33Props = useStore((state)=>state["Menu"]["Button33"]);
const Button33IoProps = useIoStore((state)=>state["Menu"]["Button33"]);
const Button33Cb = useButton33Cb()
const Button41Props = useStore((state)=>state["Menu"]["Button41"]);
const Button41IoProps = useIoStore((state)=>state["Menu"]["Button41"]);
const Button41Cb = useButton41Cb()
const Button42Props = useStore((state)=>state["Menu"]["Button42"]);
const Button42IoProps = useIoStore((state)=>state["Menu"]["Button42"]);
const Button42Cb = useButton42Cb()
const Button43Props = useStore((state)=>state["Menu"]["Button43"]);
const Button43IoProps = useIoStore((state)=>state["Menu"]["Button43"]);
const Button43Cb = useButton43Cb()
const Button44Props = useStore((state)=>state["Menu"]["Button44"]);
const Button44IoProps = useIoStore((state)=>state["Menu"]["Button44"]);
const Button44Cb = useButton44Cb()
const TextBox234Props = useStore((state)=>state["Menu"]["TextBox234"]);
const TextBox234IoProps = useIoStore((state)=>state["Menu"]["TextBox234"]);
const TextBox234Cb = useTextBox234Cb()
const TextBox235Props = useStore((state)=>state["Menu"]["TextBox235"]);
const TextBox235IoProps = useIoStore((state)=>state["Menu"]["TextBox235"]);
const TextBox235Cb = useTextBox235Cb()
const Image112Props = useStore((state)=>state["Menu"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["Menu"]["Image112"]);
const Image112Cb = useImage112Cb()
const Image117Props = useStore((state)=>state["Menu"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["Menu"]["Image117"]);
const Image117Cb = useImage117Cb()
const Image118Props = useStore((state)=>state["Menu"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["Menu"]["Image118"]);
const Image118Cb = useImage118Cb()
const Image119Props = useStore((state)=>state["Menu"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["Menu"]["Image119"]);
const Image119Cb = useImage119Cb()
const Image120Props = useStore((state)=>state["Menu"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["Menu"]["Image120"]);
const Image120Cb = useImage120Cb()
const Image121Props = useStore((state)=>state["Menu"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["Menu"]["Image121"]);
const Image121Cb = useImage121Cb()
const Image122Props = useStore((state)=>state["Menu"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["Menu"]["Image122"]);
const Image122Cb = useImage122Cb()
const Image123Props = useStore((state)=>state["Menu"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["Menu"]["Image123"]);
const Image123Cb = useImage123Cb()

  return (<>
  <Flex1 className="p-Menu Flex222 bpt" {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<Flex1 className="p-Menu Flex220 bpt" {...Flex220Props} {...Flex220Cb} {...Flex220IoProps}>
<Flex1 className="p-Menu Flex219 bpt" {...Flex219Props} {...Flex219Cb} {...Flex219IoProps}>
<Image1 className="p-Menu Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex218 bpt" {...Flex218Props} {...Flex218Cb} {...Flex218IoProps}>
<TextBox1 className="p-Menu TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<TextBox1 className="p-Menu TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
<TextBox1 className="p-Menu TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
<TextBox1 className="p-Menu TextBox207 bpt" {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
<TextBox1 className="p-Menu TextBox205 bpt" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Menu Flex221 bpt" {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<Button1 className="p-Menu Button30 bpt" {...Button30Props} {...Button30Cb} {...Button30IoProps}/>
<Button1 className="p-Menu Button29 bpt" {...Button29Props} {...Button29Cb} {...Button29IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Menu Flex235 bpt" {...Flex235Props} {...Flex235Cb} {...Flex235IoProps}>
<Flex1 className="p-Menu Flex238 bpt" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<Flex1 className="p-Menu Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<Flex1 className="p-Menu Flex255 bpt" {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<Flex1 className="p-Menu Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<Image1 className="p-Menu Image123 bpt" {...Image123Props} {...Image123Cb} {...Image123IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex253 bpt" {...Flex253Props} {...Flex253Cb} {...Flex253IoProps}>
<Image1 className="p-Menu Image122 bpt" {...Image122Props} {...Image122Cb} {...Image122IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex252 bpt" {...Flex252Props} {...Flex252Cb} {...Flex252IoProps}>
<Image1 className="p-Menu Image121 bpt" {...Image121Props} {...Image121Cb} {...Image121IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex251 bpt" {...Flex251Props} {...Flex251Cb} {...Flex251IoProps}>
<Image1 className="p-Menu Image120 bpt" {...Image120Props} {...Image120Cb} {...Image120IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Menu Flex237 bpt" {...Flex237Props} {...Flex237Cb} {...Flex237IoProps}>
<Flex1 className="p-Menu Flex239 bpt" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<Image1 className="p-Menu Image112 bpt" {...Image112Props} {...Image112Cb} {...Image112IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex246 bpt" {...Flex246Props} {...Flex246Cb} {...Flex246IoProps}>
<Image1 className="p-Menu Image117 bpt" {...Image117Props} {...Image117Cb} {...Image117IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex247 bpt" {...Flex247Props} {...Flex247Cb} {...Flex247IoProps}>
<Image1 className="p-Menu Image118 bpt" {...Image118Props} {...Image118Cb} {...Image118IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex248 bpt" {...Flex248Props} {...Flex248Cb} {...Flex248IoProps}>
<Image1 className="p-Menu Image119 bpt" {...Image119Props} {...Image119Cb} {...Image119IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<TextBox1 className="p-Menu TextBox235 bpt" {...TextBox235Props} {...TextBox235Cb} {...TextBox235IoProps}/>
<TextBox1 className="p-Menu TextBox234 bpt" {...TextBox234Props} {...TextBox234Cb} {...TextBox234IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex232 bpt" {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<Flex1 className="p-Menu Flex226 bpt" {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<TextBox1 className="p-Menu TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<TextBox1 className="p-Menu TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox1 className="p-Menu TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<Image1 className="p-Menu Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex225 bpt" {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<TextBox1 className="p-Menu TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
<TextBox1 className="p-Menu TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<TextBox1 className="p-Menu TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
<Image1 className="p-Menu Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<TextBox1 className="p-Menu TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
<TextBox1 className="p-Menu TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
<TextBox1 className="p-Menu TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<Image1 className="p-Menu Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex223 bpt" {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<TextBox1 className="p-Menu TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
<TextBox1 className="p-Menu TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
<TextBox1 className="p-Menu TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
<Image1 className="p-Menu Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Menu Flex233 bpt" {...Flex233Props} {...Flex233Cb} {...Flex233IoProps}>
<Flex1 className="p-Menu Flex227 bpt" {...Flex227Props} {...Flex227Cb} {...Flex227IoProps}>
<TextBox1 className="p-Menu TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<TextBox1 className="p-Menu TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<TextBox1 className="p-Menu TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<Image1 className="p-Menu Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex228 bpt" {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<TextBox1 className="p-Menu TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
<TextBox1 className="p-Menu TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox1 className="p-Menu TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
<Image1 className="p-Menu Image109 bpt" {...Image109Props} {...Image109Cb} {...Image109IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex229 bpt" {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<TextBox1 className="p-Menu TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<TextBox1 className="p-Menu TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
<TextBox1 className="p-Menu TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
<Image1 className="p-Menu Image110 bpt" {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
</Flex1>
<Flex1 className="p-Menu Flex230 bpt" {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<TextBox1 className="p-Menu TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<TextBox1 className="p-Menu TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
<TextBox1 className="p-Menu TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
<Image1 className="p-Menu Image111 bpt" {...Image111Props} {...Image111Cb} {...Image111IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Menu Flex234 bpt" {...Flex234Props} {...Flex234Cb} {...Flex234IoProps}>
<Flex1 className="p-Menu Flex236 bpt" {...Flex236Props} {...Flex236Cb} {...Flex236IoProps}>
<Button1 className="p-Menu Button33 bpt" {...Button33Props} {...Button33Cb} {...Button33IoProps}/>
<Button1 className="p-Menu Button41 bpt" {...Button41Props} {...Button41Cb} {...Button41IoProps}/>
<Button1 className="p-Menu Button42 bpt" {...Button42Props} {...Button42Cb} {...Button42IoProps}/>
<Button1 className="p-Menu Button43 bpt" {...Button43Props} {...Button43Cb} {...Button43IoProps}/>
<Button1 className="p-Menu Button44 bpt" {...Button44Props} {...Button44Cb} {...Button44IoProps}/>
</Flex1>
<TextBox1 className="p-Menu TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
<TextBox1 className="p-Menu TextBox233 bpt" {...TextBox233Props} {...TextBox233Cb} {...TextBox233IoProps}/>
</Flex1>
</Flex1>
  </>);
}
