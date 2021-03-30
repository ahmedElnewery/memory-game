function setCookie(key, value, months) {
    var d = new Date();
    d.setMonth(d.getMonth() + months);
  
    if (key && value) {
      if (months) {
        
        document.cookie = key + "=" + value + ";" + "expires=" + d;;
     
      } else {
        document.cookie = key + "=" + value + ";";
  
      }
    }
  }
  
  function getAllCookies() {
    var allCookiesString = document.cookie;
    if (allCookiesString) {
      var arr = allCookiesString.split(";");
      var key, value;
      var associativeArray = new Array();
      for (var i = 0; i < arr.length; i++) {
        key = arr[i].split("=")[0].trim();
        value = arr[i].split("=")[1].trim();
        associativeArray[key] = value;
      }
  
      return associativeArray;
    } else {
      return [];
    }
  }
  function getCookie(cookieName) {
    var allCookies = getAllCookies();
    if (hasCookie(cookieName)) {
      return allCookies[cookieName];
    } else {
      return undefined;
    }
  }
  
  function hasCookie(cookieName) {
    var allCookies = getAllCookies();
    var allKeys = Object.keys(allCookies);
    return allKeys.includes(cookieName);
  }
  
  function deleteCookie(cookieName) {
      var oldDate = new Date(1990,11)
     if(hasCookie(cookieName)){
      setCookie(cookieName,"",oldDate)
  
     } else {
      alert( cookieName+ " is not in the list")
     }
  }
  
  