class Sensor {
    constructor() {
        this.powerStatus = 'off'
        this.status = ''
        this.reportingInterval = 10000;

    }
    turn(click){
        if(click === 'on') {
            if(this.powerStatus === 'on'){
                throw new Error();
            }
            this.powerStatus = 'on'
            this.status = 'idle'
            
        }
        if(click === 'off') {
            this.powerStatus = 'off'
            this.status = ''
            this.reportingInterval = 10000
        
        }
        
    }
    advanceTimersByTime(report) {
    }
    

}

class IotServer {}

module.exports = {
    Sensor,
    IotServer,
};
