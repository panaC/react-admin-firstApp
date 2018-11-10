import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const styles = {
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
};

const MyUrlFieldComponent = ({ record = {}, source, classes }) =>
    <a href={"http://" + record[source]} className={classes.link}>
        {record[source]}
        <LaunchIcon className={classes.icon} />
    </a>;

export const MyUrlField = withStyles(styles)(MyUrlFieldComponent)

//export default withStyles(styles)(MyUrlField);
