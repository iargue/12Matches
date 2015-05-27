var resources = {
    money: {
        amount: 0,
        requires: {},
        sellPrice: 0
    },
    wood: {
        amount: 0,
        requires: {},
        sellPrice : 0.01
    },
    phosphorus: {
        amount: 0,
        requires: {},
        sellPrice : 0.02
    },
    cardboard: {
        amount: 0,
        requires: {},
        sellPrice : 0.05
    },
    box: {
        amount: 0,
        requires: {
            cardboard: 1
        },
        sellPrice : 0.10
    },
    match: {
        amount: 0,
        requires: {
            wood: 0.2,
            Phosphorus: 0.1,
        },
        sellPrice: 0.4
    },
    matchBox: {
        amount: 0,
        requires: {
            match: 12,
            box: 1,
        },
        sellPrice: 1
    }
}

function createResourceBar() {
	
}