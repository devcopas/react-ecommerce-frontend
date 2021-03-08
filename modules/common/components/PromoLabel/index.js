import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
    label: {
        fontSize: 10,
        fontWeight: 900,
        paddingLeft: '0 !important',
    },
});

const PromoLabel = ({ promoLabel }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            {promoLabel.length > 0 &&
                promoLabel.map((label, index) => {
                    return (
                        <Grid item key={label + index}>
                            <Chip label={label.toLowerCase()} color="primary" size="small" className={classes.label} />
                        </Grid>
                    );
                })}
        </Grid>
    );
};

PromoLabel.propTypes = {
    promoLabel: PropTypes.array.isRequired,
};

export default PromoLabel;
