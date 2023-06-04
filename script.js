// =====================Redicrect user after ordering=======================================
let patharr = window.location.pathname.split("/");
patharr.splice(-1);
let path = patharr.join("/");
let host = window.location.protocol + "//" + window.location.host + path;
let redirectValue = document.getElementById("redDir").value;
document.getElementById("redDir").value = `${host}/thanks.html`;


// let pathArr = window.location.pathname.split("/");
// pathArr.splice(-1);
// let path = pathArr.join("/");
// let host = window.location.protocol + "//" + window.location.host + path;

// // تحديد موقع الصفحة الجديدة
// let redirectElement = document.getElementById("redDir");
// let redirectPath = redirectElement.value;
// let redirectUrl = `${host}/${redirectPath}`

// window.location.href = redirectUrl;
