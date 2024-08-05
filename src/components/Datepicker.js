import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


export default function Datepicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}  >
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Choose date"  defaultValue={dayjs(new Date())} onChange={(value)=>{props.fn(value);
        }} format='YYYY-MM-DD' sx={{width:100,height:100,ml:200}} variant="outlined" size="small" />
      </DemoContainer>
    </LocalizationProvider>
  );
}
