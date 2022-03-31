import { Query } from './index';

const all = async () => Query('SELECT * FROM chirps');
const one = async (id) => Query('SELECT * FROM chirps WHERE is = ?', [id]);

const post =(userid, content, location) => Query("insert into chirps(userid, content, location) values(?, ?, ?)", [userid, content, location]);




export default {
    all,
    one,
    post

};