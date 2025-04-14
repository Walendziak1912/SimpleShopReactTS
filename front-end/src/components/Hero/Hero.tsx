import style from "./Hero.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CenteredContent>
        <div className={style.contentWrapper}>
          <h2>Letnie promocje do -70%!</h2>
          <p>Tylko najlepsze okazje!</p>
          <FullWidthButton>Sprawdź produkty</FullWidthButton>
        </div>
      </CenteredContent>
    </div>
  );
}
