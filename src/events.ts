﻿type Callback = (...args: any[]) => any;

function getCallbacks(obj: any, name: string): Callback[] {

    if (!obj) {
        throw new Error("obj cannot be null!");
    }

    obj._callbacks = obj._callbacks || {};

    let list = obj._callbacks[name];

    if (!list) {
        obj._callbacks[name] = [];
        list = obj._callbacks[name];
    }

    return list;
}

export default {

    on(obj: any, eventName: string, fn: Callback) {

        const list = getCallbacks(obj, eventName);

        list.push(fn);
    },

    off(obj: any, eventName: string, fn: Callback) {
        const list = getCallbacks(obj, eventName);

        const i = list.indexOf(fn);
        if (i !== -1) {
            list.splice(i, 1);
        }
    },

    trigger(obj: any, eventName: string, ...additionalArgs: any[]) {
        const eventObject = {
            type: eventName
        };

        const eventArgs: any[] = [];
        eventArgs.push(eventObject);

        for (let i = 0, length = additionalArgs.length; i < length; i++) {
            eventArgs.push(additionalArgs[i]);
        }

        const callbacks = getCallbacks(obj, eventName).slice(0);

        callbacks.forEach(c => {
            c.apply(obj, eventArgs);
        });
    }
};