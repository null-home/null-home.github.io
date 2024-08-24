function reloadImage(img) {
    
    let request;
    let baseUrl = img.src;
    if(window.XMLHttpRequest)
        request = new XMLHttpRequest();
    else
        request = new ActiveXObject("Microsoft.XMLHTTP");
    for (let index = 2; index <= 4; index++) {
        let checkURl = baseUrl.replace("https://null-library","https://null-library"+index);
        request?.open('GET', checkURl, false);
        request?.send(); 
        if (request.status === 200) {
            img.onerror = null  ;
            let url = new URL(checkURl);
            url.searchParams.set('reload', 'true');
            img.src = url.toString();
            break;
        }
    }
  }