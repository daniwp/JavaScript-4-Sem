
var supertest = require("supertest");
var expect = require('chai').expect;
var api = supertest("http://localhost:3000");
let fetch = require("node-fetch");
var ObjectID = require("mongodb").ObjectID;
var URL = "http://localhost:3000/api/jokes/";

var joke1 = {
    "_id": ObjectID("5063114bd386d8fadbd6b004"),
    "joke": "Joke-1",
    "category": ["short", "alcohol", "quote"],
    "reference": { "author": "Someone", "link": "qqq" },
    "lastEdited": new Date()
};

var joke2 = {
    "_id": ObjectID("5063114bd386d8fadbd6b005"),
    "joke": "Joke-2",
    "category": ["short", "joke"],
    "reference": {
        "author": "Unknown",
        link: "aaa"
    },
    "lastEdited": new Date()
}

var jokes = [joke1, joke2];



describe('Jokes API', function () {
    beforeEach(function (done) {
        api.delete("/api/jokes")
            .expect(200);
        api.post("/api/jokes").send(jokes)
            .expect(200, done);
    });


    describe('GET /api/jokes', () => {
        it('Should return a 200 response.', function (done) {
            return api.get('/api/jokes')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body[0]._id, "5063114bd386d8fadbd6b005");
                    expect(res.body[1]._id, "5063114bd386d8fadbd6b004");
                    expect(res.body).to.have.lengthOf(2);
                    done();
                })
        });
    });

    describe("DELETE:  /api/jokes/", function () {
        it("should Delete Joke-1", function (done) {
            api.delete("/api/jokes");
            fetch(URL + "/5063114bd386d8fadbd6b004", { method: 'delete' }).then(function (response) {
                //Verify that it was actually removed
                fetch(URL, { method: 'get' }).then(function (response) {
                    return response.json();
                }).then(res => {
                    expect(res.length).to.be.equal(1);
                    expect(204);
                    done();
                });
            });
        });
    });

    describe('GET:  /api/jokes/:id', () => {
        it('should find joke-1', function (done) {
            return api.get('/api/jokes' + "/5063114bd386d8fadbd6b004")
                .expect(200)
                .end(function (err, res) {
                    expect(res.body._id).to.be.equal("5063114bd386d8fadbd6b004");
                    done();
                });
        });
    });

    describe("POST:  /api/jokes/", () => {
        var newJoke = {
            joke: "abcde",
            category: ["general"],
            reference: { "author": "Someone", "link": "NADA" }
        };

        it("should Add a new joke", function (done) {
            fetch("http://localhost:3000/api/jokes/", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newJoke)
            }
            ).then(function (response) {
                expect(response.status).to.be.equal(200);
                return response.json();
            }).then(res => {
                expect(res).to.have.property("_id").and.not.equal(null);
                expect(res.joke).to.be.equal("abcde");
                done();
            }).catch((err) => {
                done(err);
            });
        });
    });
    describe("PUT:  /api/jokes/", function () {
        let {joke, category, reference} = joke1;
        let jokeToEdit = { joke, category, reference };
        it("should Edit Joke-1", function (done) {
            fetch(URL + "/5063114bd386d8fadbd6b004", {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jokeToEdit)
            }).then(function (response) {
                return response.json();
            }).then(res => {
                expect(res).to.have.property("_id").and.not.equal(null);
                expect(res.joke).to.be.equal("Joke-1");
                expect(res.lastEdited).to.be.not.equal(joke1.lastEdited);
                done();
            });
        });
    });

    

    describe("GET:  /nonExistingRoute", function () {
        it("should get 404, Non Existing", function (done) {
            fetch("http://localhost:3000" + "/nonExistingRoute", { method: 'get' }).then(function (response) {
                //console.log(response)
                expect(response.status).to.be.equal(404);
                done();
            })
        })
    });
});