import { useState } from 'react'
import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AcquisitionSection from './AcquisitionSection';
import CustomerAcquisitionSection from './CustomerAcquisition';
import EngagementSection from './EngagementSection';

const AdminTab = () => {
 const [value, setValue] = useState('1');

 const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
 };
 return (
  <Box sx={{ width: '100%', typography: 'body1', marginTop: '20px' }}>
   <TabContext value={value}>
    <Box sx={{ borderColor: 'divider', backgroundColor: 'white' }}>
    <div className="p-3 flex flex-row justify-between">
        <span className=' font-bold text-defaulttextcolor'>Customer Loyalty Program</span>
        <span className=' font-bold text-defaulttextcolor'>Status : Active</span>
      </div>
   
     {/* <TabList onChange={handleChange} aria-label="Tab View">
      <Tab label="Acquisition" value="1" />
      <Tab label="Engagement" value="2" />
     </TabList> */}
    </Box>
    <div className='p-2 bg-white'>
     <TabPanel value="1" className='!p-0'>
      <CustomerAcquisitionSection />
     </TabPanel>
     <TabPanel value="2" className='!p-4'>
      <EngagementSection />
     </TabPanel>
    </div>
   </TabContext>
  </Box>
 )
}

export default AdminTab