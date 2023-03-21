// employeeStyles.js
const employeeStyles = (theme) => ({
    root: {
      backgroundColor: '#F2F2F2',
      padding: theme.spacing(4),
    },
    table: {
      marginTop: theme.spacing(2),
      backgroundColor: '#f5f5f5',
    },
    title: {
      color: '#3f51b5', // Set text color
    },
    data: {
      color: '#333', // Set text color
    },
    pagination: {
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
  
    },
    cardMedia: {
      height: 100,
      width: 'auto',
      objectFit: 'contain',
    },
    heading: {
      color: '#f5f5f5',
      marginBottom: theme.spacing(2),
    },
  });
  
  export default employeeStyles;
  