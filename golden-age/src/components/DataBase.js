import PouchDB from 'pouchdb-browser'

export var db = new PouchDB('users');
export var remoteDB = 'https://b9311cbe-6ddd-43a5-ac90-faf84cdac39b-bluemix:6cb9b03ed3b6023a8d5b423247a62bdcdeae959ab809fc1cf6bfeccc658ac1f3@b9311cbe-6ddd-43a5-ac90-faf84cdac39b-bluemix.cloudantnosqldb.appdomain.cloud/users'
export function sync() {
  var opts = {live: true};
  db.replicate.to(remoteDB, opts);
  db.replicate.from(remoteDB, opts);
}


export function addUserToDB(user) {
  var date = new Date()
  user._id  =date.toISOString();

  db.put(user, function callback(err, result) {
    if (!err) {
      console.log('successfully added user');
    }
    db.sync(remoteDB, {live: true})
  });

}

export function getDBInfo() {

  let result = db.info(function callback(err, result) {
    if (!err) {
      console.log('successfully checked DB info');
    }
    return result
  });
  return result

}
