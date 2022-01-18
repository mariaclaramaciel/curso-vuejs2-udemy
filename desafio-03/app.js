new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: ' '
    },
    watch: {
        valor() {
            if(this.valor === 37) {
                return this.resultado="Valor Igual!"
            } else {
                return this.resultado="Valor Diferente!"
            }
        },
        resultado() {
            setTimeout(() => { 
                this.valor = 0
        }, 5000)
       }
    }
});