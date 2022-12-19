


const PUTQUERY = `
insert into codes(code) values ($1) returning *;
`


const POSTQUERY = `
select c.* from codes as c where c.code_id = $1 and c.code = $2;
`
const DELETEQUERY = `
DELETE FROM codes where code_id = $1 returning *
`
module.exports = {
    PUTQUERY,
    POSTQUERY,
    DELETEQUERY
}