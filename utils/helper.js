class Helper {

    static generateRandomNumber() {
        return Math.floor(Math.random() * 10000);
    }

    static generateEmail() {
        return `user${this.generateRandomNumber()}@test.com`;
    }

    static getCurrentDate() {
        return new Date().toLocaleDateString();
    }

}

module.exports = Helper;