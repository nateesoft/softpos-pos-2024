import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function Header() {
  const { t, i18n } = useTranslation("global")

  return (
    <header>
      <div style={{paddingBottom: 10}}>
        {t("header.chooseLanguage")}
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("th")}>TH</button>
      </div>
      <div>
        <Link to="/">Login</Link> |<Link to="/floorplan"> Floor Plan</Link> |
        <Link to="/sale"> Main Sale</Link> |
        <Link to="/payment"> Payment</Link> |
        |<Link to="/sale-report"> Sale Report</Link>
      </div>
    </header>
  )
}
