import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, #fe6b8b 30%,#ff8e53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
}));

const PromoCard = ({ promoList }) => {
    const classes = useStyle();

    const beautifyPromoText = promo => {
        let res;

        switch (promo) {
            case 'FREESHIPPING':
                res = 'Free Shipping';
                break;
            case 'CASHBACK':
                res = 'Cashback';
                break;
            default:
                res = 'Invalid Label';
        }

        return res;
    };

    const breakPoints = promoList.length > 1 ? 6 : 12;

    if (promoList.length > 0) {
        return (
            <Grid container spacing={1}>
                {promoList.map((promo, index) => {
                    return (
                        <Grid item key={index} xs={breakPoints} sm={breakPoints}>
                            <Paper variant="outlined" classes={{ root: classes.root }}>
                                <Typography>{beautifyPromoText(promo)}</Typography>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        );
    } else return null;
};

PromoCard.propTypes = {
    promoList: PropTypes.array.isRequired,
};

export default PromoCard;
