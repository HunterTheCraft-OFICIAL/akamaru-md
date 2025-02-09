console.log("Iniciando Testes…");

try {
  console.log("Verificação #01");

  let baileys, asyncLock, axios, cfonts, cheerio, colors, escapeStringRegexp, fakeUseragent, fluentFfmpeg, fsExtra, jsdom, linkifyjs, lodash, lzString, momentTimezone, multistream, natural, nodeFetch, nodeWebpmux, qrcodeTerminal, request, sharp, sqlite, sqlite3;

  try {
    console.log("Testando a Biblioteca @whiskeysockets/baileys");
    baileys = require('@whiskeysockets/baileys');
    console.log("@whiskeysockets/baileys carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar @whiskeysockets/baileys:", erro);
  }

  console.log("Verificação #02");

  try {
    console.log("Testando a Biblioteca async-lock");
    asyncLock = require('async-lock');
    console.log("async-lock carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar async-lock:", erro);
  }

  console.log("Verificação #03");

  try {
    console.log("Testando a Biblioteca axios");
    axios = require('axios');
    console.log("axios carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar axios:", erro);
  }

  console.log("Verificação #04");

  try {
    console.log("Testando a Biblioteca cfonts");
    cfonts = require('cfonts');
    console.log("cfonts carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar cfonts:", erro);
  }

  console.log("Verificação #05");

  try {
    console.log("Testando a Biblioteca cheerio");
    cheerio = require('cheerio');
    console.log("cheerio carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar cheerio:", erro);
  }

  console.log("Verificação #06");

  try {
    console.log("Testando a Biblioteca colors");
    colors = require('colors');
    console.log("colors carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar colors:", erro);
  }

  console.log("Verificação #07");

  try {
    console.log("Testando a Biblioteca escape-string-regexp");
    //escapeStringRegexp = require('escape-string-regexp');
    
    // Corrigido para import
    //escapeStringRegexp = await import('escape-string-regexp');
    escapeStringRegexp = import('escape-string-regexp');
    console.log("escape-string-regexp carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar escape-string-regexp:", erro);
  }

  console.log("Verificação #08");

  try {
    console.log("Testando a Biblioteca fake-useragent");
    fakeUseragent = require('fake-useragent');
    console.log("fake-useragent carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar fake-useragent:", erro);
  }

  console.log("Verificação #09");

  try {
    console.log("Testando a Biblioteca fluent-ffmpeg");
    fluentFfmpeg = require('fluent-ffmpeg');
    console.log("fluent-ffmpeg carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar fluent-ffmpeg:", erro);
  }

  console.log("Verificação #10");

  try {
    console.log("Testando a Biblioteca fs-extra");
    fsExtra = require('fs-extra');
    console.log("fs-extra carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar fs-extra:", erro);
  }

  console.log("Verificação #11");

  try {
    console.log("Testando a Biblioteca jsdom");
    jsdom = require('jsdom');
    console.log("jsdom carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar jsdom:", erro);
  }

  console.log("Verificação #12");

  try {
    console.log("Testando a Biblioteca linkifyjs");
    linkifyjs = require('linkifyjs');
    console.log("linkifyjs carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar linkifyjs:", erro);
  }

  console.log("Verificação #13");

  try {
    console.log("Testando a Biblioteca lodash");
    lodash = require('lodash');
    console.log("lodash carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar lodash:", erro);
  }

  console.log("Verificação #14");

  try {
    console.log("Testando a Biblioteca lz-string");
    lzString = require('lz-string');
    console.log("lz-string carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar lz-string:", erro);
  }

  console.log("Verificação #15");

  try {
    console.log("Testando a Biblioteca moment-timezone");
    momentTimezone = require('moment-timezone');
    console.log("moment-timezone carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar moment-timezone:", erro);
  }

  console.log("Verificação #16");

  try {
    console.log("Testando a Biblioteca multistream");
    multistream = require('multistream');
    console.log("multistream carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar multistream:", erro);
  }

  console.log("Verificação #17");

  try {
    console.log("Testando a Biblioteca natural");
    natural = require('natural');
    console.log("natural carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar natural:", erro);
  }

  console.log("Verificação #18");

  try {
    console.log("Testando a Biblioteca node-fetch");
    
    // Corrigido para import
    //nodeFetch = await import('node-fetch');
    nodeFetch = import('node-fetch');
    //nodeFetch = require('node-fetch');
    console.log("node-fetch carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar node-fetch:", erro);
  }

  console.log("Verificação #19");

  try {
    console.log("Testando a Biblioteca node-webpmux");
    nodeWebpmux = require('node-webpmux');
    console.log("node-webpmux carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar node-webpmux:", erro);
  }

  console.log("Verificação #20");

  try {
    console.log("Testando a Biblioteca qrcode-terminal");
    qrcodeTerminal = require('qrcode-terminal');
    console.log("qrcode-terminal carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar qrcode-terminal:", erro);
  }

  console.log("Verificação #21");

  try {
    console.log("Testando a Biblioteca request");
    request = require('request');
    console.log("request carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar request:", erro);
  }

  console.log("Verificação #22");

  try {
    console.log("Testando a Biblioteca sharp");
    sharp = require('sharp');
    console.log("sharp carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar sharp:", erro);
  }

  console.log("Verificação #23");

  try {
    console.log("Testando a Biblioteca sqlite");
    sqlite = require('sqlite');
    console.log("sqlite carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar sqlite:", erro);
  }

  console.log("Verificação #24");

  try {
    console.log("Testando a Biblioteca sqlite3");
    sqlite3 = require('sqlite3');
    console.log("sqlite3 carregado com sucesso!");
  } catch (erro) {
    console.error("Falha ao carregar sqlite3:", erro);
  }

console.log("Verificação Terminada…");

} catch (erro) {
 console.error("Falha nas Verificações");
 }

console.log("Sucesso na Verificação…");
console.log("Desligando…");

//Erros na 23 e 24 no Termux arm64 Android 