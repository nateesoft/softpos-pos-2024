import { Link } from "react-router-dom"

import { useTranslation } from "../contexts/Translation"

const Header = () => {
  const { t, setLang } = useTranslation()

  return (
    <header>
      <div style={{ paddingBottom: 10 }}>
        {t("header.chooseLanguage")}
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("th")}>TH</button>
      </div>
      <div>
        <Link to="/">Login</Link> |<Link to="/floorplan"> Floor Plan</Link> |
        <Link to="/sale"> Main Sale</Link> |<Link to="/payment"> Payment</Link>{" "}
        | |<Link to="/sale-report"> Sale Report</Link>
      </div>
    </header>
  )
}

export default Header
