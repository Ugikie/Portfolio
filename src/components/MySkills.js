import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import jsLogo from '../logos/javascript.svg';
import vsCodeLogo from '../logos/vscode.svg';
import htmlLogo from '../logos/html5.svg';
import cssLogo from '../logos/css3.svg';
import reactLogo from '../logos/react.svg';
import nodeJSLogo from '../logos/nodejs.svg';
import expressLogo from '../logos/express.svg';
import mongoDBLogo from '../logos/mongodb.svg';
import bootstrapLogo from '../logos/bootstrap.svg';
import materialUILogo from '../logos/materialUI.svg';
import socketIOLogo from '../logos/socket-io.svg';
import ubuntuLogo from '../logos/ubuntu.svg';
import SkillIcon from './SkillIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3rem 1rem',
  },
  header: {
    fontWeight: 'bold',
  },
}));

const MySkills = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={10}>
          <Typography
            variant='h4'
            component='h2'
            className={classes.header}
            align='center'
          >
            My Skills
          </Typography>
          <Typography
            variant='subtitle1'
            component='h2'
            align='center'
            paragraph
          >
            Languages and Technologies I am familiar with and use frequently in
            my projects
            <Divider variant='middle' light />
          </Typography>
        </Grid>
        <SkillIcon name='Javascript ES6' logo={jsLogo} />
        <SkillIcon name='React' logo={reactLogo} />
        <SkillIcon name='Node.js' logo={nodeJSLogo} />
        <SkillIcon name='Express.js' logo={expressLogo} />
        <SkillIcon name='Bootstrap 5' logo={bootstrapLogo} />
        <SkillIcon name='Material UI' logo={materialUILogo} />
        <SkillIcon name='MongoDB' logo={mongoDBLogo} />
        <SkillIcon name='Socket.io' logo={socketIOLogo} />
        <SkillIcon name='HTML 5' logo={htmlLogo} />
        <SkillIcon name='CSS 3' logo={cssLogo} />
        <SkillIcon name='VS Code' logo={vsCodeLogo} />
        <SkillIcon name='Ubuntu' logo={ubuntuLogo} />
      </Grid>
    </Container>
  );
};

export default MySkills;
