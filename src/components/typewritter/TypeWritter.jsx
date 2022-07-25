import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './typewritter.css';

class TypeWritter extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        wordsPerSecond: PropTypes.number.isRequired,
    };
    static defaultProps = {
        text: 'Full Stack Developer.<br/>I love to build things.',
        wordsPerSecond: 20,
    };
    state = {
        runningText: "",
        index: 0
    };
    componentDidMount() {
        this.generateText();
    }
    componentDidUpdate() {
        this.generateText();
    }

    generateText = () => {
        clearTimeout(this.timer);
        const { runningText, index } = this.state;
        const { text, wordsPerSecond } = this.props;

        const speed = 1000 / wordsPerSecond;

        if( index < text.length) {
            this.timer = setTimeout(() => {
                this.setState({
                    runningText: runningText + text[index],
                    index: index + 1
                });
            }, speed);
        } else {
            clearTimeout(this.timer);
        }
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const { runningText } = this.state;
        return (
            <div className="typewriter">
                {runningText}
                <span className='blinkingCursor'></span>
            </div>
        );
    }




}

export default TypeWritter