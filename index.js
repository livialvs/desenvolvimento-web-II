(async () => {
    const database = require('./db');
    const Cantor = require('./cantor');
    const Album = require('./album');

    const resultado = await database.sync();

    // CREATE CANTOR

    const createCantor = await Cantor.create({
        nome: 'Taylor Swift',
        generoMusical: 'Pop',
        dataNascimento: '1989-12-13',
    })

    const createCantor2 = await Cantor.create({
        nome: 'Lana Del Rey',
        generoMusical: 'Pop indie',
        dataNascimento: '1985-06-21',
    })

    // READ CANTOR

    const readCantores = await Cantor.findAll();
    console.log(readCantores);

    const readCantor = await Cantor.findByPk(1)
    console.log(readCantor);

    const readCantor2 = await Cantor.findByPk(2)
    console.log(readCantor2);

    // UPDATE CANTOR 

    const updateCantor = await Cantor.findByPk(1);

    updateCantor.generoMusical = 'Folk';

    const resultadoSave = await updateCantor.save();
    console.log(resultadoSave)


    const updateCantor2 = await Cantor.findByPk(2);

    updateCantor2.generoMusical = 'Alternativo';

    const resultadoSave2 = await updateCantor2.save();
    console.log(resultadoSave2)

    // DELETE CANTOR

    const deleteCantor = await Cantor.findByPk(2);
    deleteCantor.destroy();

    // CREATE ALBUM

    const createAlbum = await Album.create({
        titulo: 'Folklore',
        anoLancamento: 2020,
        cantorId: 1,
    })

    const createAlbum2 = await Album.create({
        titulo: 'Midnights',
        anoLancamento: 2022,
        cantorId: 1,
    })

    // READ ALBUM 

    const readAlbuns = await Album.findAll();
    console.log(readAlbuns);

    const readAlbum = await Album.findByPk(1)
    console.log(readAlbum);

    const readAlbum2 = await Album.findByPk(2)
    console.log(readAlbum2);

    // UPDATE ALBUM

    const updateAlbum = await Album.findByPk(1);

    updateAlbum.titulo = 'Evermore';

    const resultadoSave3 = await updateAlbum.save();
    console.log(resultadoSave3)

    // DELETE ALBUM

    const deleteAlbum = await Album.findByPk(2);
    deleteAlbum.destroy();

})();