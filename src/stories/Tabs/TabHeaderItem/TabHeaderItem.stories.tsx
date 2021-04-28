import React from 'react';

import TabHeaderItem, {TabHeaderItemProps} from "./TabHeaderItem";
import {Meta, Story} from "@storybook/react";



export default {
    title:"TabHeaderItem",
    component:TabHeaderItem,
    argTypes:{
        // title: {control : "title"},
        active:{control:"boolean"}
    }
} as Meta


const Template:Story<TabHeaderItemProps> = (args)=><TabHeaderItem {...args}/>


export const Base = Template.bind({})


Base.args= {
    title:'Profile',
    active:false
}
