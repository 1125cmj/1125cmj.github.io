<template>
	<div class="wrapper">
        <div class="list" :style="{left:id*-100 + '%'}">
            <div v-for="(i,$index) in arr" class="img" :style="{width:100/arr.length + '%'}">
                <img :src="i">
            </div>
        </div>
        <div class="circles">
            <div v-for="(i,$index) in arr" class="circle" @click="id=$index" :style="{backgroundColor:id==$index?'red':'white'}"></div>
        </div>
        <div class="next" @click="id-1<=-1?id=arr.length-1:id--">&lt;</div>
        <div class="prev" @click="id+1>=arr.length?id=0:id++">&gt;</div>
    </div>
</template>

<script>
	import alee from './a.vue'
	export default {
		data() {
			return {
				id: 0,
				arr: ['http://img3.imgtn.bdimg.com/it/u=2326788584,2231322671&fm=26&gp=0.jpg',
					'http://img5.imgtn.bdimg.com/it/u=545298537,223908848&fm=26&gp=0.jpg',
					'http://img1.imgtn.bdimg.com/it/u=601390458,2810839873&fm=26&gp=0.jpg',
					'http://img2.imgtn.bdimg.com/it/u=1302904146,172724840&fm=26&gp=0.jpg',
					'http://img4.imgtn.bdimg.com/it/u=4264390411,3356464561&fm=26&gp=0.jpg'
				]
			}
		},
		methods:{
            plus(){
                this.id++;
                if(this.id==this.arr.length)this.id=0;
            },
            jian(){
                this.id--;
                if(this.id==-1)this.id=this.arr.length-1;
            }
        },
		components: {
			alee
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	
        *{margin: 0;padding: 0;list-style-type: none;}
        body,html{
            width: 100%;
            height: 100%;
        }
        #box{
            width: 100%;
            height: 100%;
            /*background-color: #ccc;*/
            padding-top: 100px;
        }
        .wrapper{
            width: 600px;
            height: 300px;
            background-color: #c66;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
        }
        .list{
            width: 500%;
            height: 300px;
            position: absolute;
            left: 0;
            top: 0;
        }
        .img{
            height: 400px;
            float: left;
        }
        .img img{
            width: 600px;
            height: 300px;
        }
        .circles{
            width: 100px;
            height: 20px;
            position: absolute;
            left: 50%;
            bottom: 0px;
            margin-left: -50px;
        }
        .circle{
            width: 10px;
            height: 10px;
            margin: 5px;
            float: left;
            border-radius: 50%;
            cursor: pointer;
        }
        .next{
            width: 50px;
            height: 50px;
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -25px;
            color: orangered;
            line-height: 50px;
            text-align: center;
            font-size: 40px;
            cursor: pointer;
            user-select: none;
        }
        .prev{
            width: 50px;
            height: 50px;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -25px;
            color: orangered;
            line-height: 50px;
            text-align: center;
            font-size: 40px;
            cursor: pointer;
            user-select: none;
        }
</style>