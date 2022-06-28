import React from 'react';
import s from './DailyDetailsGrid.module.scss';
import DailyDetailsGridRow from './DailyDetailsGridIRow';

export type Row = {
  icon_url: any;
  name: string;
  value: string;
};

type Props = {
  // rows: Array<Row>;
  rows: Row[];
};

const DailyDetailsGrid = (props: Props) => {
  return (
    <div className={s.daily_details}>
      {props.rows.map((row: Row, index) => (
        <DailyDetailsGridRow key={index} row={row} />
      ))}
    </div>
  );
};

export default DailyDetailsGrid;
