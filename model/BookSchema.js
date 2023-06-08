const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: [true, "Must provide a book name"],
    trim: true,
    maxlength: [100, "Book name cannot be more than 100 characters"],
  },
  authorName: {
    type: String,
    required: [true, "Must provide an author name"],
    trim: true,
    maxlength: [100, "Author name cannot be more than 100 characters"],
  },
  publisherName: {
    type: String,
    required: [true, "Must provide a publisher name"],
    trim: true,
    maxlength: [100, "Publisher name cannot be more than 100 characters"],
  },
  publishedYear: {
    type: Number,
    required: [true, "Must provide a published Year"],
    trim: true,
    maxlength: [4, "Publisher year cannot be more than 4 characters"],
  },
  genre: {
    type: String,
    required: [true, "Must provide a genre"],
    trim: true,
    maxlength: [100, "genre cannot be more than 100 characters"],
  },
  count: {
    type: Number,
    required: [true, "Must provide a count"],
    trim: true,
    maxlength: [5, "Count cannot be more than 5 characters"],
    },
    status: {
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model("Books", BookSchema);
