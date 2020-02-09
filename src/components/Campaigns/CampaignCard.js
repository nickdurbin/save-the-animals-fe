import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    width: '50%',
    height: '400px',
    backgroundColor: 'white',
    padding: theme.spacing(3, 2),
  },
  example: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1% auto 0',
    width: '50%',
    padding: '1%'
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1% auto',
    width: '50%',
    padding: '0 1%',
    cursor: 'pointer',
  },
  imgContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: '1% auto',
    width: '100%',
    boxShadow: '1px 3px 5px',
    overflow: 'hidden'
  },
  desContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: '1% auto 0',
    padding: '1%',
    width: '100%',
    boxShadow: '1px 3px 5px',
  },
  heading: {
    fontSize:'1.6rem',
    margin: '0 auto'
  },
  image: {
    width: '100%',
    transition: '5s',
    '&:hover': {
      transform: 'scale(1.4)',
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    margin: '1% 3%',
    padding: '0 5%'
  },
  bookButton: {
    color: '#fff',
    backgroundColor: '#3f51b5',
    width: '30%',
    height: '45px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  
    '&:hover': {
      backgroundColor: '#052af7',
      transform: 'scale(1.02)',
    }
  },
  favoriteButton: {
    color: '#fff',
    backgroundColor: '#ff3366',
    width: '30%',
    height: '45px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  
    '&:hover': {
      backgroundColor: '#fc003f',
      transform: 'scale(1.02)',
    }
  }
}));

const CampaignCard = (props) => {
  const classes = useStyles();
  
  return (
    <>
      <Grid container wrap="wrap" className={classes.grid}>
      <h1 className={classes.heading}>Listing: {props.campaign.location}</h1>
        <Box key={props.campaign.id} className={classes.imgContent}>
          {props.campaign ? (
            <img className={classes.image} alt={props.campaign.title} src={props.campaign.image} />
          ) : (
            <Skeleton variant="rect" width={220} height={120} />
          )}

          {props.campaign ? (
            <Box paddingRight={2} className={classes.desContent}>
              <Typography gutterBottom variant="body2">
                {props.campaign.title}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {props.campaign.location}
              </Typography>
              <Typography variant="caption" color="textSecondary">
              {`${props.campaign.description}`}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`Funding needed by ${props.campaign.date}`}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {props.campaign.animal}
              </Typography>
              <div className={classes.buttons}>
                <button aria-label="add to booked" className={classes.bookButton}>
                  Donate
                </button>
              </div>
            </Box>
          ) : (
            <React.Fragment>
              <Skeleton />
              <Skeleton width="60%" />
            </React.Fragment>
          )}
        </Box>
      </Grid>
    </>
  );
}

export default CampaignCard;