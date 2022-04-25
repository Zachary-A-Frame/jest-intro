const { MarkovMachine } = require("./markov")

describe("makeText function", function () {
    let mm = new MarkovMachine("cat");
    test("makeText should return a text value", function () {
        let text = mm.makeText()
        expect(text).toEqual("cat")
    })

    test("makeText should return a length greater than 0", function () {
        let mm = new MarkovMachine("cat in the hat in the cat in the hat");

        let text = mm.makeText()
        expect(text.length).toBeGreaterThan(0)
    })

    test("makeText should return a string", function () {
        let mm = new MarkovMachine("cat")

        let text = mm.makeText()
        expect(text).toEqual(expect.stringContaining("cat"))
    })
})

describe("choice function", function () {
    test("Choice should return a string value", function () {
        function choice(ar) {
            return ar[Math.floor(Math.random() * ar.length)]
        }
        let text = choice(["hat"])
        expect(text).toEqual("hat")
    })
})

