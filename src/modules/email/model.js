const { createTransport } = require('nodemailer')
const { fetch } = require('./../../lib/postgres.js')
const { PUTQUERY, POSTQUERY, DELETEQUERY } = require('./query.js')
const { getRandomNum } = require("../../lib/getRandom.js");

const PUT = async ({ email }) => {
    console.log(email)

    try {

        let transporter = createTransport({
            service: "gmail",
            auth: {
                user: "jasurbekturgunov227@gmail.com",
                pass: "qfwcabbcpyuibqfe",
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let random = getRandomNum()

        let info = await transporter.sendMail({
            from: '"HH-house-copital"',
            to: email,
            subject: "Password reset",
            text: "Password reset",
            html: `<b>${random}</b>`
        })

        if (info) {
            let code = await fetch(PUTQUERY, random);
            setTimeout(async () => {
                await fetch(DELETEQUERY, code.code_id);
            }, 1000 * 120)
            return code.code_id;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
    }
}


const POST = async ({ code }, { codeId }) => {
    try {
        let response = await fetch(POSTQUERY, codeId, code);
        console.log(response)

        if (response) {
            return response && await fetch(DELETEQUERY, codeId);
        } else {
            return null;
        }

    } catch (error) {
        console.log(error)
    }


}



module.exports = {
    PUT,
    POST
}