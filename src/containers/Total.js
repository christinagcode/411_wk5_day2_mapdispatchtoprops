import { connect, dispatch } from 'react-redux'
import Total from '../components/Total.js'

const mapStateToProps= (state) => {
    return {
        cars: state.cars
    }
}

// this container provides the props for the total component

export default connect(mapStateToProps, null)(Total)