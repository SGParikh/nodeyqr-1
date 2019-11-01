const student=['Ben','Leena','Scott','Amit','Ryan','Nita','Yan']
for (let i = 0; i < student.length; i++) {
    if(i===1 || i===5)
    {
        console.log(student[i].toUpperCase())
    }
    
}
console.log(`The students array has ${student.length} items`)