const mongoose = require("mongoose");

const LendSchema = new mongoose.Schema({
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
  studentName: {
    type: String,
    required: [true, "Must provide a Student name"],
    trim: true,
    maxlength: [100, "Student name cannot be more than 100 characters"],
  },
  StudentId: {
    type: String,
    required: [true, "Must provide a Student ID"],
    trim: true,
    maxlength: [50, "Student ID cannot be more than 50 characters"],
  },
  publishedDate: {
    type: Date,
    required: [true, "Must provide a Published date"],
  },
  dueDate: {
    type: Date,
    required: [true, "Must provide a Due date"],
  },
});

module.exports = mongoose.model("Lend", LendSchema);
