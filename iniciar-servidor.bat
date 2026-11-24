@echo off
chcp 65001 >nul
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"
echo ==================================================
echo   El Plan Diario - Servidor Local
echo   Direccion: http://127.0.0.1:8080
echo   (Deja esta ventana abierta mientras uses la web)
echo ==================================================
start "" "http://127.0.0.1:8080"
node -e "const http=require('http'),fs=require('fs'),path=require('path'),root=process.cwd(),mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png'};http.createServer((req,res)=>{let p='/';try{p=decodeURIComponent((req.url||'/').split('?')[0]);}catch{res.writeHead(400);return res.end('Bad request');}const rel=p==='/'?'index.html':p.replace(/^\/+/,'');const file=path.resolve(root,rel);if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found');}res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(data);});}).on('error',(e)=>{console.error(e.code==='EADDRINUSE'?'El servidor ya estaba activo en http://127.0.0.1:8080':e.message);}).listen(8080,'127.0.0.1',()=>console.log('Servidor listo en http://127.0.0.1:8080'));"
pause
