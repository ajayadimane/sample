import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import employeeStyles from './EmployeeStyles';



function Logs  ()   {
  const [logs, setLogs] = useState([]);
  


  
  useEffect(() => {
    axios.get("https://localhost:5001/api/Image/GetLogs").then((response) => {
    setLogs((data) => {
        return response.data;
      });
    });
  }, []);

  return (
    <>

<Grid container spacing={3} >
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
        {logs.map(log => (
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
            
                image={`data:image/png;base64,${log.imagePath}`}
                title={`Image of ${log.employeeName}`}
              />
              
            </Grid>
          </React.Fragment>
        ))}
      </Grid>

    </>
  );
};

export default Logs;
