class Formatter {
  //add static methods here
  static capitalize (str){
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize (str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(str){
    let arr = str.split(" ")
    let result = ""
    console.log(arr)
    arr.forEach(str => {
      if(str !== "a" && str !== "the" && str !== "an" && str !== "but" && str !== "of" && str !=="and" && str !== "for" && str !=="at"  && str !== "by" && str !== "from"){
      let cap = str[0].toUpperCase() + str.slice(1)
      result = result + cap + " "
      return result
      } else {
        result = result + str + " "
        return result
      }
    })
    result = result.trim()
    return result[0].toUpperCase() + result.slice(1)
    
  }
}