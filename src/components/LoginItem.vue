<template lang="pug">
    form#login
        div.form
            input.userId(name="userId", type="text", v-model="formUserId")
            span.user
                icon.icon(name="user")
            input.userPw(name="userPw", type="password", v-model="formUserPwd")
            span.lock
                icon.icon(name="lock")
            svg.line
                rect(rx="0.5rem", ry="0.5rem")
        div.button
            button.submit.login(:class="{ready:formReadyToSubmit}", :disabled="!formReadyToSubmit", @click="login" type="button") {{formSubmitText}}
    //form

</template>

<script>
    export default {
        name: "login",
        data: ()=>{
            return{
                formSubmitText: "Login",
                formUserId: "",
                formUserPwd: ""
            }
        },
        computed: {
            formReadyToSubmit: function(){
                return !!this.formUserPwd && !!this.formUserId;
            }
        },
        methods: {
            login(){
                this.axios.post('api/users/login',{
                    userId: this.formUserId,
                    userPwd: this.formUserPwd
                }).then((res)=>{
                    console.log(res.data.msg)
                }).catch((err)=>{
                    alert(err.data.msg);
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    #login{
        display: flex;
        flex-direction: column;
        height: 10rem;
        justify-content: center;
        align-items: center;
        .form{
            position: relative;
            flex: 1;
            width: 25rem;
            display: flex;
            justify-content: center;
            box-shadow: 0 0.5rem 0.75rem -0.75rem $shadowColor;
            .user{
                order: -1;
                & + input{
                    order:1;
                }
            }
            .lock{
                order: 0;
            }
            input{
                z-index: 2;
                @include anime;
                flex: 1;
                min-width: 10rem;
                background-color: $compomentBg;
                color: $white;
                border: {
                    width: 0;
                    color: $mainColor;
                    radius: 0.5rem;
                };
                outline: none;
                font: {
                    family: 'dengxian', Helvetica, Arial, sans-serif;
                    size: 1.5rem;
                };
                text-indent: 2.5rem;
                text-shadow: #0ebeff;
                &:focus{
                    border-width: 0;
                    background-color: $borderColor;
                    box-shadow: 0 0.5rem 0.5rem -0.4rem $gray;
                    & + span{
                        .icon{
                            color: $mainColor;
                        }
                    }
                }
                &:-webkit-autofill{
                    &, &:hover, &:focus, &:active{
                        -webkit-transition-delay: 99999s;
                        -webkit-transition: color 99999s ease-out, background-color 99999s ease-out;
                    }
                }
                &[type="text"]{
                    border-radius: 0.5rem 0 0 0.5rem;
                    &:focus ~ svg.line{
                        rect{
                            stroke-dasharray: 17.5rem 42.5rem;
                            stroke-dashoffset: 5.5rem;
                        }
                    }
                }
                &[type="password"]{
                    border-radius: 0 0.5rem 0.5rem 0;
                    &:focus ~ svg.line{
                        rect{
                            stroke-dasharray: 17.5rem 42.5rem;
                            stroke-dashoffset: -12rem;
                        }
                    }
                }
            }
            svg.line{
                z-index: 3;
                flex: none;
                pointer-events: none;
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 0.5rem 0.5rem 0 0;
                rect{
                    @include anime;
                    height: 110%;
                    width: 100%;
                    fill: none;
                    stroke: $mainColor;
                    stroke-width: 4px;
                    stroke-dasharray: 0 60rem;
                    stroke-dashoffset: -12rem;
                }
            }
            span{
                z-index: 2;
                width: 0;
                height: 100%;
                display: flex;
                align-items: center;
                .icon{
                    position: relative;
                    margin-left: 1rem;
                    width: 2rem;
                    transform: scale(1.5);
                    @include anime(0.2s);
                }
            }
        }
        .button{
            flex: 1;
            width: 25rem;
            display: flex;
            button{
                @include anime(0.2s);
                outline: 0;
                flex: 1;
                border: {
                    width: 0;
                    radius: 0 0 0.5rem 0.5rem;
                }
                background-color: $mainColor;
                font: {
                    family: 'dengxian', Helvetica, Arial, sans-serif;
                    size: 1.5rem;
                };
                letter-spacing: 1rem;
                transform: translateY(2rem);
                opacity: 0;
                filter: blur(0.5rem);
                &.ready:hover{
                    background-color: $brightMainColor;
                    letter-spacing: 0.5rem;
                    cursor: pointer;
                }
                &.ready{
                    transform: translateY(0rem);
                    opacity: 100%;
                    filter: blur(0);
                }

            }
        }
    }

</style>
