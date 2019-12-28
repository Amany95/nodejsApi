var config = require('../config.js')
var mysql = require("./mysql.js")

exports.getTwoCol = function (tbl, col1, col2, where, key) {

    const promise = new Promise((resolve, reject) => {
        mysql.query("select ??,?? from ?? where ??=? ", [col1, col2, tbl, where, key], function (err, data) {
            if (err) {
                reject(err)
                // return res.status(412).json({ error: true, errorCode: "ConnectionError", response: "Connection Error. Try again later.", err: err })

            }
            if (!data) {
                throw new Error('unable to get table');
            }
            console.log(data)
            console.log(data[0].user_name)
            resolve(data);

            // adminData=data;
            // res.send(data)
        });
    });
    return promise;
}

exports.getThreeCol = function (tbl, col1, col2, col3, where, key) {

    const promise = new Promise((resolve, reject) => {
        mysql.query("select ??,??,?? from ?? where ??=? ", [col1, col2, col3, tbl, where, key], function (err, data) {
            if (err) {
                reject(err)
                // return res.status(412).json({ error: true, errorCode: "ConnectionError", response: "Connection Error. Try again later.", err: err })

            }
            if (!data) {
                throw new Error('unable to login');
            }
            console.log(data)
            console.log(data[0].user_name)
            resolve(data);

            // adminData=data;
            // res.send(data)
        });
    });
    return promise;
}

exports.updateOneCol = function (tbl, col1, newValue, where, key) {
    let promiseToken = new Promise((resolve, reject) => {

        mysql.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", [tbl, col1, newValue, where, key], function (err, data) {
            if (err) {
                reject(err)

            }
            console.log(data);

            resolve(data);

        });

    });
    return promiseToken;

}

exports.deleteRow = function (tbl, where, key) {
    let promiseToken = new Promise((resolve, reject) => {

        mysql.query('DELETE FROM ?? WHERE ??=?', [tbl, where, key], function (err, data) {
            if (err) {
                reject(err)

            }
            console.log(data);

            resolve(data);

        });

    });
    return promiseToken;

}



exports.selectAllColWithoutCondition = function (tbl) {
    let promiseSelect = new Promise((resolve, reject) => {

        mysql.query("SELECT * FROM ?? ", [tbl], function (err, data) {
            if (err) {
                reject(err)

            }
            console.log(data);

            resolve(data);

        });

    });
    return promiseSelect;

}
exports.selectAllCol = function (tbl, where, key) {
    let promiseSelect = new Promise((resolve, reject) => {

        mysql.query("select * from ?? where ??=?", [tbl, where, key], function (err, data) {
            if (err) {
                reject(err)

            }
            console.log(data);

            resolve(data);

        });

    });
    return promiseSelect;

}

exports.insertTwoCol = function (tbl, colName1, colName2, val1, val2) {
    let promiseInsert = new Promise((resolve, reject) => {

        mysql.query("INSERT INTO ?? ( ??,?? ) VALUES ( ?,?)", [tbl, colName1, colName2, val1, val2], function (err, data) {
            if (err) {
                reject(err)

            }
            console.log(data);

            resolve(data);

        });

    });
    return promiseInsert;

}

exports.getCol = function (tbl, col1, where, key) {

    const promise = new Promise((resolve, reject) => {
        mysql.query("select ?? from ?? where ??=? ", [col1,tbl, where, key], function (err, data) {
            if (err) {
                reject(err)
                // return res.status(412).json({ error: true, errorCode: "ConnectionError", response: "Connection Error. Try again later.", err: err })

            }
            if (!data) {
                throw new Error('unable to login');
            }
            console.log(data)
            console.log(data[0].pass)
            resolve(data);

            // adminData=data;
            // res.send(data)
        });
    });
    return promise;
}

exports.insertNineCol = function (tbl,
     colName1, colName2, colName3, colName4, colName5, colName6, colName7, colName8,colName9,
     val1, val2,val3, val4,val5, val6,val7, val8,val9
     ) {
    let promiseInsert = new Promise((resolve, reject) => {

        mysql.query("INSERT INTO ?? ( ??,??,??,??,??,??,??,??,?? ) VALUES ( ?,?,?,?,?,?,?,?,?)",
         [tbl,colName1, colName2, colName3, colName4, colName5, colName6, colName7, colName8,colName9,
            val1, val2,val3, val4,val5, val6,val7, val8,val9], function (err, data) {
            if (err) {
                reject(err)

            }
            console.log(data);

            resolve(data);

        });

    });
    return promiseInsert;

}

exports.updateEightCol = function (tbl,
    colName1, colName2, colName3, colName4, colName5, colName6, colName7, colName8,
    newValue1, newValue2,newValue3, newValue4,newValue5, newValue6,newValue7, newValue8,
      where, key) {
    let promisUpdate = new Promise((resolve, reject) => {

        mysql.query("UPDATE ?? SET ?? = ?,?? = ?,?? = ?,?? = ?,?? = ?,?? = ?,?? = ?,?? = ? WHERE ?? = ?",
         [tbl, colName1,newValue1, colName2,newValue2, colName3,newValue3,
             colName4,newValue4, colName5,newValue5, colName6,newValue6,
              colName7,newValue7, colName8,newValue8,
                 where, key
         ], function (err, data) {
            if (err) {
                reject(err)

            }
            console.log(data);

            resolve(data);

        });

    });
    return promisUpdate;

}

exports.updateFiveCol = function (tbl, col1,col2,col3,col4,col5,
     newValue1, newValue2, newValue3, newValue4,newValue5, where, key) {
    let promiseUpdated = new Promise((resolve, reject) => {

        mysql.query("UPDATE ?? SET ?? = ?,??=?,??=?,??=?,??=? WHERE ?? = ?", [tbl,
             col1, newValue1,col2, newValue2,col3, newValue3,col4, newValue4,
             col5, newValue5,where, key], function (err, data) {
            if (err) {
                reject(err)

            }
            console.log(data);

            resolve(data);

        });

    });
    return promiseUpdated;

}


exports.selectJoinPkg = function (key) {
    let promiseSelect = new Promise((resolve, reject) => {

        mysql.query("select  pItem.name,pContent.pkg_item_value from pkg_content pContent, pkg_item pItem, package p where pContent.pkg_id = p.id and  pContent.pkg_item_id = pItem.id and pContent.pkg_id=?", [key], function (err, data) {
            if (err) {
                reject(err)

            }
            console.log('data join');
            console.log(data);

            resolve(data);

        });

    });
    return promiseSelect;

}

exports.insertFiveCol = function (tbl, colName1, colName2,colName3, colName4,colName5,
     val1, val2, val3, val4,val5) {
    let promiseInsert = new Promise((resolve, reject) => {

        mysql.query("INSERT INTO ?? ( ??,??,??,??,?? ) VALUES ( ?,?,?,?,?)",
         [tbl, colName1, colName2,colName3, colName4,colName5,
             val1, val2,val3, val4, val5], function (err, data) {
            if (err) {
                reject(err)

            }
            console.log(data);

            resolve(data);

        });

    });
    return promiseInsert;

}