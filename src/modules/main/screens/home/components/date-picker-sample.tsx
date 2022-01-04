import {useState} from 'react';
import {DatePicker} from '@core/components/date-picker';
import {Card} from '@core/components/card';

export const DatePickerSample = (): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date('2022/01/01'));
  const [endDate, setEndDate] = useState(new Date('2022/02/01'));
  return (
    <Card title='DatePicker sample' className='mt-2'>
      <div className='form-control'>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date as Date)} className='m-1' />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          className='m-1'
          variant='primary'
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          className='m-1'
          variant='secondary'
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          className='m-1'
          variant='accent'
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          className='m-1'
          variant='success'
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          className='m-1'
          variant='warning'
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          className='m-1'
          variant='error'
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          className='m-1'
          variant='info'
        />
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date as Date)} className='m-1' disabled />
        <div className=''>Custom format</div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          className='m-1'
          disabled
          dateFormat='yyyy/MM/dd'
        />
        <div className=''>Date range</div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className='m-1'
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date as Date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className='m-1'
        />
      </div>
      <div className=''>Time input</div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
        timeInputLabel='Time:'
        dateFormat='MM/dd/yyyy h:mm aa'
        showTimeInput
        className='m-1'
      />
    </Card>
  );
};
