import React from 'react';


import {Meta, Story} from "@storybook/react";
import TabsHeader ,{TabsHeaderProps} from "./TabsHeader";




export default {
    title:"TabsHeader",
    component:TabsHeader,
    argTypes:{
        tabs:{control:"array"},
        activeIndex:{control:"number"},
        onTabClick:{action:"clicked"}
        // active:{control:"boolean"}
    }
} as Meta


const Template:Story<TabsHeaderProps> = (args)=><TabsHeader {...args}/>


export const Base = Template.bind({})


Base.args= {
    tabs:[{title:"Profile1"},{title:"Profile2"},{title:"Profile3"}],
    activeIndex:0
}
