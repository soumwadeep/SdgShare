export const userQuery = (userId)=>
{
    const query = `*[_type == "user" && _id == "${userId}"]`; //Try To Give Me A Document With This ID And Type Of User
    return query;
}