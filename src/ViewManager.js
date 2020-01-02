import Service from './Service';

class ViewManager {
    constructor() {
        console.log('View manager');
        this.name = 'view manager';
    }

    init() {
        console.log('View manager init');
    }
}

export default new ViewManager();
