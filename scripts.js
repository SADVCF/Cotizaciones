async function cargar(){
    await cotizaciones();
    tituloLogo();
    cargaP();
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
    logo.src="cotizaciones.jpg";

}

function cargaP(){
    let euro=document.getElementById("usd-euro");
    euro.innerHTML="USD a EUR: "+dolarEuro;
    let ars=document.getElementById("euro-dolar");
    ars.innerHTML="EUR a USD: "+euroDolar;
    let bitcoin=document.getElementById("bitcoin-usd");
    bitcoin.innerHTML="BTC a USD: "+dolarBitcoin;

}