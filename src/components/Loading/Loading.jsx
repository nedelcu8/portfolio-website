import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./Loading.css";
export default function Loading() {
  return (
    <div className="loading"> 
    Work in progress...

    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
      <CircularProgress />
    </Box>
    </div>
    
  );
}