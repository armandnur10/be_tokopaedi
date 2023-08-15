const gadgetController = {}

var barang = [
    {
        nama_barang: 'Samsung Galaxy S23 Ultra',
        harga: 20000000,
        kategori: 'Smartphone',
        gambar: 'https://images.samsung.com/is/image/samsung/p6pim/uk/feature/164370272/uk-feature-galaxy-s-535141640?$FB_TYPE_I_JPG$'
    },
    {
        nama_barang: 'Ipad Pro 2021',
        harga: 25000000,
        kategori: 'Tablet',
        gambar: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/24143275/226374_iPad_Pro_12.9_M2_2022_DSeifert_0002.jpg'
    },
    {
        nama_barang: 'Asus ROG Flow X13',
        harga: 40000000,
        kategori: 'Laptop',
        gambar: 'https://www.yangcanggih.com/wp-content/uploads/2021/05/ASUS-ROG-Flow-X13-1.jpg'
    },
]

gadgetController.barang = (req, res) => {
    return res.status(200).send({
        status: true,
        data: barang
    });
}
gadgetController.post = (req, res) => {
    barang.push(req.body);
    return res.status(200).send({
        status: true,
        data: barang
    });
}

gadgetController.getById = (req, res) => {
    return res.status(200).send({
        status: true,
        data: barang[req.params.id - 1]
    })
}

gadgetController.update = (req, res) => {
    barang[req.params.id - 1] = req.body;
    return res.status(200).send({
        status: true,
        data: barang[req.params.id - 1]
    })
}

gadgetController.delete = (req, res) => {
    barang.splice(req.params.id - 1, 1)
    try {
        if (barang[req.params.id - 1] == null)
            throw new Error('data tidak ditemukan')
        return res.status(200).send({
            status: true,
            data: barang
        });
    } catch (err) {
        return res.status(404).send({
            status: false,
            data: err.message
        });
    }
};

module.exports = gadgetController;