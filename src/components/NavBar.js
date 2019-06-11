import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class NavBar extends Component {
    state = { username: "", password: "" };

    handleLogin = e => {
        e.preventDefault();
        this.props.login(this.state);
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { isLoading, err } = this.props;
        return <React.Fragment />;
    }
    }

