import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SlideBarBox from '../../ui/farmer/SlideBarBox';
import DashBoardItem from './DashBoardItem';
import DonationPendingTable from './DonationPendingTable';
import SoldProductsTable from './SoldProductsTable';
import PurchasePendingTable from './PurchasePendingTable';
import PendingRequestTable from './PendingRequestTable';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function DashboardTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={<SlideBarBox number="05" name="Pending Request" />} {...a11yProps(0)} />
                    <Tab label={<SlideBarBox number="05" name="Pending Purchase" />} {...a11yProps(1)} />
                    <Tab label={<SlideBarBox number="05" name="Pending Donations" />} {...a11yProps(2)} />
                    <Tab label={<SlideBarBox number="05" name="Sales" />} {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <DashBoardItem table={<PendingRequestTable />} tableName="Pending Request" />
            </TabPanel>             
            <TabPanel value={value} index={1}>
                <DashBoardItem table={<PurchasePendingTable />} tableName="Pending Purchase" />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DashBoardItem table={<DonationPendingTable />} tableName="Pending Donations" />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <DashBoardItem table={<SoldProductsTable />} tableName="Sold Products" />
            </TabPanel>
        </Box>
    );
}

