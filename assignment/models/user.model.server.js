function User(_id, username, password, firstName, lastName){
    this._id = _id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
}
module.exports=User;
