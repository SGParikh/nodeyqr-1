const greet = (firstName,lastName) => {
    console.log(`Hi ${firstName} ${lastName}`);
    callback("name");
  }
const callback=(param3) =>{
    console.log('This code gets executed after the greet function call')
}
module.exports=greet