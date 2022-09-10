new Vue ({
    el:'#app',
    data() {
        return {
            name:'amadeep Singh',
            anchor:'https://www.google.com/',
            link:'<a href="https://www.google.com/"> holi <a>',
            callName:'', 
            nombre: "",
            hello:false,
            template:false,

            items:[
                {message:'Hello'},
                {message:'Vue js'},
                {message:'Champ'},
            ],
            person:{
                name:'Amandeep Singh',
                profile: 'Software Developer',
                nickname: 'Aman'
            },
            cars:[
                {id:'sz',name:'Maruti'},
                {id:'hy',name:'hyundai'},
                {id:'ho',name:'honda'},
            ],
            name:{
                firstname:'Amandeep'
            },
            country:[
                {name:'india', flag:true},
                {name:'us', flag:true},
                {name:'bhutan', flag:false}
            ]
        }
    },
    methods: {
        changeName:function(){
            this.name = event.target.value;
        },
        returName:function(){
           return this.name+" "+ this.anchor
        },
        functionName:function(){
            console.log("function")
        },
        activar:function(){
            this.hello = !this.hello;
            this.template = !this.template;
        }
    },
    computed:{
        computedName:function(){
            return this.name;
        }
    },
    watch: {
        nombre(nuevoValor, valorAnterior){
          console.log("El nombre pasó de ser '%s' a '%s'", valorAnterior, nuevoValor);
        }
      }
})