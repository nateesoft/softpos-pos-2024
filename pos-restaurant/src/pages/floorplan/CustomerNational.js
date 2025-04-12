import React, { useState } from "react"
import {
  InputLabel,
  Input,
  InputAdornment,
  FormControl,
  Select,
  MenuItem
} from "@mui/material"
import Grid2 from "@mui/material/Grid2"
import { useTranslation } from "react-i18next"
import ManIcon from "@mui/icons-material/Man"
import WomanIcon from "@mui/icons-material/Woman"
import ElderlyIcon from "@mui/icons-material/Elderly"
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly"

import CountryListFile from './country-list.json'

const min = 0
const max = 10

const InputCustomer = ({ title, value, setValue, iconName }) => {
  const getPersonIcon = () => {
    if (iconName === "man") {
      return <ManIcon sx={{ color: "blue" }} />
    } else if (iconName === "woman") {
      return <WomanIcon sx={{ color: "blue" }} />
    } else if (iconName === "elder") {
      return <ElderlyIcon sx={{ color: "purple" }} />
    } else if (iconName === "kid") {
      return <ChildFriendlyIcon sx={{ color: "green" }} />
    } else {
      return <ManIcon />
    }
  }
  return (
    <>
      <InputLabel htmlFor="input-with-icon-adornment">{title}</InputLabel>
      <Input
        id="input-with-icon-adornment"
        type="number"
        value={value}
        startAdornment={
          <InputAdornment position="start">{getPersonIcon()}</InputAdornment>
        }
        onChange={(e) => {
          var value = parseInt(e.target.value, 10)
          if (value > max) value = max
          if (value < min) value = min
          setValue(value)
        }}
        onFocus={(evt) => {
          evt.target.select()
        }}
      />
    </>
  )
}

const CustomerNational = (props) => {
  const [continent, setContinent] = useState("Asia")

  const { t } = useTranslation("global")
  const {
    nationManCount,nationWomanCount,nationKidCount,nationOldCount,
    setNationManCount,setNationWomanCount,setNationKidCount,setNationOldCount,
    nationCountry,customerNote,billNo,
    setNationCountry,setCustomerNote,setBillNo
  } = props

  const handleChangeContinent = (e) => {
    setContinent(e.target.value)
  }


  return (
    <Grid2 container spacing={2}>
      <Grid2 container size={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">ทวีป</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={continent}
            label="ทวีป"
            onChange={handleChangeContinent}
          >
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="America">America</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
          </Select>
        </FormControl>
      </Grid2>
      <Grid2 container size={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">ประเทศ</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={nationCountry}
            label="ประเทศ"
            onChange={(e) => setNationCountry(e.target.value)}
          >
            {CountryListFile[continent].map(item => <MenuItem value={item.English}>{item.Thai}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid2>
      <Grid2 size={6}>
        <InputCustomer
          title={t("FloorPlanPage.manPerson")}
          value={nationManCount}
          setValue={setNationManCount}
          iconName="man"
        />
      </Grid2>
      <Grid2 size={6}>
        <InputCustomer
          title={t("FloorPlanPage.womanPerson")}
          value={nationWomanCount}
          setValue={setNationWomanCount}
          iconName="woman"
        />
      </Grid2>
      <Grid2 size={6}>
        <InputCustomer
          title={t("FloorPlanPage.oldPerson")}
          value={nationOldCount}
          setValue={setNationOldCount}
          iconName="elder"
        />
      </Grid2>
      <Grid2 size={6}>
        <InputCustomer
          title={t("FloorPlanPage.kidPerson")}
          value={nationKidCount}
          setValue={setNationKidCount}
          iconName="kid"
        />
      </Grid2>
    </Grid2>
  )
}

export default CustomerNational
