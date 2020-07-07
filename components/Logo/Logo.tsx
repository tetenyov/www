import React from "react";
import { useRouter } from "next/router";
import { onMainPage } from "../../shared/onMainPage";
import styles from "./Logo.module.css";

export const Logo: React.FC = () => {
  const { pathname } = useRouter();
  const Header = onMainPage(pathname) ? "h1" : "span";

  return (
    <span className={styles.logo}>
      <Header className={styles.label}>Саша Беспоясов</Header>

      <div className={styles.photo}>
        <picture>
          <source
            type="image/webp"
            draggable="false"
            srcSet="
              /img/common/my-photo.webp    1x,
              /img/common/my-photo@2x.webp 2x,
              /img/common/my-photo@3x.webp 3x
            "
          />

          <img
            alt="Это я."
            draggable="false"
            srcSet="
              /img/common/my-photo.png    1x,
              /img/common/my-photo@2x.png 2x,
              /img/common/my-photo@3x.png 3x
            "
            src="/img/common/my-photo.png"
          />
        </picture>
      </div>
    </span>
  );
};
