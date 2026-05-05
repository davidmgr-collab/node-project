const db=require("../db");
exports.getStudents=(req,res)=>{

Conn.query("SELECT * FROM students" ,(err,results)=>{
if(err) return req.res(err);
req.json(results);

});

};
exports.getStudents=(req,res)=>{
conn.query("SELECT * students WHERE id=?" ,[req.params.id] ,(err,results)=>{
    if(err) return req.send(err);
    req.json(results);
    
});
};
exports.addStudents=(req,res)=>{
    const{name,email,age}=req.body;
    Conn.query("INSERT INTO students(name,email,age) balues(?,?,?)",
        [name,email,age],
            (err)=>{
    if(err) return req.send(err);
    res.send("inserted");
        }
         );
};
exports.updateStudents=(req,res)=>{
    const{name,email,age}=req.body;
    Conn.query("UPDATE students SET name=?,email=?,age=?"),
    [name,email,age],
    (err)=>{
        if(err) return req.send(err);
        res.send("updated success")
    }
};
exports.deleteStudents=(req,res)=>{
    Conn.query("DELETE * FROM students where id=?" ,
        [req.params],
        (err)=>{
            if(err) return req.send(err);
            req.send("deleted");
        }
    );
};