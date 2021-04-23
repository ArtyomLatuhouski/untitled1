import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useHistory} from 'react-router-dom';


function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const data = {
    "Item One": '/',
    "Item Two": '/itemTwo',
    "Item Three": '/itemThree',
}

export default function SimpleTabs() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => setValue(newValue)

    let history = useHistory();

    function navSet(e: React.MouseEvent<HTMLSpanElement>) {
        // @ts-ignore
        history.push(data[e.target.innerHTML]);
    }

    return (
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">

            <Tab label="Item One" data-path='/' onClick={navSet} {...a11yProps(0)} />
            <Tab label="Item Two" data-path='/itemTwo' onClick={navSet}  {...a11yProps(1)} />
            <Tab label="Item Three" data-path='/itemThree' onClick={navSet} {...a11yProps(2)} />

        </Tabs>
    );
}
