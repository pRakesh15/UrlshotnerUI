import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  const handleHomeClick = () => {
    // Simple navigation without React Router
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <div className="flex justify-center mb-6">
            <AlertTriangle 
              className="text-red-500" 
              size={80} 
              strokeWidth={1.5}
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The page you are looking for seems to have gone missing.
            It might have been moved or deleted.
          </p>
          <button 
            onClick={handleHomeClick}
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Return to Home
          </button>
        </div>
        <div className="mt-8 text-gray-500 text-sm">
          Need help? <a href="/support" className="text-blue-500 hover:underline">Contact Support</a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;