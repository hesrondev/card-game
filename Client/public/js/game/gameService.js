app.service('GameService', function ($q, $http) {

    return {

        initGame: function () {
            return {
                players: [{
                        id: 0,
                        name: 'jean',
                        avatar: 'https://api.adorable.io/avatars/136/salut.png',
                        cards: [{
                                id: 10,
                                state: 0,
                                sign: 'H',
                                number: 4,
                                img: '4_coeur.png'
                },
                            {
                                id: 11,
                                state: 0,
                                sign: 'P',
                                number: 4,
                                img: '4_pique.png'
                },
                            {
                                id: 12,
                                state: 0,
                                sign: 'C',
                                number: 4,
                                img: '4_treffle.png'
                },
                            {
                                id: 13,
                                state: 0,
                                sign: 'T',
                                number: 5,
                                img: '5_carreau.png'
                }],
                        state: 1,
                        glassCount: 0
        },
                    {
                        id: 1,
                        name: 'luc',
                        avatar: 'https://api.adorable.io/avatars/136/salut.png',
                        cards: [{
                                id: 2,
                                state: 0,
                                sign: 'H',
                                number: 2,
                                img: '2_coeur.png'
                },
                            {
                                id: 3,
                                state: 0,
                                sign: 'P',
                                number: 2,
                                img: '2_pique.png'
                },
                            {
                                id: 4,
                                state: 0,
                                sign: 'C',
                                number: 2,
                                img: '2_treffle.png'
                },
                            {
                                id: 5,
                                state: 0,
                                sign: 'T',
                                number: 3,
                                img: '3_carreau.png'
                }],
                        state: 1,
                        glassCount: 0
        },
                    {
                        id: 2,
                        name: 'julie',
                        avatar: 'https://api.adorable.io/avatars/136/salut.png',
                        cards: [{
                                id: 6,
                                state: 0,
                                sign: 'H',
                                number: 3,
                                img: '3_coeur.png'
                },
                            {
                                id: 7,
                                state: 0,
                                sign: 'P',
                                number: 3,
                                img: '3_pique.png'
                },
                            {
                                id: 8,
                                state: 0,
                                sign: 'C',
                                number: 3,
                                img: '3_treffle.png'
                },
                            {
                                id: 9,
                                state: 0,
                                sign: 'T',
                                number: 4,
                                img: '4_carreau.png'
                }],
                        state: 1,
                        glassCount: 0
        },
                    {
                        id: 3,
                        name: 'justine',
                        avatar: 'https://api.adorable.io/avatars/136/salut.png',
                        cards: [{
                                id: 14,
                                state: 0,
                                sign: 'H',
                                number: 5,
                                img: '5_coeur.png'
                },
                            {
                                id: 15,
                                state: 0,
                                sign: 'P',
                                number: 5,
                                img: '5_pique.png'
                },
                            {
                                id: 16,
                                state: 0,
                                sign: 'C',
                                number: 5,
                                img: '5_treffle.png'
                },
                            {
                                id: 17,
                                state: 0,
                                sign: 'T',
                                number: 6,
                                img: '6_carreau.png'
                }],
                        state: 1,
                        glassCount: 0
        }],
                centerCards: [{
                        id: 14,
                        state: 0,
                        sign: 'H',
                        number: 5,
                        img: '5_coeur.png'
                },
                    {
                        id: 15,
                        state: 0,
                        sign: 'P',
                        number: 5,
                        img: '5_pique.png'
                },
                    {
                        id: 16,
                        state: 0,
                        sign: 'C',
                        number: 5,
                        img: '5_treffle.png'
                },
                    {
                        id: 17,
                        state: 0,
                        sign: 'T',
                        number: 6,
                        img: '6_carreau.png'
                }, {
                        id: 14,
                        state: 0,
                        sign: 'H',
                        number: 5,
                        img: '5_coeur.png'
                },
                    {
                        id: 15,
                        state: 0,
                        sign: 'P',
                        number: 5,
                        img: '5_pique.png'
                },
                    {
                        id: 16,
                        state: 0,
                        sign: 'C',
                        number: 5,
                        img: '5_treffle.png'
                },
                    {
                        id: 17,
                        state: 0,
                        sign: 'T',
                        number: 6,
                        img: '6_carreau.png'
                }, {
                        id: 14,
                        state: 0,
                        sign: 'H',
                        number: 5,
                        img: '5_coeur.png'
                },
                    {
                        id: 15,
                        state: 0,
                        sign: 'P',
                        number: 5,
                        img: '5_pique.png'
                },
                    {
                        id: 16,
                        state: 0,
                        sign: 'C',
                        number: 5,
                        img: '5_treffle.png'
                },
                    {
                        id: 17,
                        state: 0,
                        sign: 'T',
                        number: 6,
                        img: '6_carreau.png'
                }],
                state: 1
            }

        }
    }

});
