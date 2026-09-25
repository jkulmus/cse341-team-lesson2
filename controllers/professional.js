const getData = (req, res) => {
    res.status(200).json({
        professionalName: 'Jacquelyn Kulmus'
    });
};

module.exports = { getData };