import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function LoadingIndicator({load}) {

  return (
    <div>
      <Backdrop
        sx={{ color: '#eee', width: "100%" , height:"100vh" ,zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}