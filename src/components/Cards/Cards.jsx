import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';
import cx from 'classnames';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'loading...';
	}
	return (
		<div className={styles.container}>
			<Grid container spacing={9} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={confirmed.value} duration={1} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2" gutterBottom>
							Number of active cases of Covid-19
						</Typography>
					</CardContent>
				</Grid>

				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recoverd)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={recovered.value} duration={1} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2" gutterBottom>
							Number of recoveries from Covid-19
						</Typography>
					</CardContent>
				</Grid>
                
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Deaths
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={deaths.value} duration={1} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2" gutterBottom>
							Number of deaths from Covid-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
