// 5kyu - Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// Sample Tests:
// describe("Tests", () => {
//   it("test", () => {

// Test.assertEquals(domainName("http://google.com"), "google");
// Test.assertEquals(domainName("http://google.co.jp"), "google");
// Test.assertEquals(domainName("www.xakep.ru"), "xakep");
// Test.assertEquals(domainName("https://youtube.com"), "youtube");
// });
// });

function domainName(url) {
  return url
    .replace("http://", "") //o replace troca o primeiro parâmetro pelo segundo, ou seja, tira o http:// e substitui por nada.
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0]; //quero a primeira palavra (índice 0), depois dessas que eu tirei acima.
}

//OU

function domainName(url) {
  let clearLink = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "");
  return clearLink.slice(0, clearLink.indexOf("."));
}

//OU

function domainName(url) {
  if (url.indexOf("www") !== -1) return url.split(".")[1].split(".")[0]; //(url.indexOf("www") > -1): também funciona
  if (url.indexOf("//") !== -1) return url.split("//")[1].split(".")[0];
  return url.split(".")[0];
}

//OU

function domainName(url) {
  return url.replace(/.+\/\/|www.|\..+/g, "");
}
