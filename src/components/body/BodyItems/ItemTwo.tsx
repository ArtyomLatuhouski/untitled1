import React, { FunctionComponent } from 'react';
import {TabComponent} from "../../../stories/Tabs/TabComonent";

interface OwnProps {}

type Props = OwnProps;

const  tabs =[{title:"Profile1",renderContent:()=><h2>Profile1</h2>},
    {title:"Profile2",renderContent:()=><h2>Profile2</h2>},
    {title:"Profile3",renderContent:()=><h2>Profile3</h2>}]

const ItemTwo: FunctionComponent<Props> = (props) => {



  return (
      <>
      <TabComponent tabs={tabs}/>
      </>
  );
};

export default ItemTwo;
