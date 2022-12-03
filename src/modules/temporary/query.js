
const ADDBALANCE =`
insert into temporary(user_id,temp_score) 
 values ($1,$2) returning *;
`


module.exports = {
    ADDBALANCE
}