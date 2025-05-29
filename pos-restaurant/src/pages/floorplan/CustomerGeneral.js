import React from "react"
import {
  InputLabel,
  Input,
  InputAdornment
} from "@mui/material"
import Grid2 from "@mui/material/Grid2"
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ElderlyIcon from '@mui/icons-material/Elderly';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

import { useTranslation } from "../../contexts/Translation";

const min = 0
const max = 10

const InputCustomer = ({ title, value, setValue, iconName }) => {
  const getPersonIcon = () => {
    if(iconName==="man"){
      return <ManIcon sx={{color: "blue"}} />
    } else if(iconName==="woman"){
      return <WomanIcon sx={{color: "blue"}} />
    } else if(iconName==="elder"){
      return <ElderlyIcon sx={{color: "purple"}} />
    } else if(iconName==="kid"){
      return <ChildFriendlyIcon sx={{color: "green"}} />
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
          <InputAdornment position="start">
            {getPersonIcon()}
          </InputAdornment>
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

const CustomerGeneral = (props) => {
  const { t } = useTranslation()
  const {
    thaiManCount,thaiWomanCount,thaiKidCount,thaiOldCount,
    setThaiManCount,setThaiWomanCount,setThaiKidCount,setThaiOldCount
  } = props
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={6}>
        <InputCustomer
          title={t("FloorPlanPage.manPerson")}
          value={thaiManCount}
          setValue={setThaiManCount}
          iconName="man"
        />
      </Grid2>
      <Grid2 size={6}>
        <InputCustomer
          title={t("FloorPlanPage.womanPerson")}
          value={thaiWomanCount}
          setValue={setThaiWomanCount}
          iconName="woman"
        />
      </Grid2>
      <Grid2 size={6}>
        <InputCustomer
          title={t("FloorPlanPage.oldPerson")}
          value={thaiOldCount}
          setValue={setThaiOldCount}
          iconName="elder"
        />
      </Grid2>
      <Grid2 size={6}>
        <InputCustomer
          title={t("FloorPlanPage.kidPerson")}
          value={thaiKidCount}
          setValue={setThaiKidCount}
          iconName="kid"
        />
      </Grid2>
    </Grid2>
  )
}

export default CustomerGeneral
