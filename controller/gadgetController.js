const gadgetController = {}

var barang = [
    {
        nama_barang: 'Samsung Galaxy S23 Ultra',
        harga: 20000000,
        kategori: 'Smartphone'
    },
    {
        nama_barang: 'Ipad Pro 2021',
        harga: 25000000,
        kategori: 'Tablet'
    },
    {
        nama_barang: 'Asus ROG Flow X13',
        harga: 40000000,
        kategori: 'Laptop'
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