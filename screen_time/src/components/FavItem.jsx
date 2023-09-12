import {useState} from "react";
import { Box, Button, Dialog, DialogTitle,DialogActions,DialogContent,DialogContentText } from "@mui/material";
import PropTypes from "prop-types";
import ReactCardFlip from 'react-card-flip';

const FavItem = (props) => {
    const [isflipped, setisflipped] = useState(false);

    const [open, setOpen] = useState(false);
    const [openPopUp, setOpenPopUp] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    
    const handleOpenPopUp = () => {
        setOpenPopUp(true);
    }

    const handleClosePopUp = () => {
        setOpenPopUp(false);
    }

    function flipCard() {
        setisflipped((prev)=>!prev);
        console.log(isflipped);
    }
  return (
    <div 
    key={props.element.id}>
        
    <ReactCardFlip flipDirection="horizontal" isFlipped={isflipped}>
      <Box
      className="fav-item-side"
        sx={{backgroundImage:`url("https://image.tmdb.org/t/p/w500${props.element.poster_path}")`,backgroundSize:"cover",backgroundPosition: "center"}}
        onClick={flipCard}
      >
      </Box>
      <Box 
      className="fav-item-side" display={"flex"} sx={{ bgcolor:"third.main",flexDirection:"column",justifyContent:"space-between",}}
        onClick={flipCard}
        >   
        <Box display={"flex"} sx={{flexDirection:"column",justifyContent:"space-around",p:"15px",flexGrow:1,mb:"15px"}}>
            <h2>{props.element.title ?? props.element.original_name}</h2>
            {props.element.release_date ? <p><strong>Year: </strong>{props.element.release_date?.slice(0,4)}</p>:<p></p>}
            <p><strong>Language: </strong>{props.element.original_language.toUpperCase()}</p>
            <div>{props.element.overview.substring(0,250)}{props.element.overview.length>250 ? <>
           <span>...</span>
           <Button onClick={()=>{handleClickOpen();}}>ReadMore</Button>
            </>:""}</div>
        </Box>
           
            <Button sx={{position:"",bottom:0,width:"%99",px:0,py:"10px",left:0,right:0}}  onClick={()=>{handleOpenPopUp();}}>remove from favorites</Button>

      </Box>
    </ReactCardFlip>
    <Dialog
         open={open}
         onClose={handleClose}
        >
    <Box
         sx={{p:"20px"}}
    >

        <h4 style={{marginBottom:"10px"}}>{props.element.title ?? props.element.original_name}
            </h4>
        {props.element.overview}
    </Box>            
        </Dialog>

        <Dialog
        open={openPopUp}
        onClose={handleClosePopUp}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            Remove from favs
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to remove this from favorites 🥺
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopUp}>Noooo 😭</Button>
          <Button onClick={()=>{ handleClosePopUp();props.deleteShow(props.element.id);}}>
            Yup.
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

FavItem.propTypes={
    element : PropTypes.object,
    deleteShow : PropTypes.func,
};


export default FavItem;
