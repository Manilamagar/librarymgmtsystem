import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCalendar, faUser, faLanguage, faBookmark, faPrint } from '@fortawesome/free-solid-svg-icons';

const BookDetails = () => {
  // Mock book data
  const book = {
    title: "Advanced React Patterns",
    author: "Jane Smith",
    isbn: "978-3-16-148410-0",
    publishedYear: 2023,
    publisher: "Tech Publications",
    language: "English",
    pages: 320,
    description: "This comprehensive guide explores advanced React patterns and best practices for building scalable applications. Covering topics from component composition to performance optimization, it's essential for any serious React developer.",
    subjects: ["Computer Science", "Web Development", "JavaScript"],
    availableCopies: 3,
    totalCopies: 5,
    location: "Main Stacks, Shelf 42A",
    type: "Book"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Book Header */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4 lg:w-1/5">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-64">
                  <FontAwesomeIcon icon={faBookOpen} className="text-gray-300 text-6xl" />
                </div>
              </div>
              
              <div className="w-full md:w-3/4 lg:w-4/5">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
                <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {book.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${book.availableCopies > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {book.availableCopies > 0 ? `${book.availableCopies} Available` : 'Checked Out'}
                  </span>
                </div>
                
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Reserve Copy
                  </button>
                  <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                    Add to List
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Description</h2>
              <p className="text-gray-600 mb-6">{book.description}</p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">Subjects</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {book.subjects.map((subject, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-4">Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mt-1 mr-3 w-4" />
                    <span className="text-gray-600">{book.author}</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-500 mt-1 mr-3 w-4" />
                    <span className="text-gray-600">Published: {book.publishedYear}</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faLanguage} className="text-gray-500 mt-1 mr-3 w-4" />
                    <span className="text-gray-600">Language: {book.language}</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faPrint} className="text-gray-500 mt-1 mr-3 w-4" />
                    <span className="text-gray-600">Pages: {book.pages}</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faBookmark} className="text-gray-500 mt-1 mr-3 w-4" />
                    <span className="text-gray-600">ISBN: {book.isbn}</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">{book.location}</p>
                  <p className="text-sm text-gray-500 mt-1">Total copies: {book.totalCopies}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;