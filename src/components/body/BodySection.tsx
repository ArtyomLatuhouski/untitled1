import React, {FunctionComponent} from 'react';
import {Switch, Route} from "react-router";
import ItemOne from "./BodyItems/ItemOne";
import ItemTwo from "./BodyItems/ItemTwo";
import ItemThree from "./BodyItems/ItemThree";


interface OwnProps {
}

type Props = OwnProps;

const BodySection: FunctionComponent<Props> = (props) => {

    return (
        <>
            <Switch>
                <Route exact path='/' render={() => <ItemOne/>}/>
                <Route path='/itemTwo' render={() => <ItemTwo/>}/>
                <Route path='/itemThree' render={() => <ItemThree/>}/>
            </Switch>
        </>
    );
};

export default BodySection;
