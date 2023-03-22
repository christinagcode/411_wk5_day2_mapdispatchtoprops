import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
// import { removeCar } action here
import {removeCar} from './redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }

const mapDispatchToProps = (index) => {
    const removeCar = (index) => dispatch(removeCar(index))
}

// add mapDispatchToProps function here

export default connect(mapStateToProps)(Dashboard)(mapDispatchToProps)