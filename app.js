const express = require('express');
const os = require('os');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const serverHostname = os.hostname();

    res.send(`
        <!DOCTYPE html>
        <html lang="uz">
        <head>
            <meta charset="UTF-8">
            <title>WearFlow Logistics ERP</title>
            <style>
                body { font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f0f2f5; margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
                .card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); text-align: center; max-width: 500px; border-top: 8px solid #0066cc; }
                h1 { color: #0066cc; margin-bottom: 10px; font-size: 24px; }
                p { color: #4e5d6c; font-size: 16px; }
                .badge { background-color: #e1f0ff; color: #0066cc; padding: 8px 16px; border-radius: 20px; font-weight: bold; display: inline-block; margin: 15px 0; font-family: monospace; }
                .status { color: #2ecc71; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>WearFlow Logistics</h1>
                <h3>Bulutli ERP Infratuzilmasi (Prototype)</h3>
                <p>Ushbu modul AWS VPC Private Subnet ichida xavfsiz muhitda ishlamoqda.</p>
                <div class="badge">Server Host: ${serverHostname}</div>
                <p>Tizim holati: <span class="status">● Faol (Active)</span></p>
                <small style="color: #95a5a6;">BTEC Unit 6: Cloud Networking Project</small>
            </div>
        </body>
        </html>
    `);
});

app.get('/stress', (req, res) => {
    console.log(`[STRESS TEST] ${os.hostname()} serverida CPU yuklama boshlandi...`);
    let x = 0.0001;
    for (let i = 0; i < 10000000; i++) {
        x = x + Math.sqrt(x) * Math.sin(i);
    }
    res.send(`[OK] Server yuklama qabul qildi. Ishlayotgan xost: ${os.hostname()}\n`);
});

app.listen(PORT, () => {
    console.log(`WearFlow ERP serveri ${PORT}-portda muvaffaqiyatli yoqildi.`);
});