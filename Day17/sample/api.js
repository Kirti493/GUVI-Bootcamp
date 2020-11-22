const rooms = [{
    roomId: 1,
    roomName: "Raman",
    roomAminities: "AC, Projector",
    roomCapacity: 50,
    pricePerHour: 5000
},

{
     roomId: 2,
    roomName: "Sri",
    roomAminities: "AC, Projector",
    roomCapacity: 100,
    pricePerHour: 15000
},];

const users = [{
    customerName: "Ravi",
    date: "20-11-2020",
    startTime: "09:00",
    endTime: "12:30",
    roomId: 1
},
{
    customerName: "Sai",
    date: "25-11-2020",
    startTime: "10:00",
    endTime: "13:20",
    roomId: 2
},
];

// let bookedRooms = [];
// let bookedUsers = [];

const bookedDate = users.filter(user => user.date === "20-11-2020");
console.log(bookedDate);
