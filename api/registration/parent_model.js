'user strict';
var pool = require('./parents_db.js').pool;

//Parent object constructor
var Parent = function(parent){

this.id = parent.id;
this.child_enrollment = parent.child_enrollment;
this.email_id=  parent.email_id;
this.contact_number =  parent.contact_number;
this.category =  parent.category;
this.verification_status =  parent.verification_status;
this.child_class =  parent.child_class;
};


Parent.createParent = function createUser(newParent, result) { 

  pool.getConnection(function (err, connection) {
        if (err) {
            console.log("error error release"+err);
            //connection.release();
            //res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        connection.query("INSERT INTO parents_table set ?", newParent, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });       
             connection.release();
    });    
};


Parent.getParentById = function createUser(parentId, result) {

  pool.getConnection(function (err, connection) {
        if (err) {
            console.log("error error release"+err);
            //connection.release();
            //res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
      
        connection.query("Select * from parents_table where id = ? ", parentId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
         connection.release();
    });    
};



Parent.getAllParent = function getAllParent(result) {

    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("error error release"+err);
            //connection.release();
            //res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }

        connection.query("Select * from parents_table", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('parents : ', res);  

                 result(null, res);
                }
            }); 
        connection.release();
    });

};

Parent.updateById = function(id, parent, result){

  pool.getConnection(function (err, connection) {
        if (err) {
            console.log("error error release"+err);
            //connection.release();
            //res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
  connection.query("UPDATE parents_table SET child_enrollment  = ? WHERE id = ?", [parent.child_enrollment, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
   connection.release();
    });
};
Parent.remove = function(id, result){

  pool.getConnection(function (err, connection) {
        if (err) {
            console.log("error error release"+err);
            //connection.release();
            //res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
     connection.query("DELETE FROM parents_table WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
      connection.release();
    });
};

module.exports= Parent;