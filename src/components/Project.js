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
  Grow,
} from '@material-ui/core';
import React, { memo } from 'react';
import codeIMG from '../code.jpg';

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    margin: '1.75rem',
    transition:
      'transform 300ms ease-in-out, color 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    [theme.breakpoints.down('lg')]: {
      margin: '1.25rem',
    },
    [theme.breakpoints.down('md')]: {
      margin: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0.5rem',
    },
  },
  cardGrow: {
    '&:hover': {
      transform: 'scale(1.05) !important',
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
    [theme.breakpoints.down('lg')]: {
      height: 185,
    },
    [theme.breakpoints.down('md')]: {
      height: 150,
    },
    [theme.breakpoints.down('xs')]: {
      height: 225,
    },
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

const Project = ({
  width,
  project,
  setViewingCard,
  viewingFullDetails = false,
}) => {
  const classes = useStyles();
  const { name, description, descriptionFull, demoURL, img, imgFull } = project;

  const handleClick = () => {
    setViewingCard(viewingFullDetails ? -1 : project.id);
  };

  return (
    <Grid
      item
      xs={12}
      sm={viewingFullDetails ? 10 : 4}
      md={viewingFullDetails ? 8 : 3}
      className={classes.root}
    >
      <Grow in={true}>
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
              {viewingFullDetails
                ? 'Back to Projects'
                : width === 'xl' || width === 'lg'
                ? 'More Details'
                : 'Details'}
            </Button>
            <Button
              size={viewingFullDetails ? 'large' : 'small'}
              color='primary'
            >
              {demoURL ? (
                <a className={classes.demoLink} target='blank' href={demoURL}>
                  Demo
                </a>
              ) : (
                `Demo (${width === 'xl' ? 'Coming Soon' : 'WIP'})`
              )}
            </Button>
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
};

export default memo(Project);
