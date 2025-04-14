import { useState } from "react";
import styles from "./Accordion.module.css";
import ARROW_ICON from "../../assets/arrow.svg";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [activeItemIndex, setActiveItem] = useState<number>(0);

  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li
            key={item.title}
            onClick={() => {
              setActiveItem(index);
            }}
          >
            <div className={styles.item}>
              <p>{item.title}</p>
              <img
                className={activeItemIndex === index ? styles.expanded : ""}
                src={ARROW_ICON}
                alt="Arrow"
              />
            </div>
            {activeItemIndex === index && <p>{item.content}</p>}
          </li>
        );
      })}
    </ul>
  );
}
