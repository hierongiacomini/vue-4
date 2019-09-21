<template>
    <div>
        <div class="back">
            <i class="material-icons">arrow_back</i>
            <router-link to="/" class="voltar" data-test="voltar">Voltar</router-link>
        </div>
        <div v-if="post">
            <postcontainer :postTitle="post.title" :postBody="post.body" :userName="post.user.name" :replies="post.replies"/>
        </div>
        
    </div>
</template>
<script>
    import postcontainer from '@/components/postcontainer';
    export default {
        props:{
            thread_slug:{
            type: String,
            default: "Inexistente"
            }
        },
        created(){
            //
            //console.log('1')
            fetch(`http://localhost:1338/threads/${this.thread_slug}`).catch((res)=>console.log(res))
            //fetch(`http://localhost:8080/api/threads/${this.thread_slug}`)
            .then((res)=>{
                            if (res.status==200){
                                return res.json()
                                
                                //throw Error("Page not Found")
                
                            }
                            else{
                                this.$router.push('/404')
                            }
                            
                            })
            .then((obj)=>{this.post=obj.data})
            //.catch(()=>this.$router.push('/404'))
            //console.log(this.post)
            },
        data(){
        return {
            post: {
                body:"",
                user:{
                    name:""
                },
                replies:[]
            },
        }
        },
        components:{
            postcontainer
        }
    };
</script>
 
<style>
    .back{
        box-sizing: border-box;
        display:flex;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0 1px 2px #c9cccd;
        max-width: 60%;
        border-radius: 5px;
    }
    .voltar{
        color: black;
    }
    .voltar:hover{
        text-decoration: none;
        text-decoration-color: none;
    }
    
    
</style>
