

const GETLOGIN = `
select u.* from users as u
 where email = $1 and password = $2 and status = 'active'
`

const GETREGISTER = `
insert into users(username,lastname,password,contact,email,country,brithday) 
values ($1,$2,$3,$4,$5,$6,$7) returning *
`
const GETUSER = `
select u.*,b.balance_id,b.score from users as u
left join balance as b on b.user_id = u.user_id
where u.user_id = $1 and status = 'active'
`


const GETPOST = `
update users SET on avatar = $1 where user_id = $2 returning *
`

const PUTBALANCE =`
update balance  SET score = $1 where user_id = $2 returning *
`

const SETBALANCE = `
insert into balance(user_id) values($1) returning *
`
const PUTPASS = `
update users  SET password = $1 where email = $2 returning *
`

module.exports ={
    GETLOGIN , GETREGISTER ,GETUSER, GETPOST, PUTBALANCE, SETBALANCE,PUTPASS
}