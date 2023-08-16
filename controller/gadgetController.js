const gadgetController = {}

const {
    Gadget
} = require('../models')

gadgetController.barang = async (req, res) => {
    try {
        const data = await Gadget.findAll()

        const result = {
            status: true,
            data: data
        }
        res.json(result)
    } catch (error) {
        console.log(error, '<<<<Error findBarang Function>>>>')
    }
}
gadgetController.post = async (req, res) => {
    try {
        const {
            nama_barang,
            harga,
            kategori,
            gambar
        } = req.body
        const newGadget = await Gadget.create({
            nama_barang: nama_barang,
            harga: harga,
            kategori: kategori,
            gambar: gambar
        })

        res.status(200).json({
            status: true,
            data: {
                id: newGadget.id,
                nama_barang: newGadget.nama_barang,
                harga: newGadget.harga,
                kategori: newGadget.kategori,
                gambar: newGadget.gambar,
                createdAt: newGadget.createdAt,
                updatedAt: newGadget.updatedAt
            }
        })

    } catch (error) {
        console.log(error, '<<<<Error in Post Function>>>>')
    }
}

gadgetController.getById = async (req, res) => {
    try {
        const {
            id
        } = req.params

        const data = await Gadget.findByPk(id)
        if (data === null) {
            return res.status(404).json({
                status: false,
                message: `Data Items with id ${id} is not found`
            })
        }
        res.json({
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error, '<<<<Error in GetById>>>>')
    }
}

gadgetController.update = async (req, res) => {
    try {
        const {
            id
        } = req.params

        const {
            nama_barang,
            harga,
            kategori,
            gambar
        } = req.body

        const gadget = await Gadget.findByPk(id)

        if (!gadget) {
            return res.status(404).json({
                status: false,
                message: `data with id ${id} is not found`
            })
        }
        gadget.nama_barang = nama_barang
        gadget.harga = harga
        gadget.kategori = kategori,
        gadget.gambar = gambar
        gadget.updatedAt = new Date()

        gadget.save()

        res.json({
            status: true,
            data: {
                id: gadget.id,
                nama_barang: gadget.nama_barang,
                harga: gadget.harga,
                kategori: gadget.kategori,
                gambar: gadget.gambar,
                createdAt: gadget.createdAt,
                updatedAt: gadget.updatedAt
            }
        })

    } catch (error) {
        console.log(error, '<<<<Error in Update Function>>>>')
    }
}

gadgetController.delete = async (req, res) => {
    try {
        const {
            id
        } = req.params

        const gadget = await Gadget.findByPk(id)

        if (!gadget) {
            return res.status(404).json({
                status: false,
                message: `data with id ${id} is not found`
            })
        }

        gadget.destroy()

        res.json({
            status: true,
            message: `Success delete data with id ${id}`
        })


    } catch (error) {
        console.log(error, '<<<<Error in Delete Function>>>>')
    }
};

module.exports = gadgetController;