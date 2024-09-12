import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import { Menu } from '@mui/icons-material';
import AsideBar from './Assest';
import SideNav from './SideNav';


const DrawerComp = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    return (
        <>
            <Space>
                <Radio.Group value={placement} onChange={onChange}>
                    
                </Radio.Group>
                <Button  className=' border-transparent bg-none' onClick={showDrawer}>
                    <Menu/>
                </Button>
            </Space>
            <Drawer
                width={300}
                placement={placement}
                closable={true}
                onClose={onClose}
                open={open}
                key={placement}
                footer={true}
               
                
            >
                <div>
                   <SideNav/>
                </div>
            </Drawer>
        </>
    );
};
export default DrawerComp;