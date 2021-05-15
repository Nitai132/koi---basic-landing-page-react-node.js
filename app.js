const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); //שימוש בג'ייסון
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public", "index.html"));
  });

const init = async () => { //פונקצייה חכמה שמוודאת התחברות לדאטא בייס לפני הפעלת השרת
    try {
        app.listen(process.env.PORT || 4422, (err) => { //הפעלת השרת
            console.log('server is up');
        });
    } catch (err) { //במידה והתחברות נכשלה
        console.log(err);
    };
};

init(); //קריאה לפונקציה שמתחברת לדאטא בייס בעת הפעלת השרת
