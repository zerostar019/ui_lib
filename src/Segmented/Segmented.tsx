import { useEffect, useState } from "react";
import styles from "./segmented.module.scss";
import { SegmentedInterface, SegmentedProperties } from "./types";
import classNames from "classnames";

const Segmented = (
    {
        list,
        properties,
        defaultValue = 0
    }:
        {
            list: Array<SegmentedInterface>,
            properties?: SegmentedProperties,
            defaultValue?: number
        }) => {
    const [checked, setChecked] = useState<number>(defaultValue);

    const changeCheckedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.id !== String(checked)) {
            const lastChecked = checked;
            const currentChecked = Number(event.currentTarget.id.split('-')[1]);
            const offset = lastChecked - currentChecked;
            const segmented = document.querySelector<HTMLDivElement>(`.${styles['segmented']}`);
            segmented?.style.setProperty("--offset-segmented", `${offset * 100}%`);
            setChecked(currentChecked);
        }
    }

    useEffect(() => {
        const segmented = document.querySelector<HTMLDivElement>(`.${styles['segmented']}`);
        if (segmented) {
            if (properties) {
                Object.entries(properties).forEach((property) => {
                    segmented?.style.setProperty(`--${property[0]}`, property[1]);
                })
            }
        }
    }, [list.length, properties])

    return (
        <div
            className={styles['segmented']}
        >
            {list.map((segment) => (
                <label
                    key={segment.id}
                    id={`label-${segment.id}`}
                    className={classNames(styles['labels'], {
                        [styles['checked-label']]: checked === segment.id,
                        [styles['checked-label-before']]: segment.id === checked - 1
                    })}
                    htmlFor={`segment-${segment.id}`}
                >
                    <input
                        type="radio"
                        id={`segment-${segment.id}`}
                        name="radioBtn"
                        className={styles['input']}
                        checked={checked === segment.id}
                        onChange={changeCheckedValue}
                    />
                    <span
                        className={styles['segment-text']}
                    >
                        {segment.label}
                    </span>
                    <div
                        className={classNames(styles['background'], {
                            [styles['checked']]: checked === segment.id
                        })}
                    >
                    </div>
                </label>
            ))
            }
        </div >

    )
}

export default Segmented;