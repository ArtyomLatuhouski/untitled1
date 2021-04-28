// outer
import React, {FunctionComponent} from 'react';


// local
import TabHeaderItem from "../TabHeaderItem/TabHeaderItem"
import "./TabsHeader.scss"

interface Tab{
    title:string,
}

export interface TabsHeaderProps {
    tabs: Tab[],
    activeIndex:number,
    onTabClick:(index:number)=>void
}

type Props = TabsHeaderProps;

const TabsHeader: FunctionComponent<Props> = ({tabs,activeIndex,onTabClick}) => {

    function handleClick(index:number) {
        onTabClick(index)
    }

    return (
        <>
            <div className="tabs-header__container">
                {tabs.map((tab,index)=>{
                    return (
                        <div className="tabs-header__header-item-container" key={index}>
                            <TabHeaderItem title={tab.title} active={index === activeIndex} onClick={()=>handleClick(index)}/>
                        </div>
                    )
                })}

            </div>
        </>
    );

};

export default TabsHeader;
