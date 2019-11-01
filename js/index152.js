const user={
   username: null,
   password: null,
   greet:function(){
    if(this.username != null)
    {
        console.log(`Hello, I'm user ${this.username}`)
    }
    else{
        console.log(`Please assign a username value`)
    }
   },
updatePassword:function(password){
this.password=password
},
 updaterUsername:function(username){
     this.username=username

 }
}
user.greet()
user.updaterUsername('Sweta')
user.updatePassword('Sweta')
user.greet()