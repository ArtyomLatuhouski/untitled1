import React from 'react';


import {Meta, Story} from "@storybook/react";
import TabComponent ,{TabComponentProps} from "./TabComponent";




export default {
    title:"TabComponent",
    component:TabComponent,
    argTypes:{
        tabs:{control:"array"},
    }
} as Meta


const Template:Story<TabComponentProps> = (args)=><TabComponent {...args}/>


export const Base = Template.bind({})


Base.args= {
    tabs:[{title:"Profile1",renderContent:()=><h2>Profile1</h2>},
        {title:"Profile2",renderContent:()=><h2>Profile2</h2>},
        {title:"Profile3",renderContent:()=><h2>Profile3</h2>}]
}
