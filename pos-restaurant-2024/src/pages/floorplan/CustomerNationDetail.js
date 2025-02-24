import React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { TextField } from "@mui/material"
import Grid2 from "@mui/material/Grid2"
import { useTranslation } from "react-i18next"

const min = 0
const max = 10

const CustomerNationDetail = (props) => {
  const { t } = useTranslation("global")

  const {
    thaiPeople,
    europePeople,
    americaPeople,
    asiaPeople,
    setThaiCount,
    setEuropeCount,
    setAmericaCount,
    setAsiaCount
  } = props
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {t("FloorPlanPage.customerTypeDetail")}
        </AccordionSummary>
        <AccordionDetails>
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <TextField
                id="outlined-number"
                label={t("FloorPlanPage.thaiPerson")}
                type="number"
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
                value={thaiPeople}
                onChange={(e) => {
                  var value = parseInt(e.target.value, 10)
                  if (value > max) value = max
                  if (value < min) value = min
                  setThaiCount(value)
                }}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                id="outlined-number"
                label={t("FloorPlanPage.europeanPerson")}
                type="number"
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
                value={europePeople}
                onChange={(e) => {
                  var value = parseInt(e.target.value, 10)
                  if (value > max) value = max
                  if (value < min) value = min
                  setEuropeCount(value)
                }}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                id="outlined-number"
                label={t("FloorPlanPage.americanPerson")}
                type="number"
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
                value={americaPeople}
                onChange={(e) => {
                  var value = parseInt(e.target.value, 10)
                  if (value > max) value = max
                  if (value < min) value = min
                  setAmericaCount(value)
                }}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                id="outlined-number"
                label={t("FloorPlanPage.asianPerson")}
                type="number"
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
                value={asiaPeople}
                onChange={(e) => {
                  var value = parseInt(e.target.value, 10)
                  if (value > max) value = max
                  if (value < min) value = min
                  setAsiaCount(value)
                }}
              />
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CustomerNationDetail
