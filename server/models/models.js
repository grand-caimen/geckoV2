var db = require ('./../db/sqlscript.js');
var uuid = require('uuid');

module.exports = {
  user: {
    newUser: function (user) {
      return db.query("SELECT username FROM users WHERE username = " + "'" + user.username + "'")
        .then(function (data) {
          if (!data.length) {
            db.query('INSERT INTO users (username,password,name,address,email,phone) VALUES ('+ "'" + user.username + "'," + "'" + user.password + "'," + "'" + user.name + "'," + "'" + user.address + "'," + "'" + user.email + "'," +  "'" + user.phone + "'" + ');')
              .then(function(data) {
                console.log('user created')
              })
              .catch(function(error){
                console.log('ERROR FOUND', error);
              })
          } else {
            console.log('username already exists')
            return ' user already exists';
          }
        })
    },

    login: function (userLogin) {
      var password = userLogin.password;
      var username = userLogin.username;
      var sessionId = uuid();
      var isAuth = false;

      return db.query("SELECT * FROM users WHERE username = " + "'" + username + "'")
        .then(function (data) {
          if (!data.length) {
            console.log("user does not exist");
            return 'user does not exist';
          } else {
            if (data[0].password === password) {
              isAuth = true;
              db.query('INSERT INTO user_sessions (session_id, user_id) VALUES (' +  "'" +sessionId + "'," + "'" + data[0].id + "'" + ');')
                .then(function(error){
                  console.log('User Logged in');
                  // return sessionId;
                })
            } else {
              console.log('AUTH FAILED');
              return 'auth failed'
            }
          }
        })
          .then(function(data) {
            if (isAuth) {
              return sessionId;
            }
          })
    },

    addTask: function(tasks, user_id){
      console.log(tasks);
      tasks.forEach(function(task){
        db.query('INSERT INTO tasks (user_id, date, time, task, notes, status) VALUES (' + "'" + user_id + "'," +  "'" + task.date + "'," + "'" + task.time + "'," + "'" + task.task + "'," + "'" + task.notes + "'," + "'new'" + ');')
        .catch(function(error){
          console.log('ERROR DETECTED', error);
        })
        .then(function() {
          console.log('task added');
        })
      })
    },

    getTasks: function(user_id){
      return db.query('SELECT * FROM tasks WHERE user_id = '+ "'" + user_id + "'")
        .then(function(data){
          console.log(data);
          return data;
        })
        .catch(function(error){
          console.log('ERROR DETECTED', error);
        })
    },

    logout: function(sessionId){
      return db.query('DELETE FROM user_sessions WHERE session_id = ' + "'" + sessionId + "'")
      .catch(function(error){
        console.log('ERROR DETECTED', error);
      })
    },

    isAuthenticated: function(sessionId){
      return db.query("SELECT * FROM user_sessions WHERE session_id = " + "'" + sessionId + "'")
        .then(function (data) {
          if (data.length > 0) {
            return data[0].user_id;
          } else {
            return false;
          }
        })
        .catch(function(error){
          console.log('ERROR DETECTED', error);
        })
    }
  },

  sitter: {

    login: function (sitterLogin) {
      var password = sitterLogin.password;
      var username = sitterLogin.username;
      var sessionId = uuid();
      var isAuth = false;

      return db.query("SELECT * FROM employees WHERE username = " + "'" + username + "'")
        .then(function (data) {
          if (!data.length) {
            console.log("user does not exist");
            return 'user does not exist';
          } else {
            if (data[0].password === password) {
              isAuth = true;
              db.query('INSERT INTO employee_sessions (session_id, employee_id) VALUES (' +  "'" +sessionId + "'," + "'" + data[0].id + "'" + ');')
                .then(function(error){
                  console.log('User Logged in');
                })
            } else {
              console.log('AUTH FAILED');
              return 'auth failed'
            }
          }
        })
        .then(function(data) {
          if (isAuth) {
            return sessionId;
          }
        })
    },

    logout: function (sessionId) {
      return db.query('DELETE FROM employee_sessions WHERE session_id = ' + "'" + sessionId + "'")
      .catch(function(error){
        console.log('ERROR DETECTED', error);
      })
    },

    myTasks: function (employee_id) {
      return db.query('SELECT * FROM tasks WHERE employee_id = '+ "'" + employee_id + "'")
        .then(function(data){
          console.log(data);
          return data;
        })
        .catch(function(error){
          console.log('ERROR DETECTED', error);
        })
    },

    pendingTasks: function () {
      return db.query('SELECT * FROM tasks WHERE status = "new" ')
        .then(function(data){s
          console.log(data);
          return data;
        })
        .catch(function(error){
          console.log('ERROR DETECTED', error);
        })
    },

    assignTask: function (taskId, employeeId) {
      return db.query("UPDATE tasks SET status = 'assigned' WHERE id = " + "'" + taskId + "'; UPDATE tasks SET employee_id = " + "'" + employeeId + "'" + " WHERE id = " + "'" + taskId + "';")
        .then(function () {
          console.log('task assigned');
        })
    },

    completeTask: function (taskId) {
      return db.query("UPDATE tasks SET status = 'complete' WHERE id = " + "'" + taskId + "';")
        .then(function () {
          console.log('task complete');
        })
    },

    isAuthenticated: function (sessionId) {
      return db.query("SELECT * FROM employee_sessions WHERE session_id = " + "'" + sessionId + "'")
        .then(function (data) {
          if (data.length > 0) {
            return data[0].employee_id;
          } else {
            return false;
          }
        })
        .catch(function(error){
          console.log('ERROR DETECTED', error);
        })
    },
  }
}

