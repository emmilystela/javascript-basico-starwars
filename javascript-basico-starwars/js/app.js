

const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        nome: 'C3pO',
        avatar: 'images/c3po.png'
    }
]

const App = new Vue({
    el: '#app', //objeto que representa o elemento principal da aplicação
    data: { // onde armazena os dados que podem ser exibidos na página
        title: 'Star Wars Lego',
        userName: 'Sheldon',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`Personagem ${userName} recebeu um like`) //interpolação de string, usada com apóstrofo
        },
        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },
        search() {

            if (this.searchName === '') {
                return alert('O campo de busca é obrigatorio')
            }

            const list = this.characters = LIST //carrega todos os personagens

            const result = list.filter(item => { //filtro pra retornar o personagem que tem o valor que foi pesquisado no campo de busca
                return item.nome === this.searchName
            })

            if (result.length <= 0) {
                alert('Nenhum registro encontrado')
            } else {
                this.characters = result
            }
        }
    }
})
