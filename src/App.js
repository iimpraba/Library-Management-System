import React, { Component } from "react";
import "./styles.css"; // Import your CSS file

class LibraryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      books: [],
      borrowedBooks: [],
      studentName: "",
      bookTitle: "",
      selectedStudent: "",
      selectedBook: ""
    };
  }

  handleStudentNameChange = (e) => {
    this.setState({ studentName: e.target.value });
  };

  handleBookTitleChange = (e) => {
    this.setState({ bookTitle: e.target.value });
  };

  handleStudentSelectChange = (e) => {
    this.setState({ selectedStudent: e.target.value });
  };

  handleBookSelectChange = (e) => {
    this.setState({ selectedBook: e.target.value });
  };

  handleStudentRegistration = () => {
    const { studentName, students } = this.state;
    if (studentName.trim() === "") return;

    this.setState({
      students: [...students, studentName],
      studentName: ""
    });
  };

  handleBookRegistration = () => {
    const { bookTitle, books } = this.state;
    if (bookTitle.trim() === "") return;

    this.setState({
      books: [...books, bookTitle],
      bookTitle: ""
    });
  };

  handleLendBook = () => {
    const { selectedStudent, selectedBook, borrowedBooks } = this.state;
    if (selectedStudent === "" || selectedBook === "") return;

    this.setState({
      borrowedBooks: [
        ...borrowedBooks,
        { student: selectedStudent, book: selectedBook }
      ],
      selectedStudent: "",
      selectedBook: ""
    });
  };

  render() {
    const {
      students,
      books,
      borrowedBooks,
      studentName,
      bookTitle,
      selectedStudent,
      selectedBook
    } = this.state;

    return (
      <div>
        <h1>Library Management System</h1>

        <div>
          <h2>Students Registration</h2>
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={this.handleStudentNameChange}
          />
          <button onClick={this.handleStudentRegistration}>
            Register Student
          </button>
        </div>

        <div>
          <h2>Adding Book or Book Registration</h2>
          <input
            type="text"
            placeholder="Book Title"
            value={bookTitle}
            onChange={this.handleBookTitleChange}
          />
          <button onClick={this.handleBookRegistration}>Register Book</button>
        </div>

        <div>
          <h2>Lending Book by Students</h2>
          <select
            value={selectedStudent}
            onChange={this.handleStudentSelectChange}
          >
            <option value="">Select Student</option>
            {students.map((student, index) => (
              <option key={index} value={student}>
                {student}
              </option>
            ))}
          </select>
          <select value={selectedBook} onChange={this.handleBookSelectChange}>
            <option value="">Select Book</option>
            {books.map((book, index) => (
              <option key={index} value={book}>
                {book}
              </option>
            ))}
          </select>
          <button onClick={this.handleLendBook}>Lend Book</button>
        </div>

        <div>
          <h2>List all available books</h2>
          <ul>
            {books.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>List taken books by student wise</h2>
          <ul>
            {borrowedBooks.map((borrowedBook, index) => (
              <li key={index}>
                Student: {borrowedBook.student}, Book: {borrowedBook.book}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default LibraryApp;
