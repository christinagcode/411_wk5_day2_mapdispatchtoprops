import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart.js'

const mapStateToProps= (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps, null)(Chart)