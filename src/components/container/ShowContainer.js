import { connect } from 'react-redux';
import { ShowPresentation } from './../presentational/ShowPresentation';
import { showData } from '../../actions/showAction';

const mapStateToProps = state => {
    return {
        posts: state.show.showData,
        newPost: state.form.formDataResponse

    }
}


const mapDispatchToProps = dispatch => {
    return {
        show: () => {
            dispatch(showData())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPresentation)