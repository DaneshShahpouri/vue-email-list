const { createApp } = Vue

  createApp({
    data() {
      return {
        randomEmail:[],
      }

    },

    methods:{
    
        generateRandomEmail(numbEmail){
            let newEmail;
            
            for(let i = 0; i < numbEmail; i++){
                newEmail='';
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                    newEmail = res.data.response;
                    console.log(newEmail)
                    this.randomEmail.push(newEmail);
                })
            
            }
            console.log(this.randomEmail)
        },

    },

    mounted(){
        this.generateRandomEmail(10);
       
    },
}).mount('#app')