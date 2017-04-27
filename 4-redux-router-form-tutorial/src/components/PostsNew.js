import _ from 'lodash';
import React, { Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const FIELDS = {
    title: {
        type: 'input',
        label: 'Title'
    },
    categories: {
        type: 'input',
        label: 'Categories'

    },
    content: {
        type: 'textarea',
        label: 'Content'
    }
};

class PostsNew extends Component {

    // whenever a new instance is created,
    // react is gonna find the first parent component
    // with prop called 'router', i.e, index.router
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        //a promise
        this.props.createPost(props)
            .then(() => {
                // blog post have been created, navigate the user to the index
                // We navigate by calling this.context.router.push with the new path to navigate to
                this.context.router.push('/');
            });
    }

    renderField(fieldConfig, field) {
        const fieldHelper = this.props.fields[field];

        return (
            <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
                <label>{fieldConfig.label}</label>
                <fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error: ''}
                </div>
            </div>
        );
    }

    render() {
        //eq. to const handleSubmit = this.props.handleSubmit, etc;
        const { handleSubmit } = this.props;
        return (
            // redux-form's handleSubmit will call createPost with the form props
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>New Post</h3>
                {_.map(FIELDS, this.renderField.bind(this))}
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            errors[field] = `Enter the ${field}`;
        }
    });
    return errors;
}


/**
    user types something... record it on application state
    state === {
        form: {
            title: '...',
            categories: '...'
        }
    }

    reduxForm behave like connect() from redux, just that it has 3 args
    reduxForm(config, mapStateToProps, mapDispatchToProps)
*/
export default reduxForm({
    form: 'PostNewForm',
    fields: _.keys(FIELDS),
    validate
}, null, { createPost })(PostsNew);