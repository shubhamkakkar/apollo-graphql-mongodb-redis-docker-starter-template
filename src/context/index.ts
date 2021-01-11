import express from "express";

async function context({ req }: { req: express.Request}) {
    try {
        return req;
    } catch (e) {
        console.log('context e()', e);
        throw new Error('context e()');
    }
}

export default context;
