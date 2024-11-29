import React from 'react';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import DownArrowIcon from '@mui/icons-material/ArrowDownward'
import UpArrowIcon from '@mui/icons-material/ArrowUpward'

function not(a, b) {
  return a.filter((value) => !b.includes(value));
}

function intersection(a, b) {
  return a.filter((value) => b.includes(value));
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function SplitBillPayment({onClose}) {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const onSubmit = () => {
    onClose()
  }

  const customList = (mainTableNo, subTableNo, items) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        title={mainTableNo}
        subheader={subTableNo}
      />
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={
              numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={"เลือก"}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItemButton
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value + 1}`} />
              <ListItemText id={labelId} primary={`รหัส 000${value + 1}`} />
              <ListItemText id={labelId} primary={`รายการอาหาร ${value + 1}`} />
              <ListItemText id={labelId} primary="จำนวน 1" />
              <ListItemText id={labelId} primary="ราคา 100" />
              <ListItemText id={labelId} primary="รวมราคา 100" />
            </ListItemButton>
          );
        })}
      </List>
    </Card>
  );

  return (
    <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid size={12}>{customList('Table A', '(รายการอาหารโต๊ะหลัก)', left)}</Grid>
      <Grid size={12} sx={{ backgroundColor: "snow" }}>
        <Grid container spacing={2} padding={2}>
          <Button
            variant="contained"
            size="large"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            endIcon={<DownArrowIcon />} color='error'
          >
            แยกชำระ
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            endIcon={<UpArrowIcon />}
          >
            ส่งคืนโต๊ะหลัก
          </Button>
        </Grid>
      </Grid>
      <Grid size={12}>{customList('Table A-1', '(รายการอาหารของโต๊ะที่ต้องการแยกชำระเงิน)', right)}</Grid>
      <Grid container spacing={2} padding={2}>
        <Grid size={6}>
          <Button variant='contained' color='error' onClick={onClose}>Cancel</Button>
        </Grid>
        <Grid size={6}>
          <Button variant='contained' onClick={onSubmit}>Confirm</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
