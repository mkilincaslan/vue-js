<template>
    <div class="game-area">
        <h3 class="title">Where is <span>Pogaca</span> <strong>?</strong> </h3>
        <h4 class="description">After the select an opened card click the closed card...</h4>
        <div class="container">
            <app-card
                :class="{ 'shadow' : selectedCard === card.id }"
                @click.native="selectedCard = card.id"
                v-for="card in cards" 
                v-bind:key="card.id" 
                :card="card" 
            />
        </div>
        <div class="container">
            <app-default-card />
        </div>
    </div>
</template>

<script>
    import Card from './Card';
    import DefaultCard from "./DefaultCard";

    export default {
        components: {
            appCard: Card,
            appDefaultCard: DefaultCard,
        },
        data() {
            return {
                selectedCard: null,
                answerCard: {},
                cards: [
                    {id: 1, component: 'app-cards', image: '/src/assets/card-1.jpg'},
                    {id: 2, component: 'app-cards', image: '/src/assets/card-2.jpg'},
                    {id: 3, component: 'app-cards', image: '/src/assets/card-3.jpg'},
                    {id: 4, component: 'app-cards', image: '/src/assets/card-4.jpg'},
                    {id: 5, component: 'app-cards', image: '/src/assets/card-5.jpg'},
                ],
            }
        },
        created() {
            let answerCard = this.cards[Math.ceil(Math.random() * this.cards.length) - 1];
            this.answerCard = answerCard;
        }
    }
</script>

<style scoped>
    .title {
        text-align: center;
        color: rgb(128, 97, 97);
    }
    .title span {
        color: red;
    }
    .title strong {
        color: rgb(75, 202, 149);
    }
    .description {
        color: rgb(47, 179, 255);
        text-align: center;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }

    .shadow {
        box-shadow: 0px 5px 48px #30969f !important;
        transition: box-shadow .5s;
    }
</style>