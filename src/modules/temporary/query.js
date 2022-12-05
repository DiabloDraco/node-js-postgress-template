
const ADDBALANCE =`
insert into temporary(user_id,temp_score,chin_key) 
 values ($1,$2,$3) returning *;
`


module.exports = {
    ADDBALANCE
}