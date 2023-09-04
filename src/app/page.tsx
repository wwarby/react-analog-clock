"use client";

import styles from './page.module.scss';
import cx from 'classnames';
import { useEffect, useState } from 'react';

export default function Home() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();

  const secondDegrees = (second * 6) - 180;
  const minuteDegrees = (minute * 6) + (secondDegrees / 60) - 180;
  const hourDegrees = ((hour % 12) * 30) + (minuteDegrees / 60) - 180;

  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <div className={styles.indicators}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.hands}>
          <div className={cx(styles.hour, styles.hand)} style={{ transform: `rotate(${hourDegrees}deg)` }}></div>
          <div className={cx(styles.minute, styles.hand)} style={{ transform: `rotate(${minuteDegrees}deg)` }}></div>
          <div className={cx(styles.second, styles.hand)} style={{ transform: `rotate(${secondDegrees}deg)` }}></div>
          <div className={styles.pin}></div>
        </div>
      </div>
    </div>
  );
}
