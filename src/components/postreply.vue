<template>
    <div class="postcard">
        <div class="perfilPhotoContainer">
            <img :src="urlPhoto" alt="" class="perfilPhoto">
        </div>
        
        <div class="postContent">
            <div class="username">{{'Reply by ' + userName}}</div> 
            <div>{{replyBody}}</div>           
        </div>
    </div>
</template>

<script>
export default {
    name: 'postreply',
    props:{
        userName:{
            type: String,
            default: "Anonimous"
        },
        replyBody:{
            type: String,
            default: "Some reply here"
        }
    },
    data(){
        return {
            urlPhoto:"https://bulma.io/images/placeholders/128x128.png"
        }
    },
    created(){
        fetch('https://randomuser.me/api/').then((res)=>res.json()).then((obj)=>{this.urlPhoto = obj.results[0].picture.medium})
        
    },

}
</script>

<style scoped>
    .postcard{
        box-sizing: border-box;
        display:flex;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
        box-shadow: 0 1px 2px #9b9d9e;
        border-radius: 5px;
        background-color: white;

    }
    .perfilPhotoContainer{
        border-style: solid;
        border-width: 0px 1px 0px 0px;
        border-color:rgb(219, 217, 217);
        padding: 5px;
        margin: 5px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .perfilPhoto{
        border-radius: 50%;
        min-width: 64px;
        min-height: 64px;
        max-width: 64px;
        max-height: 64px;
    }
    .username{
        font-weight: 500;
        font-size: 80%;
    }
    .postTitle{
        font-weight: 600;
    }
    .ajustIcon{
        position: relative;
        top: 5px;
    }
    @media (max-width: 800px) {
        .postcard{
            flex-direction: column;
        }
        .perfilPhoto{
            border-radius: 15%;
        }
        .perfilPhotoContainer{
            align-self: center;
            border: none;
        }
        .postContent{
            margin: 8px;
        }
    }
</style>