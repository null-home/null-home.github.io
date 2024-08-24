function reloadImage(img) {
    let baseUrl = "";
    let arr = img?.src?.split("/n/u/l/l/");
    if (arr?.length > 0) {
        baseUrl = arr[arr?.length - 1];
        if (baseUrl?.length > 0) {
            let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            let arr = ['','2','3','4'];
            for (let index = 0; index < arr?.length; index++) {
                let host = arr[index];
                let checkURl = "https://null-library"+host+".github.io/n/u/l/l/"+baseUrl;
                request?.open('GET', checkURl, false);
                request?.send(); 
                if (request.status === 200) {
                    let url = new URL(checkURl);
                    url.searchParams.set('reload', 'true');
                    img.src = url.toString();
                    break;

                }
            }
        }
    }    
    img.onerror = null;

}