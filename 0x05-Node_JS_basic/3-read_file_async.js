const fs = require("fs/promises")

const countStudents = async (path) => {
    try{
        let data = await fs.readFile(path, 'utf-8')
        //console.log(data.split('\n'))
        data = data.split("\n")
        for(i=0; i < data.length; i++){
            if (data[i] != ""){
                data[i] = data[i].split(',')
            }
        }
        data.pop()
        console.log(`Number of students:  ${data.length - 1}`)

        field = data[0].indexOf("field")
        arr = []
        for(i=1; i<data.length; i++){
            arr.push(data[i][field])
        }
        f_arr = new Set(arr)

        fields = Object.assign(...Array.from(f_arr, v => ({[v]: []})))
        
        data.forEach(element => {
            if (data.indexOf(element) != 0){
                fields[element[field]].push(element[0])
                //fields[element[field]]++
            }
        });

        f_arr.forEach(element =>{
            console.log(`Number of students in ${element}: ${fields[element].length}. ` +
                `List:${fields[element].map((item)=>{
                    item =  " " + item
                    return item
                })}`)
        })

    }catch (error){
        throw new Error("Cannot load the database")
    }
}


//countStudents("./database.csv")
module.exports = countStudents;