db.transport.insertMany([
    {
        _id: 501,
        type: "автобус",
        brand: "Mercedes",
        seats: 50,
        buyDate: new Date("2005-03-11"),
        driverID: [
            18,
            17
        ],
        staffID: [
            15,
            16
        ]
    
    },
    {
        _id: 502,
        type: "автобус",
        brand: "ПАЗ",
        seats: 50,
        buyDate: new Date("2013-09-23"),
        driverID: [
            18,
            19
        ],
        staffID: [
            15,
            11
        ]
    
    },
    {
        _id: 503,
        type: "автобус",
        brand: "Камаз",
        seats: 50,
        buyDate: new Date("2021-03-16"),
        driverID: [
            20,
            21
        ],
        staffID: [
            15,
            12
        ]
    
    },
    {
        _id: 504,
        type: "автобус",
        brand: "Камаз",
        seats: 50,
        buyDate: new Date("2021-03-19"),
        driverID: [
            18,
            20
        ],
        staffID: [
            12,
            16
        ]
    
    },
    {
        _id: 505,
        type: "такси",
        brand: "Волга",
        seats: 4,
        buyDate: new Date("2015-07-15"),
        driverID: [
            21,
            22
        ],
        staffID: [
            15
        ]
    
    },
    {
        _id: 506,
        type: "грузовик",
        brand: "Камаз",
        carrying: 14,
        buyDate: new Date("2003-04-02"),
        driverID: [
            18,
            20
        ],
        staffID: [
            15,
            12
        ]
    
    },
    {
        _id: 507,
        type: "грузовик",
        brand: "Урал",
        carrying: 20,
        buyDate: new Date("2000-02-13"),
        driverID: [
            18,
            21
        ],
        staffID: [
            14,
            16
        ]
    
    },
    {
        _id: 508,
        type: "автобус",
        brand: "ПАЗ",
        seats: 30,
        buyDate: new Date("1999-03-06"),
        utilizationDate: new Date("2010-09-20"),
        driverID: [
            18,
            20
        ],
        staffID: [
            11,
            16
        ]
    
    },
    {
        _id: 509,
        type: "автобус",
        brand: "Икарус",
        seats: 60,
        buyDate: new Date("1985-06-10"),
        utilizationDate: new Date("2006-04-15"),
        driverID: [
            18,
            20
        ],
        staffID: [
            14,
            12
        ]
    }])