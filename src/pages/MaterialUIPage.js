import React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Rating, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  TablePagination,
  CircularProgress,
  Button,
  Card,
  CardContent,
  Avatar,
  TextField
} from '@mui/material';

const theme = createTheme();

function MaterialUIPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rating, setRating] = React.useState(2);
  const [customRating, setCustomRating] = React.useState(3);
  const [progress, setProgress] = React.useState(0);
  const [profession, setProfession] = React.useState('');

  const rows = [
    { name: 'John Doe', age: 30, city: 'New York', avatar: '/path/to/avatar1.jpg' },
    { name: 'Jane Smith', age: 25, city: 'Los Angeles', avatar: '/path/to/avatar2.jpg' },
    { name: 'Bob Johnson', age: 35, city: 'Chicago', avatar: '/path/to/avatar3.jpg' },
    { name: 'Alice Brown', age: 28, city: 'Houston', avatar: '/path/to/avatar4.jpg' },
    { name: 'Charlie Davis', age: 42, city: 'Phoenix', avatar: '/path/to/avatar5.jpg' },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Custom styled table components
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-head': {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    '&.MuiTableCell-body': {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  // Custom styled buttons
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#4CAF50'),
    backgroundColor: '#4CAF50',
    '&:hover': {
      backgroundColor: '#45a049',
    },
  }));

  const GradientButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
          Material UI Components
        </Typography>

        {/* Input for Profession */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" >aaditya</Typography>
            <TextField
              label="Profession"
              variant="outlined"
              fullWidth
              value={profession}
              onChange={handleProfessionChange}
            />
          </CardContent>
        </Card>

        {/* Rating */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Rating</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              The Rating component provides a visual representation for rating something. Users can interact with it to set a rating.
            </Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </CardContent>
        </Card>

        {/* Custom Rating */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Custom Rating</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              This is a customized Rating component with half-star precision, allowing for more granular ratings.
            </Typography>
            <Rating
              name="custom-rating"
              value={customRating}
              precision={0.5}
              onChange={(event, newValue) => {
                setCustomRating(newValue);
              }}
            />
          </CardContent>
        </Card>

        {/* Table */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Table</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Material-UI's Table component offers a clean and organized way to display tabular data with built-in pagination.
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">City</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar alt={row.name} src={row.avatar} sx={{ mr: 2 }} />
                          {row.name}
                        </Box>
                      </TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell align="right">{row.city}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CardContent>
        </Card>

        {/* Custom Table */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Custom Table</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              This is a customized table with styled headers and alternating row colors for better readability.
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Age</StyledTableCell>
                    <StyledTableCell align="right">City</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar alt={row.name} src={row.avatar} sx={{ mr: 2 }} />
                          {row.name}
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.age}</StyledTableCell>
                      <StyledTableCell align="right">{row.city}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Progress</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              The CircularProgress component is used to indicate the loading state of a part of your application.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CircularProgress />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                Loading...
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Custom Progress */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Custom Progress</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              This is a customized CircularProgress component that shows the progress percentage.
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={progress} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="caption" component="div" color="text.secondary">
                  {`${Math.round(progress)}%`}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Button */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Button</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Material-UI's Button component is highly customizable and can be styled to fit various use cases.
            </Typography>
            <Box sx={{ '& > button': { m: 1 } }}>
              <Button variant="contained">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="outlined">Outlined</Button>
            </Box>
          </CardContent>
        </Card>

        {/* Custom Buttons */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Custom Buttons</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Custom styled buttons can be created using the styled API, allowing for unique designs that fit your application's theme.
            </Typography>
            <Box sx={{ '& > button': { m: 1 } }}>
              <ColorButton variant="contained">Green Button</ColorButton>
              <GradientButton>Gradient Button</GradientButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default MaterialUIPage;
