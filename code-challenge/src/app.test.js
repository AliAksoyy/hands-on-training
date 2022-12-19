
const {fah,fibo,total,cel} =require("./app.js")


describe("total", ()=> {
   it("should exist", ()=> {
    expect(total).toBeDefined()
   })
   it("should return a number", ()=> {
    expect(total(100,0.20)).toBe(120)
   })
   it("should default", ()=> {
    expect(total(200)).toBe(236)
   })
    
})
describe("cel",()=> {

})
describe("fah",()=> {

})
describe("fibo",()=> {

})

