import React from 'react';

class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate } = this.props;
            const total = Date.parse(timeTillDate) - Date.parse(new Date());
            const seconds = Math.floor( (total/1000) % 60 );
            const minutes = Math.floor( (total/1000/60) % 60 );
            const hours = Math.floor( (total/(1000*60*60)) % 24 );
            const days = Math.floor( total/(1000*60*60*24) );
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
