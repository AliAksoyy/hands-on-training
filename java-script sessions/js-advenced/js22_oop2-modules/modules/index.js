console.log("JS Modules is running");

// import karesi, {WHW, WORKING_HOURS_WEEK, counter, dec, inc, sum}  from "./mymodule.js"
import  {default as karesi, WHW, WORKING_HOURS_WEEK, counter, dec, inc, sum}  from "./mymodule.js"

// console.log(WHW)
// console.log(WORKING_HOURS_WEEK)


inc(4)
inc(6)
dec()

console.log(dec())
inc()
console.log(counter)
// counter = 29 //! sabit gibi davranır
inc()
console.log(counter)