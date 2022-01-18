- Styling with Vue

#Sintaxe de Array

Podemos passar um Array para v-bind:class para aplicar uma lista de classes:
<div v-bind:class="[activeClass, errorClass]"></div>

data: {
    activeClass: 'active',
    errorClass: 'text-danger'
}
QUE IRÁ RENDERIZAR: <div class="active text-danger"></div>

Se você preferir também alternar entre uma classe na lista condicionalmente, use uma expressão ternária:

<div v-bind:class="[isActive ? activeClass : '', errorClass ]"></div>

No entanto, isso pode ser um tanto prolixo se você tiver várias classes condicionais. Por isso também é possível usar a sintaxe de objeto dentro da sintaxe de Array:
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
--------------------------------------------------------------------------------------

#Style Inline 

O vue possui um auxiliar para o atribulo style, podendo especificar como objetos,
você pode usar camelCase ou kebab-case para o nome da propriedade CSS:

<div v-bind:style=" color: activeColor, fontSize: fontSize + 'px' " ></div>

data: {
    activecolor: 'red',
    fontSize: 30
}

É uma boa ideia vincular um objeto diretamente no template para que fique mais limpo:

data: {
    styleObject: {
        color: 'red',
        fontSize: '30px
    }
}
-------------------------------------------------------------------------------------
#Sintaxe de Objetos 
Podemos passar um objeto para v-bind:class para alternar classes dinamicamente:

<div v-bind:class="{ active: isActive }"></div> Só acontecerar se isActive for true

--
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div> Usando uma class normal com uma diretiva

data: {
  isActive: true,
  hasError: false
}

Que ira redenrizar:

<div class="static active"></div>

Quando isActive ou hasError mudar, a lista de classes será atualizada correspondentemente. Por exemplo, se hasError é true, a lista de classes será "static active text-danger".

--

Redenrização de Listas 

A


