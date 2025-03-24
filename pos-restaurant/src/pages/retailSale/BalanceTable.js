import React from "react"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Checkbox, Box } from "@mui/material"
import TableSortLabel from '@mui/material/TableSortLabel';
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "chocolate",
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}))

function createData(id, type, name, calories, fat, carbs, protein) {
  return { id, type, name, calories, fat, carbs, protein }
}

const rows = [
  createData(1, "E", "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(2, "E", "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(3, "E", "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "E", "Cupcake", 305, 3.7, 67, 4.3),
  createData(5, "E", "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "E", "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(7, "E", "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "E", "Eclair", 262, 16.0, 24, 6.0),
  createData(9, "E", "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(10, "E", "Eclair", 262, 16.0, 24, 6.0),
  createData(11, "E", "Cupcake", 305, 3.7, 67, 4.3),
  createData(12, "E", "Gingerbread", 356, 16.0, 49, 3.9),
  createData(13, "E", "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(14, "E", "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(15, "E", "Eclair", 262, 16.0, 24, 6.0)
]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: 'type',
    numeric: false,
    disablePadding: true,
    label: 'E/T/D',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Product Name',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'qty',
    numeric: true,
    disablePadding: false,
    label: 'Qty',
  },
  {
    id: 'discount',
    numeric: true,
    disablePadding: false,
    label: 'Discount',
  },
  {
    id: 'netTotal',
    numeric: true,
    disablePadding: false,
    label: 'Net Total',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const BalanceTable = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  return (
    <TableContainer component={Paper} sx={{overflow: "auto", height: 530}}>
      <Table stickyHeader aria-label="sticky table" sx={{height: "100%"}} >
        <EnhancedTableHead
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
        />
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                inputProps={{
                  'aria-label': 'select all desserts',
                }}
              />
            </TableCell>
              <TableCell align="rigcenterht">{row.type}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BalanceTable
