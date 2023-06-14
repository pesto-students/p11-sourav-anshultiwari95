class CustomPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.error = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state !== 'pending') {
                return;
            }
            this.state = 'fulfilled';
            this.value = value;
            this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
        };

        const reject = (reason) => {
            if (this.state !== 'pending') {
                return;
            }
            this.state = 'rejected';
            this.error = reason;
            this.onRejectedCallbacks.forEach((callback) => callback(this.error));
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason; };

        return new CustomPromise((resolve, reject) => {
            const handleFulfilled = (value) => {
                try {
                    const result = onFulfilled(value);
                    if (result instanceof CustomPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            };

            const handleRejected = (reason) => {
                try {
                    const result = onRejected(reason);
                    if (result instanceof CustomPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            };

            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    handleFulfilled(this.value);
                }, 0);
            } else if (this.state === 'rejected') {
                setTimeout(() => {
                    handleRejected(this.error);
                }, 0);
            } else {
                this.onFulfilledCallbacks.push(handleFulfilled);
                this.onRejectedCallbacks.push(handleRejected);
            }
        });
    }

    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    static resolve(value) {
        return new CustomPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new CustomPromise((resolve, reject) => {
            reject(reason);
        });
    }
}
