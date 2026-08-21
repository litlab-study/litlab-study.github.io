class CountdownTimer {
    constructor({
        selector,
        targetDate
    }) {
        this.selector = selector
        this.targetDate = targetDate
        this.refs = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="mins"]`),
        }
    }

    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date())
        const days = Math.floor(total / (1000 * 60 * 60 * 24))
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
        const mins = Math.floor((total / (1000 * 60))%60)
        return {
            total,
            days, 
            hours, 
            mins
        }
    }

    updateTimer({days, hours, mins}) {
        this.refs.days.textContent = days
        this.refs.hours.textContent = hours
        this.refs.mins.textContent = mins
    }

    startTimer() {
        const timer = this.getTimeRemaining(this.targetDate)
        this.updateTimer(timer)
        setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate)
            this.updateTimer(timer)
        },  1000)
    }
}

