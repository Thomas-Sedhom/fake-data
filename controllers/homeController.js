var courses = [
    {
    title: "Event Driven Cakes",
    cost: 50
    },
    {
    title: "Asynchronous Artichoke",
    cost: 25
    },
    {
    title: "Object Oriented Orange Juice",
    cost: 10
    }
];

module.exports = {

    courses : (req, res) => {

        res.render("courses", {courses});
    },

    contact : (req, res) => {

        res.render("contact");
    },

    thanks : (req, res) => {

        res.render("thanks");
    },
}

