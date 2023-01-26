import React, { useCallback, useMemo, useState } from 'react';

import { CollapseItem } from 'entities/collapse';
import PlusIcon from 'images/icons/plus-icon.svg';
import MinusIcon from 'images/icons/minus-icon.svg';

import css from './Collapse.module.scss';

type Props = {
  items: CollapseItem[];
  defaultKeys?: number[];
};

const Collapse = ({ items, defaultKeys }: Props) => {
  const [activeKeys, setActiveKeys] = useState<boolean[]>(() => {
    const mask = new Array(items.length).fill(false);

    if (defaultKeys !== undefined) {
      defaultKeys.forEach((key) => (mask[key] = true));
    }

    return mask;
  });

  const switchVisibility = useCallback(
    (key: number) =>
      setActiveKeys((prevState) => {
        const newState = [...prevState];
        newState[key] = !prevState[key];

        return newState;
      }),
    []
  );

  const cards = useMemo(
    () =>
      items.map((item, index) => (
        <div key={index} className={`${css.card} ${activeKeys[index] && css.visible}`}>
          <button type="button" onClick={() => switchVisibility(index)} className={css.button}>
            {activeKeys[index] ? <PlusIcon /> : <MinusIcon />}
          </button>
          <h4 className={css.title}>{item.title}</h4>
          <div className={`${css.descriptionContainer}`}>
            <p className={css.description}>{item.description}</p>
          </div>
        </div>
      )),
    [items, activeKeys]
  );

  return <div className={css.container}>{cards}</div>;
};

export default React.memo(Collapse);
