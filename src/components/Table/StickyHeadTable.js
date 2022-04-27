import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"

const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "fclass", label: "Flight\u00a0Class", minWidth: 50 },
  {
    id: "seat",
    label: "Seat\u00a0Number",
    minWidth: 50,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "user_id",
    label: "User\u00a0ID",
    minWidth: 50,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "current",
    label: "Current",
    minWidth: 50,
  },
  {
    id: "destination",
    label: "Destination",
    minWidth: 50,
  },
  {
    id: "date",
    label: "Boarding\u00a0Date",
    minWidth: 50,
  },
]

function createData(id, fclass, seat, user_id, current, destination, date) {
  return { id, fclass, seat, user_id, current, destination, date }
}

const rows = [
  createData(
    1,
    "First-class",
    38,
    36,
    "Ko Samui",
    "Chiangmai",
    "4/30/2022 1:30:00"
  ),
  createData(
    2,
    "First-class",
    24,
    16,
    "Hat Yai",
    "Chiangmai",
    "4/29/2022 7:00:00"
  ),
  createData(3, "Economy", 36, 46, "Phuket", "Bangkok", "5/3/2022 7:00:00"),
]

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
