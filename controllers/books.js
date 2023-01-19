import { Book } from '../models/book.js'

function index(req, res) {
  Book.find({})
  .then(books => {
    res.render('books/index', {
    title: "Books Homepage",
    books
    })
  })
  .catch(error => {
  console.log(error)
  res.redirect('/')})
}

function create(req, res) {
  req.body.owner= req.user.profile._id
  Book.create(req.body)
  .then(book => {
    res.redirect('/books')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/books')
  })
}

function show(req, res) {
  Book.findById(req.params.id)
  .populate("owner")
  .then(book => {
    res.render('books/show', {
    title: "Show",
    book, 
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/books')
  })
}

function bookLikes(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    book.bookLikes = !book.bookLikes
    book.save()
    .then(() => {
      res.redirect(`/books/${book._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/books')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
  })
}

function edit(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    res.render('books/edit', {
      title: "Edit Books",
      book
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/books')
  })
}

function addComment(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    req.body.commenter = req.user.profile._id
    book.comments.push(req.body)
    book.save()
    .then(()=> {
      res.redirect(`/books/${book._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/books')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
  })
}

function update(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    if (book.owner.equals(req.user.profile._id)) {
      book.updateOne(req.body)
      .then(() => {
        res.redirect("/books")
      })
    } else {
      throw new Error("not authorized")
    }
  })
  .catch(error => {
    console.log(error)
    res.redirect('/books')
  })
}

function deleteBook(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    if (book.owner.equals(req.user.profile._id)) {
      book.delete()
      .then(() => {
        res.redirect('/books')
      })
    } else {
      throw new Error("not authorized")
    }
  })
  .catch(error => {
    console.log(error)
    res.redirect('/books')
  })
}

export {
  index,
  create,
  show,
  bookLikes,
  edit,
  addComment,
  update,
  deleteBook as delete
}