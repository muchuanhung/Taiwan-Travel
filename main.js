
axios.get(
   'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24top=30&%24format=JSON',
   {
      headers: getAuthorizationHeader()
   }
)
.then(function (response) {
  document.querySelector('body').textContent=JSON.stringify(response.data);
})
.catch(function (error) {
  console.log(error);
}); 

function getAuthorizationHeader() {
//  Input ID、KEY start
    let AppID = 'd816bc03424e4029bf6695a221889a9f';
    let AppKey = 'u9GvfMiXltI8H5CsAU8MNU762l4';
//  Input ID、KEY End
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}

