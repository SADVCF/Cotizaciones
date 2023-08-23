async function cargar(){
    tituloLogo();
    await delay(2500);
    await cotizaciones();
    cargaP();
    ocultarCargando();


}

async function cotizaciones(){
    
    let usdEuro=await fetch("https://open.er-api.com/v6/latest/USD");
    let dolarEuroResp=await usdEuro.json();
    dolarEuro=dolarEuroResp.rates.EUR;

    let euroUsd=await fetch("https://open.er-api.com/v6/latest/EUR");
    let euroDolarResp=await euroUsd.json();
    euroDolar=euroDolarResp.rates.USD;

    let bitcoinUsd=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    let dolarBitcoinResp=await bitcoinUsd.json();
    dolarBitcoin=dolarBitcoinResp.bpi.USD.rate_float;

}

function tituloLogo(){
    let titulo=document.getElementsByTagName("h1")[0];
    titulo.innerHTML="Cotizaciones";
    let logo=document.getElementsByTagName("img")[0];
    logo.setAttribute("src","cotizaciones.jpg");
    let cargando=document.getElementById("cargando");
    cargando.setAttribute("src","loading.gif");
    cargando.style.visibility="visible";

}

function cargaP(){
    document.getElementById("usd-euro").append('USD a EUR: '+dolarEuro);
    document.getElementById("euro-dolar").append("EUR a USD: "+euroDolar);
    document.getElementById("bitcoin-usd").append("BTC a USD: "+dolarBitcoin);

}

function ocultarCargando(){
    document.getElementById("cargando").style.visibility="hidden";
}

function delay(ms){
    return new Promise(function(res){
        setTimeout(res,ms);
    })
}

