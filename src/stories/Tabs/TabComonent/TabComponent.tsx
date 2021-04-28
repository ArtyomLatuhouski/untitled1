import React, {FunctionComponent, useState} from 'react';


//local
import {TabsHeader} from "../TabsHeader";
import "./TabComponent.scss"

export interface TabComponentProps {
    tabs: any[]
}

let tabsArray:[{title:"Profile1"},{title:"Profile2"},{title:"Profile3"}]

type Props = TabComponentProps;

const TabComponent: FunctionComponent<Props> = ({tabs}) => {

    const [activeIndex,setActiveIndex] = useState(0)

    function handleTabClick(index:number) {
        setActiveIndex(index)
    }

    return (
        <>
            <div className="tab__container">
                <div className="tab-header__container">

                    <TabsHeader tabs={tabs} activeIndex={activeIndex} onTabClick={handleTabClick}/>
                </div>

                <div className="tabs-content__container">
                    {tabs[activeIndex].renderContent()}
                </div>

            </div>

        </>
    );
};

export default TabComponent;
