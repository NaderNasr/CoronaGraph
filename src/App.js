import React from 'react'

import { Cards, CountryPicker, Chart } from './components';                             //src/components/index - gather components
import styles from './App.module.css'
import { fetchData } from './api'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import logo from './components/Images/coronaImg.png'

class App extends React.Component {
    state = {
      data: {},
      country: '',
    }
  
    async componentDidMount() {
      const data = await fetchData();
  
      this.setState({ data });
    }
  
    handleCountryChange = async (country) => {
      const data = await fetchData(country);
  
      this.setState({ data, country: country });
    }
  
    render() {
      const { data, country } = this.state;
  
      return (
        <div className={styles.container}>
            <img src={logo} alt="Covid Logo"/>
            <br />
            <br />
            
          <Cards data={data} />
          <br />
            <br />
            <Button variant="contained" href="https://www.health.harvard.edu/diseases-and-conditions/preventing-the-spread-of-the-coronavirus">Stop the Spread</Button>
            <br />
            <br />
            <br />
            <br />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} /> 
        </div>
      );
    }
  }
  
  export default App;
