const GETLOGIN = `
select a.* from admins as a where adminname = $1 and password = crypt($2,a.password)
`
const GETREGISTER = `
insert into admins(adminname,password) values($1,crypt($2,gen_salt('bf'))) returning *
`

const GETUSER = `
select u.*,b.* from users as u 
left join balance as b on b.user_id = u.user_id
where u.status = 'active'
`

const GET_ONE_USER = `
select u.*,b.balance_id,b.score from users as u
left join balance as b on b.user_id = u.user_id
where u.user_id = $1
`
const PUTUSER = `
update balance  SET score = $1 
where user_id = $2 returning *
`
const GET_USER_BALANCE = `
select * from users as u
left join balance as b on u.user_id = b.user_id
 where u.user_id = $1
`
const DELETE_ONE_USER = `
update users SET status = $1
where user_id = $2 returning *
`
const PUT_USER_ACCOUNT = `
update users SET username = $1, lastname = $2, password = $3, email = $4
where user_id = $5 returning *
`

const PUTADMIN = `
update admin SET adminname = $1 and password = crypt($2,gen_salt('bf'))
where admin_id = $3 returning *
`

const GETPENDING = `
select * from temporary  where status = 'pending'
`
const GETSUCCESSFUL = `
select * from temporary  where status = 'successful'
`
const GETREJECTED = `
select * from temporary  where status = 'rejected'
`
const GET_PUT_SUCCESSFUL = `
update temporary SET status = 'successful'
where temporary_id = $1 returning *
`

const GET_PUT_REJECTED = `
update temporary SET status = 'rejected'
where temporary_id = $1 returning *
`

module.exports = {
     GETLOGIN,
     GETREGISTER,
     PUTADMIN, 
     GETUSER,
     PUTUSER,
     PUT_USER_ACCOUNT, 
     GET_ONE_USER,
     GET_USER_BALANCE,
     DELETE_ONE_USER,
     GETPENDING,
     GETSUCCESSFUL,
     GETREJECTED,
     GET_PUT_SUCCESSFUL,
     GET_PUT_REJECTED
}