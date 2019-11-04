import { connect } from 'react-redux';
import { FormPresentation } from './../presentational/FormPresentation';
import { inputRequest } from '../../actions/formAction';

const mapStateToProps = state => {
    return {

    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (d, history) => {
            dispatch(inputRequest(d, history));

        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormPresentation)