import React from 'react';
import { Row } from './DailyDetailsGrid';
import s from './DailyDetailsGrid.module.scss';

type Props = {
  row: Row;
};

const DailyDetailsGridRow = ({ row }: Props) => {
  const { icon_url, name, value } = row;

  return (
    <>
      <div className={s.icon}>
        <img src={icon_url} alt="icon" />
      </div>
      <div className={s.name}>{name}</div>
      <div className={s.value}>{value}</div>
    </>
  );
};

export default DailyDetailsGridRow;