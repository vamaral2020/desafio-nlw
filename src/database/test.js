const Database = require('./db');

Database.then(async db=>{
    //inserir dados na tabela
   /* await db.run(`
        INSERT INTO orphanages(
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_wewkends 

        )VALUES(
            "10.1873042",
            "-48.325565",
            "Lar dos meninos",
            "Presta assistencia a criaças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            "63992304526",
            "https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
            "Horário de visita das 8h até 18h",
            "1"
        );

    `)

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)*/

    //selecionar pelo id

    const orphanages = await db.all('SELECT * FROM orphanages WHERE id="1" ')
    console.log(orphanages)

})