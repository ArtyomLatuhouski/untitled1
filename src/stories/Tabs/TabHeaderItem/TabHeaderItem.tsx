// outer
import React, {FunctionComponent} from 'react';


// local
import "./TabHeaderItem.scss"

export interface TabHeaderItemProps {
    title: string,
    active: boolean,
    onClick: () => void
}

type Props = TabHeaderItemProps;

const TabHeaderItem: FunctionComponent<Props> = ({title, active, onClick}) => {


    function handleClick() {
        onClick && onClick()
    }


    return (
        <>
            <div className="tab-header-item__container" onClick={handleClick}>

                <div className={`tab-header-item__left-corner ${active ? "tab-header-item__left-corner_active" : ""}`}/>

                <div
                    className={`tab-header-item__content-container ${active ? "tab-header-item__content-container_active" : ""}`}>
                    <span className="tab-header-item__title"> {title} </span>
                </div>

                <div
                    className={`tab-header-item__right-corner ${active ? "tab-header-item__right-corner_active" : ""}`}/>

            </div>
        </>
    );
};

export default TabHeaderItem;
