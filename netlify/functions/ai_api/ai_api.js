const util = require('util');
const exec = util.promisify(require('child_process').exec);

const handler = async (event) => {
    const formData = new URLSearchParams(event.queryStringParameters);
    const { stdout, stderr } = await exec('python3 ai.py');
    if (stderr) {
        return {
            statusCode: 500,
            body: stderr
        }
    }
    return {
        statusCode: 200,
        body: stdout
    };
}

module.exports =  { handler }