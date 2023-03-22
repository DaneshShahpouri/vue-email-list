const { createApp } = Vue

  createApp({
    data() {
      return {
        randomEmail:[],
        randomEmailMounted:[],
      }

    },

    methods:{
    
        generateRandomEmail(numbEmail){
            let newEmail;
            
            for(let i = 0; i < numbEmail; i++){
                newEmail='';
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{

                    newEmail = res.data.response;
                    
                    this.randomEmail.push(newEmail);

                })
            
            }
            
        },

        RandomEmailfull(){
            this.randomEmailMounted = this.randomEmail
        }

    },

    created(){
        this.generateRandomEmail(10);
       
    },

    mounted(){
        this.RandomEmailfull()
    }
}).mount('#app')