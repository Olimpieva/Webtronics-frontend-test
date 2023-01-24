import React, { ReactNode, useCallback, useMemo, useState } from 'react';

import PlusIcon from 'images/plus-icon.svg';
import MinusIcon from 'images/minus-icon.svg';

import css from './Collapse.module.scss';

type Da = {
  title: string;
  description: string;
};

type Props = {
  items: Da[];
  default?: number;
};

const Collapse = ({ items }: Props) => {
  console.log('FEEDBACK PAGE');

  const [activeKeys, setActiveKeys] = useState<boolean[]>(new Array(items.length).fill(false));

  const switchVisibility = useCallback((key: number) => {
    console.log('ya utu');
    setActiveKeys((prevState) => {
      const newState = [...prevState];
      newState[key] = !prevState[key];

      return newState;
    });
  }, []);

  console.log({ activeKeys });

  const cards = useMemo(
    () =>
      items.map((item, index) => (
        <div key={index} className={`${css.card} ${activeKeys[index] && css.visible}`}>
          <button type="button" onClick={() => switchVisibility(index)} className={css.button}>
            {activeKeys[index] ? <MinusIcon /> : <PlusIcon />}
          </button>
          <h4 className={css.title}>{item.title}</h4>
          <div className={`${css.descriptionContainer}`}>
            <p className={css.description}>{item.description}</p>
          </div>
        </div>
      )),
    [items, activeKeys]
  );

  return (
    <div className={css.container}>
      <div>{cards}</div>
    </div>
  );
};

export default Collapse;
