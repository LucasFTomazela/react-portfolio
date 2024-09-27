import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../utils";
import styles from "./Language.module.css";

const languageOptions = [
  {
    name: "English",
    value: "en",
    flag: getImageUrl("translations/en.png"),
  },
  {
    name: "Português",
    value: "ptBR",
    flag: getImageUrl("translations/ptBR.png"),
  },
];

export const Language = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className={`${styles.languageSwitcher} center`}>
      {languageOptions.map((languageOption) => (
        <button
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}
          key={languageOption.value}
        >
          <img src={languageOption.flag} alt={languageOption.name} />
        </button>
      ))}
      <p>{t("navBar.language")}</p>
    </div>
  );
};
