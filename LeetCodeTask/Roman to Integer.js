var romanToInt = function(s) {
  s = s.split('')
  for(i in s) {
    switch(s[i])  {
      case 'M':
        s[i] = 1000
            break;
      case 'D':
        s[i] = 500
             break;
      case 'C':
        s[i] = 100
             break;
      case 'L':
        s[i] = 50
             break;
      case 'X':
        s[i] = 10
             break;
      case 'V':
        s[i] = 5
             break;
      case 'I':
        s[i] = 1
             break;
    }
  }
  for(let i = 0; i < s.length - 1; i++){
      if(s[i] < s[i +1]) {
            s[i] = -s[i]

      }
}
    return s.map(i=>x+=i, x=0).reverse()[0]
};