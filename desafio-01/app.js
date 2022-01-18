new Vue ({
    el: '#desafio',
    data: {
        nome: 'Maria Clara Maciel',
        idade: 24,
        image: "https://chamadodefe.com.br/wp-content/uploads/2021/12/CELESTITA-2.jpeg"
    },
    methods: {
        idadeMult() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})