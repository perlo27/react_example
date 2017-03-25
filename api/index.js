const router = require('express').Router()
const mocks = require('./mock')
const assign = require('object-assign')

var array1 = [1, 2]

router.get('/article', (req, res, next) => {
    let articles = mocks.articles.map(article => assign({}, article, {
            text: undefined
        })),
        limit = Number(req.query.limit) || articles.length,
        offset = Number(req.query.offset) || 0

    res.json(articles.slice(offset, limit + offset))
})

router.get('/article/:id', (req, res, next) => {
    const article = mocks.articles.filter(article => article.id == req.params.id)[0]
    if (article) return res.json(article)

    res.status(404).json({ error: 'not found' })
})

router.post('/article', (req, res, next) => {
    const body = req.body
    const article = {
        text: body.text,
        id: Date.now().toString(),
        user: body.user,
        date: new Date()
    }
    mocks.articles.push(article)
    res.json(article)
})

router.get('/comment', (req, res, next) => {
    const aid = req.query.article
    if (aid) {
        const article = mocks.articles.find(article => article.id == aid)
        return res.json((article.comments || []).map(id => mocks.comments.find(comment => comment.id == id)))
    }

    let limit = Number(req.query.limit) || mocks.comments.length,
        offset = Number(req.query.offset) || 0
    res.json({
        total: mocks.comments.length,
        records: mocks.comments.slice(offset, limit + offset)
    })
})

router.post('/comment', (req, res, next) => {
    const comment = {
        id: Date.now().toString(),
        text: req.body.text,
        date: new Date(),
        user: req.body.user,
        article: req.body.article
    }
    const article = mocks.articles.filter(article => article.id == req.body.article)[0]
    const id = mocks.articles.indexOf(article)
    mocks.comments.push(comment)
    mocks.articles[id].comments.push(comment.id)
    res.json(comment)
})

router.post('/report', (req, res) => {
    res.json({})
})

module.exports = router
