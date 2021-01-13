import {
  Grid,
  Paper,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import React, { memo } from 'react';
import codeIMG from '../code.jpg';

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    width: '100%',
    transition: 'transform 300ms ease-in-out',
  },
  cardGrow: {
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '&:hover .MuiCardMedia-root': {
      transform: 'scale(1.05)',
      overflow: 'hidden',
    },
  },
  project: {
    border: '1px solid red',
    textAlign: 'center',
  },
  media: {
    transition: 'transform 300ms ease-in-out',
    height: 225,
    width: '100%',
    backgroundSize: 'cover',
  },
  viewingFullDetailsCard: {
    height: 550,
  },
  demoLink: {
    textDecoration: 'none',
    '&:visited': {
      color: theme.palette.primary.main,
    },
  },
}));

const Project = ({ project, setViewingCard, viewingFullDetails = false }) => {
  const classes = useStyles();
  const { name, description, descriptionFull, demoURL, img, imgFull } = project;

  const handleClick = () => {
    setViewingCard(viewingFullDetails ? -1 : project.id);
  };

  return (
    <Grid item xs={viewingFullDetails ? 8 : 3} className={classes.root}>
      <Card
        raised
        className={`${classes.card} ${
          !viewingFullDetails ? classes.cardGrow : null
        }`}
      >
        <CardActionArea onClick={handleClick}>
          <CardMedia
            className={`${classes.media} ${
              viewingFullDetails ? classes.viewingFullDetailsCard : null
            }`}
            image={img ? (viewingFullDetails ? imgFull : img) : codeIMG}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant={viewingFullDetails ? 'h4' : 'h5'}
              component='h2'
              className={viewingFullDetails ? classes.boldText : null}
            >
              {name}
            </Typography>
            <Typography
              variant={viewingFullDetails ? 'h6' : 'body2'}
              color='textSecondary'
              component='p'
              className={viewingFullDetails ? classes.lightText : null}
            >
              {viewingFullDetails ? descriptionFull : description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size={viewingFullDetails ? 'large' : 'small'}
            variant='contained'
            color='primary'
            onClick={handleClick}
          >
            {viewingFullDetails ? 'Back to Projects' : 'More Details'}
          </Button>
          <Button size={viewingFullDetails ? 'large' : 'small'} color='primary'>
            {demoURL ? (
              <a className={classes.demoLink} target='blank' href={demoURL}>
                Demo
              </a>
            ) : (
              'Demo (Coming Soon)'
            )}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default memo(Project);
