import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, email, mobile, dob, jobType, action) {
  return { name, email, mobile, dob, jobType, action };
}
// const rows = [
// createData('Frozen yoghurt', 159, 6.0, 24, 4.0,34),
// createData('Ice cream sandwich', 237, 9.0, 37, 4.3,24),
// createData('Eclair', 262, 16.0, 24, 6.0,34),
// createData('Cupcake', 305, 3.7, 67, 4.3,44),
// createData('Gingerbread', 356, 16.0, 49, 3.9,54),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({updateFile}) {
  const classes = useStyles();
  const [Rows, setRows] = useState([]);

  useEffect(() => {
    fetch("https://registrationapp-backend.herokuapp.com/api/users", {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setRows(res);
      });
    // .catch(() => this.setState({ hasErrors: true }))
  });

  const DeleteUser = (e) => {
    const key = e.target.name;
    fetch("https://registrationapp-backend.herokuapp.com/api/users/" + key, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
  };

  const UpdateUser = (e) => {
    const user=Rows.find((row)=> {
     return row._id==e.target.name
    })
    updateFile(user);
    e.preventDefault();

  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Mobile</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
            <StyledTableCell align="right">Job Type</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Rows.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.mobile}</StyledTableCell>
              <StyledTableCell align="right">{row.dob}</StyledTableCell>
              <StyledTableCell align="right">{row.job}</StyledTableCell>
              <StyledTableCell align="right">
                <a>Pic</a>&nbsp;|&nbsp;
                <a name={row._id} href="" onClick={UpdateUser}>
                  Edit
                </a>
                &nbsp;|&nbsp;
                <a name={row._id} href="" onClick={DeleteUser}>
                  Delete
                </a>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
