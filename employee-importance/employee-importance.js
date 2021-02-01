/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */

var GetImportance = function(employees, id) {
    let obj = {}
    
    employees.map(element => {
        obj[element["id"]] = {importance: element["importance"], subordinates: element["subordinates"]}
    })
    
    // if (obj[id]["subordinates"].length === 0) {
    //     return obj[id]["importance"]
    // }
    
    let answer = 0
    
    const helper = (subId) => {
        answer += obj[subId]["importance"]
        
        obj[subId]["subordinates"].map(element => { 
            helper(element)
        })
        return answer
    }
    
    return helper(id)
    
};