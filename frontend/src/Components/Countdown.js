import React from 'react';
import moment from 'moment';

class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds  });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        if (!minutes) {
            return null;
        }

        return (
            <div>
                <div className="countdown-wrapper">
                <h2 className="countdown-text">O evento começa em</h2>
                    {days && (
                        <div className="countdown-item">
                            {days}
                            <span>dias</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item">
                            {hours}
                            <span>horas</span>
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item">
                            {minutes}
                            <span>minutos</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">
                            {seconds}
                            <span>segundos</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Countdown;
