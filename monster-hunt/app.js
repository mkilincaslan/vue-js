new Vue({
    el : "#app",
    data : {
        player_health : 100,
        monster_health : 100,
        game_is_on : false,
        attack_multiple : 10,
        special_attack_multiple : 25,
        monster_attack_multiple : 10,
        first_aid_multiple : 25,
        log_text : {
            attack : "You damaged ",
            special_attack : "SPECIAL ATTACK! You damaged ",
            first_aid : "You used first aid for ",
        },
        logs : []
    },
    methods : {
        start_game : function () {
            this.game_is_on = true;
        },
        situation : function (key) {
            var point = 0;
            if (key === 'attack') {
                point = Math.floor(Math.random() * this.attack_multiple);
                this.monster_health -= point;
                this.add_to_log({ turn : 'player', text : `${this.log_text.attack} (${point}hp) to monster!` });
            } else if (key === 'special') {
                point = Math.floor(Math.random() * this.special_attack_multiple);
                this.monster_health -= point;
                this.add_to_log({ turn : 'player', text : `${this.log_text.special_attack} (${point}hp) to monster!` });
            } else if (key === 'first-aid') {
                point = Math.floor(Math.random() * this.first_aid_multiple);
                this.player_health += point;
                this.add_to_log({ turn : 'player', text : `${this.log_text.first_aid} (${point}hp) to monster!` });
            }
            this.monster_attack();
        },
        // special_attack : function () {
        //     var point = Math.floor(Math.random() * this.special_attack_multiple);
        //     this.monster_health -= point;
        //     this.add_to_log({ turn : 'player', text : `SPECIAL ATTACK! You damaged (${point}hp) to monster!` });
        //     this.monster_attack();
        // },
        // first_aid : function () {
        //     var point = Math.floor(Math.random() * this.first_aid_multiple);
        //     this.player_health += point;
        //     this.add_to_log({ turn : 'player', text : `You used first aid for (${point}hp)!` });
        //     this.monster_attack();
        // },
        surrender : function () {
            this.player_health = 0;
            this.add_to_log({ turn : 'player', text : `SURRENDER!` });
        },
        monster_attack : function () {
            var point = Math.floor(Math.random() * this.monster_attack_multiple);
            this.player_health -= point;
            this.add_to_log({ turn : 'monster', text : `Monster damaged (${point}hp) to you!` });
        },
        add_to_log : function (log) {
            this.logs.push(log);
        }
    },
    watch : {
        player_health : function (value) {
            if (value <= 0) {
                this.player_health = 0;
                if (confirm('You lost game! Play again?')) {
                    this.player_health = 100;
                    this.monster_health = 100;
                    this.logs = [];
                }
            } else if (value >= 100) {
                this.player_health = 100;
            }
        },
        monster_health : function (value) {
            if (value <= 0) {
                this.monster_health = 0;
                if (confirm('You won game! Play again?')) {
                    this.player_health = 100;
                    this.monster_health = 100;
                    this.logs = [];
                }
            }
        }
    },
    computed : {
        player_progress : function () {
            return {
                width : this.player_health + "%"
            };
        },
        monster_progress : function () {
            return {
                width : this.monster_health + "%"
            };
        }
    }
});