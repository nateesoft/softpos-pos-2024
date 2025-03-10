import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabGeneral from './TabGeneral';
import TabPOS from './TabPOS';
import TabProductSet from './TabProductSet';
import TabSaleHistory from './TabSaleHistory';
import TabIngredient from './TabIngredient';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
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

const TabData = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ข้อมูลทั่ว ๆ ไป (Generate)" {...a11yProps(0)} />
          <Tab label="ข้อมูลสำหรับเครื่อง POS" {...a11yProps(1)} />
          <Tab label="รายละเอียดชุดสินค้า (Product Set)" {...a11yProps(2)} />
          <Tab label="ประวัติการซื้อ และการขาย" {...a11yProps(3)} />
          <Tab label="กำหนดส่วนประกอบ (Ingegrate)" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TabGeneral />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TabPOS />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TabProductSet />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TabSaleHistory />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <TabIngredient />
      </CustomTabPanel>
    </Box>
  );
}

export default TabData
