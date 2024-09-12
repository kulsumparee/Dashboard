import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack spacing={2}>
     
      <div className=' min-w-max flex justify-center'>
        <Pagination count={10} color='warning' size="large" />
       </div>
             
     
    </Stack>
  );
}
