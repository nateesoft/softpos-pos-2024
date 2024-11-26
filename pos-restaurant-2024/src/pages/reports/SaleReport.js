import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Grid2, Paper, Stack, Typography } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import { styled } from '@mui/material/styles';
import Man from '@mui/icons-material/Man'
import Woman from '@mui/icons-material/Woman'
import ChildCare from '@mui/icons-material/ChildCare'
import MenuBook from '@mui/icons-material/MenuBook'
import ScheduleIcon from '@mui/icons-material/Schedule';
import WineBarIcon from '@mui/icons-material/WineBar';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ArchiveIcon from '@mui/icons-material/Archive';
import DiningIcon from '@mui/icons-material/Dining';

export const desktopOS = [
  {
    label: 'ส้มตำปลาร้า',
    value: 72.72,
  },
  {
    label: 'ข้าวผัดอเมริกัน',
    value: 16.38,
  },
  {
    label: 'ผัดไทใส่ไข่',
    value: 3.83,
  },
  {
    label: 'กะเพราหมูกรอบ',
    value: 2.42,
  },
  {
    label: 'ข้าวไข่เจียว',
    value: 4.65,
  },
];

export const valueFormatter = (item) => `${item.value}%`;

const size = {
  width: 400,
  height: 200,
};

const data = {
  data: desktopOS,
  valueFormatter,
};

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 120,
  textAlign: 'center',
  padding: "10px"
}));

const SaleReportOverview = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: "#123456", color: "white" }}>
      <Box padding={2}>
        <Typography variant='h4' sx={{textShadow: "1px 1px orange"}}>* รายงานการขาย (Sale Reports) *</Typography>
      </Box>
      <Paper sx={{ padding: "10px", margin: "10px" }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <DemoPaper variant="elevation" sx={{backgroundColor: "chocolate", color: "white", borderRadius: "10px", border: "1px solid"}}>
            <Box display="flex" flexDirection="column">
              <Typography sx={{ fontWeight: "bold" }}><u>จำนวนลูกค้าเข้าร้าน 45 คน</u></Typography>
              <Grid2 display="flex" justifyContent="space-between">
                <Man />
                <Typography>ชาย 15 คน</Typography>
              </Grid2>
              <Grid2 display="flex" justifyContent="space-between">
                <Woman />
                <Typography>หญิง 25 คน</Typography>
              </Grid2>
              <Grid2 display="flex" justifyContent="space-between">
                <ChildCare />
                <Typography>เด็ก 5 คน</Typography>
              </Grid2>
            </Box>
          </DemoPaper>
          <DemoPaper variant="elevation" sx={{backgroundColor: "green", color: "white", borderRadius: "10px", border: "1px solid"}}>
            <Box display="flex" flexDirection="column">
              <Typography sx={{ fontWeight: "bold" }}><u>รายการสินค้าขายดีประจำวัน</u></Typography>
              <Grid2 display="flex" justifyContent="space-between">
                <MenuBook />
                <Typography>ส้มตำปลาร้า</Typography>
              </Grid2>
              <Grid2 display="flex" justifyContent="space-between">
                <MenuBook />
                <Typography>เข้าผัดอเมริกัน</Typography>
              </Grid2>
              <Grid2 display="flex" justifyContent="space-between">
                <MenuBook />
                <Typography>ผัดไทใส่ไข่</Typography>
              </Grid2>
            </Box>
          </DemoPaper>
          <DemoPaper variant="elevation" sx={{backgroundColor: "purple", color: "white", borderRadius: "10px", border: "1px solid"}}>
            <Box display="flex" flexDirection="column">
              <Typography sx={{ fontWeight: "bold" }}><u>ช่วงเวลาขายดี</u></Typography>
              <Grid2 display="flex" justifyContent="space-between">
                <ScheduleIcon />
                <Typography>เช้า 07.30 - 08.15</Typography>
              </Grid2>
              <Grid2 display="flex" justifyContent="space-between">
                <ScheduleIcon />
                <Typography>สาย 10.30 - 11.45</Typography>
              </Grid2>
              <Grid2 display="flex" justifyContent="space-between">
                <ScheduleIcon />
                <Typography>บ่าย 14.20 - 16.00</Typography>
              </Grid2>
            </Box>
          </DemoPaper>
          <DemoPaper variant="elevation" sx={{backgroundColor: "blue", color: "white", borderRadius: "10px", border: "1px solid"}}>
            <Box display="flex" flexDirection="column">
              <Typography sx={{ fontWeight: "bold" }}><u>ยอดขายประจำวัน</u></Typography>
              <Grid2 display="flex" justifyContent="space-between">
                <DiningIcon />
                <Typography>DineIn - 7,650.00</Typography>
              </Grid2>
              <Grid2 display="flex" justifyContent="space-between">
                <ArchiveIcon />
                <Typography>Take Away - 1,400.00</Typography>
              </Grid2>
              <Grid2 display="flex" justifyContent="space-between">
                <DeliveryDiningIcon />
                <Typography>Delivery - 500.00</Typography>
              </Grid2>
            </Box>
          </DemoPaper>
          <DemoPaper variant="elevation" sx={{backgroundColor: "yellow", color: "black", borderRadius: "10px", border: "1px solid"}}>
            <Box display="flex" flexDirection="column">
              <Typography sx={{ fontWeight: "bold" }}><u>ยอดขายตามกลุ่มสินค้า</u></Typography>
              <Grid2 display="flex" justifyContent="space-between">
                <DinnerDiningIcon />
                <Typography>Food (5,500.00)</Typography>
              </Grid2>
              <Grid2 display="flex" justifyContent="space-between">
                <WineBarIcon />
                <Typography>Drink (1,250.00)</Typography>
              </Grid2>
              <Grid2 display="flex" justifyContent="space-between">
                <LunchDiningIcon />
                <Typography>Other (800.00)</Typography>
              </Grid2>
            </Box>
          </DemoPaper>
        </Stack>
      </Paper>
      <Paper sx={{ padding: "10px", margin: "10px" }}>
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
        )
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 80, label: 'ส้มตำปลาร้า' },
                    { id: 1, value: 45, label: 'ข้าวผัดอเมริกัน' },
                    { id: 2, value: 10, label: 'ผัดไทใส่ไข่' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </Grid2>
          <Grid2 size={6}>
            <PieChart
              series={[
                {
                  arcLabel: (item) => `${item.value}%`,
                  arcLabelMinAngle: 35,
                  arcLabelRadius: '60%',
                  ...data,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fontWeight: 'bold',
                },
              }}
              {...size}
            />
          </Grid2>
        </Grid2>
      </Paper>

    </Box>
  );
}

export default SaleReportOverview
