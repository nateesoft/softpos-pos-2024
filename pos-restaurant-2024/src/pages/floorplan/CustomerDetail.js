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

const CustomerDetail = (props) => {
  const { t } = useTranslation("global")
  const { man, woman, kid, old, setMan, setWoman, setKid, setOld } = props
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {t("FloorPlanPage.customerMoreDetail")}
        </AccordionSummary>
        <AccordionDetails>
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <TextField
                id="outlined-number"
                label={t("FloorPlanPage.manPerson")}
                type="number"
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
                value={man}
                onChange={(e) => {
                  var value = parseInt(e.target.value, 10)
                  if (value > max) value = max
                  if (value < min) value = min
                  setMan(value)
                }}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                id="outlined-number"
                label={t("FloorPlanPage.womanPerson")}
                type="number"
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
                value={woman}
                onChange={(e) => {
                  var value = parseInt(e.target.value, 10)
                  if (value > max) value = max
                  if (value < min) value = min
                  setWoman(value)
                }}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                id="outlined-number"
                label={t("FloorPlanPage.kidPerson")}
                type="number"
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
                value={kid}
                onChange={(e) => {
                  var value = parseInt(e.target.value, 10)
                  if (value > max) value = max
                  if (value < min) value = min
                  setKid(value)
                }}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                id="outlined-number"
                label={t("FloorPlanPage.oldPerson")}
                type="number"
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
                value={old}
                onChange={(e) => {
                  var value = parseInt(e.target.value, 10)
                  if (value > max) value = max
                  if (value < min) value = min
                  setOld(value)
                }}
              />
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CustomerDetail
