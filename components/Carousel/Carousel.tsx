import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';

import { CarouselItem } from 'entities/carousel';
import ArrowSwitchIcon from 'images/icons/arrow-head.svg';

import css from './Carousel.module.scss';

type Props = {
  items: CarouselItem[];
  defaultKey?: number;
};

const Carousel = ({ items, defaultKey = 0 }: Props) => {
  const [activeKey, setActiveKey] = useState<number>(defaultKey);

  const isFirstItemActive = useMemo(() => activeKey === 0, [items, activeKey]);

  const isLastItemActive = useMemo(() => activeKey === items.length - 1, [items, activeKey]);

  const switchImage = useCallback((value: number) => {
    setActiveKey((prevState) => prevState + value);
  }, []);

  const images = useMemo(
    () =>
      items.map((item, index) => {
        return (
          <li key={index} className={`${css.galleryItem} ${activeKey === index && css.active}`}>
            <div className={css.imageContainer}>
              <Image className={css.image} src={item.image} alt={item.title} />
            </div>
          </li>
        );
      }),
    [items, activeKey]
  );

  return (
    <div className={css.container}>
      <div className={css.leftContainer}>
        <h4 className={css.title}>{items[activeKey].title}</h4>
        <p className={css.description}>{items[activeKey].description}</p>
      </div>
      <div className={css.rightContainer}>
        <div className={css.switchPanel}>
          <p className={css.counter}>
            {activeKey + 1}/<span>{items.length}</span>
          </p>

          <div className={css.buttonsContainer}>
            <button onClick={() => switchImage(-1)} disabled={isFirstItemActive} className={css.button}>
              <ArrowSwitchIcon />
            </button>
            <button onClick={() => switchImage(1)} disabled={isLastItemActive} className={css.button}>
              <ArrowSwitchIcon />
            </button>
          </div>
        </div>
        <ul className={css.gallery}>{images}</ul>
      </div>
    </div>
  );
};

export default Carousel;
