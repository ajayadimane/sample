import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@mui/material/Pagination';
import employeeStyles from './EmployeeStyles';

const useStyles = makeStyles((theme) => ({
    ...employeeStyles(theme),
    table: {
      marginTop: theme.spacing(2),
      
    },
  }));

function Employee() {
  const [employeeData, setEmployeeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);
  const classes = useStyles();

  useEffect(() => {
    axios.get("https://localhost:5001/api/Image/GetLogs").then((response) => {
        setEmployeeData((data) => {
        return response.data;
      });
    });
  }, []);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employeeData.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const pageNumbers = Math.ceil(employeeData.length / employeesPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>

<Grid container spacing={3} className={classes.table}>
        <Grid item xs={2}>
          <Typography variant="h6">ID</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Employee ID</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Employee Name</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Log Time</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Camera ID</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Image</Typography>
        </Grid>
        {currentEmployees.map(log => (
          <React.Fragment key={log.id}>
            <Grid item xs={2}>
              <Typography>{log.id}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{log.employeeId}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{log.employeeName}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{log.logTime}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{log.camId}</Typography>
            </Grid>
            <Grid item xs={2}>
              <CardMedia
                className={classes.cardMedia}
                image={`data:image/png;base64,${log.imagePath}`}
                title={`Image of ${log.employeeName}`}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <div className={classes.pagination}>
        <Pagination count={pageNumbers} page={currentPage} onChange={handleChange} />
      </div>

    </>
    
  );
}

export default Employee;
