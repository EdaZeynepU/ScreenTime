import {useEffect,useRef,useState} from 'react'; // Import React
import PropTypes from 'prop-types'; // Import PropTypes from 'prop-types'
import { Box, CircularProgress } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogContentText,DialogActions, Button,Stack } from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
import {Star} from '@mui/icons-material';

const CarouselItem = (props) => {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const descriptionElementRef = useRef(null);
    useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

  return (
    <div key={props.id}>
       <Box
      sx={{
        backgroundSize: "cover",
    width: "100%",
        objectFit:"fit",
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      onDoubleClick={handleClickOpen('body')}
    >
        <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="" style={{width:"95%",maxWidth:"400px",height:"auto"}} draggable={false} />
    </Box>
    <Dialog
        open={open}
        onClose={handleClose}
        scroll={"body"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth={true}
        maxWidth={'lg'}
        // sx={{display:"flex",justifyContent:'center'}}
      >
        
        <Box sx={{display:"flex",justifyContent:'center' }}>
        <DialogContent
            display="flex">
 
<Box  display="flex" 
            ref={descriptionElementRef}>
            <img  src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="" style={{width:"35%",height:"auto"}}/>
<Box sx={{mx:"50px"}} display={'flex'} flexDirection={'column'}>
        <DialogActions>
          <Button onClick={handleClose} size='large' sx={{fontSize:"1.5rem"}}>X</Button>
        </DialogActions>
<DialogTitle id="scroll-dialog-title" >{props.title ?? props.original_name}</DialogTitle>

          <DialogContentText sx={{margin:"10px 0 30px 0"}}>

            {props.overview}</DialogContentText>          
            <p className='dialog-p'>
            original language: {props.original_language}
            </p>
            <Stack display={'flex'} flexDirection={'row'} sx={{alignItems:"center",flexGrow: 1,justifyContent: "space-between",width:"90%"}}>
              <Box>
                
                <Box sx={{fontSize:"1.4rem"}}> <MovieIcon sx={{width:"80px",scale:"3"}} /> Out of <strong>{props.vote_count}</strong> people</Box>
              </Box> 
            <Box sx={{position:"relative",width:"fit-content",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <CircularProgress variant="determinate" value={props.vote_average*10} size={"150px"} sx={{}} />
              <p style={{position:"absolute",fontSize:"2rem",fontWeight:700}}>{props.vote_average}</p>
              
            </Box>
            </Stack>
</Box>
</Box>
        </DialogContent>
        </Box>

      </Dialog>
    </div>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path:PropTypes.string.isRequired,
  title:PropTypes.string,
  original_name:PropTypes.string,
  overview:PropTypes.string.isRequired,
  original_language:PropTypes.string.isRequired,
  vote_average:PropTypes.number.isRequired,
  vote_count:PropTypes.number.isRequired,
};

export default CarouselItem;

